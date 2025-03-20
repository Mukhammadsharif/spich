"use client";

import {useTranslationClient} from "@/app/i18n/client";
import Image from "next/image";
import Mask from '../app/assets/mask_colored.png'
import VideoPlayer from "@/components/VideoPlayer";
import StaticsCard from "@/components/StaticsCard";

export default function VideoAndStatistics({lng}){
    const { t } = useTranslationClient(lng);
    const statistics = [
        { title: '100+', description: "statics_first" },
        { title: '10 000 000+', description: "statics_second" },
        { title: '8+', description: "statics_third" },
        { title: '1 600 М', description: "statics_fourth" },
    ];

    return (
        <div className={'products'}>
            <div className={'d-flex align-items-center flex-row mb-4'}>
                <h1 className={'product-title'}>{t('video_and_statistics').toUpperCase()}</h1>
                <Image
                    src={Mask}
                    alt="mask"
                    className="mask"
                />
            </div>

            <VideoPlayer />

            <div className={'row mt-5'}>
                {statistics.map((statistic, index) => (
                    <StaticsCard item={statistic} key={index} lng={lng} index={index} />
                ))}
            </div>
        </div>
    )
}
