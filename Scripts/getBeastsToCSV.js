const { Contract, constants, RpcProvider } = require("starknet");
const fs = require("fs").promises;
const createCsvWriter = require("csv-writer").createObjectCsvWriter;

// Beast ID to name mapping
const beastIdToName = {
  1: "Warlock",
  2: "Typhon",
  3: "Jiangshi",
  4: "Anansi",
  5: "Basilisk",
  6: "Gorgon",
  7: "Kitsune",
  8: "Lich",
  9: "Chimera",
  10: "Wendigo",
  11: "Rakshasa",
  12: "Werewolf",
  13: "Banshee",
  14: "Draugr",
  15: "Vampire",
  16: "Goblin",
  17: "Ghoul",
  18: "Wraith",
  19: "Sprite",
  20: "Kappa",
  21: "Fairy",
  22: "Leprechaun",
  23: "Kelpie",
  24: "Pixie",
  25: "Gnome",
  26: "Griffin",
  27: "Manticore",
  28: "Phoenix",
  29: "Dragon",
  30: "Minotaur",
  31: "Qilin",
  32: "Ammit",
  33: "Nue",
  34: "Skinwalker",
  35: "Chupacabra",
  36: "Weretiger",
  37: "Wyvern",
  38: "Roc",
  39: "Harpy",
  40: "Pegasus",
  41: "Hippogriff",
  42: "Fenrir",
  43: "Jaguar",
  44: "Satori",
  45: "DireWolf",
  46: "Bear",
  47: "Wolf",
  48: "Mantis",
  49: "Spider",
  50: "Rat",
  51: "Kraken",
  52: "Colossus",
  53: "Balrog",
  54: "Leviathan",
  55: "Tarrasque",
  56: "Titan",
  57: "Nephilim",
  58: "Behemoth",
  59: "Hydra",
  60: "Juggernaut",
  61: "Oni",
  62: "Jotunn",
  63: "Ettin",
  64: "Cyclops",
  65: "Giant",
  66: "Nemean Lion",
  67: "Berserker",
  68: "Yeti",
  69: "Golem",
  70: "Ent",
  71: "Troll",
  72: "Bigfoot",
  73: "Ogre",
  74: "Orc",
  75: "Skeleton",
};

// Prefix ID to name mapping
const prefixIdToName = {
  1: "Agony",
  2: "Apocalypse",
  3: "Armageddon",
  4: "Beast",
  5: "Behemoth",
  6: "Blight",
  7: "Blood",
  8: "Bramble",
  9: "Brimstone",
  10: "Brood",
  11: "Carrion",
  12: "Cataclysm",
  13: "Chimeric",
  14: "Corpse",
  15: "Corruption",
  16: "Damnation",
  17: "Death",
  18: "Demon",
  19: "Dire",
  20: "Dragon",
  21: "Dread",
  22: "Doom",
  23: "Dusk",
  24: "Eagle",
  25: "Empyrean",
  26: "Fate",
  27: "Foe",
  28: "Gale",
  29: "Ghoul",
  30: "Gloom",
  31: "Glyph",
  32: "Golem",
  33: "Grim",
  34: "Hate",
  35: "Havoc",
  36: "Honour",
  37: "Horror",
  38: "Hypnotic",
  39: "Kraken",
  40: "Loath",
  41: "Maelstrom",
  42: "Mind",
  43: "Miracle",
  44: "Morbid",
  45: "Oblivion",
  46: "Onslaught",
  47: "Pain",
  48: "Pandemonium",
  49: "Phoenix",
  50: "Plague",
  51: "Rage",
  52: "Rapture",
  53: "Rune",
  54: "Skull",
  55: "Sol",
  56: "Soul",
  57: "Sorrow",
  58: "Spirit",
  59: "Storm",
  60: "Tempest",
  61: "Torment",
  62: "Vengeance",
  63: "Victory",
  64: "Viper",
  65: "Vortex",
  66: "Woe",
  67: "Wrath",
  68: "Lights",
  69: "Shimmering",
};

// Suffix ID to name mapping
const suffixIdToName = {
  1: "Bane",
  2: "Root",
  3: "Bite",
  4: "Song",
  5: "Roar",
  6: "Grasp",
  7: "Instrument",
  8: "Glow",
  9: "Bender",
  10: "Shadow",
  11: "Whisper",
  12: "Shout",
  13: "Growl",
  14: "Tear",
  15: "Peak",
  16: "Form",
  17: "Sun",
  18: "Moon",
};

// Function to determine beast tier
function getTier(id) {
  if ((id >= 1 && id <= 5) || (id >= 26 && id < 31) || (id >= 51 && id < 56)) {
    return "T1";
  } else if (
    (id >= 6 && id < 11) ||
    (id >= 31 && id < 36) ||
    (id >= 56 && id < 61)
  ) {
    return "T2";
  } else if (
    (id >= 11 && id < 16) ||
    (id >= 36 && id < 41) ||
    (id >= 61 && id < 66)
  ) {
    return "T3";
  } else if (
    (id >= 16 && id < 21) ||
    (id >= 41 && id < 46) ||
    (id >= 66 && id < 71)
  ) {
    return "T4";
  } else {
    return "T5";
  }
}

// New: Function to calculate beast's power
function calculatePower(level, tier) {
  const tierNumber = parseInt(tier.replace("T", ""));
  return level * (6 - tierNumber);
}

// New: Function to get the type of a beast
function getType(id) {
  let weapon, armor;
  if (id >= 0 && id < 26) {
    weapon = "Magic";
    armor = "Cloth";
  } else if (id < 51) {
    weapon = "Blade";
    armor = "Hide";
  } else if (id < 76) {
    weapon = "Bludgeon";
    armor = "Metal";
  } else {
    weapon = "None";
    armor = "None";
  }
  return { weapon, armor };
}

(async () => {
  try {
    const provider = new RpcProvider({
      nodeUrl:
        "https://starknet-mainnet.g.alchemy.com/v2/ALCHEMYKEYGOESHERE",
    });

    const testAddress =
      "0x0158160018d590d93528995b340260e65aedd76d28a686e9daa5c4e8fad0c5dd";
    const { abi: testAbi } = await provider.getClassAt(testAddress);
    if (testAbi === undefined) throw new Error("no abi.");
    const myTestContract = new Contract(testAbi, testAddress, provider);

    let tokenId = BigInt(1);
    let traitsResults = [];

    while (true) {
      try {
        const traitResult = await myTestContract.getBeast(tokenId.toString());
        const beastName = beastIdToName[parseInt(traitResult.id)]; // Map ID to beast name
        const prefixName = prefixIdToName[parseInt(traitResult.prefix)]; // Map prefix ID to name
        const suffixName = suffixIdToName[parseInt(traitResult.suffix)]; // Map suffix ID to name
        const tier = getTier(parseInt(traitResult.id)); // Determine the tier
        const power = calculatePower(parseInt(traitResult.level), tier); // Calculate the beast's power
        const { weapon, armor } = getType(parseInt(traitResult.id)); // Determine the beast's weapon and armor types
        traitsResults.push({
          tokenId: tokenId.toString(),
          id: traitResult.id,
          beastName, // Include the beast name
          prefix: prefixName, // Include the prefix name
          suffix: suffixName, // Include the suffix name
          tier, // Include the tier
          level: traitResult.level,
          health: traitResult.health,
          power,
          weapon,
          armor,
        });
        console.log(
          `Fetched traits for token ID ${tokenId} (${beastName}, ${prefixName}, ${suffixName})`
        );
        tokenId++;
      } catch (error) {
        if (error.message.includes("invalid token ID")) {
          console.log(
            `Stopping fetch at token ID ${tokenId}: ${error.message}`
          );
          break;
        } else {
          console.error(
            `Error fetching traits for token ID ${tokenId}: ${error.message}`
          );
          break;
        }
      }
    }

    const csvWriter = createCsvWriter({
      path: "BeastResults.csv",
      header: [
        { id: "tokenId", title: "TOKEN_ID" },
        { id: "id", title: "ID" },
        { id: "beastName", title: "BEAST_NAME" },
        { id: "prefix", title: "PREFIX_NAME" },
        { id: "suffix", title: "SUFFIX_NAME" },
        { id: "tier", title: "TIER" }, // Add column for Tier
        { id: "level", title: "LEVEL" },
        { id: "health", title: "HEALTH" },
        { id: "power", title: "POWER" }, // Add a column for Power
        { id: "weapon", title: "WEAPON_TYPE" }, // Add a column for Weapon Type
        { id: "armor", title: "ARMOR_TYPE" }, // Add a column for Armor Type
      ],
    });

    await csvWriter.writeRecords(traitsResults);
    console.log("Exported traits results to BeastResults.csv");
  } catch (error) {
    console.error("Failed to initialize contract interaction:", error);
  }
})();
