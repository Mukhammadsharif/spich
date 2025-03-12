"use client";

import Image from "next/image";
import { useTranslationClient } from "@/app/i18n/client";
import { useState, useEffect } from "react";
import Modal from "@/components/Modal";

export default function ProductCard({ product, lng }) {
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
        <div className="col-lg-2 col-md-2 col-sm-6 product-card mt-4" onClick={openModal}>
            <Image
                src={product.image}
                alt="product-image"
                className="product-image"
                width={200}
                height={200}
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
    );
}
