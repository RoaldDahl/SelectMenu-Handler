async function loadSelectMenus(client) {
  const { loadFiles } = require("../../Structures/Functions/FileLoader/FileLoader.js");
  const ascii = require("ascii-table");
  const table = new ascii("Select Menus List");
  
  const Files = await loadFiles("SelectMenus");
  
  Files.forEach((file) => {
    const selectMenu = require(file);

    client.selectMenus.set(selectMenu.name, selectMenu);
    table.setHeading(`Modal ID`, `Status`);
    table.addRow(`${selectMenu.name}`, "🟩 Success");
  });
  
  return console.log(table.toString())
}
    
module.exports = { loadSelectMenus };
