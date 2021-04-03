import postTools from "./postTools.js";

export const getTools = (tools) => {
  const formactToolToObject = tools.reduce((acc, tool) => {
    const toolTitle = tool.id.replace("tool-", "");
    const toolValue = tool.value;
    const toolTags = tool.id === "tool-tags";

    if (toolTags) {
      acc[toolTitle] = tool.value.split(" ").filter((tag) => tag);
      return acc;
    }

    acc[toolTitle] = toolValue;
    return acc;
  }, {});

  postTools(formactToolToObject);
};
