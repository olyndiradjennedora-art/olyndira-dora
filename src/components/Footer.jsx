import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  return (
    <footer className="bg-black py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span
            style={{ fontFamily: 'Popping, serif, Bold', color: '#3B82F6', fontStyle: 'italic' }}
            className="text-3xl font-semibold italic leading-none"
          >
            D.
          </span>
          <span 
           style={{fontFamily: 'Inter, sans-serif', fontWeight: '300', fontSize: 15}}
           className="text-gray-600 text-xs">{t('footer.role')}</span>
        </div>
        <p
         style={{fontFamily: 'Inter, sans-serif', fontWeight: '300', fontSize: 15}}
         className="text-gray-700 text-xs tracking-wider">
          © {year} — {t('footer.copyright', { name: 'Olyndira DJenne D.' })}
        </p>
      </div>
    </footer>
  );
}
