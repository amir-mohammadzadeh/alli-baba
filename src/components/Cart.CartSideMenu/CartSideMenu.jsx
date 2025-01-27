import './CartSideMenu.css'; // => Code 13
import { useEffect, useRef, useState } from 'react'
import { FaTrashCan, FaXmark } from "react-icons/fa6";
import ModalContainer from '../../modals/ModalContainer';
import { useOutClicker } from '../../Hook/useOutsideClick';
import { Link } from 'react-router-dom';
import CountInput from '../CounterInput/CountInput';
import { PRODUCT_IMG } from '../../assets/staticPaths';


const CartSideMenu = ({ onClose }) => {
  const [Cart_ref, clickAction] = useOutClicker(closeSideBar)
  //const dispatch = useDispatch()
  /////// Data - Get list of cart items from redux /////////////////
  //const cartList = useSelector(state => state._cart)
  const cartList = [1, 2]
  const imge = PRODUCT_IMG +'p-1.jpeg'
  /*
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
  */
  function closeSideBar() {
    Cart_ref.current.style.animationDuration = '.2s';
    Cart_ref.current.style.animationName = 'close-animation';
    setTimeout(() => {
      //dispatch(closeCartMenu())
      onClose()
    }, 200);
  }

  return (
    <ModalContainer onClick={clickAction}>
      <aside ref={Cart_ref} className='cart_13 open_13'>
        <div className="cart-content_13">
          <div className="cart-header_13">
            <span className="close-icon_13" onClick={closeSideBar}>
              <FaXmark size={'100%'} />
            </span>
            <span className="h5">
              سبد خرید
            </span>
          </div>
          <ul className="cart-list_13 no-scrollbar">
            {cartList.map(post =>
              <>
                <li key={post.productid} className="cart-item_13">
                  <div className="image_13">
                    <img src={imge} alt={'post.productName'} onError={(e) => e.target.src = 'NO_IMAGE'} />
                  </div>
                  <div className="body_13">
                    <span className="line-limit-1" style={{ height: '1.5rem' }}>
                      {'post.productName'}
                    </span>
                    <span className="price_13">
                      200000
                      <small>تومان</small>
                    </span>
                    <div className="counter-box_13">
                      <CountInput
                        value={2}
                        className='counter'
                      />
                      <span className="delete-btn_13" onClick={() => deleteFromCart(post.productid)}>
                        <FaTrashCan size={20} />
                      </span>
                    </div>
                  </div>
                </li>
                <hr />
              </>
            )}

          </ul>
          <div className="cart-button_13">
            <Link to={'/cart'} className="btn btn-animate" onClick={closeSideBar}>
              سبد خرید
            </Link>
          </div>
        </div>
      </aside>
    </ModalContainer>
  )
}

export default CartSideMenu