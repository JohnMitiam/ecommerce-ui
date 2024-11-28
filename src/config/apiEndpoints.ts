const BASE_URL =
  process.env.name === "APPLICATION_LOCAL"
    ? "https://localhost:7132"
    : process.env.APIBaseUrl || "https://default-api-url.com";

export const api = {
  BASE_URL,
  PRODUCT_ENDPOINT: "/api/products",
};
