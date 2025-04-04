import { useEffect, useRef, useState } from 'react'
import { FaXmark } from "react-icons/fa6";
import { useSeparate } from '../../Hook/useNumbers';
import ModalContainer from '../../modals/ModalContainer';

//import { cartItemDecrement, cartItemIncrement, closeCartMenu, removeFromCart, updateCartCount } from '../../redux/CartReducer/CartSlice';
import { useOutClicker } from '../../Hook/useOutsideClick';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import CountInput from '../CounterInput/CountInput';
//import { useCookiesToRemoveCart, useCookiesForSetCart } from '../../Hook/useCookiesForCart';
import { NO_IMAGE, PRODUCT_IMG } from '../../assets/staticPaths';
//import { useDispatch } from 'react-redux';
import { TbTrashX, TbX } from 'react-icons/tb';
import Price from '../Price/Price';
import useBackButton from '../../Hook/useBackButton';
import './SideBar.css' // Code => 20


const SideBar = ({ onClose, mode }) => {
    const modalClosehandler = useBackButton(closeSideBar, { navEnd: false })
    const [Cart_ref, clickAction] = useOutClicker(modalClosehandler)
    //const dispatch = useDispatch()
    const navigate = useNavigate()
    /////// Data - Get list of cart items from redux /////////////////
    const cartList = [1, 5, 1, 5, 4, 8, 7, 4] //useSelector(state => state._cart)

    const sidebar_link = {
        "CART": {
            title:"رفتن به سبد خرید",
            url:""
        },
        "FAV": {
            title:"علاقه مندی ها",
            url:""
        },
        "EXPOS": {
            title:"مقایسه",
            url:""
        }
    }

    const deleteFromCart = (itemId) => {
        useCookiesToRemoveCart(itemId)
        dispatch(removeFromCart(itemId))
    }

    // کنترل تعداد سفارش یک آیتم به صورت دلخواه
    const counterManulInput = (itemId, p) => {
        useCookiesForSetCart(itemId, p)
        dispatch(updateCartCount({ id: itemId, value: Number(p) }))
    }

    // افزایش یا کاهش تعداد سفارش یک آیتم به صورت تکی
    const counterValueHandel = (itemId, n) => {
        const _ci = cartList.find(i => i.productid == itemId)
        useCookiesForSetCart(itemId, _ci._count + n)
        n > 0 ?
            dispatch(cartItemIncrement(itemId))
            :
            dispatch(cartItemDecrement(itemId))
    }

    function closeSideBar() {
        Cart_ref.current.style.animationDuration = '.2s';
        Cart_ref.current.style.animationName = 'close-animation';
        setTimeout(() => {
            onClose(false)
            //dispatch(closeCartMenu())
        }, 200);
    }

    const gotoCartPage = () => {
        navigate('/cart')
        closeSideBar()
    };

    return (
        <ModalContainer onClick={clickAction}>
            <aside ref={Cart_ref} className='cart_20 open_20'>
                <div className="cart-content_20">
                    <div className="cart-header_20">
                        <span className="close-btn close-icon_20" onClick={modalClosehandler}>
                            <FaXmark size={'100%'} />
                        </span>
                        <span className="h5">
                            سبد خرید
                        </span>
                    </div>
                    <ul className="cart-list_20 no-scrollbar">
                        {cartList.map(post => <>

                            <li key={post.productid} className="cart-item_20">
                                <div className="image_20">
                                    <img src={PRODUCT_IMG + 'p-1.jpeg'} alt={'post.productName'} onError={(e) => e.target.src = NO_IMAGE} />
                                </div>
                                <div className="body_20">
                                    <span className="line-limit-1" style={{ height: '1.5rem' }}>
                                        نام محصول
                                    </span>

                                    <Price price={2200000} className='price_20' />

                                    {mode == 'CART' &&
                                        <div className="counter-box_20">
                                            <CountInput
                                                className="counter_20"
                                                value={2}
                                                onPluse={() => counterValueHandel(post?.productid, 1)}
                                                onMinus={() => counterValueHandel(post?.productid, -1)}
                                                onInputValue={(p) => counterManulInput(post?.productid, p)}
                                            />
                                            <span className="icon delete-btn_20" onClick={() => deleteFromCart(post.productid)}>
                                                <TbTrashX size={25} />
                                            </span>
                                        </div>
                                    }
                                </div>
                                {mode != 'CART' &&
                                    <div className="icon remove-btn_20" onClick={() => deleteFromCart(post.productid)}>
                                        <TbX size={20} style={{ transform: 'rotate(-45deg' }} />
                                    </div>
                                }
                            </li>
                            <hr />
                        </>)}

                    </ul>
                    <div className="cart-footer_20">
                        {mode == 'CART' &&
                            <div className="p-content_20 flex justfy-sb">
                                <span className="text-light-1 font-md">
                                    جمع کل سبد:
                                </span>
                                <Price price={2200000} className='price_f20' />
                            </div>
                        }
                        <Link to={sidebar_link[mode].url}>
                            <div className="btn cart-button_20" onClick={gotoCartPage}>
                            {sidebar_link[mode].title}
                            </div>
                        </Link>
                    </div>
                </div>
            </aside>
        </ModalContainer>
    )
}

export default SideBar