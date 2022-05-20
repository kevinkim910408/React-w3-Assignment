/* Home.jsx*/

import React, { useState } from "react";

// styled-components
import styled from "styled-components";

// components
import ScoreComponent from "../components/ScoreComponent";



const Home = () => {
    // 기본적으로 요일들을 가지고 있는 배열
    const weekArr = ['일', '월', '화', '수', '목', '금', '토'];
    // 오늘 날짜 계산
    const today = new Date().getDay();
    // map을 이용해서 각 요일들의 index에 접근할 예정
    const indexes = [0,1,2,3,4,5,6]
    // 랜덤 생성 - reset하면 공 칠한것도 날려야해서 state 관리
    let [rand, setRand] = useState([Math.floor(Math.random() * 5),Math.floor(Math.random() * 5),Math.floor(Math.random() * 5),Math.floor(Math.random() * 5),Math.floor(Math.random() * 5),Math.floor(Math.random() * 5),Math.floor(Math.random() * 5)]);
    
    // map을 이용해서 ScoreComponent를 한줄로 총 7줄을 부른다
    const ScoreComponents =  
        indexes.map((value,index)=>(<ScoreComponent key={index} 
                                                    day={weekArr[(today+value)%7]}
                                                    random={rand[value]}
                                                    />));

    // 평점을 내기위해 random의 값들을 모두 더해준다,
    // 초기값이 7인 이유는.. rand가 0~4까지 라서 실제눈에보이는거 보다 1씩 작다 ㅠㅠㅠㅠ
    const sum = rand.reduce((prev, value)=> {return prev + value},7);
    // 평균구하기 = 전체합/7,  .toFixed(1) - 소수점 한자리까지 보여줌, reset으로 html 계속 돌려야해서 state 관리
    let [aver, setAver] = useState((sum / 7).toFixed(1));
    // 리셋 버튼 기능
    const onReset = () =>{
        console.log("clicked")
        setAver(()=>aver=0);
        setRand(()=>rand=[]);
    }

    return (
        <>
            <Container>
                <Title>내 일주일은?</Title>
                    {/* 위의 map()을 이용해서 아래처럼 부르고 있다.  */}
                    {ScoreComponents}
  
                <FooterWrap>
                    <h1>평균 평점</h1>
                    <h1>{aver}</h1>
                    <ResetButton onClick={onReset}>Reset</ResetButton>
                </FooterWrap>
            </Container>
        </>
    )
}

export default Home;

// 여기서부턴 Styled Components = CSS Part

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