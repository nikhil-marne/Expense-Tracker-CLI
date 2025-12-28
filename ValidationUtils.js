export function validateTitle(title) {
    title = title?.trim()
    if (!title) {
        return {
            ok: false,
            message: "Title field cannot be empty!"
        }
    } else {
        return {
            ok: true,
            title
        }
    }
}

export function validAmount(amount) {
    if (amount === null || amount.trim() === "") {
        return {
            ok: false,
            message: "Amount field cannot be empty!"
        }
    }

    const parsedAmount = parseFloat(amount)

    if (Number.isNaN(parsedAmount) || parsedAmount < 0) {
        return {
            ok: false,
            message: "Invalid amount, Amount should be Positive Number."
        }
    }

    return {
        ok: true,
        amount: parsedAmount
    }
}

export function isValidNumber(value, valueName) {
    if (value === null || value.trim() === "") {
        return {
            ok: false,
            message: `${valueName} field cannot be empty!`
        }
    }

    const parsedValue = Number(value)

    if (Number.isNaN(parsedValue) || parsedValue < 0) {
        return {
            ok: false,
            message: `Invalid ${valueName}, ${valueName} should be Positive Number.`
        }
    }

    return {
        ok: true,
        number: parsedValue
    }
}