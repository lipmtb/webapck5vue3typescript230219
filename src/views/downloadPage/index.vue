<template>
  <div class="downloadPage">
    <input v-model="currentInputRef" />
    <button @click="downloadFile">下载</button>
  </div>
</template>

<script lang="ts">
import downloadLinuxFile from "@/service/download";
import { defineComponent, onMounted, ref } from "vue";
const checkDownloadPath = (path: string) => {
  const pathRegMatch = /^(\.|(\.\.))?(\/\w+)+(\.\w+)$/;
  return path && pathRegMatch.test(path);
};

const getFileName = (path: string) => {
  return path.match(/^(\.|\.\.)?(\/\w+)*(\/\w+\.\w+)$/)?.[3] || "test";
};

export default defineComponent({
  setup(this) {
    const currentInputRef = ref();
    const downloadFile = async () => {
      try {
        const downloadPath = currentInputRef.value;
        if (!downloadPath || !checkDownloadPath(downloadPath)) {
          return;
        }
        const fileResponse = await downloadLinuxFile(downloadPath);
        const url = window.URL.createObjectURL(fileResponse);
        const anchor = document.createElement("a");
        anchor.href = url;
        anchor.download = getFileName(downloadPath);
        document.body.appendChild(anchor);
        anchor.click();
        setTimeout(() => {
          document.body.removeChild(anchor);
        });
      } catch (error) {
        console.error(error);
      }
    };
    return {
      currentInputRef,
      downloadFile,
    };
  },
  method() {},
});
</script>

<style lang="less"></style>
