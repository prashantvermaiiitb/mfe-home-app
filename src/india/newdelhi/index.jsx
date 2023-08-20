import React from 'react'
import { Column1Container, Column2Container, TopNewsContainer, HeadLineContainer, ColumnContainer } from './newdelhi.styled.component';

const HeadLine = (props) => {
    return <HeadLineContainer>Top News</HeadLineContainer>;
}

const VideoColumn = (props) => {
    return <div>Video Column</div>;
}

const ToiPlusNews = (props) => {
    return <div>TOI+ News Column</div>;
}

const TopNewsLeftColumn = (props) => {
    return <div>News Column1 </div>;
}

const TopNewsRightColumn = (props) => {
    return <div>News Column2 </div>;
}

const TopNews = () => {
    return (
        <TopNewsContainer>
            <ColumnContainer>
                <Column1Container>
                    <HeadLine />
                    <Column2Container>
                        <TopNewsLeftColumn />
                        <TopNewsRightColumn/>
                    </Column2Container>
                </Column1Container>
                <VideoColumn />
            </ColumnContainer>
            <ToiPlusNews />
        </TopNewsContainer>
    );
}

export const NewDelhi = () => {
    return (
        <div>
            <h1>New Delhi Home page</h1>
            <TopNews />
        </div>
    )
}
