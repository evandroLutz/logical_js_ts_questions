import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 100%;
  text-align: center;
  height: 8%;
`;

function Container({ title, color }) {
    return <StyledContainer style={{ backgroundColor: color }}><h1>{title}</h1></StyledContainer>;
};

export default Container;