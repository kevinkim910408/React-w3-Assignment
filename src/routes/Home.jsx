import React from "react";

// styled
import styled from "styled-components";

// components
import ScoreComponent from "../components/ScoreComponent";


const Home = () => {
    return (
        <>
            <Container>
                <Title>내 일주일은?</Title>
                <ScoreComponent />
                <ScoreComponent />
                <ScoreComponent />
                <ScoreComponent />
                <ScoreComponent />
                <ScoreComponent />
                <ScoreComponent />
                <FooterWrap>
                    <h1>평균 평점</h1>
                    <h1>3.9</h1>
                    <ResetButton>Reset</ResetButton>
                </FooterWrap>
            </Container>
        </>
    )
}

export default Home;

const Container = styled.div`
  max-width: 350px;
  min-height: 80vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Title = styled.h1`
  color: slateblue;
  text-align: center;
`;


const FooterWrap = styled.div`
    text-align: center;
    color:var(--purple);
    line-height: 20px;
`;

const ResetButton = styled.button`
    padding: 20px;
    width: 200px;
    border: none;
    background-color: var(--purple);
    font-size: 20px;
    color: var(--white);
    border-radius: 10px;
`;