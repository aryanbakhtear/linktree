function openLink(url) {
  window.open(url, '_blank');
}

// Glitch D7 Animation - Letter by letter reveal with glitch effects
function initGlitchD7() {
  const h1 = document.querySelector('h1');
  if (!h1) return;
  
  const text = h1.textContent;
  h1.innerHTML = '';
  
  // Wrap each letter in a span
  text.split('').forEach((letter, index) => {
    const span = document.createElement('span');
    span.textContent = letter === ' ' ? '\u00A0' : letter; // Use non-breaking space for spaces
    span.className = 'glitch-letter';
    span.style.animationDelay = `${index * 0.1}s`;
    h1.appendChild(span);
  });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initGlitchD7);