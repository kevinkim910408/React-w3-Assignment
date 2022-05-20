/* Detail.jsx*/

import React from "react";

// styled-components
import styled from "styled-components";

// React Router
import { Link, useParams } from 'react-router-dom';

// components
import DetailScores from "../components/DetailScores";

const Detail = (props) => {

    const {day} = useParams();

    return (
        <Container>
            <Title>
                <DayHighlight>{day}요일</DayHighlight> 평점 남기기
            </Title>
                <ScoresWrap>
                    <DetailScores></DetailScores>
                </ScoresWrap>
                <FooterWrap>
                    <ConfirmButton>평점 남기기</ConfirmButton>
                </FooterWrap>
        </Container>
    )
}

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

const DayHighlight = styled.span`
    background-color: var(--yellow);
    padding: 10px;
    border-radius: 20px;
`;

const ScoresWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`;

const Score = styled.div`
   width: 30px;
   height: 50px;
   border-radius: 50px;
   border: 1px solid #000;
   margin: 10px;
`;

const FooterWrap = styled.div`
    text-align: center;
    color:var(--purple);
    line-height: 20px;
`;

const ConfirmButton = styled.button`
    padding: 20px;
    width: 200px;
    border: none;
    background-color: var(--purple);
    font-size: 20px;
    color: var(--white);
    border-radius: 10px;
    margin-top: 30px;
`;


export default Detail;