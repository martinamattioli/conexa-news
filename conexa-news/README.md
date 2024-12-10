# Conexa News

## 📖 Project Description

The app includes three main screens:

- **Home**: A news list with a search feature by title or content.  
- **Favorites**: A screen displaying the user’s saved favorite news articles.  
- **User**: A screen containing detailed user information, such as name, email, and phone.
- **News Detail**: A detailed view of a specific news article.  
- **Login**: A login screen to authenticate the user before accessing the app’s features.  

The app supports multiple languages and uses persistent storage for both user authentication tokens and favorite articles.

---

## 🗂️ Folder Structure

- `src`: The main directory of the application.

  - `app`: Folder based routing directory.

  - `components`: Reusable React components.

  - `config`: Global configuration files.

  - `constants`: Static values used across the app.

  - `hooks`: Custom React hooks.

  -  `lib`: External libraries and services.

  - `screens`: App's main screens.

  - `translations`: Localization files.

  - `utils`: Helpers and reusable methods.

---

## 🚀 Technologies and Libraries Used  

- **React Query** (`react-query-kit`): Efficient data fetching and caching.  
- **Zustand**: Global state management.  
- **Async Storage**: Persistent storage for user tokens and favorite news articles.  
- **i18n**: Internationalization system supporting multiple languages.  
- **NativeWind**: Adaptive styling using a Tailwind CSS-based approach.  
- **Jest**: Unit testing for components and application logic.  

---

## 💡 Design Decisions  

1. **State Management**:  
   - **Zustand** was chosen for simple and efficient global state handling.  
   - **React Query** was used for API data fetching and caching with the public [JSONPlaceholder API](https://www.jsonplaceholder.typicode.com).  

2. **Persistence**:  
   - **Async Storage** is used to store:  
     - Favorite news articles for persistence across sessions.  
     - User authentication tokens after login.  

3. **Internationalization**:  
   - Implemented using **i18n**, enabling easy language switching.  

4. **Styling**:  
   - **NativeWind** provides modern and responsive styling with Tailwind CSS flexibility.  

5. **Authentication**:  
   - A **Login** screen was implemented to handle user authentication before accessing the app.  

---

## 🔧 Getting Started  

1. Clone the repository:  
```bash
   git clone git@github.com:martinamattioli/conexa-news.git
   cd conexa-news
```

2. Install dependencies:  
```bash
yarn install
```

3. Start The Dev Server:  
```bash
yarn start

# Press 's' to switch to dev build
# Press 'a' to open Android simulator
# Press 'i' to open iOS simulator
# Press 'w' to open web browser
```

---

## 🧪 Testing  

Unit tests are implemented using **Jest**. To run the tests:  
```bash
yarn test
```

---

## 🔧 Additional Setup

Before running the project, make sure to add the .env file to the root directory.

---

## 📂 Additional Notes

A modular architecture was prioritized to ensure scalability and maintainability.
