// c_01_js_slideBanner.js
(function(){
    // =====================
    // 시나리오
    // 1~2줄짜리 설명
    // 버튼 클릭시 원하는 화면이 가로로 이동하여 배치되게 제작

    // 상세 시나리오
    // 1. 다음버튼 클릭
    // 2. 이전버튼 클릭
    // 3. 인디케이터 선택
    // 4. 버튼기능 공유
    // 5. 처음/마지막 자연스럽게 이동
    // 6. 일정시간마다 수행
    // 7. 외부데이터 불러와서 적용

    //slide banner    

    // 기능수행 / 변수 ===========================================================
    const viewBox = document.querySelector('#viewBox'); // viewBox
    const slideBtnArea = viewBox.querySelector('.slide_buttons'); // viewBox의 slideBtnArea
    const slideNextBtn = slideBtnArea.querySelector('.next'); // slide_buttons의 next
    const slidePrevBtn = slideBtnArea.querySelector('.prev'); // slide_buttons의 prev

    const indicatorList = viewBox.querySelector('.indicators > ul'); // indicators의 ul
    const indicatorItems = indicatorList.querySelectorAll('li'); // indicators의 li

    const slideViewArea = viewBox.querySelector('.view_area');  // view_area
    const slideViewAreaList = slideViewArea.querySelector('ul');  //view_area의 ul

    const preSlideListItems = slideViewAreaList.querySelectorAll('li'); //view_area의 li
    const lastSlideItem = preSlideListItems[preSlideListItems.length-1].cloneNode(true);
    // 카피를 하기 위해 함수 cloneNode를 하고 내용까지는 true를 이용을 해서 같이 복사를 한다.
    slideViewAreaList.prepend(lastSlideItem);
    // ul의 시작 부분에다 카피 


    const slideViewItems = slideViewAreaList.querySelectorAll('li');  //view_area의 li

    let COUNT = 0;
    let PRECOUNT = COUNT; // 전의 값을 기억하기 위해서
    let slideLen = slideViewItems.length -1; // 원래는 5개라서 -1를 해주어야됨
    let ACTIONNAME = 'action'; // action 클래스 명
    let PREMISSON = true;
    let TIMED = 600; //setTime용 시간 변수
    let ANINONE = 'transition_none'; // transition_none 이라는 클래스 명

// 함수 ===========================================================
    
    const fnUlMove = (num) => {
        if(PRECOUNT === 0 && num === slideLen-1 ){
            slideViewAreaList.style.left = '100%';
            setTimeout(() => {
                slideViewAreaList.classList.add(ANINONE);
                slideViewAreaList.style.left = num * -100 + '%';
                //slideViewAreaList의 ANINONE 클래스명 추가
                //slideViewAreaList의 스타일이 left가 -100%씩 이동해라.
                setTimeout(()=>{
                    PRECOUNT = COUNT;
                    slideViewAreaList.classList.remove(ANINONE);
                    //setTimout으로 0초 후에 slideViewAreaList의 ANINONE 클래스명 제거
                },0)
            }, TIMED)
        }else if( PRECOUNT === slideLen-1 && num === 0){ 
            slideViewAreaList.classList.add(ANINONE);
            slideViewAreaList.style.left = num * -100 + '%';
            setTimeout(()=>{
                slideViewAreaList.classList.remove(ANINONE);
                slideViewAreaList.style.left = num * -100 + '%';
                //slideViewAreaList의 ANINONE 클래스명 제거
                //slideViewAreaList의 스타일이 left가 -100%씩 이동해라.
            },0)
        }else{
            slideViewAreaList.style.left = num * -100 + '%';
            //slideViewAreaList의 스타일이 left가 -100%씩 이동해라.
        }
    }
    // slideViewAreaList.style.left = `${num * -100}%`; slideViewAreaList.style.left = num * -100 + '%'; 랑 같은 의미
    // ul 이미지 이동
    // 처음페이지에서 마지막페이지로 넘어가라!
    // PRECOUNT가 0이랑 slideLen-1 값이 모두 true이면 애니메이션 작동
    // 애니메이션을 끄고 다시 애니메이션 작동

    const fnIndicatorCheck = (num) => { 
        indicatorItems.forEach((el,idx) => {
            (num === idx) ?
            el.classList.add(ACTIONNAME) : 
            el.classList.remove(ACTIONNAME)
        }) 
    }
    // num === idx랑 일치하면 el의 ACTIONNAME 클래스 명을 추가, 일치 하지 않으면 ACTIONNAME 제거
    // 인디케이터 클래스명 추가/제거

    const fnTimedSet = (num) => {
        setTimeout(()=>{
            PREMISSON = true;
            PRECOUNT = COUNT;
        },TIMED)
    }
    // setimeout 이용을 해서 PREMISSON가 ture이면 TIMED 시간만큼 후에 작동을 해라.
    // 중복방지 권한 풀어주는 것임.

    const handlerNextClick = function(e){
        e.preventDefault(); //preventDefault 제거
        if(PREMISSON){
            PREMISSON = false;
            PRECOUNT = COUNT;
            (COUNT >= slideLen - 1) ? COUNT = 0: COUNT += 1; 
            fnUlMove(COUNT);
            fnIndicatorCheck(COUNT);
            fnTimedSet();
        }
    }
    // 다음 버튼 함수
    // COUNT가 view_area의 li -1보다 크거나 같으면 COUNT는 0이고, 아니면 자기자신한테 더하라 
    // 시작은 0부터 이기 때문에 slideLen -1로 해야된다.
    // 넘어갈 때 클릭하는 거 방지 if문으로 PREMISSON가 false이면 수행하지 말아라
    // setimed로 PREMISSON를 true로 바꾸어 주어서 중복클릭 방지 풀어주는 것임

    const handlerPrevClick = function(e){
        e.preventDefault(); //preventDefault 제거
        if(PREMISSON){
        PREMISSON = false;
        PRECOUNT = COUNT;
        (COUNT <= 0) ? COUNT = slideLen -1 :  COUNT -= 1;
        fnUlMove(COUNT);
        fnIndicatorCheck( COUNT );
        fnTimedSet (); // 중복방지 권한 풀어주는 것임.
        }   
    }
    // 이전 버튼 함수
    // COUNT가 0보다 작거나 같으면 COUNT는 slideLen이고, 아니면 자기자신한테 빼라.
    // 시작은 0부터 이기 때문에 slideLen -1로 해야된다.
    // 넘어갈 때 클릭하는 거 방지 if문으로 PREMISSON가 false이면 수행하지 말아라 
    // setimed로 PREMISSON를 true로 바꾸어 주어서 중복클릭 방지 풀어주는 것임

// 이벤트 ===========================================================
    slideNextBtn.addEventListener('click',handlerNextClick)
    slidePrevBtn.addEventListener('click',handlerPrevClick)
    
    indicatorItems.forEach((el,idx)=>{
        el.addEventListener('click',function(e){
            if(PREMISSON){
            PREMISSON = false;
            // PRECOUNT = COUNT;
            COUNT = idx; // 이것을 안하면 버튼이랑 인디케이터랑 따로 놈
            e.preventDefault(); //preventDefault 제거
            fnUlMove( COUNT ); // ul이 움직임
            fnIndicatorCheck( COUNT ); // 인디케이터 클래스명 추가/제거
            fnTimedSet(); // 중복방지 권한 풀어주는 것임.
        }
    })
})
    //indicatorItems를 forEach 반복문을 이용을 해서 el를 클릭을 할 때,
    //PREMISSON가 false이면 e preventDefault 제거, ul 움직임, 인디케이터 클래스명 추가/제거, setTimout으로 중복방지 권한을 풀어줌

})()

