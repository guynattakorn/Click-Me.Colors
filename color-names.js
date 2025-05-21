/*
  color-names.js
  A script that generates and exports a map of 400 unique random colors to evocative names.
  Enhanced with thematic root arrays and expanded by 300 entries plus 100 curated additional roots.
*/



// Thematic root arrays for name generation
const arcaneMystical = [
  "Arcana","Astral","Aura","Charm","Eldritch","Enchant","Ether",
  "Faerie","Fable","Glamour","Grimoire","Hex","Mystic","Mysteria",
  "Phantom","Rune","Runebound","Sigil","Sorcery","Spellbound","Spirit",
  "Wyrd"
];

const cosmicSpace = [
  "Andromeda","Antimatter","Aurora","Blueshift","Celestia","Celestium",
  "Comet","Cosmos","Darkmatter","Eclipse","Exoplanet","Galaxy","Gravity",
  "Hypernova","Lunar","Meteor","Nebula","Nebulon","Nova","Orion","Photon",
  "Pulsar","Quasar","Radiant","Redshift","Singularity","Solar","Starlight",
  "Starfall","Supernova"
];

const artisticColor = [
  "Brush","Canvas","Charcoal","Collage","Doodle","Duotone","Etching",
  "Expression","Filter","Fresco","Glaze","Gradient","Hue","Impression",
  "Inkblot","Marbling","Mosaic","Monochrome","Oilspill","Palette",
  "Pastel","Pointillism","Stencil","Spray","Spectrum","Swatch"
];

const natureElements = [
  "Abyss","Blaze","Blizzard","Breeze","Brine","Canopy",
  "Cloud","Cyclone","Drift","Eddy","Ember","Fen","Fog","Frost",
  "Gale","Glacier","Glade","Hurricane","Lagoon","Mariner","Mist",
  "Monsoon","Oasis","Prairie","Quintessence","Rainbow","Savanna",
  "Spray","Thunder","Tide","Tornado","Trench","Tundra","Zephyr"
];

const techSciFi = [
  "Augment","Bitstream","Biohack","Bootstrap","Circuit","Core","Cyberia",
  "Datacenter","Drone","Fragment","Firewall","Glitch","Hologram",
  "Interface","Kernel","Mecha","Mechanoid","Module","Nanobot","Neuron",
  "Overclock","Phase","Pixel","PulseCore","QuantumFlux",
  "Signal","Synth","Servo"
];

const floraFauna = [
  "Antenn","Blossom","Branchia","Bramble","Cactus","Camellia","Carapace",
  "Claw","Dahlia","Fern","Foliar","Fur","Hive","Iris","Lichen",
  "Lotus","Magnolia","Mariner","Moss","Nautilus","Orchid","Peony",
  "Pollen","Poppy","Quill","Shell","Spore","Succulent","Talons",
  "Thicket","Thorn","Vine"
];

const civilizations = [
  "Aztec","Byzantium","Dravidian","Mayan","Inca","Viking",
  "Celtic","Sumerian","Babylonian","Persian","Ottoman","Mughal",
  "Egyptian","Roman","Greek","Norse"
];

const musicArt = [
  "Opus","Cadence","Baroque","Sonata","Fugue","Allegro","Andante",
  "Prelude","Nocturne","Ballad","Requiem","Etude","Rhapsody",
  "CanvasArt","Mural","Portrait","Sculpt","Diorama","Icons"
];

const foreignWords = [
  "Stella","Luna","Aqua","Terra","Ignis","Ventus","Lux",
  "Nox","Kumo","Hikari","Yama","Sora","Gaia","Chronos",
  "Nyx","Zeus","Atlas","Aether","Eros","Morpheus"
];

const prefixesSuffixes = [
  "Neo","Ultra","Meta","Hyper","Super","Omni","Pan",
  "Trans","Infra","Mega","Mini","Proto","Retro","Cypher",
  "Nano","Pico","Tera","Giga","Exo","Para","Quasi"
];

// Curated additional 100 roots
const additionalRoots = [
  "Aegis","Aria","Auric","Basilisk","Borealis","Cinder","Cobalt","Corona","Crimson","Dynamo",
  "Eclipse","Emberglow","Frostbite","Gilded","Hallowed","Illusion","Jadeite","Kaleido","Labyrinth","Lumina",
  "Mirage","Nebulae","Obsidian","Opaline","Parchment","Quartz","Radiance","Sanctum","Tempest","Umbra",
  "Verdant","Whisper","Xenon","Yonder","Zephyrine","Archetype","Bijou","Catalyst","Epiphany","Fluxion",
  "Glyphic","Halcyon","Incant","Jubilant","Kismet","Lucent","Myriad","Nectar","Oculus","Pinnacle",
  "Resonance","Serenity","Thalassa","Unity","Vortexia","Willow","Xanadu","Zephyrus","Amethyst","Beryl",
  "Celest","Driftwood","Eon","Fjord","Grove","Harbor","Isobar","Junction","Karma","Legend",
  "Monarch","Nexus","Oracle","Parallax","Quintet","Reverie","Solstice","Threshold","Utopia","Vista",
  "Wraith","Xylem","Yttrium","Zenith","Afflatus","BlizzardDust","CoronaLux","Dreamscape","Eternity","Firebrand",
  "Gleam","Harmony","Iridescent","Jade","Kaleidoscope","Labyrinthine","Noctiluca","Mosaic","Opalescent","Photonix"
];

const spaceWords = [
  'star', 'sun', 'moon', 'planet', 'orbit', 'comet', 'meteor', 'asteroid',
  'galaxy', 'nebula', 'nova', 'cosmos', 'rocket', 'shuttle', 'space', 'lunar',
  'solar', 'venus', 'mars', 'jupiter', 'saturn', 'mercury', 'uranus', 'neptune',
  'pluto', 'earth', 'eclipse', 'crater', 'cosmic', 'sirius', 'polaris', 'vega',
  'lyra', 'orion', 'quasar', 'plasma', 'vacuum', 'void', 'orb', 'astral',
  'cosmo', 'stellar', 'stella', 'astronaut', 'abyss', 'binary', 'dark',
  'asterism', 'atlas', 'quantum', 'ion', 'photon', 'neutron', 'apollo', 'phobos',
  'deimos', 'titan', 'aurora', 'pulsar', 'quark', 'halley', 'zenith', 'aether',
  'meteorite', 'voyager', 'nebulae', 'hubble', 'sol', 'luna', 'terra', 'electra',
  'celestial', 'atmos', 'solstice'
];

const natureWords = [
  'forest', 'ocean', 'river', 'valley', 'mountain', 'canyon', 'desert', 'jungle',
  'island', 'lake', 'garden', 'meadow', 'paradise', 'earth', 'terra', 'prairie',
  'savanna', 'field', 'fog', 'breeze', 'rain', 'storm', 'thunder', 'lightning',
  'snow', 'wind', 'tornado', 'gale', 'dawn', 'dusk', 'sunrise', 'sunset',
  'rainbow', 'mist', 'dew', 'ice', 'crystal', 'glacier', 'volcano', 'lava',
  'oasis', 'cave', 'cliff', 'reef', 'dune', 'sand', 'pebble', 'emerald', 'ruby',
  'sapphire', 'opal', 'jade', 'onyx', 'topaz', 'pearl', 'amber', 'graphite',
  'gold', 'silver', 'bronze', 'steel', 'iron', 'copper', 'ivy', 'fern', 'orchid',
  'rose', 'lily', 'lotus', 'oak', 'pine', 'willow', 'cedar', 'vine', 'cypress',
  'maple', 'birch', 'elm', 'moss', 'spruce', 'bamboo', 'cherry', 'granite',
  'quartz', 'basalt', 'shell', 'coral', 'tide', 'plains', 'heather', 'daisy',
  'iris', 'sage', 'yew', 'rainforest', 'delta', 'atoll', 'lagoon', 'estuary',
  'basin', 'cavern', 'grove', 'hickory', 'sequoia', 'fir', 'flower', 'cactus',
  'wheat', 'grain', 'bog', 'fen', 'tundra', 'fjord', 'waterfall', 'amethyst',
  'aqua', 'mare', 'cove', 'lichen', 'gentian', 'pampas'
];

const mythologyWords = [
  'zeus', 'hera', 'ares', 'eros', 'pan', 'rhea', 'nike', 'odin', 'thor', 'loki',
  'tyr', 'frey', 'frigg', 'heimdall', 'ra', 'isis', 'osiris', 'horus', 'set',
  'bast', 'anubis', 'danu', 'epona', 'lugh', 'indra', 'agni', 'shiva', 'vishnu',
  'an', 'mars', 'juno', 'titan', 'nymph', 'echo', 'cyclops', 'kraken', 'hydra',
  'zephyr', 'neptune', 'venus', 'jupiter', 'ceres', 'cronus', 'medusa', 'atlas',
  'eris', 'janus', 'elysium', 'thoth', 'cres', 'forseti', 'oceanus', 'maui',
  'minerva', 'hel', 'aries', 'aphrodite', 'poseidon'
];

const fantasyWords = [
  'dragon', 'griffin', 'unicorn', 'goblin', 'fairy', 'ogre', 'troll', 'elf',
  'orc', 'dwarf', 'pixie', 'sprite', 'siren', 'vampire', 'werewolf', 'witch',
  'wizard', 'mage', 'druid', 'genie', 'rune', 'spell', 'magic', 'potion',
  'elixir', 'charm', 'phantom', 'spirit', 'fae', 'shaman', 'shade', 'shadow',
  'abyss', 'crypt', 'sorcerer', 'banshee', 'chimera', 'minotaur', 'yeti',
  'zombie', 'demon', 'lich', 'gargoyle', 'spectre', 'magus', 'sphinx', 'faun',
  'satyr', 'wyvern', 'ghast', 'boggart', 'naga', 'warlock', 'faerie', 'bard',
  'hero', 'quest'
];

const abstractWords = [
  'void', 'echo', 'dream', 'soul', 'lore', 'twilight', 'abyss', 'chaos', 'flux',
  'prism', 'mirage', 'illusion', 'sphere', 'nexus', 'pulse', 'gleam', 'spark',
  'ripple', 'rhythm', 'tempo', 'alchemy', 'artifact', 'ancient', 'vein', 'gale',
  'drift', 'labyrinth', 'mystic', 'arcane', 'surreal', 'eclipse', 'eon', 'epoch',
  'realm', 'cinder', 'ember', 'shard', 'core', 'mirror', 'wisp', 'whisper',
  'shade', 'haze', 'mist', 'hollow', 'cipher', 'gloom', 'noir', 'paradox',
  'entropy', 'fractal', 'surge', 'circuit', 'dimension', 'vector', 'specter',
  'spectrum', 'vortex', 'zenith', 'nadir', 'ethereal', 'kaos', 'aeon', 'moment',
  'eternity', 'parallel', 'density', 'cycle', 'pulsar', 'meta', 'ultra',
  'archive', 'infinity', 'zero', 'shimmer', 'spire', 'iris', 'holo', 'lux',
  'umbra', 'ventus', 'ignis', 'aqua', 'yume', 'sora', 'mizu', 'rama', 'aura',
  'tesseract', 'hallucination', 'signal', 'coda', 'diary'
];

const technologyWords = [
  'circuit', 'pixel', 'bit', 'byte', 'data', 'code', 'binary', 'drone', 'robot',
  'laser', 'quantum', 'cyber', 'neural', 'vector', 'matrix', 'photon', 'ion',
  'radar', 'sensor', 'modem', 'router', 'cache', 'memory', 'chip', 'core',
  'glitch', 'fusion', 'fission', 'ether', 'gauge', 'voltage', 'frame',
  'catalyst', 'cable', 'fiber', 'analog', 'digital', 'battery', 'copper',
  'silver', 'crystal', 'metal', 'blockchain', 'satellite', 'network', 'cloud',
  'radio', 'node', 'codec', 'hash', 'tweet', 'datagram', 'broadband',
  'processor', 'algorithm', 'bitcoin', 'cyborg', 'android', 'ethernet',
  'database', 'server', 'cloud', 'radio', 'signal', 'analog'
];

const artWords = [
  'paint', 'canvas', 'brush', 'muse', 'tone', 'hue', 'pigment', 'palette',
  'gallery', 'chisel', 'sketch', 'graffiti', 'fresco', 'mosaic', 'clay',
  'marble', 'vivid', 'vibrant', 'neon', 'booth', 'drum', 'note', 'song',
  'melody', 'jazz', 'rhyme', 'sonnet', 'lyric', 'echo', 'color', 'shade',
  'stencil', 'art', 'music', 'poem', 'draw', 'sax', 'alto', 'baroque', 'opera',
  'rhapsody', 'chorus', 'dance', 'ballet', 'script', 'calligraphy', 'lute',
  'studio', 'theater', 'drama', 'verse', 'poet', 'novel', 'pixel', 'harmony',
  'guitar', 'camera', 'vision', 'vogue', 'acrylic', 'watercolor', 'etching',
  'frame', 'composition', 'score', 'solo', 'beat', 'chord'
];

const emotionWords = [
  'joy', 'sorrow', 'rage', 'calm', 'bliss', 'grief', 'hope', 'despair', 'peace',
  'hate', 'love', 'envy', 'fear', 'panic', 'pride', 'shame', 'gloom', 'delirium',
  'zeal', 'euphoria', 'anger', 'fury', 'serene', 'wild', 'spirit', 'sad',
  'happy', 'tantrum', 'agony', 'ecstasy', 'fright', 'passion', 'awe', 'shock',
  'cadence', 'harmony', 'apathy', 'spite', 'mercy', 'grace', 'mirth',
  'melancholy', 'nostalgia', 'fervor', 'ardor', 'dread', 'elation', 'ethos',
  'psyche'
];

const cultureWords = [
  'zen', 'samurai', 'ninja', 'shogun', 'kimono', 'bali', 'rome', 'sparta',
  'egypt', 'nile', 'giza', 'petra', 'mesa', 'yore', 'legend', 'folklore',
  'ritual', 'ancient', 'pyramid', 'sigil', 'celt', 'aztec', 'maya', 'inca',
  'viking', 'knight', 'cavalry', 'tribal', 'ethos', 'karma', 'pagoda', 'temple',
  'caste', 'ghoul', 'maru', 'dynasty', 'oracle', 'totem', 'hieroglyph', 'saga',
  'bard', 'ruin', 'icon', 'worship', 'deity', 'obelisk', 'glyph', 'pagan',
  'pharaoh', 'bishop', 'mosaic', 'metria', 'fable', 'myth', 'shrine', 'pilgrim',
  'castle', 'tower', 'fort', 'arch', 'spire', 'dome', 'compass', 'sail', 'helm',
  'skiff', 'odyssey'
];

const animalWords = [
  'wolf', 'lion', 'tiger', 'bear', 'lynx', 'fox', 'eagle', 'hawk', 'raven',
  'crow', 'swan', 'squid', 'orca', 'shark', 'whale', 'dolphin', 'salmon',
  'trout', 'cod', 'eel', 'pike', 'carp', 'shrew', 'moose', 'elk', 'stag',
  'buffalo', 'bison', 'ram', 'yak', 'ox', 'deer', 'bull', 'calf', 'kid', 'goat',
  'horse', 'zebra', 'giraffe', 'camel', 'rabbit', 'hare', 'beetle', 'scarab',
  'cobra', 'viper', 'python', 'asp', 'toad', 'newt', 'ape', 'monkey', 'chimp',
  'baboon', 'panther', 'jaguar', 'koala', 'emu', 'falcon', 'sparrow', 'robin',
  'jay', 'phoenix', 'gryphon', 'pigeon', 'owl', 'ant', 'bee', 'wasp',
  'antelope', 'gazelle', 'butterfly', 'dragonfly', 'mantis', 'centipede',
  'stick', 'lobster', 'bird', 'mammoth', 'mastodon', 'dove', 'rooster', 'hen',
  'cock', 'rhino', 'hippo', 'puma', 'llama'
];

const plantWords = [
  'rose', 'lily', 'iris', 'orchid', 'ivy', 'fern', 'sage', 'basil', 'mint',
  'oak', 'pine', 'elm', 'cedar', 'maple', 'birch', 'cypress', 'willow', 'bamboo',
  'olive', 'cherry', 'peach', 'apple', 'grain', 'wheat', 'rye', 'barley', 'oat',
  'agave', 'lotus', 'waterlily', 'moss', 'kelp', 'seaweed', 'shrub', 'vine',
  'flora', 'sapling', 'petal', 'seed', 'leaf', 'branch', 'bud', 'thorn', 'sedge',
  'sunflower', 'dandelion', 'sycamore', 'juniper', 'lavender', 'marigold',
  'palm', 'azalea', 'mango', 'rosemary', 'sagebrush', 'primrose', 'lilac',
  'magnolia', 'fir', 'beech'
];

const seasonWords = [
  'spring', 'summer', 'autumn', 'winter', 'equinox', 'solstice', 'rain', 'snow',
  'hail', 'fog', 'mist', 'dew', 'breeze', 'gale', 'monsoon', 'hurricane',
  'tornado', 'storm', 'cloud', 'sunrise', 'sunset', 'dawn', 'dusk', 'twilight',
  'starlight', 'raindrop', 'drizzle', 'sleet', 'sunshine', 'moonlight',
  'drought', 'typhoon', 'frost', 'shower', 'sunlight', 'moonrise', 'rainbow',
  'tide', 'tempest', 'sirocco', 'glacier', 'iceberg', 'aurora'
];

// รวมรากคำทั้งหมด
const coolNames = [
  ...arcaneMystical,
  ...cosmicSpace,
  ...artisticColor,
  ...natureElements,
  ...techSciFi,
  ...floraFauna,
  ...civilizations,
  ...musicArt,
  ...foreignWords,
  ...prefixesSuffixes,
  ...additionalRoots,
  ...spaceWords,
  ...natureWords,
  ...mythologyWords,
  ...fantasyWords,
  ...abstractWords,
  ...technologyWords,
  ...artWords,
  ...emotionWords,
  ...cultureWords,
  ...animalWords,
  ...plantWords,
  ...seasonWords
];

// จำนวนรากคำและกรณีชื่อที่เป็นไปได้
const totalRoots = coolNames.length;
const possibleNames = totalRoots * (totalRoots - 1);

// log แสดงข้อมูล
console.log(`🌟 Total root words: ${totalRoots} words`);
console.log(`🧠 Possible unique name combinations: ${possibleNames.toLocaleString()} combinations`);


// เก็บชื่อสีที่ generate มาแล้ว
const colorNames = {};

// สุ่มชื่อสองรากที่ไม่ซ้ำกัน
function generateComboName() {
  if (coolNames.length < 2) return "NoNamesAvailable";
  let first, second;
  do {
    first = coolNames[Math.floor(Math.random() * coolNames.length)];
    second = coolNames[Math.floor(Math.random() * coolNames.length)];
  } while (first === second);
  return first + second;
}

// คืนชื่อสีจาก RGB key (สร้างใหม่ถ้ายังไม่มี)
function getColorNameFromRGB(r, g, b) {
  const key = `${r},${g},${b}`;
  if (!colorNames[key]) {
    colorNames[key] = generateComboName();
  }
  return colorNames[key];
}

// แชร์ไปยัง global scope (window) สำหรับใช้งานใน script.js
window.coolNames = coolNames;
window.colorNames = colorNames;
window.getColorNameFromRGB = getColorNameFromRGB;
