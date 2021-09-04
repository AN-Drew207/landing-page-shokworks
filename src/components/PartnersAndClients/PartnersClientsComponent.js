import React, {useState, useEffect} from 'react'
import inmeristy from '../../img/big_immersity_logo@2x.png'
import wikipass from '../../img/logo_ipass@2x.png'
import mobile from '../../img/Group_94@2x.png'
import kinesis from '../../img/logo-rojo@2x.png'
import goodTimes from '../../img/Group_2788@2x.png'
import mexperience from '../../img/logo_splash@2x.png'
import ClientItemComponent from './ClientItemComponent'


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
                        <ClientItemComponent
                            classes=""
                            id="inmeristy"
                            img={inmeristy}
                        />
                        <ClientItemComponent
                            classes="white"
                            id="mexperience"
                            img={mexperience}
                        />
                    </div>
                    <div className="partners-clients-column-center">
                        <ClientItemComponent
                            classes="white"
                            id="wikipass"
                            img={wikipass}
                        />
                        <ClientItemComponent
                            classes="white"
                            id="mobile"
                            img={mobile}
                        />
                    </div>
                    <div className="partners-clients-column">
                        <ClientItemComponent
                            classes="white"
                            id="kinesis"
                            img={kinesis}
                        />
                        <ClientItemComponent
                            classes="white"
                            id="good-times"
                            img={goodTimes}
                        />
                    </div>
                </>
                }
                {
                    gridTwoColumns &&
                    <>
                    <div className="partners-clients-column">
                        <ClientItemComponent
                            classes=""
                            id="inmeristy"
                            img={inmeristy}
                        />
                        <ClientItemComponent
                            classes="white"
                            id="mexperience"
                            img={mexperience}
                        />
                        <ClientItemComponent
                            classes="white"
                            id="wikipass"
                            img={wikipass}
                        />
                    </div>
                    <div className="partners-clients-column">
                        <ClientItemComponent
                            classes="white"
                            id="mobile"
                            img={mobile}
                        />
                        <ClientItemComponent
                            classes="white"
                            id="kinesis"
                            img={kinesis}
                        />
                        <ClientItemComponent
                            classes="white"
                            id="good-times"
                            img={goodTimes}
                        />
                    </div>
                </>

                }
                
            </div>
        </section>
    )
}

export default PartnersClientsComponent