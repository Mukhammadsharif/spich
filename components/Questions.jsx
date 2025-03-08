"use client";

import {useTranslationClient} from "@/app/i18n/client";
import Image from "next/image";
import Mask from '../app/assets/mask_white.png'
import QuestionCard from "@/components/QuestionCard";

export default function Questions({lng}){
    const { t } = useTranslationClient(lng);
    const questions = [
        { question: "question_first", answer: "answer_first" },
        { question: "question_second", answer: "answer_second" },
        { question: "question_third", answer: "answer_third" },
        { question: "question_fourth", answer: "answer_fourth" },
    ];

    return (
        <div className={'products'}>
            <div className={'row'}>
                <div className={'col-lg-3 d-flex flex-row'}>
                    <h1 className={'product-title'}>{t('questions').toUpperCase()}</h1>
                    <Image
                        src={Mask}
                        alt="mask"
                        className="mask"
                    />
                </div>

                <div className={'col-lg-8 offset-lg-1'}>
                    {questions.map((question, index) => (
                        <QuestionCard key={index} question={question} lng={lng} />
                    ))}
                </div>

            </div>
        </div>
    )
}
