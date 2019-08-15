export const animals = [
  { value: "", group: "", children: [] },
  { value: "blue-whale", label: "Blue Whale", group: "mamal", children: [
    { value: "arachnid", label: "arachnid" },
    { value: "cephalopod", label: "cephalopod" },
    { value: "hagfish", label: "hagfish" },
    { value: "chitons", label: "chitons" },
    { value: "maxillopoda", label: "maxillopoda" }
  ] },
  { value: "ehesus-macaque", label: "Rhesus Macaque", group: "mamal", children: [] },
  { value: "white-shark", label: "White Shark", group: "fish", children: [] },
  { value: "cricket", label: "cricket", group: "insect", children: [] },
  { value: "brushtail-possum", label: "Brushtail Possum", group: "mamal", children: [] },
  { value: "grouper", label: "Grouper", group: "fish", children: [
    { value: "plants", label: "Plants" },
    { value: "animals", label: "Animals" },
    { value: "fungus", label: "Fungus" },
    { value: "protozoa", label: "Protozoa" },
    { value: "chromista", label: "Chromista" }
  ] },
  { value: "flounder", label: "Flounder", group: "fish", children: [] },
  { value: "platypus", label: "Platypus", group: "mamal", children: [] },
  { value: "spider", label: "Spider", group: "insect", children: [] },
  { value: "cyanobacteria", label: "Cyanobacteria", group: "", children: [] },
  { value: "firmicutes", label: "Firmicutes", group: "", children: [] },
];

export const kingdoms = [
  { value: "plants", label: "Plants" },
  { value: "animals", label: "Animals" },
  { value: "fungus", label: "Fungus" },
  { value: "protozoa", label: "Protozoa" },
  { value: "chromista", label: "Chromista" }
];

export const phylum = [
  { value: "mollusca", label: "Mollusca" },
  { value: "arthropod", label: "Arthropod" },
  { value: "echinoderm", label: "Echinoderm" },
  { value: "cnidaria", label: "Cnidaria" },
  { value: "annelid", label: "Annelid" },
  { value: "nematoda", label: "Nematoda" },
  { value: "nematomorpha", label: "Nematomorpha" },
  { value: "priapulida", label: "Priapulida" },
  { value: "kinorhyncha", label: "Kinorhyncha" },
  { value: "loricifera", label: "Loricifera" },
  { value: "onychophora", label: "Onychophora" },
  { value: "hexapoda", label: "Hexapoda" }
];

export const classes = [
  { value: "arachnid", label: "arachnid" },
  { value: "cephalopod", label: "cephalopod" },
  { value: "hagfish", label: "hagfish" },
  { value: "chitons", label: "chitons" },
  { value: "maxillopoda", label: "maxillopoda" }
];

export const invertebrates = [
  {
    value: "porifera",
    label: "Porifera",
    children: [
      { value: -1, label: "All porifera" },
      { value: "brain-sponge", label: "Brain Sponge" },
      { value: "sulphur-sponge", label: "Sulphur Sponge" },
      { value: "vase-sponge", label: "Vase Sponge" },
      { value: "boring-sponge", label: "Boring Sponge", disabled: true },
      { value: "heavenly-sponge", label: "Heavenly Sponge" }
    ]
  },
  {
    value: "cnidarians",
    label: "Cnidarians",
    children: [
      { value: -1, label: "All cnidarians" },
      { value: "pale-anemone", label: "Pale Anemone" },
      { value: "hidden-anemone", label: "Hidden Anemone" },
      { value: "fire-coral", label: "Fire Coral" },
      { value: "plume-hydroid", label: "Plume Hydroid", disabled: true },
      { value: "thread-hydroid", label: "Thread Hydroid" },
      { value: "moon-jelly", label: "Moon Jelly" },
      { value: "sea-nettle", label: "Sea Nettle" }
    ]
  },
  {
    value: "platyhelminthes",
    label: "Platyhelminthes",
    children: [
      { value: -1, label: "All platyhelminthes" },
      { value: "blood-fluke", label: "Blood fluke" },
      { value: "liver-fluke", label: "Liver fluke" },
      { value: "taenia", label: "Taenia", disabled: true },
      { value: "tapeworm", label: "Tapeworm" }
    ]
  },
  {
    value: "mollusca",
    label: "Mollusca",
    children: [
      { value: -1, label: "All mollusca" },
      { value: "snail", label: "Snail" },
      { value: "clam", label: "Clam" },
      { value: "mussel", label: "Mussel" },
      { value: "oyster", label: "Oyster" },
      { value: "slug", label: "Slug", disabled: true },
      { value: "limpet", label: "Limpet" },
      { value: "scallop", label: "Scallop" }
    ]
  },
  {
    value: "arthropoda",
    label: "Arthropoda",
    children: [
      { value: -1, label: "All arthropoda" },
      { value: "insect", label: "Insect" },
      { value: "arachnid", label: "Arachnid" },
      { value: "crustacean", label: "Crustacean" }
    ]
  }
];
