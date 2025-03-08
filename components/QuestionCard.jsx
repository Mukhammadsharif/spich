"use client";


import {useTranslationClient} from "@/app/i18n/client";
import OpenIcon from "@/app/assets/open_icon.png";
import CloseIcon from "@/app/assets/closed_icon.png";
import Image from "next/image";
import {useState} from "react";

export default function QuestionCard({ question, lng }) {
    const { t } = useTranslationClient(lng);
    const [open, setOpen] = useState(false);

    return (
        <div className="col-lg-12 mt-4" onClick={() => setOpen(!open)}>
            <div className={'question-card'}>
                <div className={'d-flex flex-row justify-content-between'}>
                    <span className={'question-title'}>{t(question?.question).toUpperCase()}</span>

                    <Image
                        src={open ? OpenIcon: CloseIcon}
                        alt="hero-image"
                        className="open-close-icon"
                    />
                </div>

                {open ? (
                    <span className={'question-answer'}>{t(question?.answer)}</span>
                ) : ''}
            </div>
        </div>
    )
}
