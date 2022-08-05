const greet = require('./greeting')

describe('greet', () => {
    test('returns hello, name', () => {
        expect(greet('Bob')).toBe('Hello, Bob.')
        expect(greet(null)).toBe('Hello, my friend.')
        expect(greet('CARL')).toBe('HELLO CARL!')
        expect(greet(['Carl', 'Carla'])).toBe('Hello, Carl and Carla.')
    })
})