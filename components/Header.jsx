"use client"
import Logo from '../app/assets/logo.png';
import {useTranslationClient} from "@/app/i18n/client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Header({ lng }) {
    const { t } = useTranslationClient(lng);

    return (
        <header className="header-nav bg-white">
            <nav className={'nav-container'}>
                <div className={'row align-items-center'}>
                   <div className={'col-md-1'}>
                       <Link href="/">
                           <Image
                               src={Logo}
                               alt="header_logo"
                               className="header-logo"
                           />
                       </Link>
                   </div>

                    <div className={'col-md-1'}></div>

                    <div className={'col-md-3 d-flex align-items-center justify-content-between'}>
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

                    <div className={'col-md-5'}></div>

                    <div className={'col-md-2 align-items-center'}>
                        <div className="d-flex align-items-center justify-content-end">
                            <LanguageSwitcher lng={lng} t={t}/>

                            <button type="button" className="header-button mx-2 mb-2">
                                {t('connect').toUpperCase()}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
