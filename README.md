# Expense Tracker App

This **Expense Tracker App** is a web application designed to help users manage their expenses efficiently. The app is built with **HTML**, **CSS**, **JavaScript**, **Express.js**, and **MongoDB**, providing a simple and intuitive way for users to track their spending and organize their finances.

## Features

- **User Authentication**: Secure sign-up and login functionality.
- **Expense Management**: Users can add, update, and delete their expenses.
- **Responsive UI**: The app is mobile-friendly and adjusts to different screen sizes.
- **Real-time Data**: Data is stored in a MongoDB database and updated in real time.
- **User-Specific Data**: Each user can only see their own expense data.

## Technologies Used

- **Frontend**:  
  - HTML  
  - CSS  
  - JavaScript  
- **Backend**:  
  - Node.js  
  - Express.js  
- **Database**:  
  - MongoDB  
- **Authentication**:  
  - JWT (JSON Web Tokens) for secure login

## Installation

### Prerequisites

To run this app locally, make sure you have the following installed:

- **Node.js** and **npm** (Node Package Manager)  
- **MongoDB** (local or remote instance)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/expense-tracker-app.git
   ```

2. Navigate into the project folder:

   ```bash
   cd expense-tracker-app
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Set up environment variables in a `.env` file. Example:

   ```
   MONGO_URI=your_mongo_database_uri
   JWT_SECRET=your_jwt_secret_key
   ```

5. Start the development server:

   ```bash
   npm start
   ```

6. Open your browser and go to `http://localhost:5000` to view the app.

## Usage

- **Sign up**: Create a new account with your email and password.
- **Login**: Use your credentials to access your expense data.
- **Manage Expenses**: Add, update, or delete expenses easily.

## Future Improvements

- Adding categories for expenses (e.g., Food, Entertainment, Bills).
- Integration of charts/graphs for visualizing spending patterns.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **MongoDB**: For providing a powerful NoSQL database.
- **Express.js**: For building the backend easily.
- **JWT**: For secure user authentication.
