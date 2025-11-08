function ContactSelector({ img, name, message, date }) {
    return (
        <div>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4>{name}</h4>
                <h5>{message}</h5>
            </div>
            <h5>{date}</h5>
        </div>
    );
}

export default ContactSelector;
