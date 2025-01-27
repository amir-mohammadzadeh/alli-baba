import { useEffect, useRef } from 'react'
import style from './CountInput.module.css'

const CountInput = ({ value, onPluse, onMinus, onInputValue, className = '' }) => {
  const count_input = useRef(null)

  useEffect(() => {
    count_input.current.value = value <= 0 ? 1 : value;
  }, [value])

  const decrement = () => {
    if (value != 1) onMinus()
  }

  const changeHandel = (e) => {
    Number(e.target.value) ?
      count_input.current.value = e.target.value <= 0 ? 1 : e.target.value
      : count_input.current.value = 1;
  }

  const onFocusOut = () => {
    onInputValue && onInputValue(count_input.current.value)
  }

  return (
    <div className={`${style["counter"]} ${className}`} >
      <div className={style["button"]} onClick={onPluse}>
        &#43;
      </div>
      <input ref={count_input} type='tel' inputMode='numeric' className={style["result"]} onBlur={onFocusOut} onChange={changeHandel} onWheel={(e) => e.target.blur()} />
      <div className={style["button"]} onClick={decrement}>
        &#8722;
      </div>
    </div>
  )
}

export default CountInput