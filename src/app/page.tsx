"use client";

import { AmbientLightBg } from "./js/AmbientLightBg.module";
import { useEffect } from "react";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    // 浏览器端代码
    new AmbientLightBg({
      dom: "MAIN",
      colors: [
        "#193153",
        "#CEDCEF",
        "#95BDE2",
        "#5886C8",
        "#1E498A",
        "#193153",
      ],
      loop: true,
    });
  }, []); // 空依赖数组表示只在组件挂载时运行一次

  return (
    <div className="hero" id="MAIN">
      <div className="top-wrapper top-wrapper flex items-center justify-between">
        <a href="/" id="logo" className="cursor-pointer">
          <Image
            src="/images/logo.png" // public 文件夹中的图片路径
            alt="A PNG Image"
            width={50} // 设置图片的宽度
            height={50} // 设置图片的高度
          />
        </a>
      </div>

      <div id="hero-info">
        <div>
          <h1 className="sub-title text-6xl text-white inter-black">
            Ztyuu Software Studio
          </h1>
        </div>
      </div>
    </div>
  );
}
