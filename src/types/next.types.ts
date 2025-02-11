export type TParams<T extends string> = Promise<{ [key in T]: string }>;

export interface IParamsProps<T extends string> {
  params: TParams<T>;
}
