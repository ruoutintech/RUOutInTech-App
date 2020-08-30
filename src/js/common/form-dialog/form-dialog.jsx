import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { FlatButton } from 'material-ui';

import CallToActionButton from '../call-to-action-button/call-to-action-button'

export default function FormDialog() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [emailErrorText, setEmailErrorText] = useState('')

  const validateEmail = ( e ) => {
    // regex from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(e);
  }

  const handleEmailChange = ( e ) => {
    let errorText = ''
    const val = e.target.value;
    if (!validateEmail(val)) {
        errorText = "Email Format Error"
    }
    setEmail( val );
    setEmailErrorText( errorText );
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <CallToActionButton 
            text="Join Now"
            color="primary"
            handleClick={handleClickOpen}
        />
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <form action="https://tech.us4.list-manage.com/subscribe/post?u=1061e8fe9c358461cd41fc4ac&amp;id=92248d4151" method="post">
        <DialogContent>
          <DialogContentText>
            To join please subscribe to our newletter! We will send you occasional emails with updates and events. 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} type="submit" color="primary">
            Subscribe
          </Button>
        </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}