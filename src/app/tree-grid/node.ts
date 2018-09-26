export class Node {
    private static idNum: number = 100;
    public id: number = 100;
    public label: string = '';
    public value: string|number = '';
    public children?: Array<Node> = [];
    public isOpen?: boolean = false;
    public isSelected?: boolean = false;

    constructor(nodeObj?: Node) {
        if (nodeObj) {
            this.id = this.generateId();
            this.label = nodeObj.label || '';
            this.value = nodeObj.value || '';
            this.children = nodeObj.children || [];
            this.isOpen = nodeObj.isOpen || false;
            this.isSelected = nodeObj.isSelected || false;
        }
    }

    generateId(): number {
        return Node.idNum++;
    }

}
