import { LevelLayoutDataBlock } from "./schema/LevelLayout.js";
//https://github.com/json-editor/json-editor

const element = document.getElementById("form");

Handlebars.registerHelper("inc", function (value, options) {
  return parseInt(value) + 1;
});

const editor = new JSONEditor(element, {
  schema: LevelLayoutDataBlock,
  theme: "bootstrap4",
  template: "handlebars",
  iconlib: "fontawesome5",
  disable_properties: true,
  disable_edit_json: true,
});

//editor.on('change',() => {
//  console.log("Something changed");
//});
//
//editor.watch("root.Zones", () => {
//  console.log("Gaming");
//});
