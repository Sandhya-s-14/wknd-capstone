export default function decorate(block) {

   /* ONLY run this logic for tabs.one */
  if (block.classList.contains('one')) {

    const rows = [...block.children];
    const nav = document.createElement('ul');

    rows.forEach((row, index) => {
      const cols = [...row.children];
      if (!cols.length) return;

      const title = cols[0].textContent.trim();

      const li = document.createElement('li');
      const a = document.createElement('a');

      a.textContent = title;
      a.href = '#';

      if (index === 0) {
        a.classList.add('active');
      } else {
        row.style.display = 'none';
      }

      a.addEventListener('click', (e) => {
        e.preventDefault();

        nav.querySelectorAll('a').forEach((tab) => tab.classList.remove('active'));
        a.classList.add('active');

        rows.forEach((r) => {
          r.style.display = 'none';
        });

        row.style.display = '';
      });

      li.appendChild(a);
      nav.appendChild(li);

      cols[0].style.display = 'none';
    });

    block.prepend(nav);
    return;
  }
  const rows = [...block.children];
  const nav = document.createElement('ul');
 
  const cardsBlock = document.querySelector('.cards.tabs');
 
  rows.forEach((row) => {
    const cols = [...row.children];
    if (!cols.length) return;
 
    const title = cols[0].textContent.trim();
    const filter = title.toLowerCase();
 
    const li = document.createElement('li');
    const a = document.createElement('a');
 
    a.href = '#';
    a.textContent = title;
 
    a.addEventListener('click', (e) => {
      e.preventDefault();
 
      block.querySelectorAll('a').forEach((tab) => tab.classList.remove('active'));
      a.classList.add('active');
 
      if (!cardsBlock) return;
 
      const cards = cardsBlock.querySelectorAll('ul > li');
 
      cards.forEach((card) => {
        const category = (card.dataset.category || '').toLowerCase();
 
        if (filter === 'all' || category === filter) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
 
    li.append(a);
    nav.append(li);
  });
 
  block.textContent = '';
  block.append(nav);
}

