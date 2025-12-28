import { FileHanlder } from "./fileHandler.js";
import { isValidNumber, validateTitle } from "./ValidationUtils.js";


const args = process.argv.slice(2)
const fileHandler = new FileHanlder();

const handlers = {
    add: ([title, amount]) => {

        const titleCheck = validateTitle(title)

        if (!titleCheck.ok) return console.log(titleCheck.message)

        const isValidNum = isValidNumber(amount, "Amount")

        if (!isValidNum.ok) return console.log(isValidNum.message)

        const { nextId, expenses } = fileHandler.readData()

        const newExpenses = {
            id: nextId,
            title: titleCheck.title,
            amount: isValidNum.number,
            createdAt: new Date().toISOString()
        }

        fileHandler.writeData({
            nextId: nextId + 1,
            expenses: {
                ...expenses,
                [nextId]: newExpenses
            }
        })

        console.log(`Expense added successfully (ID: ${nextId})`)
    },

    update: ([id, title, amount]) => {

        const isValidNum = isValidNumber(id, "ID")

        if (!isValidNum.ok) return console.log(isValidNum.message)

        const titleCheck = validateTitle(title)

        if (!titleCheck.ok) return console.log(titleCheck.message)

        const amountCheck = isValidNumber(amount, "Amount")

        if (!amountCheck.ok) return console.log(amountCheck.message)

        const { nextId, expenses } = fileHandler.readData()

        if (!expenses[isValidNum.number]) return console.log("Invalid ID.")

        expenses[isValidNum.number].title = titleCheck.title
        expenses[isValidNum.number].amount = amountCheck.number

        fileHandler.writeData({
            nextId,
            expenses
        })

        console.log(`Expense updated successfully (ID: ${isValidNum.number})`)
    },

    delete: ([rawId]) => {
        const isValidNum = isValidNumber(rawId, "ID")

        if (!isValidNum.ok) return console.log(isValidNum.message)

        const { nextId, expenses } = fileHandler.readData()

        if (!expenses[isValidNum.number]) return console.log("Invalid ID.")

        delete expenses[isValidNum.number]

        fileHandler.writeData({
            nextId,
            expenses
        })

        console.log(`Expense deleted successfully (ID: ${isValidNum.number})`)
    },
    summary: ([month]) => {
        const isValidNum = isValidNumber(month, "Month")

        const { _nextId, expenses } = fileHandler.readData()
        let expenseTotal = 0;

        if (isValidNum.ok && isValidNum.number) {
            expenseTotal = Object.values(expenses)
                .filter(expense => {

                    const date = new Date(expense.createdAt);

                    return (
                        date.getUTCMonth() + 1 === isValidNum.number &&
                        date.getUTCFullYear() === new Date().getUTCFullYear()
                    )
                })
                .reduce((sum, expense) => sum + expense.amount, 0);

        } else {
            expenseTotal = Object.values(expenses)
                .reduce((sum, expense) => sum + expense.amount, 0);

        }

        if (expenseTotal === 0) {
            console.log("No expenses found.")
        } else {
            console.log(`Total expenses: $${expenseTotal}`)
        }
    },
    list: () => { }
}




if (args.length) {
    const [command, ...rest] = args
    const handler = handlers[command]

    if (!handler) {
        console.log("Invalid Command.")
    } else {
        handler(rest)
    }
} else {
    console.log("No input command.")
}