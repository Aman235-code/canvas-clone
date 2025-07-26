import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import CourseCard from "../components/CourseCard";
import ToDoList from "../components/ToDoList";
import NotificationBanner from "../components/NotificationBanner";
import courses from "../data/courses.json";

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <Header />
        <NotificationBanner />

        <h2 className="text-xl font-semibold mb-4">Your Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        <ToDoList />
      </div>
    </div>
  );
}
