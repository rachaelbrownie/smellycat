import styled from '@emotion/styled';

const StyledFavoritesButton = styled.button`
  width:100px;
  height:25px;
  text-align:center;
  line-height:20px;
  font-family: "Roboto Serif", sans-serif;
  display:block;
  margin: 10px 0;
`;

export const FavoritesButton = (props: any) => {
  return (
    <StyledFavoritesButton {...props} >My Favs</StyledFavoritesButton>
  );
};