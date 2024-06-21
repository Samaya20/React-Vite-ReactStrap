import React, { useContext, useState } from "react";
import { MAIN_CONTEXT } from "../App";

function Content() {
  const { state } = useContext(MAIN_CONTEXT);
  return (
    <div id="main-content">
      {/*  */}

      <div className={`${state == 1 ? "" : "none"} text-content`}>
        <div className="image-wrapper">
          <img src="/react.svg" />
          <h2>+</h2>
          <img src="/vite.svg" />
        </div>
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
        <div className="image-wrapper">
          <img src="/vue.svg" />
        </div>
        <h5>Vue istifadə etməyin üstünlükləri:</h5>
        <ul type="circle">
          <li>
            <span>Öyrənmək asan</span>
            <br />
            Vue öyrənmək və başa düşmək üçün asan framework-dür. HTML, CSS və
            JavaScript-in əsas bilikləri ilə Vue layihələrinin hazırlanmasına
            tez şəkildə başlana bilər.
          </li>
          <li>
            <span>Uyğunlaşma</span> <br />
            Vue.js həm yeni, həm də mövcud layihələrə inteqrasiya oluna bilər.
            Bu çeviklik developer'lərə tamamilə yeni layihələrdə və ya mövcud
            tətbiqlərdə Vue-ni qəbul etməyə imkan verir.
          </li>
          <li>
            <span>Geniş Ecosystem və Community Dəstəyi</span> <br />
            Vue.js geniş pluginlər və utility ekosisteminə malikdir. Vue Router
            (redirect), Vuex (status management) və Vue CLI (create project)
            kimi kitabxanalar və alətlər developer'lərin işini asanlaşdırır.
          </li>
          <li>
            <span>Typescript dəstəyi</span> <br />
            Vue.js TypeScript ilə istifadə edilə bilər. Bu, böyük və mürəkkəb
            layihələrdə type'ların yoxlanılması və daha yaxşı debugging üçün
            faydalıdır.
          </li>
        </ul>
      </div>

      {/*  */}

      <div className={`${state == 3 ? "" : "none"} text-content`}>
        <div className="image-wrapper">
          <img src="/angular.svg" />
        </div>
        <h5>Angular istifadə etməyin üstünlükləri:</h5>
        <ul type="circle">
          <li>
            <span>MVC (Model-View-Controller) Arxitekturası</span>
            <br />
            Angular MVC arxitekturasını dəstəkləyir. Bu, proqramların modular və
            idarə oluna bilən olmasına imkan verir. Model, View və Controller
            komponentlərinin ayrılması kodu daha oxunaqlı və davamlı edir.
          </li>
          <li>
            <span>Full Ecosystem və Kitabxanalar</span> <br />
            Angular hərtərəfli ekosistem və zəngin kitabxanalar təklif edir.
            Angular CLI (Command Line Interface), Angular Material, RxJS və bir
            çox digər kitabxanalar developer'lərə proqramlarını tez və səmərəli
            şəkildə inkişaf etdirməyə kömək edir.
          </li>
          <li>
            <span>Full Test Support</span> <br />
            Angular, həm unit test həm də end-to-end testi dəstəkləyir. Jasmine,
            Karma və Protractor kimi test vasitələri ilə integrasiya olunur və
            mümkün test proseslərini dəstəkləyirlər.
          </li>
          <li>
            <span>Yüksək Performans</span> <br />
            Angular virtual DOM istifadə edərək yüksək performans təmin edir.
            AOT (Ahead-of-Time) compilation və lazy loading kimi xüsusiyyətlər
            proqramların daha sürətli yüklənməsinə və işləməsinə imkan verir.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Content;
