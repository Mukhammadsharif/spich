"use client";

import { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslationClient } from "@/app/i18n/client";
import Image from "next/image";
import CloseIcon from "@/app/assets/close.svg";

export default function Modal({ modalVisible, setModalVisible, product, lng, modalId = "exampleModal" }) {
    const modalRef = useRef(null);
    const bootstrapModalRef = useRef(null);
    const { t } = useTranslationClient(lng);

    useEffect(() => {
        console.log("Modal useEffect - modalVisible:", modalVisible, "modalId:", modalId, "product:", product?.name);
        if (typeof window !== "undefined") {
            import("bootstrap/dist/js/bootstrap.bundle.min.js").then((bootstrap) => {
                const modalElement = modalRef.current;
                if (!bootstrapModalRef.current) {
                    console.log("Initializing Bootstrap modal for", modalId);
                    bootstrapModalRef.current = new bootstrap.Modal(modalElement, {
                        backdrop: true,
                        keyboard: true,
                    });

                    // Sync state when modal is hidden via Bootstrap (backdrop, ESC)
                    modalElement.addEventListener("hidden.bs.modal", () => {
                        console.log("Modal hidden via Bootstrap event");
                        setModalVisible(false);
                    });
                }

                if (modalVisible) {
                    console.log("Showing modal with product:", product?.name);
                    bootstrapModalRef.current.show();
                } else {
                    console.log("Hiding modal");
                    bootstrapModalRef.current.hide();
                }
            }).catch((err) => console.error("Error loading Bootstrap:", err));
        }

        return () => {
            if (bootstrapModalRef.current) {
                console.log("Cleanup: Hiding modal");
                bootstrapModalRef.current.hide();
            }
        };
    }, [modalVisible, modalId, setModalVisible]); // Removed product from deps to avoid unnecessary re-init

    const closeModal = (e) => {
        e.stopPropagation();
        console.log("closeModal called for", product?.name);
        if (bootstrapModalRef.current) {
            bootstrapModalRef.current.hide();
        }
        setModalVisible(false);
    };

    if (!product) return null;

    // Ensure content renders with the latest product
    return (
        <div>
            <div
                className="modal fade"
                id={modalId}
                tabIndex="-1"
                aria-hidden="true"
                ref={modalRef}
            >
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content" style={{ backgroundColor: "#FFF8EF" }}>
                        <div className="modal-body">
                            <div className="modal-body-body">
                                <div onClick={closeModal} style={{ cursor: "pointer" }}>
                                    <Image
                                        src={CloseIcon}
                                        alt="modal-close-icon"
                                        className="modal-close-icon"
                                        width={24}
                                        height={24}
                                    />
                                </div>
                                <div className="modal-image-container mt-2 mb-2">
                                    <Image
                                        src={product.image}
                                        alt="product-image"
                                        className="modal-image"
                                        width={300}
                                        height={300}
                                    />
                                </div>
                                <div className="modal-text-container mt-2 mb-2">
                                    <p className="product-card-name" id={`${modalId}-label`}>
                                        {t(product.name).toUpperCase()}
                                    </p>
                                    <p className="contacts-title">{t("description")}:</p>
                                    <p className="my-modal-text">{t("classic_desc")}</p>
                                    <p className="contacts-title">{t("composition")}:</p>
                                    <p className="my-modal-text">{t("classic_comp")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
