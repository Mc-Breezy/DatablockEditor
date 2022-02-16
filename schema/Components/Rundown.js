import { Vector2, Color } from "./Unity.js";

const RundownTierProgression = {
  title: "Tier Progression",
  type: "object",
  properties: {
    AllClearedSectors: {
      type: "integer",
    },
    MainSectors: {
      type: "iteger",
    },
    SecondarySectors: {
      type: "integer",
    },
    ThirdSectors: {
      type: "integer",
    },
  },
};

const TierVisual = {
  type: "object",
  properties: {
    Color: {
      ...Color,
    },
    Scale: {
      type: "integer",
    },
  },
};

const StorytellingVisuals = {
  title: "Visuals",
  type: "object",
  properties: {
    ColorBackground: {
      ...Color,
    },
    TierAVisuals: {
      ...TierVisual,
    },
    TierBVisuals: {
      ...TierVisual,
    },
    TierCVisuals: {
      ...TierVisual,
    },
    TierDVisuals: {
      ...TierVisual,
    },
    TierEVisuals: {
      ...TierVisual,
    },
  },
};

const Storytelling = {
  type: "object",
  properties: {
    Title: {
      type: "string",
    },
    SurfaceDescription: {
      type: "string",
    },
    SurfaceIconPosition: {
      ...Vector2,
    },
    TextLog: {
      type: "string",
    },
    TextLogPos: {
      ...Vector2,
    },
    Visuals: {
      ...StorytellingVisuals,
    },
  },
};

export { RundownTierProgression, Storytelling };
