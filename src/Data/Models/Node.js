export class Node {
    #data
    #next
    constructor(element) {
        this.#data = element
        this.#next = undefined
    }

    getData(){
        return this.#data
    }

    getNext(){
        return this.#next
    }

    setNext(node){
        this.#next = node
    }
}
