import React from 'react';
import BottomSheet from 'components/sheets/BottomSheet.tsx';
import FiltersForm from 'forms/filter/FiltersForm.tsx';

const FiltersBottomSheet = () => {
  return (
    <BottomSheet>
      <FiltersForm />
    </BottomSheet>
  );
};

export default FiltersBottomSheet;
