# TokenFlow x Loot Survivor

TLDR go here: <https://survivor-docs.realms.world/>

## Realms Ecosystem Overview

The Realms ecosystem consists of the following components:

1. **Realms (L1)**: A collection of tokenized land grids, primarily used in the game Eternum. Realms were minted on L1 but will be deployed on Starknet in the future.
2. **Starknet Realms World**: The ecosystem on Starknet, including the Autonomous World and Bibliotheca DAO World. Bibliotheca DAO governs the actions and roadmaps in this project.
3. **$LORDS**: The asset used across the entire ecosystem, including games like Eternum and Loot Survivor.
4. **Loot Survivor**: An Adventure Quest type of game built on Starknet, using $LORDS as arcade tokens to play.

## Loot Survivor

Loot Survivor is an adventure game where players spawn with randomly distributed stats. For more information, visit the [LS wiki](https://survivor-docs.realms.world/).

### Adventurer Stats

- **Vitality**: Amount of Health
- **Strength**: How much offensive damage the adventurer can do
- **Dexterity**: Influences the adventurer's odds of successfully fleeing a fight
- **Intelligence**: Influences the adventurer's odds of successfully dodging an obstacle (trap) that randomly happens during each Explore
- **Wisdom**: Influences the adventurer's odds of successfully avoiding an ambush by a beast upon a beast encounter (i.e., do they get a cheeky first hit on us or not)
- **Charisma**: Influences the cost of purchasing items in the marketplace (higher charisma = more affordable marketplace items)
- **Luck**: A variable-effect stat that influences mechanics such as critical strike chance and critical strike damage

### Items

- **Types**: The material the item is made out of (Cloth, Hide, or Metal). This also applies to the types of beasts.
- **Tiers**: The gross utility that an item provides. Tier 1 is the strongest, and Tier 5 is the weakest (besides no armor).
- **Greatness**: The item-specific XP value. Every item starts at greatness 1 (XP = 0 for that item). Through exploring and fighting, the items gain greatness up to 20 when maxed. Greatness affects other in-game calculations and unique bonuses.

### Weapons

Weapons are a subset of items and have specific strengths and weaknesses against each material. More information can be found [here](https://survivor-docs.realms.world/stats/damage-list). Beast weapons apply the same way.

## Contracts

- Loot Survivor: `0x03c10537fa0073b2dd5120242697dbf76d6173eb9f384d3bf3d284d53388a0b0`
- Loot Survivor Beasts: `0x0158160018d590d93528995b340260e65aedd76d28a686e9daa5c4e8fad0c5dd`
- Loot Survivor Golden Token: `0x04f5e296c805126637552cf3930e857f380e7c078e8f00696de4fc8545356b1d`

## Key Data to Retrieve

### Global

- Number of games
- Number of players
- Number of actions
- Number of deaths
- Average cost of games and average gas spent
- Games played per wallet address
- Gas spent per wallet address
- Lords spent per wallet address
- Highest XP per wallet address

### Adventurer Stats

- Correlation between starting stats and total XP (for the run; leaderboard rankings are based on XP accumulated by the adventurer)
- Basic metrics (mean, median, mode, etc.) across the leaderboard
- More stats to be added as they are identified

### Beast Stats

- [Example dashboard](https://dune.com/frontboat/loot-survivor)

### Clients

- [Example dashboard](https://flipsidecrypto.xyz/frontboat/loot-surviver-clients-2HzXeJ)

For a general guide, check out [Hessish's dashboard](https://flipsidecrypto.xyz/Hessish/loot-survivor-play2die-sVG9LG) to get an idea of global trends.

Feel free to reach out to me or in the Loot Survivor Discord channel in the Realms World Discord. There are plenty of veteran players that love to nerd out on this game and are a wealth of knowledge.

Last update: March 16th, 2024
