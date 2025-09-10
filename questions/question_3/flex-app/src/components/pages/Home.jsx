import Container from "../atoms/Container";
import styled from 'styled-components';
import CentralContent from "../molecules/CentralContent";
import RelatedContent from "../molecules/RelatedContent";

const StyledHome = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 60%;
    gap: 5px;
`;


function Home() {
    return (
        <StyledHome>
            <Container color={'#55d2e9'} title='Header' />
            <CentralContent />
            <RelatedContent />
            <Container color={'#dea419'} title='Footer' />
        </StyledHome>
    );
};

export default Home;