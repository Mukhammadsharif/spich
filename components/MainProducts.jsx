"use client";

import {useTranslationClient} from "@/app/i18n/client";
import Image from "next/image";
import Mask from '../app/assets/mask_white.png'
import ProductCard from "@/components/ProductsCard";

import onionImage from '../app/assets/products_onion.png';
import saltyImage from '../app/assets/products_salty.png';
import cheeseImage from '../app/assets/products_cheese.png';
import PlusIcon from '../app/assets/plus_icon.png';

export default function MainProducts({lng}){
    const { t } = useTranslationClient(lng);
    const products = [
        { name: 'green_onion', image: onionImage },
        { name: 'salty', image: saltyImage },
        { name: 'with_cheese', image: cheeseImage },
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

            <div className={'d-flex flex-row justify-content-between align-items-center flex-wrap mt-5'}>
                {products.map((product, index) => (
                    <ProductCard product={product} key={index} lng={lng} />
                ))}

                <div className="col-lg-2 col-md-2 col-sm-6 mt-4">
                    <div className={'product-card-additional'}>
                        <p className="product-card-additional-name">{t('all_products')?.toUpperCase()}</p>
                        {/*<Image*/}
                        {/*    src={Mask}*/}
                        {/*    alt="mask"*/}
                        {/*    className="product-card-additional-mask"*/}
                        {/*/>*/}
                        <Image
                            src={PlusIcon}
                            alt="product-plus-icon"
                            className="product-plus-icon"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
