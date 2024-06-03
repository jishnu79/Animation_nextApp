'use client'

import { cn } from "@/utils/cn";
import { BoxesCore } from "./BackGround";
import { GlobeDemo } from "./GridGlobe";
import { useState } from "react";
import Lottie from "react-lottie";
import animationData from '@/Data/confetti.json'
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({ className, children, }: { className?: string; children?: React.ReactNode; }) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    id,
    title,
    description,
    img,
    imgClassName,
    titleClassName,
    spareImg,
}: {
    className?: string;
    id: number;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    img?: string;
    imgClassName?: string;
    titleClassName?: string;
    spareImg?: string;
}) => {
    const [copied, setCopied] = useState(false)
    const handleCpoie = () => {
        navigator.clipboard.writeText('contact@jsmastry.pro')
        setCopied(true)
    }
    return (
        <div
            className={cn(
                " row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black  bg-white border border-b-violet-50 justify-between flex flex-col space-y-4",
                className
            )}
            style={{
                background: "rgb(4,7,29) ",
                backgroundColor: "gradient..."
            }}
        >
            <div className={`${id === 6 && "flex justify-center"} h-full`}>
                <div>
                    {img && (
                        <img src={img} alt="" className={cn(imgClassName, 'object-cover object-center')} />
                    )}
                </div>
                <div className={`absolute right-0 -bottom-5 ${id === 5}&& 'w-full opacity-80`}>
                    {
                        spareImg && (
                            <img src={spareImg} alt=""
                                className={`object-cover object-center w-full h-full`}
                            />
                        )
                    }
                </div>
                {
                    id === 6 && (
                        <BoxesCore />
                    )
                } 
                <div className="group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10">
                    <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
                        {className}
                    </div>
                    <div className="font-sans font-bold text-3xl lg:text-3xl text-white max-w-96 z-10">
                        {title}
                    </div>
                    {
                        id === 2 && <GlobeDemo />
                    }
                    {
                        id === 3 && (
                            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
                                <div className="flex flex-col gap-3 lg:gap-8">
                                    {['React.js', 'Next.js', 'Typescrip'].map((item, ind) => (
                                        <span
                                            className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-white-100"
                                            key={ind}>
                                            {item}
                                        </span>
                                    ))}
                                    <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
                                </div>
                                <div className="flex flex-col gap-3 lg:gap-8">
                                    {['veu.js', 'myssql', 'redis'].map((item, ind) => (
                                        <span
                                            className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-white-100"
                                            key={ind}>
                                            {item}
                                        </span>
                                    ))}
                                    <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
                                </div>
                            </div>
                        )
                    }
                    {
                        id === 6 && (
                            <div className="mt-5 relative">
                                <div className={`absolute -bottom-5 right-0`}>
                                    <Lottie
                                        options={
                                            {
                                                loop: copied,
                                                autoplay: copied,
                                                animationData,
                                                rendererSettings: {
                                                    preserveAspectRatio: 'xMidYMid slice'
                                                }

                                            }
                                        }
                                    />
                                </div>
                                <MagicButton
                                    title={copied ? 'Email copied' : 'copy my Email'}
                                    icon={<IoCopyOutline />}
                                    position={'left'}
                                    otherClasses="!bg-[#161a31]"
                                    handileClick={handleCpoie}
                                />
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};
