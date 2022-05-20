import React from "react";

// styled
import styled from "styled-components";

// components
import ScoreComponent from "../components/ScoreComponent";


const Home = () => {
    const weekArr = ['일', '월', '화', '수', '목', '금', '토'];
    const today = new Date().getDay();
    const indexes = [0,1,2,3,4,5,6]
    const mainContents =  
        indexes.map((value,index)=>(<ScoreComponent key={index} 
                                                    day={weekArr[(today+value)%7]}
                                                    />));
    return (
        <>
            <Container>
                <Title>내 일주일은?</Title>
                    {mainContents}
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