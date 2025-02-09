import React from 'react';
import { PkOptionVm } from '../table-pk-picker.model';
import classes from '../table-pk-picker.component.module.css';
import { generateOptions } from './field-tree.business';

interface Props {
  name: string;
  options: PkOptionVm[];
  optionsListVisible: boolean;
  handleOptionClick: (option: PkOptionVm, parentPath: string) => void;
  selectedPKField?: string;
}

export const FieldTree: React.FC<Props> = props => {
  const {
    name,
    options,
    optionsListVisible,
    handleOptionClick,
    selectedPKField,
  } = props;

  return (
    <ul
      className={classes.options}
      style={{ display: optionsListVisible ? 'block' : 'none' }}
    >
      {generateOptions(name, options, '', handleOptionClick, selectedPKField)}
    </ul>
  );
};
