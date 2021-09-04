import React, {useState, useEffect} from 'react' 
import left from '../img/arrow-left@2x.png'
import right from '../img/arrow-right@2x.png'
import firstPerson from '../img/Ellipse 350.png'
import secondPerson from '../img/Ellipse 348.png'
import thirdPerson from '../img/Ellipse 347.png'
import fourthPerson from '../img/Ellipse 346.png'
import fifthPerson from '../img/Ellipse 344.png'

const WhatOurClientsSays = () =>{
    const [testimonies, setTestimonies]=useState([])
    const [actualTestimony, setActualTestimony]=useState({
                                                    testimony:"",
                                                    author:""
                                                })
                                                

    const [fixedStyles]=useState([
        {
            className:"img1",
        },
        {
            className:"img2",
            height: "100px",
            top: "10%",
            left: "10%",
        },
        {
            className:"img3",
            height: "80px",
            top: "80%",
            left: "75%",
        },
        {
            className:"img4",
            height: "60px",
            top: "80%",
            left: "25%",
        },
        {
            className:"img5",
            height: "120px",
            top: "0%",
            left: "80%",
        }

    ])                                            

    const [stylesImg, setStylesImg]=useState({
        img1:fixedStyles[0],
        img2:fixedStyles[1],
        img3:fixedStyles[2],
        img4:fixedStyles[3],
        img5:fixedStyles[4]
    })
    

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) =>{
            setTestimonies([json[0],json[1],json[2],json[3],json[4]]);
            setActualTestimony({testimony:json[0].body,author:json[0].title, index:0})
        });


    },[])

    /*Sets de posición del carousel cuando se mueve a la izquierda*/
    const leftMove = () =>{
        setStylesImg((prev)=>{
            if(prev.img1.className==="img1"){
                return {
                    img1:fixedStyles[4],
                    img2:fixedStyles[3],
                    img3:fixedStyles[2],
                    img4:fixedStyles[1],
                    img5:fixedStyles[0],
                }
            }else if(prev.img2.className==="img1"){
                return {
                    img1:fixedStyles[0],
                    img2:fixedStyles[4],
                    img3:fixedStyles[3],
                    img4:fixedStyles[2],
                    img5:fixedStyles[1],
                }
            }else if(prev.img3.className==="img1"){
                return {
                    img1:fixedStyles[4],
                    img2:fixedStyles[0],
                    img3:fixedStyles[3],
                    img4:fixedStyles[2],
                    img5:fixedStyles[1],
                }

            }else if(prev.img4.className==="img1"){
                return {
                    img1:fixedStyles[4],
                    img2:fixedStyles[3],
                    img3:fixedStyles[0],
                    img4:fixedStyles[2],
                    img5:fixedStyles[1],
                }

            }else{
                return {
                    img1:fixedStyles[4],
                    img2:fixedStyles[3],
                    img3:fixedStyles[2],
                    img4:fixedStyles[0],
                    img5:fixedStyles[1],
                }
            }
        })
        setActualTestimony((prev)=>{
            if(prev.index===0){
                return{
                    testimony:testimonies[testimonies.length-1].body,
                    author: testimonies[testimonies.length-1].title,
                    index: testimonies.length-1
                }
            }else{
                return{
                    testimony:testimonies[prev.index-1].body,
                    author: testimonies[prev.index-1].title,
                    index: prev.index-1
                }
            }
        })
        
    }

    /*Sets de posición del carousel cuando se mueve a la derecha*/
    const rightMove = () =>{
        setActualTestimony((prev)=>{
            if(prev.index===testimonies.length-1){
                return{
                    testimony:testimonies[0].body,
                    author: testimonies[0].title,
                    index: 0
                }
            }else{
                return{
                    testimony:testimonies[prev.index+1].body,
                    author: testimonies[prev.index+1].title,
                    index: prev.index+1
                }
            }
        })
        setStylesImg((prev)=>{
            if(prev.img1.className==="img1"){
                return {
                    img1:fixedStyles[4],
                    img2:fixedStyles[0],
                    img3:fixedStyles[3],
                    img4:fixedStyles[2],
                    img5:fixedStyles[1],
                }
            }else if(prev.img2.className==="img1"){
                return {
                    img1:fixedStyles[4],
                    img2:fixedStyles[3],
                    img3:fixedStyles[0],
                    img4:fixedStyles[2],
                    img5:fixedStyles[1],
                }
            }else if(prev.img3.className==="img1"){
                return {
                    img1:fixedStyles[4],
                    img2:fixedStyles[3],
                    img3:fixedStyles[2],
                    img4:fixedStyles[0],
                    img5:fixedStyles[1],
                }

            }else if(prev.img4.className==="img1"){
                return {
                    img1:fixedStyles[4],
                    img2:fixedStyles[3],
                    img3:fixedStyles[2],
                    img4:fixedStyles[1],
                    img5:fixedStyles[0],
                }

            }else{
                return {
                    img1:fixedStyles[0],
                    img2:fixedStyles[4],
                    img3:fixedStyles[3],
                    img4:fixedStyles[2],
                    img5:fixedStyles[1],
                }
            }
        })
    }

    return( 
        <section id="what-says" className="section">
            <h2 className="title">What Our <strong>Clients Says?</strong></h2>
            <div className="carousel-special">
                <img className={"img "+ stylesImg.img1.className} style={stylesImg.img1} src={firstPerson} alt="" />
                <img className={"img "+ stylesImg.img2.className} style={stylesImg.img2} src={secondPerson} alt="" />
                <img className={"img "+ stylesImg.img3.className} style={stylesImg.img3} src={thirdPerson} alt="" />
                <img className={"img "+ stylesImg.img4.className} style={stylesImg.img4} src={fourthPerson} alt="" />
                <img className={"img "+ stylesImg.img5.className} style={stylesImg.img5} src={fifthPerson} alt="" />
                <div className="carousel-special-inner">
                    <div className="person-container">
                        <div className="img-testimony">
                        </div>
                        <div className="testimony-container">
                            <img src="" alt="" />
                            <h4 className="testimony">
                                {actualTestimony.testimony}
                            </h4>
                            <img src="" alt="" />
                        </div>
                        <p className="testimony-author">
                            {actualTestimony.author}
                        </p>
                    </div>
                </div>
                <div className="btn-container">
                    <button onClick={leftMove} className="btn"><img src={left} alt="" /></button>
                    <button onClick={rightMove} className="btn"><img src={right} alt="" /></button>
                </div>
            </div>
        </section>
    )
}

export default WhatOurClientsSays