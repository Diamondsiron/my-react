const { override, fixBabelImports, addDecoratorsLegacy }  = require("customize-cra")

module.exports = override(
    fixBabelImports('import',{
        libraryName:'antd',
        libraryDircetory:'es',
        style:'css'
    }),
    addDecoratorsLegacy()
)