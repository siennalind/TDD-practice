function greet (name) {
    if (!name) {
        return 'Hello, my friend.'
    } else if (typeof(name) === 'string' && name === name.toUpperCase()) {
        return `HELLO ${name}!`
    } else if (typeof(name) === 'object' && name.length === 2) {
        return `Hello, ${name[0]} and ${name[1]}.`
    } else if (typeof(name) === 'object' && name.length > 2) {
        const lengthMinusOne = name.length - 1
        const indexOfLastName = name.length - 1
        let returnString = 'Hello'

        for (let i = 0; i < lengthMinusOne; i++) {
            returnString += ` ${name[i]},`
        }

        returnString += ` and ${name[indexOfLastName]}.`

        return returnString
    } else {
        return `Hello, ${name}.`
    }
}

module.exports = greet