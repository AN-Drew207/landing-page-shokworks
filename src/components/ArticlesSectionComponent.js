import React from 'react'
import imgFirst from '../img/what-can-you-build@2x.png'
import imgSecond from '../img/article-image-5@2x.png'

const ArticleComponent = () =>{
    return (
        <>
            <section className="article-section">
                <article className="content-article">
                    <h2 className="title">
                        The Process About Our Work
                    </h2>
                    <p className="paragraph-article">
                        Alejandro Laplana leads and adaptable end-to-end development team consisting of a large portion of captable enterprise mixed reality solutions.
                    </p>
                    <div className="btn-group">
                        <button className="btn-white">Know More</button>
                    </div>
                </article>
                <div className="img-container">
                    <img className="img-article" src={imgFirst} alt="stock" />
                </div>
            </section>
            <section className="article-section">
                <div className="img-container">
                    <img className="img-article" src={imgSecond} alt="stock" />
                </div>
                <article className="content-article">
                    <h2 className="title">
                        We are here to <strong>always help</strong>  you
                    </h2>
                    <p className="paragraph-article">
                        Shokworks team provide solutions and guidance to every project, 
                        taking the project vision to high level.
                    </p>
                </article>
            </section>
        </>
    )
}

export default ArticleComponent;
