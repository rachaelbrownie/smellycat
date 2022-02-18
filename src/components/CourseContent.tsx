import styled from '@emotion/styled';

const StyledCourseContent = styled.div`
  display: flex;
  flex-flow: row wrap;
  row-gap: 30px;
  column-gap: 30px;
  max-width:1200px;
`;

export const CourseContent = (props: any) => {
  return (
    <StyledCourseContent {...props} />
  );
};