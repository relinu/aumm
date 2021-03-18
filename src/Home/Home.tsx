import { Avatar, Button, Card, CardContent, CardHeader, createStyles, Grid, Paper, Theme, Typography, WithStyles, withStyles } from "@material-ui/core";
import BuildRoundedIcon from '@material-ui/icons/BuildRounded';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import FolderOpenRoundedIcon from '@material-ui/icons/FolderOpenRounded';
import React from "react";
import { ModsContext, modsContext } from "../+states/Mods/mods.state";

const styles = (theme: Theme) => createStyles({
    ratio1x1: {
        paddingTop: '100%',
        position: 'relative',
    },
    ratioFill: {
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
    heightFill: {
        height: '100%',
    },
    modsAvatar: {
        width: "5rem",
        height: "5rem",
        marginBottom: '0.75rem',
    },
    modsIcon: {
        fontSize: "3rem",
    },
    playButton: {
        color: theme.palette.success.main,
        borderColor: theme.palette.success.main + '80',
        marginRight: theme.spacing(2),
        '&:hover': {
            borderColor: theme.palette.success.main,
            backgroundColor: theme.palette.success.main + '14',
        },
    },
});

interface Props extends WithStyles<typeof styles> { }

class Home extends React.Component<Props> {

    static contextType = modsContext;
    context!: React.ContextType<typeof modsContext>

    modInRange(state: ModsContext) {
        return (state.activeMod >= 0) && (state.activeMod < state.mods.length);
    }

    getModName(state: ModsContext) {
        return this.modInRange(state) ? state.mods[state.activeMod].name : 'No mod profile found!';
    }

    getModPath(state: ModsContext) {
        return this.modInRange(state) ? state.mods[state.activeMod].path : '\xa0';
    }

    render() {
        const { classes } = this.props;
        const { state } = this.context;

        return (
            <div>
                <Grid container spacing={3}>
                    <Grid item xs={2}>
                        <div className={classes.ratio1x1}>
                            <Paper className={classes.ratioFill}>
                                <Avatar className={classes.modsAvatar}>
                                    <BuildRoundedIcon className={classes.modsIcon} />
                                </Avatar>
                                <Typography variant="subtitle1">Installed Mods: {state.mods.length}</Typography>
                            </Paper>
                        </div>
                    </Grid>
                    <Grid item xs={10}>
                        <Card className={classes.heightFill}>
                            <CardHeader title={this.getModName(state)} subheader={this.getModPath(state)} />
                            <CardContent>
                                <Button className={classes.playButton}
                                    variant="outlined"
                                    size="large"
                                    disabled={!this.modInRange(state)}
                                    startIcon={<PlayArrowRoundedIcon />}>Play</Button>
                                <Button color="primary"
                                    variant="outlined"
                                    size="large"
                                    disabled={!this.modInRange(state)}
                                    startIcon={<FolderOpenRoundedIcon />}>Open Folder</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Home);