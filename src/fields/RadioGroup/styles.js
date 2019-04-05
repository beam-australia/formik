export default theme => ({
  root: {
    marginBottom: -10
  },
  group: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
    gridAutoRows: '45px',
    gridGap: '5px'
  }
})
