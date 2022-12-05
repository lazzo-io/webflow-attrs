const social_button = document.querySelector('[lazzo-share-button]');

function shareButton() {
  let social = social_button.getAttribute('lazzo-share-button');

  var sb_text = document.title;
  var sb_url = window.location.href;
  var sb_link = window.location.href;

  if (social === "facebook") sb_link = "https://www.facebook.com/sharer/sharer.php?u=" + sb_url;

  if (social === "twitter")  sb_link = "https://twitter.com/intent/tweet?text=" + sb_text + "&url=" + sb_url;

  if (social === "linkedin")  sb_link = "http://www.linkedin.com/shareArticle?mini=true&title=" + sb_text + "&url=" + sb_url;

  //window.open(encodeURI(sb_link), '_blank');
  window.open(encodeURI(sb_link));
}

social_button.addEventListener("click", shareButton);
