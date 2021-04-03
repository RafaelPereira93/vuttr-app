import { getTools } from "./getTools.js";
import { clearFormValues } from "./clearFormValues.js";

const wrapper_modal_tool = document.querySelector(".modal-new-tool");

const sendMessageError = (message) => alert(message);

const verifyToolValues = (toolValues) => {
  let fields;

  const isEmptyFields = toolValues.every(({ value }) => !(value.trim() === ""));

  isEmptyFields ? (fields = toolValues) : null;

  return fields;
};

const addTool = (form) => {
  const toolTitle = form["tool-title"];
  const toolLink = form["tool-link"];
  const toolDescription = form["tool-description"];
  const toolTags = form["tool-tags"];

  const resultValues = verifyToolValues([
    toolTitle,
    toolLink,
    toolDescription,
    toolTags,
  ]);

  if (resultValues) {
    getTools(resultValues);
    wrapper_modal_tool.classList.add("d-none");
    clearFormValues(wrapper_modal_tool);
  } else {
    sendMessageError("Preencha todos os campos corretamente");
  }
};

export default addTool;
