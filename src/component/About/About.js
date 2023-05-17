import React from "react";
import "./about.css";
import Experience from "./Experience";


const About = () => {
  return (
    <section
      className="section-2" id="section-2">

      <div className="about-me">
        <h2>Hakkımda</h2>
        <p>
          Merhaba, ben Janberk Adanada yaşıyorum. Tarsus Üniversitesi Bilgisayar Mühendisliği bölümü öğrencisiyim.
          Bir yıllık front-end alanında yazılım geliştirme tecrübem var.
          Aynı zamanda mobil uygulama geliştirme üzerine çalıştığımız bir ekibim var.
          Yazılım geliştirme ve teknoloji konusunda daha fazla deneyime ihtiyacım var.
          Kendimi web geliştirme ve mobil geliştirme alanlarında geliştirmek istiyorum.
        </p>
        <div className="education">
          <h2>Eğitim</h2>
          <div className="tarsus">
            <img className="tarsus-logo" src='img/tarsusLogo.jpg' />
            <div>
              <h4>Tarsus Üniversitesi</h4>
              <p>Bilgisayar Mühendisliği</p>
              <p>2021 - ?</p>
              <p>Lisans Derecesi</p>
            </div>
          </div>
        </div>
      </div>
      <Experience />
    </section>
  )
}

export default About;