"use client";

import {useTranslationClient} from "@/app/i18n/client";
import Image from "next/image";
import Mask from '../app/assets/mask_colored.png'
import ProductCard from "@/components/ProductsCard";

import onionImage from '../app/assets/products_onion.png';
import saltyImage from '../app/assets/products_salty.png';
import cheeseImage from '../app/assets/products_cheese.png';
import PlusIcon from '../app/assets/plus_icon.png';
import VideoPlayer from "@/components/VideoPlayer";

export default function VideoAndStatistics({lng}){
    const { t } = useTranslationClient(lng);
    const products = [
        { name: 'green_onion', image: onionImage },
        { name: 'salty', image: saltyImage },
        { name: 'with_cheese', image: cheeseImage },
    ];

    return (
        <div className={'products'}>
            <h1 className={'product-title'}>{t('video_and_statistics').toUpperCase()}</h1>
            <Image
                src={Mask}
                alt="mask"
                className="mask"
            />

            <VideoPlayer />

            <div className={'row mt-5'}>
                {products.map((product, index) => (
                    <ProductCard product={product} key={index} lng={lng} />
                ))}
            </div>
        </div>
    )
}
