type TypedMetaOptions = Partial<{
  parameters: Partial<{
    layout: "centered" | "fullscreen" | "padded";
  }>;
  tags: ("autodocs" | "!autodocs" | "other-tag")[];
}>;

export type { TypedMetaOptions };
