function Customer(id, name) {
    this.id = id;
    this.name = name;
}

Customer.prototype.getDetails = function () {
    return "Customer Name: " + this.name + " Customer Id: " + this.id;
}

var cust1 = new Customer(12, "abc");
var cust2 = new Customer(10, "xyz");

console.log(cust1)
console.log(cust2)
console.log(cust1.getDetails())
console.log(cust2.getDetails())

console.log("cust1.__proto__ == Customer.prototype: " + (cust1.__proto__ == Customer.prototype))
console.log("cust2.__proto__ == Customer.prototype: " + (cust2.__proto__ == Customer.prototype))
console.log("cust1.__proto__ == cust2.__proto__: " + (cust1.__proto__ == cust2.__proto__))

console.log("Customer.prototype.__proto__ == Object.prototype: " + (Customer.prototype.__proto__ == Object.prototype))
console.log("Object.prototype.__proto__: " + Object.prototype.__proto__)
console.log(Customer.prototype.__proto__);

var obj = {}
console.log("Obj: " + obj)