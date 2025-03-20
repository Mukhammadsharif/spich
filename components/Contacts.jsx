"use client"

import {useTranslationClient} from "@/app/i18n/client";
import Image from "next/image";
import YandexMap from "@/components/YandexMap";
import Mask from "@/app/assets/mask_colored.png";
import Mail from "@/app/assets/email.png";
import Facebook from "@/app/assets/facebook.png";
import Instagram from "@/app/assets/instagram.png";
import Telegram from "@/app/assets/telegram.png";


export default function Contacts({ lng }) {
    const { t } = useTranslationClient(lng);
    return (
        <div className={'with-us'}>
            <div className={'row'}>
                <div className={'col-lg-4'}>
                    <div className={'d-flex flex-row align-items-center'}>
                        <h1 className={'product-title'} style={{color: '#000252'}}>{t('contact_us').toUpperCase()}</h1>
                        <Image
                            src={Mask}
                            alt="mask"
                            className="mask"
                        />
                    </div>

                    <div className={'col-lg-12 mt-5'}>
                        <div className={'contacts-main'}>
                            <span className={'contacts-title'}>{t('phone')}:</span><br/>
                            <span className={'contacts-text'}>
                                <a href="tel:+998 71 500 77 70" rel="noopener noreferrer"
                                   style={{textDecoration: 'none', color: '#000252'}}>
                                    +998 71 500 77 70
                                </a>
                            </span><br/><br/>

                            <span className={'contacts-title'}>{t('address')}:</span><br/>
                            <span className={'contacts-text'}>{t('address_text')}</span><br/><br/>

                            <span className={'contacts-title'}>{t('socials')}:</span><br/>
                            <div className={'d-flex flex-row justify-content-between w-50'}>
                                <a href="mailto:spichuz@email.com" target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src={Mail}
                                        alt="Email"
                                        className="contacts-icon"
                                    />
                                </a>

                                <a href="https://facebook.com/spichuz" target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src={Facebook}
                                        alt="Facebook"
                                        className="contacts-icon"
                                    />
                                </a>

                                <a href="https://instagram.com/spichuz" target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src={Instagram}
                                        alt="Instagram"
                                        className="contacts-icon"
                                    />
                                </a>

                                <a href="https://t.me/spichuz" target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src={Telegram}
                                        alt="Telegram"
                                        className="contacts-icon"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={'col-lg-8'}>
                   <YandexMap />
                </div>

            </div>
        </div>
    )
}
