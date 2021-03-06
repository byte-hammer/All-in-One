exports.mod = () => {
    let settings = require("../settings.json");

    if (settings.gameplay.allExtracts == true) {
        let base = fileIO.readParsed(db.user.cache.locations)
        for (let map in base) {
            for (let exit in base[map].exits) {
                base[map].base.exits[exit].Chance = 100;
            }
        }
        fileIO.write(db.user.cache.locations, base);
    }
    logger.logSuccess("[Mod Aio] All extracts have been opened");

}