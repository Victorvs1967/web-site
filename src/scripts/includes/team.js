export const team = () => {
  const boxes = document.querySelectorAll('.team-holder img');
  boxes.forEach(box => {
    box.addEventListener('mouseover', () => {
      boxes.forEach(b => b.style.opacity = .2);
      box.style.opacity = 1;
    });
    box.addEventListener('mouseout', () => boxes.forEach(b => b.style.opacity = 1));
  });
};