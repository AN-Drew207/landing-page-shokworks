import React from 'react'
import imgMain from '../img/community1@2x.png'

const MainSectionComponent = () =>{
    return(
        <section id="main-section">
            <div className="img-container">
                <img className="img-main" src={imgMain} alt="" />
            </div>
            <div className="title-container">
                <h1 className="main-title">A Brand New Way to See the World</h1>
            </div>
            <div className="btn-group">
                <div>
                    <button className="btn-blue contact-us-btn">Our Works</button>
                </div>
                <div>
                    <button className="btn-white">Know More</button>
                </div>
            </div>
        </section>
    )
}

export default MainSectionComponent