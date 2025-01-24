"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface iAppProps {
    images: string[]
}

const ImageSlider = ({images}: iAppProps) => {
    const [mainImageIndex, setMainImageIndex] = useState(0);

    function handlePreviousClick() {
        setMainImageIndex((prevIndex) => (
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        ))
    }

    function handleNextClick() {
        setMainImageIndex((prevIndex) => (
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ))
    }

    function handleImageClick(index: number) {
        setMainImageIndex(index);
    }

    return (
        <div className="grid gap-6 md:gap-3 items-start">
            <div className="relative overflow-hidden rounded-lg">
                <Image 
                    src={images[mainImageIndex]} 
                    alt="Product Image" 
                    width={600} 
                    height={600} 
                    className="object-cover w-[600px] h-[600px]"    
                />

                <div className="absolute inset-0 flex items-center justify-between">
                    <Button variant="ghost" size="icon"onClick={handlePreviousClick}>
                        <ChevronLeftIcon className="w-6 h-6" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={handleNextClick}>
                        <ChevronRight className="w-6 h-6" />
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-5 gap-4">
                {images.map((image, index) => (
                    <div className={cn(index === mainImageIndex ? "border-2 border-primary" : "border border-gray-200", "relative overflow-hidden rounded-lg cursor-pointer")} key={index} onClick={() => handleImageClick(index)}>
                        <Image 
                            src={image} 
                            alt="Product Image" 
                            width={100} 
                            height={100} 
                            className="object-cover w-[100px] h-[100px]"    
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ImageSlider;