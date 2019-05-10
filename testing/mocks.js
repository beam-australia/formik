export const kingdoms = [
  { value: 'plants', label: 'Plants' },
  { value: 'animals', label: 'Animals' },
  { value: 'fungus', label: 'Fungus' },
  { value: 'protozoa', label: 'Protozoa' },
  { value: 'chromista', label: 'Chromista' }
]

export const phylum = [
  { value: 'mollusca', label: 'Mollusca' },
  { value: 'arthropod', label: 'Arthropod' },
  { value: 'echinoderm', label: 'Echinoderm' },
  { value: 'cnidaria', label: 'Cnidaria' },
  { value: 'annelid', label: 'Annelid' },
  { value: 'nematoda', label: 'Nematoda' },
  { value: 'nematomorpha', label: 'Nematomorpha' },
  { value: 'priapulida', label: 'Priapulida' },
  { value: 'kinorhyncha', label: 'Kinorhyncha' },
  { value: 'loricifera', label: 'Loricifera' },
  { value: 'onychophora', label: 'Onychophora' },
  { value: 'hexapoda', label: 'Hexapoda' }
]

export const classes = [
  { value: 'arachnid', label: 'arachnid' },
  { value: 'cephalopod', label: 'cephalopod' },
  { value: 'hagfish', label: 'hagfish' },
  { value: 'chitons', label: 'chitons' },
  { value: 'maxillopoda', label: 'maxillopoda' }
]

export const invertebrates = [
  {
    value: 'porifera',
    label: 'Porifera',
    children: [
      { value: 'brain-sponge', label: 'Brain Sponge' },
      { value: 'sulphur-sponge', label: 'Sulphur Sponge' },
      { value: 'vase-sponge', label: 'Vase Sponge' },
      { value: 'boring-sponge', label: 'Boring Sponge' },
      { value: 'heavenly-sponge', label: 'Heavenly Sponge' },
    ]
  },
  {
    value: 'cnidarians',
    label: 'Cnidarians',
    children: [
      { value: 'pale-anemone', label: 'Pale Anemone' },
      { value: 'hidden-anemone', label: 'Hidden Anemone' },
      { value: 'fire-coral', label: 'Fire Coral' },
      { value: 'plume-hydroid', label: 'Plume Hydroid' },
      { value: 'thread-hydroid', label: 'Thread Hydroid' },
      { value: 'moon-jelly', label: 'Moon Jelly' },
      { value: 'sea-nettle', label: 'Sea Nettle' },
    ]
  },
  {
    value: 'platyhelminthes',
    label: 'Platyhelminthes',
    children: [
      { value: 'blood-fluke', label: 'Blood fluke' },
      { value: 'liver-fluke', label: 'Liver fluke' },
      { value: 'taenia', label: 'Taenia' },
      { value: 'tapeworm', label: 'Tapeworm' },
    ]
  },
  {
    value: 'mollusca',
    label: 'Mollusca',
    children: [
      { value: 'snail', label: 'Snail' },
      { value: 'clam', label: 'Clam' },
      { value: 'mussel', label: 'Mussel' },
      { value: 'oyster', label: 'Oyster' },
      { value: 'slug', label: 'Slug' },
      { value: 'limpet', label: 'Limpet' },
      { value: 'scallop', label: 'Scallop' },
    ]
  },
  {
    value: 'arthropoda',
    label: 'Arthropoda',
    children: [
      { value: 'insect', label: 'Insect' },
      { value: 'arachnid', label: 'Arachnid' },
      { value: 'crustacean', label: 'Crustacean' },
    ]
  },
]
