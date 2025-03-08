"use client";

import {useTranslationClient} from "@/app/i18n/client";
import HeroImage from '../app/assets/hero_image.png';
import Image from "next/image";
import QualityCard from "@/components/QualityCard";

export default function Hero({lng}){
    const { t } = useTranslationClient(lng);
    const cards = [
        { backgroundColor: '#FF8413', title: "quality", description: "quality_text"},
        { backgroundColor: '#000252', title: "natural", description: "natural_text"},
        { backgroundColor: '#FF6B00', title: "sweet", description: "sweet_text"},
    ]

    return (
        <div className={'hero'}>
            <div className={'row'}>
                <div className={'col-lg-5 col-md-12'}>
                    <h1 className={'hero-main-text'}>{t('hero_main_text').toUpperCase()}</h1>

                    <p className={'hero-sub-text'}>{t('hero_sub_text')}</p>

                    <button type="button" className="header-button mx-2 mb-2">
                        {t('additional').toUpperCase()}
                    </button>
                </div>


                <div className={'col-lg-4'}>
                    <Image
                        src={HeroImage}
                        alt="hero-image"
                        className="header-image"
                    />
                </div>

                <div className={'col-lg-3'}>
                    {cards.map((card, index) => (
                        <QualityCard key={index}
                                     background={card.backgroundColor}
                                     title={card.title}
                                     description={card.description}
                                     lng={lng}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
