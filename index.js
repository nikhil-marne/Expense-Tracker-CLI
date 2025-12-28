import { FileHanlder } from "./fileHandler.js";
import { validateTitle, validAmount } from "./ValidationUtils.js";


const args = process.argv.slice(2)
const fileHandler = new FileHanlder();

const handlers = {
    add: ([title, amount]) => {
        const titleCheck = validateTitle(title)

        if (!titleCheck.ok) {
            console.log(titleCheck.message)
            return
        }

        const amountCheck = validAmount(amount)

        if (!amountCheck.ok) {
            console.log(amountCheck.message)
            return
        }
    },
    update: () => { },
    delete: () => { },
    summary: () => { },
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