import React, {useState, useEffect} from 'react'
import inmeristy from '../img/big_immersity_logo@2x.png'
import wikipass from '../img/logo_ipass@2x.png'
import mobile from '../img/Group_94@2x.png'
import kinesis from '../img/logo-rojo@2x.png'
import goodTimes from '../img/Group_2788@2x.png'
import mexperience from '../img/logo_splash@2x.png'


const PartnersClientsComponent = () =>{

    const [gridTwoColumns, setGridTwoColumns]=useState(false)

    useEffect(() => {
        if(window.screen.width<500){
            setGridTwoColumns(()=>true)
        }else{
            setGridTwoColumns(()=>false)
        }
        window.addEventListener('resize', ()=>{
            if(window.screen.width<500){
                setGridTwoColumns(()=>true)
            }else{
                setGridTwoColumns(()=>false)
            }
        })
    },[])


    return( 
        <section className="section">
            <h2 className="title"><strong>Our Partners & Clients</strong></h2>
            <div className="partners-clients">
                {
                    gridTwoColumns ||
                    <>
                    <div className="partners-clients-column">
                        <div className="partners-container">
                            <div className="img-container">
                                <img className="img-partners" src={inmeristy} alt="" />
                            </div>
                            <div className="paragraph-container">
                                <p className="learn-more">Learn More</p>
                            </div>
                        </div>
                        <div className="partners-container">
                            <div className="img-container">
                                <img className="img-partners white" src={mexperience} alt="" />
                            </div>
                            <div className="paragraph-container">
                                <p className="learn-more">Learn More</p>
                            </div>
                        </div>
                    </div>
                    <div className="partners-clients-column-center">
                        <div className="partners-container">
                            <div className="img-container">
                                <img className="img-partners white"  src={wikipass} alt="wikipass" />
                            </div>
                            <div className="paragraph-container">
                                <p className="learn-more">Learn More</p>
                            </div>
                        </div>
                        <div className="partners-container">
                            <div className="img-container">
                                <img className="img-partners white" id="mobile" src={mobile} alt="mobile" />
                            </div>
                            <div className="paragraph-container">
                                <p className="learn-more">Learn More</p>
                            </div>
                        </div>
                    </div>
                    <div className="partners-clients-column">
                        <div className="partners-container">
                            <div className="img-container">
                                <img className="img-partners white" src={kinesis} alt="kinesis" />
                            </div>
                            <div className="paragraph-container">
                                <p className="learn-more">Learn More</p>
                            </div>
                        </div>
                        <div className="partners-container">
                            <div className="img-container">
                                <img className="img-partners white" src={goodTimes} alt="" />
                            </div>
                            <div className="paragraph-container">
                                <p className="learn-more">Learn More</p>
                            </div>
                        </div>
                    </div>
                </>
                }
                {
                    gridTwoColumns &&
                    <>
                    <div className="partners-clients-column">
                        <div className="partners-container">
                            <div className="img-container">
                                <img className="img-partners" src={inmeristy} alt="" />
                            </div>
                            <div className="paragraph-container">
                                <p className="learn-more">Learn More</p>
                            </div>
                        </div>
                        <div className="partners-container">
                            <div className="img-container">
                                <img className="img-partners white" src={mexperience} alt="" />
                            </div>
                            <div className="paragraph-container">
                                <p className="learn-more">Learn More</p>
                            </div>
                        </div>
                        <div className="partners-container">
                            <div className="img-container">
                                <img className="img-partners white"  src={wikipass} alt="wikipass" />
                            </div>
                            <div className="paragraph-container">
                                <p className="learn-more">Learn More</p>
                            </div>
                        </div>
                    </div>
                    <div className="partners-clients-column">
                        <div className="partners-container">
                            <div className="img-container">
                                <img className="img-partners white" id="mobile" src={mobile} alt="mobile" />
                            </div>
                            <div className="paragraph-container">
                                <p className="learn-more">Learn More</p>
                            </div>
                        </div>
                        <div className="partners-container">
                            <div className="img-container">
                                <img className="img-partners white" src={kinesis} alt="kinesis" />
                            </div>
                            <div className="paragraph-container">
                                <p className="learn-more">Learn More</p>
                            </div>
                        </div>
                        <div className="partners-container">
                            <div className="img-container">
                                <img className="img-partners white" src={goodTimes} alt="" />
                            </div>
                            <div className="paragraph-container">
                                <p className="learn-more">Learn More</p>
                            </div>
                        </div>
                    </div>
                </>

                }
                
            </div>
        </section>
    )
}

export default PartnersClientsComponent