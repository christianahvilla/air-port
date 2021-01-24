import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        textDecoration: 'none',
        color: '#FFFFFF',
    },
    link: {
        textDecoration: 'none',
        color: '#FFFFFF',
    },
}));

export default useStyles;
