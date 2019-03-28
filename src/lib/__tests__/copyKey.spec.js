import copyKey from '../copyKey'

const invertebrates = [
  {
    id: 1,
    value: 'porifera',
    title: 'Porifera',
    children: [
      { id: 1, value: 'brain-sponge', title: 'Brain Sponge' },
      { id: 2, value: 'sulphur-sponge', title: 'Sulphur Sponge' },
      { id: 3, value: 'vase-sponge', title: 'Vase Sponge' },
      { id: 4, value: 'boring-sponge', title: 'Boring Sponge' },
      { id: 5, value: 'heavenly-sponge', title: 'Heavenly Sponge' }
    ]
  }
]

it('copies a given key into a new key', () => {
  const coppied = copyKey(invertebrates, 'value', 'copyOfValue')
  expect(coppied).toEqual([
    {
      id: 1,
      value: 'porifera',
      copyOfValue: 'porifera',
      title: 'Porifera',
      children: [
        { id: 1, value: 'brain-sponge', copyOfValue: 'brain-sponge', title: 'Brain Sponge' },
        { id: 2, value: 'sulphur-sponge', copyOfValue: 'sulphur-sponge', title: 'Sulphur Sponge' },
        { id: 3, value: 'vase-sponge', copyOfValue: 'vase-sponge', title: 'Vase Sponge' },
        { id: 4, value: 'boring-sponge', copyOfValue: 'boring-sponge', title: 'Boring Sponge' },
        { id: 5, value: 'heavenly-sponge', copyOfValue: 'heavenly-sponge', title: 'Heavenly Sponge' }
      ]
    }
  ])
})
