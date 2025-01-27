import { useEffect, useRef } from 'react'
import './CategoryModal.css' // Code => 16
import ModalContainer from '../ModalContainer'
import { useOutClicker } from '../../Hook/useOutsideClick'
import { Link, useLocation } from 'react-router-dom'
import { IoIosArrowBack, IoMdArrowRoundForward } from "react-icons/io";


const BrandModal = ({ onClose }) => {
  const location = useLocation()
  let firstMount = useRef(true)
  const brand_content = useRef(null)
  const [modal_ref, closeAction] = useOutClicker(closeHandler)
  //const allBrands = useSelector(state => state._brand_car.Brands)
  //const menuItems = useSelector(state => state._siteMenu)
  const brandsList = useRef([])

  useEffect(() => {
    //if (!firstMount.current) closeHandler();
    //firstMount.current = false;
  }, [location])

  function closeHandler() {
    setTimeout(() => onClose(false), 310)
    modal_ref.current.classList.toggle('close-it_16')
  }

  const showBrandsList = (parentID) => {
    brand_content.current.classList.toggle('swipe-categories_16')
  };


  return (
    <ModalContainer onClick={closeAction}>
      <div ref={modal_ref} className="category-modal_16">
        <div className="groups-header_16">
          <span className="h5">
            دسته بندی ها
          </span>
          <span className="close-icon_16" onClick={closeHandler}>
            &#10006;
          </span>
        </div>
        <ul className="category-groups_16">
          <CategoryItem onClick={showBrandsList} >
            دسته اول
          </CategoryItem>

          <CategoryItem onClick={showBrandsList} >
            دسته دوم
          </CategoryItem>

          <CategoryItem onClick={showBrandsList} >
            دسته سوم
          </CategoryItem>

        </ul>
        <div ref={brand_content} className="categories_16">
          <div className="categories-header_16" onClick={showBrandsList}>
            <span className="icon">
              <IoMdArrowRoundForward size={20} />
            </span>
            <span>
              بازگشت
            </span>
          </div>
          <CategorySubMenu brands={[1, 2, 3, 45,1, 2, 3, 45,1, 2, 3, 45,1, 2, 3, 45,1, 2, 3, 45]} />

        </div>
      </div>
    </ModalContainer>
  )
}

export default BrandModal

const CategoryItem = ({ onClick, children }) => {
  return (<>
    <li onClick={onClick}>
      <div className="group-item_16">
        <div className="flex align-center gap-2">
          <span className="icon">
            &#10051;
          </span>
          <span>
            {children}
          </span>
        </div>
        <span className="icon">
          <IoIosArrowBack size={20} />
        </span>
      </div>
    </li>
  </>)
};

const CategorySubMenu = ({ brands }) => {


  return (<>
    <ul className="categories-content_16  no-scrollbar">
      {brands.map(brand =>
        <li key={`Cy:${brand}`} className="category_16">
          <Link to={'/'}>
            زیر مجموعه دسته
          </Link>
        </li>
      )}
    </ul>
    <div className="">
      <Link to="" className="btn cate-btn_16">
        نمایش همه
      </Link>
    </div>
  </>)
}