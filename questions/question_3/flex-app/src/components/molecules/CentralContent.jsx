import styled from "styled-components";
import Hero from "../atoms/Hero";
import Sidebar from "../atoms/Sidebar";
import MainContent from "../atoms/MainContent";
import ExtraContent from "../atoms/ExtraContent";

const StyledLeftColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    height: 100%;
    gap: 5px;
`;

const StyledRightColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 100%;
    gap: 5px;
`;

const StyledCentralContent = styled.div`
    display: flex;
    width: 100%;
    height: 72%;
    gap: 5px;
`;


function CentralContent() {
    return (
        <StyledCentralContent>
            <StyledLeftColumn>
                <Hero />
                <Sidebar />
            </StyledLeftColumn>
            <StyledRightColumn>
                <MainContent />
                <ExtraContent />
            </StyledRightColumn>
        </StyledCentralContent>
    );
};

export default CentralContent;

