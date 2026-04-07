module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [
            ".ios.ts",
            ".android.ts",
            ".ts",
            ".ios.tsx",
            ".android.tsx",
            ".tsx",
            ".jsx",
            ".js",
            ".json",
          ],
          alias: {
            "@types": "./src/@types",
            "@assets": "./src/assets",
            "@components": "./src/components",
            "@features": "./src/features",
            "@theme": "./src/theme",
            "@shared": "./src/shared",
            "@store": "./src/store",
            "@locales": "./src/locales",
            "@service": "./src/service",
            "@tests": "./__tests__",
            "@mappers": "./src/mappers",
            "@config": "./src/config",
          },
        },
      ],
    ],
  };
};
