import Order from "../src/models/Order";
import Product from "../src/models/Product";

test("Should create product with id = 1", () => {
    var produto = new Product("123", "Pizza", 1.99, "1",new Date("2021-11-28T23:00:00.000Z"), new Date("2021-08-04T23:00:00.000Z"));
    expect(produto.id).toBe("1");
});


test("should create order with value total calculated", () => {
    var produto = new Product("123", "Pizza", 1.99, "1",new Date("2021-11-28T23:00:00.000Z"), new Date("2021-08-04T23:00:00.000Z"));
    var produto2 = new Product("123", "Trakina", 1.99, "1",new Date("2021-11-28T23:00:00.000Z"), new Date("2021-08-04T23:00:00.000Z"));
    var order = new Order("1", new Date("2021-11-28T23:00:00.000Z"), new Date("2021-11-28T23:00:00.000Z"));
    order.addItem(produto, 2);
    order.addItem(produto2, 1);

    expect(order.total).toBe(3.98);
});

