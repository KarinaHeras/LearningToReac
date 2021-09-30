import React, { useState } from 'react'
import axios from 'axios'
import './contact.css'
function Contact() {
    const [name, setName]= useState("");
    const [messege, setMessage] = useState("");
    const sendMessage = async(e)=>{
        e.preventDefaul();
        axios.post("/api/sentContacto",
        {
            name:name,
            messege:messege
        });
        console.log(name+"/"+ messege)
        setName("");
        setMessage("");
    }
  return (
    <div className="contact">
   <div className="contact_title">
<h1>Contacto</h1>
   </div>
   <div className="contact_form">
    <form>
       <input  value={name} onChange={(e) => setName(e.target.value)} name="nombre" placeholder="Nombre"/>
        <textarea value={messege} onchage={(e) => setMessage(e.target.value) }placeholder="Escribe aqui tu mensaje...."> </textarea>
         <button onClick={sendMessage} >Envia tu mensaje </button> 
    </form>

   </div>
    </div>
  )
}

export default Contact
