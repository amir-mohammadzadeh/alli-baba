import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
//import Fade from 'embla-carousel-fade'
import { BANNER_IMG } from '../../assets/staticPaths'
import { DotButton, useDotButton } from '../SliderCustomTools/SliderCustomDotes'
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from '../SliderCustomTools/SliderCustomButtons'

export const OPTIONS = { loop: true, containScroll: false, direction: 'rtl' }
const SLIDE_COUNT = 2
export const SLIDES = Array.from(Array(SLIDE_COUNT).keys())


const Exampel_BannerList = new Array(8).fill().map((e, i) => ({ id: `bnr:${i + 1}`, imgURL: `banner-${1}.jpg` }))

const Banner = ({ className = '' }) => {
    const [slides, options] = [SLIDES, Exampel_BannerList]
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay({ stopOnMouseEnter: true, stopOnInteraction: false })])
    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

    const onNavButtonClick = useCallback((emblaApi) => {
        const autoplay = emblaApi?.plugins()?.autoplay
        if (!autoplay) return

        const resetOrStop =
            autoplay.options.stopOnInteraction === false
                ? autoplay.reset
                : autoplay.stop

        resetOrStop()
    }, [])

    const {
        prevBtnDisabled, nextBtnDisabled,
        onPrevButtonClick, onNextButtonClick
    } = usePrevNextButtons(emblaApi, onNavButtonClick)


    return (
        <div className={'carousel ' + className}>
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map(slide => <>
                        <div className="carousel__item _image_ci">
                            <picture>
                                <source srcSet={BANNER_IMG + "slide-mob-01.webp"} media='(max-width: 768px)' />
                                <img src={BANNER_IMG + "banner-1.jpg"} alt="" />
                            </picture>
                        </div>
                        <div className="carousel__item _image_ci">
                            <picture>
                                <source srcSet={BANNER_IMG + "slide-mob-04.webp"} media='(max-width: 768px)' />
                                <img src={BANNER_IMG + "banner-1.jpg"} alt="" />
                            </picture>
                        </div>
                    </>)}
                </div>
            </div>


            <div className="carousel__dotes">
                {scrollSnaps.map((_, index) => (
                    <DotButton
                        key={index}
                        onClick={() => onDotButtonClick(index)}
                        className={'carousel__dot'.concat(
                            index === selectedIndex ? ' carousel__dot--selected' : ''
                        )}
                    />
                ))}
            </div>
        </div>
    )
}

export default Banner

/*
<PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
*/