// object property shorthand

const name = 'fatwa'
const userAge = 16

const user = {
    name,
    age: userAge,
    location: 'blitar'
}

console.log(user);

//object destructuing 

const product = {
    label: 'Red note',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}

// const label = product.label
// const stock = product.stock

// const {label: productLabel, stock, rating= 5} = product
// console.log(productLabel);
// console.log(stock);
// console.log(rating);

const transaction = (type, { label, stock = 0 } = {}) => {
    console.log(type, label, stock);
}

transaction('order', product)