const VIDEO__URL = 'https://www.youtube.com/embed/9TZXsZItgdw?rel=0&showinfo=0&autoplay=1';

const createIframe = (url) => {
  const iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', url);
  iframe.classList.add('gym__video-media');

  return iframe;
};

const setupVideo = (video, url) => {
  const link = video.querySelector('.gym__video-link');
  const button = video.querySelector('.gym__video-button');

  video.addEventListener('click', () => {
    const iframe = createIframe(url);

    link.remove();
    button.remove();
    video.appendChild(iframe);
  });

  link.removeAttribute('href');
};

export const initVideo = () => {
  const video = document.querySelector('.js-video');

  if (video) {
    setupVideo(video, VIDEO__URL);
  }
};
