import React, { useState } from "react";

interface BarefootLogoProps {
  variant?: "full" | "header" | "icon";
  className?: string;
  size?: number;
}

export function BarefootLogo({
  variant = "full",
  className = "",
  size = 120,
}: BarefootLogoProps) {
  const [hasSealError, setHasSealError] = useState(false);
  const [hasFullError, setHasFullError] = useState(false);

  // Custom styled CSS to make sure images look crisp on high-res screens
  const imageStyle: React.CSSProperties = {
    height: "auto",
    maxWidth: "100%",
    objectFit: "contain",
  };

  // Modern, high-end SVG fallback for the logo (organic, premium barefoot footwear aesthetic)
  const renderFallbackSeal = (customSize: number) => (
    <div 
      className="flex items-center justify-center relative shrink-0" 
      style={{ width: customSize, height: customSize }}
    >
      <svg 
        viewBox="0 0 100 100" 
        className="w-full h-full text-[#bca374]"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer dotted elegant border */}
        <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3.5" opacity="0.8" />
        {/* Inner solid elegant border */}
        <circle cx="50" cy="50" r="41" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        
        {/* Natural footprint SVG path - styled artistically for high-end boutique look */}
        {/* Main sole */}
        <path 
          d="M48 28C43.5 28 41 33 41 42C41 53 45 61 41.5 73C39.5 79.5 45.5 83 50.5 83C55.5 83 61.5 79.5 59.5 73C56 61 60 53 60 42C60 33 57.5 28 53 28H48Z" 
          fill="currentColor" 
          opacity="0.15" 
        />
        <path 
          d="M48 30C44.5 30 43 34 43 42C43 51.5 46.5 59.5 44 71C42.5 77 46.5 81 50.5 81C54.5 81 58.5 77 57 71C54.5 59.5 58 51.5 58 42C58 34 56.5 30 53 30H48Z" 
          fill="currentColor" 
        />
        {/* Five aligned toes (natural, wide splay to represent barefoot freedom) */}
        <circle cx="36" cy="35" r="3.5" fill="currentColor" />
        <circle cx="43" cy="22" r="4.2" fill="currentColor" />
        <circle cx="51.5" cy="20.5" r="4" fill="currentColor" />
        <circle cx="59.5" cy="22.5" r="3.6" fill="currentColor" />
        <circle cx="66" cy="27" r="3" fill="currentColor" />

        {/* Brand stars representing premium outdoor quality */}
        <path d="M26 50L28 52L26 54L24 52L26 50Z" fill="currentColor" opacity="0.8" />
        <path d="M74 50L76 52L74 54L72 52L74 50Z" fill="currentColor" opacity="0.8" />
      </svg>
    </div>
  );

  if (variant === "icon") {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        {!hasSealError ? (
          <img
            src="/logo_seal.png"
            alt="Barefoot Seal Logo"
            style={{ ...imageStyle, width: size }}
            className="select-none pointer-events-none"
            referrerPolicy="no-referrer"
            onError={() => setHasSealError(true)}
          />
        ) : (
          renderFallbackSeal(size)
        )}
      </div>
    );
  }

  if (variant === "header") {
    return (
      <div className={`flex items-center gap-3.5 text-right ${className}`}>
        {!hasSealError ? (
          <img
            src="/logo_seal.png"
            alt="Barefoot Seal"
            style={{ ...imageStyle, width: size }}
            className="select-none pointer-events-none shrink-0"
            referrerPolicy="no-referrer"
            onError={() => setHasSealError(true)}
          />
        ) : (
          renderFallbackSeal(size)
        )}
        <div className="flex flex-col select-none justify-center">
          <span 
            className="font-normal tracking-[0.16em] text-[#bca374] text-lg md:text-xl lowercase leading-none" 
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            barefoot
          </span>
          <span 
            className="text-[9px] md:text-[10px] tracking-widest text-[#bca374]/70 font-bold lowercase mt-1"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            natural comfort & freedom
          </span>
        </div>
      </div>
    );
  }

  // variant === "full"
  return (
    <div className={`flex flex-col items-center justify-center py-2 ${className}`}>
      {!hasFullError ? (
        <img
          src="/logo_full.png"
          alt="Barefoot Brand Logo"
          style={{ ...imageStyle, width: size * 2.2 }}
          className="select-none pointer-events-none max-w-full"
          referrerPolicy="no-referrer"
          onError={() => setHasFullError(true)}
        />
      ) : (
        <div className="flex flex-col items-center gap-2">
          {renderFallbackSeal(72)}
          <div className="flex flex-col select-none text-center">
            <span 
              className="font-extralight tracking-[0.18em] text-[#bca374] text-2xl lowercase leading-none" 
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              barefoot
            </span>
            <span 
              className="text-[10px] tracking-[0.15em] text-slate-400 font-bold uppercase mt-1.5"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              natural comfort & freedom
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

