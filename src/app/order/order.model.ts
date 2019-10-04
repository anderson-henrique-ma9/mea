class Order {
  constructor(
    public rua: string,
    public number: number,
    public complemento: string,
    public formaPagamento: string,
    public orderItems: OrderItem[] = []
  ) {}
}

class OrderItem {
  constructor(public quantity: number, public menuId: string) {}
}

export {Order, OrderItem}