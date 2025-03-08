import Image from "next/image";
import {useTranslationClient} from "@/app/i18n/client";


export default function ProductCard({ product, lng }) {
    const { t } = useTranslationClient(lng);
    return (
        <div className="col-lg-2 col-md-2 col-sm-6 product-card mt-4">
            <Image
                src={product.image}
                alt="product-image"
                className="product-image"
            />
            <div className="product-card-footer">
                <p className="product-card-name">{t(product?.name)?.toUpperCase()}</p>
            </div>
        </div>
    )
}
