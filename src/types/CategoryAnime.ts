export interface CategoriesResponseData {
  data: Category[];
}

export interface Category {
  id: string;
  attributes: Attributes;
}

export interface Attributes {
  title: string;
}
