import Blockly from 'blockly';
import 'blockly/python';

Blockly.Blocks['new_firewall_rule'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldTextInput("Rule Name"), "Name");
        this.appendStatementInput("Content")
            .setCheck(null);
        this.setInputsInline(true);
        this.setColour(315);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['new_firewall_rule'] = function (block) {
    var text_name = block.getFieldValue('Name');
    var statements_content = Blockly.JavaScript.statementToCode(block, 'Content');
    // TODO: Assemble Python into code variable.
    var code = 'let ' + text_name + '= foo' + statements_content + '\n';
    return code;
};

// Blockly.Blocks['return'] = {
//     init: function () {
//         this.appendValueInput("NAME")
//             .setCheck(null)
//             .appendField("return");
//         this.setInputsInline(false);
//         this.setPreviousStatement(true, null);
//         this.setColour(330);
//         this.setTooltip("");
//         this.setHelpUrl("");
//     }
// };

// Blockly.Python['return'] = function (block) {
//     var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
//     // TODO: Assemble Python into code variable.
//     var code = 'return ' + value_name + '\n';
//     return code;
// };