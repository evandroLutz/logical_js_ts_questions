import styled from 'styled-components';

const StyledMainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:  baseline;
  align-items: center;
  padding-top: 10px;
  color: white;
  background-color: #f5c632;
  height: 70%;
  p {
    font-size: 12px;
  }
`;

function MainContent() {
  return (
    <StyledMainContent>
      <h1>Main Content</h1>
      <p>** If things do not look right, make sure your browsert is in "Experimental Mode".</p>
      </StyledMainContent>
  );
};

export default MainContent;