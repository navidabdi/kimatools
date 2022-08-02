// import { CheckCircleIcon } from '@chakra-ui/icons';
import React from 'react';
import { dynamic } from '../../state';
import Ding from '../Common/Ding';

const OutlineToggleButton = ({ isOutline, toggleOutline }) => (
  <Ding
    label="Outline"
    // Icon={OutlineIcon}
    isSelected={isOutline === true}
    // activeComp={<CheckCircleIcon fontSize="xs" color="primary" />}
    onClick={toggleOutline}
  />
);

export default dynamic(OutlineToggleButton, ['isOutline']);
