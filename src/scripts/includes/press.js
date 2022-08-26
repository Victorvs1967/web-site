export const press = () => {
  const links = document.querySelectorAll('.press-list li');

  links.forEach(link => {
    link.addEventListener('click', () => link.classList.toggle('active'));
  });
};