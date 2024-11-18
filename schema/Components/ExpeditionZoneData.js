import {
  LG_StaticDistributionWeightType,
  SubComplex,
  TERM_State,
  eZoneDistributionAmount,
  eEnemyRoleDifficulty,
  eEnemyGroupType,
  eEnemyZoneDistribution,
  eProgressionPuzzleType,
  eLocalZoneIndex,
  eSecurityGateType,
  eZoneBuildFromExpansionType,
  eZoneBuildFromType,
  eZoneExpansionType,
  eSeedType,
  TerminalLineType,
  TERM_CommandRule
} from "./Enums.js";
import { Vector2 } from "./Unity.js";
import {
  ZonePlacementWeights,
  ZonePlacementData,
  PersistentID,
  WardenObjectiveEventData,
  WorldEventFromSourceData
} from "./Common.js";

//Components
const ActiveEnemyWave = {
  title: "Blood Door",
  type: "object",
  properties: {
    HasActiveEnemyWave: {
      title: "Enabled",
      description: "Enables the blood door",
      type: "boolean",
      format: "checkbox",
    },
    EnemyGroupInfrontOfDoor: {
      title: "Enemy group in front of door",
      description: "",
      type: "integer",
    },
    EnemyGroupInArea: {
      title: "Enemy group in area",
      description: "",
      type: "integer",
    },
    EnemyGroupsInArea: {
      title: "Enemy group in area",
      description: "",
      type: "integer",
    },
  },
  options: {
    collapsed: true,
  },
};

const AltitudeData = {
  type: "object",
  format: "grid",
  properties: {
    AllowedZoneAltitude: {
      type: "integer",
      enum: [0, 1, 3, 2, 4, 5, 6, 7, 8, 9],
      options: {
        enum_titles: [
          "(0) Low / Mid / High",
          "(1) Only Low",
          "(2) Only Mid",
          "(3) Only High",
          "(4) Low Mid",
          "(5) Mid High",
          "(6) Low High",
          "(7) Ascending",
          "(8) Descending",
          "(9) Unchanged",
        ],
      },
    },
    ChanceToChange: {
      type: "number",
    },
  },
};

const EnemySpawningData = {
  title: "Enemy Spawning",
  type: "object",
  format: "grid",
  properties: {
    Difficulty: {
      ...eEnemyRoleDifficulty,
    },
    GroupType: {
      ...eEnemyGroupType,
    },
    Distribution: {
      ...eEnemyZoneDistribution,
    },
    DistributionValue: {
      type: "integer",
    },
  },
};

const FunctionPlacementData = {
  type: "object",
  properties: {
    AreaSeedOffset: {
      type: "integer",
      options: {
        grid_columns: 6,
      },
    },
    MarkerSeedOffset: {
      type: "integer",
      options: {
        grid_columns: 6,
      },
    },
    PlacementWeights: {
      title: "Placement Weights",
      ...ZonePlacementWeights,
    },
  },
  options: {
    format: "grid",
  },
};

const LevelEventWardenIntelData = {
  type: "object",
  properties: {
    Enabled: {
      type: "boolean",
      format: "checkbox",
    },
    //Update this to some sort of rich text editor
    IntelMessage: {
      type: "string",
      format: "textarea",
    },
  },
};

const LevelEventNoiseData = {
  type: "object",
  properties: {
    Enabled: {
      type: "boolean",
      format: "checkbox",
    },
    RadiusMin: {
      type: "integer",
    },
    RadiusMax: {
      type: "integer",
    },
  },
};

const LevelEventSoundData = {
  type: "object",
  properties: {
    Enabled: {
      type: "boolean",
      format: "checkbox",
    },
    SoundEvent: {
      type: "integer",
    },
  },
};

const LevelEventData = {
  title: "Event Data",
  type: "object",
  properties: {
    Delay: {
      type: "integer",
    },
    Intel: {
      ...LevelEventWardenIntelData,
    },
    Noise: {
      ...LevelEventNoiseData,
    },
    Sound: {
      ...LevelEventSoundData,
    },
  },
};

const ProgressionPuzzleToEnter = {
  type: "object",
  format: "grid",
  properties: {
    PuzzleType: {
      ...eProgressionPuzzleType,
    },
    PlacementCount: {
      type: "integer",
      options: {
        grid_columns: 2,
      },
    },
    CustomText: {
      title: "Locked Text",
      description: "Door in lockdown text",
      type: "string",
      options: {
        grid_columns: 12,
      },
    },
    ZonePlacementData: {
      type: "array",
      items: {
        ...ZonePlacementData,
      },
      options: {
        collapsed: true,
      },
    },
  },
  options: {
    collapsed: true,
  },
};

const StaticSpawnDataContainer = {
  title: "Static Spawn",
  type: "object",
  properties: {
    StaticSpawnDataId: {
      type: "integer",
    },
    Count: {
      type: "integer",
    },
    DistributionWeightType: {
      ...LG_StaticDistributionWeightType,
    },
    DistributionWeight: {
      type: "integer",
    },
    DistributionRandomBlend: {
      type: "integer",
    },
    DistributionResultPow: {
      type: "integer",
    },
    FixedSeed: {
      type: "integer",
    },
  },
};

const TerminalLogFileData = {
  title: "Log",
  type: "object",
  headerTemplate: "{{#if self.FileName}}{{self.FileName}}{{else}}Log{{/if}}",
  properties: {
    //rich text
    FileName: {
      type: "string",
    },
    FileContent: {
      type: "string",
      format: "textarea",
    },
    AttachedAudioFile: {
      type: "integer",
    },
    AttachedAudioByteSize: {
      type: "integer",
    },
    PlayerDialogToTriggerAfterAudio: {
      type: "integer",
    },
  },
};

const TerminalZoneSelectionData = {
  title: "Terminal Location",
  type: "object",
  properties: {
    LocalIndex: {
      title: "Zone Index",
      type: "integer",
      ...eLocalZoneIndex,
    },
    SeedType: {
      ...eSeedType,
    },
    TerminalIndex: {
      type: "integer",
    },
    StaticSeed: {
      type: "integer",
    },
  },
};

const TerminalStartStateData = {
  type: "object",
  properties: {
    StartingState: {
      ...TERM_State,
    },
    PasswordProtected: {
      format: "checkbox",
      type: "boolean",
    },
    GeneratePassword: {
      format: "checkbox",
      type: "boolean",
    },
    Password: {
      type: "string",
    },
    PasswordHintText: {
      type: "string",
    },
    PasswordPartCount: {
      type: "integer",
    },
    ShowPasswordLength: {
      format: "checkbox",
      type: "boolean",
    },
    ShowPasswordPartPositions: {
      format: "checkbox",
      type: "boolean",
    },
    TerminalZoneSelectionDatas: {
      type: "array",
      items: {
        title: "Password Zone Placement",
        type: "array",
        items: {
          ...TerminalZoneSelectionData,
        },
      },
    },
    AudioEventEnter: {
      type: "integer",
    },
    AudioEventExit: {
      type: "integer",
    },
  },
};

const TerminalOutput = {
  type: "object",
  properties: {
    LineType: {
      ...TerminalLineType
    },
    Output: {
      type: "string"
    },
    Time: {
      type: "number"
    }
  }
}

const CustomTerminalCommand = {
  type: "object",
  properties: {
    Command: {
      type: "string"
    },
    CommandDesc:{
      type: "string"
    },
    PostCommandOutputs: {
      type: "array",
      items: {
        ...TerminalOutput
      }
    },
    CommandEvents: {
      type: "array",
      items: {
        ...WardenObjectiveEventData
      }
    },
    SpecialCommandRule: {
      ...TERM_CommandRule
    }
  }
}

const TerminalPlacementData = {
  title: "Terminal",
  type: "object",
  properties: {
    LocalLogFiles: {
      type: "array",
      items: {
        ...TerminalLogFileData,
      },
    },
    UniqueCommands: {
      type: "array",
      items: {
        ...CustomTerminalCommand
      }
    },
    StartingStateData: {
      ...TerminalStartStateData,
      options: {
        collapsed: true,
      },
    },
    AreaSeedOffset: {
      type: "integer",
    },
    MarkerSeedOffset: {
      type: "integer",
    },
    PlacementWeights: {
      ...ZonePlacementWeights,
      options: {
        collapsed: true,
      },
    },
  },
};

//Main module
const ExpeditionZoneData = 
{
  title: "Zone",
  type: "object",
  format: "grid-strict",
  headerTemplate:
    "Zone {{self.LocalIndex }} (Builds from {{self.BuildFromLocalIndex}})",
  properties: {
    //Unused / cut properties

    //Alias: {
    //  title: "Alias",
    //  type: "integer",
    //  description: "Unknown",
    //},
    //DeconUnitsInZone: {
    //  ...eZoneDistributionAmount,
    //},

    //Zone build settings
    _header_zone: {
      type: "info",
      title: "<h1>Zone Settings</h1",
      options: {
        compact: true,
        grid_columns: 12,
      },
    },
    OverrideAliasPrefix: {
      type: "boolean",
      format: "checkbox"
    },
    IsCheckpointDoor: {
      type: "boolean",
      format: "checkbox"
    },
    PlayScannerVoiceAudio: {
      type: "boolean",
      format: "checkbox"
    },
    AliasOverride: {
      type: "integer"
    },
    AliasPrefixOverride: {
      type: "string"
    },
    AliasPrefixShortOverride: {
      type: "string"
    },
    MarkerSubSeed: {
      type: "integer"
    },
    LightsSubSeed: {
      type: "integer"
    },
    LocalIndex: {
      title: "Zone Index",
      type: "integer",
      description:
        "The index of this zone. This gets offset by the setting in the rundown data block",
      ...eLocalZoneIndex,
    },
    BuildFromLocalIndex: {
      title: "Build From",
      type: "integer",
      description: "What zone index this zone should build from",
      ...eLocalZoneIndex,
    },
    SubComplex: {
      ...SubComplex,
    },
    StartPosition: {
      ...eZoneBuildFromType,
    },
    StartExpansion: {
      ...eZoneBuildFromExpansionType,
    },
    ZoneExpansion: {
      ...eZoneExpansionType,
    },
    SecurityGateToEnter: {
      ...eSecurityGateType,
    },
    StartPosition_IndexWeight: {
      type: "number",
      options: {
        grid_columns: 3,
      },
    },
    ChainedPuzzleToEnter: {
      type: "integer",
      options: {
        grid_columns: 3,
      },
    },
    LightSettings: {
      type: "integer",
      options: {
        grid_columns: 3,
      },
    },
    SubSeed: {
      type: "integer",
      options: {
        grid_columns: 6,
      },
    },
    BulkheadDCScanSeed: {
      type: "integer",
      options: {
        grid_columns: 6,
      },
    },
    CustomGeomorph: {
      type: "string",
      options: {
        grid_columns: 12,
      },
    },
    IgnoreRandomGeomorphRotation: {
      type: "boolean",
      format: "checkbox"
    },
    TurnOffAlarmOnTerminal: {
      title: "Disable alarm on terminal?",
      type: "boolean",
      format: "checkbox",
      options: {
        grid_columns: 12,
      },
    },
    TerminalPuzzleZone: {
      ...TerminalZoneSelectionData,
      title: "Alarm disable location",
      options: {
        collapsed: true,
      },
    },
    CoverageMinMax: {
      ...Vector2,
      options: {
        collapsed: true,
      },
    },
    AltitudeData: {
      ...AltitudeData,
      options: {
        collapsed: true,
      },
    },
    ProgressionPuzzleToEnter: {
      ...ProgressionPuzzleToEnter,
    },
    ActiveEnemyWave: {
      ...ActiveEnemyWave,
    },

    //Resources

    _header_resources: {
      type: "info",
      title: "<h1>Resources</h1",
      options: {
        compact: true,
        grid_columns: 12,
      },
    },

    HealthMulti: {
      title: "Health Amount",
      type: "number",
      options: {
        grid_columns: 3,
      },
    },
    WeaponAmmoMulti: {
      title: "Ammo Amount",
      type: "number",
      options: {
        grid_columns: 3,
      },
    },
    ToolAmmoMulti: {
      title: "Tool Amount",
      type: "number",
      options: {
        grid_columns: 3,
      },
    },
    DisinfectionMulti: {
      title: "Disinfection Amount",
      type: "number",
      options: {
        grid_columns: 3,
      },
    },
    HealthPlacement: {
      title: "Health",
      ...ZonePlacementWeights,
      options: {
        grid_columns: 3,
        collapsed: true,
      },
    },
    WeaponAmmoPlacement: {
      title: "Ammo",
      ...ZonePlacementWeights,
      options: {
        grid_columns: 3,
        collapsed: true,
      },
    },
    ToolAmmoPlacement: {
      title: "Tool",
      ...ZonePlacementWeights,
      options: {
        grid_columns: 3,
        collapsed: true,
      },
    },
    DisinfectionPlacement: {
      title: "Disinfect",
      ...ZonePlacementWeights,
      options: {
        grid_columns: 3,
        collapsed: true,
      },
    },

    //Resource config

    _header_resourcesconfig: {
      type: "info",
      title: "<h1>Resource Config</h1",
      options: {
        compact: true,
        grid_columns: 12,
      },
    },

    DisinfectionStationPlacements: {
      type: "array",
      items: {
        title: "Disinfection Station",
        ...FunctionPlacementData,
        options: {
          collapsed: true,
        },
      },
    },
    ConsumableDistributionInZone: {
      type: "integer",
      options: {
        grid_columns: 6,
      },
    },
    BigPickupDistributionInZone: {
      type: "integer",
      options: {
        grid_columns: 6,
      },
    },
    ResourceContainerClustersInZone: {
      type: "integer",
      options: {
        grid_columns: 12,
      },
    },
    ForceBigPickupsAllocation: {
      type: "boolean",
      format: "checkbox",
      options: {
        grid_columns: 12,
      },
    },
    AllowResourceContainerAllocation: {
      type: "boolean",
      format: "checkbox",
      options: {
        grid_columns: 12,
      },
    },
    AllowSmallPickupsAllocation: {
      type: "boolean",
      format: "checkbox",
      options: {
        grid_columns: 12,
      },
    },

    //Enemy Spawning

    _header_enemy: {
      type: "info",
      title: "<h1>Enemy Spawning</h1>",
      options: {
        compact: true,
        grid_columns: 12,
      },
    },

    EnemySpawningInZone: {
      title: "Enemy Spawning",
      type: "array",
      items: {
        ...EnemySpawningData,
      },
    },

    //Enemy Respawning

    _header_enemyrespawn: {
      type: "info",
      title: "<h1>Enemy Respawning</h1>",
      options: {
        compact: true,
        grid_columns: 12,
      },
    },

    EnemyRespawning: {
      type: "boolean",
      format: "checkbox",
      options: {
        grid_columns: 12,
      },
    },
    EnemyRespawnCountMultiplier: {
      type: "integer",
      options: {
        grid_columns: 12,
      },
    },
    EnemyRespawnRequireOtherZone: {
      type: "boolean",
      format: "checkbox",
      options: {
        grid_columns: 12,
      },
    },
    EnemyRespawnRoomDistance: {
      type: "integer",
      options: {
        grid_columns: 6,
      },
    },
    EnemyRespawnTimeInterval: {
      type: "integer",
      options: {
        grid_columns: 6,
      },
    },
    EnemyRespawnExcludeList: {
      type: "array",
      items: {
        title: "Excluded Enemy",
        headerTemplate: "Excluded Enemy (PID: {{self.persistentID }})",
        type: "object",
        properties: {
          ...PersistentID,
        },
      },
    },

    //Terminals

    _header_terminal: {
      type: "info",
      title: "<h1>Terminals</h1>",
      options: {
        compact: true,
        grid_columns: 12,
      },
    },

    ForbidTerminalsInZone: {
      title: "Disable Terminals",
      description: "Prevents terminals from spawning in this zone",
      type: "boolean",
      format: "checkbox",
    },
    TerminalPlacements: {
      type: "array",
      items: {
        ...TerminalPlacementData,
      },
    },

    //Level Events

    _header_events: {
      type: "info",
      title: "<h1>Events</h1>",
      options: {
        grid_columns: 12,
      },
    },
    //WardenObjectiveEventData
    EventsOnPortalWarp: {
      type: "array",
      items: {
        ...WardenObjectiveEventData
      },
      options: {
        collapsed: true,
      },
    },
    EventsOnApproachDoor: {
      type: "array",
      items: {
        ...WardenObjectiveEventData
      },
      options: {
        collapsed: true,
      },
    },
    EventsOnUnlockDoor: {
      type: "array",
      items: {
        ...WardenObjectiveEventData
      },
      options: {
        collapsed: true,
      },
    },
    EventsOnOpenDoor: {
      type: "array",
      items: {
        ...WardenObjectiveEventData
      },
      options: {
        collapsed: true,
      },
    },
    EventsOnDoorScanStart: {
      type: "array",
      items: {
        ...WardenObjectiveEventData
      },
      options: {
        collapsed: true,
      },
    },
    EventsOnDoorScanDone: {
      type: "array",
      items: {
        ...WardenObjectiveEventData
      },
      options: {
        collapsed: true,
      },
    },
    EventsOnBossDeath: {
      type: "array",
      items: {
        ...WardenObjectiveEventData
      },
      options: {
        collapsed: true,
      },
    },
    EventsOnTerminalDeactivateAlarm: {
      type: "array",
      items: {
        ...WardenObjectiveEventData
      },
      options: {
        collapsed: true,
      },
    },
    EventsOnTrigger: {
        type: "array",
        items: {
            ...WorldEventFromSourceData
        },
        options: {
            collapsed: true,
        },
    },

    EventsOnEnter: {
      title: "On enter events",
      type: "array",
      items: {
        ...LevelEventData,
      },
      options: {
        collapsed: true,
      },
    },

    //Objective

    _header_objective: {
      type: "info",
      title: "<h1>Objective Spawning</h1>",
      options: {
        compact: true,
        grid_columns: 12,
      },
    },

    HSUsInZone: {
      ...eZoneDistributionAmount,
    },
    GeneratorClustersInZone: {
      type: "integer",
    },
    PowerGeneratorPlacements: {
      type: "array",
      items: {
        title: "Generator",
        ...FunctionPlacementData,
      },
    },

    //Storytelling / misc

    _header_misc: {
      type: "info",
      title: "<h1>Miscellaneous Settings</h1>",
      options: {
        compact: true,
        grid_columns: 12,
      },
    },

    CorpsesInZone: {
      ...eZoneDistributionAmount,
    },
    GroundSpawnersInZone: {
      ...eZoneDistributionAmount,
    },
    CorpseClustersInZone: {
      type: "integer",
    },
    HSUClustersInZone: {
      type: "integer",
    },
    StaticSpawnDataContainers: {
      type: "array",
      items: {
        ...StaticSpawnDataContainer,
      },
    },
  },
  options: {
    disable_collapse: true,
  },
};

export { ExpeditionZoneData };
