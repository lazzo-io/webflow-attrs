(function () {
  const script = document.currentScript;
  const apiKey = script.getAttribute("lazzo-api-key");
  const playlistId = script.getAttribute("lazzo-playlist-id");

  if (!apiKey || !playlistId) {
    console.error("Missing 'lazzo-api-key' o 'lazzo-playlist-id' at your script insert");
    return;
  }

  const YOUTUBE_API = `https://www.googleapis.com/youtube/v3/playlistItems?key=${apiKey}&part=snippet,contentDetails&playlistId=${playlistId}&maxResults=10`;

  document.addEventListener("DOMContentLoaded", () => {
    fetch(YOUTUBE_API)
      .then((res) => res.json())
      .then((data) => {
        const videos = data.items;
        const slides = document.querySelectorAll('[lazzo-youtube-slider="slide"]');

        videos.forEach((video, index) => {
          const slide = slides[index];
          if (!slide) return;

          const videoId = video.snippet.resourceId.videoId;
          const title = video.snippet.title;
          const description = video.snippet.description;
          const thumbnail = video.snippet.thumbnails.medium.url;
          const publishDate = new Date(video.contentDetails.videoPublishedAt).toLocaleDateString();

          const img = slide.querySelector('[lazzo-youtube-slider="thumbnail"]');
          const date = slide.querySelector('[lazzo-youtube-slider="date"]');
          const titleEl = slide.querySelector('[lazzo-youtube-slider="title"]');
          const descEl = slide.querySelector('[lazzo-youtube-slider="description"]');
          const linkEl = slide.querySelector('[lazzo-youtube-slider="link_click"]');

          if (img) {
            img.href = `https://www.youtube.com/watch?v=${videoId}`;
            img.style.backgroundImage = `url('${thumbnail}')`;
          }
          if (date) date.textContent = publishDate;
          if (titleEl) {
            titleEl.textContent = title.slice(0, 55);
          }
          if (descEl) descEl.textContent = description.slice(0, 90) + "...";
          if (linkEl) linkEl.href = `https://www.youtube.com/watch?v=${videoId}`;
        });
      })
      .catch((err) => console.error("YouTube API error:", err));
  });
})();
