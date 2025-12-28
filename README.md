# Expense Tracker CLI

A simple and efficient command-line expense tracker application built with Node.js to help you manage your personal finances. Track expenses, view summaries, and stay on top of your spending habits.

## Features

- ✅ **Add Expenses**: Record expenses with description and amount
- ✅ **Update Expenses**: Modify existing expense entries
- ✅ **Delete Expenses**: Remove expenses from your records
- ✅ **List All Expenses**: View all recorded expenses in a formatted table
- ✅ **Summary Reports**: View total expenses for all time or specific months
- ✅ **Persistent Storage**: All data saved to JSON file
- ✅ **Input Validation**: Robust validation for all user inputs
- ✅ **Error Handling**: Comprehensive error handling for edge cases

## Tech Stack

- **Runtime**: Node.js v22.19
- **CLI Framework**: Commander.js
- **Data Storage**: JSON file system
- **Language**: JavaScript (ES6+)

## Prerequisites

- Node.js 22.19 or higher
- npm (comes with Node.js)

## Installation

1. **Clone the repository**:
```bash
git clone https://github.com/nikhil-marne/Expense-Tracker-CLI.git
cd Expense-Tracker-CLI
```

2. **Install dependencies**:
```bash
npm install
```

3. **Link the CLI globally** (optional):
```bash
npm link
```

After linking, you can use `expense-tracker` command from anywhere in your terminal.

## Usage

### Add an Expense

```bash
node index.js add --description "Lunch" --amount 20
# Output: Expense added successfully (ID: 1)
```

### List All Expenses

```bash
node index.js list
# Output:
# ID  Date       Description  Amount
# 1   2024-08-06  Lunch        $20
# 2   2024-08-06  Dinner       $10
```

### Update an Expense

```bash
node index.js update --id 1 --description "Lunch at Restaurant" --amount 25
# Output: Expense updated successfully (ID: 1)
```

### Delete an Expense

```bash
node index.js delete --id 2
# Output: Expense deleted successfully
```

### View Summary

```bash
# View total expenses
node index.js summary
# Output: Total expenses: $30

# View expenses for a specific month (current year)
node index.js summary --month 8
# Output: Total expenses for August: $30
```

### Using Global Command (after npm link)

If you've linked the package globally, replace `node index.js` with `expense-tracker`:

```bash
expense-tracker add --description "Coffee" --amount 5
expense-tracker list
expense-tracker summary
```

## Project Structure

```
Expense-Tracker-CLI/
├── index.js              # Main CLI application and command definitions
├── fileHandler.js        # File operations (read/write JSON data)
├── ValidationUtils.js    # Input validation utilities
├── package.json          # Project dependencies and scripts
├── expenses.json         # Data storage file (auto-generated)
├── .gitignore           # Git ignore rules
└── README.md            # Project documentation
```

## Data Storage

Expenses are stored in a JSON file (`expenses.json`) with the following structure:

```json
{
  "expenses": [
    {
      "id": 1,
      "date": "2024-12-28",
      "description": "Lunch",
      "amount": 20
    },
    {
      "id": 2,
      "date": "2024-12-28",
      "description": "Coffee",
      "amount": 5
    }
  ]
}
```

## Error Handling

The application includes comprehensive error handling for:

- ✅ Invalid or negative amounts
- ✅ Non-existent expense IDs
- ✅ Missing required arguments
- ✅ Invalid date formats
- ✅ File I/O errors
- ✅ Duplicate expense IDs
- ✅ Invalid month numbers (1-12)

## Validation

The `ValidationUtils.js` module provides validation for:

- Amount validation (positive numbers only)
- ID validation (must exist in database)
- Description validation (non-empty strings)
- Month validation (1-12)
- Date format validation

## Available Scripts

```bash
# Run the application
node index.js <command> [options]

# Install dependencies
npm install

# Link globally (use 'expense-tracker' command)
npm link

# Unlink global command
npm unlink
```

## Future Enhancements

- [ ] Add expense categories
- [ ] Implement monthly budgets with warnings
- [ ] CSV export functionality
- [ ] Data visualization (charts/graphs)
- [ ] Recurring expense support
- [ ] Multiple currency support
- [ ] Search and filter capabilities
- [ ] Budget vs actual comparison
- [ ] Export to PDF reports

## Development

### Adding New Features

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Commit: `git commit -m 'Add some feature'`
5. Push: `git push origin feature-name`
6. Submit a pull request

### Code Style

- Use ES6+ features
- Follow modular design patterns
- Add JSDoc comments for functions
- Handle errors gracefully
- Write clean, readable code

## Contributing

Contributions are welcome! Please:

1. Fork the project
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

For major changes, please open an issue first to discuss what you would like to change.

## Troubleshooting

**Issue**: Command not found after `npm link`
- **Solution**: Make sure you have proper permissions and Node.js is in your PATH

**Issue**: Cannot write to expenses.json
- **Solution**: Check file permissions and ensure the directory is writable

**Issue**: Invalid date format
- **Solution**: Dates are automatically generated in YYYY-MM-DD format

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Project inspired by [roadmap.sh](https://roadmap.sh/projects/expense-tracker)
- Built as a practice project for CLI development and file system operations
- Thanks to the Node.js and Commander.js communities

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

*Built with ❤️ using Node.js v22.19*