import { useEffect, useRef, useState } from 'react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import './ImageGallery.css' // Code => ig2
import { PRODUCT_IMG } from '../../assets/staticPaths'

const Example_imageList = new Array(10).fill().map((e, i) => {
    const t = PRODUCT_IMG +'p-' + (Math.round(Math.random()) + 1) + '.jpeg';
    return { id: i+1, img: t }
})

export const ImageGallery = ({ productName, pID, className, onImgClick = undefined }) => {
    const [currentImage, setCurrentImage] = useState({})
    const imageContent_ref = useRef(null)
    //\______________ Data - Get Product Image list from API ____________//\ 


    useEffect(() => {
        //if (!isFetching) {
        setCurrentImage(Example_imageList[0])
        //}
    }, [])
    useEffect(() => {
        if (currentImage.id) {
            contentScrollHandel()
        }
    }, [currentImage])

    const contentScrollHandel = () => {
        const elems = [...imageContent_ref.current.children];
        const t = elems.find(i => [...i.classList].includes('active_ig2'))
        if ((window.innerWidth <= 1200 && window.innerWidth >= 998) || window.innerWidth <= 578) {
            imageContent_ref.current.scrollTo({
                behavior: 'smooth',
                left: t.offsetLeft - 30
            })
        } else {
            console.dir('top')
            imageContent_ref.current.scrollTo({
                behavior: 'smooth',
                top: t.offsetTop - 10
            })
        }
        
    };

    const changeImage = (n) => {
        const _index = Example_imageList.indexOf(currentImage)
        const _size = Example_imageList.length;
        if (_index + n < 0) {
            setCurrentImage(Example_imageList[_size - 1])
        } else if (_index + n > _size - 1) {
            setCurrentImage(Example_imageList[0])
        } else {
            setCurrentImage(Example_imageList[_index + n])
        }
    }

    const imageSelectHandler = (img) => {
        setCurrentImage(img)
    }

    ///------------# Image Zoom Controller #--------------///
    const onMouseEnterImgArea = (e) => {
        e.currentTarget.style.setProperty('--display', "block")
        e.currentTarget.style.setProperty('--img-url', `url(${currentImage.img})`)
    };

    const imageZoomHandler = (e) => {
        const elem = e.currentTarget;
        const size = elem.getBoundingClientRect()
        const pointer = {
            x: (e.clientX - size.x) / size.width * 100,
            y: (e.clientY - size.y) / size.height * 100
        }
        elem.style.setProperty('--zoom-x', pointer.x + "%")
        elem.style.setProperty('--zoom-y', pointer.y + "%")
    };

    const imageZoomOff = (e) => {
        e.currentTarget.style.setProperty('--display', "none")
    };
    ///------------#        E N D        #--------------///

    return (<>

        <div className={`image-container_ig2 ${className}`} >
            <div className="image-list_ig2">
                <div className="next_ig2" onClick={() => changeImage(1)}>
                    <BsChevronDown />
                </div>
                <div className="prevent_ig2" onClick={() => changeImage(-1)}>
                    <BsChevronUp />
                </div>
                <ul ref={imageContent_ref} className="content_ig2">
                    {Example_imageList.map(i =>

                        <li
                            key={i.id}
                            className={`item_ig2 ${i.id == currentImage.id ? "active_ig2" : ""}`}
                            onClick={() => imageSelectHandler(i)}
                        >
                            <img src={i.img} alt="" />
                        </li>
                    )}

                </ul>
            </div>

            <div className="image-slider_ig2">
                <div className="image_ig2"
                    onMouseEnter={onMouseEnterImgArea}
                    onMouseMove={imageZoomHandler}
                    onMouseLeave={imageZoomOff}
                >
                    <img src={currentImage.img} alt="" />
                </div>
            </div>

        </div>

    </>)
}