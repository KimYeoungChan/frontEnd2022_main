'use strict';
//b_01_responsive_handhelds.js

//1. .navi_btn 내부 button요소를 선택시 -> 형제요소이 .navi_area를 .action의 add/remove
{
    // 변수 --------------------------------------------------------------------
    // 기본 변수
    const naviPart = document.querySelector('.navigation_part');
    const naviH2 = naviPart.querySelector('h2');
    const naviArea = document.querySelector('.navi_area');

    // 기본 기능처리
    const btnCode = `<button type="button"><i class="fa-solid fa-bars"></i><span>네비게이션 버튼</span></button>`
    const makeNaviBtn = document.createElement('div');
    makeNaviBtn.setAttribute('class','navi_btn blind_area');
    makeNaviBtn.innerHTML = btnCode;
    naviH2.after(makeNaviBtn);

    // 추가 선택자
    const naviBtn = document.querySelector('.navi_btn');
    const naviBtnSel = [].slice.call(naviBtn.children)[0];// children은 유사배열로 배열기능할 수 없다.  -> 진짜 배열로 전환하여 사용한다. 
    const naviBtnI = naviBtn.querySelector('i'); // naviBtnI는 naviBtnd의 i이다.
    const BTNICON = ['fa-bars','fa-xmark']; //BTNICON라는 변수는 2가지 값이 있는 배열임.
    const naviDisplay = ['flex', 'none']; //naviDisplay라는 변수는 2가지 값이 있는 배열임.

    // 이벤트 --------------------------------------------------------------------------------------
    naviBtnSel.addEventListener('click',function(e){
        e.preventDefault(); // e 기본동작 지우기
        const check = window.getComputedStyle(naviArea).display === 'none'; // check 변수는 getComputedStyle라는 메소드로 naviArea의 display가 none이다.
        if(check){
            naviArea.style.display = naviDisplay[0]; // naviDisplay의 0번째 값
            naviBtnI.classList.remove(BTNICON[0]); //naviBtnI는 BTNICON[0]을 제거
            naviBtnI.classList.add(BTNICON[1]); //naviBtnI는 BTNICON[1]을 추가
        }else {

            naviArea.style.display = naviDisplay[1]; // naviDisplay의 1번째 값
            naviBtnI.classList.remove(BTNICON[1]); //naviBtnI는 BTNICON[1]을 제거
            naviBtnI.classList.add(BTNICON[0]); //naviBtnI는 BTNICON[0]을 추가
        }//!로 역으로 진행
    });

}