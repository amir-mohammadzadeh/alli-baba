import style from './Price.module.css';

const Price = ({ price, oldPrice, label, className = '' }) => {
    return (
        <div className={`${style["price-content"]} ${className}`}>
            {label &&
                <span id="Price_Label">
                    {label}
                </span>
            }
            <div dir='ltr' className={style["price"]}>
                <span dir='ltr'>
                    $
                    {price}
                </span>
                {oldPrice &&
                    <sub>
                        / <s> {oldPrice} </s>
                    </sub>
                }
            </div>
        </div>
    )
}
export default Price