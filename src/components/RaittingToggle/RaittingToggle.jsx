import { useEffect, useState } from 'react';
import style from './RaittingToggle.module.css'

const RaittingToggle = ({ raite, onChange, className = '' }) => {
    const [value, setValue] = useState(raite);
    const starList = Array.from(Array(5).keys()).map(i => ++i)
    useEffect(() => { setValue(raite) }, [raite]);
    const changeHandler = (n) => {
        setValue(n)
        onChange(n)
    };

    return (
        <div className={`${style["star_box"]} ${className}`}>
            {starList.map(idx =>
                <span
                    key={idx}
                    className={`${style['star']} ${idx <= value && style['active']}`}
                    onClick={() => changeHandler(idx)}
                >
                    {idx <= value ? <>&#10031;</> : <>&#10025;</>}
                </span>
            )}
        </div>
    )
}

export default RaittingToggle