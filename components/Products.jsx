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
        { name: 'green_onion', image: onionImage, backgroundColor: "#119D49", desc: 'green_onion_desc', comp: 'green_onion_comp'},
        { name: 'bbq', image: bbqImage, backgroundColor: "#424242", desc: 'bbq_desc', comp: 'bbq_comp' },
        { name: 'with_cheese', image: cheeseImage, backgroundColor: "#F2B148", desc: 'with_cheese_desc', comp: 'with_cheese_comp' },
        { name: 'laym', image: laymImage, backgroundColor: "#5BA65A", desc: 'laym_desc', comp: 'laym_comp' },
        { name: 'paprika', image: paprikaImage, backgroundColor: "#A31E21", desc: 'paprika_desc', comp: 'paprika_comp' },
        { name: 'salty', image: saltyImage,backgroundColor: "#0F4C95", desc: 'salty_desc', comp: 'salty_comp' },
        { name: 'smetanaZelen', image: smetanaZelenImage, backgroundColor: "#302664", desc: 'smetanaZelen_desc', comp: 'smetanaZelen_comp' },
        { name: 'smetanaOnion', image: smetanaOnionImage, backgroundColor: "#173C1C", desc: 'smetanaOnion_desc', comp: 'smetanaOnion_comp' },
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
