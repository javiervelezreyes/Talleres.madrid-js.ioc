//# sourceMappingURL=babel.min.js.map
Babel.registerPreset ("env-plus", {
  presets: [
    [
      Babel.availablePresets["env"], 
      { 
        loose: true,
        modules: false
      }
    ],
  ],
  plugins: [
    [
      Babel.availablePlugins["proposal-decorators"],
      { version: "2023-01" }
    ]
  ]
})