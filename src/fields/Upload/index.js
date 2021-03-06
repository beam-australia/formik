import React from "react";
import PropTypes from "prop-types";
import FormControl from "../../components/FormControl";
import { withStyles } from "@material-ui/core/styles";
import MapUpload from "../../lib/mapUpload";
import TusUpload, {
  propTypes as tusPropTypes,
  FilePreview
} from "@beam-australia/mui-tus-upload";
import styles from "./styles";

class Upload extends React.Component {
  onSuccess = state => {
    this.props.form.setFieldTouched(this.props.field.name);
    this.props.form.setFieldValue(
      this.props.field.name,
      this.mapUpload(state.upload)
    );
  };

  onError = () => {
    this.props.form.setFieldTouched(this.props.field.name);
    this.props.form.setFieldError(this.props.field.name, "");
  };

  onReset = () => {
    this.props.form.setFieldValue(this.props.field.name, null);
    this.props.form.setFieldTouched(this.props.field.name, false);
  };

  mapUpload = upload => {
    return this.props.returnType === "string"
      ? MapUpload.fromTusToUrl(upload)
      : MapUpload.fromTusUpload(upload);
  };

  render() {
    const {
      classes,
      helperText,
      label,
      endpoint,
      buttonLabel,
      allowedFileTypes,
      initialPreview,
      maxFileSize,
      field: { name },
      form
    } = this.props;
    const preview = form.values[name];
    return (
      <FormControl name={name} label={label}>
        <React.Fragment>
          {initialPreview && preview && (
            <FilePreview
              upload={MapUpload.toTusUpload(preview)}
              reset={this.onReset}
            />
          )}
          {((initialPreview && !preview) || !initialPreview) && (
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
          )}
        </React.Fragment>
      </FormControl>
    );
  }
}

Upload.propTypes = {
  initialPreview: PropTypes.bool,
  returnType: PropTypes.oneOf(["object","string"]),
  ...tusPropTypes
};

Upload.defaultProps = {
  initialPreview: false,
  returnType: "object",
};

export default withStyles(styles)(Upload);
