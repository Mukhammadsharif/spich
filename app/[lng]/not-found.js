import NotFoundImage from "@/app/assets/404.svg";
import Image from "next/image";

export default function NotFound() {
    return <Image
        src={NotFoundImage}
        alt="hero-image"
        className="header-image"
    />
}
