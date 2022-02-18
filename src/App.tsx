import { useEffect, useState } from "react";
import { getCoursesByUser } from "./api/getCoursesByUser";
import { CourseContent } from './components/CourseContent';
import { Course } from './components/Course';
import { FavoritesButton } from './components/FavoritesButton';

function App() {
  const [courses, setCourses] = useState<any>([]);
  const [isFavsOnly, setIsFavsOnly] = useState<boolean>(false);

  const fetchAllCourses = async () => {
    const courses = await getCoursesByUser();
    setCourses(courses);
  };

  useEffect(() => {
    fetchAllCourses();
  }, []);

  const DisplayCourse = ({ data }: any | null) => {
    if ((isFavsOnly && data.favorite) || !isFavsOnly) {
      return (
         <Course 
          title={data.title} 
          instructor={data.instructor_name} 
          image={data.instructor_image_url} 
          favorite={data.favorite}
          key={data.id}
          id={data.id}
        />
      )
    }

    return null;
  }

  return (
    <div className="App">
      <header className="App-header"></header>
      <FavoritesButton onClick={() => setIsFavsOnly(!isFavsOnly)} />
      <CourseContent>
        {courses.map((data: any) => 
          <DisplayCourse data={data} key={`display${data.id}`} />
        )}
      </CourseContent>
      <footer></footer>
    </div>
  );
}

export default App;
