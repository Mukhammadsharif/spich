"use client";

import {useTranslationClient} from "@/app/i18n/client";
import Image from "next/image";
import Mask from '../app/assets/mask_colored.png'

import firstImage from '../app/assets/news_first.svg';
import secondImage from '../app/assets/news_second.svg';
import thirdImage from '../app/assets/news_third.svg';
import NewsCard from "@/components/NewsCard";

export default function News({lng}){
    const { t } = useTranslationClient(lng);

    const cards = [
        { title: "news_first", image: firstImage},
        { title: "news_second", image: secondImage},
        { title: "news_third", image: thirdImage},
    ]

    return (
        <div className={'with-us'}>
            <div className={'d-flex flex-row align-items-center'}>
                <h1 className={'product-title'} style={{color: '#000252'}}>{t('news').toUpperCase()}</h1>
                <Image
                    src={Mask}
                    alt="mask"
                    className="mask"
                />
            </div>

            <div className={'row mt-5'}>
                {cards.map((card, index) => (
                    <NewsCard card={card} key={index} lng={lng} />
                ))}
            </div>
        </div>
    )
}
