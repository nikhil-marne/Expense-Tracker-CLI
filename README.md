# Expense Tracker CLI

A simple and efficient command-line expense tracker application built with **pure Node.js** (zero dependencies!) to help you manage your personal finances. Track expenses, view summaries, and stay on top of your spending habits.

> 🎯 **Built from scratch** - No external packages, just native Node.js modules!

## Features

- ✅ **Add Expenses**: Record expenses with title and amount
- ✅ **Update Expenses**: Modify existing expense entries
- ✅ **Delete Expenses**: Remove expenses from your records
- ✅ **List All Expenses**: View all recorded expenses in a formatted table
- ✅ **Summary Reports**: View total expenses for all time or specific months
- ✅ **Persistent Storage**: All data saved to JSON file in `files/` directory
- ✅ **Input Validation**: Robust validation for all user inputs
- ✅ **Error Handling**: Comprehensive error handling for edge cases
- ✅ **Help Command**: Built-in help menu for command reference

## Tech Stack

- **Runtime**: Node.js v22.19
- **Architecture**: Pure Node.js (no external dependencies!)
- **Argument Parsing**: Native `process.argv`
- **File Operations**: Native `fs` module (synchronous)
- **Data Storage**: JSON file system
- **Module System**: ES Modules

## Prerequisites

- Node.js 22.19 or higher (no additional dependencies required!)

## Installation

1. **Clone the repository**:
```bash
git clone https://github.com/nikhil-marne/Expense-Tracker-CLI.git
cd Expense-Tracker-CLI
```

2. **That's it!** No dependencies to install - this is a pure Node.js application.

3. **Test it out**:
```bash
node index.js help
```

## Usage

### Command Syntax

```bash
node index.js <command> [arguments]
```

### Add an Expense

```bash
node index.js add "Lunch" 20
# Output: Expense added successfully (ID: 1)

node index.js add "Coffee" 5
# Output: Expense added successfully (ID: 2)
```

### List All Expenses

```bash
node index.js list
# Output:
# ID:   Date:        Title:               Amount
# 1     28-12-2024   Lunch                20
# 2     28-12-2024   Coffee               5
```

### Update an Expense

```bash
node index.js update 1 "Lunch at Restaurant" 25
# Output: Expense updated successfully (ID: 1)
```

### Delete an Expense

```bash
node index.js delete 2
# Output: Expense deleted successfully (ID: 2)
```

### View Summary

```bash
# View total expenses for all time
node index.js summary
# Output: Total expenses: $45

# View expenses for a specific month (1-12)
node index.js summary 12
# Output: Total expenses for December: $45

node index.js summary 8
# Output: Total expenses for August: $0
# (or "No expenses found." if no expenses exist)
```

### Help Command

```bash
node index.js help
# Displays usage guide with all available commands
```

### Invalid Commands

```bash
node index.js
# Output: No input command.
# (Shows help menu)

node index.js invalid
# Output: Invalid Command.
# (Shows help menu)
```

## Project Structure

```
Expense-Tracker-CLI/
├── index.js              # Main CLI application and command handlers
├── fileHandler.js        # File operations (read/write JSON data)
├── ValidationUtils.js    # Input validation utilities
├── package.json          # Project metadata (ES modules configuration)
├── files/                # Auto-generated data directory
│   └── user.json        # Expense data storage
├── .gitignore           # Git ignore rules
└── README.md            # Project documentation
```

## Data Storage

### Storage Location
All expense data is stored in `files/user.json` (automatically created on first run).

### Data Structure

```json
{
  "nextId": 3,
  "expenses": {
    "1": {
      "id": 1,
      "title": "Lunch",
      "amount": 20,
      "createdAt": "2024-12-28T10:30:00.000Z"
    },
    "2": {
      "id": 2,
      "title": "Coffee",
      "amount": 5,
      "createdAt": "2024-12-28T14:15:00.000Z"
    }
  }
}
```

**Key Features:**
- **Object-based storage**: Expenses stored as objects with ID keys for O(1) lookup
- **Auto-incrementing IDs**: `nextId` tracks the next available ID
- **ISO timestamps**: Full timestamp stored for each expense
- **Date formatting**: Displayed as DD-MM-YYYY in list view

## Implementation Details

### Command Parsing

The application uses native `process.argv` to parse commands:

```javascript
const args = process.argv.slice(2)
const [command, ...rest] = args
```

Commands are mapped to handler functions in an object:

```javascript
const handlers = {
    add: ([title, amount]) => { /* ... */ },
    update: ([id, title, amount]) => { /* ... */ },
    delete: ([rawId]) => { /* ... */ },
    summary: ([month]) => { /* ... */ },
    list: (_args) => { /* ... */ },
    help: (_args) => { /* ... */ }
}
```

### Validation System

**ValidationUtils.js** provides two core validation functions:

1. **`validateTitle(title)`**
   - Trims whitespace
   - Ensures title is not empty
   - Returns validation result object

2. **`isValidNumber(value, valueName)`**
   - Validates positive numbers
   - Checks for finite values
   - Returns parsed number or error message

### File Handling

**FileHanlder** class (fileHandler.js) manages all file operations:

1. **`init()`**: Creates `files/` directory and initial `user.json` if they don't exist
2. **`readData()`**: Reads and parses expense data from JSON file
3. **`writeData(data)`**: Writes formatted JSON data to file

Uses synchronous `fs` methods for simplicity and reliability.

## Error Handling

The application includes comprehensive error handling for:

- ✅ Empty titles or amounts
- ✅ Invalid or negative amounts
- ✅ Non-existent expense IDs
- ✅ Invalid month numbers (must be 1-12)
- ✅ File I/O errors
- ✅ Invalid commands
- ✅ Missing arguments

All validation errors display user-friendly messages.

## Available Commands Reference

| Command | Arguments | Description | Example |
|---------|-----------|-------------|---------|
| `add` | `<title> <amount>` | Add a new expense | `node index.js add "Dinner" 30` |
| `update` | `<id> <title> <amount>` | Update an expense | `node index.js update 1 "Breakfast" 15` |
| `delete` | `<id>` | Delete an expense | `node index.js delete 2` |
| `list` | - | Show all expenses | `node index.js list` |
| `summary` | - | Show total expenses | `node index.js summary` |
| `summary` | `<month>` | Show monthly total | `node index.js summary 12` |
| `help` | - | Show help menu | `node index.js help` |

## Future Enhancements

- [ ] Add expense categories
- [ ] Implement monthly budgets with warnings
- [ ] CSV export functionality
- [ ] Edit history/audit trail
- [ ] Recurring expense support
- [ ] Multiple currency support
- [ ] Search and filter capabilities
- [ ] Budget vs actual comparison
- [ ] Export to PDF reports
- [ ] Global CLI command (npm link support)
- [ ] Flag-based arguments (e.g., `--title`, `--amount`)

## Development

### Adding New Features

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Commit: `git commit -m 'Add some feature'`
5. Push: `git push origin feature-name`
6. Submit a pull request

### Code Style

- Uses ES Modules (`"type": "module"` in package.json)
- Pure Node.js with no external dependencies
- Native `process.argv` for command parsing
- Synchronous `fs` operations for reliability
- Object-based data structure for efficient lookups
- Modular design with separate validation and file handling
- Descriptive variable names
- Error handling in all file operations

### Testing Your Changes

```bash
# Add test expense
node index.js add "Test" 100

# List to verify
node index.js list

# Test update
node index.js update 1 "Updated" 150

# Test delete
node index.js delete 1

# Test summary
node index.js summary
node index.js summary 12

# Test validation
node index.js add "" 100      # Should show error
node index.js add "Test" -50  # Should show error
node index.js delete 999      # Should show error
```

## Contributing

Contributions are welcome! Please:

1. Fork the project
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

For major changes, please open an issue first to discuss what you would like to change.

## Troubleshooting

**Issue**: `npm install` shows no packages installed
- **Solution**: This is expected! The project has zero dependencies and uses only native Node.js modules.

**Issue**: "Cannot find module" error
- **Solution**: Ensure you're running Node.js 22.19+ with ES module support

**Issue**: `files/user.json` not created
- **Solution**: Check write permissions in the project directory

**Issue**: "Invalid ID" when deleting
- **Solution**: Use `node index.js list` to see valid IDs first

**Issue**: No expenses shown in summary for specific month
- **Solution**: The summary uses the current year. Expenses from other years won't show.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Project inspired by [roadmap.sh](https://roadmap.sh/projects/expense-tracker)
- Built as a practice project for CLI development and file system operations
- Pure Node.js implementation - no external dependencies!

## Author

**Nikhil Marne**
- GitHub: [@nikhil-marne](https://github.com/nikhil-marne)
- Repository: [Expense-Tracker-CLI](https://github.com/nikhil-marne/Expense-Tracker-CLI)

## Support

If you found this project helpful, please consider:
- ⭐ Starring the repository
- 🐛 Reporting bugs via Issues
- 💡 Suggesting new features
- 🤝 Contributing via Pull Requests

---

**Happy Expense Tracking! 💰📊**

*Built with ❤️ using Pure Node.js v22.19*