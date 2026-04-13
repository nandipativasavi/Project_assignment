Project:  Admin Dashboard with Analytics & User Management

About the Project

This project is a full-stack admin dashboard built using the MEAN stack (MongoDB, Express.js, Angular, and Node.js).

The idea behind this project was to create a system where an admin can log in, view useful information about users, and manage them easily. I tried to keep the application simple, clean, and close to how real world admin panels work.

Instead of just building a UI, I focused on connecting everything properly frontend, backend, and database so that the data shown on the dashboard is meaningful.

What This Project Does

The application allows an admin to:

 Log in securely
 View important user statistics
 See data in the form of charts
 Manage users (add, edit, delete)
 Access features based on role (admin/user)

Technologies Used

## Frontend

 Angular
 HTML & CSS
 Chart.js (for graphs)

## Backend

1. Node.js
2.Express.js

## Database

1. MongoDB

## Security

1. JWT (JSON Web Tokens) for authentication
2. Role-based access control

##  Authentication & Security

I implemented login and registration using JWT.

1. When a user logs in, a token is generated
2. This token is used to access protected routes
3. Only admin users can manage other users
4. Normal users have limited access

## Dashboard Features

The dashboard shows key information in a simple and clear way.

## It includes:

Total number of users
2. Active users
3. Inactive users

## Charts used:

* Line chart → shows user growth
* Bar chart → shows activity trends
* Doughnut chart → shows user distribution

All the data is fetched from the backend, so it updates dynamically.


User Management

This is one of the main parts of the project.

Admin can:

1. View all users in a table
2.Add a new user
3.Edit user details
4.Delete users

These actions are restricted only to admin users for security.


##  UI Design

I tried to keep the UI clean and easy to use.

1. Sidebar for navigation
2. Dashboard cards for quick stats
3. Charts for better understanding of data
4. Simple color combination (not too bright, not too dull)
5. Basic responsiveness for different screen sizes

##  API Overview

Some important backend routes:

* `POST /api/users/register → Register user
* `POST /api/users/login → Login
* `GET /api/users → Get users (admin only)
* `PUT /api/users/:id → Update user
* `DELETE /api/users/:id → Delete user
* `GET /api/users/analytics → Get dashboard data


##  How to Run the Project

### Backend
Open cmd and set the path 

cd backend
npm install
node server.js


### Frontend

cd admin-dashboard
npm install
npx ng serve


Open in browser:

http://localhost:4200

##  My Approach

While building this project, I focused on:

* Keeping the structure simple and understandable
* Connecting frontend and backend properly
* Making sure authentication is secure
* Displaying real data instead of static values
* Building something that looks like a real admin panel

## Screenshots

Screenshots included in the project:

1. Login page

2. Register page
3. Dashboard
4. Charts
5. Users table


## Final Thoughts

This project helped me understand how a complete admin dashboard works, from authentication to data visualization and user management.

It is a simple but practical implementation of a real world system, and it can be extended further with more features.
