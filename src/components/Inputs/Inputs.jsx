import { forwardRef, useId } from 'react'
import './Inputs.css' //Code => 15

export const Input = forwardRef(({ onChange, label, helpText, error, name = '', type = 'text', required = false, className = '', readOnly = false, ...attribut }, ref) => {
    const changeHandler = (e) => onChange && onChange(e)

    const inputHandler = (e) => {
        if (type == 'number' && !Number(e.nativeEvent.data)) {
            if(e.nativeEvent.data == 0) return
            e.target.value = e.target.value.replaceAll(e.nativeEvent.data, '')
        }
    };

    const id = useId()
    return (
        <div className={`input-box_15 ${className}`}>
            <input
                ref={ref}
                id={id + name}
                name={name}
                type={type == 'number' ? 'text' : type}
                placeholder={helpText}
                onChange={changeHandler}
                required={required}
                inputMode={type == 'number' ? 'numeric' : type}
                readOnly={readOnly}
                onInput={inputHandler}
                {...attribut}
            />
            {label &&
                <label htmlFor={id + name}>
                    {label}
                </label>
            }
            {error && <span className="error_15"> {error} </span>}
        </div>
    )
})

export const TextArea = forwardRef(({ onChange, label, helpText, error, name = '', required = false, className = '', readOnly = false, ...attribut }, ref) => {
    const changeHandler = (e) => onChange && onChange(e)
    const id = useId()
    return (
        <div className={`input-box_15 ${className}`}>
            <textarea
                ref={ref}
                id={id + name}
                name={name}
                placeholder={helpText}
                onChange={changeHandler}
                required={required}
                readOnly={readOnly}
                {...attribut}
            ></textarea>
            <label htmlFor={id + name}>
                {label}
            </label>
            {error && <span className="error_15"> {error} </span>}
        </div>
    )
})
