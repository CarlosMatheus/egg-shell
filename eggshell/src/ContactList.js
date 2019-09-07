import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

function Contact({i},{groups}, onClick)
{
    const classes = useStyles();

    return(
    <ListItem 
    alignItems="flex-start" 
    onClick={()=> onClick}>
        <ListItemAvatar>
            <Avatar alt= {groups[i].name} src={groups[i].image} />
        </ListItemAvatar>
        <ListItemText
            primary = {groups[i].name}
            secondary ={
                <React.Fragment>
                    <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                    >
                        {groups[i].last_name}
                    </Typography>
                    {" — " + groups[i].last_message}
                </React.Fragment>
            }
        />
    </ListItem>
    );
}

export default function ContactList(groups, onClick) {
  
    const classes = useStyles();
  const itens=[];
  console.log( groups.length);
  for (let i = 0; i< groups.length;i++)
  {
    itens.push(Contact({i},{groups}, onClick));
  }

  return (

    <div>
           <List className={classes.root}>
            {
               itens
            }
            </List> 
        
    </div>

  );
}