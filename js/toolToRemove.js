import { removeTool } from "./removeTool.js";

const box_tools = document.querySelector(".box-tools");

const toolToRemove = () => {
  const tools = box_tools.querySelectorAll(".tool");

  tools.forEach((tool) =>
    tool.addEventListener("click", ({ target }) => {
      const isTargetIsButton = target.classList.contains("remove-tool");

      if (isTargetIsButton) {
        const toolToRemove = target.dataset.tool;
        removeTool(toolToRemove);
      }
    })
  );
};

export default toolToRemove;
