import styled from "@emotion/styled";
import { Heart } from "./Heart";
import { updateFavorite } from "../api/updateFavorite";

const StyledCourse = styled.div`
  background: #ccc;
  font-family: "Roboto Serif", sans-serif;
  color: #292929;
  font-size: 20px;
  width: 300px;
  flex-grow: 2;
  padding: 20px;
`;

export const Course = ({
  title,
  instructor,
  image,
  favorite,
  onAfterFavorite,
  id,
}: any) => {
  const setIsFavorite = async ({ email, course_id }: any) => {
    const courses = await updateFavorite({ email, course_id });
    onAfterFavorite();
  };

  return (
    <StyledCourse>
      <div>{title}</div>
      <div>{instructor}</div>
      <div>
        <Heart
          isFavorite={favorite}
          onClick={() => setIsFavorite({
            "course_id": id,
            "email": "roachedezigne@gmail.com",
          })}
        />
      </div>
      <div>
        <img src={image} width="200" />
      </div>
    </StyledCourse>
  );
};
