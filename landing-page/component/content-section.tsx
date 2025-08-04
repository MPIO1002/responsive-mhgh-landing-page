import React from 'react';
import Image from 'next/image';
import FeatureSection from './feature-section';

const ContentSection = () => {
    return (
        <section className="content-section relative w-full overflow-hidden -mt-55 md:-mt-60 lg:-mt-75 xl:-mt-95 2xl:-mt-[500px] min-[1800px]:-mt-[700px]">
            {/* Desktop Background - iPad and larger */}
            <div className="hidden md:block w-full">
                <Image
                    src="/mainBg.png"
                    alt="Content Background Desktop"
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
                    src="/mainMobileBg.png"
                    alt="Content Background Mobile"
                    width={390}
                    height={844}
                    className="w-full h-auto object-contain"
                    priority
                    sizes="100vw"
                />
            </div>

            {/* Desktop Grid Layout - Top (iPad and larger) */}
            <div className="hidden md:block absolute top-20 xl:top-35 2xl:top-55 min-[1800px]:top-75 left-1/2 transform -translate-x-1/2 z-40 w-full">
                <div className="flex flex-row items-start justify-center w-full">
                    {/* Left: Grid layout */}
                    <div className="relative">
                        {/* Vector Background */}
                        <img
                            src="/vector.svg"
                            alt="Vector Background"
                            width={800}
                            height={200}
                            className="w-[500px] lg:w-[700px] h-auto"
                            loading="lazy"
                        />
                        {/* Grid Content */}
                        <div className="absolute inset-0 grid grid-cols-[1fr_2fr_2fr_2fr] grid-rows-2 gap-1 px-8 lg:px-12 py-4 lg:py-6">
                            {/* Column 1: Sign Up - Full Height */}
                            <div className="col-start-1 row-start-1 row-span-2 flex items-center justify-center">
                                <img
                                    src="/sign-up.png"
                                    alt="Sign Up"
                                    width={139}
                                    height={175}
                                    className="h-[calc(100%-8px)] w-full hover:scale-105 transition-transform cursor-pointer"
                                    loading="lazy"
                                />
                            </div>
                            {/* Column 2: Pay - Full Height */}
                            <div className="col-start-2 row-start-1 row-span-2 flex items-center justify-center">
                                <img
                                    src="/pay.png"
                                    alt="Pay"
                                    width={295}
                                    height={280}
                                    className="w-full h-full hover:scale-105 transition-transform cursor-pointer"
                                    loading="lazy"
                                />
                            </div>
                            {/* Column 3 Row 1: App Store */}
                            <div className="col-start-3 row-start-1 flex items-center justify-center">
                                <img
                                    src="/appstore.png"
                                    alt="App Store"
                                    width={251}
                                    height={76}
                                    className="w-full h-auto hover:scale-105 transition-transform cursor-pointer"
                                    loading="lazy"
                                />
                            </div>
                            {/* Column 3 Row 2: APK */}
                            <div className="col-start-3 row-start-2 flex items-center justify-center">
                                <img
                                    src="/apk.png"
                                    alt="APK Download"
                                    width={251}
                                    height={76}
                                    className="w-full h-auto hover:scale-105 transition-transform cursor-pointer"
                                    loading="lazy"
                                />
                            </div>
                            {/* Column 4 Row 1: Google Play */}
                            <div className="col-start-4 row-start-1 flex items-center justify-center">
                                <img
                                    src="/googleplay.png"
                                    alt="Google Play"
                                    width={251}
                                    height={76}
                                    className="w-full h-auto hover:scale-105 transition-transform cursor-pointer"
                                    loading="lazy"
                                />
                            </div>
                            {/* Column 4 Row 2: Download */}
                            <div className="col-start-4 row-start-2 flex items-center justify-center">
                                <img
                                    src="/simulator.png"
                                    alt="Download"
                                    width={251}
                                    height={76}
                                    className="w-full h-auto hover:scale-105 transition-transform cursor-pointer"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                    {/* Right: Alert 18+ and 3 small images below */}
                    <div className="flex flex-col items-center justify-center ml-3 lg:ml-5 -mt-4 h-[140px] lg:h-[200px]">
                        <img src="/alert.png" alt="Alert 18+" width={72} height={72} className="w-[90px] lg:w-[127px] h-[90px] lg:h-[127px] mb-1 object-contain" />
                        <div className="flex flex-row items-center justify-center gap-1">
                            <img src="/fb.png" alt="Facebook" width={24} height={24} className="w-8 lg:w-10 h-8 lg:h-10 object-contain" />
                            <img src="/group.png" alt="Group" width={24} height={24} className="w-8 lg:w-10 h-8 lg:h-10 object-contain" />
                            <img src="/tiktok.png" alt="TikTok" width={24} height={24} className="w-8 lg:w-10 h-8 lg:h-10 object-contain" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Grid Layout - Top (Phone only) */}
            <div className="block md:hidden absolute top-5 min-[400px]:top-15 left-1/2 transform -translate-x-1/2 z-40 w-full max-w-sm p-10">
                <div className="grid grid-cols-2 grid-rows-2 gap-x-2 gap-y-0">
                    {/* Row 1 - Left: App Store and APK stacked */}
                    <div className="flex flex-col space-y-1">
                        <img
                            src="/appstore.png"
                            alt="App Store"
                            width={120}
                            height={40}
                            className="w-full h-auto hover:scale-105 transition-transform cursor-pointer"
                            loading="lazy"
                        />
                        <img
                            src="/apk.png"
                            alt="APK Download"
                            width={120}
                            height={40}
                            className="w-full h-auto hover:scale-105 transition-transform cursor-pointer"
                            loading="lazy"
                        />
                    </div>

                    {/* Row 1 - Right: Google Play and Download stacked */}
                    <div className="flex flex-col space-y-1">
                        <img
                            src="/googleplay.png"
                            alt="Google Play"
                            width={120}
                            height={40}
                            className="w-full h-auto hover:scale-105 transition-transform cursor-pointer"
                            loading="lazy"
                        />
                        <img
                            src="/simulator.png"
                            alt="Download"
                            width={120}
                            height={40}
                            className="w-full h-auto hover:scale-105 transition-transform cursor-pointer"
                            loading="lazy"
                        />
                    </div>
                    {/* Row 2 - Left: Sign Up */}
                    <div className="flex items-center justify-center">
                        <img
                            src="/register-mobile.png"
                            alt="Sign Up"
                            width={120}
                            height={60}
                            className="w-full h-auto hover:scale-105 transition-transform cursor-pointer"
                            loading="lazy"
                        />
                    </div>
                    {/* Row 2 - Right: Pay */}
                    <div className="flex items-center justify-center">
                        <img
                            src="/pay-mobile.png"
                            alt="Pay"
                            width={120}
                            height={60}
                            className="w-full h-auto hover:scale-105 transition-transform cursor-pointer"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>

            {/* Title Section - Responsive */}
            {/* Desktop Title - iPad and larger */}
            <div className="hidden md:block absolute md:top-65 lg:mt-15 xl:mt-35 2xl:mt-65 min-[1800px]:mt-115 left-1/2 transform -translate-x-1/2 z-50">
                <Image
                    src="/attractiveLabel.png"
                    alt="Attractive Label Desktop"
                    width={2594}
                    height={215}
                    className="w-[700px] md:w-[700px] lg:w-[800px] xl:w-[1000px] 2xl:w-[1200px] h-auto object-contain max-w-none"
                    priority
                    sizes="(max-width: 768px) 700px, (max-width: 1024px) 700px, (max-width: 1280px) 800px, (max-width: 1536px) 1000px, 1200px"
                />
                
                {/* Gift Grid Section - Below Desktop Title */}
                <div className="w-full lg:max-w-4xl max-w-xl mx-auto z-10 px-2 md:px-0 mt-0 lg:mt-5">
                    <div className="grid grid-cols-3 grid-rows-2 gap-8 md:gap-4 lg:gap-6 xl:gap-8 2xl:gap-20">
                        {[
                            {img: '/gift-1.png', name: 'EXP'},
                            {img: '/gift-2.png', name: 'KNB'},
                            {img: '/gift-3.png', name: 'Gạo'},
                            {img: '/gift-4.png', name: 'Võ Hồn'},
                            {img: '/gift-5.png', name: 'Vải'},
                            {img: '/gift-6.png', name: 'Đá CH'}
                        ].map((gift, i) => (
                            <div key={i} className="flex flex-col items-center relative hover:-translate-y-1 transition-transform duration-300 cursor-pointer">
                                <img
                                    src={gift.img}
                                    alt={gift.name}
                                    width={192}
                                    height={146}
                                    className="absolute top-5 left-1/2 -translate-x-1/2 z-10 w-24 h-24 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-36 xl:h-36 2xl:w-40 2xl:h-40 object-contain drop-shadow-xl"
                                    loading="lazy"
                                />
                                <img
                                    src="/gift-frame.png"
                                    alt={`Khung vật phẩm ${gift.name}`}
                                    width={160}
                                    height={160}
                                    className="w-32 h-32 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-46 xl:h-46 2xl:w-52 2xl:h-52 object-contain mb-2 drop-shadow-lg relative z-0"
                                    loading="lazy"
                                />
                                <span className="text-orange-900 text-base md:text-sm lg:text-base xl:text-2xl 2xl:text-3xl font-extrabold -mt-5 md:-mt-4 lg:-mt-5 xl:-mt-8 2xl:-mt-10 z-10" style={{ textShadow: '0 0 2px #fef3c7, 0 0 6px #fef3c7, 1px 1px 0 #fef3c7, -1px -1px 0 #fef3c7' }}>{gift.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile Title - Phone screens */}
            <div className="block md:hidden absolute top-70 min-[400px]:top-80 left-1/2 transform -translate-x-1/2 z-50">
                <Image
                    src="/attractiveMobileLabel.png"
                    alt="Attractive Label Mobile"
                    width={400}
                    height={133}
                    className="w-[320px] min-[400px]:w-[380px] h-auto object-contain max-w-none"
                    priority
                    sizes="(max-width: 400px) 320px, 380px"
                />
                
                {/* Gift Grid Section - Below Mobile Title */}
                <div className="w-full max-w-4xl mx-auto z-10 px-2 mt-5 min-[400px]:mt-15">
                    <div className="grid grid-cols-2 grid-rows-3 gap-2">
                        {[
                            {img: '/gift-1.png', name: 'EXP'},
                            {img: '/gift-2.png', name: 'KNB'},
                            {img: '/gift-3.png', name: 'Gạo'},
                            {img: '/gift-4.png', name: 'Võ Hồn'},
                            {img: '/gift-5.png', name: 'Vải'},
                            {img: '/gift-6.png', name: 'Đá CH'}
                        ].map((gift, i) => (
                            <div key={i} className="flex flex-col items-center relative hover:-translate-y-1 transition-transform duration-300 cursor-pointer">
                                <img
                                    src={gift.img}
                                    alt={gift.name}
                                    width={192}
                                    height={146}
                                    className="absolute top-5 left-1/2 -translate-x-1/2 z-10 w-16 h-16 object-contain drop-shadow-xl"
                                    loading="lazy"
                                />
                                <img
                                    src="/gift-frame.png"
                                    alt={`Khung vật phẩm ${gift.name}`}
                                    width={160}
                                    height={160}
                                    className="w-25 h-25 object-contain mb-2 drop-shadow-lg relative z-0"
                                    loading="lazy"
                                />
                                <span className="text-orange-900 text-base font-extrabold -mt-5 z-10" style={{ textShadow: '0 0 2px #fef3c7, 0 0 6px #fef3c7, 1px 1px 0 #fef3c7, -1px -1px 0 #fef3c7' }}>{gift.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Character Introduction Section - Desktop */}
            <div className="hidden lg:block absolute lg:top-[900px] xl:top-[1100px] 2xl:top-[1400px] min-[1800px]:top-150 left-1/2 transform -translate-x-1/2 z-40 w-full max-w-7xl min-[1800px]:max-w-none px-4">
                <div className="flex flex-row items-center justify-center gap-8 lg:gap-12 xl:gap-16 min-[1800px]:gap-16">
                    {/* Left: Character Display */}
                    <div className="relative flex-1 max-w-lg min-[1800px]:max-w-2xl">
                        {/* Background Hero */}
                        <div className="relative mt-20">
                            <img
                                src="/bg-hero.png"
                                alt="Hero Background"
                                width={500}
                                height={600}
                                className="w-full h-auto object-contain"
                                loading="lazy"
                            />
                            
                            {/* Stage */}
                            <img
                                src="/stage.png"
                                alt="Character Stage"
                                width={400}
                                height={200}
                                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4/5 h-auto object-contain"
                                loading="lazy"
                            />
                            
                            {/* Character */}
                            <img
                                src="/Hang-Vu.png"
                                alt="Hang Vu Character"
                                width={300}
                                height={400}
                                className="absolute bottom-18 min-[1800px]:bottom-22 left-1/2 transform -translate-x-1/2 w-full h-auto object-contain z-10"
                                loading="lazy"
                            />
                            
                            {/* Left Arrow */}
                            <button className="absolute left-4 top-1/2 transform -translate-y-1/2 hover:scale-110 transition-transform cursor-pointer z-20">
                                <img
                                    src="/arrow.png"
                                    alt="Previous Character"
                                    width={40}
                                    height={40}
                                    className="w-8 h-8 lg:w-10 lg:h-10 min-[1800px]:w-14 min-[1800px]:h-14 object-contain transform"
                                    loading="lazy"
                                />
                            </button>
                            
                            {/* Right Arrow */}
                            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 hover:scale-110 transition-transform cursor-pointer z-20">
                                <img
                                    src="/arrow.png"
                                    alt="Next Character"
                                    width={40}
                                    height={40}
                                    className="w-8 h-8 lg:w-10 lg:h-10 min-[1800px]:w-14 min-[1800px]:h-14 object-contain rotate-180"
                                    loading="lazy"
                                />
                            </button>
                        </div>
                    </div>
                    
                    {/* Right: Character Info */}
                    <div className="flex-1 max-w-lg min-[1800px]:max-w-3xl flex flex-col items-start space-y-6 min-[1800px]:space-y-8">
                        {/* Character Name - Top of Info Section */}
                        <div className="w-full flex justify-start">
                            <img
                                src="/Hang-Vu-Text.png"
                                alt="Hang Vu Name"
                                width={400}
                                height={100}
                                className="w-full max-w-sm lg:max-w-md xl:max-w-lg min-[1800px]:max-w-2xl h-auto object-contain"
                                loading="lazy"
                            />
                        </div>
                        
                        {/* Character Information */}
                        <div className="w-full">
                            <div className="space-y-3 min-[1800px]:space-y-6">
                                <div className="flex items-center space-x-3 min-[1800px]:space-x-6">
                                    <span className="text-amber-800 font-bold text-lg min-[1800px]:text-3xl">Giới tính:</span>
                                    <span className="text-amber-900 font-semibold text-lg min-[1800px]:text-3xl">Nam</span>
                                </div>
                                <div className="flex items-center space-x-3 min-[1800px]:space-x-6">
                                    <span className="text-amber-800 font-bold text-lg min-[1800px]:text-3xl">Vũ học:</span>
                                    <span className="text-amber-900 font-semibold text-lg min-[1800px]:text-3xl">Kiếm Pháp, Hỏa Pháp</span>
                                </div>
                                <div className="flex items-start space-x-3 min-[1800px]:space-x-6">
                                    <span className="text-amber-800 font-bold text-lg min-[1800px]:text-3xl whitespace-nowrap">Đặc điểm:</span>
                                    <span className="text-amber-900 font-semibold text-lg min-[1800px]:text-3xl whitespace-nowrap">
                                        Kỹ năng công kích tầm xa, sát thương cao.
                                    </span>
                                </div>
                            </div>
                        </div>
                        
                        {/* Video Thumbnail */}
                        <div className="w-full">
                            <img
                                src="/video-thumbnail.png"
                                alt="Character Video Thumbnail"
                                width={400}
                                height={225}
                                className="w-full h-auto object-contain rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Character Introduction Section - Mobile */}
            <div className="block lg:hidden absolute top-[800px] min-[400px]:top-[900px] md:top-[600px] left-1/2 transform -translate-x-1/2 z-40 w-full max-w-lg md:max-w-6xl px-4">
                {/* Character Name - Top (Mobile Only) */}
                <div className="flex justify-center mb-6 md:hidden">
                    <img
                        src="/Hang-Vu-Text.png"
                        alt="Hang Vu Name"
                        width={400}
                        height={100}
                        className="w-full max-w-[250px] h-auto object-contain"
                        loading="lazy"
                    />
                </div>
                
                {/* Mobile Layout - Flex Column */}
                <div className="flex flex-col md:hidden items-center space-y-6">
                    {/* Character Display */}
                    <div className="relative w-full max-w-sm">
                        {/* Background Hero */}
                        <div className="relative">
                            <img
                                src="/bg-hero.png"
                                alt="Hero Background"
                                width={500}
                                height={600}
                                className="w-full h-auto object-contain"
                                loading="lazy"
                            />
                            
                            {/* Stage */}
                            <img
                                src="/stage.png"
                                alt="Character Stage"
                                width={400}
                                height={200}
                                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4/5 h-auto object-contain"
                                loading="lazy"
                            />
                            
                            {/* Character */}
                            <img
                                src="/Hang-Vu.png"
                                alt="Hang Vu Character"
                                width={300}
                                height={400}
                                className="absolute bottom-15 left-1/2 transform -translate-x-1/2 w-4/5 h-auto object-contain z-10"
                                loading="lazy"
                            />
                            
                            {/* Left Arrow */}
                            <button className="absolute left-2 top-1/2 transform -translate-y-1/2 hover:scale-110 transition-transform cursor-pointer z-20">
                                <img
                                    src="/arrow.png"
                                    alt="Previous Character"
                                    width={40}
                                    height={40}
                                    className="w-6 h-6 object-contain transform"
                                    loading="lazy"
                                />
                            </button>
                            
                            {/* Right Arrow */}
                            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 hover:scale-110 transition-transform cursor-pointer z-20">
                                <img
                                    src="/arrow.png"
                                    alt="Next Character"
                                    width={40}
                                    height={40}
                                    className="w-6 h-6 object-contain rotate-180"
                                    loading="lazy"
                                />
                            </button>
                        </div>
                    </div>
                    
                    {/* Character Info */}
                    <div className="w-full flex flex-col items-center space-y-4">
                        {/* Character Information */}
                        <div className="w-full max-w-sm">
                            <div className="space-y-2">
                                <div className="flex items-center space-x-2">
                                    <span className="text-amber-800 font-bold text-sm">Giới tính:</span>
                                    <span className="text-amber-900 font-semibold text-sm">Nam</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="text-amber-800 font-bold text-sm">Vũ học:</span>
                                    <span className="text-amber-900 font-semibold text-sm">Kiếm Pháp, Hỏa Pháp</span>
                                </div>
                                <div className="flex items-start space-x-2">
                                    <span className="text-amber-800 font-bold text-sm whitespace-nowrap">Đặc điểm:</span>
                                    <span className="text-amber-900 font-semibold text-sm">
                                        Kỹ năng công kích tầm xa, sát thương cao, bảo vệ tốt.
                                    </span>
                                </div>
                            </div>
                        </div>
                        
                        {/* Video Thumbnail */}
                        <div className="w-full max-w-[250px] min-[390px]:max-w-full">
                            <img
                                src="/video-thumbnail.png"
                                alt="Character Video Thumbnail"
                                width={400}
                                height={225}
                                className="w-full h-auto object-contain rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>

                {/* Tablet Layout - Flex Row */}
                <div className="hidden md:flex md:flex-row md:mt-[40px] items-center justify-center gap-8">
                    {/* Left: Character Display */}
                    <div className="relative flex-1 max-w-md">
                        {/* Background Hero */}
                        <div className="relative mt-20">
                            <img
                                src="/bg-hero.png"
                                alt="Hero Background"
                                width={500}
                                height={600}
                                className="w-full h-auto object-contain"
                                loading="lazy"
                            />
                            
                            {/* Stage */}
                            <img
                                src="/stage.png"
                                alt="Character Stage"
                                width={400}
                                height={200}
                                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4/5 h-auto object-contain"
                                loading="lazy"
                            />
                            
                            {/* Character */}
                            <img
                                src="/Hang-Vu.png"
                                alt="Hang Vu Character"
                                width={300}
                                height={400}
                                className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-full h-auto object-contain z-10"
                                loading="lazy"
                            />
                            
                            {/* Left Arrow */}
                            <button className="absolute left-3 top-1/2 transform -translate-y-1/2 hover:scale-110 transition-transform cursor-pointer z-20">
                                <img
                                    src="/arrow.png"
                                    alt="Previous Character"
                                    width={40}
                                    height={40}
                                    className="w-7 h-7 object-contain transform"
                                    loading="lazy"
                                />
                            </button>
                            
                            {/* Right Arrow */}
                            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 hover:scale-110 transition-transform cursor-pointer z-20">
                                <img
                                    src="/arrow.png"
                                    alt="Next Character"
                                    width={40}
                                    height={40}
                                    className="w-7 h-7 object-contain rotate-180"
                                    loading="lazy"
                                />
                            </button>
                        </div>
                    </div>
                    
                    {/* Right: Character Info */}
                    <div className="flex-1 max-w-md flex flex-col items-start space-y-4">
                        {/* Character Name - Top of Info Section (Tablet) */}
                        <div className="w-full flex justify-start">
                            <img
                                src="/Hang-Vu-Text.png"
                                alt="Hang Vu Name"
                                width={400}
                                height={100}
                                className="w-full max-w-[300px] h-auto object-contain"
                                loading="lazy"
                            />
                        </div>
                        
                        {/* Character Information */}
                        <div className="w-full">
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3">
                                    <span className="text-amber-800 font-bold text-base">Giới tính:</span>
                                    <span className="text-amber-900 font-semibold text-base">Nam</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <span className="text-amber-800 font-bold text-base">Vũ học:</span>
                                    <span className="text-amber-900 font-semibold text-base">Kiếm Pháp, Hỏa Pháp</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <span className="text-amber-800 font-bold text-base whitespace-nowrap">Đặc điểm:</span>
                                    <span className="text-amber-900 font-semibold text-base">
                                        Kỹ năng công kích tầm xa, sát thương cao, bảo vệ tốt.
                                    </span>
                                </div>
                            </div>
                        </div>
                        
                        {/* Video Thumbnail */}
                        <div className="w-full">
                            <img
                                src="/video-thumbnail.png"
                                alt="Character Video Thumbnail"
                                width={400}
                                height={225}
                                className="w-full h-auto object-contain rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Feature Section */}
            <div className="absolute top-[1520px] min-[390px]:top-[1600px] min-[400px]:top-[1730px] min-[430px]:top-[1800px] md:top-[1100px] lg:top-[1600px] xl:top-[1900px] 2xl:top-[2500px] min-[1800px]:top-[2800px] left-0 w-full z-30">
                <FeatureSection />
            </div>

        </section>
    );
};

export default ContentSection;
