const nodePath = require("path")

const path = (...locationOfFile) => {
    const rootDirectory = nodePath.dirname(process.mainModule.filename)
    return nodePath.join(rootDirectory, ...locationOfFile)
}

module.exports = path