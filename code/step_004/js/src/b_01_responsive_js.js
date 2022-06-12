'use strict';
// b_01_responsive_js.js

// @media all and (max-width:143px){} -> css로 반응형 할 때 씀, jq용임
{
/*
const deviceWidth = $(window).outerWidth();
const setWidth = 1440;

$(widnow).on('resize',function(e){
    const afterWidth - $(window).outerWidth();

    if(deviceWidth !== afterWidth){
        if(setWidth <= afterWidth){
            // desktop 기준
            location.reload();
        }else{
            // tablet이하 기준
            location.reload();
        }
    }
})
*/
}

{
// 변수 -----------------------------------------------------------------------------
    const dataFile = {handhelds: '../js/src/b_01_responsive_handhelds.js'};//dataFile이라는 배열을 만들었는데 그 안데 링크를 넣은 것임.
    const body = document.querySelector('body'); // body 변수는 body태그로 이용하는 것이다.
    const naviArea = document.querySelector('.navi_area');

    const desktopWidth = 1440; //desktopWidth는 1440임
    const widthCheck = window.matchMedia(`(max-width:${desktopWidth - 1}px)`); //widthCheck는 matchMedia라는 메소드로 최대값-1인 값이다.

    let handhelds

// function -----------------------------------
    const fnHandHeldsScript = function(){
        const makeScript = document.createElement('script'); //makeScript 변수는 script라는 요소를 만든다.
        makeScript.setAttribute('src', dataFile.handhelds); //makeScript의 src 값이 dataFile.handhelds로 추가를 한다.
        makeScript.classList.add('handhelds'); //makeScript의 클래스 handhelds를 한다.
        body.append(makeScript); // body에 makeScript를 삽입/를 한다.
        handhelds = document.querySelector('.handhelds');
    };

    const fnHandHeldsRemove = function(){
        handhelds.remove();
        naviArea.removeAttribute('style');
        const naviBtn = document.querySelector('.navi_btn');
        naviBtn.remove();
    }

// event/기능 ---------------------------------------

    if(widthCheck.matches){ fnHandHeldsScript(); }
    widthCheck.addEventListener('change',(e)=>{// change값이 ture이면 tablet기기에 대한 값이므로, b_01....파일을 불러와서 사용
        (e.matches)? fnHandHeldsScript():fnHandHeldsRemove();
    });
}

// phnoe(600-1) : tablet(1024-1) : laptop(1366-1)