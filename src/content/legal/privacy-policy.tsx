import { LegalPlaceholderCallout } from "./placeholder-callout";

import type { LegalLocale, LegalPageContent } from "./types";

/** Titles match `breadcrumbs_privacyPolicy` per locale. */
export const privacyPolicyContent = {
  en: {
    placeholder: false,
    title: "Privacy Policy",
    description:
      "Learn how Jobs.ac.cn collects, uses, stores, protects and shares your personal information when you use our services.",
    Body: function PrivacyPolicyBodyEn() {
      return (
        <>
          <p>
            <strong>Last updated:</strong> 3 October 2026
          </p>

          <p>
            This Privacy Policy explains how Jobs.ac.cn (“Jobs.ac.cn”, “we”, “us” or “our”)
            collects, uses, stores, processes and discloses personal information when you visit or
            use the Jobs.ac.cn website, platform and related services (collectively, the{" "}
            <strong>“Services”</strong>).
          </p>

          <p>
            Jobs.ac.cn is operated by <strong>The Educationist Limited</strong>. The Jobs.ac.cn
            platform is powered by <strong>Cavuno</strong>, which provides the platform, database,
            application and related technology infrastructure used to operate the Services.
          </p>

          <p>
            This Privacy Policy should be read together with our <strong>Terms of Use</strong> and{" "}
            <strong>Cookie Policy</strong>.
          </p>

          <h2>1. Who Is Responsible for Your Personal Information?</h2>

          <p>
            The Educationist Limited operates Jobs.ac.cn and determines how personal information is
            collected and used in connection with the Services, subject to applicable law.
          </p>

          <p>
            Jobs.ac.cn uses <strong>Cavuno</strong>, operated by <strong>Wollemia Pty Ltd</strong>,
            as a technology and platform service provider.
          </p>

          <p>
            For personal information collected through Jobs.ac.cn and processed through the Cavuno
            platform on our behalf, Cavuno acts as a{" "}
            <strong>data processor or service provider</strong>. Cavuno's current Data Processing
            Agreement describes its role as processing customer job-board personal data on behalf of
            the job-board operator.{" "}
          </p>

          <h2>2. Personal Information We Collect</h2>

          <p>The information we collect depends on how you use the Services.</p>

          <h3>2.1 Visitors</h3>

          <p>
            You may browse many areas of Jobs.ac.cn without creating an account. When you visit the
            Services, we may automatically receive technical and usage information such as:
          </p>

          <ul>
            <li>IP address;</li>
            <li>browser and browser version;</li>
            <li>device type and operating system;</li>
            <li>pages and job listings viewed;</li>
            <li>referring and exit pages;</li>
            <li>dates and times of visits;</li>
            <li>general location information derived from technical data;</li>
            <li>interaction and usage information; and</li>
            <li>security, diagnostic and performance information.</li>
          </ul>

          <h3>2.2 Candidate Accounts and Profiles</h3>

          <p>If you create a candidate account or profile, we may collect information such as:</p>

          <ul>
            <li>name;</li>
            <li>email address;</li>
            <li>password and authentication information;</li>
            <li>contact information;</li>
            <li>employment history;</li>
            <li>education and qualifications;</li>
            <li>professional experience;</li>
            <li>skills and areas of expertise;</li>
            <li>career interests and preferences;</li>
            <li>CVs, résumés and supporting documents;</li>
            <li>profile photographs;</li>
            <li>saved jobs, alerts and preferences; and</li>
            <li>other information you choose to provide.</li>
          </ul>

          <p>
            Some candidate profile information may be made available to employers or other users
            where the relevant profile or directory functionality has been enabled and according to
            the visibility settings available to you.
          </p>

          <h3>2.3 Job Applications</h3>

          <p>
            When you apply for a job through Jobs.ac.cn, we may collect information contained in or
            associated with your application, including:
          </p>

          <ul>
            <li>the position for which you apply;</li>
            <li>application form information;</li>
            <li>your CV or résumé;</li>
            <li>cover letters and supporting documents;</li>
            <li>answers to application questions;</li>
            <li>application status and related records;</li>
            <li>communications relating to the application; and</li>
            <li>other information you choose to submit as part of the application.</li>
          </ul>

          <p>
            Application information is private recruitment information and is{" "}
            <strong>not “Your Content”</strong> for the purposes of our Terms of Use.
          </p>

          <h3>2.4 External Job Applications</h3>

          <p>
            Some job listings may direct you to an employer's website, careers page, applicant
            tracking system or other third-party application service.
          </p>

          <p>
            Where you follow an external application link, the application is handled by the
            relevant employer or third-party service rather than by Jobs.ac.cn. Cavuno may record
            that an application link was clicked, but it does not receive the completed application
            submitted on the external site or system.{" "}
          </p>

          <p>
            Once you leave Jobs.ac.cn, the third party's privacy policy will apply to information
            you provide to that third party.
          </p>

          <h3>2.5 Employer and Recruiter Accounts</h3>

          <p>
            If you create or use an employer, recruiter or organisation account, we may collect:
          </p>

          <ul>
            <li>your name;</li>
            <li>email address;</li>
            <li>telephone number and other contact details;</li>
            <li>job title and professional role;</li>
            <li>organisation name and information;</li>
            <li>account and authentication information;</li>
            <li>job-posting and recruitment activity;</li>
            <li>billing and transaction information; and</li>
            <li>communications with us.</li>
          </ul>

          <h3>2.6 Job Listings and Published Employer Content</h3>

          <p>
            Employers may submit information for publication on Jobs.ac.cn, including job titles,
            job descriptions, employer descriptions, locations, salary information, logos, images,
            application instructions and other recruitment material.
          </p>

          <p>
            Information intentionally submitted for publication is treated as public or publishable
            information and may be indexed, reproduced, distributed, syndicated, translated,
            reformatted or promoted through other channels in accordance with our Terms of Use.
          </p>

          <h3>2.7 Job Alerts and Subscriptions</h3>

          <p>
            If you subscribe to job alerts or other optional Services, we may collect your email
            address, optional name, subscription preferences, the purpose for which the subscription
            was requested, and records relating to your subscription, consent or withdrawal of
            consent.
          </p>

          <h3>2.8 Payments and Transactions</h3>

          <p>
            Where you purchase paid Services, we may process information relating to the
            transaction, including the service purchased, transaction amount, payment status,
            invoices and billing information.
          </p>

          <p>
            Payment card information may be collected and processed directly by our payment service
            provider. We do not generally receive or store full payment card numbers.
          </p>

          <h3>2.9 Communications</h3>

          <p>
            We may collect information contained in enquiries, support requests, complaints,
            feedback, email communications and other communications you send to us.
          </p>

          <h2>3. Information We Collect Automatically</h2>

          <p>
            We may automatically collect information about your device and use of the Services
            through server logs, Cookies and Similar Technologies.
          </p>

          <p>
            This may include IP addresses, browser information, operating system, device
            information, pages visited, search activity, job interactions, referring URLs, session
            information and other technical or usage information.
          </p>

          <p>
            Our use of Cookies and Similar Technologies is described in our{" "}
            <strong>Cookie Policy</strong>.
          </p>

          <h2>4. How We Use Personal Information</h2>

          <p>We may use personal information to:</p>

          <ul>
            <li>provide and operate Jobs.ac.cn;</li>
            <li>create and maintain accounts;</li>
            <li>provide candidate and employer functionality;</li>
            <li>facilitate job searches and recruitment;</li>
            <li>process and manage native job applications;</li>
            <li>connect candidates and employers;</li>
            <li>provide job alerts and other requested services;</li>
            <li>publish and distribute job listings;</li>
            <li>process payments and billing;</li>
            <li>provide customer support;</li>
            <li>maintain security and prevent fraud, spam and abuse;</li>
            <li>monitor and improve the performance of the Services;</li>
            <li>analyse usage and develop new features;</li>
            <li>communicate with you about your account and the Services;</li>
            <li>
              send marketing communications where permitted by law and, where required, with your
              consent;
            </li>
            <li>measure advertising and marketing activity where applicable;</li>
            <li>comply with legal and regulatory obligations; and</li>
            <li>establish, exercise or defend legal claims.</li>
          </ul>

          <h2>5. Our Legal Grounds for Processing</h2>

          <p>
            Where applicable law requires a legal basis for processing personal information, we may
            rely on:
          </p>

          <ul>
            <li>
              <strong>contractual necessity</strong>, where processing is necessary to provide the
              Services you request;
            </li>
            <li>
              <strong>legitimate interests</strong>, where permitted by law, including operating,
              securing and improving the Services;
            </li>
            <li>
              <strong>consent</strong>, where consent is required, including for certain marketing,
              advertising or non-essential Cookies;
            </li>
            <li>
              <strong>legal obligations</strong>, where processing is necessary to comply with law;
              and
            </li>
            <li>other lawful grounds available under applicable law.</li>
          </ul>

          <p>
            Where we rely on consent, you may withdraw consent where permitted by applicable law.
          </p>

          <h2>6. Candidate Applications and Employer Access</h2>

          <p>
            When you submit a native application through Jobs.ac.cn, information in your application
            may be made available to the employer or organisation responsible for the relevant
            position.
          </p>

          <p>
            The employer may use that information for recruitment, selection, interviews and related
            employment purposes. Employers are responsible for complying with applicable privacy and
            employment laws in relation to their own recruitment activities.
          </p>

          <p>
            Jobs.ac.cn does not guarantee that an employer will review an application, contact a
            candidate or offer employment.
          </p>

          <h2>7. Where Your Personal Information Is Hosted</h2>

          <p>
            <strong>
              Jobs.ac.cn uses Cavuno to host and operate the platform and to store and process
              personal information associated with the Services.
            </strong>
          </p>

          <p>This includes, depending on the features you use:</p>

          <ul>
            <li>candidate account information;</li>
            <li>candidate profile information;</li>
            <li>CVs and résumés;</li>
            <li>native job application information;</li>
            <li>employer and recruiter account information;</li>
            <li>job listing and recruitment data;</li>
            <li>job-alert subscription information;</li>
            <li>authentication and session information;</li>
            <li>platform activity and related records; and</li>
            <li>other data required to provide the Jobs.ac.cn Services.</li>
          </ul>

          <p>
            Cavuno's current Data Processing Agreement states that it processes customer job-board
            data on behalf of the job-board operator, including hosting the job board, operating
            candidate profiles and native applications, storing CVs, delivering job alerts and
            related platform functions.{" "}
          </p>

          <p>
            Cavuno does not acquire ownership of your personal information merely because it hosts
            or processes it for Jobs.ac.cn.
          </p>

          <h2>8. Cavuno's Role as Our Technology Provider</h2>

          <p>
            Cavuno is operated by <strong>Wollemia Pty Ltd</strong> and provides the technology
            infrastructure used by Jobs.ac.cn.
          </p>

          <p>Cavuno may process personal information on our behalf for purposes including:</p>

          <ul>
            <li>data storage and database services;</li>
            <li>account registration and authentication;</li>
            <li>candidate and employer profile management;</li>
            <li>job listing management;</li>
            <li>native job applications;</li>
            <li>job alerts and transactional communications;</li>
            <li>search and platform functionality;</li>
            <li>security and abuse prevention;</li>
            <li>analytics and platform monitoring; and</li>
            <li>technical maintenance and other services necessary to operate the platform.</li>
          </ul>

          <p>
            Cavuno's public DPA states that it acts as a processor for customer job-board personal
            data and processes that information according to the job-board operator's
            instructions.{" "}
          </p>

          <p>
            For more information about Cavuno's own privacy practices, please see{" "}
            <a href="https://cavuno.com/privacy-policy">Cavuno's Privacy Policy</a> and{" "}
            <a href="https://cavuno.com/dpa">Cavuno's Data Processing Agreement</a>.
          </p>

          <h2>9. Cavuno's Infrastructure and Subprocessors</h2>

          <p>
            To provide the Cavuno platform, Cavuno may use third-party infrastructure and
            subprocessors.
          </p>

          <p>
            Cavuno's current public Privacy Policy states that its primary customer-data processing
            is in the <strong>United States</strong>, including infrastructure in AWS us-east-1 and
            other United States-based infrastructure and service providers. The exact providers and
            processing locations may change over time as Cavuno updates its infrastructure and
            subprocessors.{" "}
          </p>

          <p>
            Accordingly, personal information submitted to Jobs.ac.cn may be stored or processed
            outside Hong Kong, Mainland China or the country in which you are located.
          </p>

          <h2>10. How We Share Personal Information</h2>

          <p>
            We may share personal information where reasonably necessary to provide the Services or
            where permitted or required by law.
          </p>

          <h3>10.1 Cavuno</h3>

          <p>
            We share or make available personal information to Cavuno so that it can host, operate
            and maintain the Jobs.ac.cn platform on our behalf.
          </p>

          <h3>10.2 Employers and Recruiters</h3>

          <p>
            Where you apply for a job or otherwise choose to interact with an employer, relevant
            information may be provided to that employer for recruitment purposes.
          </p>

          <h3>10.3 Service Providers</h3>

          <p>We may use other service providers for functions such as:</p>

          <ul>
            <li>hosting and infrastructure;</li>
            <li>email and communications;</li>
            <li>payment processing;</li>
            <li>security and fraud prevention;</li>
            <li>analytics;</li>
            <li>advertising and marketing;</li>
            <li>customer support; and</li>
            <li>other technical or operational services.</li>
          </ul>

          <h3>10.4 Advertising and Analytics Providers</h3>

          <p>
            Where enabled, third-party services such as Google Analytics, Google Ads, Google
            AdSense, Meta and LinkedIn may process information relating to your use of Jobs.ac.cn
            for analytics, advertising, conversion measurement or related purposes.
          </p>

          <p>
            The use of these technologies is described further in our <strong>Cookie Policy</strong>{" "}
            and may be subject to consent requirements under applicable law.
          </p>

          <h3>10.5 Legal and Regulatory Disclosure</h3>

          <p>
            We may disclose personal information where reasonably necessary to comply with
            applicable law, regulation, legal process, court order or lawful governmental request.
          </p>

          <h3>10.6 Business Transactions</h3>

          <p>
            If The Educationist Limited or Jobs.ac.cn is involved in a merger, acquisition,
            restructuring, financing, sale of assets or similar transaction, personal information
            may be transferred as part of that transaction, subject to applicable law.
          </p>

          <h2>11. International Transfers</h2>

          <p>
            Because Jobs.ac.cn uses Cavuno and other service providers that may operate
            internationally, your personal information may be transferred to or processed in
            countries other than the country in which you are located.
          </p>

          <p>
            Where applicable law imposes requirements concerning international transfers, we will
            take reasonable steps to comply with those requirements, including using appropriate
            contractual, organisational or other safeguards where required.
          </p>

          <p>
            For individuals in Mainland China, cross-border processing may be subject to the
            requirements of the Personal Information Protection Law and related regulations. The
            PIPL applies in specified circumstances to processing of Mainland China individuals'
            personal information outside Mainland China and contains requirements governing certain
            cross-border transfers.{" "}
          </p>

          <h2>12. Public Information and Published Content</h2>

          <p>Some information submitted to Jobs.ac.cn is intended to be publicly accessible.</p>

          <p>
            This may include published job listings, employer information, job titles, job
            descriptions, logos, images and other information intentionally provided for
            publication.
          </p>

          <p>
            Publicly available information may be indexed by search engines and may be reproduced,
            syndicated, translated, reformatted or distributed through third-party platforms in
            accordance with our Terms of Use.
          </p>

          <p>
            Information in a private account, candidate profile, application or other restricted
            area is not treated as publicly published merely because you use the Services.
          </p>

          <h2>13. Retention of Personal Information</h2>

          <p>
            We retain personal information for as long as reasonably necessary for the purposes for
            which it was collected, including to:
          </p>

          <ul>
            <li>provide the Services;</li>
            <li>maintain accounts and records;</li>
            <li>process applications and recruitment activity;</li>
            <li>provide job alerts and other requested services;</li>
            <li>comply with legal and regulatory requirements;</li>
            <li>resolve disputes;</li>
            <li>enforce agreements; and</li>
            <li>protect the security and integrity of the Services.</li>
          </ul>

          <p>
            When personal information is no longer required, it may be deleted, anonymised or
            otherwise securely disposed of, subject to legal, regulatory, security, backup and
            technical requirements.
          </p>

          <p>
            Because Jobs.ac.cn uses Cavuno as its platform provider, deletion or retention of
            information may also be affected by Cavuno's platform architecture, backups and legally
            required retention periods.
          </p>

          <h2>14. Data Security</h2>

          <p>
            We take reasonable technical and organisational measures designed to protect personal
            information against unauthorised access, disclosure, alteration, loss, misuse or
            destruction.
          </p>

          <p>
            These measures may include access controls, authentication, encryption, monitoring,
            security controls and other safeguards provided by Jobs.ac.cn, Cavuno and relevant
            service providers.
          </p>

          <p>
            No internet transmission or electronic storage system can be guaranteed to be completely
            secure.
          </p>

          <h2>15. Your Privacy Rights</h2>

          <p>
            Depending on your location and applicable law, you may have rights relating to your
            personal information, including the right to:
          </p>

          <ul>
            <li>request access to personal information held about you;</li>
            <li>request correction of inaccurate or incomplete personal information;</li>
            <li>request deletion of personal information where applicable;</li>
            <li>withdraw consent where processing is based on consent;</li>
            <li>object to or request restriction of certain processing where applicable;</li>
            <li>request portability of certain information where applicable; and</li>
            <li>make a complaint to a relevant privacy or data protection authority.</li>
          </ul>

          <p>
            Under Hong Kong's Personal Data (Privacy) Ordinance, individuals have rights to request
            access to and correction of their personal data.{" "}
          </p>

          <p>The availability and scope of other rights depend on the law applicable to you.</p>

          <h2>16. How to Exercise Your Rights</h2>

          <p>
            To exercise a privacy right or make a privacy enquiry, please contact Jobs.ac.cn through
            the contact details provided on the website.
          </p>

          <p>We may need to verify your identity before fulfilling certain requests.</p>

          <p>
            Where your request relates to information processed through Cavuno, we may use the tools
            and procedures available through the Cavuno platform to locate, correct, export or
            delete relevant information.
          </p>

          <p>
            Where another organisation is independently responsible for processing your information,
            such as an employer or an external application provider, you may need to contact that
            organisation directly.
          </p>

          <h2>17. Sensitive Personal Information</h2>

          <p>
            You should avoid submitting sensitive personal information through public profiles or
            other publicly accessible areas unless it is necessary and appropriate.
          </p>

          <p>
            Where sensitive personal information is collected or processed, we will handle it in
            accordance with applicable law.
          </p>

          <h2>18. Marketing Communications</h2>

          <p>
            We may send communications necessary to operate your account or provide requested
            Services.
          </p>

          <p>
            Where permitted by applicable law, we may also send promotional communications about
            Jobs.ac.cn, recruitment services, products, events or other relevant information.
          </p>

          <p>
            You may unsubscribe from marketing communications by using the unsubscribe mechanism
            provided in the communication or by contacting us.
          </p>

          <h2>19. Analytics, Advertising and Automated Technologies</h2>

          <p>
            Jobs.ac.cn may use analytics, advertising and automated technologies to operate and
            improve the Services.
          </p>

          <p>
            Depending on the services enabled, these may include Google Analytics, Google Ads,
            Google AdSense, Meta Pixel, LinkedIn Insight Tag, Google Tag Manager and other
            third-party technologies.
          </p>

          <p>
            These technologies may process information such as browser or device information, IP
            address, pages viewed, interactions, traffic sources, advertising attribution and other
            usage information.
          </p>

          <p>
            Further information is provided in our <strong>Cookie Policy</strong>.
          </p>

          <h2>20. Artificial Intelligence and Automated Processing</h2>

          <p>
            Where Jobs.ac.cn or its technology providers use artificial intelligence or automated
            systems, these systems may support functions such as search, matching, categorisation,
            recommendations, spam detection, fraud prevention, content processing or service
            improvement.
          </p>

          <p>
            Any automated processing will be carried out in accordance with applicable law and the
            purposes described in this Privacy Policy.
          </p>

          <p>
            Where a third-party provider processes personal information for an AI-enabled feature,
            the relevant provider may act as a processor or subprocessor for that service.
          </p>

          <h2>21. Children's Privacy</h2>

          <p>
            The Services are intended primarily for adults seeking or providing employment
            opportunities. We do not knowingly collect personal information from children where
            doing so would be prohibited by applicable law.
          </p>

          <p>
            If you believe that a child has provided personal information to us inappropriately,
            please contact us.
          </p>

          <h2>22. Third-Party Websites and Services</h2>

          <p>
            The Services may contain links to third-party websites, employer career pages, applicant
            tracking systems, payment services and other external services.
          </p>

          <p>
            We are not responsible for the privacy practices or security of third-party websites and
            services that we do not control.
          </p>

          <p>
            You should review the privacy policy of the relevant third party before providing
            personal information to it.
          </p>

          <h2>23. Changes to This Privacy Policy</h2>

          <p>
            We may update this Privacy Policy from time to time to reflect changes in the Services,
            our technology providers, our data practices or applicable law.
          </p>

          <p>
            Where material changes are made, we may provide an appropriate notice through the
            Services or by other reasonable means.
          </p>

          <p>
            The updated Privacy Policy will become effective when posted unless otherwise stated.
          </p>

          <h2>24. Contact Us</h2>

          <p>
            If you have questions about this Privacy Policy, our handling of personal information or
            your privacy rights, please contact Jobs.ac.cn through the contact details provided on
            the Jobs.ac.cn website.
          </p>

          <h2>25. Complaints</h2>

          <p>
            If you have concerns about how Jobs.ac.cn handles your personal information, please
            contact us first so that we can investigate the matter.
          </p>

          <p>
            You may also have the right to lodge a complaint with the relevant privacy or data
            protection authority in your jurisdiction.
          </p>
        </>
      );
    },
  },
  de: {
    placeholder: true,
    title: "Datenschutzerklärung",
    description:
      "Platzhalter-Datenschutzerklärung. Beschreibung und Inhalt vor dem Launch ersetzen.",
    Body: function PrivacyPolicyBodyDe() {
      return (
        <>
          <LegalPlaceholderCallout />
          <h2>Was diese Seite abdecken sollte</h2>
          <p>
            Ersetzen Sie diesen Abschnitt nach rechtlicher Prüfung durch Ihre Datenschutzerklärung.
            Lassen Sie keine Template-Gerüste in der Produktion.
          </p>
          <h2>Was zu dokumentieren ist</h2>
          <p>
            Betreiber listen üblicherweise auf, welche personenbezogenen Daten erhoben werden, wozu
            sie genutzt werden, wie lange sie gespeichert bleiben und wie man Sie erreichen kann.
            Formulieren Sie das für Ihr Produkt — dieses Template enthält keine solchen Angaben.
          </p>
          <h2>So erreichen Sie uns</h2>
          <p>Ersetzen Sie diesen Abschnitt durch den Kontaktweg für Datenschutzfragen.</p>
        </>
      );
    },
  },
  fr: {
    placeholder: true,
    title: "Politique de confidentialité",
    description:
      "Politique de confidentialité d'espace réservé. Remplacez cette description et le corps avant le lancement.",
    Body: function PrivacyPolicyBodyFr() {
      return (
        <>
          <LegalPlaceholderCallout />
          <h2>Ce que cette page doit couvrir</h2>
          <p>
            Remplacez cette section par votre politique de confidentialité après relecture
            juridique. Ne laissez pas le contenu modèle en production.
          </p>
          <h2>Ce qu&apos;il faut documenter</h2>
          <p>
            Les opérateurs listent généralement les données personnelles collectées, pourquoi elles
            sont utilisées, combien de temps elles sont conservées et comment vous contacter.
            Rédigez ces faits pour votre produit — ce modèle ne les énonce pas.
          </p>
          <h2>Nous contacter</h2>
          <p>
            Remplacez cette section par le canal de contact pour les questions de confidentialité.
          </p>
        </>
      );
    },
  },
  es: {
    placeholder: true,
    title: "Política de privacidad",
    description:
      "Política de privacidad de ejemplo. Sustituye esta descripción y este contenido antes del lanzamiento.",
    Body: function PrivacyPolicyBodyEs() {
      return (
        <>
          <LegalPlaceholderCallout />
          <h2>Qué debe cubrir esta página</h2>
          <p>
            Sustituye esta sección por tu política de privacidad tras la revisión legal. No dejes la
            plantilla en producción.
          </p>
          <h2>Qué documentar</h2>
          <p>
            Normalmente se indica qué datos personales se recogen, con qué finalidad, cuánto tiempo
            se conservan y cómo contactar contigo. Redacta esos datos para tu producto: esta
            plantilla no los define.
          </p>
          <h2>Cómo contactarnos</h2>
          <p>Sustituye esta sección por el canal de contacto para consultas sobre privacidad.</p>
        </>
      );
    },
  },
  pl: {
    placeholder: true,
    title: "Polityka prywatności",
    description: "Przykładowa polityka prywatności. Zastąp ten opis i treść przed uruchomieniem.",
    Body: function PrivacyPolicyBodyPl() {
      return (
        <>
          <LegalPlaceholderCallout />
          <h2>Co powinna zawierać ta strona</h2>
          <p>
            Zastąp tę sekcję swoją polityką prywatności po weryfikacji prawnej. Nie zostawiaj
            szablonu w wersji produkcyjnej.
          </p>
          <h2>Co udokumentować</h2>
          <p>
            Zwykle podaje się, jakie dane osobowe są zbierane, w jakim celu, jak długo są
            przechowywane i jak się z Tobą skontaktować. Opisz te fakty dla swojego produktu —
            szablon ich nie określa.
          </p>
          <h2>Jak się z nami skontaktować</h2>
          <p>Zastąp tę sekcję kanałem kontaktu w sprawach dotyczących prywatności.</p>
        </>
      );
    },
  },
  nl: {
    placeholder: true,
    title: "Privacybeleid",
    description: "Tijdelijk privacybeleid. Vervang deze beschrijving en inhoud vóór de lancering.",
    Body: function PrivacyPolicyBodyNl() {
      return (
        <>
          <LegalPlaceholderCallout />
          <h2>Wat deze pagina moet behandelen</h2>
          <p>
            Vervang dit onderdeel na juridische beoordeling door uw privacybeleid. Laat geen
            tijdelijke sjabloontekst in de productieomgeving staan.
          </p>
          <h2>Wat u moet vastleggen</h2>
          <p>
            Beheerders vermelden doorgaans welke persoonsgegevens worden verzameld, waarom ze worden
            gebruikt, hoelang ze worden bewaard en hoe mensen contact met u kunnen opnemen.
            Beschrijf deze feiten voor uw product — dit sjabloon bevat daarover geen verklaringen.
          </p>
          <h2>Contact met ons opnemen</h2>
          <p>Vervang dit onderdeel door het contactkanaal voor privacyvragen.</p>
        </>
      );
    },
  },
  "zh-cn": {
    placeholder: false,
    title: "隐私政策",
    description:
      "了解 Jobs.ac.cn 在您使用我们的服务时如何收集、使用、存储、保护和共享您的个人信息。",
    Body: function PrivacyPolicyBodyEn() {
      return (
        <>
          <p>
            <strong>Last updated:</strong> 3 October 2026
          </p>

          <p>
            This Privacy Policy explains how Jobs.ac.cn (“Jobs.ac.cn”, “we”, “us” or “our”)
            collects, uses, stores, processes and discloses personal information when you visit or
            use the Jobs.ac.cn website, platform and related services (collectively, the{" "}
            <strong>“Services”</strong>).
          </p>

          <p>
            Jobs.ac.cn is operated by <strong>The Educationist Limited</strong>. The Jobs.ac.cn
            platform is powered by <strong>Cavuno</strong>, which provides the platform, database,
            application and related technology infrastructure used to operate the Services.
          </p>

          <p>
            This Privacy Policy should be read together with our <strong>Terms of Use</strong> and{" "}
            <strong>Cookie Policy</strong>.
          </p>

          <h2>1. Who Is Responsible for Your Personal Information?</h2>

          <p>
            The Educationist Limited operates Jobs.ac.cn and determines how personal information is
            collected and used in connection with the Services, subject to applicable law.
          </p>

          <p>
            Jobs.ac.cn uses <strong>Cavuno</strong>, operated by <strong>Wollemia Pty Ltd</strong>,
            as a technology and platform service provider.
          </p>

          <p>
            For personal information collected through Jobs.ac.cn and processed through the Cavuno
            platform on our behalf, Cavuno acts as a{" "}
            <strong>data processor or service provider</strong>. Cavuno's current Data Processing
            Agreement describes its role as processing customer job-board personal data on behalf of
            the job-board operator.{" "}
          </p>

          <h2>2. Personal Information We Collect</h2>

          <p>The information we collect depends on how you use the Services.</p>

          <h3>2.1 Visitors</h3>

          <p>
            You may browse many areas of Jobs.ac.cn without creating an account. When you visit the
            Services, we may automatically receive technical and usage information such as:
          </p>

          <ul>
            <li>IP address;</li>
            <li>browser and browser version;</li>
            <li>device type and operating system;</li>
            <li>pages and job listings viewed;</li>
            <li>referring and exit pages;</li>
            <li>dates and times of visits;</li>
            <li>general location information derived from technical data;</li>
            <li>interaction and usage information; and</li>
            <li>security, diagnostic and performance information.</li>
          </ul>

          <h3>2.2 Candidate Accounts and Profiles</h3>

          <p>If you create a candidate account or profile, we may collect information such as:</p>

          <ul>
            <li>name;</li>
            <li>email address;</li>
            <li>password and authentication information;</li>
            <li>contact information;</li>
            <li>employment history;</li>
            <li>education and qualifications;</li>
            <li>professional experience;</li>
            <li>skills and areas of expertise;</li>
            <li>career interests and preferences;</li>
            <li>CVs, résumés and supporting documents;</li>
            <li>profile photographs;</li>
            <li>saved jobs, alerts and preferences; and</li>
            <li>other information you choose to provide.</li>
          </ul>

          <p>
            Some candidate profile information may be made available to employers or other users
            where the relevant profile or directory functionality has been enabled and according to
            the visibility settings available to you.
          </p>

          <h3>2.3 Job Applications</h3>

          <p>
            When you apply for a job through Jobs.ac.cn, we may collect information contained in or
            associated with your application, including:
          </p>

          <ul>
            <li>the position for which you apply;</li>
            <li>application form information;</li>
            <li>your CV or résumé;</li>
            <li>cover letters and supporting documents;</li>
            <li>answers to application questions;</li>
            <li>application status and related records;</li>
            <li>communications relating to the application; and</li>
            <li>other information you choose to submit as part of the application.</li>
          </ul>

          <p>
            Application information is private recruitment information and is{" "}
            <strong>not “Your Content”</strong> for the purposes of our Terms of Use.
          </p>

          <h3>2.4 External Job Applications</h3>

          <p>
            Some job listings may direct you to an employer's website, careers page, applicant
            tracking system or other third-party application service.
          </p>

          <p>
            Where you follow an external application link, the application is handled by the
            relevant employer or third-party service rather than by Jobs.ac.cn. Cavuno may record
            that an application link was clicked, but it does not receive the completed application
            submitted on the external site or system.{" "}
          </p>

          <p>
            Once you leave Jobs.ac.cn, the third party's privacy policy will apply to information
            you provide to that third party.
          </p>

          <h3>2.5 Employer and Recruiter Accounts</h3>

          <p>
            If you create or use an employer, recruiter or organisation account, we may collect:
          </p>

          <ul>
            <li>your name;</li>
            <li>email address;</li>
            <li>telephone number and other contact details;</li>
            <li>job title and professional role;</li>
            <li>organisation name and information;</li>
            <li>account and authentication information;</li>
            <li>job-posting and recruitment activity;</li>
            <li>billing and transaction information; and</li>
            <li>communications with us.</li>
          </ul>

          <h3>2.6 Job Listings and Published Employer Content</h3>

          <p>
            Employers may submit information for publication on Jobs.ac.cn, including job titles,
            job descriptions, employer descriptions, locations, salary information, logos, images,
            application instructions and other recruitment material.
          </p>

          <p>
            Information intentionally submitted for publication is treated as public or publishable
            information and may be indexed, reproduced, distributed, syndicated, translated,
            reformatted or promoted through other channels in accordance with our Terms of Use.
          </p>

          <h3>2.7 Job Alerts and Subscriptions</h3>

          <p>
            If you subscribe to job alerts or other optional Services, we may collect your email
            address, optional name, subscription preferences, the purpose for which the subscription
            was requested, and records relating to your subscription, consent or withdrawal of
            consent.
          </p>

          <h3>2.8 Payments and Transactions</h3>

          <p>
            Where you purchase paid Services, we may process information relating to the
            transaction, including the service purchased, transaction amount, payment status,
            invoices and billing information.
          </p>

          <p>
            Payment card information may be collected and processed directly by our payment service
            provider. We do not generally receive or store full payment card numbers.
          </p>

          <h3>2.9 Communications</h3>

          <p>
            We may collect information contained in enquiries, support requests, complaints,
            feedback, email communications and other communications you send to us.
          </p>

          <h2>3. Information We Collect Automatically</h2>

          <p>
            We may automatically collect information about your device and use of the Services
            through server logs, Cookies and Similar Technologies.
          </p>

          <p>
            This may include IP addresses, browser information, operating system, device
            information, pages visited, search activity, job interactions, referring URLs, session
            information and other technical or usage information.
          </p>

          <p>
            Our use of Cookies and Similar Technologies is described in our{" "}
            <strong>Cookie Policy</strong>.
          </p>

          <h2>4. How We Use Personal Information</h2>

          <p>We may use personal information to:</p>

          <ul>
            <li>provide and operate Jobs.ac.cn;</li>
            <li>create and maintain accounts;</li>
            <li>provide candidate and employer functionality;</li>
            <li>facilitate job searches and recruitment;</li>
            <li>process and manage native job applications;</li>
            <li>connect candidates and employers;</li>
            <li>provide job alerts and other requested services;</li>
            <li>publish and distribute job listings;</li>
            <li>process payments and billing;</li>
            <li>provide customer support;</li>
            <li>maintain security and prevent fraud, spam and abuse;</li>
            <li>monitor and improve the performance of the Services;</li>
            <li>analyse usage and develop new features;</li>
            <li>communicate with you about your account and the Services;</li>
            <li>
              send marketing communications where permitted by law and, where required, with your
              consent;
            </li>
            <li>measure advertising and marketing activity where applicable;</li>
            <li>comply with legal and regulatory obligations; and</li>
            <li>establish, exercise or defend legal claims.</li>
          </ul>

          <h2>5. Our Legal Grounds for Processing</h2>

          <p>
            Where applicable law requires a legal basis for processing personal information, we may
            rely on:
          </p>

          <ul>
            <li>
              <strong>contractual necessity</strong>, where processing is necessary to provide the
              Services you request;
            </li>
            <li>
              <strong>legitimate interests</strong>, where permitted by law, including operating,
              securing and improving the Services;
            </li>
            <li>
              <strong>consent</strong>, where consent is required, including for certain marketing,
              advertising or non-essential Cookies;
            </li>
            <li>
              <strong>legal obligations</strong>, where processing is necessary to comply with law;
              and
            </li>
            <li>other lawful grounds available under applicable law.</li>
          </ul>

          <p>
            Where we rely on consent, you may withdraw consent where permitted by applicable law.
          </p>

          <h2>6. Candidate Applications and Employer Access</h2>

          <p>
            When you submit a native application through Jobs.ac.cn, information in your application
            may be made available to the employer or organisation responsible for the relevant
            position.
          </p>

          <p>
            The employer may use that information for recruitment, selection, interviews and related
            employment purposes. Employers are responsible for complying with applicable privacy and
            employment laws in relation to their own recruitment activities.
          </p>

          <p>
            Jobs.ac.cn does not guarantee that an employer will review an application, contact a
            candidate or offer employment.
          </p>

          <h2>7. Where Your Personal Information Is Hosted</h2>

          <p>
            <strong>
              Jobs.ac.cn uses Cavuno to host and operate the platform and to store and process
              personal information associated with the Services.
            </strong>
          </p>

          <p>This includes, depending on the features you use:</p>

          <ul>
            <li>candidate account information;</li>
            <li>candidate profile information;</li>
            <li>CVs and résumés;</li>
            <li>native job application information;</li>
            <li>employer and recruiter account information;</li>
            <li>job listing and recruitment data;</li>
            <li>job-alert subscription information;</li>
            <li>authentication and session information;</li>
            <li>platform activity and related records; and</li>
            <li>other data required to provide the Jobs.ac.cn Services.</li>
          </ul>

          <p>
            Cavuno's current Data Processing Agreement states that it processes customer job-board
            data on behalf of the job-board operator, including hosting the job board, operating
            candidate profiles and native applications, storing CVs, delivering job alerts and
            related platform functions.{" "}
          </p>

          <p>
            Cavuno does not acquire ownership of your personal information merely because it hosts
            or processes it for Jobs.ac.cn.
          </p>

          <h2>8. Cavuno's Role as Our Technology Provider</h2>

          <p>
            Cavuno is operated by <strong>Wollemia Pty Ltd</strong> and provides the technology
            infrastructure used by Jobs.ac.cn.
          </p>

          <p>Cavuno may process personal information on our behalf for purposes including:</p>

          <ul>
            <li>data storage and database services;</li>
            <li>account registration and authentication;</li>
            <li>candidate and employer profile management;</li>
            <li>job listing management;</li>
            <li>native job applications;</li>
            <li>job alerts and transactional communications;</li>
            <li>search and platform functionality;</li>
            <li>security and abuse prevention;</li>
            <li>analytics and platform monitoring; and</li>
            <li>technical maintenance and other services necessary to operate the platform.</li>
          </ul>

          <p>
            Cavuno's public DPA states that it acts as a processor for customer job-board personal
            data and processes that information according to the job-board operator's
            instructions.{" "}
          </p>

          <p>
            For more information about Cavuno's own privacy practices, please see{" "}
            <a href="https://cavuno.com/privacy-policy">Cavuno's Privacy Policy</a> and{" "}
            <a href="https://cavuno.com/dpa">Cavuno's Data Processing Agreement</a>.
          </p>

          <h2>9. Cavuno's Infrastructure and Subprocessors</h2>

          <p>
            To provide the Cavuno platform, Cavuno may use third-party infrastructure and
            subprocessors.
          </p>

          <p>
            Cavuno's current public Privacy Policy states that its primary customer-data processing
            is in the <strong>United States</strong>, including infrastructure in AWS us-east-1 and
            other United States-based infrastructure and service providers. The exact providers and
            processing locations may change over time as Cavuno updates its infrastructure and
            subprocessors.{" "}
          </p>

          <p>
            Accordingly, personal information submitted to Jobs.ac.cn may be stored or processed
            outside Hong Kong, Mainland China or the country in which you are located.
          </p>

          <h2>10. How We Share Personal Information</h2>

          <p>
            We may share personal information where reasonably necessary to provide the Services or
            where permitted or required by law.
          </p>

          <h3>10.1 Cavuno</h3>

          <p>
            We share or make available personal information to Cavuno so that it can host, operate
            and maintain the Jobs.ac.cn platform on our behalf.
          </p>

          <h3>10.2 Employers and Recruiters</h3>

          <p>
            Where you apply for a job or otherwise choose to interact with an employer, relevant
            information may be provided to that employer for recruitment purposes.
          </p>

          <h3>10.3 Service Providers</h3>

          <p>We may use other service providers for functions such as:</p>

          <ul>
            <li>hosting and infrastructure;</li>
            <li>email and communications;</li>
            <li>payment processing;</li>
            <li>security and fraud prevention;</li>
            <li>analytics;</li>
            <li>advertising and marketing;</li>
            <li>customer support; and</li>
            <li>other technical or operational services.</li>
          </ul>

          <h3>10.4 Advertising and Analytics Providers</h3>

          <p>
            Where enabled, third-party services such as Google Analytics, Google Ads, Google
            AdSense, Meta and LinkedIn may process information relating to your use of Jobs.ac.cn
            for analytics, advertising, conversion measurement or related purposes.
          </p>

          <p>
            The use of these technologies is described further in our <strong>Cookie Policy</strong>{" "}
            and may be subject to consent requirements under applicable law.
          </p>

          <h3>10.5 Legal and Regulatory Disclosure</h3>

          <p>
            We may disclose personal information where reasonably necessary to comply with
            applicable law, regulation, legal process, court order or lawful governmental request.
          </p>

          <h3>10.6 Business Transactions</h3>

          <p>
            If The Educationist Limited or Jobs.ac.cn is involved in a merger, acquisition,
            restructuring, financing, sale of assets or similar transaction, personal information
            may be transferred as part of that transaction, subject to applicable law.
          </p>

          <h2>11. International Transfers</h2>

          <p>
            Because Jobs.ac.cn uses Cavuno and other service providers that may operate
            internationally, your personal information may be transferred to or processed in
            countries other than the country in which you are located.
          </p>

          <p>
            Where applicable law imposes requirements concerning international transfers, we will
            take reasonable steps to comply with those requirements, including using appropriate
            contractual, organisational or other safeguards where required.
          </p>

          <p>
            For individuals in Mainland China, cross-border processing may be subject to the
            requirements of the Personal Information Protection Law and related regulations. The
            PIPL applies in specified circumstances to processing of Mainland China individuals'
            personal information outside Mainland China and contains requirements governing certain
            cross-border transfers.{" "}
          </p>

          <h2>12. Public Information and Published Content</h2>

          <p>Some information submitted to Jobs.ac.cn is intended to be publicly accessible.</p>

          <p>
            This may include published job listings, employer information, job titles, job
            descriptions, logos, images and other information intentionally provided for
            publication.
          </p>

          <p>
            Publicly available information may be indexed by search engines and may be reproduced,
            syndicated, translated, reformatted or distributed through third-party platforms in
            accordance with our Terms of Use.
          </p>

          <p>
            Information in a private account, candidate profile, application or other restricted
            area is not treated as publicly published merely because you use the Services.
          </p>

          <h2>13. Retention of Personal Information</h2>

          <p>
            We retain personal information for as long as reasonably necessary for the purposes for
            which it was collected, including to:
          </p>

          <ul>
            <li>provide the Services;</li>
            <li>maintain accounts and records;</li>
            <li>process applications and recruitment activity;</li>
            <li>provide job alerts and other requested services;</li>
            <li>comply with legal and regulatory requirements;</li>
            <li>resolve disputes;</li>
            <li>enforce agreements; and</li>
            <li>protect the security and integrity of the Services.</li>
          </ul>

          <p>
            When personal information is no longer required, it may be deleted, anonymised or
            otherwise securely disposed of, subject to legal, regulatory, security, backup and
            technical requirements.
          </p>

          <p>
            Because Jobs.ac.cn uses Cavuno as its platform provider, deletion or retention of
            information may also be affected by Cavuno's platform architecture, backups and legally
            required retention periods.
          </p>

          <h2>14. Data Security</h2>

          <p>
            We take reasonable technical and organisational measures designed to protect personal
            information against unauthorised access, disclosure, alteration, loss, misuse or
            destruction.
          </p>

          <p>
            These measures may include access controls, authentication, encryption, monitoring,
            security controls and other safeguards provided by Jobs.ac.cn, Cavuno and relevant
            service providers.
          </p>

          <p>
            No internet transmission or electronic storage system can be guaranteed to be completely
            secure.
          </p>

          <h2>15. Your Privacy Rights</h2>

          <p>
            Depending on your location and applicable law, you may have rights relating to your
            personal information, including the right to:
          </p>

          <ul>
            <li>request access to personal information held about you;</li>
            <li>request correction of inaccurate or incomplete personal information;</li>
            <li>request deletion of personal information where applicable;</li>
            <li>withdraw consent where processing is based on consent;</li>
            <li>object to or request restriction of certain processing where applicable;</li>
            <li>request portability of certain information where applicable; and</li>
            <li>make a complaint to a relevant privacy or data protection authority.</li>
          </ul>

          <p>
            Under Hong Kong's Personal Data (Privacy) Ordinance, individuals have rights to request
            access to and correction of their personal data.{" "}
          </p>

          <p>The availability and scope of other rights depend on the law applicable to you.</p>

          <h2>16. How to Exercise Your Rights</h2>

          <p>
            To exercise a privacy right or make a privacy enquiry, please contact Jobs.ac.cn through
            the contact details provided on the website.
          </p>

          <p>We may need to verify your identity before fulfilling certain requests.</p>

          <p>
            Where your request relates to information processed through Cavuno, we may use the tools
            and procedures available through the Cavuno platform to locate, correct, export or
            delete relevant information.
          </p>

          <p>
            Where another organisation is independently responsible for processing your information,
            such as an employer or an external application provider, you may need to contact that
            organisation directly.
          </p>

          <h2>17. Sensitive Personal Information</h2>

          <p>
            You should avoid submitting sensitive personal information through public profiles or
            other publicly accessible areas unless it is necessary and appropriate.
          </p>

          <p>
            Where sensitive personal information is collected or processed, we will handle it in
            accordance with applicable law.
          </p>

          <h2>18. Marketing Communications</h2>

          <p>
            We may send communications necessary to operate your account or provide requested
            Services.
          </p>

          <p>
            Where permitted by applicable law, we may also send promotional communications about
            Jobs.ac.cn, recruitment services, products, events or other relevant information.
          </p>

          <p>
            You may unsubscribe from marketing communications by using the unsubscribe mechanism
            provided in the communication or by contacting us.
          </p>

          <h2>19. Analytics, Advertising and Automated Technologies</h2>

          <p>
            Jobs.ac.cn may use analytics, advertising and automated technologies to operate and
            improve the Services.
          </p>

          <p>
            Depending on the services enabled, these may include Google Analytics, Google Ads,
            Google AdSense, Meta Pixel, LinkedIn Insight Tag, Google Tag Manager and other
            third-party technologies.
          </p>

          <p>
            These technologies may process information such as browser or device information, IP
            address, pages viewed, interactions, traffic sources, advertising attribution and other
            usage information.
          </p>

          <p>
            Further information is provided in our <strong>Cookie Policy</strong>.
          </p>

          <h2>20. Artificial Intelligence and Automated Processing</h2>

          <p>
            Where Jobs.ac.cn or its technology providers use artificial intelligence or automated
            systems, these systems may support functions such as search, matching, categorisation,
            recommendations, spam detection, fraud prevention, content processing or service
            improvement.
          </p>

          <p>
            Any automated processing will be carried out in accordance with applicable law and the
            purposes described in this Privacy Policy.
          </p>

          <p>
            Where a third-party provider processes personal information for an AI-enabled feature,
            the relevant provider may act as a processor or subprocessor for that service.
          </p>

          <h2>21. Children's Privacy</h2>

          <p>
            The Services are intended primarily for adults seeking or providing employment
            opportunities. We do not knowingly collect personal information from children where
            doing so would be prohibited by applicable law.
          </p>

          <p>
            If you believe that a child has provided personal information to us inappropriately,
            please contact us.
          </p>

          <h2>22. Third-Party Websites and Services</h2>

          <p>
            The Services may contain links to third-party websites, employer career pages, applicant
            tracking systems, payment services and other external services.
          </p>

          <p>
            We are not responsible for the privacy practices or security of third-party websites and
            services that we do not control.
          </p>

          <p>
            You should review the privacy policy of the relevant third party before providing
            personal information to it.
          </p>

          <h2>23. Changes to This Privacy Policy</h2>

          <p>
            We may update this Privacy Policy from time to time to reflect changes in the Services,
            our technology providers, our data practices or applicable law.
          </p>

          <p>
            Where material changes are made, we may provide an appropriate notice through the
            Services or by other reasonable means.
          </p>

          <p>
            The updated Privacy Policy will become effective when posted unless otherwise stated.
          </p>

          <h2>24. Contact Us</h2>

          <p>
            If you have questions about this Privacy Policy, our handling of personal information or
            your privacy rights, please contact Jobs.ac.cn through the contact details provided on
            the Jobs.ac.cn website.
          </p>

          <h2>25. Complaints</h2>

          <p>
            If you have concerns about how Jobs.ac.cn handles your personal information, please
            contact us first so that we can investigate the matter.
          </p>

          <p>
            You may also have the right to lodge a complaint with the relevant privacy or data
            protection authority in your jurisdiction.
          </p>
        </>
      );
    },
  },
  "zh-hk": {
    placeholder: false,
    title: "私隱政策",
    description:
      "了解 Jobs.ac.cn 在您使用我們的服務時如何收集、使用、儲存、保護及共享您的個人資料。",
    Body: function PrivacyPolicyBodyEn() {
      return (
        <>
          <p>
            <strong>Last updated:</strong> 3 October 2026
          </p>

          <p>
            This Privacy Policy explains how Jobs.ac.cn (“Jobs.ac.cn”, “we”, “us” or “our”)
            collects, uses, stores, processes and discloses personal information when you visit or
            use the Jobs.ac.cn website, platform and related services (collectively, the{" "}
            <strong>“Services”</strong>).
          </p>

          <p>
            Jobs.ac.cn is operated by <strong>The Educationist Limited</strong>. The Jobs.ac.cn
            platform is powered by <strong>Cavuno</strong>, which provides the platform, database,
            application and related technology infrastructure used to operate the Services.
          </p>

          <p>
            This Privacy Policy should be read together with our <strong>Terms of Use</strong> and{" "}
            <strong>Cookie Policy</strong>.
          </p>

          <h2>1. Who Is Responsible for Your Personal Information?</h2>

          <p>
            The Educationist Limited operates Jobs.ac.cn and determines how personal information is
            collected and used in connection with the Services, subject to applicable law.
          </p>

          <p>
            Jobs.ac.cn uses <strong>Cavuno</strong>, operated by <strong>Wollemia Pty Ltd</strong>,
            as a technology and platform service provider.
          </p>

          <p>
            For personal information collected through Jobs.ac.cn and processed through the Cavuno
            platform on our behalf, Cavuno acts as a{" "}
            <strong>data processor or service provider</strong>. Cavuno's current Data Processing
            Agreement describes its role as processing customer job-board personal data on behalf of
            the job-board operator.{" "}
          </p>

          <h2>2. Personal Information We Collect</h2>

          <p>The information we collect depends on how you use the Services.</p>

          <h3>2.1 Visitors</h3>

          <p>
            You may browse many areas of Jobs.ac.cn without creating an account. When you visit the
            Services, we may automatically receive technical and usage information such as:
          </p>

          <ul>
            <li>IP address;</li>
            <li>browser and browser version;</li>
            <li>device type and operating system;</li>
            <li>pages and job listings viewed;</li>
            <li>referring and exit pages;</li>
            <li>dates and times of visits;</li>
            <li>general location information derived from technical data;</li>
            <li>interaction and usage information; and</li>
            <li>security, diagnostic and performance information.</li>
          </ul>

          <h3>2.2 Candidate Accounts and Profiles</h3>

          <p>If you create a candidate account or profile, we may collect information such as:</p>

          <ul>
            <li>name;</li>
            <li>email address;</li>
            <li>password and authentication information;</li>
            <li>contact information;</li>
            <li>employment history;</li>
            <li>education and qualifications;</li>
            <li>professional experience;</li>
            <li>skills and areas of expertise;</li>
            <li>career interests and preferences;</li>
            <li>CVs, résumés and supporting documents;</li>
            <li>profile photographs;</li>
            <li>saved jobs, alerts and preferences; and</li>
            <li>other information you choose to provide.</li>
          </ul>

          <p>
            Some candidate profile information may be made available to employers or other users
            where the relevant profile or directory functionality has been enabled and according to
            the visibility settings available to you.
          </p>

          <h3>2.3 Job Applications</h3>

          <p>
            When you apply for a job through Jobs.ac.cn, we may collect information contained in or
            associated with your application, including:
          </p>

          <ul>
            <li>the position for which you apply;</li>
            <li>application form information;</li>
            <li>your CV or résumé;</li>
            <li>cover letters and supporting documents;</li>
            <li>answers to application questions;</li>
            <li>application status and related records;</li>
            <li>communications relating to the application; and</li>
            <li>other information you choose to submit as part of the application.</li>
          </ul>

          <p>
            Application information is private recruitment information and is{" "}
            <strong>not “Your Content”</strong> for the purposes of our Terms of Use.
          </p>

          <h3>2.4 External Job Applications</h3>

          <p>
            Some job listings may direct you to an employer's website, careers page, applicant
            tracking system or other third-party application service.
          </p>

          <p>
            Where you follow an external application link, the application is handled by the
            relevant employer or third-party service rather than by Jobs.ac.cn. Cavuno may record
            that an application link was clicked, but it does not receive the completed application
            submitted on the external site or system.{" "}
          </p>

          <p>
            Once you leave Jobs.ac.cn, the third party's privacy policy will apply to information
            you provide to that third party.
          </p>

          <h3>2.5 Employer and Recruiter Accounts</h3>

          <p>
            If you create or use an employer, recruiter or organisation account, we may collect:
          </p>

          <ul>
            <li>your name;</li>
            <li>email address;</li>
            <li>telephone number and other contact details;</li>
            <li>job title and professional role;</li>
            <li>organisation name and information;</li>
            <li>account and authentication information;</li>
            <li>job-posting and recruitment activity;</li>
            <li>billing and transaction information; and</li>
            <li>communications with us.</li>
          </ul>

          <h3>2.6 Job Listings and Published Employer Content</h3>

          <p>
            Employers may submit information for publication on Jobs.ac.cn, including job titles,
            job descriptions, employer descriptions, locations, salary information, logos, images,
            application instructions and other recruitment material.
          </p>

          <p>
            Information intentionally submitted for publication is treated as public or publishable
            information and may be indexed, reproduced, distributed, syndicated, translated,
            reformatted or promoted through other channels in accordance with our Terms of Use.
          </p>

          <h3>2.7 Job Alerts and Subscriptions</h3>

          <p>
            If you subscribe to job alerts or other optional Services, we may collect your email
            address, optional name, subscription preferences, the purpose for which the subscription
            was requested, and records relating to your subscription, consent or withdrawal of
            consent.
          </p>

          <h3>2.8 Payments and Transactions</h3>

          <p>
            Where you purchase paid Services, we may process information relating to the
            transaction, including the service purchased, transaction amount, payment status,
            invoices and billing information.
          </p>

          <p>
            Payment card information may be collected and processed directly by our payment service
            provider. We do not generally receive or store full payment card numbers.
          </p>

          <h3>2.9 Communications</h3>

          <p>
            We may collect information contained in enquiries, support requests, complaints,
            feedback, email communications and other communications you send to us.
          </p>

          <h2>3. Information We Collect Automatically</h2>

          <p>
            We may automatically collect information about your device and use of the Services
            through server logs, Cookies and Similar Technologies.
          </p>

          <p>
            This may include IP addresses, browser information, operating system, device
            information, pages visited, search activity, job interactions, referring URLs, session
            information and other technical or usage information.
          </p>

          <p>
            Our use of Cookies and Similar Technologies is described in our{" "}
            <strong>Cookie Policy</strong>.
          </p>

          <h2>4. How We Use Personal Information</h2>

          <p>We may use personal information to:</p>

          <ul>
            <li>provide and operate Jobs.ac.cn;</li>
            <li>create and maintain accounts;</li>
            <li>provide candidate and employer functionality;</li>
            <li>facilitate job searches and recruitment;</li>
            <li>process and manage native job applications;</li>
            <li>connect candidates and employers;</li>
            <li>provide job alerts and other requested services;</li>
            <li>publish and distribute job listings;</li>
            <li>process payments and billing;</li>
            <li>provide customer support;</li>
            <li>maintain security and prevent fraud, spam and abuse;</li>
            <li>monitor and improve the performance of the Services;</li>
            <li>analyse usage and develop new features;</li>
            <li>communicate with you about your account and the Services;</li>
            <li>
              send marketing communications where permitted by law and, where required, with your
              consent;
            </li>
            <li>measure advertising and marketing activity where applicable;</li>
            <li>comply with legal and regulatory obligations; and</li>
            <li>establish, exercise or defend legal claims.</li>
          </ul>

          <h2>5. Our Legal Grounds for Processing</h2>

          <p>
            Where applicable law requires a legal basis for processing personal information, we may
            rely on:
          </p>

          <ul>
            <li>
              <strong>contractual necessity</strong>, where processing is necessary to provide the
              Services you request;
            </li>
            <li>
              <strong>legitimate interests</strong>, where permitted by law, including operating,
              securing and improving the Services;
            </li>
            <li>
              <strong>consent</strong>, where consent is required, including for certain marketing,
              advertising or non-essential Cookies;
            </li>
            <li>
              <strong>legal obligations</strong>, where processing is necessary to comply with law;
              and
            </li>
            <li>other lawful grounds available under applicable law.</li>
          </ul>

          <p>
            Where we rely on consent, you may withdraw consent where permitted by applicable law.
          </p>

          <h2>6. Candidate Applications and Employer Access</h2>

          <p>
            When you submit a native application through Jobs.ac.cn, information in your application
            may be made available to the employer or organisation responsible for the relevant
            position.
          </p>

          <p>
            The employer may use that information for recruitment, selection, interviews and related
            employment purposes. Employers are responsible for complying with applicable privacy and
            employment laws in relation to their own recruitment activities.
          </p>

          <p>
            Jobs.ac.cn does not guarantee that an employer will review an application, contact a
            candidate or offer employment.
          </p>

          <h2>7. Where Your Personal Information Is Hosted</h2>

          <p>
            <strong>
              Jobs.ac.cn uses Cavuno to host and operate the platform and to store and process
              personal information associated with the Services.
            </strong>
          </p>

          <p>This includes, depending on the features you use:</p>

          <ul>
            <li>candidate account information;</li>
            <li>candidate profile information;</li>
            <li>CVs and résumés;</li>
            <li>native job application information;</li>
            <li>employer and recruiter account information;</li>
            <li>job listing and recruitment data;</li>
            <li>job-alert subscription information;</li>
            <li>authentication and session information;</li>
            <li>platform activity and related records; and</li>
            <li>other data required to provide the Jobs.ac.cn Services.</li>
          </ul>

          <p>
            Cavuno's current Data Processing Agreement states that it processes customer job-board
            data on behalf of the job-board operator, including hosting the job board, operating
            candidate profiles and native applications, storing CVs, delivering job alerts and
            related platform functions.{" "}
          </p>

          <p>
            Cavuno does not acquire ownership of your personal information merely because it hosts
            or processes it for Jobs.ac.cn.
          </p>

          <h2>8. Cavuno's Role as Our Technology Provider</h2>

          <p>
            Cavuno is operated by <strong>Wollemia Pty Ltd</strong> and provides the technology
            infrastructure used by Jobs.ac.cn.
          </p>

          <p>Cavuno may process personal information on our behalf for purposes including:</p>

          <ul>
            <li>data storage and database services;</li>
            <li>account registration and authentication;</li>
            <li>candidate and employer profile management;</li>
            <li>job listing management;</li>
            <li>native job applications;</li>
            <li>job alerts and transactional communications;</li>
            <li>search and platform functionality;</li>
            <li>security and abuse prevention;</li>
            <li>analytics and platform monitoring; and</li>
            <li>technical maintenance and other services necessary to operate the platform.</li>
          </ul>

          <p>
            Cavuno's public DPA states that it acts as a processor for customer job-board personal
            data and processes that information according to the job-board operator's
            instructions.{" "}
          </p>

          <p>
            For more information about Cavuno's own privacy practices, please see{" "}
            <a href="https://cavuno.com/privacy-policy">Cavuno's Privacy Policy</a> and{" "}
            <a href="https://cavuno.com/dpa">Cavuno's Data Processing Agreement</a>.
          </p>

          <h2>9. Cavuno's Infrastructure and Subprocessors</h2>

          <p>
            To provide the Cavuno platform, Cavuno may use third-party infrastructure and
            subprocessors.
          </p>

          <p>
            Cavuno's current public Privacy Policy states that its primary customer-data processing
            is in the <strong>United States</strong>, including infrastructure in AWS us-east-1 and
            other United States-based infrastructure and service providers. The exact providers and
            processing locations may change over time as Cavuno updates its infrastructure and
            subprocessors.{" "}
          </p>

          <p>
            Accordingly, personal information submitted to Jobs.ac.cn may be stored or processed
            outside Hong Kong, Mainland China or the country in which you are located.
          </p>

          <h2>10. How We Share Personal Information</h2>

          <p>
            We may share personal information where reasonably necessary to provide the Services or
            where permitted or required by law.
          </p>

          <h3>10.1 Cavuno</h3>

          <p>
            We share or make available personal information to Cavuno so that it can host, operate
            and maintain the Jobs.ac.cn platform on our behalf.
          </p>

          <h3>10.2 Employers and Recruiters</h3>

          <p>
            Where you apply for a job or otherwise choose to interact with an employer, relevant
            information may be provided to that employer for recruitment purposes.
          </p>

          <h3>10.3 Service Providers</h3>

          <p>We may use other service providers for functions such as:</p>

          <ul>
            <li>hosting and infrastructure;</li>
            <li>email and communications;</li>
            <li>payment processing;</li>
            <li>security and fraud prevention;</li>
            <li>analytics;</li>
            <li>advertising and marketing;</li>
            <li>customer support; and</li>
            <li>other technical or operational services.</li>
          </ul>

          <h3>10.4 Advertising and Analytics Providers</h3>

          <p>
            Where enabled, third-party services such as Google Analytics, Google Ads, Google
            AdSense, Meta and LinkedIn may process information relating to your use of Jobs.ac.cn
            for analytics, advertising, conversion measurement or related purposes.
          </p>

          <p>
            The use of these technologies is described further in our <strong>Cookie Policy</strong>{" "}
            and may be subject to consent requirements under applicable law.
          </p>

          <h3>10.5 Legal and Regulatory Disclosure</h3>

          <p>
            We may disclose personal information where reasonably necessary to comply with
            applicable law, regulation, legal process, court order or lawful governmental request.
          </p>

          <h3>10.6 Business Transactions</h3>

          <p>
            If The Educationist Limited or Jobs.ac.cn is involved in a merger, acquisition,
            restructuring, financing, sale of assets or similar transaction, personal information
            may be transferred as part of that transaction, subject to applicable law.
          </p>

          <h2>11. International Transfers</h2>

          <p>
            Because Jobs.ac.cn uses Cavuno and other service providers that may operate
            internationally, your personal information may be transferred to or processed in
            countries other than the country in which you are located.
          </p>

          <p>
            Where applicable law imposes requirements concerning international transfers, we will
            take reasonable steps to comply with those requirements, including using appropriate
            contractual, organisational or other safeguards where required.
          </p>

          <p>
            For individuals in Mainland China, cross-border processing may be subject to the
            requirements of the Personal Information Protection Law and related regulations. The
            PIPL applies in specified circumstances to processing of Mainland China individuals'
            personal information outside Mainland China and contains requirements governing certain
            cross-border transfers.{" "}
          </p>

          <h2>12. Public Information and Published Content</h2>

          <p>Some information submitted to Jobs.ac.cn is intended to be publicly accessible.</p>

          <p>
            This may include published job listings, employer information, job titles, job
            descriptions, logos, images and other information intentionally provided for
            publication.
          </p>

          <p>
            Publicly available information may be indexed by search engines and may be reproduced,
            syndicated, translated, reformatted or distributed through third-party platforms in
            accordance with our Terms of Use.
          </p>

          <p>
            Information in a private account, candidate profile, application or other restricted
            area is not treated as publicly published merely because you use the Services.
          </p>

          <h2>13. Retention of Personal Information</h2>

          <p>
            We retain personal information for as long as reasonably necessary for the purposes for
            which it was collected, including to:
          </p>

          <ul>
            <li>provide the Services;</li>
            <li>maintain accounts and records;</li>
            <li>process applications and recruitment activity;</li>
            <li>provide job alerts and other requested services;</li>
            <li>comply with legal and regulatory requirements;</li>
            <li>resolve disputes;</li>
            <li>enforce agreements; and</li>
            <li>protect the security and integrity of the Services.</li>
          </ul>

          <p>
            When personal information is no longer required, it may be deleted, anonymised or
            otherwise securely disposed of, subject to legal, regulatory, security, backup and
            technical requirements.
          </p>

          <p>
            Because Jobs.ac.cn uses Cavuno as its platform provider, deletion or retention of
            information may also be affected by Cavuno's platform architecture, backups and legally
            required retention periods.
          </p>

          <h2>14. Data Security</h2>

          <p>
            We take reasonable technical and organisational measures designed to protect personal
            information against unauthorised access, disclosure, alteration, loss, misuse or
            destruction.
          </p>

          <p>
            These measures may include access controls, authentication, encryption, monitoring,
            security controls and other safeguards provided by Jobs.ac.cn, Cavuno and relevant
            service providers.
          </p>

          <p>
            No internet transmission or electronic storage system can be guaranteed to be completely
            secure.
          </p>

          <h2>15. Your Privacy Rights</h2>

          <p>
            Depending on your location and applicable law, you may have rights relating to your
            personal information, including the right to:
          </p>

          <ul>
            <li>request access to personal information held about you;</li>
            <li>request correction of inaccurate or incomplete personal information;</li>
            <li>request deletion of personal information where applicable;</li>
            <li>withdraw consent where processing is based on consent;</li>
            <li>object to or request restriction of certain processing where applicable;</li>
            <li>request portability of certain information where applicable; and</li>
            <li>make a complaint to a relevant privacy or data protection authority.</li>
          </ul>

          <p>
            Under Hong Kong's Personal Data (Privacy) Ordinance, individuals have rights to request
            access to and correction of their personal data.{" "}
          </p>

          <p>The availability and scope of other rights depend on the law applicable to you.</p>

          <h2>16. How to Exercise Your Rights</h2>

          <p>
            To exercise a privacy right or make a privacy enquiry, please contact Jobs.ac.cn through
            the contact details provided on the website.
          </p>

          <p>We may need to verify your identity before fulfilling certain requests.</p>

          <p>
            Where your request relates to information processed through Cavuno, we may use the tools
            and procedures available through the Cavuno platform to locate, correct, export or
            delete relevant information.
          </p>

          <p>
            Where another organisation is independently responsible for processing your information,
            such as an employer or an external application provider, you may need to contact that
            organisation directly.
          </p>

          <h2>17. Sensitive Personal Information</h2>

          <p>
            You should avoid submitting sensitive personal information through public profiles or
            other publicly accessible areas unless it is necessary and appropriate.
          </p>

          <p>
            Where sensitive personal information is collected or processed, we will handle it in
            accordance with applicable law.
          </p>

          <h2>18. Marketing Communications</h2>

          <p>
            We may send communications necessary to operate your account or provide requested
            Services.
          </p>

          <p>
            Where permitted by applicable law, we may also send promotional communications about
            Jobs.ac.cn, recruitment services, products, events or other relevant information.
          </p>

          <p>
            You may unsubscribe from marketing communications by using the unsubscribe mechanism
            provided in the communication or by contacting us.
          </p>

          <h2>19. Analytics, Advertising and Automated Technologies</h2>

          <p>
            Jobs.ac.cn may use analytics, advertising and automated technologies to operate and
            improve the Services.
          </p>

          <p>
            Depending on the services enabled, these may include Google Analytics, Google Ads,
            Google AdSense, Meta Pixel, LinkedIn Insight Tag, Google Tag Manager and other
            third-party technologies.
          </p>

          <p>
            These technologies may process information such as browser or device information, IP
            address, pages viewed, interactions, traffic sources, advertising attribution and other
            usage information.
          </p>

          <p>
            Further information is provided in our <strong>Cookie Policy</strong>.
          </p>

          <h2>20. Artificial Intelligence and Automated Processing</h2>

          <p>
            Where Jobs.ac.cn or its technology providers use artificial intelligence or automated
            systems, these systems may support functions such as search, matching, categorisation,
            recommendations, spam detection, fraud prevention, content processing or service
            improvement.
          </p>

          <p>
            Any automated processing will be carried out in accordance with applicable law and the
            purposes described in this Privacy Policy.
          </p>

          <p>
            Where a third-party provider processes personal information for an AI-enabled feature,
            the relevant provider may act as a processor or subprocessor for that service.
          </p>

          <h2>21. Children's Privacy</h2>

          <p>
            The Services are intended primarily for adults seeking or providing employment
            opportunities. We do not knowingly collect personal information from children where
            doing so would be prohibited by applicable law.
          </p>

          <p>
            If you believe that a child has provided personal information to us inappropriately,
            please contact us.
          </p>

          <h2>22. Third-Party Websites and Services</h2>

          <p>
            The Services may contain links to third-party websites, employer career pages, applicant
            tracking systems, payment services and other external services.
          </p>

          <p>
            We are not responsible for the privacy practices or security of third-party websites and
            services that we do not control.
          </p>

          <p>
            You should review the privacy policy of the relevant third party before providing
            personal information to it.
          </p>

          <h2>23. Changes to This Privacy Policy</h2>

          <p>
            We may update this Privacy Policy from time to time to reflect changes in the Services,
            our technology providers, our data practices or applicable law.
          </p>

          <p>
            Where material changes are made, we may provide an appropriate notice through the
            Services or by other reasonable means.
          </p>

          <p>
            The updated Privacy Policy will become effective when posted unless otherwise stated.
          </p>

          <h2>24. Contact Us</h2>

          <p>
            If you have questions about this Privacy Policy, our handling of personal information or
            your privacy rights, please contact Jobs.ac.cn through the contact details provided on
            the Jobs.ac.cn website.
          </p>

          <h2>25. Complaints</h2>

          <p>
            If you have concerns about how Jobs.ac.cn handles your personal information, please
            contact us first so that we can investigate the matter.
          </p>

          <p>
            You may also have the right to lodge a complaint with the relevant privacy or data
            protection authority in your jurisdiction.
          </p>
        </>
      );
    },
  },
} satisfies Record<LegalLocale, LegalPageContent>;
