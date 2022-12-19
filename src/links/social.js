const social_buttons = document.querySelectorAll("[lazzo-share-button]");
const clipboard_buttons = document.querySelectorAll("[lazzo-share-clipboard]");

function shareButton(event) {
  let social = event && event.currentTarget ? event.currentTarget.getAttribute("lazzo-share-button") : null;

  if (!social) {
    console.error("LAZZO ATTR [LS1001]: We could't find any element, please confirm you have one 'lazzo-share-button' attribute defined.");
  }

  let sb_text = document.title;
  let sb_url = window.location.href;
  let sb_link = window.location.href;

  if (!sb_text || !sb_url || !sb_link) {
    console.error("LAZZO ATTR [LS1002]: There is a problem trying to find the title or path from this page.");
  }

  if (social === "clipboard") sb_link = sb_url;

  if (social === "facebook") sb_link = "https://www.facebook.com/sharer/sharer.php?u=" + sb_url;

  if (social === "twitter") sb_link = "https://twitter.com/intent/tweet?text=" + sb_text + "&url=" + sb_url;

  if (social === "linkedin") sb_link = "http://www.linkedin.com/shareArticle?mini=true&title=" + sb_text + "&url=" + sb_url;

  window.open(encodeURI(sb_link));
}

function copyURL() {
  let current_url = window.location.href;

  navigator.clipboard.writeText(current_url);
}

social_buttons.forEach((sb) => {
  sb.addEventListener("click", shareButton);
});

clipboard_buttons.forEach((sb) => {
  sb.addEventListener("click", copyURL);
});
