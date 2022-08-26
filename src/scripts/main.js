import * as functions from './includes/functions.js';
import { press } from './includes/press.js';
import { team } from './includes/team.js';

import Swiper from 'swiper/bundle';

const swiper = new Swiper('.image-slider', {
  loop: true,
  speed: 500,
  effect: 'fade',

  autoplay: {
    delay: 1500,
    stopOnLastSlide: false,
    disableOnIteration: false,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

press();
team();
functions.isWebp();