import styled from '@emotion/styled';
import { Heart } from './Heart';

const StyledGrid = styled.div`

`;


const Row = styled.div`

`;


const Column = styled.div`

`;

export const Grid = ({children}: any) => {
  return (
    <StyledGrid>
      <Row></Row>
    </StyledGrid>
  );
};