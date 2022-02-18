import { useEffect, useState } from "react";
import { getCoursesByUser } from "./api/getCoursesByUser";
import { CourseContent } from './components/CourseContent';
import { Course } from './components/Course';
import { FavoritesButton } from './components/FavoritesButton';

function App() {
  const [courses, setCourses] = useState<any | null>(null);
  const [isFavsOnly, setIsFavsOnly] = useState<boolean>(false);

  const fetchAllCourses = async () => {
    const courses = await getCoursesByUser();
    setCourses(courses);
  };

  useEffect(() => {
    fetchAllCourses();
  }, []);

  const handleAfterFavorite = () => {
    fetchAllCourses();
  }

  return (
    <div className="App">
      <header className="App-header"></header>
      <FavoritesButton onClick={() => setIsFavsOnly(!isFavsOnly)} />
      <CourseContent>
        {isFavsOnly ? 
          <div />
        : courses && courses.map((data: any) => 
            <Course 
              title={data.title} 
              instructor={data.instructor_name} 
              image={data.instructor_image_url} 
              favorite={data.favorite}
              key={data.id}
              id={data.id}
              onAfterFavorite={handleAfterFavorite}
            />
        )}
      </CourseContent>
      <footer></footer>
    </div>
  );
}

export default App;
