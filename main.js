/* =====================================================
   Spice Garden Restaurant — Main Script
   Vanilla JavaScript (ES Modules)
   ===================================================== */

/* ---------- Config: change WhatsApp number here ---------- */
const WHATSAPP_NUMBER = "919876543210"; // placeholder — replace with real number
const WHATSAPP_MESSAGE =
  "Hello Spice Garden! I'd like to enquire about your menu and offers.";

/* ---------- Menu data ---------- */
const menuData = {
  starters: [
    {
      name: "Paneer Tikka",
      desc: "Cubes of cottage cheese marinated in spiced yogurt and char-grilled.",
      price: 220,
      tag: "Veg",
      img: "https://images.pexels.com/photos/24289165/pexels-photo-24289165.jpeg?auto=compress&cs=tinysrgb&h=400&w=600",
    },
    {
      name: "Chicken 65",
      desc: "Deep-fried chicken tossed in curry leaves and fiery South Indian spices.",
      price: 260,
      tag: "Non-Veg",
      img: "https://images.pexels.com/photos/6327536/pexels-photo-6327536.jpeg?auto=compress&cs=tinysrgb&h=400&w=600",
    },
    {
      name: "Veg Manchurian (Dry)",
      desc: "Crispy vegetable balls in a tangy Indo-Chinese garlic sauce.",
      price: 180,
      tag: "Veg",
      img: "https://images.pexels.com/photos/1327393/pexels-photo-1327393.jpeg?auto=compress&cs=tinysrgb&h=400&w=600",
    },
  ],
  "south-indian": [
    {
      name: "Masala Dosa",
      desc: "Crispy rice crepe stuffed with spiced potato masala, sambar & chutney.",
      price: 140,
      tag: "Veg",
      img: "https://images.pexels.com/photos/20422123/pexels-photo-20422123.jpeg?auto=compress&cs=tinysrgb&h=400&w=600",
    },
    {
      name: "Idli Sambar (4 pcs)",
      desc: "Steamed rice cakes served with lentil sambar and coconut chutney.",
      price: 90,
      tag: "Veg",
      img: "https://images.pexels.com/photos/20422121/pexels-photo-20422121.jpeg?auto=compress&cs=tinysrgb&h=400&w=600",
    },
    {
      name: "Mini Meals (South Indian Thali)",
      desc: "Rice, sambar, rasam, two curries, curd, pickle, papad & sweet.",
      price: 250,
      tag: "Veg",
      img: "https://images.pexels.com/photos/36388454/pexels-photo-36388454.jpeg?auto=compress&cs=tinysrgb&h=400&w=600",
    },
  ],
  "north-indian": [
    {
      name: "Hyderabadi Chicken Biryani",
      desc: "Long-grain basmati layered with marinated chicken, saffron & herbs.",
      price: 320,
      tag: "Non-Veg",
      img: "https://images.pexels.com/photos/28674660/pexels-photo-28674660.jpeg?auto=compress&cs=tinysrgb&h=400&w=600",
    },
    {
      name: "Paneer Butter Masala",
      desc: "Cottage cheese simmered in a rich, creamy tomato and cashew gravy.",
      price: 240,
      tag: "Veg",
      img: "https://images.pexels.com/photos/20408447/pexels-photo-20408447.jpeg?auto=compress&cs=tinysrgb&h=400&w=600",
    },
    {
      name: "Butter Naan & Dal Makhani Combo",
      desc: "Tandoor-baked naan with slow-cooked black lentils in butter cream.",
      price: 280,
      tag: "Veg",
      img: "https://images.pexels.com/photos/28125427/pexels-photo-28125427.jpeg?auto=compress&cs=tinysrgb&h=400&w=600",
    },
  ],
  chinese: [
    {
      name: "Hakka Noodles",
      desc: "Wok-tossed noodles with crunchy vegetables and soy-ginger seasoning.",
      price: 190,
      tag: "Veg",
      img: "https://images.pexels.com/photos/5848494/pexels-photo-5848494.jpeg?auto=compress&cs=tinysrgb&h=400&w=600",
    },
    {
      name: "Chicken Manchurian (Gravy)",
      desc: "Fried chicken dumplings in a spicy-sweet Indo-Chinese garlic sauce.",
      price: 230,
      tag: "Non-Veg",
      img: "https://images.pexels.com/photos/28895978/pexels-photo-28895978.jpeg?auto=compress&cs=tinysrgb&h=400&w=600",
    },
    {
      name: "Schezwan Fried Rice",
      desc: "Spicy schezwan-style fried rice with mixed vegetables and spring onion.",
      price: 200,
      tag: "Veg",
      img: "https://images.pexels.com/photos/30676160/pexels-photo-30676160.jpeg?auto=compress&cs=tinysrgb&h=400&w=600",
    },
  ],
  desserts: [
    {
      name: "Gulab Jamun (2 pcs)",
      desc: "Warm milk-solid dumplings soaked in cardamom-scented sugar syrup.",
      price: 90,
      tag: "Veg",
      img: "https://images.pexels.com/photos/11887844/pexels-photo-11887844.jpeg?auto=compress&cs=tinysrgb&h=400&w=600",
    },
    {
      name: "Rasmalai (2 pcs)",
      desc: "Soft cheese patties in saffron-pistachio milk, served chilled.",
      price: 110,
      tag: "Veg",
      img: "https://images.pexels.com/photos/8887011/pexels-photo-8887011.jpeg?auto=compress&cs=tinysrgb&h=400&w=600",
    },
    {
      name: "Ice Cream Sundae",
      desc: "Vanilla and chocolate ice cream with nuts, sauce & wafer.",
      price: 130,
      tag: "Veg",
      img: "https://images.pexels.com/photos/36445237/pexels-photo-36445237.jpeg?auto=compress&cs=tinysrgb&h=400&w=600",
    },
  ],
  beverages: [
    {
      name: "Mango Lassi",
      desc: "Thick yogurt smoothie blended with sweet Alphonso mango.",
      price: 80,
      tag: "Veg",
      img: "https://images.pexels.com/photos/17200460/pexels-photo-17200460.jpeg?auto=compress&cs=tinysrgb&h=400&w=600",
    },
    {
      name: "Masala Chai",
      desc: "Traditional Indian tea brewed with milk, ginger & spices.",
      price: 40,
      tag: "Veg",
      img: "https://images.pexels.com/photos/6808666/pexels-photo-6808666.jpeg?auto=compress&cs=tinysrgb&h=400&w=600",
    },
    {
      name: "Fresh Lime Soda",
      desc: "Refreshing lime soda — sweet, salted or mixed.",
      price: 50,
      tag: "Veg",
      img: "https://images.pexels.com/photos/8489804/pexels-photo-8489804.jpeg?auto=compress&cs=tinysrgb&h=400&w=600",
    },
  ],
};

/* ---------- Render menu cards ---------- */
function renderMenu(category) {
  const grid = document.getElementById("menuGrid");
  const items = menuData[category] || [];
  grid.innerHTML = items
    .map(
      (item) => `
      <div class="col-md-6 col-lg-4">
        <article class="menu-card">
          <img src="${item.img}" alt="${item.name}" class="menu-card-img" loading="lazy" />
          <div class="menu-card-body">
            <div class="menu-card-top">
              <h3 class="menu-card-title">${item.name}</h3>
              <span class="menu-card-price">₹${item.price}</span>
            </div>
            <p class="menu-card-desc">${item.desc}</p>
            <span class="menu-card-tag">${item.tag}</span>
          </div>
        </article>
      </div>`
    )
    .join("");
}

/* ---------- Menu tab switching ---------- */
function initMenuTabs() {
  const tabs = document.querySelectorAll(".menu-tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      renderMenu(tab.dataset.category);
    });
  });
}

/* ---------- Sticky navbar on scroll ---------- */
function initNavbarScroll() {
  const nav = document.getElementById("mainNav");
  const onScroll = () => {
    if (window.scrollY > 60) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* ---------- Auto-close mobile nav on link click ---------- */
function initMobileNavClose() {
  const navCollapse = document.getElementById("navMenu");
  const links = navCollapse.querySelectorAll(".nav-link, .btn-book-nav");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      if (navCollapse.classList.contains("show")) {
        const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
        if (bsCollapse) bsCollapse.hide();
      }
    });
  });
}

/* ---------- Scroll reveal animations ---------- */
function initScrollReveal() {
  const elements = document.querySelectorAll("[data-reveal]");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -50px 0px" }
  );
  elements.forEach((el) => observer.observe(el));
}

/* ---------- Back to top button ---------- */
function initBackToTop() {
  const btn = document.getElementById("backToTop");
  window.addEventListener(
    "scroll",
    () => {
      btn.classList.toggle("show", window.scrollY > 500);
    },
    { passive: true }
  );
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ---------- WhatsApp links ---------- */
function initWhatsAppLinks() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;
  const links = [
    document.getElementById("whatsappContact"),
    document.getElementById("whatsappBanner"),
    document.getElementById("whatsappFloat"),
  ];
  links.forEach((link) => {
    if (link) link.href = url;
  });
}

/* ---------- Booking form ---------- */
function initBookingForm() {
  const form = document.getElementById("bookingForm");
  const successBox = document.getElementById("bookingSuccess");
  const successText = document.getElementById("bookingSuccessText");
  const resetBtn = document.getElementById("bookingReset");

  // Prevent past dates
  const dateInput = document.getElementById("bkDate");
  if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.min = today;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }

    const name = document.getElementById("bkName").value.trim();
    const phone = document.getElementById("bkPhone").value.trim();
    const date = document.getElementById("bkDate").value;
    const time = document.getElementById("bkTime").value;
    const guests = document.getElementById("bkGuests").value;

    const formattedDate = new Date(date).toLocaleDateString("en-IN", {
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric",
    });

    successText.textContent = `Thank you, ${name}! Your table for ${guests} ${
      guests === "1" ? "guest" : "guests"
    } on ${formattedDate} at ${time} has been received. We'll call ${phone} shortly to confirm.`;

    // Hide form fields, show success
    Array.from(form.children).forEach((child) => {
      if (child !== successBox) child.style.display = "none";
    });
    successBox.hidden = false;
    successBox.scrollIntoView({ behavior: "smooth", block: "center" });
  });

  resetBtn.addEventListener("click", () => {
    form.reset();
    form.classList.remove("was-validated");
    successBox.hidden = true;
    Array.from(form.children).forEach((child) => {
      if (child !== successBox) child.style.display = "";
    });
  });
}

/* ---------- Footer year ---------- */
function initFooterYear() {
  const el = document.getElementById("footerYear");
  if (el) el.textContent = new Date().getFullYear();
}

/* ---------- Init everything ---------- */
document.addEventListener("DOMContentLoaded", () => {
  renderMenu("starters");
  initMenuTabs();
  initNavbarScroll();
  initMobileNavClose();
  initScrollReveal();
  initBackToTop();
  initWhatsAppLinks();
  initBookingForm();
  initFooterYear();
});
