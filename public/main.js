

AOS.init({
  duration: 1000,
  once: true
})

// Initialize map
function initMap() {
  const mapDiv = document.getElementById('map')
  if (mapDiv) {
    const map = L.map('map').setView([5.397878,-3.991044], 13)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 18
        }).addTo(map);  L.marker([5.397878,-3.991044]).addTo(map)
      .bindPopup('Centre de Formation<br>123 Rue de l\'Education')
      .openPopup()
  }
}

// Load map after DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
  initMap()
})

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute('href'))
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  })
})

// Form submission handling
const form = document.querySelector('form')
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    alert('Merci pour votre message ! Nous vous contacterons bientôt.')
    form.reset()
  })
}

function initCounters() {
  const peopleCounter = new CountUp('projects-count', 5000, {
    duration: 4,
    suffix: '+',
    startVal: 0
  })

  const patenaireCounter = new CountUp('partners-count', 1000, {
    duration: 4,
    suffix: "+",
    startVal: 0
  })
  const StudentCounter = new CountUp('students-count', 1000, {
    duration: 4,
    suffix: "+",
    startVal: 0
  })

  // Start counter when section becomes visible
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        peopleCounter.start()
        patenaireCounter.start()
        StudentCounter.start()
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.5 })

  const statsSection = document.getElementById('statistics')
  if (statsSection) {
    observer.observe(statsSection)
  }
}

  document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
    let lastScrollTop = 0;

    window.addEventListener("scroll", () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        // Scroll vers le bas
        navbar.classList.add("navbar-hidden");
      } else {
        // Scroll vers le haut
        navbar.classList.remove("navbar-hidden");
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Éviter les valeurs négatives
    });
  });
