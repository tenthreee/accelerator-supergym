const form = document.querySelector('form');
const formName = document.querySelector('#user__name');
const formTel = document.querySelector('#user__tel');

let user = {
  name: '',
  tel: '',
};

let isStorageSupport = true;
let storage;

export const initStorage = () => {
  if (!form) {
    return;
  }

  try {
    storage = JSON.parse(localStorage.getItem('user'));
  } catch (err) {
    isStorageSupport = false;
  }

  if (storage) {
    formName.value = storage.name;
    formTel.value = storage.tel;
  }

  form.addEventListener('submit', function () {
    if (isStorageSupport) {
      user.name = formName.value;
      user.tel = formTel.value;

      localStorage.setItem('user', JSON.stringify(user));
    }
  });
};
