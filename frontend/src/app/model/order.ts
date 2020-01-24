export class Order {
    constructor(public id: string,
        public customerId: string,
        public createdDate: Date,
        public cartId: string) { }
}
