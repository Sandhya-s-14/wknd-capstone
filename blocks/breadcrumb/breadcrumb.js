export default function decorate(block) {
  const rows = [...block.querySelectorAll('p')];
  const breadcrumb = document.createElement('div');
  breadcrumb.className = 'breadcrumb';
  rows.forEach((row, index) => {
    const item = document.createElement('span');
    item.className = 'breadcrumb-item';
    item.textContent = row.textContent.trim();
    breadcrumb.appendChild(item);
    if (index < rows.length - 1) {
      const arrow = document.createElement('span');
      arrow.className = 'breadcrumb-arrow';
      breadcrumb.appendChild(arrow);
    }
  });
  block.innerHTML = '';
  block.appendChild(breadcrumb);
}
