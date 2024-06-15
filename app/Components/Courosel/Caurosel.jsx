
import React, {useState} from 'react'
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import './embla.css'
import FeaturedProject from '../projects/FeaturedProject/FeaturedProject';
import styles from './Caurosel.module.css'


export default function Caurosel(props) {

    const {projects, options} = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
      } = usePrevNextButtons(emblaApi)

    return (
        <section className={`embla ${styles.embla}`}>
            <div className={`${styles.slideButton} ${styles.prevButton}`} onClick={onPrevButtonClick}>&lt;</div>
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                {projects.map((project, index) => {if(index === projects.length - 1) return null

                    return (
                    <div className="embla__slide" key={`slide_${index}`}>
                        <div className={styles.slideWrapper}>
                            
                            <FeaturedProject
                                gif={projects[index].gif} 
                                image={projects[index].image}
                                title ={projects[index].title} 
                                description={projects[index].description} 
                                link={projects[index].link} 
                                github={projects[index].github} 
                                alt={projects[index].alt}
                                skills={projects[index].skills}
                                techs={projects[index].techs}
                                index={index}
                            />
                            
                        </div>
                    </div>
                )})}
                </div>
            </div>

            <div className="embla__controls">
                {/* <div className="embla__buttons">
                <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div> */}

                {/* <div className="embla__dots">
                {scrollSnaps.map((_, index) => (
                    <DotButton
                    key={index}
                    onClick={() => onDotButtonClick(index)}
                    className={'embla__dot'.concat(
                        index === selectedIndex ? ' embla__dot--selected' : ''
                    )}
                    />
                ))}
                </div> */}
            </div>
            <div className={`${styles.slideButton} ${styles.nextButton}`} onClick={onNextButtonClick}>&gt;</div>
        </section>
    )
}