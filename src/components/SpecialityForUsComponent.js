import React, {useState, useEffect} from 'react' 
import left from '../img/arrow-left@2x.png'
import right from '../img/arrow-right@2x.png'


const SpecialityForUsComponent = () =>{

    const [articlesShown, setArticlesShown]=useState([])
    const [actualPos, setActualPos]=useState(-50)
    const [actualItem, setActualItem]=useState(0)
    const [itemsPerView, setItemsPerView] =useState(4);
    const [translate, setTranslate]=useState({transform: 0})


    useEffect(() => {

        /*Ajuste de items que se ven en la pantalla del carousel*/ 
        let itemsPerViewFirst= itemsPerView;
        if(window.screen.width<800){
            setItemsPerView(2)
            itemsPerViewFirst=2;
        }else if(window.screen.width<1200){
            setItemsPerView(3)
            itemsPerViewFirst=3;
        }else{
            itemsPerViewFirst=4;
        }
        fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5b2cf31997294ce88d8b7df08c02c8be')
            .then(response => response.json())
            .then(json => {
                setArticlesShown(()=>[json.articles[json.articles.length-1],...json.articles,json.articles[0]])
                setTranslate(()=>{return{transition:"0.5s",transform: `translateX(${actualPos}%)`}})
                setActualItem(()=>1)
                window.addEventListener('resize', ()=>{
                    if(window.screen.width<800){
                        setItemsPerView(2)
                        itemsPerViewFirst=2;
                    }else if(window.screen.width<1200){
                        setItemsPerView(3)
                        itemsPerViewFirst=3;
                    }else{
                        setItemsPerView(4)
                        itemsPerViewFirst=4;
                    }    
                    setActualPos(-50)
                    setTranslate({transition:"0.5s",transform: `translateX(${-50}%)`})
                    setActualItem(()=>1)
                })
            })
    },[])

    useEffect(()=>{
        if(actualItem!==0){
            console.log(articlesShown)
            var i,j;
            for(i=0;i<articlesShown.length;i++){
                var xd=document.getElementsByClassName(articlesShown[i].url)
                for( j=0;j<xd.length;j++){
                    xd[j].classList.add("blur")
                }
            }
            for(i=actualItem;i<actualItem+itemsPerView-1;i++){
                xd=document.getElementsByClassName(articlesShown[i].url)
                
               for(j=0;j<xd.length;j++){
                   xd[j].classList.remove("blur")
               }
            }
        }
    },[actualItem, itemsPerView])


    const leftMove =()=>{
        /*If para cuando está en el primer elemento, para pasar al último*/
            if(actualPos===-50){
                setTranslate(()=>{return{transition:"0.5s",transform: `translateX(${-(((articlesShown.length-itemsPerView))*100)+50}%)`}})
                setActualPos(()=>-(((articlesShown.length-itemsPerView))*100)+50)
                setActualItem(articlesShown.length-itemsPerView);
            }else{
                setTranslate(()=>{return{transition:"0.5s",transform: `translateX(${actualPos+100}%)`}})
                setActualPos(prev=>prev+100)
                setActualItem(prev=>prev-1)
            }

    }

    const rightMove = () =>{
        /*If para cuando está en el último elemento, para pasar al primero*/
        if(actualPos===-(((articlesShown.length-itemsPerView))*100)+50){
            setTranslate(()=>{return{transition:"0.5s",transform: `translateX(${-50}%)`}})
            setActualPos(()=>-50)
            setActualItem(1);
        }else{
            setTranslate(()=>{return{transition:"0.5s",transform: `translateX(${actualPos-100}%)`}})
            setActualPos(prev=>prev-100)
            setActualItem(prev=>prev+1)
        }
        
    }

    return( 
        <section className="section" id="speciality-for-us">
            <h2 className="title">What is the <strong>Speciality Of Us</strong></h2>
            <div className="carousel">
                <div className="carousel-inner">
                    {
                        articlesShown.map(article =>{
                            return(
                                <div className="carousel-item-container" style={translate}>
                                    <div className={"carousel-item blur "+article.url}>
                                        <div className={"img-container-carousel blur "+article.url}>
                                            <img className="carousel-item-img" src={article.urlToImage} alt={article.source.name} />
                                        </div>
                                        <div  className="content-carousel-item">
                                            <h5 className="title-carousel-item">{article.title}</h5>
                                            <p className="description-carousel-item">{article.source.name}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="btn-container">
                    <button className="btn" onClick={leftMove}><img src={left} alt="" /></button>
                    <button className="btn" onClick={rightMove}><img src={right} alt="" /></button>
                </div>
            </div>
        </section>
    )
}

export default SpecialityForUsComponent;