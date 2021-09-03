import React from 'react' 

const FooterColumnComponent = ({links, title}) =>{

    return( 
        <div className="links-footer">
            <h5 className="title-footer">{title}</h5>
            <ul className="footer-list">
                {
                links.map(link=>{
                    return(
                        <li className="footer-list-item">
                            <h6 className="link-footer">{link}</h6>
                        </li>
                    )
                })
                }
            </ul>
        </div>
    )
}

export default FooterColumnComponent