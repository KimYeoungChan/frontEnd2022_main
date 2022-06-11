'use strict';
//b_01_responsive_js.js

//1. .navi_btn 내부 button요소를 선택시 -> 형제요소이 .navi_area를 .action의 add/remove

const naviBtn = document.querySelector('.navi_btn');
const naviArea = document.querySelector('.navi_area')
const naviBtnSel = [].slice.call(naviBtn.children)[0];
// children은 유사배열로 배열기능할 수 없다.  -> 진짜 배열로 전환하여 사용한다. 
const naviBtnI = naviBtn.querySelector('i'); // naviBtnI는 naviBtnd의 i이다.
const ACTION_TEXT = 'action'; // action 클래스 변수명 지정
const BTNICON = ['fa-bars','fa-xmark'];


naviBtnSel.addEventListener('click',function(e){
    e.preventDefault(); // e 기본동작 지우기
    console.log(e.target); // button이 나온다.
    // naviArea.classList.add(ACTION_TEXT);
    const check = naviArea.classList.contains(ACTION_TEXT); // check라는 변수는 naviArea라는 변수에 ACTION_TEXT라는 클래스가 있는지 확인
    if(!check){
        naviArea.classList.add(ACTION_TEXT); //naviArea ACTION_TEXT라는 클래스명 추가
        naviBtnI.classList.remove(BTNICON[0]); //naviBtnI는 BTNICON[0]을 제거
        naviBtnI.classList.add(BTNICON[1]); //naviBtnI는 BTNICON[1]을 추가
    }else {
        naviArea.classList.remove(ACTION_TEXT); //naviArea ACTION_TEXT라는 클래스명제거 
        naviBtnI.classList.remove(BTNICON[1]); //naviBtnI는 BTNICON[1]을 제거
        naviBtnI.classList.add(BTNICON[0]); //naviBtnI는 BTNICON[0]을 추가
    }//!로 역으로 진행
});

