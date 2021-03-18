import { Avatar, Button, createStyles, IconButton, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Paper, Theme, Typography, withStyles, WithStyles } from "@material-ui/core";
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import FolderRoundedIcon from '@material-ui/icons/FolderRounded';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import FolderOpenRoundedIcon from '@material-ui/icons/FolderOpenRounded';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import React from "react";
import { modsContext } from "../+states/Mods/mods.state";
import { ActionType } from "../+states/Mods/mods.reducer";

const styles = (theme: Theme) => createStyles({
    root: {
        flexGrow: 1,
        display: 'flex',
    },
    heightFill: {
        flexGrow: 1,
        padding: '0.5rem',
        position: 'relative',
    },
    actionsRow: {
        display: 'flex',
        flexDirection: 'row-reverse',
        '& *': {
            zIndex: 1,
        }
    },
    noEntriesContainer: {
        zIndex: 0,
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    playIcon: {
        color: theme.palette.success.main
    },
});

interface Props extends WithStyles<typeof styles> { }

class ModList extends React.Component<Props> {

    static contextType = modsContext;
    context!: React.ContextType<typeof modsContext>

    render() {
        const { classes } = this.props;
        const { state, dispatch } = this.context;

        return (
            <div className={classes.root}>
                <Paper className={classes.heightFill}>
                    <div className={classes.actionsRow}>
                        <Button variant="contained" startIcon={<AddRoundedIcon />} color="primary" size="large">
                            Add
                        </Button>
                    </div>
                    {
                        (state.mods.length > 0) ? (
                            <List>
                                {
                                    state.mods.map((mod, i) => (
                                        <ListItem button
                                            key={i}
                                            selected={state.activeMod === i}
                                            onClick={() => dispatch!({ type: ActionType.SET_ACTIVE_MOD, modIndex: i })} >
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <FolderRoundedIcon />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary={mod.name} secondary={mod.path} />
                                            <ListItemSecondaryAction>
                                                <IconButton edge="start" aria-label="play">
                                                    <PlayArrowRoundedIcon className={classes.playIcon} />
                                                </IconButton>
                                                <IconButton aria-label="edit">
                                                    <EditRoundedIcon />
                                                </IconButton>
                                                <IconButton aria-label="open folder">
                                                    <FolderOpenRoundedIcon />
                                                </IconButton>
                                                <IconButton edge="end" aria-label="delete">
                                                    <DeleteRoundedIcon color="error" />
                                                </IconButton>
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                    ))
                                }
                            </List>
                        ) : (
                            <div className={classes.noEntriesContainer}>
                                <Typography variant="h6">No mod profiles found!</Typography>
                                <Typography variant="subtitle2">Press ' + ADD ' to create a new one</Typography>
                            </div>
                        )
                    }
                </Paper>
            </div >
        );
    }
}

export default withStyles(styles, { withTheme: true })(ModList);