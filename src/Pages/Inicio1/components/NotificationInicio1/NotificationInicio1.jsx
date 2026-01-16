import React, { useEffect } from 'react';
import './NotificationInicio1.css';

const NotificationInicio1 = ({ type, message, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 10000); // 10 seg

        return () => clearTimeout(timer);
    }, [onClose]);

    const getIcon = () => {
        switch (type) {
            case 'success': return 'check_circle';
            case 'error': return 'warning';
            case 'warning': return 'error';
            default: return 'info';
        }
    };

    return (
        <div className={`NotificationInicio1_item NotificationInicio1_${type}`}>
            <span className="material-symbols-outlined NotificationInicio1_icon">
                {getIcon()}
            </span>
            <div className="NotificationInicio1_content">
                <p className="NotificationInicio1_message">{message}</p>
            </div>
            <button className="NotificationInicio1_close" onClick={onClose}>
                <span className="material-symbols-outlined">close</span>
            </button>
        </div>
    );
};

export default NotificationInicio1;
