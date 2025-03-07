import Image from "next/image";


export default function QualityCard({image, title, description}) {
    return (
        <div className={'row'}>
            <div className={'col-md-3'}>
                <div className={'quality-image-container'}>
                    <Image
                        src={image}
                        alt="quality-image"
                        className="quality-image"
                    />
                </div>
            </div>
            <div className={'col-md-9'}>
                <p>{title}</p>
                <p>{description}</p>
            </div>
        </div>
    )
}
