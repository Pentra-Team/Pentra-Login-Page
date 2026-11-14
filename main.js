// ---------- إظهار الباسوورد بالضغط، وإخفاؤه بالإفلات ----------
const passwordInput = document.getElementById('password');
const eyeBtn = document.getElementById('togglePassword');

function showPassword() {
  passwordInput.type = 'text';
  eyeBtn.classList.add('active');
}
function hidePassword() {
  passwordInput.type = 'password';
  eyeBtn.classList.remove('active');
}

eyeBtn.addEventListener('pointerdown', (e) => { e.preventDefault(); showPassword(); });
['pointerup', 'pointerleave', 'pointercancel'].forEach((ev) =>
  eyeBtn.addEventListener(ev, hidePassword)
);

// ---------- الفورم ----------
document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const password = passwordInput.value;

  if (!email || !password) {
    alert('الرجاء إدخال البريد الالكتروني وكلمة المرور');
    return;
  }
  console.log('Login:', { email, remember: document.getElementById('remember').checked });
});

// ---------- Auto-sliding Carousel ----------
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const INTERVAL = 4000;
let current = 0;
let timer;

function goTo(index) {
  slides[current].classList.remove('active');
  dots[current].classList.remove('active');
  current = (index + slides.length) % slides.length;
  slides[current].classList.add('active');
  dots[current].classList.add('active');
}

function startAuto() {
  clearInterval(timer);
  timer = setInterval(() => goTo(current + 1), INTERVAL);
}

dots.forEach((dot, i) =>
  dot.addEventListener('click', () => {
    goTo(i);
    startAuto();
  })
);

startAuto();