import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function useElementorEnhancer() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Small delay to ensure React DOM has rendered
    const timer = setTimeout(() => {
      initAnimations();
      initAnimateGeneral();
      initTimelineProgress();
      initSwipers();
      initOwlCarousels();
      initParticles();
      initHotspots();
      initPortfolioFilter();
      initAccordions();
    }, 100);

    // Follow-up check to catch late-mounting components
    const timer2 = setTimeout(() => {
      initAnimations();
      initAnimateGeneral();
      initTimelineProgress();
      initSwipers();
      initOwlCarousels();
      initPortfolioFilter();
      initAccordions();
    }, 350);

    // Fallback: make sure no elementor-invisible or animate-general element stays hidden indefinitely
    const fallbackTimer = setTimeout(() => {
      const remaining = document.querySelectorAll('.elementor-invisible');
      remaining.forEach(el => {
        el.classList.remove('elementor-invisible');
      });
      const remainingAnims = document.querySelectorAll('.animate-general:not(.animation-done)');
      remainingAnims.forEach(el => {
        el.classList.add('animation-done');
        el.style.opacity = '1';
        el.style.transform = 'translate(0, 0)';
      });
    }, 2500);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
      clearTimeout(fallbackTimer);
    };
  }, [pathname]);
}

function parseSettings(el, attr = 'data-settings') {
  const raw = el.getAttribute(attr);
  if (!raw) return {};
  try {
    return JSON.parse(raw);
  } catch (e) {
    try {
      // Unescape html entities if present
      const doc = new DOMParser().parseFromString(raw, 'text/html');
      const unescaped = doc.body.textContent || '';
      return JSON.parse(unescaped);
    } catch (err) {
      // Regex fallback
      const settings = {};
      const animMatch = raw.match(/"_?animation"\s*:\s*"([^"]+)"/);
      const delayMatch = raw.match(/"_?animation_delay"\s*:\s*(\d+)/);
      if (animMatch) settings._animation = animMatch[1];
      if (delayMatch) settings._animation_delay = parseInt(delayMatch[1], 10);
      return settings;
    }
  }
}

function initAnimations() {
  const elements = document.querySelectorAll('.elementor-invisible');
  if (!elements.length) return;

  if (!('IntersectionObserver' in window)) {
    elements.forEach(el => el.classList.remove('elementor-invisible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const settings = parseSettings(el);
        const animName = settings._animation || settings.animation || 'fadeInUp';
        const delay = parseInt(settings._animation_delay || settings.animation_delay || 0, 10);

        if (delay > 0) {
          el.style.animationDelay = `${delay}ms`;
          el.style.webkitAnimationDelay = `${delay}ms`;
        }

        el.classList.remove('elementor-invisible');
        el.classList.add('animated', animName);
        observer.unobserve(el);
      }
    });
  }, {
    threshold: 0.05,
    rootMargin: '100px 0px 50px 0px'
  });

  elements.forEach(el => {
    // Check if element is already in viewport
    const rect = el.getBoundingClientRect();
    if (rect.top <= (window.innerHeight || document.documentElement.clientHeight)) {
      const settings = parseSettings(el);
      const animName = settings._animation || settings.animation || 'fadeInUp';
      const delay = parseInt(settings._animation_delay || settings.animation_delay || 0, 10);

      if (delay > 0) {
        el.style.animationDelay = `${delay}ms`;
        el.style.webkitAnimationDelay = `${delay}ms`;
      }
      el.classList.remove('elementor-invisible');
      el.classList.add('animated', animName);
    } else {
      observer.observe(el);
    }
  });
}

function initSwipers() {
  if (typeof window.Swiper === 'undefined') return;

  // 1. Elementor Image Carousel widgets
  const carouselWidgets = document.querySelectorAll('.elementor-widget-image-carousel');
  carouselWidgets.forEach(widget => {
    const swiperContainer = widget.querySelector('.elementor-image-carousel-wrapper.swiper, .swiper');
    if (!swiperContainer || swiperContainer.swiper) return;

    const settings = parseSettings(widget);
    const slidesPerView = parseInt(settings.slides_to_show || 1, 10);
    const autoplay = settings.autoplay === 'yes';
    const autoplaySpeed = parseInt(settings.autoplay_speed || 2500, 10);
    const speed = parseInt(settings.speed || 600, 10);
    const loop = settings.infinite === 'yes';

    try {
      new window.Swiper(swiperContainer, {
        slidesPerView: slidesPerView || 1,
        loop: loop,
        speed: speed,
        autoplay: autoplay ? { delay: autoplaySpeed, disableOnInteraction: false } : false,
        effect: settings.effect || 'slide',
        navigation: {
          nextEl: widget.querySelector('.elementor-swiper-button-next'),
          prevEl: widget.querySelector('.elementor-swiper-button-prev'),
        },
        pagination: {
          el: widget.querySelector('.swiper-pagination'),
          clickable: true,
        },
        observer: true,
        observeParents: true,
      });
    } catch (e) {
      console.warn('Swiper init error:', e);
    }
  });

  // 2. Prime Slider Widgets (Tango, etc.)
  const primeSliderWidgets = document.querySelectorAll('[class*="elementor-widget-prime-slider-"], .bdt-prime-slider-tango');
  primeSliderWidgets.forEach(widget => {
    const sliderWrap = widget.classList.contains('bdt-prime-slider-tango')
      ? widget
      : (widget.querySelector('.bdt-prime-slider-tango, .elementor-swiper') || widget);

    const swiperContainer = sliderWrap.querySelector('.swiper-tango, .swiper') || (sliderWrap.classList.contains('swiper') ? sliderWrap : null);
    if (!swiperContainer || swiperContainer.swiper) return;

    let settings = parseSettings(sliderWrap);
    if (!settings || Object.keys(settings).length === 0) {
      settings = parseSettings(widget);
    }

    const nextEl = sliderWrap.querySelector('.bdt-navigation-next') || widget.querySelector('.bdt-navigation-next');
    const prevEl = sliderWrap.querySelector('.bdt-navigation-prev') || widget.querySelector('.bdt-navigation-prev');
    const paginationEl = sliderWrap.querySelector('.swiper-pagination') || widget.querySelector('.swiper-pagination');

    const slidesPerView = parseInt(settings.slidesPerView || 1, 10);
    const loop = settings.loop !== false;
    const speed = parseInt(settings.speed || 900, 10);
    const centeredSlides = settings.centeredSlides !== false;

    // Autoplay configuration
    let autoplay = false;
    if (settings.autoplay) {
      const delay = typeof settings.autoplay === 'object' ? parseInt(settings.autoplay.delay || 5000, 10) : 5000;
      autoplay = {
        delay: delay,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      };
    }

    // Effect: Swiper standard effect (Prime Slider "carousel" is slide with centered active item)
    const effect = (settings.effect === 'carousel' || !settings.effect) ? 'slide' : settings.effect;

    // Breakpoints
    let breakpoints = {
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 1,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
        slidesPerGroup: 1,
      },
    };
    if (settings.breakpoints && typeof settings.breakpoints === 'object') {
      breakpoints = settings.breakpoints;
    }

    try {
      const swiperInstance = new window.Swiper(swiperContainer, {
        slidesPerView: slidesPerView || 1,
        slidesPerGroup: parseInt(settings.slidesPerGroup || 1, 10),
        centeredSlides: centeredSlides,
        loop: loop,
        speed: speed,
        effect: effect,
        coverflowEffect: settings.coverflowEffect || undefined,
        breakpoints: breakpoints,
        navigation: (nextEl && prevEl) ? {
          nextEl: nextEl,
          prevEl: prevEl,
        } : false,
        pagination: paginationEl ? {
          el: paginationEl,
          clickable: true,
        } : false,
        observer: true,
        observeParents: true,
        autoplay: autoplay,
      });

      // Explicit navigation click bindings to guarantee response
      if (nextEl) {
        nextEl.style.cursor = 'pointer';
        nextEl.addEventListener('click', (e) => {
          e.preventDefault();
          swiperInstance.slideNext();
        });
      }
      if (prevEl) {
        prevEl.style.cursor = 'pointer';
        prevEl.addEventListener('click', (e) => {
          e.preventDefault();
          swiperInstance.slidePrev();
        });
      }

      // Pause on hover
      if (settings.pauseOnHover || settings.pause_on_hover || autoplay) {
        swiperContainer.addEventListener('mouseenter', () => {
          if (swiperInstance.autoplay && swiperInstance.autoplay.running) {
            swiperInstance.autoplay.stop();
          }
        });
        swiperContainer.addEventListener('mouseleave', () => {
          if (swiperInstance.autoplay && !swiperInstance.autoplay.running) {
            swiperInstance.autoplay.start();
          }
        });
      }
    } catch (e) {
      console.warn('Prime Slider init error:', e);
    }
  });

  // 3. Fallback for any other swipers on the page
  const otherSwipers = document.querySelectorAll('.swiper:not(.swiper-initialized)');
  otherSwipers.forEach(swiperEl => {
    if (swiperEl.swiper) return;
    try {
      new window.Swiper(swiperEl, {
        slidesPerView: 1,
        loop: true,
        observer: true,
        observeParents: true,
      });
    } catch (e) {
      console.warn('Fallback swiper init error:', e);
    }
  });
}

function initOwlCarousels() {
  const $ = window.jQuery;
  if (!$ || !$.fn || !$.fn.owlCarousel) return;

  $('.sasi-carousel').each(function() {
    const $this = $(this);
    const $owl = $this.find('.owl-carousel');
    if (!$owl.length || $owl.hasClass('owl-loaded')) return;

    let opt = parseSettings(this, 'data-slider_options');
    if (!opt || Object.keys(opt).length === 0) {
      opt = $this.data('slider_options') || {};
    }

    try {
      $owl.owlCarousel({
        autoplay: opt.autoplay === 'yes' || opt.autoplay === true,
        autoplayTimeout: parseInt(opt.autoplay_time_out || 5000, 10),
        loop: opt.loop === 'yes' || opt.loop === true,
        margin: parseInt(opt.margin_desktop || 30, 10),
        dots: opt.dots === 'yes' || opt.dots === true,
        nav: opt.arrows === 'yes' || opt.arrows === true,
        responsiveClass: true,
        responsive: {
          0: { items: parseInt(opt.slides_show_mobile || 2, 10) },
          480: { items: parseInt(opt.slides_show_mobile_extra || 3, 10) },
          768: { items: parseInt(opt.slides_show_tablet || 4, 10) },
          1024: { items: parseInt(opt.slides_show_laptop || 6, 10) },
          1200: { items: parseInt(opt.slides_show_desktop || 8, 10) }
        }
      });
    } catch (e) {
      console.warn('Owl init error:', e);
    }
  });
}

function initParticles() {
  if (typeof window.NextParticle === 'undefined') return;

  const particleImg = document.querySelector('#uc_blox_particles_logo_elementor_2aeeb95');
  if (particleImg && !particleImg.dataset.particleInitialized) {
    particleImg.dataset.particleInitialized = 'true';
    try {
      new window.NextParticle(particleImg);
    } catch (e) {
      console.warn('NextParticle init error:', e);
    }
  }
}

function initHotspots() {
  const hotspots = document.querySelectorAll('.e-hotspot');
  hotspots.forEach(hs => {
    if (hs.dataset.hotspotBound) return;
    hs.dataset.hotspotBound = 'true';

    hs.addEventListener('mouseenter', () => {
      hs.classList.add('e-hotspot--active');
    });

    hs.addEventListener('mouseleave', () => {
      hs.classList.remove('e-hotspot--active');
    });

    hs.addEventListener('click', (e) => {
      e.stopPropagation();
      hs.classList.toggle('e-hotspot--active');
    });
  });
}

function initAnimateGeneral() {
  const elements = document.querySelectorAll('.animate-general');
  if (!elements.length) return;

  if (!('IntersectionObserver' in window)) {
    elements.forEach(el => {
      el.classList.add('animation-done');
      el.style.opacity = '1';
      el.style.transform = 'translate(0, 0)';
    });
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = parseInt(el.getAttribute('data-animate-delay') || '0', 10);
        if (delay > 0) {
          el.style.transitionDelay = `${delay}ms`;
        }
        el.classList.add('animation-done');
        el.style.opacity = '1';
        el.style.transform = 'translate(0, 0)';
        observer.unobserve(el);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '50px 0px 50px 0px'
  });

  elements.forEach(el => {
    if (el.classList.contains('animation-done')) return;
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top <= windowHeight && rect.bottom >= 0) {
      const delay = parseInt(el.getAttribute('data-animate-delay') || '0', 10);
      if (delay > 0) {
        el.style.transitionDelay = `${delay}ms`;
      }
      el.classList.add('animation-done');
      el.style.opacity = '1';
      el.style.transform = 'translate(0, 0)';
    } else {
      observer.observe(el);
    }
  });
}

function initTimelineProgress() {
  const timeline = document.querySelector('#pt_plus_timeline');
  if (!timeline) return;

  const trackDraw = timeline.querySelector('.timeline-track-draw');
  if (!trackDraw) return;

  const onScroll = () => {
    const rect = timeline.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    // Midpoint trigger: line grows as user scrolls past center
    const startPoint = windowHeight * 0.6;
    const currentProgress = (startPoint - rect.top) / rect.height;
    const clamped = Math.max(0, Math.min(1, currentProgress));
    trackDraw.style.height = `${clamped * 100}%`;
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function initPortfolioFilter() {
  const $ = window.jQuery;
  const filterWrappers = document.querySelectorAll('.projects-filter-wrapper');
  if (!filterWrappers.length) return;

  filterWrappers.forEach(wrapper => {
    const masonryEl = wrapper.querySelector('.projects-masonry');
    if (!masonryEl) return;

    const $masonry = $ ? $(masonryEl) : null;
    const filterBtns = wrapper.querySelectorAll('.isotope-filter .filter-item');

    // Initialize Isotope if available
    if ($ && $.fn && $.fn.isotope) {
      const layoutMode = masonryEl.getAttribute('data-layout') || 'masonry';
      const properties = {
        itemSelector: '.project-item',
        layoutMode: layoutMode,
        percentPosition: true,
        masonry: {
          columnWidth: '.grid-sizer'
        },
        transitionDuration: '0.4s'
      };

      if (!masonryEl.dataset.isotopeInitialized) {
        masonryEl.dataset.isotopeInitialized = 'true';
        
        // Initialize Isotope immediately
        $masonry.isotope(properties);
        $masonry.isotope('layout');

        // Re-layout when all images are loaded
        if (typeof $masonry.imagesLoaded === 'function') {
          $masonry.imagesLoaded(() => {
            $masonry.isotope('layout');
          });
        }

        // Also re-layout as individual images load
        const images = masonryEl.querySelectorAll('img');
        images.forEach(img => {
          if (!img.complete) {
            img.addEventListener('load', () => {
              $masonry.isotope('layout');
            }, { once: true });
          }
        });
      } else {
        $masonry.isotope('reloadItems');
        $masonry.isotope('layout');
      }
    }

    // Attach click handlers to filter buttons
    filterBtns.forEach(btn => {
      if (btn.dataset.filterBound) return;
      btn.dataset.filterBound = 'true';

      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (window.location.hash) {
          window.history.replaceState(null, '', window.location.pathname);
        }

        const targetFilter = btn.getAttribute('data-filter') || '*';

        // Update active class on buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Apply isotope filter if available
        if ($ && $.fn && $.fn.isotope && $masonry) {
          try {
            $masonry.isotope({ filter: targetFilter });
          } catch (err) {
            console.warn('Isotope filter error:', err);
          }
        } else {
          // Robust DOM fallback
          const items = masonryEl.querySelectorAll('.project-item');
          items.forEach(item => {
            if (targetFilter === '*' || item.matches(targetFilter)) {
              item.style.display = '';
              item.style.opacity = '1';
              item.style.transform = 'scale(1)';
            } else {
              item.style.display = 'none';
              item.style.opacity = '0';
              item.style.transform = 'scale(0.8)';
            }
          });
        }
      });
    });
  });
}

function initAccordions() {
  const $ = window.jQuery;
  const wrappers = document.querySelectorAll('.sasi-accordions-wrapper');
  if (!wrappers.length) return;

  wrappers.forEach(wrapper => {
    const isMultiExpand = wrapper.classList.contains('multi-expand');
    const items = wrapper.querySelectorAll('.sasi-acc-item, .sasi-acc-item-s2');

    items.forEach(item => {
      const header = item.querySelector('.sasi-acc-item__title');
      const content = item.querySelector('.sasi-acc-item__content');
      if (!header || !content) return;

      // Handle default open item on initial load if not already open
      const isDefaultOpen = (header.dataset.default === 'yes' || header.getAttribute('data-default') === 'yes');
      if (isDefaultOpen && !item.classList.contains('current')) {
        item.classList.add('current');
        content.classList.add('active');
        content.style.display = 'block';
      }

      if (header.dataset.accordionBound) return;
      header.dataset.accordionBound = 'true';

      header.style.cursor = 'pointer';

      header.addEventListener('click', (e) => {
        e.preventDefault();

        const isOpen = item.classList.contains('current');

        if (!isMultiExpand) {
          // Close other items in the same accordion
          items.forEach(otherItem => {
            if (otherItem !== item) {
              otherItem.classList.remove('current');
              const otherContent = otherItem.querySelector('.sasi-acc-item__content');
              if (otherContent) {
                otherContent.classList.remove('active');
                if ($) {
                  $(otherContent).stop(true, true).slideUp(200);
                } else {
                  otherContent.style.display = 'none';
                }
              }
            }
          });
        }

        if (isOpen) {
          item.classList.remove('current');
          content.classList.remove('active');
          if ($) {
            $(content).stop(true, true).slideUp(200);
          } else {
            content.style.display = 'none';
          }
        } else {
          item.classList.add('current');
          content.classList.add('active');
          if ($) {
            $(content).stop(true, true).slideDown(200);
          } else {
            content.style.display = 'block';
          }
        }
      });
    });
  });
}


