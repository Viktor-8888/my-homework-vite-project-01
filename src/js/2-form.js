const formData = {
  email: '',
  message: '',
};
const feedbackForm = document.querySelector('.feedback-form');
getLocalStorage();
feedbackForm.addEventListener('input', handleInput);
function handleInput(event) {
  formData[event.target.name] = event.target.value.trim();
  const localStorageKey = 'feedback-form-state';
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
}

function getLocalStorage() {
  const saveLocalStorageKey = localStorage.getItem('feedback-form-state');
  if (!saveLocalStorageKey) {
    return;
  }
  const parsedLocalStorageKey = JSON.parse(saveLocalStorageKey);
  formData.email = parsedLocalStorageKey.email;
  formData.message = parsedLocalStorageKey.message;
  feedbackForm.elements.email.value = formData.email;
  feedbackForm.elements.message.value = formData.message;
}
feedbackForm.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log('🚀 ~ formData:', formData);
  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
  feedbackForm.reset();
}
