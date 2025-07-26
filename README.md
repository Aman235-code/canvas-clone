# 📚 Canvas LMS UI Clone (React + Tailwind)

This is a **responsive front-end UI clone** inspired by [Canvas LMS](https://canvas.instructure.com/). The project is built using **React.js**, **Tailwind CSS**, and **mock JSON data** — focusing on layout, responsiveness, and core UI functionality. No backend is included.

## 🚀 Features

### 🏠 Dashboard (Home Page)
- ✅ Sidebar Navigation  
  - Desktop: Full menu  
  - Tablet: Icons only  
  - Mobile: Hamburger toggle  
- ✅ Header with "Welcome, [Student Name]" and current date  
- ✅ Course Grid (6 cards)  
  - Title, instructor, progress bar, “Go to Course”  
  - Responsive: 1 col (mobile), 2 (tablet), 3 (desktop)  
- ✅ To-Do List  
  - 3–5 tasks, due dates, checkboxes  
  - Line-through when completed  
- ✅ Bonus: Notification banner for upcoming assignment  

## 🛠 Tech Stack

- React (Vite)
- Tailwind CSS
- React Router
- Lucide React / React Icons
- JSON Mock Data

## 📁 Folder Structure

canvas-clone/  
├── public/  
├── src/  
│   ├── assets/  
│   ├── components/  
│   │   ├── Sidebar.jsx  
│   │   ├── Header.jsx  
│   │   ├── CourseCard.jsx  
│   │   ├── ToDoList.jsx  
│   │   └── NotificationBanner.jsx  
│   ├── data/  
│   │   ├── courses.json  
│   │   └── todos.json  
│   ├── pages/  
│   │   ├── Dashboard.jsx  
│   │   └── CourseDetail.jsx  
│   ├── App.jsx  
│   └── main.jsx  

## 📦 Installation

```bash
git clone https://github.com/your-username/canvas-clone.git
cd canvas-clone
npm install
npm run dev
