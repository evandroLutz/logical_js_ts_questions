import styled from 'styled-components';

const StyledSidebar = styled.div`
  display: flex;
  justify-content:  center;
  align-items: baseline;
  padding-top: 10px;
  color: white;
  background-color: #9fc363;
  height: 60%;
`;

function Sidebar() {
  return <StyledSidebar><h1>Sidebar</h1></StyledSidebar>;
};

export default Sidebar;