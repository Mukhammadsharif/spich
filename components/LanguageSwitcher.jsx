"use client";
import {usePathname, useRouter} from "next/navigation";
import {useEffect, useState} from "react";


const LanguageSwitcher = ({lng, t}) => {

    const [isClient, setIsClient] = useState(false);
    const router = useRouter();
    const pathname = usePathname(); // Get the current path
    const [selectedLang, setSelectedLang] = useState('');


    // Ensures that the component only runs on the client-side
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsClient(true);
        }
    }, []);

    useEffect(() => {
        if (isClient && pathname) {
            const segments = pathname.split('/');
            const currentLang = segments[1] || ''; // e.g., 'ru' from '/ru/somepath'
            setSelectedLang(currentLang);
        }
    }, [isClient, pathname]);

    const handleLanguageChange = (newLang) => {
        if (!isClient || !pathname) return; // Prevent execution if not on the client or if pathname is undefined

        // Split the current path and replace the language segment
        const segments = pathname.split('/');

        // Ensure there's enough segments to replace the language
        if (segments.length > 1) {
            segments[1] = newLang; // Assuming language is in the second segment (like /kr/)
        }

        const newPath = segments.join('/');
        router.push(newPath); // Use router to navigate to the new path
        router.refresh();
    };

    if (!isClient || !pathname) {
        // Return nothing or a fallback UI until we are sure it's running client-side and pathname is available
        return null;
    }

    return (
        <select className="language-switcher"
                value={selectedLang}
                onChange={(e) => handleLanguageChange(e.target.value)}>
            <option value="ru">{t('ru')}</option>
            <option value="uz">{t('uz')}</option>
        </select>
    )
};

export default LanguageSwitcher;
