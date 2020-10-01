import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import {Checkbox} from "@material-ui/core";

class TodoItem extends React.Component {
    render() {
        const {title, handleDelete, handleEdit, isCompleted, toggleComplete} = this.props;
        const lineThrough = {
            textDecoration: 'line-through',
        }
        return (
            <div>
                <Grid>
                    <div>
                        <List>
                            <ListItem>
                                <ListItemAvatar>
                                    <Checkbox
                                        onChange={toggleComplete}
                                        color={"secondary"}
                                        inputProps={{'aria-label': 'secondary checkbox'}}
                                        disabled={isCompleted ? true : false}
                                    />
                                </ListItemAvatar>
                                <ListItemText style={isCompleted ? lineThrough : null}>{title}</ListItemText>
                                <ListItemSecondaryAction>
                                    <IconButton onClick={handleEdit} color="inherit" edge="end" aria-label="edit">
                                        <EditRoundedIcon/>
                                    </IconButton>
                                    <IconButton onClick={handleDelete} color="inherit" edge="end" aria-label="delete">
                                        <DeleteIcon/>
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        </List>
                    </div>
                </Grid>
            </div>
        );
    }
}

export default TodoItem;
