import { useState } from 'react'
import './MobileNavBar.css' // => Cose 12
import { BsPersonCircle, BsHouseDoor, BsGrid, BsPlusCircle, BsChatText, BsCart3, BsAlarm } from "react-icons/bs";
import { Link, useLocation, useMatch } from 'react-router-dom';
import { MdNotifications } from "react-icons/md";
import CategoryModal from '../../modals/CategoryModal/CategoryModal'

const MobileNavBar = () => {
    const pdPage = useMatch('/pd/:productID')
    const location = useLocation()
    const userLogin = false;
    const SiteName = 'داشبورد'
    //const userLogin = useSelector(state => state.userInfo?.isLogin)
    //const SiteName = useSelector(state => state._siteInfo?.siteName)
    const [openBrandModal, setOpenBrandModal] = useState(false)
    const [openCategoryModal, setCategoryModal] = useState(false);

    if (pdPage) return null;
    else return (<>
        <nav className="mobile-navbar_container">
            <ul className="mobile-navbar">
                <li className="mobile-nav-item">
                    <Link to={'/'}>
                        <span className='icon_12'>
                            <BsHouseDoor />
                        </span>
                        <span className='lab_12'>
                            صفحه اصلی
                        </span>
                    </Link>
                </li>
                <li className="mobile-nav-item">
                    <div onClick={() => setCategoryModal(true)}>
                        <span className="icon_12">
                            <BsGrid />
                        </span>
                        <span className='lab_12'>
                            دسته بندی ها
                        </span>
                    </div>
                </li>
                <li className="mobile-nav-item cart-btn_12">
                    <Link to='/new-post'>
                        <span className="icon_12">
                            <BsCart3 />
                        </span>
                        <span className='lab_12'>
                            سبد خرید (0)
                        </span>
                    </Link>
                </li>
                <li className="mobile-nav-item">
                    <Link to={'/'}>
                        <span className="icon_12">
                            <MdNotifications />
                        </span>
                        <span className='lab_12'>
                            اعلان ها
                        </span>
                    </Link>
                </li>
                <li className="mobile-nav-item">
                    <Link to={userLogin ? '/userdashbord/profile' : '/login'} state={{ pathName: location.pathname, pathData: null }}>
                        <span className="icon_12">
                            <BsPersonCircle />
                        </span>
                        <span className='lab_12'>
                            {userLogin ? `${SiteName} من` : 'ورود'}
                        </span>
                    </Link>
                </li>
            </ul>
        </nav>
        {openBrandModal && <BrandModal onClose={setOpenBrandModal} />}

        {openCategoryModal &&
            <CategoryModal onClose={() => setCategoryModal(false)} />
        }

    </>)
}

export default MobileNavBar