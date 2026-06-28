const products = [{
    name: 'Laptop',
    price: 500000.00,
    quantity: 2,
    get total() {
        return this.price * this.quantity;
    }
},

{
    name: 'Mouse',
    price: 5000.00,
    quantity: 5,
    get total() {
        return this.price * this.quantity;
    }
},
{
    name: 'Keyboard',
    price: 4000.00,
    quantity: 3,
    get total() {
        return this.price * this.quantity;
    }
},
{
    name: 'Light pen',
    price: 5000.00,
    quantity: 2,
    get total() {
        return this.price * this.quantity;
    }
},
];

const subTotal = products.reduce((acc, curr) => {
    return acc + curr.total;
}, 0);
const dis = subTotal * 0.05;
const tax = subTotal * 0.075;
const date = Date.now();
const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
});
const formattedTime = currentDate.toLocaleTimeString();
document.getElementById('sub-total').innerHTML = `₦${(subTotal).toLocaleString()}`;
document.getElementById('discount').innerHTML = `-₦${dis.toLocaleString()}`;
document.getElementById('tax').innerHTML = `₦${tax.toLocaleString()}`;
document.getElementById('total').innerHTML = `₦${(subTotal - dis + tax).toLocaleString()}`;
document.getElementById('id').innerHTML = `QS-${date}-001`;
document.getElementById('date').innerHTML = `${formattedDate}`;
document.getElementById('time').innerHTML = `${formattedTime}`;
document.getElementById("print-btn").addEventListener("click", () => {
    window.print();
});


console.log(formattedDate)
const data = document.getElementById("data");
let html = "";
products.forEach(product => {
    html += `
        <tr >
            <td class = "name">${product.name}</td>
            <td>${product.quantity}</td>
            <td>₦${(product.price).toLocaleString()}</td>
            <td>₦${(product.total).toLocaleString()}</td>
        </tr>
        `;
});


data.innerHTML = html;