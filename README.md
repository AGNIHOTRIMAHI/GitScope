# GitScope 🐙

A full-stack web application that allows users to seamlessly search for GitHub profiles, explore their repositories, discover trending projects by programming language, and interact with other developers by "liking" their profiles. 

## 🚀 Features

* **GitHub OAuth Authentication:** Secure login and signup using GitHub accounts via Passport.js.
* **Profile Search & Heatmap:** Search for any GitHub user to view detailed profile information (bio, followers, location). It also features a **Contribution Heatmap** to visually track a user's daily commits and activity history.
* **Advanced Repository Sorting:** Easily manage and navigate through a user's repositories. You can dynamically filter and sort the repository list by:
  * **Most Recent:** See the newest projects first.
  * **Most Stars:** Discover the user's highest-rated repositories.
  * **Most Forks:** Find the most collaborated-on and duplicated projects.
* **Quick Clone:** One-click copy functionality to grab the repository clone URL instantly.
* **Explore Trending Repos:** Discover popular GitHub repositories filtered by top programming languages (JavaScript, TypeScript, C++, Python, Java).
* **Social Interaction:** "Like" other users' profiles and view a dedicated history of users who have liked your profile.
* **Responsive UI:** Modern, glassmorphism-inspired interface built with Tailwind CSS.

---

## 🛠️ Tech Stack

**Frontend**
* **Framework:** React
* **Routing:** React Router DOM
* **Styling:** Tailwind CSS
* **State Management:** React Context API (`AuthContext`)
* **Notifications:** React Hot Toast
* **Icons:** React Icons

**Backend**
* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB
* **Authentication:** Passport.js (GitHub Strategy)

---

## 📂 Project Structure

### Backend
Based on the modular Node.js architecture:
* `controllers/` - Request handlers for routes (e.g., handling profile likes).
* `db/` - Database connection setup and configuration.
* `middleware/` - Custom middleware for route protection and authentication checks.
* `models/` - Mongoose database schemas for Users and Likes.
* `passport/` - GitHub OAuth strategy and session serialization configuration.
* `routes/` - API route definitions (`/api/auth`, `/api/users`, `/api/explore`).
* `server.js` - Main application entry point.

### Frontend
Located typically in a `src/` directory:
* `components/` - Reusable UI elements (`ProfileInfo`, `Repos`, `Search`, `Sidebar`, `SortRepos`, `Spinner`).
* `context/` - Global state providers (`AuthContext`).
* `pages/` - Top-level route components (`HomePage`, `ExplorePage`, `LikesPage`, `LoginPage`, `SignUpPage`).
* `utils/` - Helper functions (`formatDate`, `formatMemberSince`) and constants.
* `App.jsx` - Root component containing layout and route definitions.

---

## ⚙️ Installation & Setup

### Prerequisites
* Node.js installed on your machine.
* MongoDB database (local or Atlas URI).
* GitHub OAuth App credentials (Client ID & Client Secret).

### Backend Setup
1. Navigate to the backend directory.
2. Install dependencies:
   ```bash
   npm install
