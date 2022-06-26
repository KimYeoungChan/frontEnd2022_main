import './App.css'

function CardList(){
    return(
        <li>
            <a href="#">
                <div className='roundImage'></div>
                <p>[Photoshop] 개념부터 시작하는 포토샵 강좌</p>
                <span>디자인</span>
                <div className='name'>
                    <span>쏘이 디자이너</span>
                </div>
            </a>
        </li>
    )
}

function App() {
    return(
        <div className='App'>
            <h2>[디자인] 지금보다 딱! 2배 연봉~</h2>
            <ul className='roundCard'>
                <CardList />
                <CardList />
                <CardList />
                <CardList />
            </ul>
        </div>
    )
}


export default App;