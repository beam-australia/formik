import red from '@material-ui/core/colors/red'

export default theme => ({
  root: {
    width: '100%',
    height: '39px',
    padding: '2px 0 3px',
    border: '1px solid #c0c0c0',
    borderRadius: '4px',
    backgroundColor: 'transparent',
    '&.error': {
      borderColor: red[500]
    }
  }
})
