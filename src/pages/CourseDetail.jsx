import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import courseData from '../data/courseDetail.json';

export default function CourseDetail() {
  const { id } = useParams();
  const course = courseData.find(c => c.id === parseInt(id));

  const [tab, setTab] = useState('overview');

  if (!course) return <div className="p-4">Course not found.</div>;

  return (
    <div className="p-4 max-w-5xl mx-auto">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-600 mb-4">
        <span className="text-blue-500 cursor-pointer">Dashboard</span> &gt;{' '}
        <span className="text-blue-500 cursor-pointer">{course.title}</span> &gt; Module
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 border-b">
        {['overview', 'assignments', 'grades'].map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2 text-sm font-medium ${
              tab === t ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'
            }`}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      {/* Content */}
      {tab === 'overview' && (
        <div className="text-gray-800 leading-relaxed space-y-3">
          <h2 className="text-lg font-semibold mb-2">Course Overview</h2>
          <p>{course.overview}</p>
        </div>
      )}

      {tab === 'assignments' && (
        <div>
          <h2 className="text-lg font-semibold mb-3">Assignments</h2>
          <ul className="space-y-3">
            {course.assignments.map((a, i) => (
              <li
                key={i}
                className="border rounded p-3 bg-white shadow-sm flex justify-between items-center"
              >
                <div>
                  <div className="font-medium">{a.title}</div>
                  <div className="text-sm text-gray-500">Due: {a.due}</div>
                </div>
                <div className="text-sm text-gray-600">{a.status}</div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {tab === 'grades' && (
        <div>
          <h2 className="text-lg font-semibold mb-3">Grades</h2>
          <table className="w-full table-auto border-collapse bg-white shadow-sm rounded overflow-hidden">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="text-left px-4 py-2">Assignment</th>
                <th className="text-left px-4 py-2">Score</th>
              </tr>
            </thead>
            <tbody>
              {course.grades.map((g, i) => (
                <tr key={i} className="border-t">
                  <td className="px-4 py-2">{g.assignment}</td>
                  <td className="px-4 py-2">{g.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
