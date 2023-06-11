import React from 'react';
import './Popup.css';

const CustomPopup = ({ isOpen, message, children, onClose }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="popup-backdrop">
            <div className="popup-window">
                <div className="popup-message">{message}</div>
                {children}
                <button className="popup-close-button" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default CustomPopup;
