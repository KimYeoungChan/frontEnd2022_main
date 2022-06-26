import './App.css';

function ListItem(props){
    return (
        <li>
            <a href={props.link}>
                <div className='roundImage' style={{backgroundImage:`url(${props.image})`}}></div>
                <p>content</p>
            </a>
        </li>
    )
}

function App() {
    const listDate = [
        {content:'content_001', image:'https://picsum.photos/id/237/200/300', link:'#' },
        {content:'content_002', image:'https://picsum.photos/id/247/200/300', link:'#' },
        {content:'content_003', image:'https://picsum.photos/id/257/200/300', link:'#' },
        {content:'content_004', image:'https://picsum.photos/id/267/200/300', link:'#' }
    ];

    let itemCode = [];
    itemCode= listDate.map((data,index)=>{
        return <ListItem
        key={index}
        content={data.content}
        image={data.image}
        linke={data.link}
        />
    })

  return (
    <div className='App'>
        <h2>지인몰</h2>
        <ul className='roundCard'>
           {itemCode}
        </ul>
    </div>
  )
}

export default App;