import { Button, Checkbox, Column, FileUploader, Form, FormGroup, Grid, NumberInput, RadioButton, RadioButtonGroup, Search, Select, SelectItem, Stack, TextArea, TextInput } from '@carbon/react';
import React from 'react'

const Form_component = () => {
  return () => (
    <>
     
            <h5>Form</h5>
          <Form aria-label="sample form">
            <Stack gap={7}>
              <FormGroup>
                <Checkbox defaultChecked id="checkbox-0" />
                <Checkbox id="checkbox-1" />
                <Checkbox disabled id="checkbox-2" />
              </FormGroup>

              <NumberInput />

              <FormGroup>
                <FileUploader
                  id="file-1"
                  role="button"
                  labelDescription="Max file size is 500mb. Only .jpg files are supported."
                  buttonLabel="Add file"
                  buttonKind="primary"
                  size="md"
                  filenameStatus="edit"
                  accept={[".jpg", ".png"]}
                  multiple={true}
                  disabled={false}
                  iconDescription="Dismiss file"
                  name=""
                />
              </FormGroup>

              <RadioButtonGroup
                name="radio-button-group"
                defaultSelected="default-selected"
                legendText="Radio Button heading"
              >
                <RadioButton
                  value="standard"
                  id="radio-1"
                  labelText="Standard Radio Button"
                />
                <RadioButton
                  value="default-selected"
                  labelText="Default Selected Radio Button"
                  id="radio-2"
                />
                <RadioButton
                  value="blue"
                  labelText="Standard Radio Button"
                  id="radio-3"
                />
                <RadioButton
                  value="disabled"
                  labelText="Disabled Radio Button"
                  id="radio-4"
                  disabled
                />
              </RadioButtonGroup>

              <FormGroup>
                <Search id="search-1" labelText="Search" placeholder="Search" />
              </FormGroup>

              <Select id="select-1" defaultValue="placeholder-item">
                <SelectItem
                  disabled
                  hidden
                  value="placeholder-item"
                  text="Choose an option"
                />
                <SelectItem value="option-1" text="Option 1" />
                <SelectItem value="option-2" text="Option 2" />
                <SelectItem value="option-3" text="Option 3" />
              </Select>

              <TextInput />

              <TextInput
                type="password"
                required
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
              />

              <TextInput
                type="password"
                required
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
              />

              <TextArea />

              <Button type="submit" className="some-class">
                Submit
              </Button>
            </Stack>
          </Form>
    </>
  );
}

export default Form_component