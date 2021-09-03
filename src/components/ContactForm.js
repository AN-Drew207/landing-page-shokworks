import React, {useState, useEffect} from 'react' 
import contactImg from '../img/banner-1@2x.png'

const ContactForm = () =>{
    

    const [title, setTitle]=useState("")
    const [message, setMessage]=useState("")
    const [userId, setUserId]=useState(1)
    const [actualPost, setActualPost]=useState(0)


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) =>{ 
                if(json.length%10===0){
                    setUserId(()=>Math.floor(json.length+1/10))
                }else{
                    setUserId(()=>Math.floor(json.length+1/10)+1)
                }
            });

    },[actualPost])

    const handleSubmit = (e) =>{
        e.preventDefault();
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                body: message,
                userId: userId+actualPost,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                setActualPost(prev=>prev+1)
                setTitle(" ")
                setMessage(" ")
            });

    }

    return( 
        <section className="section" id="contact-form">
            <h2 className="title">Facing Problem? <br /> <strong>Let's Get In Touch Now</strong></h2>
            <div className="section-form-container">
                <div className="form-container">
                    <form action="" className="form" onSubmit={handleSubmit}>
                        <div className="form-group">
                                <label htmlFor="">Type the Title of your Message</label>
                                <input 
                                    value={title} 
                                    onChange={(e)=>setTitle(e.target.value)} 
                                    className="form-input" 
                                    type="text" 
                                    placeholder="Here goes your title"
                                />
                        </div>
                        <div className="form-group">
                                <label htmlFor="">Type Your Body Message</label>
                                <textarea 
                                    value={message} 
                                    onChange={(e)=>setMessage(e.target.value)} 
                                    className="form-input" 
                                    placeholder="Here goes your message"
                                />
                        </div>
                        <div className="btn-group">
                            <button className="btn-white">Submit</button>
                        </div>
                        
                    </form>
                </div>
                <div className="img-container">
                    <img className="img-form" src={contactImg} alt="" />
                </div>
            </div>
        </section>
    )
}

export default ContactForm