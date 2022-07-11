const catalogSelect = document.querySelector('.catalog__select');
const catalogOptionList = document.querySelector('.catalog__option-list');
const catalogOptions = document.querySelectorAll('.catalog__option');
const catalogCurrentOption = document.querySelector('.catalog__option--current')
const catalogCurrentFilter = document.querySelector('.catalog__current-filter');
const filterOptions = document.querySelector('#filter').querySelectorAll('option');

catalogCurrentFilter.textContent = catalogCurrentOption.textContent;

const onSelectClick = () => {
  catalogOptionList.classList.toggle('catalog__option-list--closed');
  catalogOptionList.classList.toggle('catalog__option-list--opened');
  catalogSelect.classList.toggle('catalog__select--closed');
  catalogSelect.classList.toggle('catalog__select--opened');
}

catalogSelect.addEventListener('click', () => {
  onSelectClick();
});

catalogOptions.forEach((el) => {
  el.addEventListener('click', () => {
    catalogOptions.forEach((option) => {
      option.classList.remove('catalog__option--current')
    });
    el.classList.add('catalog__option--current');
    catalogCurrentFilter.textContent = el.textContent;
    onSelectClick();

    filterOptions.forEach((filterOption) => {
      filterOption.removeAttribute('selected')
      if (el.id === filterOption.value) {
        filterOption.setAttribute('selected', 'selected');
      }
    })
  })
});
