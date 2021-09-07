import React from "react";
import {Snackbar} from '@material-ui/core';

export const SnackbarContext = React.createContext();

const SimpleSnackbar = ({eventHideSnackbar}) => {

  const snackbarState = React.useContext(SnackbarContext);

  const {message} = snackbarState;

  return (
    <Snackbar
      open={Boolean(message)}
      autoHideDuration={6000}
      onClose={eventHideSnackbar}
      message={message}
    >
    </Snackbar>
  );

};

export default (Component) => (props) => {

  const [message, setMessage] = React.useState("");

  const showMessage = (m) => setMessage(m);
  const eventHideSnackbar = () => setMessage();

  const snackbarContext = {
    eventHideSnackbar,
    showMessage,
    message
  }

  return(
    <SnackbarContext.Provider value={snackbarContext}>
      <Component {...props} />
      <SimpleSnackbar {...{eventHideSnackbar}} />
    </SnackbarContext.Provider>
  );


};
