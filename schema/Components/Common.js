// Schema's for objects shared across data blocks

import { 
  eLocalZoneIndex, 
  eWardenObjectiveEventTrigger,
  eWardenObjectiveEventType,
  LG_LayerType,
  eDimensionIndex,
  TERM_Command,
  TERM_CommandRule
} from "./Enums.js";

import {
    Vector3
} from "./Unity.js";

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
    AreaDistance: {
      type: "integer"
    },
    WorldEventObjectFilterSpawnPoint: {
      type: "string"
    },
    SpawnDelay: {
      type: "number"
    },
    TriggerAlarm: {
      type: "boolean",
      format: "checkbox"
    },
    IntelMessage: {
      type: ["string", "integer"]
    }
  }
}

const WorldCondition = {
    type: "object",
    properties: {
      ConditionIndex: {
        type: "integer",
        default: -1
      },
      IsTrue: {
        type: "boolean",
        format: "checkbox",
        default: false
      }
    }
};

const WardenObjectiveEventData = {
  title: "Objective Events",
  type: "object",
  format: "grid",
  properties: {
    WorldEventObjectFilter: {
      type: "string"
    },
    WorldConditionPair: {
      ...WorldCondition
    },
    ChainPuzzle: {
      type: "integer"
    },
    UseStaticBioscanPoints: {
      type: "boolean",
      format: "checkbox"
    },
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
      type: ["string", "integer"]
    },
    CustomSubObjectiveHeader: {
      type: ["integer", "string"]
    },
    CustomSubObjective: {
      type: ["integer", "string"]
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
    EnemyID: {
      type: "integer"
    },
    Position: {
      ...Vector3
    },
    Count: {
      type: "integer"
    },
    Enabled: {
      type: "boolean",
      format: "checkbox"
    },
    TerminalCommand: {
      ...TERM_Command
    },
    TerminalCommandRule:{
      ...TERM_CommandRule
    },
    SustainedEventSlotIndex:{
      type: "integer"
    },
    SustainedEventStateCount:{
      type: "integer"
    },
    SustainedEventStateDuration:{
      type: "number",
      default: 0.0
    },
    SustainedEventDelay:{
      type: "number",
      default: 0.0
    }
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
