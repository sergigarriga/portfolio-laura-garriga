// src/components/LanguageSwitcher.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const lngs = {
  en: { nativeName: 'EN' },
  es: { nativeName: 'ES' },
  ca: { nativeName: 'CA' },
};

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div className="flex items-center gap-1 bg-navy-light/20 p-1 rounded-full">
      {Object.keys(lngs).map((lng) => (
        <button
          key={lng}
          style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }}
          className={`py-1 px-3 rounded-full text-sm transition-colors duration-300 ${i18n.resolvedLanguage === lng ? 'bg-accent text-white' : 'hover:bg-accent/20'}`}
          type="submit"
          onClick={() => i18n.changeLanguage(lng)}
        >
          {lngs[lng].nativeName}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;