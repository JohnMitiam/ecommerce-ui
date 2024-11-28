export type Config = {
  APIBaseUrl: string;
  oidc: {
    client_id: string;
    redirect_uri: string;
  };
};
