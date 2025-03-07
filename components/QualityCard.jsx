import Image from "next/image";
import QualityImage from '../app/assets/quality_icon.png';
import {useTranslationClient} from "@/app/i18n/client";


export default function QualityCard({background, title, description, lng}) {
    const { t } = useTranslationClient(lng);
    return (
        <div className={'row align-items-center mt-4'}>
            <div className={'col-md-3'}>
                <div className={'quality-image-container'} style={{backgroundColor: background}}>
                    <Image
                        src={QualityImage}
                        alt="quality-image"
                        className="quality-image"
                    />
                </div>
            </div>
            <div className={'col-md-9'}>
                <span className={'quality-card-title'}>{t(title).toUpperCase()}</span><br/>
                <span className={'quality-card-description'}>{t(description)}</span>
            </div>
        </div>
    )
}
