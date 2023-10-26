// ! async function () {
//   Babel.registerPreset("env-plus", {
//     presets: [
//       [
//         Babel.availablePresets["env"], 
//         { 
//           loose: true,
//           modules: false
//         }
//       ],
//     ],
//     plugins: [
//       [
//         Babel.availablePlugins["proposal-decorators"],
//         { version: "2023-01" }
//       ]
//     ]
//   })
  
//   let path     = document.querySelector ('[type=madrid-js]').src
//   let response = await fetch (path)
//   let code     = await response.text ()
//   let output   = Babel.transform(code, { presets: ["env-plus"] }).code;
  
//   let script   = document.createElement ('script')
//   script.type  = 'module'
//   script.text  = output
//   document.body.appendChild (script)
// }()
