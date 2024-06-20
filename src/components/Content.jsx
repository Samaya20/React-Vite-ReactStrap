import React, { useContext, useState } from "react";
import { MAIN_CONTEXT } from "../App";

function Content() {
  const { state } = useContext(MAIN_CONTEXT);
  return (
    <div id="main-content">
      <div className="image-wrapper">
        <img src="/react.svg" />
        <h2>+</h2>
        <img src="/vite.svg" />
      </div>
      <div className={`${state == 1 ? "" : "none"} text-content`}>
        <h5>Vite ilə React istifadə etməyin üstünlükləri:</h5>
        <ul type="circle">
          <li>
            <span>Fast Startup və Development</span>
            <br />
            Vite yalnız lazımi faylları yükləyir və kod dəyişikliklərinin dərhal
            görünməsinə imkan verir, inkişaf prosesini əhəmiyyətli dərəcədə
            sürətləndirir.
          </li>
          <li>
            <span>Modern JavaScript və TypeScript Support</span> <br />
            Vite React-i mükəmməl şəkildə tamamlayan ES6+ xüsusiyyətlərini və
            JSX sintaksisini dəstəkləyir. O, həmçinin type-ların daha asan
            yoxlanılması və sazlanması üçün daxili TypeScript dəstəyini ehtiva
            edir.
          </li>
          <li>
            <span>Optimized Production Builds</span> <br />
            Vite, optimallaşdırılmış, yüksək performanslı və kiçik ölçülü
            fayllar yaradaraq səhifənin yüklənmə vaxtını azaldır və ümumi
            performansı artırır.
          </li>
          <li>
            <span>Advanced Debugging və Hot Module Replacement (HMR)</span>{" "}
            <br />
            Vite qabaqcıl sazlama alətləri və HMR təqdim edir, React
            komponentlərindəki dəyişikliklərin brauzerdə dərhal əks olunmasını
            təmin edir, sürətli testing və feedback təmin edir.
          </li>
        </ul>
      </div>
      {/*  */}

      <div className={`${state == 2 ? "" : "none"} text-content`}>
        <h5>AAAAAAAAAAAAAAAAAAA ilə React istifadə etməyin üstünlükləri:</h5>
        <ul type="circle">
          <li>
            <span>Fast Startup və Development</span>
            <br />
            Vite yalnız lazımi faylları yükləyir və kod dəyişikliklərinin dərhal
            görünməsinə imkan verir, inkişaf prosesini əhəmiyyətli dərəcədə
            sürətləndirir.
          </li>
          <li>
            <span>Modern JavaScript və TypeScript Support</span> <br />
            Vite React-i mükəmməl şəkildə tamamlayan ES6+ xüsusiyyətlərini və
            JSX sintaksisini dəstəkləyir. O, həmçinin type-ların daha asan
            yoxlanılması və sazlanması üçün daxili TypeScript dəstəyini ehtiva
            edir.
          </li>
          <li>
            <span>Optimized Production Builds</span> <br />
            Vite, optimallaşdırılmış, yüksək performanslı və kiçik ölçülü
            fayllar yaradaraq səhifənin yüklənmə vaxtını azaldır və ümumi
            performansı artırır.
          </li>
          <li>
            <span>Advanced Debugging və Hot Module Replacement (HMR)</span>{" "}
            <br />
            Vite qabaqcıl sazlama alətləri və HMR təqdim edir, React
            komponentlərindəki dəyişikliklərin brauzerdə dərhal əks olunmasını
            təmin edir, sürətli testing və feedback təmin edir.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Content;
