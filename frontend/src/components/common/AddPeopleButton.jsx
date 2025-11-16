import React, { useState, useRef } from 'react';
import './AddPeopleButton.css';
import Plus from "../../assets/plus.svg";
import Send from "../../assets/capslock-fill.svg";

function FloatingButtonWithModal() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const buttonRef = useRef(null);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            {/* Botón fijo en esquina inferior derecha */}
            <button
                ref={buttonRef}
                className="floating-button"
                onClick={toggleModal}
            >
                <img src={Plus} alt="" style={{ width: 40, filter: "invert(1)" }}/>
            </button>

            {/* Modal que aparece sobre el botón */}
            {isModalOpen && (
                <Modal 
                    onClose={closeModal} 
                    buttonRef={buttonRef}
                />
            )}
        </>
    );
}

// Componente Modal separado
function Modal({ onClose, buttonRef }) {
    const [addName, setAddName] = useState("");
    const [userSelected, setUserSelected] = useState(null);

    const modalRef = useRef(null);
    const users = [
        { id: 1, name: "Julio" },
        { id: 2, name: "Santiago" },
        { id: 3, name: "Luis" },
        { id: 4, name: "Javier" },
        { id: 5, name: "Luis" },
        { id: 6, name: "Javier" },
        { id: 7, name: "Luis" },
        { id: 8, name: "Javier" },
        { id: 9, name: "Luis" },
        { id: 10, name: "Javier" },
        { id: 11, name: "Luis" },
        { id: 12, name: "Javier" },
        { id: 13, name: "Luis" },
        { id: 14, name: "Javier" },
        { id: 15, name: "Luis" },
        { id: 16, name: "Javier" },
        { id: 17, name: "Luis" },
        { id: 18, name: "Javier" },
        { id: 19, name: "Luis" },
        { id: 20, name: "Javier" },
    ];

    // Calcular posición del modal basado en la posición del botón
    const getModalPosition = () => {
        if (buttonRef.current) {
            const buttonRect = buttonRef.current.getBoundingClientRect();
            
            return {
                bottom: window.innerHeight - buttonRect.top + 10,
                right: window.innerWidth - buttonRect.right - 165
            };
        }
        return { bottom: 100, right: 20 };
    };

    const modalStyle = getModalPosition();

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(addName.toLowerCase())
    );

    function SendInput(name, id) {
        return () => {
            setAddName(name);
            setUserSelected({name, id});
            console.log("Enviando: ", name, id);
        };
    }

    function clearSelection() {
        setUserSelected(null);
        setAddName("");
    }

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div 
                ref={modalRef}
                className="modal-content"
                style={modalStyle}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="modal-header">
                    <h4>Buscar a un amigo</h4>
                    <button className="close-button" onClick={onClose}>
                        x
                    </button>
                </div>
                <div className="modal-body">
                    <div className='container-input-add-people'>
                        {userSelected ? (
                            <div className='add-people-line-selected' onClick={clearSelection}>
                                <h4 className='add-people-line-selected'>{userSelected.name}</h4>
                            </div>
                        ) : (
                            <input
                                value={addName}
                                onChange={(e) => setAddName(e.target.value)}
                                className='input-add-people' 
                                type="text" 
                                placeholder='Buscar...'
                            />
                        )}
                    </div>
                    <button className='button-send-add-people'><img src={Send} alt="" style={{filter: "invert(1)", width: 40}}/></button>
                </div>
                <div className='add-people-list d-flex flex-column justify-content-between align-items-center gap-2'>
                    {filteredUsers.length > 0 ? (
                        filteredUsers.map((user) => (
                            <div
                                key={user.id}
                                className="add-people-line d-flex flex-row justify-content-between align-items-center gap-2 w-100"
                                onClick={SendInput(user.name, user.id)}
                            >
                                <h4 className="add-people-name">{user.name}</h4>
                                <h4>{user.id}</h4>
                            </div>
                        ))
                    ) : (
                        <h5 style={{ color: "#888" }}>No se encontraron resultados</h5>
                    )}
                </div>
            </div>
        </div>
    );
}

export default FloatingButtonWithModal;