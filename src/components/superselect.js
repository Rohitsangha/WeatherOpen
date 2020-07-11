import React, { useState } from 'react';

import { EuiSuperSelect, EuiHealth } from '@elastic/eui';

const Superselect = ({value,setValue}) => {
  const options = [
    {
      value: 'hour',
      inputDisplay: (
        <EuiHealth color="success" style={{ lineHeight: 'inherit' }}>
          View 5 Hour Forecast
        </EuiHealth>
      ),
      'data-test-subj': 'option-warning',
    },
    {
      value: 'day',
      inputDisplay: (
        <EuiHealth color="success" style={{ lineHeight: 'inherit' }}>
          View 7 Day Forecast 
        </EuiHealth>
      ),
      'data-test-subj': 'option-minor',
    },
    {
      value: 'current',
      inputDisplay: (
        <EuiHealth color="success" style={{ lineHeight: 'inherit' }}>
          View Current Forecast
        </EuiHealth>
      ),
      'data-test-subj': 'option-critical',
    },
  ];

  const onChange = value => {
    setValue(value);
  };

  return (
    <EuiSuperSelect
      options={options}
      valueOfSelected={value}
      onChange={value => onChange(value)}
    />
  );
};

export default Superselect;