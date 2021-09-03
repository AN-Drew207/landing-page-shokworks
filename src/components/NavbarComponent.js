import React, {useState, useEffect} from 'react' 
import logo from '../img/Group 2486@2x.png'
import logomini from '../img/logo-min.png'

const NavbarComponent = () =>{

    const [collapse, setCollapse]=useState(false);
    const [burguerButtonActive, setBurguerButtonActive] = useState("none");
    const [logoImg, setLogoImg] = useState(logo)

    useEffect(() =>{
        if(window.screen.width<1400){
            setCollapse(()=>true);
        }
        if(window.screen.width<=700){
            setLogoImg(logomini)
        }
        window.addEventListener('resize', ()=>{
            if(window.screen.width<1400){
                setCollapse(()=>true);
            }else{
                setCollapse(()=>false);
            }
            if(window.screen.width<700){
                setLogoImg(logomini)
            }else{
                setLogoImg(logo)
            }
        })
    }, [])

    /*Función handle para manejar el estado del burguer menu button*/ 
    const handleBurguer = () =>{
        document.querySelector("#burguer-btn").classList.toggle("burguer-btn-active")
        document.querySelector("#burguer-btn").classList.toggle("burguer-btn")
        setBurguerButtonActive((prev)=>{
            if(prev==="none"){
                return "inline-block"
            }else{
                return "none"
            }
        });
    }

    return( 
        <>
        <nav id="nav">
            <div className="navbar-img-container">
                <img className="logo" src={logoImg} alt="logo" />
            </div>
            <div className="navbar-content">
                {
                /*Menú desktop view*/ 
                collapse ||
                <div className="navbar-nav-container">
                    <ul className="navbar-nav">
                        <li className="navbar-nav-item active">
                            Home
                        </li>
                        <li className="navbar-nav-item">
                            About
                        </li>
                        <li className="navbar-nav-item">
                            Portfolio
                        </li>
                        <li className="navbar-nav-item">
                            Product
                        </li>
                        <li className="navbar-nav-item">
                            Career                       
                        </li>
                        <li className="navbar-nav-item">
                            Blog
                        </li>
                    </ul>
                </div>
                }
                <div className="navbar-search">
                    <input className="search" type="text" placeholder="Search here"/>
                </div>
                <div className="btn-group">
                    <button className="btn-blue">Contact Us</button>
                </div>
                {
                    /*Control de retorno del Burguer menú button*/
                    collapse &&
                <div className="burguer-btn" id="burguer-btn" onClick={handleBurguer}>
                    <span></span>
                </div>
                }
            </div>
        </nav>
        {
            /*Menu desplegable*/
            collapse &&
            <div id="burguer-collapse" className="navbar-nav-container-collapse" style={{display:burguerButtonActive}}>
                    <ul className="navbar-nav-collapse">
                        <li className="navbar-nav-item-collapse active-collapse">
                            Home
                        </li>
                        <li className="navbar-nav-item-collapse">
                            About
                        </li>
                        <li className="navbar-nav-item-collapse">
                            Portfolio
                        </li>
                        <li className="navbar-nav-item-collapse">
                            Product
                        </li>
                        <li className="navbar-nav-item-collapse">
                            Career                       
                        </li>
                        <li className="navbar-nav-item-collapse">
                            Blog
                        </li>
                    </ul>
                </div>
        }
        </>
    )
}

export default NavbarComponent