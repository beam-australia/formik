import React from "react";
import find from "lodash/find"
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import MuiListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Close";
import styles from "./styles";

const SelectionList = ({
  classes,
  removeItem,
  values,
  options,
  ListItemText,
  disabled
}) => {
  if (values.length < 1) {
    return null;
  }
  return (
    <List>
      {values.map((item, index) => {
        const option = find(options, { value: item });
        return (
          <ListItem
            disabled={disabled}
            key={index}
            classes={{ container: classes.listItem }}
          >
            <MuiListItemText
              primary={ListItemText(option)}
              primaryTypographyProps={{ color: "primary" }}
            />
            <ListItemSecondaryAction>
              <IconButton
                aria-label="Delete"
                onClick={() => removeItem(index)}
                disabled={disabled}
              >
                <DeleteIcon className={classes.delete} />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
};

export default withStyles(styles)(SelectionList);
