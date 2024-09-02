// To understand the purpose of this code, Refer - https://chatgpt.com/c/480d84cb-48ab-4055-8857-2eb09a8b791b

module.exports = {
  apps: [
    {
      name: "inventory-management",
      script: "npm",
      args: "run dev",
      env: {
        NODE_ENV: "development",
        ENV_VAR1: "environment-variable",
      },
    },
  ],
};
