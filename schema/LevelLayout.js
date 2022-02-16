import { ExpeditionZoneData } from "./Components/ExpeditionZoneData.js";
import { BaseDataBlock } from "./Components/Common.js";

const LevelLayoutDataBlock = {
  title: "Level Layout",
  type: "object",
  properties: {
    ...BaseDataBlock,
    ZoneAliasStart: {
      type: "integer"
    },
    Zones: {
      type: "array",
      format: "tabs-top",
      items: {
        ...ExpeditionZoneData,
      },
      options: {
        disable_collapse: true,
      },
    },
  },
  options: {
    disable_edit_json: false,
    disable_collapse: true,
  },
};

export { LevelLayoutDataBlock };
