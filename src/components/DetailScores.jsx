/* Detail.jsx*/

import { click } from "@testing-library/user-event/dist/click";
import React from "react";

// Components
import { useState, useEffect} from "react";

import "./DetailScores.Module.css"

function DetailScores(){
        // html에서 자주 변하는건 state로 빼준다.
    const [clicked, setClicked] = useState(false); // clicked 이 처음에는 안눌렸으니 false값을 기본으로 설정

    // 버튼 채우기 알고리즘
    //  클래스에 classname 추가로 껏다켰다하기
    // 버튼이 눌린다.
    // 눌린 버튼의 번호가 주어진다.
    // 그 인덱스보다 작거나 같은수의 class를 채우기로 바꾼다
    
    function onClick(event){
        // 버튼이 눌리는 id 체크
        setClicked((value)=>value = event.target.id) // 버튼이 눌리면 setClicked를 이용해서 clicked의 값 업데이트
    }

    // 키보드 이벤트
    const handleKeyDown = (e) => {
        //console.log(e);
        if (e.key === '1' || e.key === '2' || e.key === '3' || e.key === '4' || e.key === '5') {
            //console.log("Pressed")
            // logic
            //console.log(e.key)
            const temp = document.getElementById(e.key);
            //console.log(temp);
            console.log("click")
            temp.classList.add("clickedScore")
        }
      }
      
      // 시작하자마자, 키보드 이벤트 활성화
      useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)
        //console.log("mount")
        
        return () => {
          window.removeEventListener('keydown', handleKeyDown)
          //console.log("unmount")
        }
      })


    // useEffect를 사용해서 clicked의 값이 업데이트 될때마다 아래의 함수를 실행시킨다.
    useEffect(() => {
        ClickedCircle(); // 버튼이 눌릴떄마다 업데이트
        }, [clicked]);

        // 함수 로직
    function ClickedCircle() {
        // 공이 총 5개뿐이니까  1,2,3,4,5의 id를 가져온다.
        for (let i = 1; i < 6; ++i) {
            // Id값이 숫자인 친구를 찾아서 보관 - score들에게 아이디를 1~5을 줬다.
            const temp = document.getElementById(i);
            // 클릭하면 위에 setClicked에서 눌린 target의 아이디를 주게되어있고, 1~5가 잘 들어온다.
            console.log(clicked);

            // 클릭 로직
            // i 가 클릭보다 작거나 같을떄까지 공을 칠해주면된다.
            // 처음 실패 = clicked의 초기값은 0이다 = false, 즉 i가 0부터 시작하면, clicked가 0일때 이미 제일 처음꺼가 눌리고 시작한다.
            // 그래서 i값을 하나씩 올려주는게 맞다. -> i값을 1부터 시작, score에 있는 id 값도 1부터로 변경
            if (i <= clicked) {
                // i에 누른 clicked까지의 값이 들어오는지 체크
                //console.log(i)
                // temp에 클래스 이름을 더해준다.
                temp.classList.add("clickedScore")

                // 그 외에경우 -> 공에 있는 클래스 삭제
            }else{
                if(temp.classList.contains("clickedScore")){
                temp.classList.remove("clickedScore") 
                }
            }
        }
    };

    // map을 이용해서 각 요일들의 index에 접근할 예정
    const indexes = [1,2,3,4,5]
    const Scores = indexes.map((value, index)=>(<div className="score" key={index} id={value} onClick={onClick} ></div>))

    return(
        <>
         {Scores}
        </>
    )
}

export default DetailScores;
