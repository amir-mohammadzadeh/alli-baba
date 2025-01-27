import { useEffect, useRef, useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import useOutsideClick from '../../Hook/useOutsideClick'
import { Input } from '../Inputs/Inputs'
import './Selection.css' // Code => 02

const Selection = ({
    optionList, onSelect, label, firstValue, value, error,
    menuWidth, menuMaxHeight, height,
    menuStartPos = 'right', className = '',
    searchArea = false, style = {}, iconSplit = false
}) => {


    const [openMenu, setOpenMenu] = useState(false)
    const [menuItems, setMenuItems] = useState(optionList)
    const menu_ref = useOutsideClick(setOpenMenu)
    const selected = useRef(value)

    const SELECTION_SETTINGS = {
        '--border-color': error ? 'var(--red-700)' : 'var(--gray-300)',
        '--menu-max-height': menuMaxHeight || 'auto',
        '--menu-width': menuWidth || '100%',
        '--main-height': height || 'auto',
        '--menu-pos': menuStartPos == 'left' ? 'auto auto auto 0' : 'auto 0 auto auto',
        zIndex: openMenu ? '20' : '5',
        ...style
    }

    useEffect(() => {
        setMenuItems(optionList)
    }, [openMenu])

    const selectHandler = (payload) => {
        const item = menuItems.find(i => i.id == payload)
        selected.current = item;
        setOpenMenu(false)
        onSelect(item)
    }

    const onSearch = (e) => {
        const text = e.target.value
        setMenuItems(optionList.filter(i => i.title.includes(text)))
    }

    return (<>
        <div className={`selection-wrapper_02 ${className}`} style={SELECTION_SETTINGS} >
            {label &&
                <span className="label_02">
                    {label}
                </span>
            }
            <div className="selection-head_02" onClick={() => setOpenMenu(!openMenu)} >

                {selected.current.icon &&
                    <span className="opt-icon_02" style={{ transform: 'translateY(-1px)' }}>
                        {selected.current.iconType == 'img' || typeof selected.current.iconType == String ?
                            <img src={selected.current.icon} alt="flag" /> : selected.current.icon
                        }
                    </span>
                }
                <span>
                    {selected.current.title}
                </span>

                <span className="icon_02">
                    <BsChevronDown />
                </span>
            </div>
            {openMenu &&
                <div ref={menu_ref} className="menu_02">
                    {searchArea &&
                        <div className="search-box_02">
                            <Input
                                className="search-input_02"
                                helpText='جستجو...'
                                type='search'
                                onChange={onSearch}
                            />
                        </div>
                    }
                    <ul className="options_02">
                        {firstValue &&
                            <li className="option_02 first-opt" onClick={() => selectHandler(null)}>
                                {firstValue}
                            </li>
                        }
                        {menuItems.map((item, index) =>
                            <MenuItem
                                key={item.id}
                                onClick={selectHandler}
                                iconSplit={iconSplit}
                                {...item}
                            />
                        )}
                    </ul>
                </div>
            }
            {error && !openMenu &&
                <div className="error_02">
                    {error}
                </div>
            }
        </div>
    </>)
}

export default Selection

function MenuItem({ title, icon, iconType, id, onClick, iconSplit = false }) {
    console.log(title)
    return (<>
        <div className={`option_02 ${iconSplit && 'option-IS_02'}`} onClick={() => onClick(id)}>
            {icon &&
                <span className="opt-icon_02">
                    {iconType == 'img' || typeof iconType == String ?
                        <img src={icon} alt="flag" /> : icon
                    }
                </span>
            }
            <span>
                {title}
            </span>
        </div>
    </>)
}