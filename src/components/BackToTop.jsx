import React, { useState, useEffect } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollY > 100) {
        setVisible(true);
        if (scrollHeight > 0) {
          const p = Math.min(307.919, Math.max(0, (scrollY / scrollHeight) * 307.919));
          setProgress(p);
        }
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <style>{`
        .smooth-back-to-top-button {
          bottom: 30px;
          height: 46px;
          width: 46px;
          border-radius: 46px;
          background-color: #ffffff;
          box-shadow: inset 0 0 0 2px #dbfb04;
        }
        .smooth-back-to-top-button.btn-left-side {
          left: 30px;
        }
        .smooth-back-to-top-button::after {
          height: 100%;
          color: #1f2029;
          font-size: 24px;
          content: '↑';
          line-height: normal;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
        }
        .smooth-back-to-top-button svg.progress-circle path {
          stroke: #1f2029;
          strokeWidth: 5px;
          z-index: 5;
        }
      `}</style>
      <div
        className={`smooth-back-to-top-button btn-left-side ${visible ? 'active-progress' : ''}`}
        role="button"
        tabIndex={0}
        aria-label="Back to top"
        onClick={scrollToTop}
      >
        <svg className="progress-circle" width="100%" height="100%" viewBox="-2.5 -2.5 105 105" aria-hidden="true">
          <path
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            style={{
              strokeDasharray: '307.919, 307.919',
              strokeDashoffset: `${307.919 - progress}`,
            }}
          />
        </svg>
      </div>
    </>
  );
}
