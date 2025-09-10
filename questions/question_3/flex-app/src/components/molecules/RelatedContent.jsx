import styled from "styled-components";
import RelatedImages from "../atoms/RelatedImages";
import RelatedPosts from "../atoms/RelatedPosts";

const StyledRelatedContent = styled.div`
    display: flex;
    height: 20%;
    gap: 5px;
`;

function RelatedContent() {
    return (
        <StyledRelatedContent>
            <RelatedImages />
            <RelatedPosts />
        </StyledRelatedContent>
    );
};

export default RelatedContent;

