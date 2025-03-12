import Image from "next/image";
import {useTranslationClient} from "@/app/i18n/client";
import {useEffect, useState} from "react";
import Modal from "@/components/Modal";


export default function CatalogCard({ product, lng }) {
    const { t } = useTranslationClient(lng);
    const [modalVisible, setModalVisible] = useState(false);
    const modalId = `modal-${product.id || product.name}`;

    const openModal = (e) => {
        e.stopPropagation();
        console.log("openModal called for", product.name, "modalVisible:", modalVisible);
        setModalVisible(true);
    };

    useEffect(() => {
        console.log("ProductCard - modalVisible changed to:", modalVisible);
    }, [modalVisible]);
    return (
        <div className="catalog-card mt-4 m-1 m-lg-2" onClick={openModal}>
            <Image
                src={product.image}
                alt="catalog-image"
                className="catalog-image"
                style={{ backgroundColor: product?.backgroundColor}}
            />
            <div className="product-card-footer">
                <p className="product-card-name">{t(product?.name)?.toUpperCase()}</p>
            </div>
            <Modal
                lng={lng}
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                product={product}
                modalId={modalId}
            />
        </div>
    )
}
