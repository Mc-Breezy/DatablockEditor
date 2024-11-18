// Enumerator related values

const eZoneDistributionAmount = {
  type: "integer",
  enum: [0, 1, 2, 3, 4, 5, 6, 7],
  options: {
    enum_titles: [
      "None (0)",
      "Pair (2)",
      "Few (5)",
      "Some (10)",
      "Some More (15)",
      "Many (20)",
      "A lot (30)",
      "Tons (50)",
    ],
  },
};

const eEnemyRoleDifficulty = {
  type: "integer",
  //  enum: [0, 1, 2, 3, 4, 5, 6, 7],
  //  options: {
  //    enum_titles: [
  //      "Easy",
  //      "Medium",
  //      "Hard",
  //      "MiniBoss",
  //      "Boss",
  //      "MegaBoss",
  //      "Biss",
  //      "Buss",
  //    ],
  //    grid_columns: 6,
  //  },
};

const eEnemyGroupType = {
  type: "enum",
  enum: [0, 1, 2, 3, 4, 5, 6],
  options: {
    enum_titles: [
      "Hibernate",
      "PureSneak",
      "Detect",
      "PureDetect",
      "Patrol",
      "Awake",
      "Hunter",
    ],
    grid_columns: 6,
  },
};

const eEnemyZoneDistribution = {
  type: "integer",
  enum: [0, 1, 2],
  options: {
    enum_titles: ["None", "Force One", "Relative Value"],
  },
};

const eProgressionPuzzleType = {
  type: "integer",
  enum: [0, 1, 2, 3],
  options: {
    enum_titles: [
      "None",
      "Keycard Security Box",
      "Generator and Cell",
      "Locked with no key",
    ],
    options: {
      grid_columns: 10,
    },
  },
};

const eLocalZoneIndex = {
  type: "integer",
  enum: [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ],
  options: {
    enum_titles: [
      "Zone 0",
      "Zone 1",
      "Zone 2",
      "Zone 3",
      "Zone 4",
      "Zone 5",
      "Zone 6",
      "Zone 7",
      "Zone 8",
      "Zone 9",
      "Zone 10",
      "Zone 11",
      "Zone 12",
      "Zone 13",
      "Zone 14",
      "Zone 15",
      "Zone 16",
      "Zone 17",
      "Zone 18",
      "Zone 19",
      "Zone 20",
    ],
    grid_columns: 6,
  },
};

const SubComplex = {
  type: "integer",
  enum: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  options: {
    enum_titles: [
      "Dig Site",
      "Refinery",
      "Storage",
      "Data Center",
      "Lab",
      "All",
      "Floodways",
      "Mining Reactor",
      "Plug SubComplex Transition",
      "Tech Reactor",
      "Tech Portal",
      "Gardens",
      "Mining Portal"
    ],
    grid_columns: 3,
  },
};

const eZoneBuildFromExpansionType = {
  type: "integer",
  enum: [0, 1, 2, 3, 4],
  options: {
    enum_titles: [
      "Towards Random",
      "Towards Forwards",
      "Towards Backwards",
      "Towards Right",
      "Towards Left",
    ],
    grid_columns: 3,
  },
};

const eZoneBuildFromType = {
  type: "integer",
  enum: [0, 1, 2, 3, 4, 5],
  options: {
    enum_titles: [
      "From Random",
      "From Start",
      "From Average Center",
      "From Furthest",
      "From Between Start and Furthest",
      "From Index Weight",
    ],
    grid_columns: 3,
  },
};

const eZoneExpansionType = {
  type: "integer",
  enum: [0, 1, 2, 3, 4, 5, 6, 7],
  options: {
    enum_titles: [
      "Random",
      "Collapsed",
      "Expansional",
      "Directional Forward",
      "Directional Backward",
      "Directional Right",
      "Directional Left",
      "Directional Random",
    ],
    grid_columns: 3,
  },
};

const eSecurityGateType = {
  type: "integer",
  enum: [0, 1],
  options: {
    enum_titles: ["Security", "Apex"],
    grid_columns: 3,
  },
};

const LG_StaticDistributionWeightType = {
  type: "enum",
  enum: [0, 1],
  options: {
    enum_titles: [
      "Weight is zeroToOne startToEnd",
      "Weight is exact node index",
    ],
  },
};

const TERM_State = {
  type: "enum",
  enum: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
  options: {
    enum_titles: [
      "Sleeping",
      "Awake",
      "Player Interacting",
      "Data Mining",
      "Hacked",
      "Code Puzzle",
      "Input Test",
      "Reactor Error",
      "Ask To Play Log Audio",
      "Do Play Audio File",
      "Audio Loop Error",
      "Ping",
      "PasswordProtected",
      "EnterPassword",
    ],
  },
};

const eSeedType = {
  type: "enum",
  enum: [0, 1, 2, 3],
  options: {
    enum_titles: ["None", "SessionSeed", "BuildSeed", "StaticSeed"],
  },
};

const eWardenObjectiveEventTrigger = {
  type: "enum",
  enum: [0, 1, 2, 3],
  options: {
    enum_titles: ["None", "On Start", "On Mid", "On End"]
  }
}

const eWardenObjectiveEventType = {
  type: "enum",
  enum: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 999],
  options: {
    enum_titles: [
      "None", 
      "Open Security Door", 
      "UnlockSecurityDoor",
      "AllLightsOff",
      "AllLightsOn",
      "PlaySound",
      "SetFogSetting",
      "DimensionFlashTeam",
      "DimensionWarpTeam",
      "SpawnEnemyWave",
      "StopEnemyWaves",
      "UpdateCustomSubObjective",
      "ForceCompleteObjective",
      "LightsInZone",
      "LightsInZoneToggle",
      "AnimationTrigger",
      "SpawnEnemyOnPoint",
      "SetNavMarker",
      "StepProgressionObjective",
      "SetWorldEventCondition",
      "LockSecurityDoor",
      "SetTerminalCommand",
      "ActivateChainedPuzzle",
      "LightOnWorldEventObject",
      "AddToTimer",
      "ResetTimer",
      "WinOnDeath",
      "ForceInstantWin",
      "DialogueOnClosest",
      "GetAchievement",
      "ClearDimension",
      "StartRepeatingFog",
      "StopSustainedEvent",
      "EventBreak"
    ]
  }
}

const LG_LayerType = {
  type: "enum",
  enum: [0, 1, 2],
  options: {
    enum_titles: [
      "Main",
      "Secondary",
      "Third"
    ]
  }
}

const eDimensionIndex = {
  type: "enum",
  enum: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  options: {
    enum_titles: [
      "Reality",
      "Dimension_1",
      "Dimension_2",
      "Dimension_3",
      "Dimension_4",
      "Dimension_5",
      "Dimension_6",
      "Dimension_7",
      "Dimension_8",
      "Dimension_9",
      "Dimension_10",
      "Dimension_11",
      "Dimension_12",
      "Dimension_13",
      "Dimension_14",
      "Dimension_15",
      "Dimension_16",
      "Dimension_17",
      "Dimension_18",
      "Dimension_19"
    ]
  }
}

const TerminalLineType = {
  type: "enum",
  enum: [0, 1, 2, 3, 4, 5],
  options: {
    enum_titles: [
      "Normal",
      "Fail",
      "SpinningWaitDone",
      "SpinningWaitNoDone",
      "ProgressWait",
      "Warning"
    ]
  }
}

const TERM_CommandRule = {
  type: "enum",
  enum: [0, 1, 2],
  options: {
    enum_titles: [
      "Normal",
      "Only Once",
      "Only Once Delete"
    ]
  }
}

export {
  LG_StaticDistributionWeightType,
  SubComplex,
  TERM_State,
  eZoneDistributionAmount,
  eEnemyRoleDifficulty,
  eEnemyZoneDistribution,
  eEnemyGroupType,
  eProgressionPuzzleType,
  eLocalZoneIndex,
  eSecurityGateType,
  eZoneBuildFromExpansionType,
  eZoneBuildFromType,
  eZoneExpansionType,
  eSeedType,
  eWardenObjectiveEventTrigger,
  eWardenObjectiveEventType,
  LG_LayerType,
  eDimensionIndex,
  TerminalLineType,
  TERM_CommandRule
};
