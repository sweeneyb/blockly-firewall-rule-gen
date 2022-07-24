import './App.css';

import React, { useState } from "react";
import { BlocklyWorkspace } from 'react-blockly'
import Blockly from "blockly";
import "./customBlocks/networks";

function App() {
  const [xml, setXml] = useState("");
  const [code, setCode] = useState("");

  const initialXml =
    '<xml xmlns="https://developers.google.com/blockly/xml"><block type="firewall_rule" id="@.gb4,#Dgg@o|gTQz_h:" x="450" y="310"><field name="Name">Rule Name</field></block></xml>';

  const toolbox = {
    kind: "categoryToolbox",
    contents: [
      {
        kind: "category",
        name: "Logic",
        colour: "#5C81A6",
        contents: [
          {
            kind: "block",
            type: "controls_if",
          },
          {
            kind: "block",
            type: "logic_compare",
          }
        ],
      },
      {
        kind: "category",
        name: "Math",
        colour: "#5CA65C",
        contents: [
          {
            kind: "block",
            type: "math_round",
          },
          {
            kind: "block",
            type: "math_number",
          },
        ],
      },
      {
        kind: "category",
        name: "Network Rules",
        colour: "#5CA699",
        contents: [
          {
            kind: "block",
            type: "firewall_rule",
          },
          {
            kind: "block",
            type: "host",
          },
          {
            kind: "block",
            type: "application",
          },
          {
            kind: "block",
            type: "text",
          },
        ],
      },
    ]
  }

  function workspaceChanged(workspace) {
    const code = Blockly.JavaScript.workspaceToCode(workspace)
    setCode(code);
  }

  function xmlChanged(xml) {
    console.log(xml)
    setXml(xml)
  }
  return (
    <div className="App">
      hi
      <BlocklyWorkspace
        toolboxConfiguration={toolbox}
        initialXml={initialXml}
        className="fill-height"
        workspaceConfiguration={{
          grid: {
            spacing: 20,
            length: 3,
            colour: "#ccc",
            snap: true,
          },
        }}
        onWorkspaceChange={workspaceChanged}
        onXmlChange={xmlChanged}
      />
      <textarea
        id="code"
        style={{ height: "200px", width: "400px" }}
        value={code}
        readOnly
      ></textarea>
    </div>
  );
}

export default App;
