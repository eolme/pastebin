import type { FC } from 'react';

import { default as Select, fuzzySearch } from 'react-select-search';

import { options } from '#/common/languages';

type PickerProps = {
  value: string;
  onChange: (lang: string) => void;
};

export const Picker: FC<PickerProps> = ({ value, onChange: handleChange }) => {
  return (
    <Select
      value={value}
      onChange={handleChange as any}
      options={options}
      multiple={false}
      search={true}
      disabled={false}
      autoComplete="on"
      autoFocus={false}
      closeOnSelect={true}
      filterOptions={fuzzySearch}
    />
  );
};
