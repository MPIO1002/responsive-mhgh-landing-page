"use client";
import React, { useEffect, useState, useRef } from "react";

const SidebarAds = () => {
  const [show, setShow] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const shouldShow = window.scrollY > 100;
      setShow(shouldShow);
      // Nếu scroll down và sidebar đang ẩn, thì hiện lại
      if (shouldShow && !isVisible) {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isVisible]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      ref={sidebarRef}
      className={`hidden md:block fixed right-0 pt-12 md:right-1 top-18 z-50 transition-all duration-300 ${show && isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      style={{ backgroundImage: 'url(/flag.png)', backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%', borderRadius: '1rem', width: '200px', minHeight: '730px' }}
    >
      {/* 3 icon đầu */}
      <div className="flex justify-center items-center gap-2 mb-2">
        <img src="/fb_2.png" alt="Facebook" width={64} height={64} className="w-8 h-8 rounded cursor-pointer" />
        <img src="/group.png" alt="Group" width={64} height={64} className="w-8 h-8 rounded cursor-pointer" />
        <img src="/tiktok.png" alt="TikTok" width={64} height={64} className="w-8 h-8 rounded cursor-pointer" />
      </div>
      {/* Decor */}
      <div className="flex justify-center mb-2">
        <img src="/decor.svg" alt="Decor" width={40} height={10} className="w-[130px] h-2" />
      </div>
      {/* Appstore, APK, Googleplay, Simulator */}
      <div className="flex flex-col items-center gap-2 mb-2">
        <img src="/appstore-2.png" alt="App Store" width={292} height={87} className="w-[130px] h-auto cursor-pointer" />
        <img src="/apk-2.png" alt="APK" width={292} height={87} className="w-[130px] h-auto cursor-pointer" />
        <img src="/googleplay-2.png" alt="Google Play" width={292} height={87} className="w-[130px] h-auto cursor-pointer" />
        <img src="/simulator-2.png" alt="Simulator" width={292} height={87} className="w-[130px] h-auto cursor-pointer" />
      </div>
      {/* Decor dưới */}
      <div className="flex justify-center mb-2">
        <img src="/decor.svg" alt="Decor" width={40} height={10} className="w-[130px] h-2" />
      </div>
      {/* Register, Chest */}
      <div className="flex flex-col items-center gap-2 mb-2">
        <img src="/register_2.png" alt="Register" width={296} height={94} className="w-[130px] h-10 cursor-pointer" />
        <img src="/pay-mobile.png" alt="Chest" width={40} height={40} className="w-[130px] h-auto cursor-pointer" />
      </div>
      {/* Top arrow */}
      <div className="flex flex-col items-center gap-1 mt-2 cursor-pointer" onClick={scrollToTop}>
        <img src="/top-arrow.png" alt="Top" width={193} height={130} className="w-12 h-20" />
      </div>
    </div>
  );
};

export default SidebarAds;