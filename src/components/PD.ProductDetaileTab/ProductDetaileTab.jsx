import { useEffect, useRef, useState } from 'react';
import PanelContainer from '../PanelContainer/PanelContainer';
import './ProductDetaileTab.css';// => Code 09
import { useLocation } from 'react-router';
import ProductImagesTab from '../PD.ProductImagesTab/ProductImagesTab';

const ProductDetaileTab = () => {
    const location = useLocation()
    const tabContainer_ref = useRef(null)
    const [activeTab, setActiveTab] = useState('T1D');

    const tabClickHandler = (e) => {
        const elem = e.currentTarget;
        const t = [...tabContainer_ref.current.children].forEach(tab => {
            tab.id != elem.id ?
                tab.classList.remove('active-tab_09') :
                tab.classList.add('active-tab_09');
        })
        switch (elem.id) {
            case "Product_Discription_Tab": setActiveTab('T1D'); break;
            case "Product_Reviews_Tab": setActiveTab('T2R'); break;
            case "Product_Images_Tab": setActiveTab('T3I'); break;
        }
    };

    return (
        <PanelContainer>
            <header ref={tabContainer_ref} className="tab-wrapper_09 no-scrollbar">
                <div id="Product_Discription_Tab" className="tab_09 active-tab_09" onClick={tabClickHandler}>
                    توضیحات
                </div>
                <div id="Product_Reviews_Tab" className="tab_09" onClick={tabClickHandler}>
                    نظرات
                </div>
                <div id="Product_Images_Tab" className="tab_09" onClick={tabClickHandler}>
                    گالری
                </div>
            </header>
            {activeTab == "T1D" &&
                <section className="tab-content_09">
                    <ProductDiscripton disc={''} />
                </section>
            }
            {activeTab == "T2R" &&
                <section className="tab-content_09">
                    <ProductReviews data={[]} />
                </section>
            }
            {activeTab == "T3I" &&
                <section className="tab-content_09">
                    {/*<ProductImage imageList={[4]} />*/}
                    <ProductImagesTab />
                </section>
            }
        </PanelContainer>
    )
}
export default ProductDetaileTab

const ProductDiscripton = ({ disc }) => {

    if (!disc) return <div className="isEmpty"> توضیحی برای این محصول وجود ندارد! </div>
    else return (<>
        <section className="tab-content_09">
            {disc}
        </section>
    </>)
}

const ProductReviews = ({ data }) => {

    if (data && data.length == 0) return <div className="isEmpty"> نظری برای این محصول ثبت نشده است! </div>
    else return (<>
        محل قرار گیری نظرات ....
    </>)
}