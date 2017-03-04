goog.require('Blockly.FieldDate'); /* Either use this with blockly_uncompressed.js OR recompile Blockly with this uncommented out */

Blockly.Blocks['load_main'] = {
  init: function() {
	var PROPERTIES =
	[["File","FROM_FILE"], ["GP","FROM_GP"], ["PRT","FROM_PRT"],["Database","FROM_DB"]]; 
    this.appendDummyInput()
        .appendField("Load From:");
	var dropdown = new Blockly.FieldDropdown(PROPERTIES, function(option) {
	  var loadInput = option;
	  this.sourceBlock_.updateShape_(loadInput);
    });
	this.appendDummyInput()
	.appendField(dropdown, 'PROPERTY');
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour('#4F4E50');
    this.setTooltip('');
    this.setHelpUrl('');
	
  },
  
  mutationToDom: function() { /* This function creates an XML element 'mutation' */
    var container = document.createElement('mutation');
    var loadInput = this.getFieldValue('PROPERTY'); 
    container.setAttribute('load_input', loadInput); /* load_input attribute is set to T/F */
    return container; /* If this returns null, no mutation is recorded */
  },
  
  domToMutation: function(xmlElement) { /* This function reads XML to restore 'loadInput' */
    var loadInput = xmlElement.getAttribute('load_input'); 
    this.updateShape_(loadInput); /* Update block shape if T */
  },
  
  updateShape_: function(loadInput) {
    // Add or remove a Value Input.
    
    if (loadInput=="FROM_FILE") {
      this.removeInput('LOAD_STRING');
	  this.removeInput('LOAD_STRING2');
	  this.removeInput('LOAD_STRING3');
	  this.removeInput('LOAD_STRING4');
	  this.removeInput('LOAD_STRING5');
	  this.removeInput('LOAD_STRING6');
	  this.removeInput('LOAD_STRING7');
	  this.appendValueInput("LOAD_STRING")
	  .setCheck(null)
	  .appendField("Path:");      
    }
	else if (loadInput=="FROM_GP") {
      this.removeInput('LOAD_STRING');
	  this.removeInput('LOAD_STRING2');
	  this.removeInput('LOAD_STRING3');
	  this.removeInput('LOAD_STRING4');
	  this.removeInput('LOAD_STRING5');
	  this.removeInput('LOAD_STRING6');
	  this.removeInput('LOAD_STRING7');
	  this.appendValueInput("LOAD_STRING")
	  .setCheck(null)
	  .appendField("URL:");            
    }
	else if (loadInput=="FROM_DB") {
      this.removeInput('LOAD_STRING');
	  this.removeInput('LOAD_STRING2');
	  this.removeInput('LOAD_STRING3');
	  this.removeInput('LOAD_STRING4');
	  this.removeInput('LOAD_STRING5');
	  this.removeInput('LOAD_STRING6');
	  this.removeInput('LOAD_STRING7');
	  this.appendValueInput("LOAD_STRING")
	  .setCheck(null)
	  .appendField("SQL Query:");            
    }
	else if (loadInput=="FROM_PRT") {
      this.removeInput('LOAD_STRING');
	  this.removeInput('LOAD_STRING2');
	  this.removeInput('LOAD_STRING3');
	  this.removeInput('LOAD_STRING4');
	  this.removeInput('LOAD_STRING5');
	  this.removeInput('LOAD_STRING6');
	  this.removeInput('LOAD_STRING7');	  
	  this.appendValueInput("LOAD_STRING")
	  .setCheck(null)
	  .appendField("Portfolio:");            
	  this.appendValueInput("LOAD_STRING2")
	  .setCheck(null)
	  .appendField("Report:");            
	  this.appendValueInput("LOAD_STRING3")
	  .setCheck(null)
	  .appendField("Format:");
	  this.appendDummyInput("LOAD_STRING4")
	  .appendField("Date:")
	  .appendField(new Blockly.FieldDate(), 'STRING4_DATE');	                
	  this.appendValueInput("LOAD_STRING5")
	  .setCheck(null)
	  .appendField("Days:");            
	  this.appendValueInput("LOAD_STRING6")
	  .setCheck(null)
	  .appendField("Schema:");            
	  this.appendValueInput("LOAD_STRING7")
	  .setCheck(null)
	  .appendField("Column Key:");            	  
    }
	else {
	  this.removeInput('LOAD_STRING');
	  this.removeInput('LOAD_STRING2');
	  this.removeInput('LOAD_STRING3');
	  this.removeInput('LOAD_STRING4');
	  this.removeInput('LOAD_STRING5');
	  this.removeInput('LOAD_STRING6');
	  this.removeInput('LOAD_STRING7');	
	}
  }
};




Blockly.JavaScript['load_main'] = function(block) {
  var string_input = Blockly.JavaScript.valueToCode(block, 'LOAD_STRING', Blockly.JavaScript.ORDER_ATOMIC);
  var string2_input = Blockly.JavaScript.valueToCode(block, 'LOAD_STRING2', Blockly.JavaScript.ORDER_ATOMIC);
  var string3_input = Blockly.JavaScript.valueToCode(block, 'LOAD_STRING3', Blockly.JavaScript.ORDER_ATOMIC);
  var string4_input = block.getFieldValue('STRING4_DATE');
  var string5_input = Blockly.JavaScript.valueToCode(block, 'LOAD_STRING5', Blockly.JavaScript.ORDER_ATOMIC);
  var string6_input = Blockly.JavaScript.valueToCode(block, 'LOAD_STRING6', Blockly.JavaScript.ORDER_ATOMIC);
  var string7_input = Blockly.JavaScript.valueToCode(block, 'LOAD_STRING7', Blockly.JavaScript.ORDER_ATOMIC);
  
  // TODO: Assemble JavaScript into code variable.
  var code = 'var string="' + string_input + string2_input + string3_input + string4_input + string5_input + string6_input + string7_input + '";\n';
  code += 'alert(string)';
  return code;
};