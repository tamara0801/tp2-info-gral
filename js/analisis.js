

const accordions = document.querySelectorAll('.accordion-button');

  accordions.forEach(btn => {
    btn.addEventListener('click', () => {
      const icon = btn.querySelector('.accordion-icon');
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      // Cambia el icono según el estado
      icon.textContent = expanded ? '+' : '−';
    });
  });