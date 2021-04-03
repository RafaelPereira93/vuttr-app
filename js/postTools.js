import renderHTMLTemplate from "./renderHTMLTemplate.js";

const urlApi = "https://my-vuttr-db.herokuapp.com/tools";

const postNewTool = async (tools) => {
  await fetch(urlApi, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tools),
  });

  renderHTMLTemplate();
};

export default postNewTool;
