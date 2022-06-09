import { createTheme } from '@mui/material/styles';

let myTheme = createTheme({
        //PALETTE
    palette: {
        primary:{
            light: '#FE9AC2',
            main: '#F9649E',
            dark: '#CC5281',
        },
        secondary:{
            light: '#D68BFD',
            main: '#C04CED',
            dark: '#A441D9',
        }    
    },    
});    

myTheme = createTheme(myTheme, {
    //TYPOGRAPHY
    typography:{
    fontFamily: 'Arial', 
    
    h3: {
        fontSize: '2rem',
    },
    body1: {
        fontSize: '.8rem'
    },
    caption:{
        fontSize: '.6rem',
        fontWeight: 'light',
    },
    button: {
        fontSize: '.8rem',
    }
    },
})    

myTheme = createTheme(myTheme, {
    //COMPONENTS CUSTOMIZATION
    components: {
        //BUTTON
        MuiButton:{
            defaultProps: {
                disableRipple: true,
            },
            styleOverrides:{
                root:{
                    borderRadius: '2px',
                    transition: '.5s all',
                    '&:hover': {
                        boxShadow: `0 0 5px 4px #dedede`,
                    }
                }
            },
            variants: [
                {
                    props: {variant: 'primary'},
                    style: {
                        color: '#fff',
                        background: `linear-gradient( ${myTheme.palette.primary.main}, ${myTheme.palette.primary.light})`,
                        '&:hover': {
                            background: `linear-gradient(90deg, ${myTheme.palette.primary.main}, ${myTheme.palette.primary.light})`,
                        }
                    }
                },
                {
                    props: {variant: 'secondary'},
                    style: {
                        color: '#fff',
                        background: `linear-gradient( ${myTheme.palette.secondary.main}, ${myTheme.palette.secondary.light})`,
                        '&:hover': {
                            background: `linear-gradient(90deg, ${myTheme.palette.secondary.main}, ${myTheme.palette.secondary.light})`,
                        }
                    }
                },
                {
                    props: {variant: 'menu'},
                    style: {
                        color: '#777',
                        fontSize: '.6rem',
                        '&:hover': {
                            boxShadow: `none`,
                        }
                    }
                },     
                {
                    props: {variant: 'cardButton'},
                    style: {
                        padding: '.2rem .4rem',
                        color: '#fff',
                        background: `linear-gradient( ${myTheme.palette.primary.main}, ${myTheme.palette.primary.light})`,
                        '&:hover': {
                            background: `linear-gradient(90deg, ${myTheme.palette.primary.main}, ${myTheme.palette.primary.light})`,
                        }
                    }
                },       
            ]
        },
    }    
})    




export default myTheme;