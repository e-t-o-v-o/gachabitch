import { Character, Rarity } from '../types'
import Barbarian from '../images/Barbarian.png'
import Brandon from '../images/Brandon.png'
import Hellraiser from '../images/Hellraiser.png'
import Donny from '../images/Donny.png'
import Fifth from '../images/Fifth_Horseman.png'
import Chicken from '../images/Chicken.png'
import Soldier from '../images/Soldier.png'
import Knight from '../images/Knight.png'
import Pepper from '../images/Dr_Pepper.png'
import Vita from '../images/Vita.png'
import Shard from '../images/Frost_Shard.png'
import All from '../images/All_Seeing_etovo.png'
import Flying from '../images/Flying.png'
import Puppet from '../images/Puppet.png'
import Inquisition from '../images/Inquisition_etovo.png'
import Brawler from '../images/Beach_Brawler.png'
import Violet from '../images/Violet_Warrior.png'
import Hail from '../images/Hail_Warrior.png'
import Aqua from '../images/White_Hair_Sexy_Lady.png'
import Sandstorm from '../images/Sexy_Lady.png'
import Coral from '../images/Coral_Guardian.png'
import Lava from '../images/Bikini_etovo.png'
import Ganyu from '../images/Ganyu.png'
import Thunder from '../images/Thunder_Striker.png'
import Mystic from '../images/Mystic_Archer.png'
import Hologram from '../images/Hologram.png'
import Quantum from '../images/Quantum Blaster.png'
import Neon from '../images/Neon.png'
import Plasma from '../images/Plasma.png'
import Couch from '../images/Couch.png'

import Lunar from '../images/Lunar.png'
import Shadow from '../images/Shadow.png'
import Radiant from '../images/Radiant.png'
import Amethyst from '../images/Amethyst_Rod.png'
import Crimson from '../images/Crimson_Katana.png'
import Frost from '../images/Frost.png'
import Demon from '../images/Demon_Cleaver.png'
import Void from '../images/Void.png'
import Quantstaff from '../images/Quantum.png'
import Sonic from '../images/Sonic_Blaster.png'
import Divine from '../images/Divine_Blade.png'
import Apocalypse from '../images/Apocalypse.png'

import Mana from '../images/Mana.png'
import Health from '../images/Healing.png'
import Potion from '../images/Potion.png'

import Trophy from '../images/Trophy.png'


export const characters: Character[] = [


  { id: 'ultra_1', name: 'Puppetmaster etovo', rarity: Rarity.Ultra, description: 'A mysterious puppetmaster with untold power.', image: Puppet },
  { id: 'ultra_2', name: 'Demon Slayer etovo', rarity: Rarity.Ultra, description: 'A legendary warrior known for slaying demons.', image: Hellraiser },
  { id: 'ultra_3', name: 'Flying etovo', rarity: Rarity.Ultra, description: 'An enigmatic being with the power of flight.', image: Flying },
  { id: 'ultra_4', name: 'All Seeing etovo', rarity: Rarity.Ultra, description: 'An omniscient entity with piercing gaze.', image: All },
  { id: 'ultra_5', name: 'Inquisition etovo', rarity: Rarity.Ultra, description: 'A formidable judge of character and truth.', image: Inquisition },

  // 5-Star Rarity (0.4% chance, with pity)
  { id: '5star_1', name: 'Brandon', rarity: Rarity.FiveStar, description: 'A charismatic leader, or so he claims.', image: Brandon },
  { id: '5star_2', name: 'Donny T', rarity: Rarity.FiveStar, description: 'A boisterous businessman who dabbles in politics.', image: Donny },
  { id: '5star_3', name: 'The 5th Horseman', rarity: Rarity.FiveStar, description: 'The unexpected addition to the apocalyptic quartet.', image: Fifth },
  { id: '5star_4', name: 'Chicken', rarity: Rarity.FiveStar, description: 'A feathered fighter with surprising combat skills.', image: Chicken },
  { id: '5star_5', name: 'The Barbarian', rarity: Rarity.FiveStar, description: 'A fierce warrior from the untamed lands.', image: Barbarian },
  { id: '5star_6', name: 'The Final Soldier', rarity: Rarity.FiveStar, description: 'The last line of defense in a world at war.', image: Soldier },
  { id: '5star_7', name: 'Future Knight', rarity: Rarity.FiveStar, description: 'A time-traveling warrior with advanced technology.', image: Knight },
  { id: '5star_8', name: 'Dr. Pepper', rarity: Rarity.FiveStar, description: 'A fizzy physician with a bubbly personality.', image: Pepper },
  { id: '5star_9', name: 'PS Vita', rarity: Rarity.FiveStar, description: 'A handheld hero with a library of skills.', image: Vita },
  { id: '5star_10', name: 'Frost Shard', rarity: Rarity.FiveStar, description: 'An icy projectile that freezes foes on impact.', image: Shard },

  // 4-Star Rarity (4.5% chance)
  { id: '4star_1', name: 'Violet Warrior', rarity: Rarity.FourStar, description: 'A skilled dragon tamer with a vibrant fighting style.', image: Violet },
  { id: '4star_2', name: 'Hail Warrior', rarity: Rarity.FourStar, description: 'A cool-headed fighter who commands ice and snow.', image: Hail },
  { id: '4star_3', name: 'Aqua Mage', rarity: Rarity.FourStar, description: 'A powerful water elementalist with flowing attacks.', image: Aqua },
  { id: '4star_4', name: 'Beach Brawler', rarity: Rarity.FourStar, description: 'A sun-kissed fighter who excels in close combat.', image: Brawler },
  { id: '4star_5', name: 'Sandstorm Nomad', rarity: Rarity.FourStar, description: 'A desert wanderer with the power to control sand.', image: Sandstorm },
  { id: '4star_6', name: 'Coral Guardian', rarity: Rarity.FourStar, description: 'A protector of the seas with vibrant coral armor.', image: Coral },
  { id: '4star_7', name: 'Lava Dancer', rarity: Rarity.FourStar, description: 'A graceful performer who harnesses the power of volcanoes.', image: Lava },
  { id: '4star_8', name: 'Ganyu', rarity: Rarity.FourStar, description: 'A sexy visitor from another world. An inferior world.', image: Ganyu },
  { id: '4star_9', name: 'Thunder Striker', rarity: Rarity.FourStar, description: 'A lightning-fast warrior who rides the storm.', image: Thunder },
  { id: '4star_10', name: 'Mystic Archer', rarity: Rarity.FourStar, description: 'An enigmatic bowman with arrows of pure energy.', image: Mystic },
  { id: '4star_11', name: 'Hologram Blade', rarity: Rarity.FourStar, description: 'A futuristic sword that can change its form at will.', image: Hologram},
  { id: '4star_12', name: 'Quantum Blaster', rarity: Rarity.FourStar, description: 'A high-tech projectile weapon that fires energy bolts.', image: Quantum },
  { id: '4star_13', name: 'Neon Staff', rarity: Rarity.FourStar, description: 'A pulsating staff that channels pure light energy.', image: Neon },
  { id: '4star_14', name: 'Plasma Cannon', rarity: Rarity.FourStar, description: 'A devastating weapon that fires super-heated plasma.', image: Plasma },

  // 3-Star Rarity (15% chance)
  { id: '3star_1', name: 'Lunar Staff', rarity: Rarity.ThreeStar, description: 'A staff that harnesses the power of the moon.', image: Lunar },
  { id: '3star_2', name: 'Shadow Blade', rarity: Rarity.ThreeStar, description: 'A sword that cuts through darkness itself.', image: Shadow },
  { id: '3star_3', name: 'Radiant Scepter', rarity: Rarity.ThreeStar, description: 'A scepter that emits a brilliant, healing light.', image: Radiant },
  { id: '3star_4', name: 'Amethyst Rod', rarity: Rarity.ThreeStar, description: 'A staff infused with mystical purple energy.', image: Amethyst },
  { id: '3star_5', name: 'Crimson Katana', rarity: Rarity.ThreeStar, description: 'A swift blade that leaves trails of fire.', image: Crimson },
  { id: '3star_6', name: 'Frost Saber', rarity: Rarity.ThreeStar, description: 'A chilling sword that freezes enemies on contact.', image: Frost },
  { id: '3star_7', name: 'Demon Cleaver', rarity: Rarity.ThreeStar, description: 'A wicked blade that feeds on dark energy.', image: Demon },
  { id: '3star_8', name: 'Void Sword', rarity: Rarity.ThreeStar, description: 'A mysterious blade that seems to absorb light.', image: Void },
  { id: '3star_9', name: 'Quantum Staff', rarity: Rarity.ThreeStar, description: 'A staff that manipulates the fabric of space-time.', image: Quantstaff },
  { id: '3star_10', name: 'Sonic Blaster', rarity: Rarity.ThreeStar, description: 'A weapon that fires concentrated sound waves.', image: Sonic },
  { id: '3star_11', name: 'Divine Blade', rarity: Rarity.ThreeStar, description: 'A holy sword imbued with celestial light.', image: Divine },
  { id: '3star_12', name: 'Apocalypse Edge', rarity: Rarity.ThreeStar, description: 'The last sword, forged for the final battle.', image:Apocalypse },

  // 2-Star Rarity (30% chance)
  { id: '2star_1', name: 'Mana Potion', rarity: Rarity.TwoStar, description: 'A magical concoction that restores mana.', image: Mana },
  { id: '2star_2', name: 'Health Elixir', rarity: Rarity.TwoStar, description: 'A potent brew that quickly restores health.', image: Health },
  { id: '2star_3', name: 'Strength Tonic', rarity: Rarity.TwoStar, description: 'A powerful potion that temporarily boosts strength.', image: Potion },

  // 1-Star Rarity (50% chance)
  { id: '1star_1', name: 'Diploma', rarity: Rarity.OneStar, description: 'Congrats! now you owe me a pull!', image: 'https://pics.clipartpng.com/Graduation_Cap_with_Diploma_PNG_Clipart-375.png' }, //its the only one i dont have :'(
  { id: '1star_2', name: 'Participation Trophy', rarity: Rarity.OneStar, description: 'Congratulations on participating! Have a trophy shaped cookie.', image: Trophy },

  // Promotion Rarity (special circumstances)
  { id: 'promo_1', name: 'Couch Surfer etovo', rarity: Rarity.Promotion, description: 'A laid-back character with surprising abilities.', image: Couch },
];

export const rarityDisplay = {
    [Rarity.Ultra]: '💫',
    [Rarity.FiveStar]: '⭐⭐⭐⭐⭐',
    [Rarity.FourStar]: '⭐⭐⭐⭐',
    [Rarity.ThreeStar]: '⭐⭐⭐',
    [Rarity.TwoStar]: '⭐⭐',
    [Rarity.OneStar]: '⭐',
    [Rarity.Promotion]: '⚡',
  };
  
  export const rarityColors = {
    [Rarity.Ultra]: 'bg-gradient-to-r from-black via-purple-900 to-black',
    [Rarity.FiveStar]: 'bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600',
    [Rarity.FourStar]: 'bg-purple-500',
    [Rarity.ThreeStar]: 'bg-blue-500',
    [Rarity.TwoStar]: 'bg-green-500',
    [Rarity.OneStar]: 'bg-gray-400',
    [Rarity.Promotion]: 'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500',
  };
  
  export const rarityProbabilities = {
    [Rarity.Ultra]: 0.001,
    [Rarity.FiveStar]: 0.004,
    [Rarity.FourStar]: 0.045,
    [Rarity.ThreeStar]: 0.15,
    [Rarity.TwoStar]: 0.3,
    [Rarity.OneStar]: 0.5,
    [Rarity.Promotion]: 0,
  };
  
  export const getCharacterById = (id: string): Character | undefined => {
    return characters.find(char => char.id === id);
  };
  
  export const getCharactersByRarity = (rarity: Rarity): Character[] => {
    return characters.filter(char => char.rarity === rarity);
  };