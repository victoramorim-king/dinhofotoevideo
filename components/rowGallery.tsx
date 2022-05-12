import CasamentoArLivrePic from '../public/casamento-ao-ar-livre.jpg'
import Image from "next/image";
import galleryStyles from './rowGallery.module.css'
import React from "react";

type RowGallery = {

}

export const RowGallery = ({}: RowGallery) => <aside>
        <div className={galleryStyles.rowGallery}>
            <div className={galleryStyles.pic}>
              <Image
                priority
                src={CasamentoArLivrePic}
                className={galleryStyles.pic}
                height={'338px'}
                width={'252px'}
                alt={'teste'}
              />
            </div>
          <div className={galleryStyles.pic}>
            <Image
              priority
              src={CasamentoArLivrePic}
              height={'338px'}
              width={'508px'}
              alt={'teste'}
            />
          </div>
        </div>
</aside>

const el = <RowGallery />