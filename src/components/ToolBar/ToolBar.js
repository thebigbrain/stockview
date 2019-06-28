import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: '50px',
    width: '50px',
    height: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    textAlign: 'center',
    overflowX: 'hidden'
  },
}));

const selectedStyle = {};

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function ToolBar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <List component="nav" aria-label="Main mailbox folders">
          <ListItem button selected>
            <ListItemIcon>
              <InboxIcon/>
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <DraftsIcon/>
            </ListItemIcon>
          </ListItem>
        </List>
        <Divider/>
        <List component="nav" aria-label="Secondary mailbox folders">
          <ListItem button>
            <ListItemText primary="T"/>
          </ListItem>
          <ListItemLink href="#simple-list">
            <ListItemText primary="S"/>
          </ListItemLink>
        </List>
      </div>
    </React.Fragment>
  );
}
