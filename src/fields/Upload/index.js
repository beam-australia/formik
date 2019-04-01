import React from 'react'
import PropTypes from 'prop-types'
import FormControl from '../../components/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import Dashboard from '@uppy/react/lib/Dashboard'
import mapSuccess from '../../lib/uppy/mapSuccess'
import initialize from './initialize'
import getAcceptedTypes from './getAcceptedTypes'
import DeleteButton from './DeleteButton'
import '@uppy/core/dist/style.css'
import '@uppy/dashboard/dist/style.css'
import './styles.css'

class Upload extends React.Component {
  constructor(props) {
    super(props)
    this.uppy = initialize(props.uppyProps, props.host)
    this.uppy.on('complete', this.onComplete)
    this.uppy.on('upload-error', this.onError)
  }

  componentWillUnmount() {
    this.uppy.close()
  }

  onError = failed => {
    const message = `Error uploading your file "${failed.name}"`
    this.props.form.setFieldError(this.props.field.name, message)
  }

  onClear = () => {
    this.uppy.reset()
    this.props.form.setFieldValue(this.props.field.name, null)
    this.props.form.setFieldTouched(this.props.field.name, false)
  }

  onComplete = ({ successful }) => {
    const { form, field: { name } } = this.props;
    form.setFieldTouched(name)
    if (successful.length) {
      form.setFieldValue(name, mapSuccess(successful))
    }
  }

  render() {
    const { allowedFileTypes, helperText, label, uppyProps, field } = this.props
    const hasFile = Boolean(this.props.field.value)
    const acceptedTypes = getAcceptedTypes(allowedFileTypes)
    return (
      <div className="beam upload-field">
        <FormControl helperText={helperText} name={field.name}>
          <FormLabel component='legend'>{label}</FormLabel>
          <div className="beam upload-field-dashboard">
            <DeleteButton onClick={this.onClear} visible={hasFile} />
            <Dashboard
              height={111}
              note={acceptedTypes.info}
              uppy={this.uppy}
              {...uppyProps}
              restrictions={{
                maxNumberOfFiles: 1,
                allowedFileTypes: acceptedTypes.mime
              }}
            />
          </div>
        </FormControl>
      </div>
    )
  }
}

Upload.propTypes = {
  allowedFileTypes: PropTypes.string,
  helperText: PropTypes.string,
  label: PropTypes.string,
  field: PropTypes.shape({
    name: PropTypes.string
  }),
  uppyProps: PropTypes.object,
  host: PropTypes.string
}

Upload.defaultProps = {
  allowedFileTypes: 'docs',
  uppyProps: {
    proudlyDisplayPoweredByUppy: false,
    showProgressDetails: true,
    autoProceed: true,
    allowMultipleUploads: false,
    locale: {
      strings: {
        dropPaste: 'Drop file here or %{browse}'
      }
    }
  }
}

export default Upload
