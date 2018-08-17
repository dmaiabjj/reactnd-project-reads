import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';


/**
* @description 
* Componente representa uma caixa de diálogo indicando que um erro ocorreu 
* @constructor
*
* @constructor
* @param {boolean} error           True - Se aconteceu um erro | False - Se não houve um erro
* @param {Function} onClickAlert   Função reponsável por fechar o Alert
*/

const AlertDialog = ({error,onClickAlert}) => {
  
  return (
      <div>
        <Dialog
          open={error}
          onClose={onClickAlert}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Error"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
                Sorry, but an error happening when we tried to call the API.
                This action may not have been performed correctly.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={onClickAlert} color="primary" autoFocus>
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
 
}

AlertDialog.propTypes = {
    error  : PropTypes.bool.isRequired,
    onClickAlert: PropTypes.func.isRequired
}

export default AlertDialog;
