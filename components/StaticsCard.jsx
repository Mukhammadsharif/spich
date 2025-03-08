"use client";

import {useTranslationClient} from "@/app/i18n/client";


export default function StaticsCard({item, lng, index}) {
    const { t } = useTranslationClient(lng);
    return (
        <div className={'col-lg-3 mt-4'}>
           <div className={'statics-card'}>
               <p className={'statics-card-title'}>{item?.title?.toUpperCase()} {index === 3 ? <sup>2</sup> : ''}</p>
               <p className={'statics-card-description'}>{t(item?.description)}</p>
           </div>
        </div>
    )
}
