const greet = require('./greeting')

describe('greet', () => {
    test('returns hello, name', () => {
        expect(greet('Bob')).toBe('Hello, Bob.')
    })
})