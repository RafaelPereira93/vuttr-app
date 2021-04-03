import renderHTMLTemplate from "./renderHTMLTemplate.js";

const modal_remove_tool = document.querySelector(".modal-remove-tool");
const remove_tool = modal_remove_tool.querySelector(".remove-tool");
const cancelButton = remove_tool.querySelector(".cancel-remove");
const buttonRemoveTool = modal_remove_tool.querySelector(".confirm-remove");

const baseUrl = "https://my-vuttr-db.herokuapp.com/tools";

const messageToRemoveTool = (tool) => {
  const content_remove_tool = modal_remove_tool.querySelector(
    ".content-remove-tool"
  );
  content_remove_tool.innerHTML = `Are you sure you want to remove <span class="color-tool">${tool}</span> ?`;
};

const insertToolToRemove = (nameTool) =>
  buttonRemoveTool.setAttribute("data-remove", nameTool);

const showOrHideModal = () => modal_remove_tool.classList.toggle("d-none");

export const removeTool = (nameTool) => {
  showOrHideModal();

  messageToRemoveTool(nameTool);

  insertToolToRemove(nameTool);
};

const idToRemoveTool = async (nameTool) => {
  const result = await fetch(`${baseUrl}?title=${nameTool}`);
  const json = await result.json();
  return json[0].id;
};

const remove = async (idTool) => {
  await fetch(`${baseUrl}/${idTool}`, {
    method: "DELETE",
  });

  renderHTMLTemplate();
};

const getToolToRemove = async ({ target }) => {
  const nameTool = target.dataset.remove;
  const idTool = await idToRemoveTool(nameTool);

  remove(idTool);
  showOrHideModal();
};

cancelButton.addEventListener("click", showOrHideModal);
buttonRemoveTool.addEventListener("click", getToolToRemove);
