import React from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import MuiListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import styles from "./styles";

const SelectionList = ({
  classes,
  removeItem,
  selections,
  options,
  ListItemText,
  disabled
}) => {
  if (selections.length < 1) {
    return null;
  }
  return (
    <List>
      {options
        .filter(option => selections.includes(option.value))
        .map((item, index) => (
          <ListItem
            disabled={disabled}
            key={index}
            classes={{ container: classes.listItem }}
          >
            <MuiListItemText
              primary={ListItemText(item)}
              primaryTypographyProps={{ color: "primary" }}
            />
            <ListItemSecondaryAction>
              <IconButton
                aria-label="Delete"
                onClick={() => removeItem(index)}
                disabled={disabled}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
    </List>
  );
};

export default withStyles(styles)(SelectionList);
