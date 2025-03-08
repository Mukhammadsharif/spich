"use client"
import Logo from '../app/assets/logo.png';
import Burger from "../app/assets/burger_icon.png";
import {useTranslationClient} from "@/app/i18n/client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import LanguageSwitcher from "@/components/LanguageSwitcher";
import {useState} from "react";

export default function Header({ lng }) {
    const { t } = useTranslationClient(lng);
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="header-nav bg-white mb-3">
            <nav className={'nav-container'}>
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

                    <div className={'col-lg-4 d-flex align-items-center justify-content-between'}>
                        <Link href="/" className={`header-link ${'/'+lng === usePathname() ? 'active' : ''}`}>
                            {t('main').toUpperCase()}
                        </Link>
                        <Link href="/catalog" className={`header-link ${'/'+lng+'/catalog' === usePathname() ? 'active' : ''}`}>
                            {t('catalog').toUpperCase()}
                        </Link>
                        <Link href="/about" className={`header-link ${'/'+lng+'/about' === usePathname() ? 'active' : ''}`}>
                            {t('about').toUpperCase()}
                        </Link>
                        <Link href="/contacts" className={`header-link ${'/'+lng+'/contacts' === usePathname() ? 'active' : ''}`}>
                            {t('contacts').toUpperCase()}
                        </Link>
                    </div>

                    <div className={'col-lg-2 offset-lg-4 offset-lg-4 align-items-center'}>
                        <div className="d-flex align-items-center justify-content-end">
                            <LanguageSwitcher lng={lng} t={t}/>

                            <button type="button" className="header-button mx-2 mb-2">
                                {t('connect').toUpperCase()}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <nav className={'nav-container-mobile'}>
                <div className={'d-flex align-items-center justify-content-between'}>
                    <Link href="/">
                        <Image
                            src={Logo}
                            alt="header_logo"
                            className="header-logo"
                        />
                    </Link>

                    <div className="d-flex align-items-center justify-content-end">
                        <LanguageSwitcher lng={lng} t={t}/>

                        <button type="button" className="header-button mx-2 mb-1" onClick={() => setOpen(!open)}>
                            <Image
                                src={Burger}
                                alt="burger"
                                className="burger"
                            />
                        </button>
                    </div>
                </div>

                {open ? (
                    <div className={'row'}>
                        <div className={'col-12 d-flex justify-content-center align-items-center mt-3'}>
                            <Link href="/" className={`header-link-mobile ${'/'+lng === pathname ? 'active' : ''}`}>
                                {t('main').toUpperCase()}
                            </Link>
                        </div>

                        <div className={'col-12 d-flex justify-content-center align-items-center mt-3'}>
                            <Link href="/catalog" className={`header-link-mobile ${'/'+lng+'/catalog' === pathname ? 'active' : ''}`}>
                                {t('catalog').toUpperCase()}
                            </Link>
                        </div>

                        <div className={'col-12 d-flex justify-content-center align-items-center mt-3'}>
                            <Link href="/about" className={`header-link-mobile ${'/'+lng+'/about' === pathname ? 'active' : ''}`}>
                                {t('about').toUpperCase()}
                            </Link>
                        </div>

                        <div className={'col-12 d-flex justify-content-center align-items-center mt-3'}>
                            <Link href="/contacts" className={`header-link-mobile ${'/'+lng+'/contacts' === pathname ? 'active' : ''}`}>
                                {t('contacts').toUpperCase()}
                            </Link>
                        </div>
                    </div>
                ) : ''}
            </nav>
        </header>
    )
}
