import React, { DOMElement } from "react";
import Image from 'next/image';
import galleryStyles from './rowGallery.module.css';

import CasamentoArLivrePic from '../public/casamento-ao-ar-livre.jpg';
import hC3 from '../public/h-casal-3.jpg'
import hC4 from '../public/h-casal-4.jpg'
import hC5 from '../public/h-casal-5.jpg'
import hC6 from '../public/h-casal-6.jpg'
import hM from '../public/h-makeoff-1.jpg'
import vC1 from '../public/v-casal-1.jpg'
import vC2 from '../public/v-casal-2.jpg'
import vC3 from '../public/v-casal-3.jpg'
import vC4 from '../public/v-casal-4.jpg'
import hN1 from '../public/h-noivo-1.jpg'
import vN1 from '../public/v-noiva-1.jpg'
import vN2 from '../public/v-noiva-2.jpg'
import vN3 from '../public/v-noiva-3.jpg'
import vN4 from '../public/v-noiva-4.jpg'

import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';


type Gallery = {
    title: string,
    paragraph: string
}



export const Gallery = ({ title, paragraph }: Gallery) => <aside>

    <div className={galleryStyles.rowGallery}>
        <div className={galleryStyles.pic}>
            <Image
                priority
                src={vC1}
                height={'338px'}
                width={'252px'}
                alt={'teste'}
            />
        </div>
        <div className={galleryStyles.pic}>
            <Image
                priority
                src={hC3}
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
                        src={hC4}
                        height={'168px'}
                        width={'252px'}
                        alt={'teste'}
                    />
                </div>
                <div className={galleryStyles.pic}>
                    <Image
                        priority
                        src={hM}
                        height={'168px'}
                        width={'254px'}
                        alt={'teste'}
                    />
                </div>

            </div>

            <div className={galleryStyles.pic}>
                <Image
                    priority
                    src={CasamentoArLivrePic}
                    height={'339px'}
                    width={'508px'}
                    alt={'teste'}
                />
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
                <Image
                    priority
                    src={hC6}
                    height={'129px'}
                    width={'252px'}
                    alt={'teste'}
                />
            </div>
        </div>
    </div>
    <div className={galleryStyles.columnGallery}>

        <div>

            <div className={galleryStyles.pic}>
                <Image
                    priority
                    src='https://casamento.photosites.com.br/wp-content/uploads/2020/02/MG_0310-min-600x400.jpg'
                    height={'129px'}
                    width={'252px'}
                    alt={'teste'}
                />
            </div>
            <div className={galleryStyles.pic}>
                <Image
                    priority
                    src={vN3}
                    height={'378px'}
                    width={'252px'}
                    alt={'teste'}
                />
            </div>
        </div>
        <div>


            <div className={galleryStyles.pic}>
                <Image
                    priority
                    src={hN1}
                    height={'338px'}
                    width={'508px'}
                    alt={'teste'}
                />
            </div>
            <div className={galleryStyles.rowGallery}>
                <div className={galleryStyles.pic}>
                    <Image
                        priority
                        src="https://casamento.photosites.com.br/wp-content/uploads/2022/02/889a91d7-da63-4ad6-ab9c-5e1a068c2d84-e1644495349642.jpg"
                        height={'168px'}
                        width={'252px'}
                        alt={'teste'}
                    />
                </div>
                <div className={galleryStyles.pic}>
                    <Image
                        priority
                        src="https://casamento.photosites.com.br/wp-content/uploads/2020/02/VAL_0414-scaled-600x400.jpg"
                        height={'168px'}
                        width={'254px'}
                        alt={'teste'}
                    />
                </div>

            </div>
        </div>
    </div>

</aside>

const el = <Gallery title="Welcome!" paragraph="To this example" />