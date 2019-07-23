export default theme => ({
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  }
})
