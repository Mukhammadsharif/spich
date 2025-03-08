"use client";

import {useTranslationClient} from "@/app/i18n/client";
import Image from "next/image";
import Mask from '../app/assets/mask_white.png'

import onionImage from '../app/assets/green_onion_pr.png';
import bbqImage from '../app/assets/bbq_pr.png';
import cheeseImage from '../app/assets/cheese_pr.png';
import laymImage from '../app/assets/laym_chili_pr.png';
import paprikaImage from '../app/assets/paprika_pr.png';
import saltyImage from '../app/assets/salty_pr.png';
import smetanaZelenImage from '../app/assets/smetana_zelen_pr.png';
import smetanaOnionImage from '../app/assets/smetana_onion_pr.png';
import CatalogCard from "@/components/CatalogCard";

export default function Products({lng}){
    const { t } = useTranslationClient(lng);
    const catalog = [
        { name: 'green_onion', image: onionImage, backgroundColor: "#119D49" },
        { name: 'bbq', image: bbqImage, backgroundColor: "#424242" },
        { name: 'with_cheese', image: cheeseImage, backgroundColor: "#F2B148" },
        { name: 'laym', image: laymImage, backgroundColor: "#5BA65A" },
        { name: 'paprika', image: paprikaImage, backgroundColor: "#A31E21" },
        { name: 'salty', image: saltyImage,backgroundColor: "#0F4C95" },
        { name: 'smetanaZelen', image: smetanaZelenImage, backgroundColor: "#302664" },
        { name: 'smetanaOnion', image: smetanaOnionImage, backgroundColor: "#173C1C" },
    ];

    return (
        <div className={'products'}>
            <div className={'d-flex flex-row align-items-center'}>
                <h1 className={'product-title'}>{t('our_products').toUpperCase()}</h1>
                <Image
                    src={Mask}
                    alt="mask"
                    className="mask"
                />
            </div>

            <div className={'d-flex flex-row flex-wrap justify-content-start mt-5'}>
                {catalog.map((product, index) => (
                    <CatalogCard product={product} key={index} lng={lng} />
                ))}
            </div>
        </div>
    )
}
