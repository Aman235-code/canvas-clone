import React from "react";
import { Link } from "react-router-dom";

export default function CourseCard({ course }) {
  return (
    <div className="bg-white shadow-md rounded p-4">
      <h2 className="text-lg font-semibold">{course.title}</h2>
      <p className="text-sm text-gray-600">Instructor: {course.instructor}</p>
      <div className="w-full bg-gray-200 rounded-full h-2 my-2">
        <div
          className="bg-green-500 h-2 rounded-full"
          style={{ width: `${course.progress}%` }}
        ></div>
      </div>
      <Link
        to={`/courses/${course.id}`}
        className="text-blue-600 underline text-sm"
      >
        Go to Course
      </Link>
    </div>
  );
}
