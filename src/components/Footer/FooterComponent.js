import React from 'react' 
import logo from '../../img/Group 2486@2x.png'
import email from '../../img/contact@2x.png'
import mapIcon from '../../img/map_icon.png'
import skype from '../../img/Group 2789.png'
import facebook from '../../img/Group 2790.png'
import linkedin from '../../img/Group 2791.png'
import instagram from '../../img/Group 2792.png'
import FooterColumnComponent from './FooterColumnComponent'


const FooterComponent = () =>{

    return( 
        <footer className="section" id="footer">
            <div className="img-container">
                <img className="logo-footer" src={logo} alt="" />
            </div>
            <div className="links-footer-container">
                <div className="links-footer">
                    <h5 className="title-footer">Contact Us</h5>
                    <ul className="footer-list">
                        <li className="footer-list-item">
                            <div className="icon-container"></div>
                            <h6 className="link-footer">+(1) 824-5428</h6>
                        </li>
                        <li className="footer-list-item">
                            <div className="icon-container">
                                <img src={mapIcon} alt="" />
                            </div>  
                            <h6 className="link-footer">Miami, United States</h6>
                        </li>
                        <li className="footer-list-item">

                            <div className="icon-container">
                                <img src={email} alt="" />
                            </div>
                            <h6 className="link-footer">yfuentes@shokworks.com</h6>
                        </li>
                    </ul>
                </div>
                <FooterColumnComponent
                    title="Our Company"
                    links={["About","Product", "Portfolio", "Career", "Blog"]}
                />
                <FooterColumnComponent
                    title="Social Contacts"
                    links={["Facebook","Linked In", "Youtube", "Vimeo", "Skype"]}
                />
                <div  className="links-footer column">
                    <h5 className="title-footer">Address</h5>
                    <div className="links-footer">
                        <h6 className="paragraph-footer">
                            Internet Systems Consortium, Inc. 950 Charter Street Redwood City, CA USA.
                        </h6>
                    </div>
                    <h5 className="title-footer">Follow Us</h5>
                    <div className="social-media-container">
                        <ul className="footer-list row">
                            <li className="social-media-icon-container">
                                <img className="img-" src={skype} alt="" />
                            </li>
                            <li className="social-media-icon-container">
                                <img src={facebook} alt="" />
                            </li>
                            <li className="social-media-icon-container">
                                <img src={linkedin} alt="" />
                            </li>
                            <li className="social-media-icon-container">
                                <img src={instagram} alt="" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterComponent
