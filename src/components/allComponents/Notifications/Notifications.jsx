import React from 'react'
import {ActionableNotification,Column,Grid,InlineNotification, ToastNotification} from '@carbon/react'
const Notifications = () => {
  return (
    <>
     
          <h5>Notifications</h5>
          <br></br>Actionable
          <br></br>
          <br></br>
          <ActionableNotification
            actionButtonLabel="Action"
            aria-label="closes notification"
            kind="error"
            onActionButtonClick={function noRefCheck() {}}
            onClose={function noRefCheck() {}}
            onCloseButtonClick={function noRefCheck() {}}
            statusIconDescription="notification"
            subtitle="Subtitle text goes here"
            title="Notification title"
          />
          <br></br>
          <br></br>
          Inline
          <br></br>
          <br></br>
          <InlineNotification
            aria-label="closes notification"
            kind="error"
            onClose={function noRefCheck() {}}
            onCloseButtonClick={function noRefCheck() {}}
            statusIconDescription="notification"
            subtitle="Subtitle text goes here"
            title="Notification title"
          />
          <br></br>
          <br></br>
          Toast
          <br></br>
          <br></br>
          <ToastNotification
            aria-label="closes notification"
            caption="00:00:00 AM"
            kind="error"
            onClose={function noRefCheck() {}}
            onCloseButtonClick={function noRefCheck() {}}
            role="status"
            statusIconDescription="notification"
            subtitle="Subtitle text goes here"
            timeout={0}
            title="Notification title"
          />
    </>
  );
}

export default Notifications