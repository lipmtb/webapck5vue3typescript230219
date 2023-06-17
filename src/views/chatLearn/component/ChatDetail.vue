<template>
    <div class="chat-detail-item" :class="{ 'assistant': chatItemData.userId === 'assistant' }">
        <div v-if="userIdRef === chatItemData.userId" class="chat-owner">
            <span class="send-time">{{ chatItemData.time }}</span>
            <span class="from-user">{{ chatItemData.userName }}</span>
        </div>
        <div v-else class="chat-from">
            <span class="from-user">{{ chatItemData.userName }}</span>
            <span class="send-time">{{ chatItemData.time }}</span>
        </div>
        <div v-if="userIdRef === chatItemData.userId" class="content-owner">
            <span class="content-desc">{{ chatItemData.content }}</span>
        </div>
        <div v-else class="content-other" @click="copyTextToSnipase">
            <ul class="botContentList">
                <li v-for="chatItem in botContentArray">
                    <span>{{ chatItem.splitContent }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>
  
<script lang="ts">
import { copyText } from "@/util/copyText";
import { defineComponent, toRef, computed, reactive, ComputedRef } from "vue";
export default defineComponent({

    name: "chatDetail",
    props: {
        chatItem: {
            type: Object,
            default: {}
        },
        userId: String
    },
    setup(this, props) {
        const chatItemData = toRef(props, "chatItem");
        const userIdRef = toRef(props, "userId");
        const botContentArray: ComputedRef<{ splitContent: string }[]> = computed(() => {
            if (chatItemData?.value?.userId === "assistant") {
                const botContent = chatItemData?.value?.content;
                return botContent.split(/```|。|：/).map((item: string) => ({ splitContent: item }));
            } else {
                return [];
            }
        })
        const findulParent = (elem: HTMLElement) => {
            if (elem?.nodeName === "ul") {
                return elem;
            }
            let resultElement = elem;
            while (resultElement?.parentElement) {
                resultElement = resultElement?.parentElement;
                console.log("resultElement?.nodeName ", resultElement?.nodeName);
                if (resultElement?.nodeName === "UL") {
                    break;
                }
            }
            return resultElement;
        }
        const copyTextToSnipase = (event: MouseEvent) => {
            console.log("event", event);
            const elem = event?.target as HTMLElement;
            if (!elem) {
                return;
            }
            const ulElem = findulParent(elem);
            const text=ulElem.innerText;
            copyText(text);
            alert("复制成功");
        }

        return {
            chatItemData,
            userIdRef,
            botContentArray,
            copyTextToSnipase
        }
    },
})

</script>
  
<style lang="less" scoped>
.chat-detail-item {
    margin: 8px 0;
    display: flow-root;
}

.chat-from {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .from-user {
        margin-right: 6px;
    }
}

.chat-owner {
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.from-user {
    font-size: 14px;
    font-weight: 600;
    font-family: cursive;
}

.send-time {
    font-size: 12px;
    color: #a7a7a7;
    margin-right: 8px;
}



.content-other,
.content-owner {
    padding: 2px 6px;

    .content-desc {
        word-break: break-all;
        word-wrap: break-word;
        font-size: 18px;
    }
}

.content-owner {
    float: right;
}

.content-other {
    float: left;
    &:hover{
        background-color: lightblue;
    }
    .botContentList {
        padding-left: 6px;
        margin: 0;
        list-style: none;
    }
}
</style>
  