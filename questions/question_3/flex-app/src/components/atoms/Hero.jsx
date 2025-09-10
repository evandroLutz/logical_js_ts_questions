import styled from 'styled-components';

const StyledHero = styled.div`
  display: flex;
  justify-content:  center;
  align-items: baseline;
  padding-top: 10px;
  color: white;
  background-color: #d7c9e3;
  height: 40%;
`;

function Hero() {
    return <StyledHero><h1>Hero</h1></StyledHero>;
};

export default Hero;