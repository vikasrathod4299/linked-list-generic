class ListNode<T> {
  data: T;
  next: any;
  constructor(data: T, next = null) {
    this.data = data;
    this.next = next;
  }
}

export class LinkedList<T> {
  head: any = null;

  public append(key: T) {
    const newNode = new ListNode<T>(key);
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

  public push(key: T): void {
    const newNode = new ListNode<T>(key);
    if (this.head) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      this.head = newNode;
    }
  }

  public pop() {
    let temp: any = this.head;
    let prev: any = null;
    while (temp.next) {
      prev = temp;
      temp = temp.next;
    }
    let popedNode = prev.next;
    prev.next = null;
    return popedNode;
  }

  public remove(key: number) {
    let temp: any = this.head;
    let prev: any = null;

    if (this.head.data === key) {
      temp = this.head.next;
      this.head = temp;
    }

    while (temp) {
      if (temp.data === key) break;
      prev = temp;
      temp = temp.next;
    }

    if (temp) {
      prev.next = temp.next;
      temp.next = null;
    }
  }

  public bulkInsert(data: T[]) {
    data.forEach((ele) => {
      this.append(ele);
    });
  }

    public display():void{
        let temp=this.head
        while(temp){
            console.log(temp)
            temp=temp.next
        }
    } 

  public reverse() {
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
}

