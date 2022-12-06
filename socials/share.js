const social_buttons = document.querySelector("[lazzo-share-button]");

function shareButton(event) {
  let social = event.getAttribute("lazzo-share-button");

  let sb_text = document.title;
  let sb_url = window.location.href;
  let sb_link = window.location.href;

  if (social === "facebook") sb_link = "https://www.facebook.com/sharer/sharer.php?u=" + sb_url;

  if (social === "twitter") sb_link = "https://twitter.com/intent/tweet?text=" + sb_text + "&url=" + sb_url;

  if (social === "linkedin") sb_link = "http://www.linkedin.com/shareArticle?mini=true&title=" + sb_text + "&url=" + sb_url;

  window.open(encodeURI(sb_link));
}

selects.forEach((sb) => {
  sb.addEventListener("click", shareButton);
});
