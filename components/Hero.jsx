"use client";

import {useTranslationClient} from "@/app/i18n/client";
import HeroImage from '../app/assets/hero_image.png';
import Image from "next/image";

export default function Hero({lng}){
    const { t } = useTranslationClient(lng);

    return (
        <div className={'hero'}>
            <div className={'row'}>
                <div className={'col-md-5'}>
                    <h1 className={'hero-main-text'}>{t('hero_main_text').toUpperCase()}</h1>

                    <p className={'hero-sub-text'}>{t('hero_sub_text')}</p>

                    <button type="button" className="header-button mx-2 mb-2">
                        {t('additional').toUpperCase()}
                    </button>
                </div>

                <div className={'col-md-5'}>
                    <Image
                        src={HeroImage}
                        alt="hero-image"
                        className="header-image"
                    />
                </div>

                <div className={'col-md-2'}>

                </div>
            </div>
        </div>
    )
}
