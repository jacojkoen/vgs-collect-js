export interface IConfigSchema {
  [key: string]: (value: string) => boolean;
}
