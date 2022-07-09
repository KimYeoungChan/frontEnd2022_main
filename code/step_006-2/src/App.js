import {useEffect, useState} from 'react';
import axios from 'axios';
import { useInterval } from 'usehooks-ts';
import './App.css';
/*
    useEffect의 사용목적
    1. useState의 기능을 이용하여 값이 변할 때, 1차로 끝나는 것이 아니라 2~3차로 같이 변화를 거칠 때 적용하기 위한
    2. 하나의 값이 변화를 일으킬 때, 해당 변화를 감지하여 처리하는 경우
    3. 최초의 실행을 목적으로 사용하는데, 비동기처리로 수행할 때
    
    fetch(url).then(data=>return data.json()).then(data=>{기능 수행});
*/

    // useEffect( ()=>{} ); -> 무조건 렌더링이 될때마다 매번 수행
        // useEffect( ()=>{},[] ); -> 최초 한번만 수행
        // useEffect( ()=>{},[value] ); -> 최초 한번만 수행, value에 해당해는 값이 변할때마다 수행
        // useEffect( ()=>{/* */ return ()=>{ /* 수행취소 */} }, [value]); 
        // -> 최초 한번 수행, value에 해당하는 값이 변할때마다 수행, return이 존재하면 기본 수행되는 기능을 정리

function App(){
    // const imageList = ['001-turtle.png', '002-livestock.png', '003-lion.png', '004-fox.png','005-cow.png','006-bee.png'];
    // let url, imageList;
    const [url, setUrl] = useState('');
    const [imageList, setImageList] = useState('');
    
    const [count,setCount] = useState(0);
    const [imgSrc,setImgSrc] = useState(url+imageList[0]);

    const path = "./data/image.json";
    console.log( url, imageList );

    useEffect(()=>{
        axios(path).then(code => {
            setUrl(code.data.url);
            setImageList(code.data.src);
            // setCount(0);
        });
        // axios(path).then(code => console.log((code.data)));
    },[]);

    useInterval( ()=>{
        setCount( count < imageList.length-1 ? count + 1 : 0 );
        setImgSrc(url+imageList[count]);
    },1000);

    // useEffect( ()=>{
    //     setImgSrc(url+imageList[count])
    // },[count, url])

    // const [imgChange, setImgChange] = useState(false);

    // useEffect( ()=> {
    //     const imgRun = setInterval(()=> {},1000);
    //     return ()=> clearInterval()
    // },[imageList]);

    const [user, setUser] = useState('');
    const [pw, setPw] = useState('');
    const [view,setView] = useState('password');

    const handlerInput = function(e){
        // console.log( e.target.value );
        setUser( e.target.value );
        // console.log( user );
    }

    const handlerPassword = function(e){
        setPw(e.target.value);
    }

    const handlerBtn = function(e){
        // e.target
        // view === false ? setView(true) : setView(false);
        setView(view === 'password' ? 'text' : 'password' );
        // setView( !view ? true : false );
        // 비번 보기를 클릭을 하면 input type을 password -> text로 바꾸는 것임
    }

    const handlerview = ()=> setView('text');
    const handlerBlind = ()=> setView('password');

    

    // useEffect( () => console.log('user: ', user),[user]);
    // useEffect( () => console.log('pw: ', pw),[pw]);

    //1초마다 imageList의 값에 따른 이미지가 변경되게 만들기 (무한으로)

    // 1. 0~5까지 숫자 카운트 -> count < imageList.length-1 ? count + 1 : 0
    // 2. 이미지가 바뀌는 것 -> setImgSrc(url+imageList[count]);

    // useEffect( ()=>{ 
    //     const countRun = setInterval(() => {
    //     setCount(
    //         count < imageList.length-1 ? count + 1 : 0 ); // count가 imageList.length(5개)보다 작으면 count +1 추가를 한다. count는 0부터 시작을 한다.
    //         setImgSrc(url+imageList[count]); // setImgSrc는 url+imageList[count]
    //     },1000);
    //     return ()=> clearInterval(countRun) 
    // },[count])

    // 다음이미지 버튼을 클릭을 하면 이미지가 바뀌게 한다.
    useEffect( ()=> setImgSrc(url+imageList[count]) ,[count]); // 실행을 위해서는 useEffect를 필수로 사용을 해야된다.
    const handlerImg = ()=> setCount( count < imageList.length-1 ? count + 1 : 0 ); // onclick으로 만든 변수명을 0~5까지 숫자 카운트에 넣는다.

   
;
    return (
        <div className="App">
            <p>
                {count}
                <img src={imgSrc} alt="임시 이미지 작성" />
            </p>
            <div className='btn'><button className='button' onClick={handlerImg}>다음이미지</button></div>
            <div className='formSet'>
                <label htmlFor="textInput">이름 : </label>
                <input type="text" onChange={handlerInput}
                        id="textInput" name="text__Input"
                        required placeholder="이름을 입력하세요." />
            </div>
            <div className='formSet'>
                <label htmlFor="pwInput">비밀번호 : </label>
                <input type={view} onChange={handlerPassword}
                        // onMouseEnter={handlerview} onMouseLeave={handlerBlind}
                        id="pwInput" name="pw__Input"
                        required placeholder="비밀번호를 입력하세요." />
                {/* <button type="button" onClick={handlerBtn}>비번보기</button> */}
                {/* <button type="button" onMouseDown={handlerview} onMouseUp={handlerBlind}>비번보기</button> */}
            </div>
            <p>입력한 id :<span>{user}</span></p>
            <p>입력한 비번 :<span>{pw}</span></p>
        </div>
    )
}

export default App;