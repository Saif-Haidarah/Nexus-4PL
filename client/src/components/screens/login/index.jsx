 نموذج لشاشة تسجيل الدخول رياكت
import React, { useEffect } from 'react';
import useAppStore from '../../../store/useAppStore';
import Button from '../../common/Button';
import './Login.css';

const Login = () => {
  const { lang, setLang, theme, toggleTheme } = useAppStore();
  
  const handleUploadClick = () => {
    // التنقل لشاشة الرفع
    window.location.hash = '#upload';
  };
  
  const handleDemoClick = () => {
    // تحميل بيانات تجريبية
    const demoData = {
      revenue: 42.8,
      expenses: 34.5,
      profit: 8.3,
      runway: 7.2,
      health: 76,
      margin: 19.4,
    };
    useAppStore.getState().setAnalysis(demoData);
    window.location.hash = '#dashboard';
  };
  
  return (
    <div className="login-screen">
      <div className="topbar">
        <div className="brand">
          <div className="brand-icon">⚡</div>
          <div className="brand-wordmark">
            <div className="brand-name">Nexus <em>4 PL</em></div>
            <div className="brand-tagline">
              {lang === 'ar' ? 'منصة رؤية سلسلة الإمداد' : 'Supply Chain Visibility Platform'}
            </div>
          </div>
        </div>
        <div className="topbar-actions">
          <button className="icon-btn" onClick={toggleTheme}>
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <button className="txt-btn" onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}>
            {lang === 'ar' ? 'EN' : 'ع'}
          </button>
        </div>
      </div>
      
      <div className="page">
        <div className="anim-1" style={{ textAlign: 'center', padding: '40px 0 24px' }}>
          <div className="login-mark">
            <svg viewBox="0 0 34 34" width="40" height="40">
              <polyline points="4,22 12,13 19,18 30,7" stroke="white" strokeWidth="2.5" fill="none" />
              <polyline points="23,7 30,7 30,14" stroke="white" strokeWidth="2.5" fill="none" />
            </svg>
          </div>
          <div className="login-app-name">Nexus <em>4 PL</em></div>
          <div className="t-display">
            {lang === 'ar' ? 'منصة رؤية سلسلة الإمداد' : 'Supply Chain Visibility Platform'}
          </div>
        </div>
        
        <div className="card login-card anim-2">
          <button className="login-path-btn" onClick={handleUploadClick}>
            <div className="login-path-icon" style={{ background: 'linear-gradient(135deg,#1A5C40,#3DD68C)' }}>
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="white" strokeWidth="2.2" fill="none" />
                <polyline points="17 8 12 3 7 8" stroke="white" strokeWidth="2.2" fill="none" />
                <line x1="12" y1="3" x2="12" y2="15" stroke="white" strokeWidth="2.2" />
              </svg>
            </div>
            <div className="login-path-text">
              <div className="login-path-title">
                {lang === 'ar' ? 'رفع ملف Excel / CSV' : 'Upload Excel / CSV'}
              </div>
              <div className="login-path-sub">
                {lang === 'ar' ? 'حلّل بياناتك الحقيقية فوراً' : 'Analyze your real data instantly'}
              </div>
            </div>
            <svg className="login-path-arrow" viewBox="0 0 24 24" width="16" height="16">
              <polyline points="9 18 15 12 9 6" stroke="currentColor" strokeWidth="2.5" fill="none" />
            </svg>
          </button>
          
          <button className="login-path-btn login-path-demo" onClick={handleDemoClick}>
            <div className="login-path-icon" style={{ background: 'linear-gradient(135deg,#7C3AED,#C084FC)' }}>
              <svg viewBox="0 0 24 24" width="20" height="20">
                <polygon points="5 3 19 12 5 21 5 3" stroke="white" strokeWidth="2.2" fill="none" />
              </svg>
            </div>
            <div className="login-path-text">
              <div className="login-path-title">
                {lang === 'ar' ? 'تجربة تفاعلية مباشرة ✨' : 'Live Demo ✨'}
              </div>
              <div className="login-path-sub">
                {lang === 'ar' ? 'بيانات وهمية جاهزة · تشغيل فوري' : 'Ready-made data · instant launch'}
              </div>
            </div>
            <svg className="login-path-arrow" viewBox="0 0 24 24" width="16" height="16">
              <polyline points="9 18 15 12 9 6" stroke="currentColor" strokeWidth="2.5" fill="none" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
