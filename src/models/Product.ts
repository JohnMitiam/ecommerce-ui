import * as Yup from "yup";

import { ResultViewModel } from "./common/ResultViewModel";
import { TableViewModel } from "./common/TableViewModel";

//Validation
export const ProductValidation = Yup.object().shape({
  name: Yup.string()
    .max(100, "Name exceeds the maximum length of 100 characters")
    .required("Name is Required"),
  description: Yup.string()
    .max(1000, "Description exceeds the maximum length of 1000 characters")
    .nullable(),
  price: Yup.number().required("Price is Required"),
});

export interface ProductViewModel {
  id: number;
  name: string;
  description: string;
  price: number;
  isActive: boolean;
}

export interface ProductTableResultViewModel
  extends TableViewModel,
    ResultViewModel {
  data: ProductViewModel[];
}

export interface ProductResultViewModel extends ResultViewModel {
  data: ProductViewModel;
}

export const productDefaultValue: ProductViewModel = {
  id: 0,
  name: "",
  description: "",
  price: 0,
  isActive: true,
};

export const productTableDefaultValue: ProductTableResultViewModel = {
  data: [],
  page: 1,
  pageSize: 30,
  total: 0,
  totalPages: 0,
  isSuccess: true,
  errorMessage: undefined,
};
