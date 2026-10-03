import { LegalPlaceholderCallout } from "./placeholder-callout";

import type { LegalLocale, LegalPageContent } from "./types";

/** Titles match `breadcrumbs_about` per locale so h1 / title / crumb agree. */
export const aboutContent = {
  en: {
    placeholder: false,
    title: "About Jobs.ac.cn",
    description:
      "Jobs.ac.cn connects China’s institutions with global academic and professional talent.",
    Body: function AboutBodyEn() {
      return (
        <>
          <h2>About Jobs.ac.cn</h2>
          <h3>Connecting China’s institutions with global talent</h3>
          <p>
            Jobs.ac.cn is a specialist platform for academic and professional recruitment,
            connecting universities, research institutes, international campuses, and other academic
            organisations in China with talent from around the world.
          </p>
          <p>
            We provide an accessible platform for institutions to promote opportunities and for
            academic and professional talent to discover positions that match their expertise,
            experience, and career goals.
          </p>

          <h2>What we do</h2>
          <p>
            We help academic and research institutions expand their recruitment reach through
            international recruitment and professional talent solutions.
          </p>
          <p>
            Our platform enables institutions to promote academic and professional vacancies and
            helps candidates discover opportunities across disciplines, functions, and locations.
          </p>

          <h3>Job promotion</h3>
          <p>
            Increase the visibility of academic and professional vacancies and reach qualified
            candidates through targeted promotion.
          </p>

          <h3>Employer of Record</h3>
          <p>
            Support the employment of international talent with local payroll and compliance
            support.
          </p>

          <h3>Executive search</h3>
          <p>Identify and engage qualified candidates for academic and professional positions.</p>

          <h2>Our values</h2>
          <p>
            Our work is guided by professionalism, integrity, a global perspective, and
            accessibility.
          </p>

          <h3>Professionalism</h3>
          <p>We provide a reliable and professional experience for institutions and talent.</p>

          <h3>Integrity</h3>
          <p>
            We promote accuracy, transparency, and responsible communication across our platform.
          </p>

          <h3>Global perspective</h3>
          <p>
            We connect institutions and talent across borders, cultures, and academic communities.
          </p>

          <h3>Accessibility</h3>
          <p>We make academic and professional opportunities easier to discover and access.</p>

          <h2>Connect with global talent</h2>
          <p>
            Whether you are an institution looking to recruit or a professional looking for
            opportunities, Jobs.ac.cn helps make meaningful connections across borders.
          </p>
          <p>
            <a href="/jobs">Browse jobs</a>
            {" · "}
            <a href="/post">Post a job</a>
          </p>
        </>
      );
    },
  },

  "zh-cn": {
    placeholder: false,
    title: "关于 Jobs.ac.cn",
    description: "Jobs.ac.cn 连接中国的高校、科研机构及其他学术组织与全球学术及专业人才。",
    Body: function AboutBodyZhCn() {
      return (
        <>
          <h2>关于 Jobs.ac.cn</h2>
          <h3>连接中国机构与全球人才</h3>
          <p>
            Jobs.ac.cn
            是一个专注于学术及专业招聘的平台，连接中国的高校、科研机构、国际校区及其他学术组织与来自世界各地的人才。
          </p>
          <p>
            我们为机构提供一个便捷的平台来发布招聘机会，也帮助学术及专业人才发现与其专业领域、经验和职业目标相匹配的职位。
          </p>

          <h2>我们的服务</h2>
          <p>我们通过国际招聘及专业人才解决方案，帮助高校和科研机构扩大招聘范围。</p>
          <p>
            我们的平台支持机构发布学术及专业职位空缺，并帮助求职者发现涵盖不同学科、职能和地区的机会。
          </p>

          <h3>职位推广</h3>
          <p>提高学术及专业职位空缺的曝光度，通过有针对性的推广触达合适的人才。</p>

          <h3>名义雇主服务</h3>
          <p>通过本地薪酬及合规支持，帮助机构聘用国际人才。</p>

          <h3>高管及专业人才搜寻</h3>
          <p>为学术及专业职位寻找并接洽合适的候选人。</p>

          <h2>我们的价值观</h2>
          <p>我们的工作秉持专业、诚信、全球视野和开放可及的理念。</p>

          <h3>专业</h3>
          <p>为机构和人才提供可靠、专业的服务体验。</p>

          <h3>诚信</h3>
          <p>我们致力于在平台上提供准确、透明和负责任的信息与沟通。</p>

          <h3>全球视野</h3>
          <p>连接不同国家和地区、文化背景及学术社群的机构与人才。</p>

          <h3>开放可及</h3>
          <p>让学术及专业机会更容易被发现和获取。</p>

          <h2>连接全球人才</h2>
          <p>
            无论您是正在招聘的机构，还是正在寻找机会的专业人士，Jobs.ac.cn
            都帮助您跨越地域建立有意义的联系。
          </p>
          <p>
            <a href="/zh-cn/jobs">浏览职位</a>
            {" · "}
            <a href="/zh-cn/post">发布职位</a>
          </p>
        </>
      );
    },
  },

  "zh-hk": {
    placeholder: false,
    title: "關於 Jobs.ac.cn",
    description: "Jobs.ac.cn 連接中國的高校、科研機構及其他學術組織與全球學術及專業人才。",
    Body: function AboutBodyZhHk() {
      return (
        <>
          <h2>關於 Jobs.ac.cn</h2>
          <h3>連接中國機構與全球人才</h3>
          <p>
            Jobs.ac.cn
            是一個專注於學術及專業招聘的平台，連接中國的高校、科研機構、國際校區及其他學術組織與來自世界各地的人才。
          </p>
          <p>
            我們為機構提供一個便捷的平台來發布招聘機會，也幫助學術及專業人才發現與其專業領域、經驗和職業目標相匹配的職位。
          </p>

          <h2>我們的服務</h2>
          <p>我們通過國際招聘及專業人才解決方案，幫助高校和科研機構擴大招聘範圍。</p>
          <p>
            我們的平台支援機構發布學術及專業職位空缺，並幫助求職者發現涵蓋不同學科、職能和地區的機會。
          </p>

          <h3>職位推廣</h3>
          <p>提高學術及專業職位空缺的曝光度，通過有針對性的推廣接觸合適的人才。</p>

          <h3>名義僱主服務</h3>
          <p>通過本地薪酬及合規支援，幫助機構聘用國際人才。</p>

          <h3>高管及專業人才搜尋</h3>
          <p>為學術及專業職位尋找並接洽合適的候選人。</p>

          <h2>我們的價值觀</h2>
          <p>我們的工作秉持專業、誠信、全球視野和開放可及的理念。</p>

          <h3>專業</h3>
          <p>為機構和人才提供可靠、專業的服務體驗。</p>

          <h3>誠信</h3>
          <p>我們致力於在平台上提供準確、透明和負責任的資訊與溝通。</p>

          <h3>全球視野</h3>
          <p>連接不同國家和地區、文化背景及學術社群的機構與人才。</p>

          <h3>開放可及</h3>
          <p>讓學術及專業機會更容易被發現和獲取。</p>

          <h2>連接全球人才</h2>
          <p>
            無論您是正在招聘的機構，還是正在尋找機會的專業人士，Jobs.ac.cn
            都幫助您跨越地域建立有意義的聯繫。
          </p>
          <p>
            <a href="/zh-hk/jobs">瀏覽職位</a>
            {" · "}
            <a href="/zh-hk/post">發布職位</a>
          </p>
        </>
      );
    },
  },
  de: {
    placeholder: true,
    title: "Über uns",
    description: "Platzhalter-About-Seite. Beschreibung und Inhalt vor dem Launch ersetzen.",
    Body: function AboutBodyDe() {
      return (
        <>
          <LegalPlaceholderCallout />
          <h2>Wer wir sind</h2>
          <p>
            Ersetzen Sie diesen Abschnitt durch eine kurze Vorstellung Ihrer Organisation oder Ihres
            Boards.
          </p>
          <h2>Wofür dieses Board ist</h2>
          <p>Ersetzen Sie diesen Abschnitt durch den Zweck des Boards und die Zielgruppe.</p>
          <h2>So erreichen Sie uns</h2>
          <p>
            Ersetzen Sie diesen Abschnitt durch die öffentlichen Kontaktdaten für Kandidaten und
            Arbeitgeber.
          </p>
        </>
      );
    },
  },
  fr: {
    placeholder: true,
    title: "À propos",
    description:
      "Page à propos d'espace réservé. Remplacez cette description et le corps avant le lancement.",
    Body: function AboutBodyFr() {
      return (
        <>
          <LegalPlaceholderCallout />
          <h2>Qui nous sommes</h2>
          <p>Remplacez cette section par une courte présentation de votre organisation ou board.</p>
          <h2>À quoi sert ce board</h2>
          <p>Remplacez cette section par l&apos;objectif du board et le public qu&apos;il sert.</p>
          <h2>Nous contacter</h2>
          <p>
            Remplacez cette section par les coordonnées publiques destinées aux candidats et
            employeurs.
          </p>
        </>
      );
    },
  },
  es: {
    placeholder: true,
    title: "Acerca de",
    description:
      "Página «Acerca de» de ejemplo. Sustituye esta descripción y este contenido antes del lanzamiento.",
    Body: function AboutBodyEs() {
      return (
        <>
          <LegalPlaceholderCallout />
          <h2>Quiénes somos</h2>
          <p>
            Sustituye esta sección por una breve presentación de tu organización o de tu portal.
          </p>
          <h2>Para qué sirve este portal</h2>
          <p>
            Sustituye esta sección por el propósito del portal y por el público al que se dirige.
          </p>
          <h2>Cómo contactarnos</h2>
          <p>
            Sustituye esta sección por los datos de contacto públicos que quieras ofrecer a
            candidatos y empresas.
          </p>
        </>
      );
    },
  },
  pl: {
    placeholder: true,
    title: "O nas",
    description: "Przykładowa strona „O nas”. Zastąp ten opis i treść przed uruchomieniem.",
    Body: function AboutBodyPl() {
      return (
        <>
          <LegalPlaceholderCallout />
          <h2>Kim jesteśmy</h2>
          <p>Zastąp tę sekcję krótkim przedstawieniem swojej organizacji lub portalu.</p>
          <h2>Czemu służy ten portal</h2>
          <p>Zastąp tę sekcję opisem celu portalu i grupy, której służy.</p>
          <h2>Jak się z nami skontaktować</h2>
          <p>Zastąp tę sekcję publicznymi danymi kontaktowymi dla kandydatów i pracodawców.</p>
        </>
      );
    },
  },
  nl: {
    placeholder: true,
    title: "Over ons",
    description:
      "Tijdelijke Over ons-pagina. Vervang deze beschrijving en inhoud vóór de lancering.",
    Body: function AboutBodyNl() {
      return (
        <>
          <LegalPlaceholderCallout />
          <h2>Wie wij zijn</h2>
          <p>
            Vervang dit onderdeel door een korte introductie van uw organisatie of vacaturesite.
          </p>
          <h2>Waar deze vacaturesite voor dient</h2>
          <p>
            Vervang dit onderdeel door het doel van de vacaturesite en een beschrijving van de
            doelgroep.
          </p>
          <h2>Contact met ons opnemen</h2>
          <p>
            Vervang dit onderdeel door de openbare contactgegevens die kandidaten en werkgevers
            kunnen gebruiken.
          </p>
        </>
      );
    },
  },
} satisfies Record<LegalLocale, LegalPageContent>;
