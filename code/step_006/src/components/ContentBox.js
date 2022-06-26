// ContentBox.js
import MainSlide from './template/MainSlide';
import Curriculam from './template/Curriculam';

import './ContentBox.css';

function ContentBox(){
    return (
        <main id="ContentBox">
            <MainSlide />
            <Curriculam />
        </main>
    )
}

export default ContentBox;