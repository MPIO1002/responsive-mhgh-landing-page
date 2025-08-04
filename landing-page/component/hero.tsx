import React from 'react';
import Image from 'next/image';

const Hero = () => {
    return (
        <section className="relative w-full overflow-hidden">
            {/* Desktop Background - iPad and larger */}
            <div className="hidden md:block w-full">
                <Image
                    src="/bgHero.png"
                    alt="Hero Background Desktop"
                    width={1920}
                    height={1080}
                    className="w-full h-auto object-contain"
                    priority
                    sizes="100vw"
                />
            </div>

            {/* Mobile Background - Phone screens */}
            <div className="block md:hidden w-full">
                <Image
                    src="/bgHeroMobile.png"
                    alt="Hero Background Mobile"
                    width={390}
                    height={844}
                    className="w-full h-auto object-contain"
                    priority
                    sizes="100vw"
                />
            </div>

            {/* Mobile overlay images - Only show on mobile */}
            <div className="block md:hidden absolute inset-0">
                {/* Alert image - Top Left */}
                <div className="absolute top-4 left-4">
                    <Image
                        src="/alert.png"
                        alt="Alert"
                        width={60}
                        height={60}
                        className="w-12 h-12"
                        priority
                    />
                </div>

                {/* Logo-2 image - Top Right */}
                <div className="absolute top-4 right-4">
                    <Image
                        src="/game-name.png"
                        alt="Game Name"
                        width={80}
                        height={40}
                        className="w-20 h-10"
                        priority
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
