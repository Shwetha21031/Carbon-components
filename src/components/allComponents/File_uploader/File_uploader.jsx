import { Column, FileUploader, FileUploaderDropContainer, FileUploaderItem, Grid } from '@carbon/react'
import React from 'react'

const File_uploader = () => {
  return (
    <>
      <h5>File uploader</h5>
      <div className="cds--file__container">
        <FileUploader
          labelTitle="Upload files"
          labelDescription="Max file size is 500mb. Only .jpg files are supported."
          buttonLabel="Add file"
          buttonKind="primary"
          size="md"
          filenameStatus="edit"
          accept={[".jpg", ".png"]}
          multiple={true}
          disabled={false}
          iconDescription="Delete file"
          name=""
        />
      </div>
      <br></br>
      <br></br>
      Drag and Drop
      <br></br>
      <br></br>
      <FileUploaderDropContainer
        labelText="Drag and drop files here or click to upload"
        multiple={true}
        accept={["image/jpeg", "image/png"]}
        disabled={false}
        name=""
        tabIndex={0}
      />
      <br></br>
      <br></br>
      File uploader item
      <br></br>
      <br></br>
      <FileUploaderItem
        errorBody="500kb max file size. Select a new file and try again."
        errorSubject="File size exceeds limit"
        iconDescription="Delete file"
        invalid={false}
        name="README.md"
        status="edit"
        size="md"
      />
    </>
  );
}

export default File_uploader