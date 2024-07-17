# JobConnect

JobConnect is a dynamic job portal built with the MERN stack, React, and Redux. It connects job seekers with employers, offering an intuitive platform where candidates can apply for jobs and employers can post and recruit for open positions.

## Features

- **Job Seekers**: Browse job listings, apply for positions, and manage your applications.
- **Employers**: Post job openings, review applications, and recruit top talent.
- **User Authentication**: Secure login and registration for both job seekers and employers.
- **Dashboard**: Personalized dashboard for managing job postings and applications.
- **Search and Filter**: Advanced search and filtering options to find the perfect job or candidate.

## Tech Stack

- **Frontend**: React, Redux
- **Backend**: Express.js, Node.js, bcrypt, cloudinary, cookie-parser, cors, dotenv, express-fileupload, validator
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1.  **Clone the repository**

    ```bash
    git clone https://github.com/yourusername/jobconnect.git
    cd jobconnect
    ```

2.  **Install dependencies**

    # Install server dependencies

        cd server
        npm install

    # Install client dependencies

        cd ../client
        npm install

3.  **Set up environment variables**

    Create a .env file in the server directory and add the following variables:

    PORT=4000
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret

4.  **Run the application**

    # Run server

        cd server
        npm run dev

    # Run client

        cd ../client
        npm start

    The application will be running at http://localhost:3000.

### Folder Structure

    jobconnect/
    ├── client/ # Frontend code
    │ ├── public/ # Public assets
    │ ├── src/ # Source code
    │ ├── .env # Environment variables for frontend
    │ ├── package.json # Frontend dependencies
    │ └── ...
    ├── server/ # Backend code
    │ ├── config/ # Configuration files
    │ ├── controllers/ # API controllers
    │ ├── models/ # Database models
    │ ├── routes/ # API routes
    │ ├── .env # Environment variables for backend
    │ ├── server.js # Main server file
    │ ├── package.json # Backend dependencies
    │ └── ...
    └── README.md

### Contributing

    Contributions are welcome! Please fork the repository and submit a pull request.

### License

    This project isn't licensed yet.

### Contact

    For any inquiries or feedback, please contact us at chatter123app@gmail.com.

Feel free to modify the contents as per your project's specifics.

Happy Coding😊
