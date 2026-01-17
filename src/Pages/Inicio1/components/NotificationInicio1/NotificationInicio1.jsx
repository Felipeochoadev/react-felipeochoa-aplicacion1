import React, { useEffect } from 'react';
import './NotificationInicio1.css';
import { IconoCheckCircle } from '../Iconos/IconoCheckCircle';
import { IconoWarning } from '../Iconos/IconoWarning';
import { IconoInfo } from '../Iconos/IconoInfo';
import { IconoClose } from '../Iconos/IconoClose';

const NotificationInicio1 = ({ type, message, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 10000); // 10 seg

        return () => clearTimeout(timer);
    }, [onClose]);

    const getIcon = () => {
        switch (type) {
            case 'success': return <IconoCheckCircle />;
            case 'error': return <IconoWarning />;
            case 'warning': return <IconoWarning />; // Assuming warning uses same icon or different? Original returned 'error' string for warning case? Use warning for warning.
            default: return <IconoInfo />;
        }
    };

    return (
        <div className={`NotificationInicio1_item NotificationInicio1_${type}`}>
            <span className="NotificationInicio1_icon_svg_wrapper">
                {getIcon()}
            </span>
            <div className="NotificationInicio1_content">
                <p className="NotificationInicio1_message">{message}</p>
            </div>
            <button className="NotificationInicio1_close" onClick={onClose}>
                <IconoClose />
            </button>
        </div>
    );
};

export default NotificationInicio1;
