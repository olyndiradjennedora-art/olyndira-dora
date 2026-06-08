import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-8"
      style={{ background: 'var(--bg-footer)', transition: 'background 0.3s ease' }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span
            style={{ fontFamily: 'Playfair Display, serif', color: '#94A3B8', fontStyle: 'italic', fontWeight: '600', fontSize: '22px' }}
            className="leading-none select-none"
          >
            Olyndira{' '}
            <span style={{ color: '#3B82F6' }}>D.</span>
          </span>
          <span
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: '300',
              fontSize: '15px',
              color: '#94A3B8',
            }}
          >
            {t('footer.role')}
          </span>
        </div>
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: '300',
            fontSize: '15px',
            color: '#64748B',
          }}
          className="tracking-wider"
        >
          © {year} — {t('footer.copyright', { name: 'Olyndira DJenne D.' })}
        </p>
      </div>
    </footer>
  );
}
