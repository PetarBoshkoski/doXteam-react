import React from "react"

function ContactCard(props) {
    console.log(props.name)
    return (
        <div className="contact-card">
            <h3>{props.contact.name}</h3>
            <img src={props.contact.imgUrl}/>
            <p>{props.contact.phone}</p>
            <p>Email: {props.contact.email}</p>
        </div>
    )
}

export default ContactCard