import Image from "next/image";
import {useTranslationClient} from "@/app/i18n/client";
import QualityImage from '../app/assets/quality_icon.png';


export default function WithUsCard({ card, lng }) {
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
                    <div className={'col-3'}>
                        <div className={'quality-image-container'} style={{backgroundColor: card.backgroundColor}}>
                            <Image
                                src={QualityImage}
                                alt="quality-image"
                                className="quality-image"
                            />
                        </div>
                    </div>
                    <div className={'col-9'}>
                        <span className={'quality-card-title'}>{t(card?.title).toUpperCase()}</span><br/>
                        <span className={'quality-card-description'}>{t(card?.description)}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
