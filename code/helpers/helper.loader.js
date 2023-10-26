const SCRIPT  = 'script'
const TYPE    = 'type'
const MODULE  = 'module'
const PRESETS = 'env-plus'
const SEP     = '/'

let page = document
let head = page.head

function LHelper () {

  function PImport (base) {
    let tokens = base.split (SEP)
    tokens.pop ()
    let bpath = tokens.join (SEP)
    return function () {
      return {
        visitor : {
          ImportDeclaration ({node}) {
            let iexp = node.source.value
            let ok   = !iexp.startsWith (SEP)
            ok && (node.source.value = [bpath, iexp].join (SEP))
          }
        }
      }
    }
  }

  async function compile (text, base) {
    let ast  = Babel.transform (text, { presets: [PRESETS], plugins : [PImport (base)] })
    let code = ast.code
    return code
  }

  async function load (path) {
    let response = await fetch (path) 
    let text     = await response.text ()
    let code     = await compile (text, path) 
    let script   = page.createElement (SCRIPT)
    script.setAttribute (TYPE, MODULE)
    script.text  = code
    head.appendChild (script)
  }

  return { load }
} 

export default LHelper ()