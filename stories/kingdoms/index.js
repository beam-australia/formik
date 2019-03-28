export const insects = [
  { id: 23, slug: 'crickets', name: 'Crickets' },
  { id: 7, slug: 'weevils', name: 'Weevils' },
  { id: 4, slug: 'moths', name: 'Moths' },
  { id: 21, slug: 'ants', name: 'Ants' },
  { id: 25, slug: 'bees', name: 'Bees' },
  { id: 13, slug: 'wasps', name: 'Wasps' }
]

export const mammals = [
  { slug: '', name: '' },
  { id: 23, slug: 'whales', name: 'Whales' },
  { id: 7, slug: 'skunks', name: 'Skunks' },
  { id: 4, slug: 'anteater', name: 'Anteater' },
  { id: 21, slug: 'apes', name: 'Apes' },
  { id: 25, slug: 'deer', name: 'Deer' },
  { id: 13, slug: 'lemurs', name: 'Lemurs' }
]

export const fungi = [
  { slug: '', name: '' },
  { id: 23, slug: 'basidiomycota', name: 'Basidiomycota' },
  { id: 7, slug: 'ascomycota', name: 'Ascomycota' },
  { id: 4, slug: 'neocallimastigomycota', name: 'Neocallimastigomycota' },
  { id: 21, slug: 'blastocladiomycota', name: 'Blastocladiomycota' },
  { id: 25, slug: 'glomeromycota', name: 'Glomeromycota' },
  { id: 132, slug: 'chytridiomycota', name: 'Chytridiomycota' },
  { id: 13, slug: 'microsporidia', name: 'Microsporidia' }
]

export const birds = [
  { id: 23, slug: 'parrots', name: 'Parrots' },
  { id: 7, slug: 'stalks', name: 'Stalks' },
  { id: 4, slug: 'owls', name: 'Owls' },
  { id: 21, slug: 'penguins', name: 'Penguins' },
  { id: 25, slug: 'pigeons', name: 'Pigeons' },
  { id: 132, slug: 'finches', name: 'Finches' },
  { id: 13, slug: 'kingfishers', name: 'Kingfishers' }
]

export const reptiles = [
  { id: 23, slug: 'turtles', name: 'Turtles' },
  { id: 7, slug: 'snakes', name: 'Snakes' },
  { id: 4, slug: 'lizards', name: 'Lizards' },
  { id: 21, slug: 'crocodiles', name: 'Crocodiles' },
  { id: 25, slug: 'gecos', name: 'Gecos' },
  { id: 132, slug: 'skinks', name: 'Skinks' },
  { id: 13, slug: 'dinosaurs', name: 'Dinosaurs' }
]

export const ungulates = [
  { id: 23, slug: 'horses', name: 'Horses' },
  { id: 7, slug: 'rhinoceroses', name: 'Rhinoceroses' },
  { id: 4, slug: 'cattle', name: 'Cattle' },
  { id: 21, slug: 'pigs', name: 'Pigs' },
  { id: 25, slug: 'giraffes', name: 'Giraffes' },
  { id: 132, slug: 'camels', name: 'Camels' },
  { id: 13, slug: 'deer', name: 'Deer' },
  { id: 13, slug: 'hippopotamuses', name: 'Hippopotamuses' }
]

export const invertebrates = [
  {
    id: 1,
    slug: 'porifera',
    name: 'Porifera',
    children: [
      { id: 1, slug: 'brain-sponge', name: 'Brain Sponge' },
      { id: 2, slug: 'sulphur-sponge', name: 'Sulphur Sponge' },
      { id: 3, slug: 'vase-sponge', name: 'Vase Sponge' },
      { id: 4, slug: 'boring-sponge', name: 'Boring Sponge' },
      { id: 5, slug: 'heavenly-sponge', name: 'Heavenly Sponge' },
    ]
  },
  {
    id: 2,
    slug: 'cnidarians',
    name: 'Cnidarians',
    children: [
      { id: 1, slug: 'pale-anemone', name: 'Pale Anemone' },
      { id: 2, slug: 'hidden-anemone', name: 'Hidden Anemone' },
      { id: 3, slug: 'fire-coral', name: 'Fire Coral' },
      { id: 4, slug: 'plume-hydroid', name: 'Plume Hydroid' },
      { id: 5, slug: 'thread-hydroid', name: 'Thread Hydroid' },
      { id: 6, slug: 'moon-jelly', name: 'Moon Jelly' },
      { id: 7, slug: 'sea-nettle', name: 'Sea Nettle' },
    ]
  },
  {
    id: 3,
    slug: 'platyhelminthes',
    name: 'Platyhelminthes',
    children: [
      { id: 1, slug: 'blood-fluke', name: 'Blood fluke' },
      { id: 2, slug: 'liver-fluke', name: 'Liver fluke' },
      { id: 3, slug: 'taenia', name: 'Taenia' },
      { id: 4, slug: 'tapeworm', name: 'Tapeworm' },
    ]
  },
  {
    id: 4,
    slug: 'mollusca',
    name: 'Mollusca',
    children: [
      { id: 1, slug: 'snail', name: 'Snail' },
      { id: 2, slug: 'clam', name: 'Clam' },
      { id: 3, slug: 'mussel', name: 'Mussel' },
      { id: 4, slug: 'oyster', name: 'Oyster' },
      { id: 5, slug: 'slug', name: 'Slug' },
      { id: 6, slug: 'limpet', name: 'Limpet' },
      { id: 7, slug: 'scallop', name: 'Scallop' },
    ]
  },
  {
    id: 5,
    slug: 'arthropoda',
    name: 'Arthropoda',
    children: [
      { id: 1, slug: 'insect', name: 'Insect' },
      { id: 2, slug: 'arachnid', name: 'Arachnid' },
      { id: 3, slug: 'crustacean', name: 'Crustacean' },
    ]
  },
]
