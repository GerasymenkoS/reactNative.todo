const 
    path = require('path');
    dirName = path.join(__dirname, '../pages');
    
const get = () => {
    return dirName;
}
    
const join = ( targetFolders ) => {
    return path.join( dirName, ...targetFolders )
}    

    
module.exports = {
    get,
    join
}