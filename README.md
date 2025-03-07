# evoFlow™ 🧞‍♀️

**Your personal workout AI trainer!**

> 🧞‍♀️ Greetings, mortal! I am evoFlow, your AI-powered fitness genie, here to guide you through your workouts, track your progress, and unlock your full potential! I analyze your data, provide insights, and grant you the wisdom to optimize your training. Just say the word, and together, we’ll transform your fitness journey!

## 🚀 Tech Stack

- **Frontend:** Next.js 15, React 19, TailwindCSS
- **Backend:** Next.js App Router, Apollo Server, GraphQL
- **Database:** MongoDB Atlas, Mongoose
- **Authentication:** NextAuth.js (email/password authentication)
- **State Management:** Apollo Client
- **Other:** TypeScript, bcrypt (password hashing), Recharts (data visualization)

## ✅ Features Implemented

### **User Authentication & Session Management**

### **Dashboard & UI Enhancements**

### **API & Data Handling**

## 🔜 TODO (Upcoming Features)

### Advanced Workout Tracking

- Enable users to create and save custom workout templates.
- Add support for different workout types (strength, cardio, mobility).
- Implement auto-progress tracking for weight and rep increases.

### AI-Powered Recommendations

- Provide personalized workout suggestions based on user goals.
- Analyze workout data to recommend optimal rest and recovery times.
- Integrate AI models to predict future performance and progress.

### Data Visualization & Insights

- Display weekly and monthly training volume graphs.
- Generate AI-driven workout efficiency reports.
- Implement a muscle heatmap to show frequently trained areas.

### Social & Gamification Features

- Introduce badges for workout streaks and milestones.
- Allow users to challenge friends to workout goals.
- Add a global leaderboard based on training performance.

### Mobile & PWA Support

- Optimize UI for mobile screens with smooth navigation.
- Enable offline workout logging and sync upon reconnection.
- Add push notifications for scheduled workouts and reminders.

## 📌 Installation & Setup

1. Clone the repository:

   ```sh
   git clone https://github.com/robertgrzonka/evoflow.git
   cd evoflow
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Set up environment variables in `.env.local`:

   > You need to have your MongoDB running (locally or on the cloud) and create a new database for the project. You can use MongoDB Atlas for a cloud-based solution.

   ```env
   MONGODB_URI=your_mongodb_connection_string
   NEXTAUTH_SECRET=your_nextauth_secret
   ```

4. Run the development server:

   ```sh
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🎯 Contributing

Contributions are welcome! If you’d like to improve evoFlow™, submit an issue or a pull request.

---

## 📜 License

This project is licensed under the MIT License.
