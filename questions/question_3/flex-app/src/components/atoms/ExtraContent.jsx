import styled from 'styled-components';

const StyledExtraContent = styled.div`
  display: flex;
  justify-content:  center;
  align-items: baseline;
  padding-top: 10px;
  color: white;
  background-color: #898989;
  height: 30%;
`;

function ExtraContent() {
  return <StyledExtraContent><h1>Extra Content</h1></StyledExtraContent>;
};

export default ExtraContent;