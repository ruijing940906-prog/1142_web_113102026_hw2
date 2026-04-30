"use client";
import Image from "next/image";
import { useState,useEffect } from "react";
import Link from"next/link";
export default function result() {


  return (
   <>

   <div className="flex flex-col items-center justify-center gap-4">
   結果

   <Link className="text-white bg-black px-3 py-2" href="/">回首頁</Link>
   </div>
   </>
  );
  }
