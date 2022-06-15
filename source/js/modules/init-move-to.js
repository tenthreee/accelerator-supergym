export const initMoveTo = () => {
  const linkElements = document.querySelectorAll('[data-navigation-link]');
  const moveTo = new window.MoveTo({
    duration: '800',
    easing: 'easeOutQuart',
  });

  linkElements.forEach((link) => {
    link.addEventListener('click', (evt) => {
      evt.preventDefault();
      const target = document.querySelector(`${link.getAttribute('href')}`);
      if (!target) {
        return;
      }
      moveTo.move(target);
    });
  });
};
