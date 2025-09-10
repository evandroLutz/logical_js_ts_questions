import styled from 'styled-components';

const StyledRelatedImages = styled.div`
  display: flex;
  justify-content:  center;
  align-items: baseline;
  padding-top: 10px;
  color: white;
  background-color: #2bb673;
  width: 70%;
`;

function RelatedImages() {
  return <StyledRelatedImages><h1>Related Images</h1></StyledRelatedImages>;
};

export default RelatedImages;