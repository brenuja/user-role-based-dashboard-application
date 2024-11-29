# user-role-based-dashboard-application

This is a React application that provides role-based dashboards for employees and admins. It features a simple login system and dynamically displays the appropriate dashboard based on the user's role.

## Features

- **Role-Based Access**: Displays either the Admin or Employee dashboard based on user credentials.
- **Persistent Login**: User session data is stored in `localStorage` for persistence.
- **Reusable Components**: Modular design with components like `Login`, `EmployeeDashboard`, and `AdminDashboard`.
- **Context API**: Manages global user data using React's `Context` API.

## Components

### `Login`
- Allows users to log in as either an admin or an employee.
- Admin credentials:
  - **Email**: `admin@me.com`
  - **Password**: `123`
- Employee credentials are validated against the data from the context.

### `AdminDashboard`
- Displays the admin-specific dashboard.
- Includes a feature to log out or switch users.

### `EmployeeDashboard`
- Displays the employee-specific dashboard.
- Receives user-specific data from the `AuthContext`.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```
2. Navigate to the project directory:
   ```bash
   cd your-repo-name
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the development server:
   ```bash
   npm start
   ```
2. Open [http://localhost:3000](http://localhost:3000) in your browser.
3. Use the login page to authenticate:
   - Admin: `admin@me.com` / `123`
   - Employees: Use email and password stored in `AuthContext`.

## Project Structure

```
src/
├── components/
│   ├── Auth/
│   │   └── Login.js
│   ├── Dashboard/
│   │   ├── AdminDashboard.js
│   │   └── EmployeeDashboard.js
├── context/
│   └── AuthProvider.js
├── utils/
│   └── LocalStorage.js
├── App.js
└── index.js
```

## How It Works

1. The `AuthProvider` manages global authentication state and user data.
2. The `Login` component validates user credentials and sets the role in `localStorage`.
3. The `App` component determines which dashboard to render based on the user role stored in `localStorage`.

## Local Storage Utility

### `setLocalStorage()`
- Initializes or updates user data in `localStorage`.

### `getLocalStorage()`
- Retrieves user data from `localStorage`.

## Future Enhancements

- Add password hashing and secure authentication.
- Implement a backend for storing user data.
- Add role-based routing using React Router.
- Improve UI/UX design with additional styling.

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to replace `your-username` and `your-repo-name` with your actual GitHub username and repository name. Let me know if you'd like further assistance!
