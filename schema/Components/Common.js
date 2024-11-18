// Schema's for objects shared across data blocks

import { 
  eLocalZoneIndex, 
  eWardenObjectiveEventTrigger,
  eWardenObjectiveEventType,
  LG_LayerType,
  eDimensionIndex
 } from "./Enums.js";

const ZonePlacementWeights = {
  description: "Weights for where in the zone the item is placed",
  type: "object",
  properties: {
    Start: {
      type: "integer",
    },
    Middle: {
      type: "integer",
    },
    End: {
      type: "integer",
    },
  },
};

const ZonePlacementData = {
  title: "Spawn",
  headerTemplate: "Zone {{inc self.LocalIndex}} Spawn",
  type: "object",
  format: "grid",
  properties: {
    LocalIndex: {
      ...eLocalZoneIndex,
    },
    DimensionIndex: {
      ...eDimensionIndex
    },
    Weights: {
      ...ZonePlacementWeights,
    },
  },
};

const GenericEnemyWaveData = {
  type: "object",
  properties: {
    WaveSettings: {
      type: "integer"
    },
    WavePopulation: {
      type: "integer"
    },
    SpawnDelay: {
      type: "number"
    },
    TriggerAlarm: {
      type: "boolean",
      format: "checkbox"
    },
    IntelMessage: {
      type: "string"
    }
  }
}

const WardenObjectiveEventData = {
  title: "Objective Events",
  type: "object",
  format: "grid",
  properties: {
    Trigger: {
      ...eWardenObjectiveEventTrigger
    },
    Type: {
      ...eWardenObjectiveEventType
    },
    Layer: {
      ...LG_LayerType
    },
    DimensionIndex: {
      ...eDimensionIndex
    },
    LocalIndex: {
      ...eLocalZoneIndex
    },
    Delay: {
      type: "number"
    },
    Duration: {
      type: "number"
    },
    ClearDimension: {
      type: "boolean",
      format: "checkbox"
    },
    WardenIntel: {
      type: "string"
    },
    CustomSubObjectiveHeader: {
      type: "string"
    },
    CustomSubObjective: {
      type: "string"
    },
    SoundID: {
      type: "integer"
    },
    DialogueID: {
      type: "integer"
    },
    FogSetting: {
      type: "integer"
    },
    FogTransitionDuration: {
      type: "number"
    },
    EnemyWaveData: {
      ...GenericEnemyWaveData
    },

    ChainPuzzle: {
      type: "integer"
    },
    UseStaticBioscanPoints: {
      type: "boolean",
      format: "checkbox"
    },
  }
}

const WorldEventFromSourceData = {
    ...WardenObjectiveEventData,
    title: "Objective Events",
    type: "object",
    format: "grid",
    properties: {
        WorldEventTriggerObjectFilter: {
            type: "string"
        },
        ...WardenObjectiveEventData.properties
    }
};

const SpecificChainPuzzleSpawnData = {
    title: "Chained Puzzle Events",
    type: "object",
    format: "grid",
    properties: {
        ChainedPuzzle: {
            type: "integer"
        },
        WorldEventObjectFilter: {
            type: "string"
        },
        EventsOnScanDone: {
            type: "array",
            items: {
                ...WardenObjectiveEventData,
            },
            options: {
                collapsed: true,
            },
        }
    }
}; 

const PersistentID = {
  persistentID: {
    title: "Persistent ID",
    type: "integer",
    description: "Used to reference other datablocks",
  },
};

const BaseDataBlock = {
  name: {
    title: "Name",
    description: "Not visible in game, use this for reference",
    type: "string",
  },
  ...PersistentID,
};

export { 
  ZonePlacementWeights, 
  ZonePlacementData, 
  BaseDataBlock, 
  PersistentID,
  GenericEnemyWaveData,
  WardenObjectiveEventData,
  WorldEventFromSourceData,
  SpecificChainPuzzleSpawnData
};
