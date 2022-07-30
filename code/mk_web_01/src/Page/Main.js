import React, { useEffect, useState } from 'react'
import CardApp from '../Component/CardApp'
import CardUser from '../Component/CardUser';
import axios from 'axios';
import CardLink from '../Component/CardLink';
import CardMore from '../Component/CardMore';

function Main() {
  
  const [isDark,setisDark] = useState(true);
  const [photoJson, setPhotoJson] = useState(null);
  const [myUser, setMyUser] = useState(null);
    // id:'',
    // name : {first:'', last:''},
    // image:''
  

  const CardStyle = {
    width:'100%', height:'auto', padding:'30px 0',
    backgroundColor:'#cff', display:'flex', justifyContent:'center', gap:'40px',
    flexWrap:'wrap'
  }

  useEffect( ()=>{ // id.value name.first, name.last , picture.medium
    axios('https://randomuser.me/api/?results=10')
    .then(response => setPhotoJson(response.data.results))
  },[]);

  // console.log ('photoJson', photoJson);
  const userCode = photoJson && photoJson.map(
    (data, index) => ({num:index,
                        position: data.id.value,
                        first : data.name.first,
                        last: data.name.last,
                        image: data.picture.large})
                      )
  // console.log( userCode );

return (
    <div>
      {/* Main */}
      <article id="main"> <h3>main title</h3> </article>
      <article id="amazing">

        <h3>amazing service</h3>
        <p>Lorem ipsum dolor sit amet <br />
        consectetur adipisicing elit. Ut reprehenderit, vel rem quisquam quam amet?</p>

        <div className="card_wrap" style={CardStyle}>
  
          {/* {userCode && userCode.map(data=>
            <CardUser key={data.num} bgImg={data.image}
                      userName= {data.first}
                      useFamily= {data.last}
                    userPosition= {data.first} />
            )} */}

          {userCode && userCode.map((data) => 
            <CardLink 
              key={data.num}
              bgImg = {data.image}
              userName={data.first}
              useFamily= {data.last}
              userPosition= {data.position}
            /> 
            )}

          <CardApp isDark={true}>
            <h3>title_01</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </CardApp>

          {/* <CardApp>
            <h3>title_02</h3>
            <p>Lorem ipsum dolor sit amet.</p>
            <div><a href="#">link</a></div>
          </CardApp>

          <CardApp>
            <h3>title_03</h3>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
          </CardApp>

          <CardApp>
            <h3>title_04</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </CardApp>

          <CardApp>
            <h3>title_05</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </CardApp> */}
        </div>

        
          {/* <CardLink></CardLink> */}
          {/* <CardMore></CardMore> */}

        </article>
      <article id="compony"> <h3>compony info</h3> </article>
      <article id="pricing"> <h3>pricing plans</h3> </article>
      <article id="testimonals"> <h3>testimonals</h3> </article>
      <article id="lastest"> <h3>lastest news</h3> </article>
      <article id="experience"> <h3>experience</h3> </article>
    </div>
  )
}

export default Main