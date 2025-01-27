import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import style from './ModalContainer.module.css'


const ModalContainer = ({ onClick, clasName = '', children }) => {
    useEffect(() => {
        document.documentElement.style.overflowY = 'hidden';

        return () => document.documentElement.style.overflowY = 'auto';
    }, [])


    return createPortal(
        <div className={`${style["modal"]} ${clasName}`} onClick={onClick}>
            {children}
        </div>
        , document.getElementById('modal_parent')
    )
}
export default ModalContainer