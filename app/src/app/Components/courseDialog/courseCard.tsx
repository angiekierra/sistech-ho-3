// components/CourseCard.tsx
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

type CourseCardProps = {
  course: Course;
};

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <div className="course-card bg-white rounded-lg text-secondary-black p-5 w-full">
      <h2 className="font-bold text-xl text-primary-green">{course.course}</h2>
      <p>{course.description}</p>
      <div className="flex flex-row justify-evenly items-center p-5">
        <img  src={course.imgUrl} alt={course.course} width={500} height={300}/>
        <div>
          <h3 className="font-bold">Lecturers:</h3>
          <ul>
            {course.lecturers.map((lecturer, index) => (
              <li key={index}>{lecturer}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-start items-center">
        <h3 className="text-lg font-semibold">Topics:</h3>
        <ul>
          {course.topics.map((topic) => (
            <li key={topic.topicId}>
              <h4 className="text-primary-green">{topic.name}</h4>
              <p>{topic.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseCard;
