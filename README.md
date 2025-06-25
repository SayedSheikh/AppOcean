# 🌊 AppOcean

## 🚀 Purpose

AppOcean is a modern, fully responsive app store built with React. It offers a seamless user experience for discovering and browsing various applications across different categories. With an intuitive and dynamic interface, AppOcean allows users to find apps quickly and effortlessly.

## 🌐 Live URL

🔗 [AppOcean - Live Demo](https://app-ocean-42dc1.web.app/)

## ✨ Key Features

- **Responsive Design**: Optimized for both desktop and mobile views.
- **Firebase Authentication**: Secure sign-up, login, and password reset functionality.
- **Dynamic App Listings**: View apps by category in a user-friendly layout.
- **React Router**: Smooth page transitions without reloads.
- **React Icons**: Rich icon set for a visually appealing UI.
- **React Hot Toast**: Real-time toast notifications for user feedback.

## 📦 npm Packages Used

- [`@tailwindcss/vite`](https://www.npmjs.com/package/@tailwindcss/vite)
- [`daisyui`](https://www.npmjs.com/package/daisyui)
- [`firebase`](https://www.npmjs.com/package/firebase)
- [`react`](https://www.npmjs.com/package/react)
- [`react-countup`](https://www.npmjs.com/package/react-countup)
- [`react-dom`](https://www.npmjs.com/package/react-dom)
- [`react-hot-toast`](https://www.npmjs.com/package/react-hot-toast)
- [`react-icons`](https://www.npmjs.com/package/react-icons)
- [`react-router`](https://www.npmjs.com/package/react-router)
- [`swiper`](https://www.npmjs.com/package/swiper)
- [`tailwindcss`](https://www.npmjs.com/package/tailwindcss)

## 🛠️ How to Run Locally

Follow these steps to run AppOcean on your local machine:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/AppOcean.git
   cd AppOcean

2. Install Dependencies

    ```bash
    npm install
    # or
    yarn install

Step 3: Set Up Firebase Configuration

Create a Firebase project at Firebase Console
Enable Email/Password Authentication
Replace the Firebase config in src/firebase/firebase.config.js with your own:

    
    const firebaseConfig = {
      apiKey: "YOUR_API_KEY",
      authDomain: "YOUR_AUTH_DOMAIN",
      projectId: "YOUR_PROJECT_ID",
      storageBucket: "YOUR_STORAGE_BUCKET",
      messagingSenderId: "YOUR_SENDER_ID",
      appId: "YOUR_APP_ID"
    };


Step 4: Run the Development Server

    npm run dev
    # or
    yarn dev

The app will be available at http://localhost:3000
