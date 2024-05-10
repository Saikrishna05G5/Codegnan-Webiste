import React from 'react';

const Card = ({ title, description, image }) => {
    return (
        <div className="card" style={{ border: "none", maxWidth: "300px", margin: "auto", backgroundColor: "transparent" }}>
            <img src={image} alt={title} style={{ width: "100%", height: "auto" }} />
            <div className="card-content" style={{ textAlign: "center" }}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Card;
