import type {
  ComponentPublicInstance,
  FunctionalComponent
} from 'vue'

declare module 'vue' {
  export type JSXComponent<Props = any> =
    | { new (): ComponentPublicInstance<Props> }
    | FunctionalComponent<Props>;
}

declare global{
  declare type Recordable<T = any> = Record<string, T>;

  declare type ReadonlyRecordable<T = any> = {
    readonly [key: string]: T;
  };

}
