import addTool from "./js/addTool.js";
import renderHTMLTemplate from "./js/renderHTMLTemplate.js";

const add_new_tool = document.querySelector(".add-new-tool");
const wrapper_modal_tool = document.querySelector(".modal-new-tool");
const form_new_tool = document.querySelector(".form-new-tool");

const showModal = () => wrapper_modal_tool.classList.toggle("d-none");

const closeModal = (event) => {
  const isDatasetModal = event.target.dataset.js;

  isDatasetModal
    ? wrapper_modal_tool.classList.add("d-none")
    : wrapper_modal_tool.classList.remove("d-none");
};

renderHTMLTemplate();

add_new_tool.addEventListener("click", showModal);
wrapper_modal_tool.addEventListener("click", closeModal);

form_new_tool.addEventListener("submit", (event) => {
  event.preventDefault();
  addTool(event.target);
});
