import toolToRemove from "./toolToRemove.js";
import filterTool from "./filterTools.js";

const box_tools = document.querySelector(".box-tools");
const urlApi = "https://my-vuttr-db.herokuapp.com/tools";

const getToolList = async () => {
  const response = await fetch(urlApi);
  const json = await response.json();
  return json;
};

const renderHTMLTemplate = async () => {
  const listTools = await getToolList();

  const toolsTemplate = listTools
    .map(({ title, link, description, tags }) => {
      return `
      <div class="tool" data-tool="${title}">
        <div class="header-tool">
          <h4 class="title-tool"><a href="${link}" target="_blank">${title}</a></h4>
          <button class="remove-tool" data-tool="${title}">remove</button>
        </div>
        <div class="content-tool">
          <p class="description-tool">${description}</p>
          <div class="tags-tool">
            ${tags.map((tag) => `<span class="tag">#${tag}</span>`).join("")}
          </div>
        </div>
       </div>
    `;
    })
    .join("");

  box_tools.innerHTML = toolsTemplate;

  toolToRemove();
};

export default renderHTMLTemplate;
