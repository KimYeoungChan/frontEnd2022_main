import React from 'react'
import './Company.scss'

function Company() {
  return (
    <article id="compony">
      <h3 className='blind'>compony info</h3>
      <div className="company_area our_company">
        <div className="image">
          <span className="blind">이미지설명</span>
        </div>

        <div className="detail_contens">
        <h4>our company</h4>
        <dl>
          <dt>Creactor of quality designs<br />
          and thniker of fresh ideas.</dt>
          <dd className='nrr'>Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Nihil, dolore.
          </dd>
        </dl>
        <div className="more_link">
          <a href="#">read more</a>
        </div>
        </div>
        
        

      </div>

      <div className="company_area the_difference">
        <div className="image">
          <span className="blind">이미지설명</span>
        </div>
        <div className="detail_contens">
          <h4>the_difference</h4>
          <dl className='detail_list'>
            <dt>Experience true business performance increases</dt>
            <dd className='data_count'>
              <dl className='count_items'>
                  <dt>business increase</dt>
                  <dd>
                    <span className='count'>87</span>
                    <span className='unit'>+</span>
                    </dd>
                  <dd>Lorem ipsum dolor sit amet consectetur adipisicing elit.</dd>
              </dl>
            
              <div className='count_items'>
                  <dt>new accounts</dt>
                  <dd><span className='count'>267</span></dd>
                  <dd>Lorem ipsum dolor sit amet consectetur adipisicing elit.</dd>
              </div>

            </dd>
          </dl>
        </div>
        

      </div>
    </article>
  )
}

export default Company