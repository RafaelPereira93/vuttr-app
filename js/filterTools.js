const box_tools = document.querySelector(".box-tools");
const inputSearch = document.querySelector('[data-js="search"]');
const checkboxTags = document.querySelector('[data-js="checkbox-tags"]');

const clearInput = () => (inputSearch.value = "");

const hideOrShowTools = (element, propertie) =>
  (element.style.display = propertie);

const showToolByContent = (inputValue, contentTool) => {
  contentTool.forEach((content) => {
    const textContentToLowerCase = content.textContent.toLowerCase();
    const inputValueToLowerCase = inputValue.toLowerCase();
    const isContentToolContainsInputValue = textContentToLowerCase.includes(
      inputValueToLowerCase
    );

    isContentToolContainsInputValue
      ? hideOrShowTools(content, "block")
      : hideOrShowTools(content, "none");
  });
};

const showToolByTags = (inputValue, tools) => {
  tools.forEach((tool) => {
    const tagsTool = tool.querySelector(".tags-tool");
    const contentTagsTool = tagsTool.textContent.trim().replaceAll("#", " ");

    const inputValueToLowerCase = inputValue.toLowerCase();
    const contentTagsToolToLowerCase = contentTagsTool.toLowerCase();
    const isCcontentTagsToolContainsInputValue = contentTagsToolToLowerCase.includes(
      inputValueToLowerCase
    );

    isCcontentTagsToolContainsInputValue
      ? hideOrShowTools(tool, "block")
      : hideOrShowTools(tool, "none");
  });
};

const filterTool = (event) => {
  const inputValue = event.target.value;
  const isCheckedOrNot = checkboxTags.checked;

  const tools = box_tools.querySelectorAll(".tool");

  isCheckedOrNot
    ? showToolByTags(inputValue, tools)
    : showToolByContent(inputValue, tools);
};

inputSearch.addEventListener("input", filterTool);
checkboxTags.addEventListener("change", clearInput);

export default filterTool;
