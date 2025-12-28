export function validateTitle(title) {
    title = title?.trim()
    if (!title) {
        return {
            ok: false,
            message: "Title field cannot be empty!"
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
            message: "Invalid amount, Amount should be Positive Number"
        }
    }

    return {
        ok: true,
        amount: parsedAmount
    }
}