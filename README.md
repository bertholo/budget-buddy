# Budget Buddy

Welcome to Budget Buddy, a comprehensive expense and income tracker designed to help you manage your finances efficiently.

## Table of Contents

- [Introduction](#introduction)
- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Budget Buddy is a React-based web application integrated with a Node.js backend to enable users to track both income and expenses. This project aims to offer a user-friendly interface that facilitates adding, categorizing, and managing financial transactions.

## Demo

https://bertholo.github.io/budget-buddy/

## Features

- **Income Management**:
  - Add new income records.
  - View total income dynamically calculated from all records.
  - Delete specific income records.

- **Expense Management**:
  - Add new expense records.
  - View total expenses dynamically calculated from all records.
  - Delete specific expense records.

- **Category Filtering**:
  - Categorize each income and expense item for better organization.
  - Filter records by category to analyze spending patterns.

- **User-Friendly Interface**:
  - Responsive design using React Bootstrap for a better experience across devices.
  - Error handling and loading states to enhance usability.

- **Backend Integration**:
  - Communicates with a Node.js backend to fetch and store data.
  - Uses RESTful API endpoints for CRUD operations.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/bertholo/budget-buddy.git
   cd budget-buddy

2. Install dependencies:
    ```bash
    npm install

3. Set up the backend:
    ```bash
    cd ../back-end
    npm start
4. Open your browser and navigate to http://localhost:3000 to view the app.

## Usage

- **Adding Income/Expense:**

    - Click on the respective "Add Income" or "Add Expense" button.
    - Fill out the form with necessary details and submit.

- **Deleting Income/Expense:**

    - Click on the delete button(trash icon) to remove the item.

- **Viewing Total Income/Expense/balance:**

    - There are 3 diferent charts that can be viewed in the app: one in the Dashboard and the other in Transactions.
    - one line chart shows the balance across the months, one bar chart displays the total income and expenses on the current month, and another line chart that tracks the total income and expenses across the months.

- **Filtering by Category:**

    - Use category filters to view income or expenses specific to a category.

## Technologies Used

- **Frontend:**

    - React.js
    - React Bootrstrap
    - fetch APIs

- **Backend:**

    - Node.js
    - Express.js
    - MongoDB

## Contributing

    Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.