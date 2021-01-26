import { makeStyles } from '@material-ui/core/styles';

const commonStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        [theme.breakpoints.down('sm')]: {
            width: 160,
        },
        [theme.breakpoints.up('md')]: {
            width: 320,
        },
        [theme.breakpoints.up('lg')]: {
            width: 400,
        },
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    table: {
        minWidth: 650,
    },
    progress: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '100px!important',
    },
}));

export default commonStyles;
