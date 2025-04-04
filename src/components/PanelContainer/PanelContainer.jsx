import style from './PanelContainer.module.css';


const PanelContainer = ({ className, children }) => {
    return (
        <section className={`${style["panel"]} shadow-1 ${className || ''}`}>

            {children}

        </section>
    )
}
export default PanelContainer

export const PanelHeader = ({ headerTitle, headerBtn, butonText, buttonFunc }) => {
    return (
        <div className={`${style["header"]}`}>
            <h4>
                {headerTitle}
            </h4>
            {headerBtn &&
                <div className={`btn ${style["btn"]}`} onClick={buttonFunc}>
                    {butonText}
                </div>
            }
        </div>
    )
}