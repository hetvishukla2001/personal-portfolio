import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useInView } from 'react-intersection-observer';

const easeInOutQuart = (t, b, c, d) => {
  if ((t /= d / 2) < 1) return (c / 2) * t * t * t * t + b;
  return (-c / 2) * ((t -= 2) * t * t * t - 2) + b;
};

const AnimatedCircularProgressbar = ({ percentage }) => {
  const [progress, setProgress] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: false, // Animation will trigger every time
  });

  useEffect(() => {
    if (inView) {
      let start = null;
      const duration = 1000;

      const animate = (timestamp) => {
        if (!start) start = timestamp;
        const progressTime = timestamp - start;
        const newProgress = easeInOutQuart(progressTime, 0, percentage, duration);

        setProgress(Math.min(newProgress, percentage));

        if (progressTime < duration) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    } else {
      setProgress(0); // Reset progress when out of view
    }
  }, [inView, percentage]);

  return (
    <div ref={ref} style={{ width: 200, height: 200, marginBottom: 20 }}>
      <svg width={0} height={0}>
        <defs>
          <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e01cd5" />
            <stop offset="100%" stopColor="#1CB5E0" />
          </linearGradient>
        </defs>
      </svg>
      <CircularProgressbar
        value={progress}
        text={`${Math.round(progress)}%`}
        styles={buildStyles({
          textSize: '16px',
          pathColor: 'url(#my_gradient)',
          textColor: '#f88',
          trailColor: '#d6d6d6',
          backgroundColor: '#3e98c7',
        })}
      />
    </div>
  );
};

export default AnimatedCircularProgressbar;
