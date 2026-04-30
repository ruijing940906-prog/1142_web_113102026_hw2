"use client";
import Image from "next/image";
import { useState,useEffect } from "react";
import Link from"next/link";
export default function Prepare() {


  return (
   <>
   <div className="flex flex-col items-center justify-center gap-4">
   準備看結果

   <Link className="text-white bg-black px-3 py-2" href="/result">準備看結果</Link>
   </div>
   </>
  );
  }
