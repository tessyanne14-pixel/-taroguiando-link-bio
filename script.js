const LINKS = {
  tarot: "TODO",
  volta: "TODO",
  whatsapp: "TODO",
  site: "TODO"
};

document.querySelectorAll("[data-link]").forEach((el) => {
  const key = el.dataset.link;
  const url = LINKS[key];
  if (url && url !== "TODO") {
    el.href = url;
    if (url.startsWith("http")) {
      el.target = "_blank";
      el.rel = "noopener noreferrer";
    }
  }
});
