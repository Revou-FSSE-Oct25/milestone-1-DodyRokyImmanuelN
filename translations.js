const translations = {
  id: {
    // Navigation
    nav: {
      home: "Beranda",
      about: "Tentang",
      projects: "Proyek",
      contact: "Kontak",
    },
    // Hero Section
    hero: {
      greeting: "Hai 👋, saya",
      tagline:
        "Code is poetry written in a language only computers can understand",
      description:
        "Saat ini sedang belajar pengembangan web dan mencoba membuat hal-hal keren. Masih dalam proses belajar tapi menikmati perjalanannya!",
      cta: "Mari Bicara",
    },
    // About Section
    about: {
      title: "Tentang Saya",
      paragraph1:
        "Halo! Saya seorang calon software engineer yang suka mengubah ide menjadi sesuatu yang benar-benar berfungsi. Saya mulai coding karena rasa ingin tahu, bertanya-tanya bagaimana aplikasi dan website dibuat dan entah bagaimana itu menjadi salah satu hal favorit saya untuk dilakukan.",
      paragraph2:
        "Saat ini saya sedang menempuh pendidikan Teknik Informatika di Universitas Riau. Fokus utama saya adalah meningkatkan keterampilan dalam pengembangan web dan menjelajahi dunia kecerdasan buatan. Saya suka memadukan logika dan kreativitas untuk memecahkan masalah dunia nyata.",
      paragraph3:
        "Ketika tidak coding, saya suka membaca tentang teknologi, membuat sketsa ide, atau bereksperimen dengan tools baru hanya untuk melihat apa yang bisa mereka lakukan. Saya percaya belajar tidak pernah berhenti dan itulah yang membuat segalanya menarik.",
      skillsTitle: "Yang Saya Kerjakan:",
      skills: {
        webdev: "Pengembangan Web",
        ml: "Machine Learning",
        learning: "Masih belajar lebih banyak...",
      },
    },
    // Projects Section
    projects: {
      title: "Hal yang Telah Saya Buat",
      subtitle: "Tidak terlalu keren, tapi saya harap Anda menyukainya!",
      project1: {
        title: "Website Deteksi Penyakit Tanaman",
        description:
          "Aplikasi AI berbasis web yang mendeteksi penyakit pada daun tanaman menggunakan model klasifikasi gambar. Pengguna dapat mengunggah foto daun, dan sistem akan menampilkan penyakit yang terdeteksi beserta tingkat akurasinya.",
      },
      comingSoon: {
        title: "Proyek Lainnya Segera Hadir...",
        description:
          "Nantikan proyek-proyek mendatang saat saya terus belajar dan membuat hal-hal baru!",
      },
    },
    // Contact Section
    contact: {
      title: "Mari Berkomunikasi",
      subtitle: "Punya pertanyaan atau hanya ingin menyapa? Kirimkan pesan!",
      form: {
        name: "Nama",
        namePlaceholder: "Nama Anda",
        email: "Email",
        emailPlaceholder: "Email@anda.com",
        message: "Pesan",
        messagePlaceholder: "Pesan Anda di sini...",
        submit: "Kirim Pesan",
      },
    },
    // Footer
    footer: {
      text: "Dibuat dengan ☕ oleh Dody Roky © 2025",
    },
  },
  en: {
    // Navigation
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
    },
    // Hero Section
    hero: {
      greeting: "Hey there 👋, I'm",
      tagline:
        "Code is poetry written in a language only computers can understand",
      description:
        "Currently learning web development and trying to make cool things. Still figuring things out but enjoying the journey!",
      cta: "Let's Talk",
    },
    // About Section
    about: {
      title: "About Me",
      paragraph1:
        "Hi! I'm an aspiring software engineer who loves turning ideas into something that actually works. I started coding out of curiosity — wondering how apps and websites are built — and somehow it became one of my favorite things to do.",
      paragraph2:
        "I'm currently pursuing a degree in Informatics Engineering at Universitas Riau. My main focus is on improving my skills in web development and exploring the world of artificial intelligence. I love mixing logic and creativity to solve real-world problems.",
      paragraph3:
        "When I'm not coding, I enjoy reading about technology, sketching ideas, or experimenting with new tools just to see what they can do. I believe learning never stops — and that's what keeps things exciting.",
      skillsTitle: "Things I Work With:",
      skills: {
        webdev: "Web Development",
        ml: "Machine Learning",
        learning: "Still learning more...",
      },
    },
    // Projects Section
    projects: {
      title: "Stuff I've Built",
      subtitle: "Not really cool, but I hope you like it!",
      project1: {
        title: "Plant Disease Detection Website",
        description:
          "A web-based AI application that detects diseases on plant leaves using an image classification model. Users can upload a photo of a leaf, and the system will display the detected disease along with its accuracy level.",
      },
      comingSoon: {
        title: "More Projects Coming Soon...",
        description:
          "Stay tuned for upcoming projects as I continue learning and building new things!",
      },
    },
    // Contact Section
    contact: {
      title: "Get in Touch",
      subtitle: "Got a question or just want to say hi? Drop me a message!",
      form: {
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "Your@email.com",
        message: "Message",
        messagePlaceholder: "Your message here...",
        submit: "Send Message",
      },
    },
    // Footer
    footer: {
      text: "Made with ☕ by Dody Roky © 2025",
    },
  },
};

// Language Manager
class LanguageManager {
  constructor() {
    this.currentLang = localStorage.getItem("preferredLanguage") || "en";
    this.init();
  }

  init() {
    this.updateContent();
    this.updateToggleButton();
  }

  toggleLanguage() {
    this.currentLang = this.currentLang === "en" ? "id" : "en";
    localStorage.setItem("preferredLanguage", this.currentLang);
    this.updateContent();
    this.updateToggleButton();
  }

  updateToggleButton() {
    const langToggle = document.getElementById("lang-toggle");
    if (langToggle) {
      langToggle.textContent = this.currentLang === "en" ? "ID" : "EN";
      langToggle.setAttribute(
        "aria-label",
        this.currentLang === "en" ? "Switch to Indonesian" : "Switch to English"
      );
      langToggle.setAttribute(
        "data-tooltip",
        this.currentLang === "en" ? "Bahasa Indonesia" : "English"
      );
      // Set data-lang attribute untuk trigger CSS background
      langToggle.setAttribute("data-lang", this.currentLang);
    }
  }

  updateContent() {
    const t = translations[this.currentLang];

    // Update Navigation
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      const keys = key.split(".");
      let value = t;

      keys.forEach((k) => {
        value = value[k];
      });

      if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
        element.placeholder = value;
      } else {
        element.textContent = value;
      }
    });
  }
}

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  const langManager = new LanguageManager();

  const langToggle = document.getElementById("lang-toggle");
  if (langToggle) {
    langToggle.addEventListener("click", () => {
      langManager.toggleLanguage();
    });
  }
});
