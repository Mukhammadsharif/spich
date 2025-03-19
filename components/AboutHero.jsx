"use client";

import {useTranslationClient} from "@/app/i18n/client";
import HeroImage from '../app/assets/hero_about_us.png';
import Image from "next/image";
import {useRouter} from "next/navigation";

export default function AboutHero({lng}){
    const { t } = useTranslationClient(lng);
    const router = useRouter();

    return (
        <div className={'hero'}>
            <div className={'row'}>
                <div className={'col-lg-5'}>
                    <h1 className={'hero-main-text'}>{t('about_hero_title').toUpperCase()}</h1>

                    <p className={'hero-sub-text'}>{t('about_hero_description')}</p>

                    <button type="button" className="header-button mx-2 mb-2" onClick={()=>router.push('/catalog')}>
                        {t('additional').toUpperCase()}
                    </button>
                </div>


                <div className={'col-lg-7'}>
                   <div className={'row justify-content-center align-items-center'}>
                       <div className={'col-lg-7'}>
                           <Image
                               src={HeroImage}
                               alt="hero-image"
                               className="header-image"
                           />
                       </div>
                   </div>
                </div>
            </div>
        </div>
    )
}
