// Smooth scrolling para navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Menu mobile toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Fechar menu mobile ao clicar em um link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Header background on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(0, 0, 0, 0.98)';
    } else {
        header.style.background = 'rgba(0, 0, 0, 0.95)';
    }
});

// Active navigation link
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Quick navigation clicks
document.querySelectorAll('.quick-nav-item').forEach(item => {
    item.addEventListener('click', () => {
        const section = item.getAttribute('data-section');
        const target = document.querySelector(`#${section}`);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Ranking tabs
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all tabs
        document.querySelectorAll('.tab-btn').forEach(tab => tab.classList.remove('active'));
        // Add active class to clicked tab
        btn.classList.add('active');
        
        // Here you would typically load different ranking data
        // For now, we'll just show a simple animation
        const rankingContent = document.querySelector('.ranking-content');
        rankingContent.style.opacity = '0.5';
        setTimeout(() => {
            rankingContent.style.opacity = '1';
        }, 300);
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.tournament-card, .award-card, .stat-card, .quick-nav-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Animate counters when stats section is visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.stat-content h3');
            counters.forEach(counter => {
                const target = parseInt(counter.textContent);
                if (!isNaN(target)) {
                    animateCounter(counter, target);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('#stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// Tournament card interactions
document.querySelectorAll('.tournament-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Award card hover effects
document.querySelectorAll('.award-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        const icon = card.querySelector('.award-icon');
        icon.style.transform = 'scale(1.1) rotate(10deg)';
    });
    
    card.addEventListener('mouseleave', () => {
        const icon = card.querySelector('.award-icon');
        icon.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Simulate live data updates
function updateLiveData() {
    // Update tournament progress
    const progressBars = document.querySelectorAll('.progress-fill');
    progressBars.forEach(bar => {
        const currentWidth = parseInt(bar.style.width) || 0;
        if (currentWidth < 100) {
            bar.style.width = Math.min(currentWidth + Math.random() * 5, 100) + '%';
        }
    });
    
    // Update player stats (simulate)
    const statNumbers = document.querySelectorAll('.stat-content h3');
    statNumbers.forEach(stat => {
        if (stat.textContent !== '24/7') {
            const current = parseInt(stat.textContent);
            if (!isNaN(current) && Math.random() > 0.8) {
                stat.textContent = current + 1;
            }
        }
    });
}

// Update live data every 30 seconds
setInterval(updateLiveData, 30000);

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Search functionality (placeholder)
function searchPlayers(query) {
    // This would typically connect to a backend API
    console.log('Searching for:', query);
    // Simulate search results
    return [
        { name: 'ChampionX1', rank: 1, points: 3120 },
        { name: 'ProGamer_02', rank: 2, points: 2850 },
        { name: 'SkillMaster', rank: 3, points: 2720 }
    ].filter(player => 
        player.name.toLowerCase().includes(query.toLowerCase())
    );
}

// Tournament registration (placeholder)
function registerForTournament(tournamentId) {
    // This would typically send data to a backend
    console.log('Registering for tournament:', tournamentId);
    alert('Registro realizado com sucesso! Você receberá mais informações em breve.');
}

// Add click handlers for registration buttons
document.querySelectorAll('.btn-outline').forEach(btn => {
    if (btn.textContent.includes('Inscrever')) {
        btn.addEventListener('click', () => {
            registerForTournament('liga-elite-x1');
        });
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close mobile menu
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Touch gestures for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleGesture();
});

function handleGesture() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - could navigate to next section
            console.log('Swiped left');
        } else {
            // Swipe right - could navigate to previous section
            console.log('Swiped right');
        }
    }
}

// Performance optimization
const lazyImages = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
        }
    });
});

lazyImages.forEach(img => imageObserver.observe(img));

console.log('EFOOTBALL PRO SERVER website loaded successfully!');

