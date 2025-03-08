"use client"
import Logo from '../app/assets/footer_logo.png';
import {useTranslationClient} from "@/app/i18n/client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import Mail from "@/app/assets/email_white.png";
import Facebook from "@/app/assets/facebook_white.png";
import Instagram from "@/app/assets/instagram_white.png";
import Telegram from "@/app/assets/telegram_white.png";

export default function Footer({ lng }) {
    const { t } = useTranslationClient(lng);

    return (
        <header className="footer-nav">
            <nav className={''}>
                <div className={'row align-items-center'}>
                   <div className={'col-lg-1'}>
                       <Link href="/">
                           <Image
                               src={Logo}
                               alt="header_logo"
                               className="header-logo"
                           />
                       </Link>
                   </div>

                    <div className={'col-lg-1'}></div>

                    <div className={'col-lg-4 d-flex align-items-center justify-content-between mt-3'}>
                        <Link href="/" className={`footer-link ${'/'+lng === usePathname() ? 'active' : ''}`}>
                            {t('main').toUpperCase()}
                        </Link>
                        <Link href="/catalog" className={`footer-link ${'/'+lng+'/catalog' === usePathname() ? 'active' : ''}`}>
                            {t('catalog').toUpperCase()}
                        </Link>
                        <Link href="/about" className={`footer-link ${'/'+lng+'/about' === usePathname() ? 'active' : ''}`}>
                            {t('about').toUpperCase()}
                        </Link>
                        <Link href="/contacts" className={`footer-link ${'/'+lng+'/contacts' === usePathname() ? 'active' : ''}`}>
                            {t('contacts').toUpperCase()}
                        </Link>
                    </div>

                    <div className={'col-lg-4'}></div>

                    <div className={'col-lg-2 mt-3'}>
                        <div className={'d-flex flex-row justify-content-between w-100'}>
                            <a href="mailto:example@email.com" target="_blank" rel="noopener noreferrer">
                                <Image
                                    src={Mail}
                                    alt="Email"
                                    className="contacts-icon"
                                />
                            </a>

                            <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
                                <Image
                                    src={Facebook}
                                    alt="Facebook"
                                    className="contacts-icon"
                                />
                            </a>

                            <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                                <Image
                                    src={Instagram}
                                    alt="Instagram"
                                    className="contacts-icon"
                                />
                            </a>

                            <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer">
                                <Image
                                    src={Telegram}
                                    alt="Telegram"
                                    className="contacts-icon"
                                />
                            </a>
                        </div>
                    </div>
                </div>

                <div className={'d-flex flex-row justify-content-between mt-4'}>
                    <span className={'text-white footer-text'}>{t('all_rights_reserved')}</span>
                    <span className={'text-white footer-text'}>Made by ABBA Marketing agency</span>
                </div>
            </nav>
        </header>
    )
}
