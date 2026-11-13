import { OWNER } from '../config';
import type { Lang } from './routes';

export interface Section { h: string; p?: string[]; ul?: string[] }
export interface LegalDoc { title: string; description: string; updated: string; sections: Section[] }
export type LegalKey = 'legal' | 'privacy' | 'cookies';

const { name, nie, email, phone, address } = OWNER;

export const legal: Record<LegalKey, Record<Lang, LegalDoc>> = {
  /* ───────────────────────────── AVISO LEGAL ───────────────────────────── */
  legal: {
    es: {
      title: 'Aviso legal',
      description: `Aviso legal y datos identificativos del titular de este sitio web, ${name}, conforme a la Ley 34/2002 (LSSI-CE).`,
      updated: 'Última actualización: noviembre de 2026',
      sections: [
        {
          h: '1. Datos identificativos del titular',
          p: ['En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y de comercio electrónico (LSSI-CE), se informa de los datos del titular de este sitio web:'],
          ul: [
            `Titular: ${name}, trabajador autónomo`,
            `NIE: ${nie}`,
            `Domicilio: ${address}`,
            `Correo electrónico: ${email}`,
            `Teléfono: ${phone}`,
            'Actividad: servicios de desarrollo web (alta en el IAE, epígrafe 763)',
          ],
        },
        { h: '2. Objeto', p: ['Este sitio web tiene por finalidad dar a conocer los servicios profesionales de desarrollo web, mantenimiento y consultoría técnica ofrecidos por el titular, y facilitar el contacto con él.'] },
        { h: '3. Condiciones de uso', p: ['El acceso y uso de este sitio web atribuye la condición de usuario e implica la aceptación de este aviso legal. El usuario se compromete a hacer un uso adecuado del sitio y de sus contenidos, conforme a la ley, la buena fe y el orden público, y a no utilizarlo para fines ilícitos o lesivos para terceros.'] },
        { h: '4. Propiedad intelectual e industrial', p: ['Los textos, el diseño, el código y demás elementos de este sitio web son titularidad de su responsable o se utilizan con la debida autorización. Queda prohibida su reproducción, distribución o transformación sin autorización expresa, salvo en los casos permitidos por la ley.'] },
        { h: '5. Responsabilidad', p: ['El titular se esfuerza por mantener la información del sitio actualizada y correcta, pero no garantiza la ausencia de errores ni la disponibilidad ininterrumpida del servicio. Los precios mostrados son orientativos, no incluyen IVA y no constituyen una oferta vinculante: el precio definitivo se fija en el presupuesto de cada proyecto. Este sitio puede contener enlaces a sitios de terceros (por ejemplo, WhatsApp); el titular no se responsabiliza de su contenido ni de sus políticas.'] },
        { h: '6. Protección de datos', p: ['El tratamiento de los datos personales se describe en la Política de privacidad. El uso de cookies se describe en la Política de cookies.'] },
        { h: '7. Legislación aplicable y jurisdicción', p: ['Este aviso legal se rige por la legislación española. Para cualquier controversia, y salvo que la normativa aplicable (en particular, la de consumidores y usuarios) disponga otro fuero, las partes se someten a los juzgados y tribunales de Barcelona.'] },
      ],
    },
    ca: {
      title: 'Avís legal',
      description: `Avís legal i dades identificatives del titular d’aquest lloc web, ${name}, conforme a la Llei 34/2002 (LSSI-CE).`,
      updated: 'Última actualització: novembre de 2026',
      sections: [
        {
          h: '1. Dades identificatives del titular',
          p: ['En compliment de l’article 10 de la Llei 34/2002, d’11 de juliol, de serveis de la societat de la informació i de comerç electrònic (LSSI-CE), s’informa de les dades del titular d’aquest lloc web:'],
          ul: [
            `Titular: ${name}, treballador autònom`,
            `NIE: ${nie}`,
            `Domicili: ${address}`,
            `Correu electrònic: ${email}`,
            `Telèfon: ${phone}`,
            'Activitat: serveis de desenvolupament web (alta a l’IAE, epígraf 763)',
          ],
        },
        { h: '2. Objecte', p: ['Aquest lloc web té per finalitat donar a conèixer els serveis professionals de desenvolupament web, manteniment i consultoria tècnica que ofereix el titular, i facilitar-hi el contacte.'] },
        { h: '3. Condicions d’ús', p: ['L’accés i l’ús d’aquest lloc web atribueix la condició d’usuari i implica l’acceptació d’aquest avís legal. L’usuari es compromet a fer-ne un ús adequat, d’acord amb la llei, la bona fe i l’ordre públic, i a no utilitzar-lo per a finalitats il·lícites o lesives per a tercers.'] },
        { h: '4. Propietat intel·lectual i industrial', p: ['Els textos, el disseny, el codi i la resta d’elements d’aquest lloc web són titularitat del seu responsable o s’utilitzen amb l’autorització corresponent. Queda prohibida la seva reproducció, distribució o transformació sense autorització expressa, llevat dels casos permesos per la llei.'] },
        { h: '5. Responsabilitat', p: ['El titular procura mantenir la informació del lloc actualitzada i correcta, però no garanteix l’absència d’errors ni la disponibilitat ininterrompuda del servei. Els preus mostrats són orientatius, no inclouen IVA i no constitueixen una oferta vinculant: el preu definitiu es fixa en el pressupost de cada projecte. Aquest lloc pot contenir enllaços a llocs de tercers (per exemple, WhatsApp); el titular no es fa responsable del seu contingut ni de les seves polítiques.'] },
        { h: '6. Protecció de dades', p: ['El tractament de les dades personals es descriu a la Política de privacitat. L’ús de cookies es descriu a la Política de cookies.'] },
        { h: '7. Legislació aplicable i jurisdicció', p: ['Aquest avís legal es regeix per la legislació espanyola. Per a qualsevol controvèrsia, i tret que la normativa aplicable (en particular, la de consumidors i usuaris) disposi un altre fur, les parts se sotmeten als jutjats i tribunals de Barcelona.'] },
      ],
    },
    en: {
      title: 'Legal notice',
      description: `Legal notice and identification details of the owner of this website, ${name}, in accordance with Spanish Law 34/2002 (LSSI-CE).`,
      updated: 'Last updated: November 2026',
      sections: [
        {
          h: '1. Owner identification',
          p: ['In accordance with Article 10 of Spanish Law 34/2002 of 11 July on information society services and electronic commerce (LSSI-CE), the details of the owner of this website are:'],
          ul: [
            `Owner: ${name}, self-employed (autónomo)`,
            `NIE (foreigner identification number): ${nie}`,
            `Address: ${address}`,
            `Email: ${email}`,
            `Phone: ${phone}`,
            'Activity: web development services (registered under IAE heading 763)',
          ],
        },
        { h: '2. Purpose', p: ['This website presents the professional web development, maintenance and technical consulting services offered by its owner and makes it easy to get in touch.'] },
        { h: '3. Terms of use', p: ['Accessing and using this website makes you a user and implies acceptance of this legal notice. Users agree to use the website and its content in accordance with the law, good faith and public order, and not to use it for unlawful purposes or in ways that harm third parties.'] },
        { h: '4. Intellectual and industrial property', p: ['The texts, design, code and other elements of this website belong to its owner or are used with the appropriate permission. Reproduction, distribution or modification without express authorisation is prohibited, except where the law allows it.'] },
        { h: '5. Liability', p: ['The owner makes an effort to keep the information on this website up to date and accurate, but does not guarantee that it is error-free or that the service will be uninterrupted. Prices shown are indicative, exclude VAT and are not a binding offer: the final price is set in the quote for each project. This website may contain links to third-party sites (for example, WhatsApp); the owner is not responsible for their content or policies.'] },
        { h: '6. Data protection', p: ['The processing of personal data is described in the Privacy Policy. The use of cookies is described in the Cookie Policy.'] },
        { h: '7. Governing law and jurisdiction', p: ['This legal notice is governed by Spanish law. For any dispute, and unless applicable regulations (in particular consumer protection law) provide for a different venue, the parties submit to the courts of Barcelona.'] },
      ],
    },
  },

  /* ─────────────────────────── POLÍTICA DE PRIVACIDAD ─────────────────────────── */
  privacy: {
    es: {
      title: 'Política de privacidad',
      description: 'Cómo se tratan los datos personales que envías a través del formulario de contacto, conforme al RGPD y la LOPDGDD.',
      updated: 'Última actualización: noviembre de 2026',
      sections: [
        {
          h: '1. Responsable del tratamiento',
          ul: [`Responsable: ${name}`, `NIE: ${nie}`, `Domicilio: ${address}`, `Correo electrónico: ${email}`],
        },
        {
          h: '2. Datos que se recogen',
          p: ['A través del formulario de contacto se recogen los datos que introduces voluntariamente:'],
          ul: ['Nombre', 'Correo electrónico', 'Tipo de proyecto', 'Contenido de tu mensaje (y cualquier dato personal que decidas incluir en él)'],
        },
        { h: '3. Finalidad', p: ['Atender tu consulta, enviarte un presupuesto o propuesta y mantener la comunicación necesaria con ese fin. No se utilizan tus datos para elaborar perfiles ni para decisiones automatizadas, y no se envían comunicaciones comerciales que no hayas solicitado.'] },
        {
          h: '4. Base jurídica',
          p: ['La base jurídica es tu consentimiento (art. 6.1.a RGPD), que otorgas al marcar la casilla de aceptación y enviar el formulario, y la aplicación de medidas precontractuales a petición tuya (art. 6.1.b RGPD) cuando solicitas un presupuesto. Puedes retirar tu consentimiento en cualquier momento escribiendo a la dirección de correo indicada.'],
        },
        {
          h: '5. Destinatarios y encargados del tratamiento',
          p: ['Los datos no se venden ni se ceden a terceros para sus propios fines. Para recibir los mensajes se utiliza el servicio de formularios Formspree (Formspree, Inc.), que actúa como encargado del tratamiento. Si me escribes por correo electrónico o WhatsApp, los datos serán tratados también a través de esos servicios, con sus propias condiciones. El sitio web se aloja en GitHub Pages (GitHub, Inc.), que como proveedor de alojamiento puede registrar datos técnicos de conexión, como la dirección IP, al servir las páginas.'],
        },
        { h: '6. Transferencias internacionales', p: ['Los proveedores mencionados están establecidos en Estados Unidos, por lo que el tratamiento puede implicar una transferencia internacional de datos, amparada en las garantías adecuadas previstas en el RGPD (como las cláusulas contractuales tipo o la decisión de adecuación aplicable).'] },
        { h: '7. Conservación', p: ['Los datos se conservan durante el tiempo necesario para atender tu consulta y, si se llega a formalizar una relación profesional, durante los plazos legales aplicables. Después se suprimen o se bloquean mientras puedan derivarse responsabilidades.'] },
        {
          h: '8. Tus derechos',
          p: [`Puedes ejercer los derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad escribiendo a ${email}, indicando el derecho que deseas ejercer. Si consideras que tus datos no se tratan correctamente, tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).`],
        },
        { h: '9. Seguridad', p: ['Se aplican medidas técnicas y organizativas razonables para proteger tus datos. La comunicación con el formulario se realiza mediante conexión cifrada (HTTPS).'] },
      ],
    },
    ca: {
      title: 'Política de privacitat',
      description: 'Com es tracten les dades personals que envies mitjançant el formulari de contacte, conforme a l’RGPD i la LOPDGDD.',
      updated: 'Última actualització: novembre de 2026',
      sections: [
        {
          h: '1. Responsable del tractament',
          ul: [`Responsable: ${name}`, `NIE: ${nie}`, `Domicili: ${address}`, `Correu electrònic: ${email}`],
        },
        {
          h: '2. Dades que es recullen',
          p: ['Mitjançant el formulari de contacte es recullen les dades que introdueixes voluntàriament:'],
          ul: ['Nom', 'Correu electrònic', 'Tipus de projecte', 'Contingut del teu missatge (i qualsevol dada personal que decideixis incloure-hi)'],
        },
        { h: '3. Finalitat', p: ['Atendre la teva consulta, enviar-te un pressupost o proposta i mantenir la comunicació necessària amb aquesta finalitat. No s’utilitzen les teves dades per elaborar perfils ni per a decisions automatitzades, i no s’envien comunicacions comercials que no hagis sol·licitat.'] },
        {
          h: '4. Base jurídica',
          p: ['La base jurídica és el teu consentiment (art. 6.1.a RGPD), que atorgues en marcar la casella d’acceptació i enviar el formulari, i l’aplicació de mesures precontractuals a petició teva (art. 6.1.b RGPD) quan sol·licites un pressupost. Pots retirar el teu consentiment en qualsevol moment escrivint a l’adreça de correu indicada.'],
        },
        {
          h: '5. Destinataris i encarregats del tractament',
          p: ['Les dades no es venen ni se cedeixen a tercers per a finalitats pròpies. Per rebre els missatges s’utilitza el servei de formularis Formspree (Formspree, Inc.), que actua com a encarregat del tractament. Si m’escrius per correu electrònic o WhatsApp, les dades també seran tractades mitjançant aquests serveis, amb les seves pròpies condicions. El lloc web s’allotja a GitHub Pages (GitHub, Inc.), que com a proveïdor d’allotjament pot registrar dades tècniques de connexió, com l’adreça IP, en servir les pàgines.'],
        },
        { h: '6. Transferències internacionals', p: ['Els proveïdors esmentats estan establerts als Estats Units, de manera que el tractament pot implicar una transferència internacional de dades, emparada per les garanties adequades previstes a l’RGPD (com les clàusules contractuals tipus o la decisió d’adequació aplicable).'] },
        { h: '7. Conservació', p: ['Les dades es conserven durant el temps necessari per atendre la teva consulta i, si s’arriba a formalitzar una relació professional, durant els terminis legals aplicables. Després se suprimeixen o es bloquegen mentre en puguin derivar responsabilitats.'] },
        {
          h: '8. Els teus drets',
          p: [`Pots exercir els drets d’accés, rectificació, supressió, oposició, limitació del tractament i portabilitat escrivint a ${email}, indicant el dret que vols exercir. Si consideres que les teves dades no es tracten correctament, tens dret a presentar una reclamació davant l’Agència Espanyola de Protecció de Dades (www.aepd.es) o l’Autoritat Catalana de Protecció de Dades (apdcat.gencat.cat).`],
        },
        { h: '9. Seguretat', p: ['S’apliquen mesures tècniques i organitzatives raonables per protegir les teves dades. La comunicació amb el formulari es fa mitjançant connexió xifrada (HTTPS).'] },
      ],
    },
    en: {
      title: 'Privacy policy',
      description: 'How the personal data you send through the contact form is processed, in accordance with the GDPR and Spanish data protection law.',
      updated: 'Last updated: November 2026',
      sections: [
        {
          h: '1. Data controller',
          ul: [`Controller: ${name}`, `NIE: ${nie}`, `Address: ${address}`, `Email: ${email}`],
        },
        {
          h: '2. Data collected',
          p: ['The contact form collects the data you enter voluntarily:'],
          ul: ['Name', 'Email address', 'Project type', 'The content of your message (and any personal data you choose to include in it)'],
        },
        { h: '3. Purpose', p: ['To answer your enquiry, send you a quote or proposal, and keep in touch for that purpose. Your data is not used for profiling or automated decision-making, and no commercial communications you have not asked for are sent.'] },
        {
          h: '4. Legal basis',
          p: ['The legal basis is your consent (Art. 6(1)(a) GDPR), given by ticking the acceptance box and submitting the form, and the performance of pre-contractual steps at your request (Art. 6(1)(b) GDPR) when you ask for a quote. You can withdraw your consent at any time by writing to the email address above.'],
        },
        {
          h: '5. Recipients and processors',
          p: ['Your data is not sold or shared with third parties for their own purposes. Messages are received through the Formspree form service (Formspree, Inc.), which acts as a data processor. If you write to me by email or WhatsApp, your data will also be handled through those services, under their own terms. The website is hosted on GitHub Pages (GitHub, Inc.), which as a hosting provider may log technical connection data, such as the IP address, when serving pages.'],
        },
        { h: '6. International transfers', p: ['The providers mentioned are established in the United States, so processing may involve an international data transfer, covered by the appropriate safeguards provided for in the GDPR (such as standard contractual clauses or an applicable adequacy decision).'] },
        { h: '7. Retention', p: ['Data is kept for as long as needed to answer your enquiry and, if a professional relationship is formed, for the applicable legal periods. It is then deleted or blocked for as long as liabilities may arise.'] },
        {
          h: '8. Your rights',
          p: [`You may exercise your rights of access, rectification, erasure, objection, restriction of processing and portability by writing to ${email}, stating the right you wish to exercise. If you believe your data is not being processed properly, you have the right to lodge a complaint with the Spanish Data Protection Agency (www.aepd.es) or the Catalan Data Protection Authority (apdcat.gencat.cat).`],
        },
        { h: '9. Security', p: ['Reasonable technical and organisational measures are applied to protect your data. Communication with the form uses an encrypted connection (HTTPS).'] },
      ],
    },
  },

  /* ───────────────────────────── POLÍTICA DE COOKIES ───────────────────────────── */
  cookies: {
    es: {
      title: 'Política de cookies',
      description: 'Este sitio web no usa cookies de análisis ni de publicidad. Solo se emplean cookies técnicas, por lo que no hay banner de cookies.',
      updated: 'Última actualización: noviembre de 2026',
      sections: [
        { h: '1. ¿Qué son las cookies?', p: ['Las cookies son pequeños archivos que un sitio web puede guardar en tu dispositivo para recordar información sobre tu visita.'] },
        {
          h: '2. Cookies que utiliza este sitio',
          p: ['Este sitio web no utiliza cookies de análisis o medición, ni cookies publicitarias, ni de seguimiento o de perfilado. Solo se utilizan cookies técnicas, estrictamente necesarias para que el sitio funcione y para prestar el servicio que solicitas (por ejemplo, el envío del formulario de contacto).'],
        },
        { h: '3. Por qué no hay banner de cookies', p: ['Las cookies técnicas están exentas del deber de obtener consentimiento (art. 22.2 de la LSSI-CE). Al no emplearse ningún otro tipo de cookie, no es necesario mostrar un banner de cookies.'] },
        { h: '4. Servicios de terceros', p: ['Si pulsas el botón de WhatsApp, saldrás de este sitio web y pasarás a un servicio de terceros que se rige por su propia política de privacidad y de cookies. Lo mismo ocurre con los enlaces externos.'] },
        { h: '5. Cómo gestionar las cookies', p: ['Puedes permitir, bloquear o eliminar las cookies desde la configuración de tu navegador. Bloquear las cookies técnicas podría afectar al funcionamiento de algunas partes del sitio.'] },
        { h: '6. Cambios y contacto', p: [`Si en el futuro se incorporasen otras cookies (por ejemplo, de análisis), esta política se actualizará y se solicitará tu consentimiento previo. Para cualquier duda, escribe a ${email}.`] },
      ],
    },
    ca: {
      title: 'Política de cookies',
      description: 'Aquest lloc web no fa servir cookies d’anàlisi ni de publicitat. Només s’empren cookies tècniques, de manera que no hi ha bàner de cookies.',
      updated: 'Última actualització: novembre de 2026',
      sections: [
        { h: '1. Què són les cookies?', p: ['Les cookies són petits fitxers que un lloc web pot desar al teu dispositiu per recordar informació sobre la teva visita.'] },
        {
          h: '2. Cookies que utilitza aquest lloc',
          p: ['Aquest lloc web no utilitza cookies d’anàlisi o mesurament, ni cookies publicitàries, ni de seguiment o de perfilatge. Només s’utilitzen cookies tècniques, estrictament necessàries perquè el lloc funcioni i per prestar el servei que sol·licites (per exemple, l’enviament del formulari de contacte).'],
        },
        { h: '3. Per què no hi ha bàner de cookies', p: ['Les cookies tècniques estan exemptes del deure d’obtenir consentiment (art. 22.2 de la LSSI-CE). Com que no s’utilitza cap altre tipus de cookie, no cal mostrar cap bàner de cookies.'] },
        { h: '4. Serveis de tercers', p: ['Si prems el botó de WhatsApp, sortiràs d’aquest lloc web i passaràs a un servei de tercers que es regeix per la seva pròpia política de privacitat i de cookies. El mateix passa amb els enllaços externs.'] },
        { h: '5. Com gestionar les cookies', p: ['Pots permetre, bloquejar o eliminar les cookies des de la configuració del teu navegador. Bloquejar les cookies tècniques podria afectar el funcionament d’algunes parts del lloc.'] },
        { h: '6. Canvis i contacte', p: [`Si en el futur s’incorporessin altres cookies (per exemple, d’anàlisi), aquesta política s’actualitzarà i se't demanarà el consentiment previ. Per a qualsevol dubte, escriu a ${email}.`] },
      ],
    },
    en: {
      title: 'Cookie policy',
      description: 'This website uses no analytics or advertising cookies. Only technical cookies are used, so there is no cookie banner.',
      updated: 'Last updated: November 2026',
      sections: [
        { h: '1. What are cookies?', p: ['Cookies are small files that a website can store on your device to remember information about your visit.'] },
        {
          h: '2. Cookies used by this website',
          p: ['This website does not use analytics or measurement cookies, advertising cookies, or tracking or profiling cookies. Only technical cookies are used, strictly necessary for the site to work and to provide the service you request (for example, submitting the contact form).'],
        },
        { h: '3. Why there is no cookie banner', p: ['Technical cookies are exempt from the obligation to obtain consent (Art. 22(2) of Spanish Law 34/2002, LSSI-CE). Since no other type of cookie is used, no cookie banner is needed.'] },
        { h: '4. Third-party services', p: ['If you click the WhatsApp button you leave this website and go to a third-party service governed by its own privacy and cookie policies. The same applies to external links.'] },
        { h: '5. How to manage cookies', p: ['You can allow, block or delete cookies in your browser settings. Blocking technical cookies could affect how some parts of the site work.'] },
        { h: '6. Changes and contact', p: [`If other cookies (for example, analytics) are added in the future, this policy will be updated and your prior consent will be requested. For any questions, write to ${email}.`] },
      ],
    },
  },
};
