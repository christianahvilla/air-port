import { makeStyles } from '@material-ui/core/styles';

const pagesStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    button: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    paper: {
        minHeight: 400,
    },
    title: {
        marginTop: 50,
    },
    stepContent: {
        margin: 50,
    },
    link: {
        textDecoration: 'none',
    },
    buttonsBottom: {
        marginBottom: 20,
    },
    progressDialog: {
        boxShadow: 'none',
        background: 'transparent',
    },
}));

export default pagesStyles;
