import mapTree from '../mapTree'

const invertebrates = [
  {
    id: 1,
    slug: 'porifera',
    name: 'Porifera',
    children: [
      { id: 1, slug: 'brain-sponge', name: 'Brain Sponge' },
      { id: 2, slug: 'sulphur-sponge', name: 'Sulphur Sponge' },
      { id: 3, slug: 'vase-sponge', name: 'Vase Sponge' },
      { id: 4, slug: 'boring-sponge', name: 'Boring Sponge' },
      { id: 5, slug: 'heavenly-sponge', name: 'Heavenly Sponge' }
    ]
  }
]

it('maps a tree structure', () => {
  expect(mapTree(invertebrates)).toEqual([
    {
      id: 1,
      value: 'porifera',
      key: 'porifera',
      title: 'Porifera',
      children: [
        { id: 1, value: 'brain-sponge', key: 'brain-sponge', title: 'Brain Sponge' },
        { id: 2, value: 'sulphur-sponge', key: 'sulphur-sponge', title: 'Sulphur Sponge' },
        { id: 3, value: 'vase-sponge', key: 'vase-sponge', title: 'Vase Sponge' },
        { id: 4, value: 'boring-sponge', key: 'boring-sponge', title: 'Boring Sponge' },
        { id: 5, value: 'heavenly-sponge', key: 'heavenly-sponge', title: 'Heavenly Sponge' }
      ]
    }
  ])
})
