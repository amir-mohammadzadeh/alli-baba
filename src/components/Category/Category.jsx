import { useRef } from 'react'
import './Category.css' // => Code 06

const Category = () => {
    const container = useRef(null)

    ///--------- Category Item Component -----------///
    const PanelItem = ({ title }) => {

        const setSubMenuWidth = (e) => {
            const parentWidth = e.currentTarget.parentElement.offsetWidth;
            container.current.style.setProperty('--panel-width', parentWidth + "px")
        };


        return (<>
            <li onMouseOver={setSubMenuWidth}>
                <div className="item_l06">
                    <span className="icon_li06">
                        &#10051;
                    </span>
                    <span>
                        {title}
                    </span>
                </div>
                <SubMenu title={title} />
            </li>
        </>)
    }
    ///-------------       E N D       --------------///

    return (<>
        <div ref={container} className="category-content_06">
            <div className="panel_06">
                <div className="header_06">
                    <span className="h5">
                        دسته بندی ها
                    </span>
                    <span>
                        مشاهده همه
                        &#10095;
                    </span>
                </div>
                <ul className="cate-list_06">
                    <PanelItem title="دسته اول" />
                    <PanelItem title="دسته دوم" />
                    <PanelItem title="دسته سوم" />
                    <PanelItem title="دسته چهارم" />
                    <PanelItem title="دسته پنجم" />

                </ul>
            </div>

        </div>
    </>)
}
export default Category



function SubMenu({ title }) {

    return (<>
        <div className="sub-menu_06">
            <ul className="menu-content_s06">
                <li className="item_sm06">
                    زیر مجموعه {title}
                </li>
                <li className="item_sm06">
                    زیر مجموعه {title}
                </li>
                <li className="item_sm06">
                    زیر مجموعه {title}
                </li>
                <li className="item_sm06">
                    زیر مجموعه {title}
                </li>
                <li className="item_sm06">
                    زیر مجموعه {title}
                </li>
                <li className="item_sm06">
                    زیر مجموعه {title}
                </li>
                <li className="item_sm06">
                    زیر مجموعه {title}
                </li>
                <li className="item_sm06">
                    زیر مجموعه {title}
                </li>
                <li className="item_sm06">
                    زیر مجموعه {title}
                </li>
                <li className="item_sm06">
                    زیر مجموعه {title}
                </li>
            </ul>
        </div>
    </>)

}