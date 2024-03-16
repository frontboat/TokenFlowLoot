# TokenFlow x Loot Survivor

TLDR go here: https://survivor-docs.realms.world/

What is the Realms ecosystem and how does Lords and loot survivor fit in? (mega condensed and not refined, strictly aerial)
Starting at the top at L1 we have Realms. Collection of land grids that are tokenized, and used mainly in the game Eternum. Realms were minted on L1 but will be deployed on Starknet in the applicable future. That brings us to the Starknet Realms World, Autonomous World, Bibliotheca DAO world, loosely. Bibliotheca DAO is the governance behind actions and roadmaps in this project.

Eternum uses an asset across the world named $LORDS, which can be used for many things in game, _as well as_ other games built in the broader ecosystem, like Loot Survivor.

To recap: we have L1 Realms as foundational roots, but think of them as L2 in regard to starknet gaming. The asset used across allll of these is $LORDS. Loot Survivor is built on starknet and uses $LORDS as the arcade tokens to play.

Now, let's talk Loot Survivor.
What is it? Adventure Quest type of game where you spawn with randomly distributed _stats_. Here is a link to the LS wiki: https://survivor-docs.realms.world/

Vitality: amount of Health
Strength: How much offensive damage the adventurer can do
Dexterity: influences the adventurer's odds of succesfully fleeing a fight
Intelligence: Influences the adventurer's odds of successfully dodging an obstacle (trap) that randomly happens during each Explore
Wisdom: Influences the adventurer's odds of successfully avoiding an ambush by a beast upon a beast encounter. ie, do they get a cheeky first hit on us or not
Charisma: Influences the cost of purchasing items in the marketplace. higher charisma = more affordable marketplace items
Luck: A variable-effect stat that influences mechanics such as critical strike chance, critical strike damage.

Items:

- types, tiers, and greatness
  types are the material the item is made out of. Cloth, Hide, or Metal. This also applies to the types of beasts.
  Tiers refer to the gross utility that an item provides. Tier 1 is the strongest, and Tier 5 is the weakest (besides no armor)
  Greatness refers to the _item-specific_ XP value. Every item starts at greatness 1 (xp = 0 for that item). Through exploring and fighting, the items gain greatness up to 20 when maxed. The greatness affects other in game calculations and unique bonuses that do not need to be explored in an aerial view.

Weapons:

- are a subset to the item, and have specific strengths and weaknesses against each material. That info is here: https://survivor-docs.realms.world/stats/damage-list . Beast weapons apply the same way.

## CONTRACTS

Loot Survivor: `0x03c10537fa0073b2dd5120242697dbf76d6173eb9f384d3bf3d284d53388a0b0`

Loot Survivor Beasts: `0x0158160018d590d93528995b340260e65aedd76d28a686e9daa5c4e8fad0c5dd`

Loot Survivor Golden Token: `0x04f5e296c805126637552cf3930e857f380e7c078e8f00696de4fc8545356b1d`

## KEY DATA TO RETRIEVE

Global

- number of games
- number of players
- number of actions
- number of deaths
- average cost of games and average gas spent
- games played per wallet address
- gas spent per wallet address
- Lords spent per wallet address
- highest xp per wallet address
  Adventurer Stats
- Correlation between _starting_ stats and total xp (for the run. leaderboard rankings are based off of xp accumulated by the adv)
- Basic metrics (mean median mode etc etc) across the leaderboard
- will add more as i think on it
  Beast Stats
- something like this: https://dune.com/frontboat/loot-survivor
  Clients
- Something like this: https://flipsidecrypto.xyz/frontboat/loot-surviver-clients-2HzXeJ

As a general guide, Hessish's dashboard is great to get an idea of global trends: https://flipsidecrypto.xyz/Hessish/loot-survivor-play2die-sVG9LG

Feel free to reach out to me, or in the Loot Survivor discord channel in the realms world discord. There are plenty of veteran players that love to nerd out on this game and are a wealth of knowledge.

This sums up the most rudementary overview of the game, and aims to highlight some analytics that are useful and insightful to players. Last update: march 16th 2024
