const headerElement = document.querySelector('.page-header__wrapper');
const navToggleElement = document.querySelector('.page-header__toggle');
const buyPopupElement = document.querySelector('.buy-popup');
const successPopupElement = document.querySelector('.success-popup');
const mainElement = document.querySelector('.main');
const closePopupButtonElement = document.querySelector('.buy-popup__close-button');
const submitPopupButtonElement = document.querySelector('.buy-popup__submit-button');
const closeSuccessPopupElement = document.querySelector('.success-popup__close-button');

headerElement.classList.remove('page-header__wrapper--nojs');

navToggleElement.addEventListener('click', function() {
  if (headerElement.classList.contains('page-header__wrapper--closed')) {
    headerElement.classList.remove('page-header__wrapper--closed');
    headerElement.classList.add('page-header__wrapper--opened');
  } else {
    headerElement.classList.add('page-header__wrapper--closed');
    headerElement.classList.remove('page-header__wrapper--opened');
  }
});

const isEscapeKey = (evt) => (
  evt.key === 'Escape'
);

const closeBuyPopup = () => {
  buyPopupElement.classList.add('popup--hidden');
};

const onPopupEscKeydown = (evtClose) => {
  if (isEscapeKey(evtClose)) {
    evtClose.preventDefault();
    closeBuyPopup();
  }
};

const removeEscListener = () => {
  document.removeEventListener('keydown', onPopupEscKeydown);
};

mainElement.addEventListener('click', (evtClick) => {
  if (evtClick.target.classList.value.includes('button--open-popup')) {

    buyPopupElement.classList.remove('popup--hidden');
    document.addEventListener('keydown', onPopupEscKeydown);

    closePopupButtonElement.addEventListener('click', function() {
      closeBuyPopup();
      removeEscListener();
    });

    submitPopupButtonElement.addEventListener('click', function() {
      buyPopupElement.classList.add('popup--hidden');
      successPopupElement.classList.remove('popup--hidden');

      closeSuccessPopupElement.addEventListener('click', function() {
        successPopupElement.classList.add('popup--hidden');
      });
    });
  }
});
