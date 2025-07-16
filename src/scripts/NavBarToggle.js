export default function NavbarToggle() {
  return (
    <button
      id="navbar-toggle"
      class="md:hidden text-white text-2xl hover:text-blue-500"
      aria-label="Toggle Menu"
    >
      ☰
    </button>
  );
}

if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('navbar-toggle');
    const menu = document.getElementById('mobile-menu');
    let isOpen = false;

    button.addEventListener('click', () => {
      isOpen = !isOpen;
      button.textContent = isOpen ? '✕' : '☰';
      menu.classList.toggle('hidden', !isOpen);
      menu.classList.toggle('flex', isOpen);
    });

    document.querySelectorAll('#mobile-menu a').forEach(link => {
      link.addEventListener('click', () => {
        isOpen = false;
        button.textContent = '☰';
        menu.classList.add('hidden');
        menu.classList.remove('flex');
      });
    });
  });
}
