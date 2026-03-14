document.querySelectorAll('.aside.block > div').forEach((item) => {
  item.addEventListener('click', () => {
    document.querySelector('.aside.block > div.active')?.classList.remove('active');
    item.classList.add('active');
  });
});
