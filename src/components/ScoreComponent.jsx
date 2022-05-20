import React from "react";

// styled
import styled from "styled-components";

const ScoreComponent = (prop) => {
    return (
        <>
        <ContentsWrap>
            <h3>월</h3>
            <ScoresWrap>
                <Score></Score>
                <Score></Score>
                <Score></Score>
                <Score></Score>
                <Score></Score>
            </ScoresWrap>
            <ArrowButton />
        </ContentsWrap>
        </>
    )
}

export default ScoreComponent;

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
`;