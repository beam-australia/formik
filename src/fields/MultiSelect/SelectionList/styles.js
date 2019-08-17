import red from '@material-ui/core/colors/red';

export default theme => ({
  listItem: {
    borderTop: '1px solid #eee',
    '&:first-of-type': {
      borderTop: 'none'
    }
  },
  delete: {
    color: red[500]
  }
})
