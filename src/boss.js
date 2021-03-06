exports.mod = () => {
    let settings = require("../settings.json");
    if (settings.gameplay.bossChance > 0) {
        let base = fileIO.readParsed(db.user.cache.locations)
        for (let map in base) {
            base[map].base.BossLocationSpawn.BossChance = settings.gameplay.bossChance
        }
        fileIO.write(db.user.cache.locations, base);
    }

    logger.logSuccess("[Mod Aio] Boss spawn chance updated to "+settings.gameplay.bossChance+"%");

}