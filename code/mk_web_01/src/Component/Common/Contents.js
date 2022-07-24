import React from 'react'
import {Routes as RoutesWrap, Route } from 'react-router-dom'
import About from '../../Page/About';
import Work from '../../Page/Work';
import Services from '../../Page/Services';
import Technologies from '../../Page/Technologies';
import Modern from '../../Page/Modern';
import Faq from '../../Page/Faq';
import Supports from '../../Page/Supports';
import Blog from '../../Page/Blog';
import Main from '../../Page/Main';
import Error from '../../Page/Error';

function Contents() {
  const pageList = [
    {link:'/', page:<Main />}, 
    {link:'about', page:<About />}, 
    {link:'work', page:<Work />}, 
    {link:'services', page:<Services />}, 
    {link:'technologies', page:<Technologies />}, 
    {link:'modern', page:<Modern />}, 
    {link:'faq', page:<Faq />}, 
    {link:'supports', page:<Supports />}, 
    {link:'blog', page:<Blog />},
    {link:'*', page:<Error />},
  ];
  

  return (
    <main className='content_area'>
      <h2>Contents</h2>
      <RoutesWrap>
        { pageList.map((component, index)=>
        <Route key={index} path={component.link} element={component.page} />)
        }
      </RoutesWrap >
    </main>
  )
}

export default Contents