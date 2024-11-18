// Schema's for base unity objects

const Vector2 = {
  type: "object",
  format: "grid",
  properties: {
    x: {
      type: "number",
    },
    y: {
      type: "number",
    },
  },
};

const Vector3 = {
  type: "object",
  format: "grid",
  properties: {
    x: {
      type: "number",
    },
    y: {
      type: "number",
    },
    z: {
      type: "number"
    }
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

export { Vector2, Vector3, Color };
