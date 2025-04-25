# Library Management System

A simple Library Management System built with Node.js, MongoDB, and Mongoose. This project provides a RESTful CRUD API to manage books in a library, allowing users to add, read, update, and delete book entries.

## Features

- **Create**: Add new books to the library collection.
- **Read**: Fetch details of all books or a specific book.
- **Update**: Modify details of an existing book.
- **Delete**: Remove a book from the library collection.
- **Database**: Uses MongoDB with Mongoose for data management.

## Technologies Used

- **Node.js**: Backend runtime environment for building the server.
- **Express.js**: Web framework for building the RESTful API.
- **MongoDB**: NoSQL database for storing book data.
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB and Node.js.

## Getting Started

### Prerequisites

- Node.js
- MongoDB (either locally or via a service like MongoDB Atlas)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AyushKumarMishra5/Library-Admin
   cd LibraryAdmin
   npm install
2. Create an .env file and store this
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000

