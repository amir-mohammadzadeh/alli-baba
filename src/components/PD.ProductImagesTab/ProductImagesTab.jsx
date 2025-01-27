import { useState } from 'react';
import ModalContainer from '../../modals/ModalContainer';
import { useOutClicker } from '../../Hook/useOutsideClick';
import './ProductImagesTab.css';// => Code pi2
import { PRODUCT_IMG } from '../../assets/staticPaths';

const ProductImagesTab = () => {
    const [imageToShow, setImageToShow] = useState('');
    const [modal_ref, clickAction] = useOutClicker(setImageToShow)

    const onImageClickHandler = (img) => {
        setImageToShow(PRODUCT_IMG + img)
    };

    return (<>
        <div className="image-content_pi2">
            <ul>
                <li onClick={()=>onImageClickHandler('p-1.jpeg')}>
                    <img src={PRODUCT_IMG +"p-1.jpeg" }alt="" />
                </li>
                <li onClick={()=>onImageClickHandler('p-2.jpeg')}>
                    <img src={PRODUCT_IMG +"p-2.jpeg"} alt="" />
                </li>
                <li onClick={()=>onImageClickHandler('p-1.jpeg')}>
                    <img src={PRODUCT_IMG +"p-1.jpeg"} alt="" />
                </li>
            </ul>
        </div>
        {imageToShow &&
            <ModalContainer onClick={clickAction} clasName="modal">
                <div ref={modal_ref} className="previrw-image_pi2">
                    <img src={imageToShow} alt="" />
                </div>
            </ModalContainer>
        }
    </>)
}
export default ProductImagesTab