import React from 'react';
import { makeStyles , Button, TextField } from "@material-ui/core";



const SearchForm = (props) => {

    const classes = getStyles();
    return(

        <form onSubmit = {props.submit} className = {classes.searchForm}>

            <TextField 
                label="Search"
                name="name"
                className={classes.SearchBox}
                variant="outlined"
                onChange = {(e) => props.onInputChange(e.target.value)}
            />

            <Button variant="outlined" className = {classes.button} type="submit">Search</Button>

        </form>
    )
}

const getStyles = makeStyles((theme) => ({

    searchForm: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

    searchBox: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
    },

    button: {
        margin: theme.spacing(2),
    },

}));


export default SearchForm;

