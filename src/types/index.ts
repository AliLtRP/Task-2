export interface useApiProps {
  url: string;
  method: string;
  payload?: string | object;
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
  rating: { rate: number; count: number };
  title: string;
}

export interface CustomTitleProps {
  style?: string;
  title: string;
}
