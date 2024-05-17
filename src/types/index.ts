export interface useApiProps {
  url: string;
  method: string;
  payload?: string | object | null;
}

export interface ButtonProps {
  title: string;
  disable?: boolean;
  buttonType?: "button" | "submit" | "reset";
  style?: string;
  handleClick: () => void;
}

export interface StoreApi {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: ItemRating;
  title: string;
}

export interface ItemRating {
  rate: number;
  count: number;
}

export interface CustomTitleProps {
  style?: string;
  title: string;
}

type NestedKeys<T> = {
  [K in keyof T]: K extends string
    ? T[K] extends object
      ? `${K}` | `${K}.${NestedKeys<T[K]>}`
      : `${K}`
    : never;
}[keyof T];

export type RegisterOptions = NestedKeys<StoreApi>;
