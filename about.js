document.getElementById('menu-icon').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
});


const card0 = document.getElementById('card0');
const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const card3 = document.getElementById('card3');
const card4 = document.getElementById('card4');
const card5 = document.getElementById('card5');

const cardContainer0 = document.getElementById('cardContainer0');
const cardContainer1 = document.getElementById('cardContainer1');
const cardContainer2 = document.getElementById('cardContainer2');
const cardContainer3 = document.getElementById('cardContainer3');
const cardContainer4 = document.getElementById('cardContainer4');
const cardContainer5 = document.getElementById('cardContainer5');


cardContainer0.addEventListener('mousemove', (e) => {
    const rect = cardContainer0.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (centerY - y) / 10;
    const rotateY = (x - centerX) / 10;

    card0.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
});

cardContainer0.addEventListener('mouseleave', () => {
    card0.style.transform = 'rotateX(0) rotateY(0) scale3d(1, 1, 1)';
});

card0.addEventListener('mouseenter', () => {
    card0.style.transition = 'none';
});

card0.addEventListener('mouseleave', () => {
    card0.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
});



cardContainer1.addEventListener('mousemove', (e) => {
    const rect = cardContainer1.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (centerY - y) / 10;
    const rotateY = (x - centerX) / 10;

    card1.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
});

cardContainer1.addEventListener('mouseleave', () => {
    card1.style.transform = 'rotateX(0) rotateY(0) scale3d(1, 1, 1)';
});

card1.addEventListener('mouseenter', () => {
    card1.style.transition = 'none';
});

card1.addEventListener('mouseleave', () => {
    card1.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
});

cardContainer2.addEventListener('mousemove', (e) => {
    const rect = cardContainer2.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (centerY - y) / 10;
    const rotateY = (x - centerX) / 10;

    card2.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
});

cardContainer2.addEventListener('mouseleave', () => {
    card2.style.transform = 'rotateX(0) rotateY(0) scale3d(1, 1, 1)';
});

card2.addEventListener('mouseenter', () => {
    card2.style.transition = 'none';
});

card2.addEventListener('mouseleave', () => {
    card2.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
});

cardContainer3.addEventListener('mousemove', (e) => {
    const rect = cardContainer3.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (centerY - y) / 10;
    const rotateY = (x - centerX) / 10;

    card3.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
});

cardContainer3.addEventListener('mouseleave', () => {
    card3.style.transform = 'rotateX(0) rotateY(0) scale3d(1, 1, 1)';
});

card3.addEventListener('mouseenter', () => {
    card3.style.transition = 'none';
});

card3.addEventListener('mouseleave', () => {
    card3.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
});


cardContainer4.addEventListener('mousemove', (e) => {
    const rect = cardContainer4.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (centerY - y) / 10;
    const rotateY = (x - centerX) / 10;

    card4.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
});

cardContainer4.addEventListener('mouseleave', () => {
    card4.style.transform = 'rotateX(0) rotateY(0) scale3d(1, 1, 1)';
});

card4.addEventListener('mouseenter', () => {
    card4.style.transition = 'none';
});

card4.addEventListener('mouseleave', () => {
    card4.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
});


cardContainer5.addEventListener('mousemove', (e) => {
    const rect = cardContainer5.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (centerY - y) / 10;
    const rotateY = (x - centerX) / 10;

    card5.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
});

cardContainer5.addEventListener('mouseleave', () => {
    card5.style.transform = 'rotateX(0) rotateY(0) scale3d(1, 1, 1)';
});

card5.addEventListener('mouseenter', () => {
    card0.style.transition = 'none';
});

card5.addEventListener('mouseleave', () => {
    card0.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
});
document.addEventListener("DOMContentLoaded", function() {
    AOS.init({
        duration: 1200, // Animation duration
        easing: 'ease-in-out', // Easing function
        once: true, // Whether animation should happen only once - while scrolling down
        mirror: false // Whether elements should animate out while scrolling past them
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const reveals = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    reveals.forEach(reveal => {
        revealObserver.observe(reveal);
    });
});
