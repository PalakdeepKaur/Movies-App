import { makeStyles } from '@material-ui/core';
import React, {Component} from 'react';
import './App.css';

class App extends Component {
 render() {

    const classes = getStyles();
    return (

      <div className='wrapper'>
        <header className={classes.appTitle}> React Movies App </header>

        <div className='main'>


        
        </div> 

      </div>
      
    )
  }
}


const getStyles = makeStyles((theme) => ({

  appTitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }

}));




export default App;
