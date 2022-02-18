import { useEffect, useState } from "react";
import { getCoursesByUser } from "./api/getCoursesByUser";
import { Course } from './components/Course';

function App() {
  const [courses, setCourses] = useState<any | null>(null);

  const fetchAllCourses = async () => {
    const courses = await getCoursesByUser();
    setCourses(courses);
  };

  useEffect(() => {
    fetchAllCourses();
  }, []);

  return (
    <div className="App">
      <header className="App-header"></header>
      <section>
        {courses && courses.map((data: any) => 
          <Course 
            title={data.title} 
            instructor={data.instructor_name} 
            image={data.instructor_image_url} 
            favorite={data.favorite}
            key={data.id}
          />
        )}
      </section>
      <footer></footer>
    </div>
  );
}

export default App;
