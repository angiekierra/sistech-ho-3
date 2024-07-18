// components/CourseMain.tsx
"use client";

import { useEffect, useState } from 'react';
import CourseList from '../Components/courseDialog/courseList';

type Topic = {
  topicId: number;
  name: string;
  content: string;
};

type Course = {
  id: number;
  course: string;
  description: string;
  imgUrl: string;
  totalTopics: number;
  topics: Topic[];
  lecturers: string[];
};

export default function CourseMain() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('https://sistech-server.vercel.app/api/data');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setCourses(data.data);
      } catch (error) {
        console.error('Failed to fetch courses:', error);
        setError('Failed to fetch courses');
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <main className="bg-secondary-black p-20 text-white w-full h-screen">
      <div className="w-full">
        <div className="flex flex-col flex-wrap justify-between gap-8 items-center m-8 max-w-full text-center">
          <h4 className="font-bold text-primary-green">Our Courses</h4>
          <h3 className="font-bold text-white">
            Our Best Courses Offered and Taught by The Best Instructors
          </h3>
          <p className="text-white">
            Install our top-rated dropshipping app to your e-commerce site and get access to US Suppliers, AliExpress vendors, and the best dropshipping and custom products.
          </p>
          <CourseList courses={courses} />
        </div>
      </div>
    </main>
  );
}
