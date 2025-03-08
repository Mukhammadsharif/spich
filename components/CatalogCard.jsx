import Image from "next/image";
import {useTranslationClient} from "@/app/i18n/client";


export default function CatalogCard({ product, lng }) {
    const { t } = useTranslationClient(lng);
    return (
        <div className="catalog-card mt-4 m-1 m-lg-2">
            <Image
                src={product.image}
                alt="catalog-image"
                className="catalog-image"
                style={{ backgroundColor: product?.backgroundColor}}
            />
            <div className="product-card-footer">
                <p className="product-card-name">{t(product?.name)?.toUpperCase()}</p>
            </div>
        </div>
    )
}
