import { useEffect, useRef, useState } from 'react';
import { NAV_OFFSET } from '../utils/scrollToSection';

function useScrollSpy(ids) {
  const [activeId, setActiveId] = useState(ids[0]);
  const idsRef = useRef(ids);
  idsRef.current = ids;

  useEffect(() => {
    const computeActive = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentIds = idsRef.current;

      if (window.scrollY >= maxScroll - 2) {
        setActiveId(currentIds[currentIds.length - 1]);
        return;
      }

      let current = currentIds[0];
      for (const id of currentIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= NAV_OFFSET + 1) {
          current = id;
        }
      }
      setActiveId(current);
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        computeActive();
        ticking = false;
      });
    };

    computeActive();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return activeId;
}

export default useScrollSpy;
