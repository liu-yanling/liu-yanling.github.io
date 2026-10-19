(function () {
  var I18N = {
    zh: {
      "nav.about": "关于",
      "nav.skills": "技能",
      "nav.projects": "作品",
      "nav.contact": "联系",
      "hero.greet": "你好，我是",
      "hero.title": "AI 产品经理 · AI 爱好者",
      "hero.tagline": "关注 AI 应用与产品，把好用的 AI 工具带给更多人。",
      "hero.location": "北京 · 中国",
      "hero.viewWork": "查看作品",
      "about.title": "关于我",
      "about.sub": "About Me",
      "about.p1": "AI 产品经理与 AI 爱好者，现居北京。热衷于探索 AI 在产品和创作中的应用，喜欢把想法做成可以直接使用的工具。",
      "about.p2": "相信好的 AI 产品应当简单、实用、尊重用户隐私。持续关注大模型、AI 创作工具与自动化工作流。",
      "skills.title": "技能",
      "skills.sub": "Skills",
      "skills.t1": "AI 产品管理",
      "skills.t2": "AI 工具应用",
      "skills.t3": "产品设计",
      "skills.t4": "用户研究",
      "skills.t5": "数据分析",
      "skills.t6": "快速原型",
      "projects.title": "作品",
      "projects.sub": "Projects",
      "projects.p1sub": "AI 仓库",
      "projects.p1desc": "个人 AI 项目与工具仓库，持续更新中。",
      "projects.viewRepo": "查看仓库 →",
      "contact.title": "联系我",
      "contact.sub": "Contact",
      "contact.locationLabel": "所在地",
      "contact.location": "北京 · 中国",
      "footer.note": "Built with ♥"
    },
    en: {
      "nav.about": "About",
      "nav.skills": "Skills",
      "nav.projects": "Projects",
      "nav.contact": "Contact",
      "hero.greet": "Hi, I'm",
      "hero.title": "AI Product Manager · AI Enthusiast",
      "hero.tagline": "Focused on AI applications and products — turning ideas into practical AI tools for everyone.",
      "hero.location": "Beijing, China",
      "hero.viewWork": "View Work",
      "about.title": "About Me",
      "about.sub": "关于我",
      "about.p1": "AI product manager and AI enthusiast based in Beijing. I love exploring how AI can power products and creative workflows, and turning ideas into tools that people can actually use.",
      "about.p2": "I believe great AI products should be simple, practical, and respectful of user privacy — always keeping an eye on LLMs, AI creative tools, and automation workflows.",
      "skills.title": "Skills",
      "skills.sub": "技能",
      "skills.t1": "AI Product Management",
      "skills.t2": "AI Tooling",
      "skills.t3": "Product Design",
      "skills.t4": "User Research",
      "skills.t5": "Data Analysis",
      "skills.t6": "Rapid Prototyping",
      "projects.title": "Projects",
      "projects.sub": "作品",
      "projects.p1sub": "AI Repository",
      "projects.p1desc": "A personal repository of AI projects and tools, updated continuously.",
      "projects.viewRepo": "View Repository →",
      "contact.title": "Contact",
      "contact.sub": "联系我",
      "contact.locationLabel": "Location",
      "contact.location": "Beijing, China",
      "footer.note": "Built with ♥"
    }
  };

  var STORAGE_KEY = "ly-lang";

  function apply(lang) {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (I18N[lang] && I18N[lang][key] !== undefined) {
        el.textContent = I18N[lang][key];
      }
    });
    document.querySelectorAll(".lang-opt").forEach(function (el) {
      el.classList.toggle("active", el.getAttribute("data-lang") === lang);
    });
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  function detectLang() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "zh" || saved === "en") return saved;
    } catch (e) {}
    return (navigator.language || "").toLowerCase().indexOf("zh") === 0 ? "zh" : "en";
  }

  var lang = detectLang();
  apply(lang);

  document.getElementById("langToggle").addEventListener("click", function () {
    lang = lang === "zh" ? "en" : "zh";
    apply(lang);
  });

  document.getElementById("year").textContent = new Date().getFullYear();
})();
