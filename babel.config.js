module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugin: [
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".js", ".jsx", ".ts", ".tsx"],
          alias: {
            "@components": "./src/components",
            "@config": "./src/config",
            "@screens": "./src/screens",
            "@utils": "./src/utils",
            "@assets": "./src/assets",
            "@routes": "./src/routes",
            "@hooks": "./src/hooks",
            "@services": "./src/services",
            "@styles": "./src/styles",
            "@types": "./src/types",
          },
        },
      ],
    ],
  };
};
