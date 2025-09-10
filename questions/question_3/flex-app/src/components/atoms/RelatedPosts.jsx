import styled from 'styled-components';

const StyledRelatedPosts = styled.div`
  display: flex;
  justify-content:  center;
  align-items: baseline;
  padding-top: 10px;
  color: white;
  background-color: #f3cadd;
  width: 30%;
`;

function RelatedPosts() {
  return <StyledRelatedPosts><h1>Related Posts</h1></StyledRelatedPosts>;
};

export default RelatedPosts;