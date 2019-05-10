import React from 'react'
import FormControl from '../../components/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import { withStyles } from '@material-ui/core/styles'
import mapUpload from '../../lib/mapUpload'
import TusUpload, { propTypes as tusPropTypes } from '@beam-australia/material-tus'
import styles from './styles'

class Upload extends React.Component {
  onSuccess = (state) => {
    this.props.form.setFieldTouched(this.props.field.name)
    this.props.form.setFieldValue(this.props.field.name, mapUpload(state.upload))
  }

  onError = () => {
    this.props.form.setFieldTouched(this.props.field.name)
    this.props.form.setFieldError(this.props.field.name, '')
  }

  onReset = () => {
    const value = this.props.form.initialValues[this.props.field.name]
    this.props.form.setFieldValue(this.props.field.name, value)
    this.props.form.setFieldTouched(this.props.field.name, false)
  }

  render() {
    const {
      classes,
      helperText,
      label,
      endpoint,
      buttonLabel,
      allowedFileTypes,
      maxFileSize,
      field: { name },
      form
    } = this.props
    return (
      <FormControl name={name} label={label}>
        <TusUpload
          className={classes.root}
          name={name}
          endpoint={endpoint}
          helperText={helperText}
          label={buttonLabel}
          allowedFileTypes={allowedFileTypes}
          maxFileSize={maxFileSize}
          onSuccess={this.onSuccess}
          onError={this.onError}
          onReset={this.onReset}
          disabled={form.isSubmitting}
        />
      </FormControl>
    )
  }
}

Upload.propTypes = {
  ...tusPropTypes
}

export default withStyles(styles)(Upload)
