/* ScoreComponent.jsx*/

import React from "react";

// styled
import styled from "styled-components";


const ScoreComponent = ({day, random}) => {
    const indexes = [0,1,2,3,4];
    let Scores = indexes.map((value, index)=>(<Score key={index} num={value} random={random}></Score>))

    return (
        <>
        <ContentsWrap>
            <h3>{day}</h3>
            <ScoresWrap>
                {Scores}
            </ScoresWrap>
            <ArrowButton />
        </ContentsWrap>
        </>
    )
}

export default ScoreComponent;


// Styled-Components 파트 

const ContentsWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const ScoresWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

// 버튼 모양을 화살표로 만들기
const ArrowButton = styled.button`
    width: 0;
    height: 0;
    border-bottom: 20px solid #fff;
    border-left: 30px solid var(--purple);
    border-top: 20px solid #fff;
    border-right: 0px;
`;

const Score = styled.div`
   width: 30px;
   height: 30px;
   border-radius: 50%;
   border: 1px solid #000;
   margin: 10px;
   background-color: ${props => props.num <= props.random  ? 'var(--yellow)' : 'var(--grey)'}

`;