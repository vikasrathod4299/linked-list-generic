// src/index.ts
var ListNode = class {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
};
var LinkedList = class {
  constructor() {
    this.head = null;
  }
  append(key) {
    const newNode = new ListNode(key);
    if (this.head) {
      let temp = this.head;
      while (temp.next) {
        temp = temp.next;
      }
      temp.next = newNode;
    } else {
      this.head = newNode;
    }
  }
  push(key) {
    const newNode = new ListNode(key);
    if (this.head) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      this.head = newNode;
    }
  }
  pop() {
    let temp = this.head;
    let prev = null;
    while (temp.next) {
      prev = temp;
      temp = temp.next;
    }
    let popedNode = prev.next;
    prev.next = null;
    return popedNode;
  }
  remove(key) {
    let temp = this.head;
    let prev = null;
    if (this.head.data === key) {
      temp = this.head.next;
      this.head = temp;
    }
    while (temp) {
      if (temp.data === key)
        break;
      prev = temp;
      temp = temp.next;
    }
    if (temp) {
      prev.next = temp.next;
      temp.next = null;
    }
  }
  bulkInsert(data) {
    data.forEach((ele) => {
      this.append(ele);
    });
  }
  display() {
    let temp = this.head;
    while (temp) {
      console.log(temp);
      temp = temp.next;
    }
  }
  reverse() {
    let temp = this.head;
    let prev;
    while (temp) {
      const next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    this.head = prev;
  }
};
export {
  LinkedList
};
