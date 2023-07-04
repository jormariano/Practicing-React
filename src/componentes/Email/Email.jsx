import { useState } from "react"
import emailjs from "emailjs-com"

// Clase 7 1h 16' con API https://www.emailjs.com/ para crear formularios 

const Email = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  // Funcion para enviar mensaje

  const enviarMensaje = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: nombre,
      from_email: email,
      message: mensaje
    };

    emailjs.send(
      "service_2saukcv",
      "template_pao3m3s",
      templateParams,
      "UfjLrlwtLdoGMn4bR"
    )
      .then( () => {
        alert("Mensaje enviado");
      })
      .catch( () => {
        alert("Error, volver a intentar");
      })

      // Limpiamos el formulario

      setNombre("");
      setEmail("");
      setMensaje("");

  }

  return (
    <form onSubmit={enviarMensaje}>
      <label>Nombre</label>
      <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)}></input>

      <label htmlFor="" >Email</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>

      <label htmlFor="" >Mensaje</label>
      <textarea value={mensaje} onChange={(e) => setMensaje(e.target.value)}></textarea>

      <button type="submit">Enviar mensaje</button>
    </form>
  )
}

export default Email