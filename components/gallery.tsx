import React, { DOMElement } from "react";
import Image from 'next/image';
import galleryStyles from './rowGallery.module.css';
import CasamentoArLivrePic from '../public/casamento-ao-ar-livre.jpg';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';


type Gallery = {
    title: string,
    paragraph: string
}

var dly = 0;
var ita = false;
var drt = 3;
var anmIn = 'animate__fadeInUp'
var anmOnc = true


export const Gallery = ({ title, paragraph }: Gallery) => <aside>

    <div className={galleryStyles.rowGallery}>
        <div className={galleryStyles.pic}>
            <Image
                priority
                src="https://casamento.photosites.com.br/wp-content/uploads/2020/02/VAL_0373-scaled-600x899.jpg"
                height={'338px'}
                width={'252px'}
                alt={'teste'}
            />
        </div>
        <div className={galleryStyles.pic}>
            <Image
                priority
                src="https://casamento.photosites.com.br/wp-content/uploads/2020/02/MG_0198-min-600x400.jpg"
                height={'338px'}
                width={'508px'}
                alt={'teste'}
            />
        </div>
    </div>

    <div className={galleryStyles.columnGallery}>
        <div>

            <div className={galleryStyles.rowGallery}>
                <div className={galleryStyles.pic}>
                    <Image
                        priority
                        src="https://casamento.photosites.com.br/wp-content/uploads/2020/02/DSC_0299-min-600x400.jpg"
                        height={'168px'}
                        width={'252px'}
                        alt={'teste'}
                    />
                </div>
                <div className={galleryStyles.pic}>
                    <Image
                        priority
                        src="https://casamento.photosites.com.br/wp-content/uploads/2022/02/7dc2cd7f-58ca-4181-a28e-a9b1d96da3a0-600x400.jpg"
                        height={'168px'}
                        width={'254px'}
                        alt={'teste'}
                    />
                </div>

            </div>

            <div className={galleryStyles.pic}>
                <AnimationOnScroll animateOnce={anmOnc} animateIn={anmIn} initiallyVisible={ita} duration={3}>
                    <Image
                        priority
                        src={CasamentoArLivrePic}
                        height={'339px'}
                        width={'508px'}
                        alt={'teste'}
                    />
                </AnimationOnScroll>
            </div>
        </div>
        <div>

            <div className={galleryStyles.pic}>
                    <Image
                        priority
                        src="https://casamento.photosites.com.br/wp-content/uploads/2022/02/8e366116-e8a6-4e50-bdbd-9486d8ee1285-600x900.jpg"
                        height={'378px'}
                        width={'252px'}
                        alt={'teste'}
                    />
            </div>
            <div className={galleryStyles.pic}>
                <AnimationOnScroll animateOnce={anmOnc} animateIn={anmIn} initiallyVisible={ita} duration={3}>
                    <Image
                        priority
                        src="https://casamento.photosites.com.br/wp-content/uploads/2022/02/a141a756-0fc9-4f66-a334-9928add80ffa-600x419.jpg"
                        height={'129px'}
                        width={'252px'}
                        alt={'teste'}
                    />
                </AnimationOnScroll>
            </div>
        </div>
    </div>
    <div className={galleryStyles.columnGallery}>

        <div>

            <div className={galleryStyles.pic}>
                <AnimationOnScroll animateOnce={anmOnc} animateIn={anmIn} initiallyVisible={ita} duration={3}>
                    <Image
                        priority
                        src="https://casamento.photosites.com.br/wp-content/uploads/2022/02/c3a78523-64ca-4dd5-aa9b-8f5e7ce2c71e-600x400.jpg"
                        height={'129px'}
                        width={'252px'}
                        alt={'teste'}
                    />
                </AnimationOnScroll>
            </div>
            <div className={galleryStyles.pic}>
                <AnimationOnScroll animateOnce={anmOnc} animateIn={anmIn} initiallyVisible={ita} duration={3}>
                    <Image
                        priority
                        src="https://casamento.photosites.com.br/wp-content/uploads/2022/02/9264ccf8-32d5-4ed3-a26b-106da89b7679-600x900.jpg"
                        height={'378px'}
                        width={'252px'}
                        alt={'teste'}
                    />
                </AnimationOnScroll>
            </div>
        </div>
        <div>


            <div className={galleryStyles.pic}>
                <AnimationOnScroll animateOnce={anmOnc} animateIn={anmIn} initiallyVisible={ita} duration={3}>
                    <Image
                        priority
                        src="https://casamento.photosites.com.br/wp-content/uploads/2022/02/f9d78e08-79aa-46cd-be80-8273a6ca7d4e-600x400.jpg"
                        height={'338px'}
                        width={'508px'}
                        alt={'teste'}
                    />
                </AnimationOnScroll>
            </div>
            <div className={galleryStyles.rowGallery}>
                <div className={galleryStyles.pic}>
                    <AnimationOnScroll animateOnce={anmOnc} animateIn={anmIn} initiallyVisible={ita} duration={3}>
                        <Image
                            priority
                            src="https://casamento.photosites.com.br/wp-content/uploads/2022/02/889a91d7-da63-4ad6-ab9c-5e1a068c2d84-e1644495349642.jpg"
                            height={'168px'}
                            width={'252px'}
                            alt={'teste'}
                        />
                    </AnimationOnScroll>
                </div>
                <div className={galleryStyles.pic}>
                    <AnimationOnScroll animateOnce={anmOnc} animateIn={anmIn} initiallyVisible={ita} duration={4}>
                        <Image
                            priority
                            src="https://casamento.photosites.com.br/wp-content/uploads/2020/02/VAL_0414-scaled-600x400.jpg"
                            height={'168px'}
                            width={'254px'}
                            alt={'teste'}
                        />
                    </AnimationOnScroll>
                </div>

            </div>
        </div>
    </div>

</aside>

const el = <Gallery title="Welcome!" paragraph="To this example" />