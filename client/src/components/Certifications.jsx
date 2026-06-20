import useScrollReveal from '../hooks/useScrollReveal';
import certifications from '../data/certifications';

/* ── Real SVG logos for each provider ── */
const providerLogos = {
  MasterDev: (
    <svg viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="100" y="35" textAnchor="middle" fontFamily="Poppins, sans-serif" fontSize="28" fontWeight="800" fill="#ffffff" letterSpacing="3">MASTERDEV</text>
    </svg>
  ),
  Educative: (
    <svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
      <rect x="60" y="5" width="80" height="50" rx="8" fill="none" stroke="#fff" strokeWidth="2.5"/>
      <circle cx="100" cy="30" r="12" fill="none" stroke="#fff" strokeWidth="2.5"/>
      <polygon points="96,24 96,36 108,30" fill="#fff"/>
      <text x="100" y="72" textAnchor="middle" fontFamily="Poppins, sans-serif" fontSize="0" fill="transparent">Educative</text>
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 76 65" xmlns="http://www.w3.org/2000/svg">
      <path d="M58.778 3H17.222A14.222 14.222 0 003 17.222v28.444A14.222 14.222 0 0017.222 59.89h41.556A14.222 14.222 0 0073 45.667V17.222A14.222 14.222 0 0058.778 3z" fill="#0A66C2"/>
      <path d="M23.556 25.667v22.11h-7.112v-22.11h7.112zM20 22.556a4.111 4.111 0 110-8.222 4.111 4.111 0 010 8.222zM55.667 47.778h-7.111V37.222c0-2.556-.044-5.889-3.556-5.889-3.556 0-4.111 2.778-4.111 5.667v10.778h-7.111v-22.11h6.778v3.11h.111c.956-1.778 3.222-3.556 6.667-3.556 7.111 0 8.444 4.667 8.444 10.778v11.778h-.111z" fill="#fff"/>
    </svg>
  ),
  Google: (
    <svg viewBox="0 0 272 92" xmlns="http://www.w3.org/2000/svg">
      <path d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#EA4335"/>
      <path d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#FBBC05"/>
      <path d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z" fill="#4285F4"/>
      <path d="M225 3v65h-9.5V3h9.5z" fill="#34A853"/>
      <path d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z" fill="#EA4335"/>
      <path d="M35.29 41.19V32H68c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 33.91.36 13.93 16.32-1.53 36.3-1.53c11.01 0 18.82 4.33 24.7 9.99l-6.95 6.95c-4.21-3.95-9.91-7.03-17.75-7.03-14.49 0-25.82 11.68-25.82 25.53 0 13.84 11.33 25.53 25.82 25.53 9.41 0 14.78-3.78 18.22-7.23 2.78-2.78 4.6-6.75 5.31-12.18H35.29z" fill="#4285F4"/>
    </svg>
  ),
  Udemy: (
    <svg viewBox="0 0 260 60" xmlns="http://www.w3.org/2000/svg">
      <path d="M60 10h-8v4h-8v4h-8v-4h-8v-4H20v4h-8v4H4v20h8v4h8v4h8v4h24v-4h8v-4h8v-4h8V18h-8v-4h-8v-4z" fill="#A435F0"/>
      <text x="150" y="38" textAnchor="middle" fontFamily="Poppins, sans-serif" fontSize="30" fontWeight="700" fill="#fff">udemy</text>
    </svg>
  ),
  Meta: (
    <svg viewBox="0 0 240 60" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 12c-6.5 0-11.5 5.5-15 12.5C11.5 31 8.5 40 8.5 40S6 48 12 48c4 0 7-4.5 10-10.5 3-6 5.5-12 8-12s5 6 8 12S45 48 49 48c6 0 3.5-8 3.5-8s-3-9-6.5-15.5S39.5 12 33 12c-5 0-8 5-10 10-2-5-5-10-10-10z" fill="none" stroke="#0668E1" strokeWidth="4"/>
      <text x="155" y="38" textAnchor="middle" fontFamily="Poppins, sans-serif" fontSize="32" fontWeight="700" fill="#fff" letterSpacing="1">Meta</text>
    </svg>
  ),
  HP: (
    <svg viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="30" r="25" fill="none" stroke="#fff" strokeWidth="2.5"/>
      <text x="50" y="38" textAnchor="middle" fontFamily="Poppins, sans-serif" fontSize="22" fontWeight="700" fill="#fff">HP</text>
    </svg>
  ),
  Simplilearn: (
    <svg viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg">
      <text x="100" y="35" textAnchor="middle" fontFamily="Poppins, sans-serif" fontSize="22" fontWeight="700" fill="#fff">Simplilearn</text>
    </svg>
  ),
  DataCamp: (
    <svg viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg">
      <polygon points="20,10 35,25 20,40" fill="#03EF62"/>
      <polygon points="35,15 50,25 35,35" fill="#05B74E"/>
      <text x="120" y="32" textAnchor="middle" fontFamily="Poppins, sans-serif" fontSize="20" fontWeight="700" fill="#fff">DataCamp</text>
    </svg>
  ),
  'UC Davis': (
    <svg viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg">
      <text x="100" y="35" textAnchor="middle" fontFamily="Poppins, sans-serif" fontSize="20" fontWeight="700" fill="#fff">UC Davis</text>
    </svg>
  ),
};

/* ── Provider background gradients ── */
const providerStyles = {
  MasterDev: { bg: 'linear-gradient(135deg, #e8192c 0%, #c41020 100%)' },
  Educative: { bg: 'linear-gradient(135deg, #0f3460 0%, #1a1a4e 100%)' },
  LinkedIn: { bg: 'linear-gradient(135deg, #0077B5 0%, #005E93 100%)' },
  Google: { bg: 'linear-gradient(135deg, #4285F4 0%, #34A853 50%, #FBBC05 75%, #EA4335 100%)' },
  Udemy: { bg: 'linear-gradient(135deg, #A435F0 0%, #7B1FA2 100%)' },
  Meta: { bg: 'linear-gradient(135deg, #0668E1 0%, #1877F2 100%)' },
  HP: { bg: 'linear-gradient(135deg, #0096D6 0%, #004B87 100%)' },
  Simplilearn: { bg: 'linear-gradient(135deg, #FF6F20 0%, #E65100 100%)' },
  DataCamp: { bg: 'linear-gradient(135deg, #05192D 0%, #03EF62 200%)' },
  'UC Davis': { bg: 'linear-gradient(135deg, #002855 0%, #B3A369 200%)' },
};

export default function Certifications() {
  const sectionRef = useScrollReveal();

  return (
    <section className="certifications" id="certifications" ref={sectionRef}>
      <div className="container">
        <div className="certifications__heading reveal">
          <h2>Certifications</h2>
        </div>

        <div className="cert-grid reveal">
          {certifications.map((cert) => {
            const style = providerStyles[cert.provider] || {
              bg: 'linear-gradient(135deg, #1a1a1a 0%, #333 100%)',
            };
            const Logo = providerLogos[cert.provider];

            return (
              <div className="cert-card" key={cert.id}>
                <div className="cert-card__title">{cert.title}</div>
                <div
                  className="cert-card__image"
                  style={{ background: style.bg }}
                >
                  {Logo ? (
                    <div className="cert-card__logo">{Logo}</div>
                  ) : (
                    <span className="cert-card__provider-logo">
                      {cert.provider}
                    </span>
                  )}
                </div>
                <div className="cert-card__meta">
                  <span className="cert-card__date">{cert.date}</span>
                  <span className="cert-card__provider-name">{cert.provider}</span>
                  <span className="cert-card__skills">
                    {cert.skills.length} skill{cert.skills.length > 1 ? 's' : ''}
                  </span>
                </div>
                <div className="cert-card__desc">{cert.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
