import { createStyles, Paper, Theme, withStyles, WithStyles } from "@material-ui/core";
import React from "react";

const styles = (theme: Theme) => createStyles({
    root: {
        flexGrow: 1,
        display: 'flex',
    },
    heightFill: {
        flexGrow: 1,
        padding: '0.5rem',
    },
});

interface Props extends WithStyles<typeof styles> { }

class Settings extends React.Component<Props> {

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Paper className={classes.heightFill}>
                </Paper>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Settings);