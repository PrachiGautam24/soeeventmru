'use client'

import { useEffect, useState } from 'react'

export default function MobileOnly({ children }: { children: React.ReactNode }) {
  // const [isMobile, setIsMobile] = useState(true)
  // const [isLoading, setIsLoading] = useState(true)

  // useEffect(() => {
  //   const checkDevice = () => {
  //     const userAgent = navigator.userAgent.toLowerCase()
  //     const mobileKeywords = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile|tablet/i
  //     const isMobileDevice = mobileKeywords.test(userAgent)
  //     const isSmallScreen = window.innerWidth <= 768
      
  //     setIsMobile(isMobileDevice || isSmallScreen)
  //     setIsLoading(false)
  //   }

  //   checkDevice()
  //   window.addEventListener('resize', checkDevice)
    
  //   return () => window.removeEventListener('resize', checkDevice)
  // }, [])

  // if (isLoading) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center bg-white">
  //       <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  //     </div>
  //   )
  // }

  // if (!isMobile) {
  //   return (
  //     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-red-50 p-6 relative overflow-hidden">
  //       {/* Animated Background Elements */}
  //       <div className="absolute inset-0 overflow-hidden pointer-events-none">
  //         <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
  //         <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
  //         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-100/10 rounded-full blur-3xl"></div>
  //       </div>

  //       <div className="max-w-lg w-full text-center relative z-10 animate-fadeIn">
  //         {/* Mobile Phone Illustration with Animation */}
  //         <div className="mb-10 relative inline-block animate-slideUp">
  //           {/* Floating Decorative circles with animation */}
  //           <div className="absolute -top-8 -left-10 w-28 h-28 bg-gradient-to-br from-blue-200 to-blue-100 rounded-full opacity-60 blur-2xl animate-pulse"></div>
  //           <div className="absolute -bottom-6 -right-8 w-32 h-32 bg-gradient-to-br from-red-100 to-pink-100 rounded-full opacity-50 blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
  //           <div className="absolute top-12 right-12 w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-40 blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            
  //           {/* Mobile Phone SVG with enhanced styling */}
  //           <div className="relative drop-shadow-2xl">
  //             <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto filter drop-shadow-lg">
  //               {/* Background decorative circles with glow */}
  //               <circle cx="40" cy="50" r="26" fill="url(#blueGlow)" opacity="0.7"/>
  //               <circle cx="160" cy="65" r="22" fill="url(#redGlow)" opacity="0.6"/>
  //               <circle cx="165" cy="140" r="24" fill="url(#blueGlow2)" opacity="0.7"/>
  //               <circle cx="35" cy="145" r="19" fill="url(#pinkGlow)" opacity="0.6"/>
                
  //               {/* Main Phone with shadow */}
  //               <rect x="65" y="45" width="70" height="110" rx="10" fill="#1e4ba9" className="drop-shadow-xl"/>
  //               <rect x="65" y="45" width="70" height="110" rx="10" fill="url(#phoneGradient)" opacity="0.95"/>
                
  //               {/* Phone Screen glow */}
  //               <rect x="71" y="53" width="58" height="86" rx="5" fill="white" opacity="0.1"/>
  //               <rect x="72" y="54" width="56" height="84" rx="4" fill="white"/>
                
  //               {/* Screen Content - Enhanced */}
  //               <rect x="78" y="62" width="24" height="4" rx="2" fill="url(#contentGradient1)" opacity="0.4"/>
  //               <rect x="78" y="70" width="36" height="3" rx="1.5" fill="#1e4ba9" opacity="0.25"/>
  //               <rect x="78" y="76" width="30" height="3" rx="1.5" fill="#1e4ba9" opacity="0.2"/>
                
  //               {/* App Icons on Screen - Colorful */}
  //               <rect x="78" y="86" width="14" height="14" rx="3" fill="url(#iconGradient1)"/>
  //               <rect x="95" y="86" width="14" height="14" rx="3" fill="url(#iconGradient2)"/>
  //               <rect x="112" y="86" width="14" height="14" rx="3" fill="url(#iconGradient3)"/>
                
  //               <rect x="78" y="104" width="14" height="14" rx="3" fill="url(#iconGradient4)"/>
  //               <rect x="95" y="104" width="14" height="14" rx="3" fill="url(#iconGradient5)"/>
  //               <rect x="112" y="104" width="14" height="14" rx="3" fill="url(#iconGradient6)"/>
                
  //               <rect x="78" y="122" width="14" height="14" rx="3" fill="url(#iconGradient1)" opacity="0.8"/>
  //               <rect x="95" y="122" width="14" height="14" rx="3" fill="url(#iconGradient2)" opacity="0.8"/>
                
  //               {/* Phone Button with glow */}
  //               <circle cx="100" cy="144" r="4" fill="white" opacity="0.9"/>
  //               <circle cx="100" cy="144" r="3" fill="url(#buttonGlow)"/>
                
  //               {/* Phone Top Notch */}
  //               <rect x="88" y="49" width="24" height="4" rx="2" fill="#0d2555"/>
  //               <circle cx="97" cy="51" r="1.5" fill="#163a8a"/>
                
  //               <defs>
  //                 {/* Gradients */}
  //                 <linearGradient id="phoneGradient" x1="100" y1="45" x2="100" y2="155" gradientUnits="userSpaceOnUse">
  //                   <stop stopColor="#1e4ba9"/>
  //                   <stop offset="0.5" stopColor="#2557b8"/>
  //                   <stop offset="1" stopColor="#163a8a"/>
  //                 </linearGradient>
                  
  //                 <linearGradient id="contentGradient1" x1="78" y1="62" x2="102" y2="66" gradientUnits="userSpaceOnUse">
  //                   <stop stopColor="#1e4ba9"/>
  //                   <stop offset="1" stopColor="#4a6fc7"/>
  //                 </linearGradient>
                  
  //                 <linearGradient id="iconGradient1" x1="78" y1="86" x2="92" y2="100" gradientUnits="userSpaceOnUse">
  //                   <stop stopColor="#1e4ba9"/>
  //                   <stop offset="1" stopColor="#4a6fc7"/>
  //                 </linearGradient>
                  
  //                 <linearGradient id="iconGradient2" x1="95" y1="86" x2="109" y2="100" gradientUnits="userSpaceOnUse">
  //                   <stop stopColor="#b12a2e"/>
  //                   <stop offset="1" stopColor="#c74448"/>
  //                 </linearGradient>
                  
  //                 <linearGradient id="iconGradient3" x1="112" y1="86" x2="126" y2="100" gradientUnits="userSpaceOnUse">
  //                   <stop stopColor="#3b6fc9"/>
  //                   <stop offset="1" stopColor="#5a8fd9"/>
  //                 </linearGradient>
                  
  //                 <linearGradient id="iconGradient4" x1="78" y1="104" x2="92" y2="118" gradientUnits="userSpaceOnUse">
  //                   <stop stopColor="#a5284a"/>
  //                   <stop offset="1" stopColor="#c74448"/>
  //                 </linearGradient>
                  
  //                 <linearGradient id="iconGradient5" x1="95" y1="104" x2="109" y2="118" gradientUnits="userSpaceOnUse">
  //                   <stop stopColor="#2557b8"/>
  //                   <stop offset="1" stopColor="#4a6fc7"/>
  //                 </linearGradient>
                  
  //                 <linearGradient id="iconGradient6" x1="112" y1="104" x2="126" y2="118" gradientUnits="userSpaceOnUse">
  //                   <stop stopColor="#b12a2e"/>
  //                   <stop offset="1" stopColor="#d14448"/>
  //                 </linearGradient>
                  
  //                 <radialGradient id="blueGlow">
  //                   <stop offset="0%" stopColor="#DBEAFE"/>
  //                   <stop offset="100%" stopColor="#BFDBFE"/>
  //                 </radialGradient>
                  
  //                 <radialGradient id="blueGlow2">
  //                   <stop offset="0%" stopColor="#DBEAFE"/>
  //                   <stop offset="100%" stopColor="#93C5FD"/>
  //                 </radialGradient>
                  
  //                 <radialGradient id="redGlow">
  //                   <stop offset="0%" stopColor="#FECACA"/>
  //                   <stop offset="100%" stopColor="#FCA5A5"/>
  //                 </radialGradient>
                  
  //                 <radialGradient id="pinkGlow">
  //                   <stop offset="0%" stopColor="#FBCFE8"/>
  //                   <stop offset="100%" stopColor="#F9A8D4"/>
  //                 </radialGradient>
                  
  //                 <radialGradient id="buttonGlow">
  //                   <stop offset="0%" stopColor="#e0e7ff"/>
  //                   <stop offset="100%" stopColor="#c7d2fe"/>
  //                 </radialGradient>
  //               </defs>
  //             </svg>
  //           </div>
  //         </div>

  //         {/* Title with gradient */}
  //         <h1 className="text-4xl md:text-5xl font-bold mb-5 bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent animate-slideUp" style={{ animationDelay: '0.1s' }}>
  //           Mobile Access Only
  //         </h1>
          
  //         {/* Description with better spacing */}
  //         <div className="space-y-4 mb-10 animate-slideUp" style={{ animationDelay: '0.2s' }}>
  //           <p className="text-neutral-700 px-8 text-lg leading-relaxed font-medium">
  //             SOE Events is designed exclusively for mobile devices to provide you the best experience. So, please access this platform using your smartphone.
  //           </p>

  //         </div>

  //         {/* Footer with icon */}
  //         <div className="text-center animate-slideUp" style={{ animationDelay: '0.4s' }}>
  //           <div className="inline-flex items-center justify-center space-x-2 text-neutral-400 text-sm">
  //             <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
  //               <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
  //             </svg>
  //             <span className="font-medium">School of Engineering · Manav Rachna University</span>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   )
  // }

  return <>{children}</>
}
