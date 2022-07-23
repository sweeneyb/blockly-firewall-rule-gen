import './App.css';

import React, { useState } from "react";
import { BlocklyWorkspace } from 'react-blockly'
import Blockly from "blockly";
import "./customBlocks/networks";

function App() {
  const [xml, setXml] = useState("");
  const [code, setCode] = useState("");

  const initialXml =
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="text" x="70" y="30"><field name="TEXT"></field></block></xml>';

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
          },
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
        name: "Custom",
        colour: "#5CA699",
        contents: [
          {
            kind: "block",
            type: "new_firewall_rule",
          }
        ],
      },
    ]
  }

  function workspaceChanged(workspace) {
    const code = Blockly.JavaScript.workspaceToCode(workspace)
    setCode(code);
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
        onXmlChange={setXml}
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
