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


export function isValidNumber(value, valueName) {


    if (!value?.trim()) {
        return {
            ok: false,
            message: `${valueName} field cannot be empty!`
        }
    }

    const parsedValue = Number(value)

    if (!Number.isFinite(parsedValue) || parsedValue < 0) {
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