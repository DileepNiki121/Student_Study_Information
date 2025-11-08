function toggleMobileMenu(){
  document.getElementById("mobile-menu-items").classList.toggle("menu-box");
}

function toggleTopic(element){
  const content = element.querySelector(".topic-content");
  content.style.display = (content.style.display === "block") ? "none" : "block";
}
