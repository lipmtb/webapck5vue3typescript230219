export class LinkNode {
    data;
    next: LinkNode | null;
    constructor(data: string, next?: LinkNode) {
        this.data = data;
        this.next = next ?? null;
    }
}