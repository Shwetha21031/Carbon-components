import { Column, DatePicker, DatePickerInput, Grid } from '@carbon/react'
import React from 'react'

const Date_picker = () => {
  return (
    <>
          <DatePicker datePickerType="simple">
            <DatePickerInput
              placeholder="mm/dd/yyyy"
              labelText="Date Picker label"
              id="date-picker-simple"
            />
          </DatePicker>
          <br></br>
          <br></br>
          With range
          <br></br>
          <br></br>
          <DatePicker datePickerType="range">
            <DatePickerInput
              id="date-picker-input-id-start"
              placeholder="mm/dd/yyyy"
              labelText="Start date"
              size="md"
            />
            <DatePickerInput
              id="date-picker-input-id-finish"
              placeholder="mm/dd/yyyy"
              labelText="End date"
              size="md"
            />
          </DatePicker>
    </>
  );
}

export default Date_picker