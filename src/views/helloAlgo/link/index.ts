import { LinkNode } from "./linkNode";


// 递归遍历链表
export const recurLinkList = (root: LinkNode) => {

    if (!root) {
        return;
    }
    console.log("遍历", root.data);
    if (root.next) {
        recurLinkList(root.next);
    }
}

export const getLastNode: (root: LinkNode) => LinkNode = (root: LinkNode) => {
    return !root?.next ? root : getLastNode(root.next);
}

// 链表的逆置简洁
export const reverseLinkNormal: (root: LinkNode | null) => LinkNode | null = (root: LinkNode | null) => {
    if (!root?.next) {
        return root;
    }
    const lastNode = reverseLinkNormal(root.next);
    root.next.next = root;
    root.next = null;
    return lastNode;
}


// 链表的逆置
export const reverseLink = (root: LinkNode | null, newRoot: LinkNode[] | null) => {
    if (!root) {
        return;
    }
    reverseLink(root.next, newRoot);
    console.log("root item:", root);
    if (root.next) {
        root.next.next = root;
    } else {
        newRoot?.push?.(root);
    }
}
