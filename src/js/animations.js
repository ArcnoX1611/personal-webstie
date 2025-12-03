import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initAnimations() {
    // Hero Text Glitch/Reveal
    gsap.from('.hero h1', {
        duration: 1.5,
        y: 100,
        opacity: 0,
        ease: 'power4.out',
        delay: 0.5
    });

    gsap.from('.hero .subtitle', {
        duration: 1.5,
        y: 50,
        opacity: 0,
        ease: 'power4.out',
        delay: 0.8
    });

    gsap.from('.cta-btn', {
        duration: 1.5,
        y: 50,
        opacity: 0,
        ease: 'power4.out',
        delay: 1
    });

    // Section Headers
    gsap.utils.toArray('section h2').forEach(header => {
        gsap.from(header, {
            scrollTrigger: {
                trigger: header,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            x: -50,
            opacity: 0,
            duration: 1
        });
    });

    // About Grid
    gsap.from('.about-grid', {
        scrollTrigger: {
            trigger: '.about-grid',
            start: 'top 75%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2
    });

    // Project Cards
    gsap.from('.project-card', {
        scrollTrigger: {
            trigger: '.project-gallery',
            start: 'top 75%',
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2
    });
}
