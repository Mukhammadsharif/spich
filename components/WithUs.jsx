"use client";

import {useTranslationClient} from "@/app/i18n/client";
import Image from "next/image";
import Mask from '../app/assets/mask_colored.png'

import onionImage from '../app/assets/with_us_onion.svg';
import saltyImage from '../app/assets/with_us_salty.svg';
import cheeseImage from '../app/assets/with_us_cheese.svg';
import WithUsCard from "@/components/WithUsCard";

export default function WithUs({lng}){
    const { t } = useTranslationClient(lng);

    const cards = [
        { backgroundColor: '#FF8413', title: "quality", description: "quality_text", image: onionImage},
        { backgroundColor: '#000252', title: "natural", description: "natural_text", image: saltyImage},
        { backgroundColor: '#FF6B00', title: "sweet", description: "sweet_text", image: cheeseImage },
    ]

    return (
        <div className={'with-us'}>
            <div className={'d-flex flex-row align-items-center justify-content-between'}>
                <h1 className={'product-title'} style={{color: '#000252'}}>{t('with_us').toUpperCase()}</h1>
                <Image
                    src={Mask}
                    alt="mask"
                    className="mask"
                />

                <button type="button" className="header-button mx-2 mb-2">
                    {t('about').toUpperCase()}
                </button>
            </div>

            <div className={'row mt-5'}>
                {cards.map((card, index) => (
                    <WithUsCard card={card} key={index} lng={lng} />
                ))}
            </div>
        </div>
    )
}
