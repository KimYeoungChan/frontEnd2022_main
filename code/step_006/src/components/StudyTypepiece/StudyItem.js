// StudyItem.js
import './StudyItem.css'

function StudyItem (){
    return (
    <li className='StudyItem'>
        <a href="#">
            <div className="skill_tip">
                <div className="software_icon excel"></div>
                <div className="label">글로벌 Best</div>
                <div className="price sale_on">
                    <span className="origin">99,000</span>
                    <span className="sale">19,000</span>
                    <span className="unit">원</span>
                </div>
            </div>
            <dl>
                <dt>[keyword] 관련된 제목
                    추가 복잡한 제목의 텍스트를 작성해 봅시다!!!
                </dt>
                <dd>
                    <span className="option">디자인</span>
                    <span className="company">강의 제공자와 관련된 요약 내용을 작성</span>
                </dd>
            </dl>
        </a>
    </li>
    );
}

export default StudyItem;