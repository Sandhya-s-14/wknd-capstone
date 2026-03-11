export default function decorate(block) {

  const rows = block.querySelectorAll(':scope > div');

  rows.forEach((row) => {
    const cols = row.children;

    if (cols.length < 2) return;

    const header = cols[0];
    const content = cols[1];

    header.classList.add('accordion-header');
    content.classList.add('accordion-content');

    content.style.display = 'none';

    header.addEventListener('click', () => {

      const open = row.classList.contains('active');

      block.querySelectorAll('.active').forEach((item) => {
        item.classList.remove('active');
        item.querySelector('.accordion-content').style.display = 'none';
      });

      if (!open) {
        row.classList.add('active');
        content.style.display = 'block';
      }
    });
  });
}