export type TParams<T extends string> = Promise<{ [key in T]: string }>;

export type TAllParams<T extends string> = Promise<{ [key in T]?: string[] }>;

export interface IParamsProps<T extends string> {
  params: TParams<T>;
}

export interface IAllParamsProps<T extends string> {
  params: TAllParams<T>;
}

export interface IErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}
