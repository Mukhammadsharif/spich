import Image from "next/image";
import {useTranslationClient} from "@/app/i18n/client";


export default function CommentCard({ card, lng }) {
    const { t } = useTranslationClient(lng);
    return (
        <div className="col-lg-4 mt-4 d-flex">
            <div className={'col-12 comment-card'}>
                <div className={'row align-items-center mt-3 mb-2'}>
                    <div className={'col-12 d-flex flex-row align-items-center justify-content-around mt-2'}>
                        <div className={'quality-image-container'}>
                            <Image
                                src={card?.image}
                                alt="comment-image"
                                className="comment-image"
                            />
                        </div>

                        <span className={'quality-card-title'}>{t(card?.title).toUpperCase()}</span><br/>
                    </div>

                    <div className={'col-12 mt-3'}>
                        <span className={'quality-card-description'}>{t(card?.description)}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
