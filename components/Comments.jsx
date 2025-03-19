"use client";

import {useTranslationClient} from "@/app/i18n/client";
import Image from "next/image";
import Mask from '../app/assets/mask_colored.png'

import firstImage from '../app/assets/first_comment.png';
import secondImage from '../app/assets/second_comment.png';
import thirdImage from '../app/assets/third_comment.png';
import {useRouter} from "next/navigation";
import CommentCard from "@/components/CommentCard";

export default function Comments({lng}){
    const { t } = useTranslationClient(lng);

    const cards = [
        { title: "first_comment_name", description: "first_comment_text", image: firstImage},
        { title: "second_comment_name", description: "second_comment_text", image: secondImage},
        { title: "third_comment_name", description: "third_comment_text", image: thirdImage },
    ]

    const router = useRouter();

    return (
        <div className={'with-us'} style={{backgroundColor: '#000252'}}>
            <div className={'d-flex flex-row align-items-center justify-content-between'}>
                <div className={'d-flex flex-row align-items-center'}>
                    <h1 className={'product-title'} style={{color: '#FFFFFF'}}>{t('comments').toUpperCase()}</h1>
                    <Image
                        src={Mask}
                        alt="mask"
                        className="mask"
                    />
                </div>
            </div>

            <div className={'row mt-5'}>
                {cards.map((card, index) => (
                    <CommentCard card={card} key={index} lng={lng} />
                ))}
            </div>
        </div>
    )
}
