import React from "react";

import styled from "styled-components";


const Home = () => {
    return (
        <>
            <Container>
                <Title>내 일주일은?</Title>
                <ContentsWrapContents>
                    <h3>월</h3>
                    <ContentsWrapScore>
                        <Score></Score>
                        <Score></Score>
                        <Score></Score>
                        <Score></Score>
                        <Score></Score>
                    </ContentsWrapScore>
                    <Button />
                </ContentsWrapContents>
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

const ContentsWrapContents = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const ContentsWrapScore = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Score = styled.div`
   width: 30px;
   height: 30px;
   border-radius: 50%;
   border: 1px solid #000;
   margin: 10px;
`;

// 버튼 모양을 화살표로 만들기
const Button = styled.button`
    width: 0;
    height: 0;
    border-bottom: 20px solid #fff;
    border-left: 30px solid var(--purple);
    border-top: 20px solid #fff;
    border-right: 0px
`;