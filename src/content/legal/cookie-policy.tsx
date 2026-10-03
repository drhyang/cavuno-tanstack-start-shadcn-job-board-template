import { LegalPlaceholderCallout } from "./placeholder-callout";

import type { LegalLocale, LegalPageContent } from "./types";

/** Titles match `breadcrumbs_cookiePolicy` per locale. */
export const cookiePolicyContent = {
  en: {
    placeholder: false,
    title: "Cookie Policy",
    description:
      "Learn how Jobs.ac.cn uses cookies and similar technologies to operate, secure, analyse and improve our services.",
    Body: function CookiePolicyBodyEn() {
      return (
        <>
          <p>
            <strong>Last updated:</strong> 3 October 2026
          </p>

          <p>
            This Cookie Policy explains how Jobs.ac.cn (“Jobs.ac.cn”, “we”, “us” or “our”) uses
            cookies and similar technologies when you visit or use the Jobs.ac.cn website, platform
            and related services (collectively, the <strong>“Services”</strong>).
          </p>

          <p>
            Jobs.ac.cn is operated by <strong>The Educationist Limited</strong>. The Jobs.ac.cn
            platform uses technology and infrastructure provided by <strong>Cavuno</strong>,
            operated by Wollemia Pty Ltd.
          </p>

          <h2>1. What Are Cookies?</h2>

          <p>
            Cookies are small text files that websites may store on your device when you visit a
            website. They allow websites to recognise your browser or device, maintain sessions,
            remember preferences and support other functionality.
          </p>

          <p>
            We also use technologies that perform similar functions, including local storage,
            session storage, pixels, tags, scripts and other browser or device identifiers. In this
            Cookie Policy, we refer to these collectively as{" "}
            <strong>“Cookies and Similar Technologies”</strong>.
          </p>

          <h2>2. Why We Use Cookies</h2>

          <p>
            Depending on the features and services enabled on Jobs.ac.cn, Cookies and Similar
            Technologies may be used to:
          </p>

          <ul>
            <li>operate and maintain the Services;</li>
            <li>authenticate users and maintain account sessions;</li>
            <li>protect the Services against fraud, abuse and security threats;</li>
            <li>remember preferences and settings;</li>
            <li>understand how visitors use the Services;</li>
            <li>measure website performance and improve the user experience;</li>
            <li>measure the effectiveness of marketing and advertising;</li>
            <li>deliver or measure personalised or interest-based advertising; and</li>
            <li>support integrations with third-party services.</li>
          </ul>

          <h2>3. Types of Cookies and Similar Technologies</h2>

          <h3>3.1 Strictly Necessary Technologies</h3>

          <p>
            These technologies are necessary for the Services to function. They may include
            technologies used for:
          </p>

          <ul>
            <li>account sign-in and authentication;</li>
            <li>maintaining secure sessions;</li>
            <li>security and fraud prevention;</li>
            <li>protecting forms and requests;</li>
            <li>remembering essential technical settings; and</li>
            <li>providing core website and platform functionality.</li>
          </ul>

          <p>
            These technologies may operate without consent where permitted by applicable law because
            disabling them may prevent essential parts of Jobs.ac.cn from functioning.
          </p>

          <h3>3.2 Functional Technologies</h3>

          <p>
            Functional Cookies and Similar Technologies may be used to remember choices and
            preferences that improve your experience, such as language, display preferences and
            other non-essential settings.
          </p>

          <h3>3.3 Analytics Technologies</h3>

          <p>
            Jobs.ac.cn may use analytics technologies to understand visitor behaviour, traffic
            sources, page views, interactions with jobs and other features, and the performance of
            the Services.
          </p>

          <p>
            These technologies may include <strong>Google Analytics 4 (GA4)</strong>.
          </p>

          <p>
            Where GA4 is enabled, information about your use of the Services may be sent to Google
            for analytics and measurement purposes. Depending on the configuration, this may include
            information such as pages viewed, approximate location, device and browser information,
            traffic sources, interactions and other usage information.
          </p>

          <p>
            Where required by applicable law, analytics technologies are activated only after you
            have provided the relevant consent.
          </p>

          <h3>3.4 Advertising Technologies</h3>

          <p>
            Jobs.ac.cn may display advertising through third-party advertising services, including{" "}
            <strong>Google AdSense</strong>, where that functionality is enabled.
          </p>

          <p>
            Advertising technologies may use Cookies and Similar Technologies to deliver
            advertisements, measure advertising performance, limit repetition of advertisements,
            detect invalid activity and, where applicable, personalise advertising based on
            information about your browsing activity.
          </p>

          <p>
            Google AdSense is a third-party advertising service that may place or access Cookies or
            similar identifiers in connection with advertisements displayed on Jobs.ac.cn.
          </p>

          <p>
            Where applicable law requires consent for personalised advertising or other
            non-essential advertising technologies, those technologies will be subject to the
            applicable consent controls.
          </p>

          <h3>3.5 Marketing and Advertising Measurement Technologies</h3>

          <p>
            Jobs.ac.cn may use technologies to measure the effectiveness of advertising and
            promotional campaigns and to understand whether visitors who arrive through an
            advertising platform subsequently interact with the Services.
          </p>

          <p>Depending on the integrations enabled, these technologies may include:</p>

          <ul>
            <li>
              <strong>Google Ads</strong> conversion and advertising tags;
            </li>
            <li>
              <strong>Meta Pixel</strong>;
            </li>
            <li>
              <strong>LinkedIn Insight Tag</strong>; and
            </li>
            <li>other advertising or campaign-measurement technologies.</li>
          </ul>

          <p>
            These technologies may collect information about visits, page views, interactions,
            conversions, browser or device characteristics and advertising attribution.
          </p>

          <p>
            Where applicable law requires consent, these technologies will only be activated after
            the required consent has been obtained.
          </p>

          <h2>4. Google Tag Manager</h2>

          <p>
            Jobs.ac.cn may use <strong>Google Tag Manager (GTM)</strong> to manage and deploy
            website tags and third-party technologies.
          </p>

          <p>
            Google Tag Manager is a tag-management system. Depending on how Jobs.ac.cn is
            configured, tags deployed through Google Tag Manager may include analytics, advertising,
            conversion-tracking, social-media or other third-party technologies.
          </p>

          <p>
            The use of Google Tag Manager therefore does not necessarily mean that every third-party
            tag is active at all times. The technologies actually loaded depend on the configuration
            of the Jobs.ac.cn platform and the services we choose to enable.
          </p>

          <p>
            Where Jobs.ac.cn uses a consent mechanism for non-essential technologies, tags deployed
            through Google Tag Manager may be prevented from loading until the applicable consent
            has been provided.
          </p>

          <h2>5. Cavuno and Platform Technologies</h2>

          <p>
            <strong>Jobs.ac.cn uses Cavuno as its platform and technology service provider.</strong>
          </p>

          <p>
            Cavuno provides the platform infrastructure used to operate Jobs.ac.cn, including
            functionality for candidate and employer accounts, candidate profiles, job listings, job
            applications, authentication and related platform services.
          </p>

          <p>
            As part of providing these services, Cavuno may use Cookies and Similar Technologies for
            essential functions such as authentication, session management, security, fraud
            prevention and platform functionality.
          </p>

          <p>
            Cavuno also provides integrations for analytics, advertising and marketing technologies,
            including Google Analytics 4, Google Tag Manager, Meta Pixel, LinkedIn Insight Tag and
            Google AdSense. Whether a particular technology is active on Jobs.ac.cn depends on the
            configuration and services enabled by Jobs.ac.cn.
          </p>

          <p>
            Where a non-essential technology is enabled, Jobs.ac.cn will apply the consent
            requirements applicable to that technology and to the users concerned.
          </p>

          <h2>6. Third-Party Providers</h2>

          <p>
            Cookies and Similar Technologies used on Jobs.ac.cn may be provided directly by
            Jobs.ac.cn, by Cavuno, or by third-party service providers integrated with the Services.
          </p>

          <p>Depending on the technologies enabled, these providers may include:</p>

          <table>
            <thead>
              <tr>
                <th>Provider</th>
                <th>Technology or Service</th>
                <th>Typical Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cavuno</td>
                <td>Platform and authentication technologies</td>
                <td>Account sessions, authentication, security and core platform functionality</td>
              </tr>
              <tr>
                <td>Google</td>
                <td>Google Analytics 4</td>
                <td>Website analytics, traffic measurement and usage analysis</td>
              </tr>
              <tr>
                <td>Google</td>
                <td>Google Tag Manager</td>
                <td>Deployment and management of website tags</td>
              </tr>
              <tr>
                <td>Google</td>
                <td>Google AdSense</td>
                <td>
                  Display advertising, advertising measurement and, where enabled, personalised
                  advertising
                </td>
              </tr>
              <tr>
                <td>Google</td>
                <td>Google Ads</td>
                <td>Advertising measurement, conversion tracking and campaign attribution</td>
              </tr>
              <tr>
                <td>Meta</td>
                <td>Meta Pixel</td>
                <td>Advertising measurement, conversion tracking and audience measurement</td>
              </tr>
              <tr>
                <td>LinkedIn</td>
                <td>LinkedIn Insight Tag</td>
                <td>Advertising measurement, conversion tracking and audience insights</td>
              </tr>
            </tbody>
          </table>

          <p>
            The services listed above are examples of technologies that may be used. A particular
            technology will only operate on Jobs.ac.cn when it has been enabled or integrated into
            the Services.
          </p>

          <h2>7. Job Applications and Account Use</h2>

          <p>Cookies and Similar Technologies may be used when you:</p>

          <ul>
            <li>create or access a candidate account;</li>
            <li>create or access an employer account;</li>
            <li>manage a candidate profile;</li>
            <li>manage an employer profile or job listing;</li>
            <li>submit or manage a job application; or</li>
            <li>use another feature that requires authentication.</li>
          </ul>

          <p>
            These technologies may be necessary to ensure that information associated with your
            account or application is available to the appropriate authenticated user.
          </p>

          <h2>8. Cookie Consent</h2>

          <p>
            Where applicable law requires consent for non-essential Cookies and Similar
            Technologies, Jobs.ac.cn will seek your consent before activating those technologies.
          </p>

          <p>
            Depending on your location and applicable legal requirements, you may be presented with
            options to accept, reject or customise non-essential Cookies and Similar Technologies.
          </p>

          <p>
            Strictly necessary technologies may continue to operate where permitted by applicable
            law.
          </p>

          <p>
            Where available, you can revisit or change your Cookie preferences through the Cookie
            settings or preferences link provided on the Services.
          </p>

          <h2>9. International Processing</h2>

          <p>
            Some third-party providers used by Jobs.ac.cn, including Cavuno, Google, Meta and
            LinkedIn, may process information in countries or regions outside the country in which
            you are located.
          </p>

          <p>
            Where applicable law regulates international transfers of personal information, such
            transfers will be handled in accordance with the requirements applicable to Jobs.ac.cn.
          </p>

          <h2>10. Cookies and Personal Information</h2>

          <p>
            Some Cookies and Similar Technologies may collect or generate information that
            constitutes personal information under applicable law, including IP addresses, browser
            information, device information, identifiers and information concerning interactions
            with the Services.
          </p>

          <p>
            Where such information constitutes personal information, it will be processed in
            accordance with our <strong>Privacy Policy</strong> and applicable data protection laws.
          </p>

          <p>
            Our Privacy Policy also explains that personal information associated with Jobs.ac.cn
            accounts, candidate profiles, employer accounts and job applications is hosted and
            processed through Cavuno's systems and infrastructure on behalf of Jobs.ac.cn.
          </p>

          <h2>11. Managing Cookies</h2>

          <p>
            You can generally manage or delete Cookies through your browser settings. Depending on
            your browser, you may be able to:
          </p>

          <ul>
            <li>view stored Cookies;</li>
            <li>delete existing Cookies;</li>
            <li>block Cookies from specific websites;</li>
            <li>block third-party Cookies; or</li>
            <li>block Cookies generally.</li>
          </ul>

          <p>
            However, disabling essential Cookies or Similar Technologies may cause some features of
            Jobs.ac.cn to stop working correctly, including login and other authenticated functions.
          </p>

          <h2>12. Changes to This Cookie Policy</h2>

          <p>
            We may update this Cookie Policy from time to time to reflect changes to the Services,
            the technologies we use or applicable legal requirements.
          </p>

          <p>
            Where material changes are made, we may provide an appropriate notice through the
            Services or by other reasonable means.
          </p>

          <p>
            The updated Cookie Policy will become effective when posted unless otherwise stated.
          </p>

          <h2>13. Contact Us</h2>

          <p>
            If you have questions about our use of Cookies or Similar Technologies, please contact
            Jobs.ac.cn through the contact details provided on the Jobs.ac.cn website.
          </p>
        </>
      );
    },
  },
  de: {
    placeholder: true,
    title: "Cookie-Richtlinie",
    description: "Platzhalter-Cookie-Richtlinie. Beschreibung und Inhalt vor dem Launch ersetzen.",
    Body: function CookiePolicyBodyDe() {
      return (
        <>
          <LegalPlaceholderCallout />
          <h2>Was diese Seite abdecken sollte</h2>
          <p>
            Ersetzen Sie diesen Abschnitt nach rechtlicher Prüfung durch Ihre Cookie-Richtlinie.
            Lassen Sie keine Template-Gerüste in der Produktion.
          </p>
          <h2>Was zu dokumentieren ist</h2>
          <p>
            Betreiber listen üblicherweise auf, welche Cookies oder ähnlichen Technologien die Site
            nutzt, wozu, und wie Besucher Einstellungen ändern können. Formulieren Sie das für Ihr
            Setup — dieses Template enthält keine solchen Angaben.
          </p>
          <h2>So erreichen Sie uns</h2>
          <p>Ersetzen Sie diesen Abschnitt durch den Kontaktweg für Fragen zu Cookies.</p>
        </>
      );
    },
  },
  fr: {
    placeholder: true,
    title: "Politique de cookies",
    description:
      "Politique de cookies d'espace réservé. Remplacez cette description et le corps avant le lancement.",
    Body: function CookiePolicyBodyFr() {
      return (
        <>
          <LegalPlaceholderCallout />
          <h2>Ce que cette page doit couvrir</h2>
          <p>
            Remplacez cette section par votre politique de cookies après relecture juridique. Ne
            laissez pas le contenu modèle en production.
          </p>
          <h2>Ce qu&apos;il faut documenter</h2>
          <p>
            Les opérateurs listent généralement les cookies ou technologies similaires utilisés,
            leur finalité et comment les visiteurs peuvent modifier leurs préférences. Rédigez ces
            faits pour votre configuration — ce modèle ne les énonce pas.
          </p>
          <h2>Nous contacter</h2>
          <p>Remplacez cette section par le canal de contact pour les questions sur les cookies.</p>
        </>
      );
    },
  },
  es: {
    placeholder: true,
    title: "Política de cookies",
    description:
      "Política de cookies de ejemplo. Sustituye esta descripción y este contenido antes del lanzamiento.",
    Body: function CookiePolicyBodyEs() {
      return (
        <>
          <LegalPlaceholderCallout />
          <h2>Qué debe cubrir esta página</h2>
          <p>
            Sustituye esta sección por tu política de cookies tras la revisión legal. No dejes la
            plantilla en producción.
          </p>
          <h2>Qué documentar</h2>
          <p>
            Normalmente se indican las cookies o tecnologías similares que usa el sitio, su
            finalidad y cómo cambiar las preferencias. Redacta esos datos para tu configuración:
            esta plantilla no los define.
          </p>
          <h2>Cómo contactarnos</h2>
          <p>Sustituye esta sección por el canal de contacto para consultas sobre cookies.</p>
        </>
      );
    },
  },
  pl: {
    placeholder: true,
    title: "Polityka cookies",
    description: "Przykładowa polityka cookies. Zastąp ten opis i treść przed uruchomieniem.",
    Body: function CookiePolicyBodyPl() {
      return (
        <>
          <LegalPlaceholderCallout />
          <h2>Co powinna zawierać ta strona</h2>
          <p>
            Zastąp tę sekcję swoją polityką cookies po weryfikacji prawnej. Nie zostawiaj szablonu w
            wersji produkcyjnej.
          </p>
          <h2>Co udokumentować</h2>
          <p>
            Zwykle podaje się, jakich plików cookie lub podobnych technologii używa serwis, w jakim
            celu oraz jak zmienić preferencje. Opisz te fakty dla swojej konfiguracji — szablon ich
            nie określa.
          </p>
          <h2>Jak się z nami skontaktować</h2>
          <p>Zastąp tę sekcję kanałem kontaktu w sprawach dotyczących plików cookie.</p>
        </>
      );
    },
  },
  nl: {
    placeholder: true,
    title: "Cookiebeleid",
    description: "Tijdelijk cookiebeleid. Vervang deze beschrijving en inhoud vóór de lancering.",
    Body: function CookiePolicyBodyNl() {
      return (
        <>
          <LegalPlaceholderCallout />
          <h2>Wat deze pagina moet behandelen</h2>
          <p>
            Vervang dit onderdeel na juridische beoordeling door uw cookiebeleid. Laat geen
            tijdelijke sjabloontekst in de productieomgeving staan.
          </p>
          <h2>Wat u moet vastleggen</h2>
          <p>
            Beheerders vermelden doorgaans welke cookies of vergelijkbare technologieën de site
            gebruikt, waarvoor ze dienen en hoe bezoekers hun voorkeuren kunnen wijzigen. Beschrijf
            deze feiten voor uw configuratie — dit sjabloon bevat daarover geen verklaringen.
          </p>
          <h2>Contact met ons opnemen</h2>
          <p>Vervang dit onderdeel door het contactkanaal voor vragen over cookies.</p>
        </>
      );
    },
  },
  "zh-cn": {
    placeholder: false,
    title: "Cookie 政策",
    description: "了解 Jobs.ac.cn 如何使用 Cookie 及类似技术来运营、保障、分析和改进我们的服务。",
    Body: function CookiePolicyBodyEn() {
      return (
        <>
          <p>
            <strong>Last updated:</strong> 3 October 2026
          </p>

          <p>
            This Cookie Policy explains how Jobs.ac.cn (“Jobs.ac.cn”, “we”, “us” or “our”) uses
            cookies and similar technologies when you visit or use the Jobs.ac.cn website, platform
            and related services (collectively, the <strong>“Services”</strong>).
          </p>

          <p>
            Jobs.ac.cn is operated by <strong>The Educationist Limited</strong>. The Jobs.ac.cn
            platform uses technology and infrastructure provided by <strong>Cavuno</strong>,
            operated by Wollemia Pty Ltd.
          </p>

          <h2>1. What Are Cookies?</h2>

          <p>
            Cookies are small text files that websites may store on your device when you visit a
            website. They allow websites to recognise your browser or device, maintain sessions,
            remember preferences and support other functionality.
          </p>

          <p>
            We also use technologies that perform similar functions, including local storage,
            session storage, pixels, tags, scripts and other browser or device identifiers. In this
            Cookie Policy, we refer to these collectively as{" "}
            <strong>“Cookies and Similar Technologies”</strong>.
          </p>

          <h2>2. Why We Use Cookies</h2>

          <p>
            Depending on the features and services enabled on Jobs.ac.cn, Cookies and Similar
            Technologies may be used to:
          </p>

          <ul>
            <li>operate and maintain the Services;</li>
            <li>authenticate users and maintain account sessions;</li>
            <li>protect the Services against fraud, abuse and security threats;</li>
            <li>remember preferences and settings;</li>
            <li>understand how visitors use the Services;</li>
            <li>measure website performance and improve the user experience;</li>
            <li>measure the effectiveness of marketing and advertising;</li>
            <li>deliver or measure personalised or interest-based advertising; and</li>
            <li>support integrations with third-party services.</li>
          </ul>

          <h2>3. Types of Cookies and Similar Technologies</h2>

          <h3>3.1 Strictly Necessary Technologies</h3>

          <p>
            These technologies are necessary for the Services to function. They may include
            technologies used for:
          </p>

          <ul>
            <li>account sign-in and authentication;</li>
            <li>maintaining secure sessions;</li>
            <li>security and fraud prevention;</li>
            <li>protecting forms and requests;</li>
            <li>remembering essential technical settings; and</li>
            <li>providing core website and platform functionality.</li>
          </ul>

          <p>
            These technologies may operate without consent where permitted by applicable law because
            disabling them may prevent essential parts of Jobs.ac.cn from functioning.
          </p>

          <h3>3.2 Functional Technologies</h3>

          <p>
            Functional Cookies and Similar Technologies may be used to remember choices and
            preferences that improve your experience, such as language, display preferences and
            other non-essential settings.
          </p>

          <h3>3.3 Analytics Technologies</h3>

          <p>
            Jobs.ac.cn may use analytics technologies to understand visitor behaviour, traffic
            sources, page views, interactions with jobs and other features, and the performance of
            the Services.
          </p>

          <p>
            These technologies may include <strong>Google Analytics 4 (GA4)</strong>.
          </p>

          <p>
            Where GA4 is enabled, information about your use of the Services may be sent to Google
            for analytics and measurement purposes. Depending on the configuration, this may include
            information such as pages viewed, approximate location, device and browser information,
            traffic sources, interactions and other usage information.
          </p>

          <p>
            Where required by applicable law, analytics technologies are activated only after you
            have provided the relevant consent.
          </p>

          <h3>3.4 Advertising Technologies</h3>

          <p>
            Jobs.ac.cn may display advertising through third-party advertising services, including{" "}
            <strong>Google AdSense</strong>, where that functionality is enabled.
          </p>

          <p>
            Advertising technologies may use Cookies and Similar Technologies to deliver
            advertisements, measure advertising performance, limit repetition of advertisements,
            detect invalid activity and, where applicable, personalise advertising based on
            information about your browsing activity.
          </p>

          <p>
            Google AdSense is a third-party advertising service that may place or access Cookies or
            similar identifiers in connection with advertisements displayed on Jobs.ac.cn.
          </p>

          <p>
            Where applicable law requires consent for personalised advertising or other
            non-essential advertising technologies, those technologies will be subject to the
            applicable consent controls.
          </p>

          <h3>3.5 Marketing and Advertising Measurement Technologies</h3>

          <p>
            Jobs.ac.cn may use technologies to measure the effectiveness of advertising and
            promotional campaigns and to understand whether visitors who arrive through an
            advertising platform subsequently interact with the Services.
          </p>

          <p>Depending on the integrations enabled, these technologies may include:</p>

          <ul>
            <li>
              <strong>Google Ads</strong> conversion and advertising tags;
            </li>
            <li>
              <strong>Meta Pixel</strong>;
            </li>
            <li>
              <strong>LinkedIn Insight Tag</strong>; and
            </li>
            <li>other advertising or campaign-measurement technologies.</li>
          </ul>

          <p>
            These technologies may collect information about visits, page views, interactions,
            conversions, browser or device characteristics and advertising attribution.
          </p>

          <p>
            Where applicable law requires consent, these technologies will only be activated after
            the required consent has been obtained.
          </p>

          <h2>4. Google Tag Manager</h2>

          <p>
            Jobs.ac.cn may use <strong>Google Tag Manager (GTM)</strong> to manage and deploy
            website tags and third-party technologies.
          </p>

          <p>
            Google Tag Manager is a tag-management system. Depending on how Jobs.ac.cn is
            configured, tags deployed through Google Tag Manager may include analytics, advertising,
            conversion-tracking, social-media or other third-party technologies.
          </p>

          <p>
            The use of Google Tag Manager therefore does not necessarily mean that every third-party
            tag is active at all times. The technologies actually loaded depend on the configuration
            of the Jobs.ac.cn platform and the services we choose to enable.
          </p>

          <p>
            Where Jobs.ac.cn uses a consent mechanism for non-essential technologies, tags deployed
            through Google Tag Manager may be prevented from loading until the applicable consent
            has been provided.
          </p>

          <h2>5. Cavuno and Platform Technologies</h2>

          <p>
            <strong>Jobs.ac.cn uses Cavuno as its platform and technology service provider.</strong>
          </p>

          <p>
            Cavuno provides the platform infrastructure used to operate Jobs.ac.cn, including
            functionality for candidate and employer accounts, candidate profiles, job listings, job
            applications, authentication and related platform services.
          </p>

          <p>
            As part of providing these services, Cavuno may use Cookies and Similar Technologies for
            essential functions such as authentication, session management, security, fraud
            prevention and platform functionality.
          </p>

          <p>
            Cavuno also provides integrations for analytics, advertising and marketing technologies,
            including Google Analytics 4, Google Tag Manager, Meta Pixel, LinkedIn Insight Tag and
            Google AdSense. Whether a particular technology is active on Jobs.ac.cn depends on the
            configuration and services enabled by Jobs.ac.cn.
          </p>

          <p>
            Where a non-essential technology is enabled, Jobs.ac.cn will apply the consent
            requirements applicable to that technology and to the users concerned.
          </p>

          <h2>6. Third-Party Providers</h2>

          <p>
            Cookies and Similar Technologies used on Jobs.ac.cn may be provided directly by
            Jobs.ac.cn, by Cavuno, or by third-party service providers integrated with the Services.
          </p>

          <p>Depending on the technologies enabled, these providers may include:</p>

          <table>
            <thead>
              <tr>
                <th>Provider</th>
                <th>Technology or Service</th>
                <th>Typical Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cavuno</td>
                <td>Platform and authentication technologies</td>
                <td>Account sessions, authentication, security and core platform functionality</td>
              </tr>
              <tr>
                <td>Google</td>
                <td>Google Analytics 4</td>
                <td>Website analytics, traffic measurement and usage analysis</td>
              </tr>
              <tr>
                <td>Google</td>
                <td>Google Tag Manager</td>
                <td>Deployment and management of website tags</td>
              </tr>
              <tr>
                <td>Google</td>
                <td>Google AdSense</td>
                <td>
                  Display advertising, advertising measurement and, where enabled, personalised
                  advertising
                </td>
              </tr>
              <tr>
                <td>Google</td>
                <td>Google Ads</td>
                <td>Advertising measurement, conversion tracking and campaign attribution</td>
              </tr>
              <tr>
                <td>Meta</td>
                <td>Meta Pixel</td>
                <td>Advertising measurement, conversion tracking and audience measurement</td>
              </tr>
              <tr>
                <td>LinkedIn</td>
                <td>LinkedIn Insight Tag</td>
                <td>Advertising measurement, conversion tracking and audience insights</td>
              </tr>
            </tbody>
          </table>

          <p>
            The services listed above are examples of technologies that may be used. A particular
            technology will only operate on Jobs.ac.cn when it has been enabled or integrated into
            the Services.
          </p>

          <h2>7. Job Applications and Account Use</h2>

          <p>Cookies and Similar Technologies may be used when you:</p>

          <ul>
            <li>create or access a candidate account;</li>
            <li>create or access an employer account;</li>
            <li>manage a candidate profile;</li>
            <li>manage an employer profile or job listing;</li>
            <li>submit or manage a job application; or</li>
            <li>use another feature that requires authentication.</li>
          </ul>

          <p>
            These technologies may be necessary to ensure that information associated with your
            account or application is available to the appropriate authenticated user.
          </p>

          <h2>8. Cookie Consent</h2>

          <p>
            Where applicable law requires consent for non-essential Cookies and Similar
            Technologies, Jobs.ac.cn will seek your consent before activating those technologies.
          </p>

          <p>
            Depending on your location and applicable legal requirements, you may be presented with
            options to accept, reject or customise non-essential Cookies and Similar Technologies.
          </p>

          <p>
            Strictly necessary technologies may continue to operate where permitted by applicable
            law.
          </p>

          <p>
            Where available, you can revisit or change your Cookie preferences through the Cookie
            settings or preferences link provided on the Services.
          </p>

          <h2>9. International Processing</h2>

          <p>
            Some third-party providers used by Jobs.ac.cn, including Cavuno, Google, Meta and
            LinkedIn, may process information in countries or regions outside the country in which
            you are located.
          </p>

          <p>
            Where applicable law regulates international transfers of personal information, such
            transfers will be handled in accordance with the requirements applicable to Jobs.ac.cn.
          </p>

          <h2>10. Cookies and Personal Information</h2>

          <p>
            Some Cookies and Similar Technologies may collect or generate information that
            constitutes personal information under applicable law, including IP addresses, browser
            information, device information, identifiers and information concerning interactions
            with the Services.
          </p>

          <p>
            Where such information constitutes personal information, it will be processed in
            accordance with our <strong>Privacy Policy</strong> and applicable data protection laws.
          </p>

          <p>
            Our Privacy Policy also explains that personal information associated with Jobs.ac.cn
            accounts, candidate profiles, employer accounts and job applications is hosted and
            processed through Cavuno's systems and infrastructure on behalf of Jobs.ac.cn.
          </p>

          <h2>11. Managing Cookies</h2>

          <p>
            You can generally manage or delete Cookies through your browser settings. Depending on
            your browser, you may be able to:
          </p>

          <ul>
            <li>view stored Cookies;</li>
            <li>delete existing Cookies;</li>
            <li>block Cookies from specific websites;</li>
            <li>block third-party Cookies; or</li>
            <li>block Cookies generally.</li>
          </ul>

          <p>
            However, disabling essential Cookies or Similar Technologies may cause some features of
            Jobs.ac.cn to stop working correctly, including login and other authenticated functions.
          </p>

          <h2>12. Changes to This Cookie Policy</h2>

          <p>
            We may update this Cookie Policy from time to time to reflect changes to the Services,
            the technologies we use or applicable legal requirements.
          </p>

          <p>
            Where material changes are made, we may provide an appropriate notice through the
            Services or by other reasonable means.
          </p>

          <p>
            The updated Cookie Policy will become effective when posted unless otherwise stated.
          </p>

          <h2>13. Contact Us</h2>

          <p>
            If you have questions about our use of Cookies or Similar Technologies, please contact
            Jobs.ac.cn through the contact details provided on the Jobs.ac.cn website.
          </p>
        </>
      );
    },
  },
  "zh-hk": {
    placeholder: false,
    title: "Cookie 政策",
    description: "了解 Jobs.ac.cn 如何使用 Cookie 及類似技術來運作、保障、分析及改善我們的服務。",
    Body: function CookiePolicyBodyEn() {
      return (
        <>
          <p>
            <strong>Last updated:</strong> 3 October 2026
          </p>

          <p>
            This Cookie Policy explains how Jobs.ac.cn (“Jobs.ac.cn”, “we”, “us” or “our”) uses
            cookies and similar technologies when you visit or use the Jobs.ac.cn website, platform
            and related services (collectively, the <strong>“Services”</strong>).
          </p>

          <p>
            Jobs.ac.cn is operated by <strong>The Educationist Limited</strong>. The Jobs.ac.cn
            platform uses technology and infrastructure provided by <strong>Cavuno</strong>,
            operated by Wollemia Pty Ltd.
          </p>

          <h2>1. What Are Cookies?</h2>

          <p>
            Cookies are small text files that websites may store on your device when you visit a
            website. They allow websites to recognise your browser or device, maintain sessions,
            remember preferences and support other functionality.
          </p>

          <p>
            We also use technologies that perform similar functions, including local storage,
            session storage, pixels, tags, scripts and other browser or device identifiers. In this
            Cookie Policy, we refer to these collectively as{" "}
            <strong>“Cookies and Similar Technologies”</strong>.
          </p>

          <h2>2. Why We Use Cookies</h2>

          <p>
            Depending on the features and services enabled on Jobs.ac.cn, Cookies and Similar
            Technologies may be used to:
          </p>

          <ul>
            <li>operate and maintain the Services;</li>
            <li>authenticate users and maintain account sessions;</li>
            <li>protect the Services against fraud, abuse and security threats;</li>
            <li>remember preferences and settings;</li>
            <li>understand how visitors use the Services;</li>
            <li>measure website performance and improve the user experience;</li>
            <li>measure the effectiveness of marketing and advertising;</li>
            <li>deliver or measure personalised or interest-based advertising; and</li>
            <li>support integrations with third-party services.</li>
          </ul>

          <h2>3. Types of Cookies and Similar Technologies</h2>

          <h3>3.1 Strictly Necessary Technologies</h3>

          <p>
            These technologies are necessary for the Services to function. They may include
            technologies used for:
          </p>

          <ul>
            <li>account sign-in and authentication;</li>
            <li>maintaining secure sessions;</li>
            <li>security and fraud prevention;</li>
            <li>protecting forms and requests;</li>
            <li>remembering essential technical settings; and</li>
            <li>providing core website and platform functionality.</li>
          </ul>

          <p>
            These technologies may operate without consent where permitted by applicable law because
            disabling them may prevent essential parts of Jobs.ac.cn from functioning.
          </p>

          <h3>3.2 Functional Technologies</h3>

          <p>
            Functional Cookies and Similar Technologies may be used to remember choices and
            preferences that improve your experience, such as language, display preferences and
            other non-essential settings.
          </p>

          <h3>3.3 Analytics Technologies</h3>

          <p>
            Jobs.ac.cn may use analytics technologies to understand visitor behaviour, traffic
            sources, page views, interactions with jobs and other features, and the performance of
            the Services.
          </p>

          <p>
            These technologies may include <strong>Google Analytics 4 (GA4)</strong>.
          </p>

          <p>
            Where GA4 is enabled, information about your use of the Services may be sent to Google
            for analytics and measurement purposes. Depending on the configuration, this may include
            information such as pages viewed, approximate location, device and browser information,
            traffic sources, interactions and other usage information.
          </p>

          <p>
            Where required by applicable law, analytics technologies are activated only after you
            have provided the relevant consent.
          </p>

          <h3>3.4 Advertising Technologies</h3>

          <p>
            Jobs.ac.cn may display advertising through third-party advertising services, including{" "}
            <strong>Google AdSense</strong>, where that functionality is enabled.
          </p>

          <p>
            Advertising technologies may use Cookies and Similar Technologies to deliver
            advertisements, measure advertising performance, limit repetition of advertisements,
            detect invalid activity and, where applicable, personalise advertising based on
            information about your browsing activity.
          </p>

          <p>
            Google AdSense is a third-party advertising service that may place or access Cookies or
            similar identifiers in connection with advertisements displayed on Jobs.ac.cn.
          </p>

          <p>
            Where applicable law requires consent for personalised advertising or other
            non-essential advertising technologies, those technologies will be subject to the
            applicable consent controls.
          </p>

          <h3>3.5 Marketing and Advertising Measurement Technologies</h3>

          <p>
            Jobs.ac.cn may use technologies to measure the effectiveness of advertising and
            promotional campaigns and to understand whether visitors who arrive through an
            advertising platform subsequently interact with the Services.
          </p>

          <p>Depending on the integrations enabled, these technologies may include:</p>

          <ul>
            <li>
              <strong>Google Ads</strong> conversion and advertising tags;
            </li>
            <li>
              <strong>Meta Pixel</strong>;
            </li>
            <li>
              <strong>LinkedIn Insight Tag</strong>; and
            </li>
            <li>other advertising or campaign-measurement technologies.</li>
          </ul>

          <p>
            These technologies may collect information about visits, page views, interactions,
            conversions, browser or device characteristics and advertising attribution.
          </p>

          <p>
            Where applicable law requires consent, these technologies will only be activated after
            the required consent has been obtained.
          </p>

          <h2>4. Google Tag Manager</h2>

          <p>
            Jobs.ac.cn may use <strong>Google Tag Manager (GTM)</strong> to manage and deploy
            website tags and third-party technologies.
          </p>

          <p>
            Google Tag Manager is a tag-management system. Depending on how Jobs.ac.cn is
            configured, tags deployed through Google Tag Manager may include analytics, advertising,
            conversion-tracking, social-media or other third-party technologies.
          </p>

          <p>
            The use of Google Tag Manager therefore does not necessarily mean that every third-party
            tag is active at all times. The technologies actually loaded depend on the configuration
            of the Jobs.ac.cn platform and the services we choose to enable.
          </p>

          <p>
            Where Jobs.ac.cn uses a consent mechanism for non-essential technologies, tags deployed
            through Google Tag Manager may be prevented from loading until the applicable consent
            has been provided.
          </p>

          <h2>5. Cavuno and Platform Technologies</h2>

          <p>
            <strong>Jobs.ac.cn uses Cavuno as its platform and technology service provider.</strong>
          </p>

          <p>
            Cavuno provides the platform infrastructure used to operate Jobs.ac.cn, including
            functionality for candidate and employer accounts, candidate profiles, job listings, job
            applications, authentication and related platform services.
          </p>

          <p>
            As part of providing these services, Cavuno may use Cookies and Similar Technologies for
            essential functions such as authentication, session management, security, fraud
            prevention and platform functionality.
          </p>

          <p>
            Cavuno also provides integrations for analytics, advertising and marketing technologies,
            including Google Analytics 4, Google Tag Manager, Meta Pixel, LinkedIn Insight Tag and
            Google AdSense. Whether a particular technology is active on Jobs.ac.cn depends on the
            configuration and services enabled by Jobs.ac.cn.
          </p>

          <p>
            Where a non-essential technology is enabled, Jobs.ac.cn will apply the consent
            requirements applicable to that technology and to the users concerned.
          </p>

          <h2>6. Third-Party Providers</h2>

          <p>
            Cookies and Similar Technologies used on Jobs.ac.cn may be provided directly by
            Jobs.ac.cn, by Cavuno, or by third-party service providers integrated with the Services.
          </p>

          <p>Depending on the technologies enabled, these providers may include:</p>

          <table>
            <thead>
              <tr>
                <th>Provider</th>
                <th>Technology or Service</th>
                <th>Typical Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cavuno</td>
                <td>Platform and authentication technologies</td>
                <td>Account sessions, authentication, security and core platform functionality</td>
              </tr>
              <tr>
                <td>Google</td>
                <td>Google Analytics 4</td>
                <td>Website analytics, traffic measurement and usage analysis</td>
              </tr>
              <tr>
                <td>Google</td>
                <td>Google Tag Manager</td>
                <td>Deployment and management of website tags</td>
              </tr>
              <tr>
                <td>Google</td>
                <td>Google AdSense</td>
                <td>
                  Display advertising, advertising measurement and, where enabled, personalised
                  advertising
                </td>
              </tr>
              <tr>
                <td>Google</td>
                <td>Google Ads</td>
                <td>Advertising measurement, conversion tracking and campaign attribution</td>
              </tr>
              <tr>
                <td>Meta</td>
                <td>Meta Pixel</td>
                <td>Advertising measurement, conversion tracking and audience measurement</td>
              </tr>
              <tr>
                <td>LinkedIn</td>
                <td>LinkedIn Insight Tag</td>
                <td>Advertising measurement, conversion tracking and audience insights</td>
              </tr>
            </tbody>
          </table>

          <p>
            The services listed above are examples of technologies that may be used. A particular
            technology will only operate on Jobs.ac.cn when it has been enabled or integrated into
            the Services.
          </p>

          <h2>7. Job Applications and Account Use</h2>

          <p>Cookies and Similar Technologies may be used when you:</p>

          <ul>
            <li>create or access a candidate account;</li>
            <li>create or access an employer account;</li>
            <li>manage a candidate profile;</li>
            <li>manage an employer profile or job listing;</li>
            <li>submit or manage a job application; or</li>
            <li>use another feature that requires authentication.</li>
          </ul>

          <p>
            These technologies may be necessary to ensure that information associated with your
            account or application is available to the appropriate authenticated user.
          </p>

          <h2>8. Cookie Consent</h2>

          <p>
            Where applicable law requires consent for non-essential Cookies and Similar
            Technologies, Jobs.ac.cn will seek your consent before activating those technologies.
          </p>

          <p>
            Depending on your location and applicable legal requirements, you may be presented with
            options to accept, reject or customise non-essential Cookies and Similar Technologies.
          </p>

          <p>
            Strictly necessary technologies may continue to operate where permitted by applicable
            law.
          </p>

          <p>
            Where available, you can revisit or change your Cookie preferences through the Cookie
            settings or preferences link provided on the Services.
          </p>

          <h2>9. International Processing</h2>

          <p>
            Some third-party providers used by Jobs.ac.cn, including Cavuno, Google, Meta and
            LinkedIn, may process information in countries or regions outside the country in which
            you are located.
          </p>

          <p>
            Where applicable law regulates international transfers of personal information, such
            transfers will be handled in accordance with the requirements applicable to Jobs.ac.cn.
          </p>

          <h2>10. Cookies and Personal Information</h2>

          <p>
            Some Cookies and Similar Technologies may collect or generate information that
            constitutes personal information under applicable law, including IP addresses, browser
            information, device information, identifiers and information concerning interactions
            with the Services.
          </p>

          <p>
            Where such information constitutes personal information, it will be processed in
            accordance with our <strong>Privacy Policy</strong> and applicable data protection laws.
          </p>

          <p>
            Our Privacy Policy also explains that personal information associated with Jobs.ac.cn
            accounts, candidate profiles, employer accounts and job applications is hosted and
            processed through Cavuno's systems and infrastructure on behalf of Jobs.ac.cn.
          </p>

          <h2>11. Managing Cookies</h2>

          <p>
            You can generally manage or delete Cookies through your browser settings. Depending on
            your browser, you may be able to:
          </p>

          <ul>
            <li>view stored Cookies;</li>
            <li>delete existing Cookies;</li>
            <li>block Cookies from specific websites;</li>
            <li>block third-party Cookies; or</li>
            <li>block Cookies generally.</li>
          </ul>

          <p>
            However, disabling essential Cookies or Similar Technologies may cause some features of
            Jobs.ac.cn to stop working correctly, including login and other authenticated functions.
          </p>

          <h2>12. Changes to This Cookie Policy</h2>

          <p>
            We may update this Cookie Policy from time to time to reflect changes to the Services,
            the technologies we use or applicable legal requirements.
          </p>

          <p>
            Where material changes are made, we may provide an appropriate notice through the
            Services or by other reasonable means.
          </p>

          <p>
            The updated Cookie Policy will become effective when posted unless otherwise stated.
          </p>

          <h2>13. Contact Us</h2>

          <p>
            If you have questions about our use of Cookies or Similar Technologies, please contact
            Jobs.ac.cn through the contact details provided on the Jobs.ac.cn website.
          </p>
        </>
      );
    },
  },
} satisfies Record<LegalLocale, LegalPageContent>;
