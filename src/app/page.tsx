"use client";

import Header from "../components/Header";
import CenteredText from "../components/CenteredText";
import styles from "./BackgroundVideo.module.css"; // 使用 CSS 模块

export default function Home() {
  return (
    <>
      <div className={styles.videoContainer}>
        <video className={styles.video} autoPlay loop muted>
          <source src="/videos/bg.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.content}>
          <Header />
          <CenteredText />
        </div>
      </div>
    </>
  );
}
