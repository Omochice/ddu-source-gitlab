type GitLabHost = {
  token: string;
  api_host: string;
  api_protocol: string;
};

export type GitLabCliConfig = {
  host: string;
  hosts: Record<string, GitLabHost>;
};
