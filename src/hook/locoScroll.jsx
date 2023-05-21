// doesnt work

import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useLocomotiveScroll } from 'react-locomotive-scroll';

const useLocoScroll = (start) => {
  gsap.registerPlugin(ScrollTrigger);

  const { scroll } = useLocomotiveScroll()

  useEffect(() => {
    if (!start) return;

    if(scroll) {
      const scrollEl = document.querySelector('.App');

      ScrollTrigger.scrollerProxy(scrollEl, {
        scrollTop(value) {
          if (scroll) {
            return arguments.length
              ? scroll.scrollTo(value, 0, 0)
              : scroll.scroll.instance.scroll.y;
          }
          return null;
        },
        scrollLeft(value) {
          if (scroll) {
            return arguments.length
              ? scroll.scrollTo(value, 0, 0)
              : scroll.scroll.instance.scroll.x;
          }
          return null;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
      });

      const lsUpdate = () => {
        if (scroll) {
          scroll.update();
        }
      };

      ScrollTrigger.addEventListener('refresh', lsUpdate);
      ScrollTrigger.refresh();
    }

  }, [start, scroll]);
};

export default useLocoScroll;

