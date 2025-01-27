import React from 'react'
import { TiWarning, TiInfo, TiTrash } from 'react-icons/ti'
import { BsShieldFillX, BsTrash3 } from 'react-icons/bs'
import './AlertBox.css';


const setting = {
    error: {
        icon:<BsShieldFillX size={50} /> ,
        color:['#dc2626', '#ef4444'] ,
        className: 'card alert-card_a01' ,
    },
    warning: {
        icon: <TiWarning size={50} />,
        color:['#f97316', '#c2410c'] ,
        className: 'card alert-card_a01' ,
    },
    info: {
        icon: <TiInfo size={50} />,
        color:['#1d4ed8', '#3b82f6'] ,
        className: 'card alert-card_a01' ,
    },
    delete: {
        icon: <BsTrash3 size={30} />,
        color:['#b91c1c', '#ef4444'] ,
        className: 'card alert-card_a01 delete_a01' ,
    },
    unset: {
        icon: null ,
        color:['translate', 'translate'] ,
        className: null,
    },
}

const AlertBox = ({ className, children, mode = 'unset', defaultIcon = true }) => {
    const modalIcon = setting[mode].icon || '';

    const styleColor = {
        '--color': setting[mode].color[0],
        '--color-light': setting[mode].color[1],
    }

    return (
        <div className={`${setting[mode].className} ${className || ''}`} style={styleColor}>

            {defaultIcon &&
                <AlertIcon>
                    {modalIcon}
                </AlertIcon>
            }

            {children}

        </div>
    )
}

export default AlertBox

export const AlertIcon = ({ children, className = '' }) => {
    return <div className={`icon_a01 ${className}`}> {children} </div>
}

export const AlertButtons = ({ className, children }) => {

    return <div className={`buttons_a01 ${className || ''}`}> {children} </div>
}

export const AlertCancelButton = ({ className, onClick, children }) => {
    return <button className={`btn cancel_a01 ${className || ''}`} onClick={onClick}>
        {children}
    </button>
}

export const AlertConfirmButton = ({ className, onClick, children }) => {
    return <button className={`btn confirm_a01 ${className || ''}`} onClick={onClick} >
        {children}
    </button>
}