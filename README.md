# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

---

## 🚀 Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.  
The page will reload when you make changes. You may also see lint errors in the console.

### `npm test`
Launches the test runner in interactive watch mode.  
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`
Builds the app for production in the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.  
The build is minified and the filenames include hashes.  
Your app is ready to be deployed!  
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`
> **Note:** this is a one-way operation. Once you `eject`, you can’t go back!

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time.  
This command removes the single build dependency from your project and copies all configuration files (Webpack, Babel, ESLint, etc.) directly into your project, giving you full control over them.

---

## 📘 Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React itself, check out the [React documentation](https://reactjs.org/).

---

## ⚙️ Additional Topics

### Code Splitting
[Code Splitting Documentation](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size
[Bundle Analysis](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App
[PWA Guide](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration
[Advanced Configuration Docs](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment
[Deployment Documentation](https://facebook.github.io/create-react-app/docs/deployment)

### Troubleshooting `npm run build` Fails to Minify
[Troubleshooting Guide](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

---

## 🛒 Project Name: Cleanzy-Mart


cleanzymart
├─ backend
│  ├─ .env
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ server.js
│  └─ src
│     ├─ config
│     │  └─ database.js
│     ├─ controllers
│     │  └─ authController.js
│     ├─ middleware
│     │  └─ auth.js
│     ├─ models
│     │  └─ User.js
│     ├─ routes
│     │  └─ authRoutes.js
│     └─ utils
│        └─ validation.js
├─ cleanzy_mart.sql
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ public
│  ├─ favicon.ico
│  ├─ images
│  │  ├─ Aboutus.jpg
│  │  ├─ man-holding-pile-clean-clothes.jpg
│  │  └─ Wash & Fold, Dry Cleaning.jpg
│  ├─ index.html
│  ├─ manifest.json
│  └─ robots.txt
├─ README.md
├─ src
│  ├─ App.css
│  ├─ App.js
│  ├─ App.test.js
│  ├─ components
│  │  ├─ auth
│  │  │  ├─ AuthLayout.jsx
│  │  │  ├─ LoginForm.jsx
│  │  │  └─ SignupForm.jsx
│  │  ├─ common
│  │  │  ├─ Button.jsx
│  │  │  ├─ Footer.jsx
│  │  │  ├─ InputField.jsx
│  │  │  └─ Navbar.jsx
│  │  ├─ payment
│  │  │  └─ CardDetailsModal.jsx
│  │  └─ ui
│  ├─ index.css
│  ├─ index.js
│  ├─ pages
│  │  ├─ AboutUs.jsx
│  │  ├─ auth
│  │  │  ├─ ForgotPassword.jsx
│  │  │  ├─ Login.jsx
│  │  │  └─ Signup.jsx
│  │  ├─ Booking.jsx
│  │  ├─ Checkout.jsx
│  │  ├─ ContactUs.jsx
│  │  ├─ dashboard
│  │  │  ├─ CustomerDashboard.jsx
│  │  │  └─ OwnerDashboard.jsx
│  │  ├─ Home.jsx
│  │  ├─ HowItWorks.jsx
│  │  ├─ OrderConfirmation.jsx
│  │  ├─ Orders.jsx
│  │  ├─ Pricing.jsx
│  │  ├─ Profile.jsx
│  │  └─ Services.jsx
│  ├─ reportWebVitals.js
│  ├─ services
│  │  └─ api.js
│  └─ setupTests.js
└─ tailwind.config.js

```
```
cleanzymart
├─ backend
│  ├─ .env
│  ├─ generateHash.js
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ server.js
│  └─ src
│     ├─ config
│     │  └─ database.js
│     ├─ controllers
│     │  ├─ authController.js
│     │  ├─ orderController.js
│     │  ├─ paymentController.js
│     │  └─ serviceController.js
│     ├─ middleware
│     │  └─ auth.js
│     ├─ models
│     │  ├─ Order.js
│     │  ├─ Payment.js
│     │  ├─ Service.js
│     │  └─ User.js
│     ├─ routes
│     │  ├─ authRoutes.js
│     │  ├─ dashboardRoutes.js
│     │  ├─ orderRoutes.js
│     │  ├─ paymentRoutes.js
│     │  ├─ reviewRoutes.js
│     │  └─ serviceRoutes.js
│     └─ utils
│        └─ validation.js
├─ cleanzy_mart.sql
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ public
│  ├─ favicon.ico
│  ├─ images
│  │  ├─ Aboutus.jpg
│  │  ├─ man-holding-pile-clean-clothes.jpg
│  │  └─ Wash & Fold, Dry Cleaning.jpg
│  ├─ index.html
│  ├─ manifest.json
│  └─ robots.txt
├─ README.md
├─ src
│  ├─ App.css
│  ├─ App.js
│  ├─ App.test.js
│  ├─ components
│  │  ├─ auth
│  │  │  ├─ AuthLayout.jsx
│  │  │  ├─ LoginForm.jsx
│  │  │  └─ SignupForm.jsx
│  │  ├─ common
│  │  │  ├─ Button.jsx
│  │  │  ├─ Footer.jsx
│  │  │  ├─ InputField.jsx
│  │  │  └─ Navbar.jsx
│  │  ├─ payment
│  │  │  └─ CardDetailsModal.jsx
│  │  ├─ reviews
│  │  │  ├─ MyReviews.jsx
│  │  │  └─ ReviewForm.jsx
│  │  └─ ui
│  ├─ index.css
│  ├─ index.js
│  ├─ pages
│  │  ├─ AboutUs.jsx
│  │  ├─ auth
│  │  │  ├─ ForgotPassword.jsx
│  │  │  ├─ Login.jsx
│  │  │  └─ Signup.jsx
│  │  ├─ Booking.jsx
│  │  ├─ Checkout.jsx
│  │  ├─ ContactUs.jsx
│  │  ├─ dashboard
│  │  │  ├─ CustomerDashboard.jsx
│  │  │  ├─ OwnerDashboard.jsx
│  │  │  └─ OwnerReviews.jsx
│  │  ├─ Home.jsx
│  │  ├─ HowItWorks.jsx
│  │  ├─ OrderConfirmation.jsx
│  │  ├─ Orders.jsx
│  │  ├─ Pricing.jsx
│  │  ├─ Profile.jsx
│  │  └─ Services.jsx
│  ├─ reportWebVitals.js
│  ├─ services
│  │  └─ api.js
│  └─ setupTests.js
└─ tailwind.config.js

```
