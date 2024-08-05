'use client'
import React, {useRef, useEffect} from 'react'
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
import videoStyles from './VideoCaurosel.module.css'
import YouTube from 'react-youtube'


export default function VideoCaurosel(props) {

    const {videos, options} = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)
    const videoRefs = useRef([]);
    //options for the youtube video
    const opts = {
        height: 'auto',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
        aspectRatio: 1
      };

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
      } = usePrevNextButtons(emblaApi)
    console.log(videos)

    const onReady = (event, index) => {
        videoRefs.current[index] = event.target;
    };

    const onStateChange = (event) => {
        if (event.data === 1) { // 1 means the video is playing
            pauseAllVideos(event.target);
        }
    };

    const pauseAllVideos = (currentPlayer = null) => {
        videoRefs.current.forEach((player) => {
            if (player && player.pauseVideo && player !== currentPlayer) {
                player.pauseVideo();
            }
        });
    };

    useEffect(() => {
        const navigationType = performance.getEntriesByType('navigation')[0]?.type;
        if (navigationType === 'back_forward') {
          pauseAllVideos();
        }
    }, []);

    return (
        <section className={`embla ${styles.embla}`} style={{borderTop: 'none'}}>
            <div className={`${styles.slideButton} ${styles.prevButton}`} onClick={onPrevButtonClick}>&lt;</div>
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                {videos.map((project, index) => {

                    return (
                    <div className="embla__slide" key={`videoSlide_${index}`}>
                        <div className={styles.slideWrapper}>
                            <div className={videoStyles.container}>
                                <div className={videoStyles.videoContainer}>
                                    <div className={videoStyles.videoWrapper}>
                                        <YouTube
                                            videoId={videos[index].videoId}
                                            opts={opts}
                                            id={videos[index].videoId}
                                            style={{width: '100%', height: '100%', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                                            onReady={(event) => onReady(event, index)}
                                            onStateChange={onStateChange}
                                        />
                                    </div>
                                </div>
                                <div className={videoStyles.videoInfo}>
                                    <h2 className={videoStyles.title}>{videos[index].title}</h2>
                                    <p className={videoStyles.description}>{videos[index].description}</p>
                                </div>
                            </div>
                            
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