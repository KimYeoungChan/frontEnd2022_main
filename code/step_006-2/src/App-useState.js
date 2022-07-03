import { useEffect, useState } from 'react';
import './App.css';

function App() {

  //카운트 업 외에 사용하는데는?
  // 방금전 사용한 카운트업은 왜 에러가 갔을가? -> 해결방법은?
  
  const [number, setNumber] = useState(0);
  const [view, setView] = useState(false);
  const data = ['banana', 'graph', 'orange', 'strawberry' ];
  const [dataNum, setDataNum] = useState( 0 );
  const [myClass, setMyclass] = useState( 'on' );
  
  const date = new Date();
  const myYear = date.getFullYear(); // 년만 추출
  const myMonth = date.getMonth() + 1 ; // 월만 추출 +1를 하는것은 1월이 0으로 시작이 되기 때문에
  const myDay = date.getDate(); // 일만 추출
  const week = ['일','월','화','수','목','금','토']
  const myDayWeek = week[date.getDay()]; //
  const myH = date.getHours() < 12 ? date.getHours() : Math.ceil(date.getHours()- 12);
  // const myH = date.getHours();
  const myM = date.getMinutes();
  const myS = date.getSeconds();
  
  const [myDate,setDate] = useState(0);

  console.log( myYear, myMonth, myDay , myDayWeek );
  console.log( myH, myM, myS );

  useEffect(()=>{
    const interval = setInterval(() => { setDate( myS ); }, 1000)
    return ()=>{ clearInterval( interval ); }
    });

  

  console.log( dataNum );

  // setNumber = function(number){ return number+1}

  const handlerClick = function(e){
    e.preventDefault();
    setNumber( number < 10 ? number + 1 : 0 ); //풀이2
    // number < 10 ? setNumber(number+1) : setNumber(0); // 풀이1
  };

  const [cssView,setCssView] = useState('block');
  const handlerShow = function(e){
    e.preventDefault();
    setCssView( cssView === 'block' ? 'none' : 'block' ); // 풀이3

    // setView( view ? false : true ); 풀이1
    // view ? setView(false) : setView(true);// 풀이2
    console.log( view );
  }

  const box = {
    width:'auto',
    maxWidth:'600px',
    margin:'20px auto',
    border:'1px solid #567',
    backgroundColor:'#eff',
    boxSizing:'border-box'
  };

  const viewStyle = { 
    display: cssView
    // (view ? 'block' : 'none') // view가 true이면 display: block / view가 false이면 display: none; 
  }; 

  const handlerCount = function(){
    setDataNum( dataNum < data.length-1 ?  dataNum + 1 : 0 );
    // dataNum < data.length -1  ? setDataNum( dataNum + 1 ) : setDataNum (0);
    // dataNum이 data의 갯수-1 보다 작으면 setDataNum값은 dataNum의 +1값이다.
  }

  const handlerclassName = function(){
    // myClass class이름 on의 이름 유무처리
    // myClass변수명이 on이냐 아니냐?
    // setMyclass(myClass === 'on' ? '': 'on'); // 풀이1
    // myClass ? setMyclass('') : setMyclass('on') ; 풀이2
    let sam;
    myClass === 'on' ? sam = '': sam = 'on';
    setMyclass(sam); // 풀이 3
  }

  return (
    <div className="App">
    <div className='box' style={box}>
    <div>{number}</div>
    <div><button type="button" onClick={handlerClick}>클릭</button></div>
    </div>

        <div style={box}>
          <div className='view' style={viewStyle}>보이게만들기</div>
          <div>
            <button onClick={handlerShow}>show/hide</button>
          </div>
        </div>

    <div style={box}>
      <p>{data[dataNum]}</p>
      <div><button onClick={handlerCount}>countUp</button></div>
    </div>

    <div style={box} className='viewOn'>
      <p className={myClass}>classNameSet</p>
      <div><button onClick={handlerclassName}>className</button></div>
    </div>

      <p>{myDate}</p>
    </div>
  );
}

export default App;
