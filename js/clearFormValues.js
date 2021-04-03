export const clearFormValues = (wrapperModal) => {
  const form = wrapperModal.querySelector("form");
  const inputsText = form.querySelectorAll('input[type="text"]');
  const textarea = form.querySelector("textarea");
  inputsText.forEach((input) => (input.value = ""));
  textarea.value = "";
};
