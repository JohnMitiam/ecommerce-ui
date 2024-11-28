import axios from "src/api/axios";

import { api } from "src/config/apiEndpoints";
import { getDataUrl } from "src/core/utils/dataUrls";
import {
  ProductTableResultViewModel,
  ProductViewModel,
} from "src/models/Product";

export const CurrencyService = {
  create: async function (product: ProductViewModel) {
    const createUrl = `${api.BASE_URL}${api.PRODUCT_ENDPOINT}`;

    return axios.post(createUrl, product);
  },
  getList: async function (
    page?: number,
    pageSize?: number,
    searchFields?: string,
    search?: string,
    filters?: string
  ) {
    let dataUrl = getDataUrl(
      api.BASE_URL,
      api.PRODUCT_ENDPOINT,
      page,
      pageSize,
      searchFields,
      search
    );

    if (filters) {
      dataUrl = dataUrl + filters;
    }

    return axios.get(dataUrl).then((response) => {
      return response.data as Promise<ProductTableResultViewModel>;
    });
  },

  getById: async function (id: number) {
    const dataUrl = `${api.BASE_URL}${api.PRODUCT_ENDPOINT}/${id}`;

    return axios.get(dataUrl);
  },
  update: async function (id: number, product: ProductViewModel) {
    const updateUrl = `${api.BASE_URL}${api.PRODUCT_ENDPOINT}/${id}`;

    return axios.put(updateUrl, product);
  },
  delete: async function (id: number) {
    const deleteURL = `${api.BASE_URL}${api.PRODUCT_ENDPOINT}/${id}`;

    return axios.delete(deleteURL);
  },
};
