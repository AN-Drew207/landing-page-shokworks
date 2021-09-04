import React from 'react' 

const ClientItemComponent = ({classes, id, img}) =>{

    return(
        <div className="partners-container">
            <div className="img-container">
                <img className={"img-partners "+classes} id={id} src={img} alt={id} />
            </div>
            <div className="paragraph-container">
                <p className="learn-more">Learn More</p>
            </div>
        </div>
    )
}

export default ClientItemComponent