import { Node } from "./Node.js";

export class LinkedList {
    #count;
    #head;

    constructor() {
        this.#count = 0;
        this.#head = undefined;
    }

    push(item) {
        const node = new Node(item);
        let current;
        if (this.#head == null) {
            this.#head = node;
        } else {
            current = this.#head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = node;
        }
        this.#count++;
    }

    getElementAt(index) {
        if (index >= 0 && index < this.#count) {
            let node = this.#head;
            for (let i = 0; i < index && node != null; i++) {
                node = node.next;
            }
            return node;
        }
        return undefined;
    }

    isEmpty() {
        return this.size() === 0;
    }

    size() {
        return this.#count;
    }
}
