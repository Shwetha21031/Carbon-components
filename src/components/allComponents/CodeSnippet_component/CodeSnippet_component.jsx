import { Column, Grid } from '@carbon/react'
import React from 'react'
import {CodeSnippet} from '@carbon/react'
const CodeSnippet_component = () => {
  return (
    <>
      <h5>Code Snippets</h5>
      inline:
      <br></br> <br></br>
      <CodeSnippet type="inline" feedback="Copied to clipboard">
        {"node -v"}
      </CodeSnippet>
      <br></br> <br></br>
      <br></br>
      multi:
      <br></br> <br></br>
      <CodeSnippet type="multi" feedback="Copied to clipboard">
        {`  "scripts": {
      "build": "lerna run build --stream --prefix --npm-client yarn",
      "ci-check": "carbon-cli ci-check",
      "clean": "lerna run clean && lerna clean --yes && rimraf node_modules",
      "doctoc": "doctoc --title '## Table of Contents'",
      "format": "prettier --write '**/*.{js,md,scss,ts}' '!**/{build,es,lib,storybook,ts,umd}/**'",
      "format:diff": "prettier --list-different '**/*.{js,md,scss,ts}' '!**/{build,es,lib,storybook,ts,umd}/**' '!packages/components/**'",
      "lint": "eslint actions config codemods packages",
      "lint:styles": "stylelint '**/*.{css,scss}' --report-needless-disables --report-invalid-scope-disables",
      "sync": "carbon-cli sync",
      "test": "cross-env BABEL_ENV=test jest",
      "test:e2e": "cross-env BABEL_ENV=test jest --testPathPattern=e2e --testPathIgnorePatterns='examples,/packages/components/,/packages/react/'"
      },
      "resolutions": {
        "react": "~16.9.0",
        "react-dom": "~16.9.0",
        "react-is": "~16.9.0",
        "react-test-renderer": "~16.9.0"
      },
      "devDependencies": {
        "@babel/core": "^7.10.0",
        "@babel/plugin-proposal-class-properties": "^7.7.4",
        "@babel/plugin-proposal-export-default-from": "^7.7.4",
        "@babel/plugin-proposal-export-namespace-from": "^7.7.4",
        "@babel/plugin-transform-runtime": "^7.10.0",
        "@babel/preset-env": "^7.10.0",
        "@babel/preset-react": "^7.10.0",
        "@babel/runtime": "^7.10.0",
        "@commitlint/cli": "^8.3.5",`}
      </CodeSnippet>
      <br></br> <br></br>
      Single Line:
      <br></br>
      <br></br>
      <CodeSnippet type="single" feedback="Copied to clipboard">
        yarn add carbon-components@latest carbon-components-react@latest
        @carbon/icons-react@latest carbon-icons@latest
      </CodeSnippet>
    </>
  );
}

export default CodeSnippet_component