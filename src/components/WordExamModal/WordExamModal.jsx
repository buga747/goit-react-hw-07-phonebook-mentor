import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import ExamBlock from 'components/ExamBlock/ExamBlock';
import { useSelector } from 'react-redux';
import { selectWords } from 'redux/words/selectors';

const style = {
  overflow: 'auto',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: '320px',
  width: 'auto',
  maxHeight: '80vH',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export function WordExamModal() {
  const [open, setOpen] = useState(false);
  const [confirmQuit, setConfirmQuit] = useState(false);
  const handleOpen = () => {
    setOpen(true);
    setConfirmQuit(false);
  };
  const handleClose = () => {
    if (confirmQuit) {
      setOpen(false);
    } else {
      setConfirmQuit(true);
    }
  };
  const handleCancelQuit = () => {
    setConfirmQuit(false);
  };

  const words = useSelector(selectWords);

  return (
    <div>
      <h2>Get ready for your test</h2>
      {words.length >= 10 ? (
        <div>
          {' '}
          <Button onClick={handleOpen}>Start test</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            {confirmQuit ? (
              <Box sx={style}>
                <h3>Are you sure you want to quit?</h3>
                <Button onClick={handleClose}>Yes</Button>
                <Button onClick={handleCancelQuit}>Cancel</Button>
              </Box>
            ) : (
              <Box sx={style}>
                <ExamBlock />
              </Box>
            )}
          </Modal>{' '}
        </div>
      ) : (
        <h3>
          You need to have more then 10 words in your vocabulary to start the
          test
        </h3>
      )}
    </div>
  );
}
