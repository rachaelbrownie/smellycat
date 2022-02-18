import { useState } from 'react';
import styled from "@emotion/styled";
import { Heart } from "./Heart";
import { addFavorite } from "../api/addFavorite";
import { deleteFavorite } from "../api/deleteFavorite";

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
  show,
}: any) => {
  const [isFav, setIsFav] = useState(favorite);

  const setIsFavorite = ({ isFavorite, email, course_id }: any) => {
    if (isFav) {
      deleteFavorite({ email, course_id });
      setIsFav(false);
    } else {
      addFavorite({ email, course_id });
      setIsFav(true);
    }
  };

  return (
    <StyledCourse>
      <div>{title}</div>
      <div>{instructor}</div>
      <div>
        <Heart
          isFavorite={isFav}
          onClick={() => setIsFavorite({
            "course_id": id,
            "email": "roachedezigne@gmail.com",
            isFavorite: favorite,
          })}
        />
      </div>
      <div>
        <img src={image} width="200" />
      </div>
    </StyledCourse>
  );
};
