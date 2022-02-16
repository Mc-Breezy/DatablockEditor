// Schema's for base unity objects

const Vector2 = {
  type: "object",
  format: "grid",
  properties: {
    x: {
      type: "integer",
    },
    y: {
      type: "integer",
    },
  },
};

const Color = {
  type: "object",
  properties: {
    r: {
      type: "integer",
    },
    g: {
      type: "integer",
    },
    b: {
      type: "integer",
    },
    a: {
      type: "integer",
    },
  },
};

export { Vector2, Color };
