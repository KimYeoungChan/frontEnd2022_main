import logo from './logo.svg';
import './App_source.scss';

// imoport는 src 폴더
// 함수내부는 public 폴더

function App() {

  const audioImg = `url(${process.env.PUBLIC_URL}img/Audio.svg)`;

  return (
    <div className="App">
      <h1 className='blind_area'>
        <a href="#" style={{backgroundImage:`url(${logo})`}}>
          <span>commpany</span>
        </a>
      </h1>

      {/* 함수내부안에서는 불로는 기준은 퍼블릭 */}
      <div className='size' style={{backgroundImage : audioImg}}></div>
      <div className='size'>
        <img src={`${process.env.PUBLIC_URL}img/Audio.svg`} alt='#' />
      </div>
    </div>
  );
}

export default App;
