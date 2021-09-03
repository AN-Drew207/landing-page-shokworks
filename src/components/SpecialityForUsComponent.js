import React, {useState, useEffect} from 'react' 


const SpecialityForUsComponent = () =>{

    const [articles, setArticles]=useState([])
    const [articlesShown, setArticlesShown]=useState([])
    const [start, setStart]=useState(0)
    const [actualPos, setActualPos]=useState(0)
    const [translate, setTranslate]=useState({transform: 0})
    let cont=0;

    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5b2cf31997294ce88d8b7df08c02c8be')
            .then(response => response.json())
            .then(json => {
                setArticlesShown(json.articles)
                console.log(json)

            })
    },[])

    const izquierdaMove =()=>{
        setTranslate(()=>{return{transition:"0.5s",transform: `translateX(${actualPos-100}%)`}})
        setActualPos(prev=>prev-100)
    }

    const derechaMove = () =>{
        setTranslate(()=>{return{transition:"0.5s",transform: `translateX(${actualPos+100}%)`}})
        setActualPos(prev=>prev+100)
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
                                    <div className="carousel-item" >
                                        <div className="img-container-carousel">
                                            <img className="carousel-item-img" src={article.urlToImage} alt="" />
                                        </div>
                                        <div className="content-carousel-item">
                                            <h5 className="title-carousel-item">{article.title}</h5>
                                            <p className="description-carousel-item">{article.source.name}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <button className="btn btn-prev" onClick={izquierdaMove}>izquierda</button>
                <button className="btn btn-next" onClick={derechaMove}>derecha</button>
            </div>
        </section>
    )
}

export default SpecialityForUsComponent;