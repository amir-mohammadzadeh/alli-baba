import { useEffect, useState } from 'react';
import style from './MenuToggleButton.module.css';

const MenuToggleButton = ({ status, onClick }) => {
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        if (status != checked)setChecked(status)
    }, [status]);

    const toggleChange = (e) => {
        setChecked(e.target.checked)
        onClick(e.target.checked)
    };

    return (
        <div className={style["menuToggle"]}>
            <input id="menuToggle" type="checkbox" checked={checked} onChange={toggleChange} />
            <label className={style["toggle"]} htmlFor="menuToggle">
                <div className={`${style["bar"]} ${style["bar--top"]}`} />
                <div className={`${style["bar"]} ${style["bar--middle"]}`} />
                <div className={`${style["bar"]} ${style["bar--bottom"]}`} />
            </label>
        </div>

    );
}

export default MenuToggleButton;