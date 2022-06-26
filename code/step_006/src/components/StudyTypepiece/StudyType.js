// StudyType.js
import StudyItem from './StudyItem';
import './StudyType.css'

function StudyType(props){
    const cardArr = [
        {
            id:1,
            skillTip:{icon:'', label:'', price:'', minPrice:'', bg:'', url:''},
            content:{cardTitle:'[경영] 어쩌구', option:'경영', company:''},
        },
        {
            id:2,
            skillTip:{icon:'', label:'', price:'', minPrice:'', bg:'', url:''},
            content:{cardTitle:'[디자인] 어쩌구 저쩌구', option:'디자인', company:''},
        },
        {
            id:3,
            skillTip:{icon:'', label:'', price:'', minPrice:'', bg:'', url:''},
            content:{cardTitle:'[디자인] 어쩌구 저쩌구', option:'디자인', company:''},
        },
        {
            id:4,
            skillTip:{icon:'', label:'', price:'', minPrice:'', bg:'', url:''},
            content:{cardTitle:'[global] 어쩌구 저쩌구', option:'아무거나', company:''},
        },
    ];

    const items = cardArr.map(data =>{
        return <StudyItem
        key={data.id}
        cardTitle={data.content.cardTitle}
        option={data.content.option}
        />
    })

    return(
        <div className='StudyType'>
            <h3>{props.title}</h3>
            <ul>
                {items}
             </ul>
        </div>
    )
}

export default StudyType;