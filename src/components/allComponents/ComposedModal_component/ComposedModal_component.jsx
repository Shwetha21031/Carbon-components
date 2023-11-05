import { Button, ComposedModal, ModalBody, ModalFooter, ModalHeader, Select, SelectItem, TextInput } from '@carbon/react';
import React from "react";
import {useState,useRef} from 'react'
const ComposedModal_component = () => {

      const button = useRef();

      const ModalStateManager = ({
        renderLauncher: LauncherContent,
        children: ModalContent,
      }) => {
        const [open, setOpen] = useState(false);
        return (
          <>
            {!ModalContent || typeof document === "undefined"
              ? null
              : React.createPortal(
                  <ModalContent open={open} setOpen={setOpen} />,
                  document.body
                )}
            {LauncherContent && (
              <LauncherContent open={open} setOpen={setOpen} />
            )}
          </>
        );
      };
      return (
        <ModalStateManager
          renderLauncher={({ setOpen }) => (
            <Button ref={button} onClick={() => setOpen(true)}>
              Launch composed modal
            </Button>
          )}
        >
          {({ open, setOpen }) => (
            <ComposedModal
              open={open}
              onClose={() => {
                setOpen(false);
              }}
              launcherButtonRef={button}
            >
              <ModalHeader
                label="Account resources"
                title="Add a custom domain"
              />
              <ModalBody>
                <p
                  style={{
                    marginBottom: "1rem",
                  }}
                >
                  Custom domains direct requests for your apps in this Cloud
                  Foundry organization to a URL that you own. A custom domain
                  can be a shared domain, a shared subdomain, or a shared domain
                  and host.
                </p>
                <TextInput
                  data-modal-primary-focus
                  id="text-input-1"
                  labelText="Domain name"
                  placeholder="e.g. github.com"
                  style={{
                    marginBottom: "1rem",
                  }}
                />
                <Select
                  id="select-1"
                  defaultValue="us-south"
                  labelText="Region"
                >
                  <SelectItem value="us-south" text="US South" />
                  <SelectItem value="us-east" text="US East" />
                </Select>
              </ModalBody>
              <ModalFooter
                primaryButtonText="Add"
                secondaryButtonText="Cancel"
              />
            </ComposedModal>
          )}
        </ModalStateManager>
      );
    
}

export default ComposedModal_component