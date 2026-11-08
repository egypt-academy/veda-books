const SAMPLES_URL = "https://drive.google.com/file/d/1HJ_S0v9c7fOcgzdAKjBItYa_bp2GCgLl/view?usp=sharing";
const WHATSAPP = "201283690139";

document.querySelectorAll(".samples-link").forEach(link => {
  link.href = SAMPLES_URL;
  link.target = "_blank";
  link.rel = "noopener";
});

document.querySelectorAll(".wa-link").forEach(link => {
  const plan = link.dataset.plan || "رياضيات الفيدا";
  const message = `أهلًا، أريد الاشتراك في ${plan} ومعرفة خطوات الدفع.`;
  link.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
  link.target = "_blank";
  link.rel = "noopener";
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add("on"); });
}, { threshold: .12 });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
