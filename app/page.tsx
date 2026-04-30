"use client";
import Image from "next/image";
import { useState,useEffect } from "react";
import Link from"next/link";



export default function Home() {

// 階段名稱 路由規劃
  // 1.歡迎畫面  /
  // 2.答題      /quesion
  // 3.準備看結果  /prepare
  // 4.看結果     /result


  
  return (
    <>
    <div className="flex flex-col items-center justify-center gap-4"> 
        歡迎
        
        <Link className="text-white bg-black px-3 py-2" href="/question">START</Link>
    </div>
    </>
  );
  }
