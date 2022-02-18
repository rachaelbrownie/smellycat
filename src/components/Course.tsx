import styled from '@emotion/styled';
import { Heart } from './Heart';

const StyledCourse = styled.div`
  background: #ccc;
  font-family: 'Roboto Serif', sans-serif;
  color: #292929; 
  font-size:20px;
`;

export const Course = ({title, instructor, image, favorite}: any) => {
  return (
    <StyledCourse>
      <div>{title}</div>
      <div>{instructor}</div>
      <div><Heart isFavorite={favorite} /></div>
      <div><img src={image} /></div>
    </StyledCourse>
  );
};