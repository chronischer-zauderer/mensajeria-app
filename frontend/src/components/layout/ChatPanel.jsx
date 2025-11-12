import React, { useState } from "react";
import HeaderChatPanel from "./HeaderChatPanel";
import BodyChatPanel from "./BodyChatPanel";
import MessageInput from './MessageInput';
import img from "../../assets/telephone-fill.svg";

function SelectedContact() {
    const [messages] = useState([
        {
            id: 1,
            text: "Hola, ¿cómo estás?",
            sender: "contact",
            timestamp: new Date(),
            status: "delivered"
        },
        {
            id: 2,
            text: "¡Hola! Estoy bien, ¿y tú?",
            sender: "user", 
            timestamp: new Date(),
            status: "read"
        },
        {
            id: 3,
            text: "¿Quieres hablar conmigo?",
            sender: "contact",
            timestamp: new Date(),
            status: "delivered"
        },
        {
            id: 4,
            text: "Sí, quiero hablar conmigo",
            sender: "user",
            timestamp: new Date(),
            status: "read"
        },
        {
            id: 5,
            text: "¿Cuál es tu nombre?",
            sender: "contact",
            timestamp: new Date(),
            status: "delivered"
        },
        {
            id: 6,
            text: "Me llamo Jhon",
            sender: "user",
            timestamp: new Date(),
            status: "read"
        },
        {
            id: 7,
            text: "¿De dónde eres?",
            sender: "contact",
            timestamp: new Date(),
            status: "delivered"
        },
        {
            id: 8,
            text: "Soy de Colombia",
            sender: "contact",
            timestamp: new Date(),
            status: "delivered"
        },
        {
            id: 9,
            text: "¿Cuál es tu edad?",
            sender: "contact",
            timestamp: new Date(),
            status: "delivered"
        },
        {
            id: 10,
            text: "Tengo 25 años",
            sender: "user",
            timestamp: new Date(),
            status: "read"
        },
        {
            id: 11,
            text: "¿Te gustan los deportes?",
            sender: "contact",
            timestamp: new Date(),
            status: "delivered"
        },
        {
            id: 12,
            text: "Sí, me encantan los deportes",
            sender: "user",
            timestamp: new Date(),
            status: "read"
        },
        {
            id: 13,
            text: "¿Cuál es tu comida preferida?",
            sender: "contact",
            timestamp: new Date(),
            status: "delivered"
        },
        {
            id: 14,
            text: "Me encanta la comida italiana",
            sender: "user",
            timestamp: new Date(),
            status: "read"
        },
        {
            id: 15,
            text: "¿Cuál es tu animal preferido?",
            sender: "contact",
            timestamp: new Date(),
            status: "delivered"
        },
        {
            id: 16,
            text: "Me encanta los perros",
            sender: "user",
            timestamp: new Date(),
            status: "read"
        },
        {
            id: 17,
            text: "¿Te gustan leer?",
            sender: "contact",
            timestamp: new Date(),
            status: "delivered"
        },
        {
            id: 18,
            text: "Sí, me gusta leer",
            sender: "user",
            timestamp: new Date(),
            status: "read"
        },
        {
            id: 19,
            text: "¿Te gusta el cine?",
            sender: "contact",
            timestamp: new Date(),
            status: "delivered"
        },
        {
            id: 20,
            text: "Sí, me gusta el cine",
            sender: "user",
            timestamp: new Date(),
            status: "read"
        },
        {
            id: 21,
            text: "¿Te gusta la musica?",
            sender: "contact",
            timestamp: new Date(),
            status: "delivered"
        },
        {
            id: 22,
            text: "Sí, me gusta la musica",
            sender: "user",
            timestamp: new Date(),
            status: "read"
        },
        {
            id: 23,
            text: "¿Te gusta el deporte?",
            sender: "contact",
            timestamp: new Date(),
            status: "delivered"
        },
        {
            id: 24,
            text: "Sí, me gusta el deporte",
            sender: "user",
            timestamp: new Date(),
            status: "read"
        },
    ]);

    return (
        <div className="d-flex flex-column h-100 w-100 overflow-hidden">
            {/* Header - altura fija */}
            <div className="flex-shrink-0">
                <HeaderChatPanel img={img} name="Jhon" status={true} />
            </div>
            
            {/* Body - ocupa espacio restante CON SCROLL */}
            <div className="flex-grow-1 min-height-0 overflow-hidden">
                <BodyChatPanel messages={messages}/>
            </div>
            
            {/* Input - altura fija */}
            <div className="flex-shrink-0">
                <MessageInput />
            </div>
        </div>
    );
}

export default SelectedContact;