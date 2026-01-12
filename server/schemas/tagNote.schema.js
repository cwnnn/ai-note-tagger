export const tagNoteRequestSchema = {
  type: "object",
  required: ["note"],
  additionalProperties: false,
  properties: {
    note: {
      type: "string",
      minLength: 1,
    },
  },
};

export const tagNoteResponseSchema = {
  type: "object",
  required: ["tags"],
  additionalProperties: false,
  properties: {
    tags: {
      type: "array",
      items: {
        type: "string",
        minLength: 1,
      },
      maxItems: 5,
    },
  },
};
