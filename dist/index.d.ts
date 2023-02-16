declare class LinkedList<T> {
    head: any;
    append(key: T): void;
    push(key: T): void;
    pop(): any;
    remove(key: number): void;
    bulkInsert(data: T[]): void;
    display(): void;
    reverse(): void;
}

export { LinkedList };
