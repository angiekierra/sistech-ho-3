// components/CourseList.tsx
import CourseCard from "./courseCard";

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

type CourseListProps = {
  courses: Course[];
};

const CourseList = ({ courses }: CourseListProps) => {
  return (
    <div className="flex flex-row flex-wrap gap-5 items-center justify-evenly">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CourseList;
