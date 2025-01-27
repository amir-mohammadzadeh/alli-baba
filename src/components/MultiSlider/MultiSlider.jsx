import useEmblaCarousel from 'embla-carousel-react'
import './MultiSlider.css'
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from '../SliderCustomTools/SliderCustomButtons.jsx'

const OPTIONS = { align: 'start', dragFree: true, direction: 'rtl' }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())


const MultiSlider = ({ children, className = '', sliderSetting = {} }) => {
    const [slides, options] = [SLIDES, OPTIONS]

    const [emblaRef, emblaApi] = useEmblaCarousel(options)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)


    return (
        <div className={`carousel multi-slider-container ${className}`}>
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {children}
                </div>
            </div>

            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />

        </div>
    )
}
export default MultiSlider