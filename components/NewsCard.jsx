import Image from "next/image";
import {useTranslationClient} from "@/app/i18n/client";
import QualityImage from '../app/assets/quality_icon.png';


export default function NewsCard({ card, lng }) {
    const { t } = useTranslationClient(lng);
    return (
        <div className="col-lg-4 with-us-card mt-4">
            <Image
                src={card?.image}
                alt="with-us-image"
                className="with-us-image"
            />
            <div className={'col-8 with-us-footer'}>
                <div className={'row align-items-center mt-3 mb-2'}>
                    <div className={'col-lg-9 news-card-title-container'}>
                        <span className={'news-card-title'}>{t(card?.title).toUpperCase()}</span><br/>
                    </div>
                </div>
            </div>
        </div>
    )
}
