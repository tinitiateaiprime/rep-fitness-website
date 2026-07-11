export const attachComparisonSlider = () => {
  const comparisonSlider = document.querySelector<HTMLInputElement>('[data-comparison-slider]');
  const comparisonAfter = document.querySelector<HTMLElement>('[data-comparison-after]');
  const comparison = document.querySelector<HTMLElement>('.comparison');

  comparisonSlider?.addEventListener('input', () => {
    const reveal = `${comparisonSlider.value}%`;
    comparison?.style.setProperty('--reveal', reveal);
    comparisonAfter?.style.setProperty('--reveal', reveal);
  });
};
