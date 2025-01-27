import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { DotButton, useDotButton } from '../SliderCustomTools/SliderCustomDotes'
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from '../SliderCustomTools/SliderCustomButtons'
import { BANNER_IMG } from '../../assets/staticPaths'

export const OPTIONS = { loop: true }
const SLIDE_COUNT = 5
export const SLIDES = Array.from(Array(SLIDE_COUNT).keys())


const Exampel_BannerList = new Array(8).fill().map((e, i) => ({ id: `bnr:${i + 1}`, imgURL: `banner-${1}.jpg` }))

const Banner = () => {
    const BANNERS_IMG = '/public/static/images/banners/'
    const [slides, options] = [SLIDES, Exampel_BannerList]
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])
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
        <div className={'carousel'}>
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    <div className="carousel__item _image_ci">
                        <img src={BANNER_IMG + "banner-1.jpg"}  alt="" />
                    </div>
                    <div className="carousel__item _image_ci">
                        <img src={BANNER_IMG + "banner-2.jpg"} alt="" />
                    </div>
                </div>
            </div>


            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
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