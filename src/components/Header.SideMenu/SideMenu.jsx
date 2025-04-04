import { useEffect, useRef } from 'react';
import { ICONS } from '../../assets/staticPaths';
import './SideMenu.css'; // => Code 12
import { useOutClicker } from '../../Hook/useOutsideClick';
import { Link } from 'react-router';

const SideMenu = ({menuList = [1,2,3,4,5] ,closeModal}) => {
    const content_ref = useRef(null)
    const [menu_ref , clickAction] = useOutClicker(closeModal)
    
    useEffect(() => {
        content_ref.current.classList.add('open_07')
    }, []);

    const setItemsOpenStyles = (index) => {
        const zarib = 85
        const max = 5 * zarib;
        const _td = max - (index * zarib) + 'ms';
        const _tt = `-${(index + 1) * 100}%`;
        return {
            transitionDelay: _td,
            transform: 'translate(45%,' + _tt + ') scale(0)'
        }
    };

    return (
        <aside onClick={clickAction} ref={content_ref} className="sidebar_07 ">
            <div className="sidebar-content_07">
                <ul ref={menu_ref}>
                    {menuList.map((i, idx) =>
                        <li
                            className="menu-item_07"
                            style={setItemsOpenStyles(idx)}
                        >
                            <Link to="#" className="btn-flex">
                                <span className="img">
                                    <img src={ICONS + 'lifebuoy.svg'} />
                                </span>
                                <span>
                                    منو آیتم {i}
                                </span>
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </aside>
    )
}
export default SideMenu