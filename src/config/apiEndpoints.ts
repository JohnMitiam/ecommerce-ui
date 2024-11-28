import { loadConfig } from "src/core/utils/configLoader";

const config = await loadConfig();
const BASE_URL = config.APIBaseUrl;

export const api = {
  BASE_URL:
    process.env.name === "APPLICATION_LOCAL"
      ? "https://localhost:7132"
      : BASE_URL,
  PRODUCT_ENDPOINT: "/api/products",
};
