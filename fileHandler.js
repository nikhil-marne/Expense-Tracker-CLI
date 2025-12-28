import fs from "node:fs"
import path from "node:path"

export class FileHanlder {
    BASE_DIR;
    FILES_DIR;
    USER_FILE

    constructor() {
        this.BASE_DIR = path.resolve(".");
        this.FILES_DIR = path.join(this.BASE_DIR, "files");
        this.USER_FILE = path.join(this.FILES_DIR, "user.json")

        this.init();
    }

    init() {
        try {
            // CHECK IF STORAGE DIR EXISTS IF NOT CREATE
            if (!fs.existsSync(this.FILES_DIR)) {
                fs.mkdirSync(this.FILES_DIR, { recursive: true })
            }

            // CHECK IF USER EXPNESES FILE EXISTS IF NOT CREATE INITIAL FILE
            if (!fs.existsSync(this.USER_FILE)) {
                this.writeData({
                    nextId: 1,
                    expenses: {}
                })
            }
        } catch (err) {
            console.log(`Application Error: ${err.message}`)
        }
    }

    writeData(data) {
        try {
            fs.writeFileSync(this.USER_FILE, JSON.stringify(data, null, 2), "utf-8")
        } catch (err) {
            console.log(`Application Error: ${err.message}`)
        }
    }

    readData() {
        try {
            const data = fs.readFileSync(this.USER_FILE, "utf-8")
            return JSON.parse(data)
        } catch (err) {
            console.log(`Application Error: ${err.message}`)
        }
    }
}

