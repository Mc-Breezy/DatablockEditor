import { BaseDataBlock } from "./Components/Common.js";

const Rundown = {
  title: "Rundown",
  type: "object",
  properties: {
    ...BaseDataBlock,
  },
  options: {
    disable_edit_json: false,
    disable_collapse: true,
  },
};

export { Rundown };
