type TypedMetaOptions = Partial<{
  parameters: Partial<{
    layout: "centered" | "fullscreen" | "padded";
  }>;
  tags: ["autodocs" | "!autodocs"];
}>;

export type { TypedMetaOptions };
