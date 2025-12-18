"use client"

import { useState } from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const ImageWithLoader = ({ width, height, src, priority = false, alt, className, quality = 75 }: {
    width: number;
    height: number;
    src: string | StaticImport;
    priority?: boolean;
    alt: string;
    className?: string;
    quality?: number;
}) => {
    const [isLoading, setIsLoading] = useState(true);


    return (
        <div className="w-full relative">
            {isLoading &&
                <div className="absolute w-full h-full aspect-video bg-gray-700 animate-pulse" />
            }
            <Image
                src={src}
                alt={alt}
                priority={priority}
                width={width}
                height={height}
                onLoad={() => setIsLoading(false)}
                className={className}
                quality={quality}
            />
        </div>
    )
}

export default ImageWithLoader