const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -145;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
};

export default scrollWithOffset;
