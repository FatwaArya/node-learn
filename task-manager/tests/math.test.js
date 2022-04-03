const { add, calculate, fahrenheitToCelsius, celsiusToFahrenheit } = require('../src/math');

test('Should calculate total with tip', () => {
    const total = calculate(10, .2);
    expect(total).toBe(12)
})

test('Should calculate total with default tip', () => {
    const total = calculate(10)
    expect(total).toBe(12.5)
})

test('Should convert 32 F to 0 C', () => {
    const total = fahrenheitToCelsius(32)
    expect(total).toBe(0)
})
test('Should convert 0 C to 32 F', () => {
    const total = celsiusToFahrenheit(0)
    expect(total).toBe(32)
})
// test('Async test demo', (done) => {
//     setTimeout(() => {
//         expect(1).toBe(2)
//         done()
//     }, 2000)
// })
// test('Should add two numbers', (done) => {
//     add(2, 3).then((sum) => {
//         expect(sum).toBe(5)
//         done()
//     })
// })
test('Should add two numbers async/await', async () => {
    const sum = await add(10, 22)
    expect(sum).toBe(32)
})