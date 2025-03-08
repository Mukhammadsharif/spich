"use client"; // Mark as client component since we’re using hooks

import Image from "next/image";
import NotFoundImage from "@/app/assets/404.svg";
import { useTranslation } from "next-i18next";
import {usePathname, useRouter} from "next/navigation"; // To get the current URL
import { languages, fallbackLng } from "./i18n/settings";

export default function NotFound() {
    const pathname = usePathname(); // e.g., "/en/does-not-exist"
    const lng = pathname.split("/")[1]; // Extract language from URL (e.g., "en")
    const currentLng = languages.includes(lng) ? lng : fallbackLng; // Validate language
    const { t } = useTranslation("common"); // Namespace for translations
    const router = useRouter();

    const handleRedirect = () => {
        router.push(`/${currentLng}`); // Redirect to language-specific homepage
    };

    return (
        <div>
            <button type="button" className="header-button mx-2 mb-2" onClick={handleRedirect}>
                {currentLng === 'ru' ? 'Назад' : 'Ortga'}
            </button>
            <Image
                src={NotFoundImage}
                alt={t("not-found-alt")}
                className="not-found-image"
                width={400}
                height={300}
            />
            <p>{t("not-found-message")}</p>
        </div>
    );
}
