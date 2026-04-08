const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuClose = document.getElementById('mobileMenuClose');

function toggleMenu() {
  if (!mobileMenu) return;
  mobileMenu.classList.toggle('active');
}

function closeMobileMenu() {
  if (!mobileMenu) return;
  mobileMenu.classList.remove('active');
}

window.closeMobileMenu = closeMobileMenu;

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', toggleMenu);
}

if (mobileMenuClose) {
  mobileMenuClose.addEventListener('click', closeMobileMenu);
}

window.addEventListener('click', (event) => {
  if (!mobileMenu || !mobileMenu.classList.contains('active')) return;
  if (event.target === mobileMenu) {
    closeMobileMenu();
  }
});

const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    if (!name || !email || !message) {
      alert('Please complete all fields before sending your message.');
      return;
    }
    contactForm.reset();
    alert('Thanks! Your message has been received. We will contact you soon.');
  });
}
