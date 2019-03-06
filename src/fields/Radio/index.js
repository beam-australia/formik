import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'formik'
import MuiRadio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel'

const Radio = ({ children, formik, ...props }) => {
  const { isSubmitting } = formik
  return (
    <FormControlLabel
      control={<MuiRadio disabled={isSubmitting} />}
      disabled={isSubmitting}
      {...props}
    />
  )
}

Radio.propTypes = {
  formik: PropTypes.object.isRequired,
  children: PropTypes.node
}

export default connect(Radio)
