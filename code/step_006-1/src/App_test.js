import './App.css';
// import를 통해서 src 경로를 통해서 image, js, css, data

function CardCompnent( props ){
  // image, data, js -> public/
  const price = parseInt(props.price);
  const koreaPrice = price.toLocaleString('ko-KR');
  const fnImage = () => {
    // retrun (!!props.url) ? props.url +  props.image 'image/flaticon/' + props.image;
    let imgUrl = null;
    if(!!props.url){
      imgUrl = props.url + props.image;
    }else {
      imgUrl = 'image/flaticon/' +  props.image;

    }
    return imgUrl;
  ;}  

  return (
    <li>
      {/* <div className="image" style={{backgroundImage: `url('${props.url +props.image}`}}></div> */}
      <div className="image" style={{backgroundImage: `url('${fnImage()}`}}></div>
      <dl>
        <dt>{props.title}</dt>
        <dd>{props.content}</dd>
        <dd>{ (!!props.narr)? props.narr : '설명이 들어가는 자리' }</dd>
        <dd className='price'>{koreaPrice}원</dd>
      </dl>
    </li>
  );
}

function App() {
  const listApp = [];
  // for(let i=0; i<4; i++){
  //   listApp.push(<List/>);
  // }  //for문으로 만든 반복문

  const cardData = [
    {id:1, title:'my Title 01',content:'content_01', price:'3000', narr:'카드설명',
     url:'', image:'001-turtle.png', link:''},
    {id:2, title:'my Title 02',content:'content_02', price:'6000',
     url:'https://picsum.photos/id', image:'/238/200/300', link:''},
    {id:3, title:'send title',content:'content_03', price:'12000', narr:'',
     url:'https://picsum.photos/id/', image:'/239/200/300', link:''},
    {id:4, title:'title code',content:'content_04', price:'15000', narr:'', 
    url:'https://picsum.photos/id/', image:'/240/200/300', link:''},
  ];

  const cardList = [];
  for(let i=0; i<cardData.length; i++){
    cardList.push( 
    <CardCompnent
      key={cardData[i].id}
      title={cardData[i].title}
      content={cardData[i].content}
      price={cardData[i].price}
      narr={cardData[i].narr}
      url={cardData[i].url}
      image={cardData[i].image}
      />
      );
  }


  return (
    <div className="App">
      <ol>
        {/* <List title='my Title 01' content='content_01' price='3000'/>
        <List title='my Title 02' content='content_02' price='6000'/>
        <List title='send title' content='content_03' price='12000'/>
        <List title='title code' content='content_04' price='15000'/> */}
        {cardList}
      </ol>
      <CardZinmall />
    </div>
  );
}

export default App;
