
---

# 🛒 ShopStream - React E-Commerce Platform with Advanced Validation

A modern, responsive **E-Commerce Frontend Application** built with **React** and **React-Bootstrap**. This project features a dynamic product catalog, a functional shopping cart, and a robust **User Signup System** with real-time field validation.

## 🌟 Key Features

### 1. E-Commerce Layout

* **Responsive Product Grid:** Displays products using React-Bootstrap Cards, optimized for all screen sizes.
* **Shopping Cart Management:** Add or remove items dynamically with real-time state updates.
* **Professional Navigation:** A sleek Navbar with links to Home, Products, and a live Cart counter.

### 2. Advanced Signup Validation

* **Real-time Feedback:** Immediate error messages and success indicators (green checkmarks) as the user types.
* **Robust Validation Logic:**
* **Email:** Format validation using Regular Expressions (Regex).
* **Password Strength:** Checks for length, uppercase, lowercase, numbers, and special characters.
* **Field Matching:** Ensures "Confirm Password" matches the original password.
* **Empty Field Detection:** Prevents form submission if any field is left blank.



## 🛠️ Tech Stack

* **Library:** React.js
* **UI Framework:** React-Bootstrap
* **State Management:** React Hooks (`useState`, `useEffect`)
* **Icons:** FontAwesome / Bootstrap Icons
* **Styling:** CSS3 & Bootstrap Components

## 📂 Project Structure

```text
src/
├── components/
│   ├── Navbar.jsx        # Navigation logic & Cart counter
│   ├── ProductGrid.jsx   # Product listing using Bootstrap Cards
│   ├── Cart.jsx          # Shopping cart view & total calculation
│   └── SignupForm.jsx    # Form with validation logic
├── context/
│   └── CartContext.js    # Global state for shopping cart
├── App.js                # Main routing & application structure
└── index.js              # Entry point

```

## 🚀 Installation & Setup

1. **Clone the Repository:**
```bash
git clone https://github.com/Premkumar5861/QuickCart-Frontend-Project.git

```


2. **Install Dependencies:**
```bash
npm install react-bootstrap bootstrap

```


3. **Start the Development Server:**
```bash
npm start

```



## 💡 Technical Implementation Details

* **Component Architecture:** The project is broken down into reusable components to ensure clean code and easy maintenance.
* **Stateful Form:** Used a single object state for form inputs to handle multiple fields efficiently.
* **Conditional Rendering:** Error messages and success icons are rendered conditionally based on the validation state of each input field.


