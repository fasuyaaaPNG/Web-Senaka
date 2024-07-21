import React from 'react';
import "./style.css"        

export default function Home() {
  return (
      <>
      <div className="navbar" id="navbar">
      <div className="iconNavbar">
        <img src="/assets/landing/burger.png" alt="" className="iconNavBurger" loading="lazy" />
      </div>
    </div><div className="content1">
        <div className="containerContent1">
          <p className="judulContent1">
            STEMBA NAKAMA
          </p>
          <div className="backJepangContent1">
            <p className="jepangContent1">
              背一杯仲間と一緒に頑張ろう!
            </p>
          </div>
          <p className="deskContent1">
            SENAKA adalah ekstrakulikuler pembelajaran bahasa Jepang, dimana para siswa SMKN 7 Semarang akan belajar mengenai budaya dan ilmu pengetahuan terkait Jepang.
          </p>
          <a href="/" className="buttonContent1">
            Masuk
          </a>
        </div>
      </div><div className="content2">
        <p className="judulContent2">
          DOKUMENTASI
        </p>
        <p className="deskContent2">
          Cek beberapa kegiatan dan kejuaraan yang kami dapat di SENAKA!
        </p>
        <div className="gallery js-flickity" data-flickity-options='{ "wrapAround": true, "pageDots": false, "imagesLoaded": true, "prevNextButtons": false, "autoPlay": 2000 }'>
          <div className="carousel-cell">
            <img loading="lazy" src="/assets/landing/1.png" className="imageSlide" alt="" />
          </div>
          <div className="carousel-cell">
            <img loading="lazy" src="/assets/landing/2.png" className="imageSlide" alt="" />
          </div>
          <div className="carousel-cell">
            <img loading="lazy" src="/assets/landing/3.png" className="imageSlide" alt="" />
          </div>
          <div className="carousel-cell">
            <img loading="lazy" src="/assets/landing/4.png" className="imageSlide" alt="" />
          </div>
          <div className="carousel-cell">
            <img loading="lazy" src="/assets/landing/5.png" className="imageSlide" alt="" />
          </div>
        </div>
        <a href="/" className="buttonContent2">
          Lihat Lebih Banyak
        </a>
      </div><div className="content3">
        <p className="judulContent3">
          LOKASI SENAKA
        </p>
        <p className="deskContent3">
          Lokasi Kami ada di SMK Negeri 7 Semarang!
        </p>
        <img loading="lazy" src="/assets/landing/lokasi.png" alt="" className="imageContent3" />
        <div className="lokasiDeskContent3">
          <iframe className="lokasiContent3" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.1551380332453!2d110.42138561807572!3d-6.991001247408986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b5ec9c768e9%3A0x23b2fb89a9518453!2sSMK%20Negeri%207%20Semarang%20(STM%20Pembangunan)!5e0!3m2!1sid!2sid!4v1710734978253!5m2!1sid!2sid" width="30vw" height="30vw" allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          <p className="deskLokasiContent3">
            Karena SENAKA merupakan salah satu ekstrakulikuler yang ada di SMKN 7 Semarang, maka lokasi Kami ada di SMKN 7 Semarang! Kami selalu menggunakan kelas dan Lab Bahasa dalam melakukan kegiatan.
          </p>
        </div>
      </div><div className="content4">
        <p className="judulContent4">
          APA SIH BENEFITNYA?
        </p>
        <p className="deskContent4">
          Dalam SENAKA, kita tidak hanya belajar bahasa Jepang loh!
        </p>
        <div className="divBanefit1">
          <div className="banefit1 kipas">
            <img loading="lazy" src="/assets/landing/kipas.png" alt="" className="imgBanefit imgKipas" />
            <p className="judulBanefit">
              HURUF JEPANG
            </p>
            <p className="deskBanefit">
              Dalam SENAKA, kita akan belajar banyak mengenai huruf Jepang dan kanji.
            </p>
          </div>
          <div className="banefit1">
            <img loading="lazy" src="/assets/landing/gerbang.png" alt="" className="gerbang" />
            <p className="judulBanefit">
              BUDAYA JEPANG
            </p>
            <p className="deskBanefit">
              Kita juga akan mempelajari budaya Jepang seperti Shoudo, Fukuwarai, dan masih banyak lagi.
            </p>
          </div>
        </div>
        <div className="divBanefit2">
          <div className="banefit2">
            <img loading="lazy" src="/assets/landing/sushi.png" alt="" className="imgBanefit" />
            <p className="judulBanefit judulBanefit2">
              BERBICARA BAHASA JEPANG
            </p>
            <p className="deskBanefit deskBanefit2">
              Selain itu, kita akan mendalami dalam berbicara bahasa Jepang dengan lancar.
            </p>
          </div>
        </div>
      </div><div className="content5">
        <div className="element">
          <div className="elementKiri">
            <p className="judulElementKiri">
              STEMBA NAKAMA
            </p>
            <p className="deskElementKiri">
              背一杯仲間と一緒に頑張ろう!
            </p>
            <form action="/" method="post">
              <input type="text" value="" id="saran" className="Saran" placeholder="Berikan Saran Kalian Disini" />
              <button id="btn" type="submit">Button</button>
            </form>
          </div>
          <div className="elementKanan">
            <p className="judulElementKanan">
              Follow Us!
            </p>
            <a href="https://www.instagram.com/stemba.nakama/">
              <img loading="lazy" src="/assets/landing/ig.png" className="ig" alt="" />
            </a>
            <div className="garisFooter"></div>
            <div className="priterms">
              <a href="/" className="privacy">
                PRIVACY POLICY
              </a>
              <br />
              <a href="/" className="terms">
                TERMS AND CONDITIONS
              </a>
            </div>
          </div>
        </div>
        <p className="footerBottom">
          Copyright by Stemba Nakama
        </p>
      </div>
    </>
  );
}
