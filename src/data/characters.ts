import { Character, Rarity } from '../types';

export const characters: Character[] = [


  { id: 'ultra_1', name: 'Puppetmaster etovo', rarity: Rarity.Ultra, description: 'A mysterious puppetmaster with untold power.', image: 'https://media.discordapp.net/attachments/1049174081041350656/1259331511904108564/0345FEFA-B94B-4B6D-BE37-00A933DEC113.png?ex=668b4b5d&is=6689f9dd&hm=a876ed57172196f05f5a5552e89e6acbf20e4709e2e0e25009d4c6ebbad2089f&' },
  { id: 'ultra_2', name: 'Demon Slayer etovo', rarity: Rarity.Ultra, description: 'A legendary warrior known for slaying demons.', image: 'https://media.discordapp.net/attachments/1049174081041350656/1259331514622021663/AACA3F66-9DB6-4C8E-9601-1013FCA426F0.png?ex=668b4b5e&is=6689f9de&hm=7f0a797ab9365cfb7a5e1146ac2e52fbdd58cf8d6ffad5706bc916d74b7fe952&' },
  { id: 'ultra_3', name: 'Flying etovo', rarity: Rarity.Ultra, description: 'An enigmatic being with the power of flight.', image: 'https://media.discordapp.net/attachments/1049174081041350656/1259331513196089415/9699C9B1-6D15-4ABA-B73D-DBBFF34B17D9.png?ex=668b4b5d&is=6689f9dd&hm=d8f40dd2fffd1fc402e19ebfb3ea662162a856d140610d6db35ea564805474b0&' },
  { id: 'ultra_4', name: 'All Seeing etovo', rarity: Rarity.Ultra, description: 'An omniscient entity with piercing gaze.', image: 'https://media.discordapp.net/attachments/1049174081041350656/1259360393835450419/0720D402-CFFE-4485-A1FF-0B84421FD006.png?ex=668b6643&is=668a14c3&hm=58b0642cf97fa10bdfb33f4760a8e9171c139a200f85be0a7d2c4572031360de&' },
  { id: 'ultra_5', name: 'Inquisition etovo', rarity: Rarity.Ultra, description: 'A formidable judge of character and truth.', image: 'https://media.discordapp.net/attachments/1049174081041350656/1259360394170990673/84F43B5F-13AD-4F79-8196-7BB671151F7E.png?ex=668b6643&is=668a14c3&hm=9485d029e6822a8eacadf4276cc38edb87038679b3a5554f1aa6157bbfb41198&' },

  // 5-Star Rarity (0.4% chance, with pity)
  { id: '5star_1', name: 'Brandon', rarity: Rarity.FiveStar, description: 'A charismatic leader, or so he claims.', image: 'https://media.discordapp.net/attachments/1049174081041350656/1259435670120693891/13976F7E-2918-4C81-89AC-1EE6B7A99FED.png?ex=668bac5e&is=668a5ade&hm=f5c84fbeb5f06ef1c93e39daf829ec83e7b6d13e7c670273dbd5eced9df936a2&' },
  { id: '5star_2', name: 'Donny T', rarity: Rarity.FiveStar, description: 'A boisterous businessman who dabbles in politics.', image: 'https://media.discordapp.net/attachments/1049174081041350656/1259435670464757830/DEF2B04E-20EA-464C-8897-E8109F27A85E.png?ex=668bac5f&is=668a5adf&hm=60bc8e07171f51ae62b81a833516b83b42074be1b78a6c0940e50ff84ff80f8a&' },
  { id: '5star_3', name: 'The 5th Horseman', rarity: Rarity.FiveStar, description: 'The unexpected addition to the apocalyptic quartet.', image: 'https://media.discordapp.net/attachments/1049174081041350656/1259421028359213056/IMG_9828.png?ex=668b9ebc&is=668a4d3c&hm=f29295b4053cb91ef519c6629845b4efeef60b35705a052c57772899819dcec4&' },
  { id: '5star_4', name: 'Chicken', rarity: Rarity.FiveStar, description: 'A feathered fighter with surprising combat skills.', image: 'https://media.discordapp.net/attachments/1049174081041350656/1259421027763748864/IMG_9829.png?ex=668b9ebb&is=668a4d3b&hm=580f68156de4fb076bac399a464e6621fd677aba07f8e50fd0fc6af195b00cd0&' },
  { id: '5star_5', name: 'The Barbarian', rarity: Rarity.FiveStar, description: 'A fierce warrior from the untamed lands.', image: 'https://media.discordapp.net/attachments/1049174081041350656/1259435670905028678/35915260-902E-40CE-98BC-42C7A40A9342.png?ex=668bac5f&is=668a5adf&hm=b2593667c7716f39f84359b531f356fbf6731e587261460dad76bc089a918162&' },
  { id: '5star_6', name: 'The Final Soldier', rarity: Rarity.FiveStar, description: 'The last line of defense in a world at war.', image: 'https://media.discordapp.net/attachments/1049174081041350656/1259435671588962304/D4EE85D8-F6B9-4A92-89F5-329754D17E12.png?ex=668bac5f&is=668a5adf&hm=d14778e8d08acc1f1adc02e6ca0ce6f002cbd865a0123c847e3d2669a1abe3c7&' },
  { id: '5star_7', name: 'Future Knight', rarity: Rarity.FiveStar, description: 'A time-traveling warrior with advanced technology.', image: 'https://media.discordapp.net/attachments/1049174081041350656/1259435672402526218/7E928BBA-4C26-4C13-904B-D9C701D72260.png?ex=668bac5f&is=668a5adf&hm=f40d1a67b0cc10f061c69c8b3be221de5bac8be76b4aa419c6a6a4e59bf17aff&' },
  { id: '5star_8', name: 'Dr. Pepper', rarity: Rarity.FiveStar, description: 'A fizzy physician with a bubbly personality.', image: 'https://media.discordapp.net/attachments/1049174081041350656/1259436389586436147/D1B53BF5-CF6D-4C53-A36D-51CF87066096.png?ex=668bad0a&is=668a5b8a&hm=8879a15de3f5e96e20f2becaa479db146bef15c2c8130af631bd3c1e32b93cb3&' },
  { id: '5star_9', name: 'PS Vita', rarity: Rarity.FiveStar, description: 'A handheld hero with a library of skills.', image: 'https://media.discordapp.net/attachments/1049174081041350656/1259436390190551050/C463CA80-507C-4F2E-8FBD-5F56F2254C8B.png?ex=668bad0a&is=668a5b8a&hm=850b48bde4e85877c4824d5e8c65350249d0c53e32e73f4bad102ddff591b0f4&' },
  { id: '5star_10', name: 'Frost Shard', rarity: Rarity.FiveStar, description: 'An icy projectile that freezes foes on impact.', image: 'https://media.discordapp.net/attachments/1049174081041350656/1259568186224017479/06FD44AE-B772-4D7D-8E51-47C0B10649A7.png?ex=668c27c9&is=668ad649&hm=ad11f627de21e14b6160078f4a0552117e379ef41bf8302cf8f459279990eaad&' },

  // 4-Star Rarity (4.5% chance)
  { id: '4star_1', name: 'Violet Warrior', rarity: Rarity.FourStar, description: 'A skilled dragon tamer with a vibrant fighting style.', image: 'https://media.discordapp.net/attachments/1049174081041350656/1259429472453660752/okinamba_genshin_impact_character_1244057c-74b8-4279-a584-21ad023f2c70.png?ex=668ba699&is=668a5519&hm=fb8bea9b8cbdf777358a9f726c534321399d38e9d22539179a4547fd50566f43&' },
  { id: '4star_2', name: 'Hail Warrior', rarity: Rarity.FourStar, description: 'A cool-headed fighter who commands ice and snow.', image: 'https://media.discordapp.net/attachments/1049174081041350656/1259429471736299551/okinamba_genshin_impact_character_22152b52-7676-4d43-9b75-d7e8f30bbd6e.png?ex=668ba699&is=668a5519&hm=b25a183d02c63ae5d074a62d97a42fa2ea0f192dc28c018602aeadaeebc30853&' },
  { id: '4star_3', name: 'Aqua Mage', rarity: Rarity.FourStar, description: 'A powerful water elementalist with flowing attacks.', image: 'https://media.discordapp.net/attachments/1049174081041350656/1259429473305100288/im_with_jesus_character_in_the_style_of_Azure_Lane_683fccd5-90f7-473a-8727-5d31e63a7930.png?ex=668ba699&is=668a5519&hm=76c549ff157b5e736a6e015be51a44973d755ef96b86b2a8a760ba12c104ac1e&' },
  { id: '4star_4', name: 'Beach Brawler', rarity: Rarity.FourStar, description: 'A sun-kissed fighter who excels in close combat.', image: 'https://media.discordapp.net/attachments/1049174081041350656/1259429474814918678/im_with_jesus_character_from_Azure_Lane_at_the_beach_cell_shade_2f15fb32-7864-469d-abba-4d59f62b2609.png?ex=668ba699&is=668a5519&hm=bde72e1a368167be14d431005dca14a19139f9cec3ee21b45d149f6134faf76d&' },
  { id: '4star_5', name: 'Sandstorm Nomad', rarity: Rarity.FourStar, description: 'A desert wanderer with the power to control sand.', image: 'https://media.discordapp.net/attachments/1049174081041350656/1259429475540795452/im_with_jesus_character_from_Azure_Lane_at_the_beach_cell_shade_51991203-322e-4931-af2a-d06b9839448b.png?ex=668ba69a&is=668a551a&hm=e49fec6f1d9bb3b4bee820b1f4f3005b17361b61419cd3c48091cbdd6f6d62c7&' },
  { id: '4star_6', name: 'Coral Guardian', rarity: Rarity.FourStar, description: 'A protector of the seas with vibrant coral armor.', image: 'https://media.discordapp.net/attachments/1049174081041350656/1259427944795738193/im_with_jesus_character_from_Azure_Lane_at_the_beach_2adca7f7-166f-486b-a8c6-ab7b74e8777b.png?ex=668ba52d&is=668a53ad&hm=6a9f30d1627007f111e6b3bdfbaa72349ec7f49ff194e7ff2f58961b6537fd1c&' },
  { id: '4star_7', name: 'Lava Dancer', rarity: Rarity.FourStar, description: 'A graceful performer who harnesses the power of volcanoes.', image: 'https://media.discordapp.net/attachments/1049174081041350656/1259444656400240640/im_with_jesus_Genshin_Impact_character_in_the_style_of_Azur_Lan_5da0724b-e1f8-48d5-a248-5ba947befc68.png?ex=668bb4bd&is=668a633d&hm=fab6e7a93503865869a4828a36f027562a255d9299ee391f3f399825f70d9748&' },
  { id: '4star_8', name: 'Frost Maiden', rarity: Rarity.FourStar, description: 'An ice-wielding enchantress with a cool demeanor.', image: 'https://media.discordapp.net/attachments/1049174081041350656/1259444658707366020/im_with_jesus_Azur_lane_character_wearing_a_swimsuit_on_a_white_12a7bc96-5ee6-40a6-80b4-8242525577be.png?ex=668bb4bd&is=668a633d&hm=99632c48a37c5bbaf73b8f9a40da059f1d25ee8d942d64d2529abd28d132ff42&' },
  { id: '4star_9', name: 'Thunder Striker', rarity: Rarity.FourStar, description: 'A lightning-fast warrior who rides the storm.', image: 'https://media.discordapp.net/attachments/1049174081041350656/1259444661756366878/im_with_jesus_Genshin_Impact_character_in_the_style_of_Azur_Lan_b4aa4ee5-5478-4876-98eb-1059e0ed39ff.png?ex=668bb4be&is=668a633e&hm=f0c13c5715de55c21213aa5c0452fab968108a6bc78c155eb1a5706eef1f1921&' },
  { id: '4star_10', name: 'Mystic Archer', rarity: Rarity.FourStar, description: 'An enigmatic bowman with arrows of pure energy.', image: 'https://media.discordapp.net/attachments/1049174081041350656/1259444898847785002/im_with_jesus_Genshin_Impact_character_in_the_style_of_Azur_Lan_8e65dd82-315c-41ff-be30-0405fa2a0bce.png?ex=668bb4f7&is=668a6377&hm=44eec721f535c10309aec17613058a50e4beefb14b8eb0c57bcfca8daebe3841&' },
  { id: '4star_11', name: 'Hologram Blade', rarity: Rarity.FourStar, description: 'A futuristic sword that can change its form at will.', image: 'https://media.discordapp.net/attachments/1049174081041350656/1259567337468727441/IMG_9864.png?ex=668c26fe&is=668ad57e&hm=3bfd1c37304a7b33d0b7c3b3b72d2eb5ac92d6d1aa6cfc31a1efa60f3a5a841e&' },
  { id: '4star_12', name: 'Quantum Blaster', rarity: Rarity.FourStar, description: 'A high-tech projectile weapon that fires energy bolts.', image: 'https://media.discordapp.net/attachments/1049174081041350656/1259567338223697920/IMG_9865.png?ex=668c26ff&is=668ad57f&hm=00a847fb7d24fb587f4a1e6edad178c63bf8172bd91e30580ab561c99bef5233&' },
  { id: '4star_13', name: 'Neon Staff', rarity: Rarity.FourStar, description: 'A pulsating staff that channels pure light energy.', image: 'https://media.discordapp.net/attachments/1049174081041350656/1259567338949316738/IMG_9867.png?ex=668c26ff&is=668ad57f&hm=2ce955e8ec749d7e1db418dbab49eda7ae020700e302bcb29d858c5f05b5f416&' },
  { id: '4star_14', name: 'Plasma Cannon', rarity: Rarity.FourStar, description: 'A devastating weapon that fires super-heated plasma.', image: 'https://media.discordapp.net/attachments/1049174081041350656/1259567339662479432/IMG_9866.png?ex=668c26ff&is=668ad57f&hm=50b396d5fd08e9d367422b04d99b2f92fa1f42011b76737137cb339c27337dec&' },

  // 3-Star Rarity (15% chance)
  { id: '3star_1', name: 'Lunar Staff', rarity: Rarity.ThreeStar, description: 'A staff that harnesses the power of the moon.', image: 'https://media.discordapp.net/attachments/1049174081041350656/1259450002829479936/im_with_jesus_Genshin_Impact_weapon_on_a_white_background_5072b8f7-c4bd-49f2-ba3f-f804c7be7e01.png?ex=668bb9b8&is=668a6838&hm=e64c3ba4b0e7c1507ca43cefa0aa3ee1cbb53dc0f068a794f814be7069b3c917&' },
  { id: '3star_2', name: 'Shadow Blade', rarity: Rarity.ThreeStar, description: 'A sword that cuts through darkness itself.', image: 'https://media.discordapp.net/attachments/1049174081041350656/1259450009263542282/im_with_jesus_anime_weapon_on_a_white_background_c384ee56-b8ef-44e4-8625-44304fb4f0b4.png?ex=668bb9b9&is=668a6839&hm=a2fee7a901c081429c3ad0c009c699d4eb273b5fd908837ba102cee3e841a6f0&' },
  { id: '3star_3', name: 'Radiant Scepter', rarity: Rarity.ThreeStar, description: 'A scepter that emits a brilliant, healing light.', image: 'https://media.discordapp.net/attachments/1049174081041350656/1259450246295978066/im_with_jesus_anime_weapon_on_a_white_background_82897988-9ff8-40cc-a36c-2768252c0016.png?ex=668bb9f2&is=668a6872&hm=1356be9395554aa970bbce96cce149602397de4d34a4cde3eeb594dfacade55c&' },
  { id: '3star_4', name: 'Amethyst Rod', rarity: Rarity.ThreeStar, description: 'A staff infused with mystical purple energy.', image: 'https://media.discordapp.net/attachments/1049174081041350656/1259450292148109343/im_with_jesus_Genshin_Impact_weapon_on_a_white_background_01633010-d360-4c25-82de-cd7e4d54ea2d.png?ex=668bb9fd&is=668a687d&hm=81e1b08ddca0fd49e3a0dda283f3c1f3621afb696f7be480b6d45c9cf2b8e6cf&' },
  { id: '3star_5', name: 'Crimson Katana', rarity: Rarity.ThreeStar, description: 'A swift blade that leaves trails of fire.', image: 'https://media.discordapp.net/attachments/1049174081041350656/1259450491922939995/im_with_jesus_anime_weapon_on_a_white_background_47320a06-9f18-4653-8ad7-4a6f52f4967a.png?ex=668bba2c&is=668a68ac&hm=e8c78fcc770d5d97a61a97a0d4f6a4e91942f744c8df2bd65fe9e7d951b1ae28&' },
  { id: '3star_6', name: 'Frost Saber', rarity: Rarity.ThreeStar, description: 'A chilling sword that freezes enemies on contact.', image: 'https://media.discordapp.net/attachments/1049174081041350656/1259450494359830548/im_with_jesus_anime_weapon_on_a_white_background_5500c8d9-e14d-484e-8bed-498a850d59cf.png?ex=668bba2d&is=668a68ad&hm=b767a9a16394d8ccf19617a4ae406bd50b03c3df39e5906bbb8d9f38eaa0a250&' },
  { id: '3star_7', name: 'Demon Cleaver', rarity: Rarity.ThreeStar, description: 'A wicked blade that feeds on dark energy.', image: 'https://media.discordapp.net/attachments/1049174081041350656/1259450532834312212/im_with_jesus_anime_weapon_on_a_white_background_cf755991-e9ec-4d0d-bdbf-a187fdb17336.png?ex=668bba36&is=668a68b6&hm=cfd12577447bb6fd8db1cda3eaee0be0d99b8c0321f94951e3eb434b032f6436&' },
  { id: '3star_8', name: 'Void Sword', rarity: Rarity.ThreeStar, description: 'A mysterious blade that seems to absorb light.', image: 'https://media.discordapp.net/attachments/1049174081041350656/1259450740196249620/im_with_jesus_anime_weapon_on_a_white_background_c1f38e75-34b0-4bf5-9b47-e8ca144b9089.png?ex=668bba67&is=668a68e7&hm=d3c024232be92770db92760c10ce308aebf4549dde1d9cbf11840a545cbe8da6&' },
  { id: '3star_9', name: 'Quantum Staff', rarity: Rarity.ThreeStar, description: 'A staff that manipulates the fabric of space-time.', image: 'https://media.discordapp.net/attachments/1049174081041350656/1259450745778995230/im_with_jesus_Genshin_Impact_weapon_on_a_white_background_b4e558bf-becf-46db-a1d4-661025dec0b2.png?ex=668bba69&is=668a68e9&hm=2abeeb1a9deb658382aecca486610e77a683d4882441e6ee21750ddd184d5a50&' },
  { id: '3star_10', name: 'Sonic Blaster', rarity: Rarity.ThreeStar, description: 'A weapon that fires concentrated sound waves.', image: 'https://media.discordapp.net/attachments/1049174081041350656/1259450777273897022/im_with_jesus_Genshin_Impact_weapon_on_a_white_background_9deac27f-3231-44fc-b17b-d5b2cf46f5f1.png?ex=668bba70&is=668a68f0&hm=779f192e8c1d839311840ba41625d1799db36029cf345d9e984ab5405f888c8a&' },
  { id: '3star_11', name: 'Divine Blade', rarity: Rarity.ThreeStar, description: 'A holy sword imbued with celestial light.', image: 'https://media.discordapp.net/attachments/1049174081041350656/1259450984825094205/im_with_jesus_Genshin_Impact_weapon_on_a_white_background_655a2e70-722f-4ae9-bc67-7c7ce42ff70f.png?ex=668bbaa2&is=668a6922&hm=1b05538b3c200f3966b90b013809427117b83166cc4167d3a04684d2b7570d27&' },
  { id: '3star_12', name: 'Apocalypse Edge', rarity: Rarity.ThreeStar, description: 'The last sword, forged for the final battle.', image: 'https://media.discordapp.net/attachments/1049174081041350656/1259451014541738044/im_with_jesus_anime_weapon_on_a_white_background_bce56545-9fb0-4857-8187-8acf13c941b5.png?ex=668bbaa9&is=668a6929&hm=742e89c182bf5bef52e71ee97d1d4d461c69da5199bdb96b141f643a5de203f7&' },

  // 2-Star Rarity (30% chance)
  { id: '2star_1', name: 'Mana Potion', rarity: Rarity.TwoStar, description: 'A magical concoction that restores mana.', image: 'https://media.discordapp.net/attachments/1049174081041350656/1259575225541202001/2CAC6956-5D25-434A-A3EB-7A013F454708.png?ex=668c2e57&is=668adcd7&hm=6ca930d6dc2bcfff4596941a1006de752b4519613492d006412394ebc0b75558&' },
  { id: '2star_2', name: 'Health Elixir', rarity: Rarity.TwoStar, description: 'A potent brew that quickly restores health.', image: 'https://media.discordapp.net/attachments/1049174081041350656/1259575225033556060/E6650C41-A724-4690-9A97-1A5D6083BC21.png?ex=668c2e57&is=668adcd7&hm=3502c880d41b13ecc5e9b7c53febf99e9bad7ff5b4cc378abf5eb068389c1c8b&' },
  { id: '2star_3', name: 'Strength Tonic', rarity: Rarity.TwoStar, description: 'A powerful potion that temporarily boosts strength.', image: 'https://media.discordapp.net/attachments/1049174081041350656/1259575226283327508/612A8B6E-3FE6-4E95-B7B9-731BB62DADB4.png?ex=668c2e57&is=668adcd7&hm=e9897958b8dc0139a92874f46b6361e415343a7d81acba44289cfe753a225041&' },

  // 1-Star Rarity (50% chance)
  { id: '1star_1', name: 'Diploma', rarity: Rarity.OneStar, description: 'Congrats! now you owe me a pull!', image: 'https://pics.clipartpng.com/Graduation_Cap_with_Diploma_PNG_Clipart-375.png' },
  { id: '1star_2', name: 'Participation Trophy', rarity: Rarity.OneStar, description: 'Congratulations on participating! Have a trophy shaped cookie.', image: 'https://media.discordapp.net/attachments/1049174081041350656/1259573885880373278/636E9610-1591-4A43-9D28-7126AF81D010.png?ex=668c2d18&is=668adb98&hm=e5088c9ec8b4f86bc0b59c6da97c949fc9bc56081163a9d6cb6eab3844ee536f&' },

  // Promotion Rarity (special circumstances)
  { id: 'promo_1', name: 'Couch Surfer etovo', rarity: Rarity.Promotion, description: 'A laid-back character with surprising abilities.', image: 'https://media.discordapp.net/attachments/1049174081041350656/1259331513980289147/114F41A9-733E-4DAF-9EA1-D2CA22FF76C7.png?ex=668b4b5e&is=6689f9de&hm=ae90eead39e7f664fe8696c0168169c7f81c0e8b27b38ab16df4d5cd5ed031ee&' },
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