goog.require('Blockly.FieldDate'); /* Either use this with blockly_uncompressed.js OR recompile Blockly with this section in blockly.js uncommented out */

Blockly.Blocks['load_main'] = {
  init: function() {
	var PROPERTIES =
	[["File","FROM_FILE"], ["GP","FROM_GP"], ["PRT","FROM_PRT"],["On Demand Analytics","FROM_ANSER"],["Database","FROM_DB"]]; 
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
    container.setAttribute('load_input', loadInput); 
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
	else if (loadInput=="FROM_ANSER") {
      this.removeInput('LOAD_STRING');
	  this.removeInput('LOAD_STRING2');
	  this.removeInput('LOAD_STRING3');
	  this.removeInput('LOAD_STRING4');
	  this.removeInput('LOAD_STRING5');
	  this.removeInput('LOAD_STRING6');
	  this.removeInput('LOAD_STRING7');	  
	  this.appendValueInput("LOAD_STRING")
	  .setCheck(null)
	  .appendField("Security Identifiers:");
	  this.appendDummyInput("LOAD_STRING4")
	  .appendField("Date:")
	  .appendField(new Blockly.FieldDate(), 'STRING4_DATE');	      
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

Blockly.Blocks['visualize_main'] = {
  init: function() {
	var PROPERTIES =
	[["Rows","VIZ_INDEX"], ["Columns","VIZ_COLS"], ["Row & Column","VIZ_ROWCOL"], ["Head","VIZ_HEAD"], ["Tail","VIZ_TAIL"],["Summary","VIZ_SUMMARY"],["Scatter Plot","VIZ_SCATTER"],["Histogram","VIZ_HIST"],["Pie Chart","VIZ_PIE"],["Box and Whisker Plot","VIZ_BOX"]]; 
	var dropdown = new Blockly.FieldDropdown(PROPERTIES, function(option) {
	  var loadInput = option;
	  this.sourceBlock_.updateShape_(loadInput);
    });
	this.appendDummyInput()
	.appendField("Display");
	this.appendDummyInput()
	.appendField(dropdown, 'PROPERTY');
    this.setInputsInline(false);
    this.setColour('#003594');
    this.setTooltip('');
    this.setHelpUrl('');
	
  },
  
  mutationToDom: function() { /* This function creates an XML element 'mutation' */
    var container = document.createElement('mutation');
    var loadInput = this.getFieldValue('PROPERTY'); 
    container.setAttribute('load_input', loadInput); 
    return container; /* If this returns null, no mutation is recorded */
  },
  
  domToMutation: function(xmlElement) { /* This function reads XML to restore 'loadInput' */
    var loadInput = xmlElement.getAttribute('load_input'); 
    this.updateShape_(loadInput); /* Update block shape if T */
  },
  
  updateShape_: function(loadInput) {
    // Add or remove a Value Input.
    
    if (loadInput=="VIZ_INDEX" || loadInput=="VIZ_COLS" || loadInput=="VIZ_HEAD" || loadInput=="VIZ_TAIL" || loadInput=="VIZ_SUMMARY") {
      this.removeInput('LOAD_STRING');
	  this.removeInput('LOAD_COL');
	  this.removeInput('LOAD_COL2');
	  this.appendValueInput("LOAD_STRING")
	  .setCheck(null)
	  .appendField("From Data:");      
    }
	else if (loadInput=="VIZ_ROWCOL") {
		this.removeInput('LOAD_STRING');
		this.removeInput('LOAD_COL');
		this.removeInput('LOAD_COL2');
		this.appendValueInput("LOAD_STRING")
		.setCheck(null)
		.appendField("From Data:");
		this.appendValueInput("LOAD_COL")
		.setCheck(null)
		.appendField("Column:");
		this.appendValueInput("LOAD_COL2")
		.setCheck(null)
		.appendField("Row:");
	}	
	else if (loadInput=="VIZ_SCATTER" || loadInput=="VIZ_BOX") {
		this.removeInput('LOAD_STRING');
		this.removeInput('LOAD_COL');
		this.removeInput('LOAD_COL2');
		this.appendValueInput("LOAD_STRING")
		.setCheck(null)
		.appendField("From Data:");
		this.appendValueInput("LOAD_COL")
		.setCheck(null)
		.appendField("Vertical:");
		this.appendValueInput("LOAD_COL2")
		.setCheck(null)
		.appendField("Horizontal:");
	}
	else if (loadInput=="VIZ_HIST" || loadInput=="VIZ_PIE")	{
		this.removeInput('LOAD_STRING');
		this.removeInput('LOAD_COL');
		this.removeInput('LOAD_COL2');
		this.appendValueInput("LOAD_STRING")
		.setCheck(null)
		.appendField("From Data:");
		this.appendValueInput("LOAD_COL")
		.setCheck(null)
		.appendField("Data Field:");
	}
	else {
		this.removeInput('LOAD_STRING');
		this.removeInput('LOAD_COL');
		this.removeInput('LOAD_COL2');
	}
  }
};

Blockly.Blocks['transform_main'] = {
  init: function() {
	var PROPERTIES =
	[["Filter","TRANSFORM_FILTER"], ["New Column","TRANSFORM_NEWCOL"], ["Rename Column","TRANSFORM_RENAME"],["Dates","TRANSFORM_DATES"],["Update Column","TRANSFORM_UPDATE"]]; 
	var dropdown = new Blockly.FieldDropdown(PROPERTIES, function(option) {
	  var loadInput = option;
	  this.sourceBlock_.updateShape_(loadInput);
    });
	this.appendDummyInput()
	.appendField("Transform");
	this.appendDummyInput()
	.appendField(dropdown, 'PROPERTY');
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour('#6c207e');
    this.setTooltip('');
    this.setHelpUrl('');
	
  },
  
  mutationToDom: function() { /* This function creates an XML element 'mutation' */
    var container = document.createElement('mutation');
    var loadInput = this.getFieldValue('PROPERTY'); 
    container.setAttribute('load_input', loadInput); 
    return container; /* If this returns null, no mutation is recorded */
  },
  
  domToMutation: function(xmlElement) { /* This function reads XML to restore 'loadInput' */
    var loadInput = xmlElement.getAttribute('load_input'); 
    this.updateShape_(loadInput); /* Update block shape if T */
  },
  
  updateShape_: function(loadInput) {
    // Add or remove a Value Input.
    
    if (loadInput=="TRANSFORM_FILTER") {
      this.removeInput('LOAD_STRING');
	  this.removeInput('LOAD_COL');
	  this.removeInput('LOAD_CONDITION');
	  this.appendValueInput("LOAD_STRING")
	  .setCheck(null)
	  .appendField("From Data:");      
	  this.appendValueInput("LOAD_COL")
	  .setCheck(null)
	  .appendField("Column:");      
	  this.appendValueInput("LOAD_CONDITION")
	  .setCheck(null)
	  .appendField("Where:");      
    }
	else if (loadInput=="TRANSFORM_NEWCOL" || loadInput=="TRANSFORM_UPDATE") {
      this.removeInput('LOAD_STRING');
	  this.removeInput('LOAD_COL');
	  this.removeInput('LOAD_CONDITION');
	  this.appendValueInput("LOAD_STRING")
	  .setCheck(null)
	  .appendField("From Data:");      
	  this.appendValueInput("LOAD_COL")
	  .setCheck(null)
	  .appendField("Column Name:");      
	  this.appendValueInput("LOAD_CONDITION")
	  .setCheck(null)
	  .appendField("Set Value:");      
    }
	else if (loadInput=="TRANSFORM_RENAME") {
      this.removeInput('LOAD_STRING');
	  this.removeInput('LOAD_COL');
	  this.removeInput('LOAD_CONDITION');
	  this.appendValueInput("LOAD_STRING")
	  .setCheck(null)
	  .appendField("From Data:");      
	  this.appendValueInput("LOAD_COL")
	  .setCheck(null)
	  .appendField("Column Name:");      
	  this.appendValueInput("LOAD_CONDITION")
	  .setCheck(null)
	  .appendField("Rename To:");      
    }
	else {
		this.removeInput('LOAD_STRING');
		this.removeInput('LOAD_COL');
		this.removeInput('LOAD_CONDITION');
	}
  }
};

Blockly.Blocks['aggregate_main'] = {
  init: function() {
	var PROPERTIES =
	[["Sum","AGGREGATE_SUM"], ["Average","AGGREGATE_AVG"], ["Weighted Average","AGGREGATE_WTDAVG"],["Merge","AGGREGATE_MERGE"]]; 
	var dropdown = new Blockly.FieldDropdown(PROPERTIES, function(option) {
	  var loadInput = option;
	  this.sourceBlock_.updateShape_(loadInput);
    });
	this.appendDummyInput()
	.appendField("Aggregate");
	this.appendDummyInput()
	.appendField(dropdown, 'PROPERTY');
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour('#e31b23');
    this.setTooltip('');
    this.setHelpUrl('');
	
  },
  
  mutationToDom: function() { /* This function creates an XML element 'mutation' */
    var container = document.createElement('mutation');
    var loadInput = this.getFieldValue('PROPERTY'); 
    container.setAttribute('load_input', loadInput); 
    return container; /* If this returns null, no mutation is recorded */
  },
  
  domToMutation: function(xmlElement) { /* This function reads XML to restore 'loadInput' */
    var loadInput = xmlElement.getAttribute('load_input'); 
    this.updateShape_(loadInput); /* Update block shape if T */
  },
  
  updateShape_: function(loadInput) {
    // Add or remove a Value Input.
    
    if (loadInput=="AGGREGATE_SUM" || loadInput=="AGGREGATE_AVG") {
      this.removeInput('LOAD_STRING');
	  this.removeInput('LOAD_COL');
	  this.removeInput('LOAD_CONDITION');
	  this.removeInput('LOAD_CONDITION2');	
	  this.appendValueInput("LOAD_STRING")
	  .setCheck(null)
	  .appendField("From Data:");      
	  this.appendValueInput("LOAD_COL")
	  .setCheck(null)
	  .appendField("Column:");      
	  this.appendValueInput("LOAD_CONDITION")
	  .setCheck(null)
	  .appendField("Group By:");      
    }
	else if (loadInput=="AGGREGATE_MERGE") {
      this.removeInput('LOAD_STRING');
	  this.removeInput('LOAD_COL');
	  this.removeInput('LOAD_CONDITION');
	  this.removeInput('LOAD_CONDITION2');
	  this.appendValueInput("LOAD_STRING")
	  .setCheck(null)
	  .appendField("Merge This:");      
	  this.appendValueInput("LOAD_COL")
	  .setCheck(null)
	  .appendField("With This:");      
	  this.appendValueInput("LOAD_CONDITION")
	  .setCheck(null)
	  .appendField("Joining Using Column:");      
    }
	else if (loadInput=="AGGREGATE_WTDAVG") {
      this.removeInput('LOAD_STRING');
	  this.removeInput('LOAD_COL');
	  this.removeInput('LOAD_CONDITION');
	  this.removeInput('LOAD_CONDITION2');
	  this.appendValueInput("LOAD_STRING")
	  .setCheck(null)
	  .appendField("From Data:");      
	  this.appendValueInput("LOAD_COL")
	  .setCheck(null)
	  .appendField("Column:");
	  this.appendValueInput("LOAD_CONDITION")
	  .setCheck(null)
	  .appendField("Group By:");      
	  this.appendValueInput("LOAD_CONDITION2")
	  .setCheck(null)
	  .appendField("Weighted By:");      
	}
	else {      
		this.removeInput('LOAD_STRING');
		this.removeInput('LOAD_COL');
		this.removeInput('LOAD_CONDITION');
		this.removeInput('LOAD_CONDITION2');
	}
  }
};

Blockly.Blocks['stats_variable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Variable");
    this.setInputsInline(false);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['stats_newvariable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("New Variable");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['stats_main'] = {
  init: function() {
	this.appendDummyInput()
		.appendField(new Blockly.FieldDropdown([["Regression","STATS_REGRESSION"], ["Random Forest","STATS_FOREST"]]), "STAT_TYPE");
	this.appendValueInput("LOAD_STRING")
	  .setCheck(null)
	  .appendField("Using Data:");
	this.appendDummyInput('LOAD_DUMMY')
	  .appendField("");
	this.appendValueInput("LOAD_DEPVAR")
	  .setCheck(null)
	  .appendField("Dependent Variable:");      
	this.appendDummyInput('LOAD_DUMMY2')
	  .setAlign(Blockly.ALIGN_CENTRE)
	  .appendField("On");
	this.appendValueInput("LOAD_INDEPVAR")
	  .setCheck(null)
	  .appendField("Independent Variable(s):");      	  
	this.setInputsInline(false);
    this.setColour('#fcd015');
    this.setTooltip('');
    this.setHelpUrl('');
	this.setMutator(new Blockly.Mutator(['stats_newvariable']));
	this.elseifCount_ = 0;
  },
  
    mutationToDom: function() {
    if (!this.elseifCount_) {
      return null;
    }
    var container = document.createElement('mutation');
    if (this.elseifCount_) {
      container.setAttribute('elseif', this.elseifCount_);
    }
    return container;
  },
  
   domToMutation: function(xmlElement) {
    this.elseifCount_ = parseInt(xmlElement.getAttribute('elseif'), 10) || 0;
    this.updateShape_();
  },
  
    decompose: function(workspace) {
    var containerBlock = workspace.newBlock('stats_variable');
    containerBlock.initSvg();
    var connection = containerBlock.nextConnection;
    for (var i = 1; i <= this.elseifCount_; i++) {
      var elseifBlock = workspace.newBlock('stats_newvariable');
      elseifBlock.initSvg();
      connection.connect(elseifBlock.previousConnection);
      connection = elseifBlock.nextConnection;
    }
    return containerBlock;
  },
  
   compose: function(containerBlock) {
    var clauseBlock = containerBlock.nextConnection.targetBlock();
    // Count number of inputs.
    this.elseifCount_ = 0;
    var valueConnections = [null];
    var statementConnections = [null];
    var elseStatementConnection = null;
    while (clauseBlock) {
      switch (clauseBlock.type) {
        case 'stats_newvariable':
          this.elseifCount_++;
          valueConnections.push(clauseBlock.valueConnection_);
          statementConnections.push(clauseBlock.statementConnection_);
          break;
        default:
          throw 'Unknown block type.';
      }
      clauseBlock = clauseBlock.nextConnection &&
          clauseBlock.nextConnection.targetBlock();
    }
    this.updateShape_();
    // Reconnect any child blocks.
    for (var i = 1; i <= this.elseifCount_; i++) {
      Blockly.Mutator.reconnect(valueConnections[i], this, 'IF' + i);
    }
    Blockly.Mutator.reconnect(elseStatementConnection, this, 'ELSE');
  },
  
  saveConnections: function(containerBlock) {
    var clauseBlock = containerBlock.nextConnection.targetBlock();
    var i = 1;
    while (clauseBlock) {
      switch (clauseBlock.type) {
        case 'stats_newvariable':
          var inputIf = this.getInput('IF' + i);
          clauseBlock.valueConnection_ =
              inputIf && inputIf.connection.targetConnection;
          clauseBlock.statementConnection_ =
              inputDo && inputDo.connection.targetConnection;
          i++;
          break;
        case 'controls_if_else':
          var inputDo = this.getInput('ELSE');
          clauseBlock.statementConnection_ =
              inputDo && inputDo.connection.targetConnection;
          break;
        default:
          throw 'Unknown block type.';
      }
      clauseBlock = clauseBlock.nextConnection &&
          clauseBlock.nextConnection.targetBlock();
    }
  },
  
  updateShape_: function() {
    // Delete everything.
    if (this.getInput('ELSE')) {
      this.removeInput('ELSE');
    }
    var i = 1;
    while (this.getInput('IF' + i)) {
      this.removeInput('IF' + i);
      i++;
    }
    // Rebuild block.
    for (var i = 1; i <= this.elseifCount_; i++) {
      this.appendValueInput('IF' + i);
    }
  }
};


Blockly.Python['load_main'] = function(block) {
  var string_input = Blockly.Python.valueToCode(block, 'LOAD_STRING', Blockly.Python.ORDER_ATOMIC);
  var string2_input = Blockly.Python.valueToCode(block, 'LOAD_STRING2', Blockly.Python.ORDER_ATOMIC);
  var string3_input = Blockly.Python.valueToCode(block, 'LOAD_STRING3', Blockly.Python.ORDER_ATOMIC);
  var string4_input = block.getFieldValue('STRING4_DATE');
  var string5_input = Blockly.Python.valueToCode(block, 'LOAD_STRING5', Blockly.Python.ORDER_ATOMIC);
  var string6_input = Blockly.Python.valueToCode(block, 'LOAD_STRING6', Blockly.Python.ORDER_ATOMIC);
  var string7_input = Blockly.Python.valueToCode(block, 'LOAD_STRING7', Blockly.Python.ORDER_ATOMIC);
  
  var loadInput = this.getFieldValue('PROPERTY'); 
  
  // TODO: Assemble into code variable.
  if (loadInput=="FROM_FILE") {	
	string_input = string_input.replace(/[']/g,""); //Remove quotes from string
	var code = 'pd.read_csv("file:///' + string_input + '")\n';	
  }
  else if (loadInput=="FROM_GP") {
	string_input = string_input.replace(/[']/g,""); //Remove quotes from string
	var code = 'ATP.get_data("aladdin.gp", url="' + string_input + '?")\n';
  }
  else {
	var code = 'var string="' + string_input + string2_input + string3_input + string4_input + string5_input + string6_input + string7_input + '";\n';
	code += 'alert(string)';
	}
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['visualize_main'] = function(block) {
	var string_input = Blockly.Python.valueToCode(block, 'LOAD_STRING', Blockly.Python.ORDER_ATOMIC);
	var col_input = Blockly.Python.valueToCode(block, 'LOAD_COL', Blockly.Python.ORDER_ATOMIC);
	var col2_input = Blockly.Python.valueToCode(block, 'LOAD_COL2', Blockly.Python.ORDER_ATOMIC);	
	
	var loadInput = this.getFieldValue('PROPERTY'); 
	
	if(loadInput=="VIZ_HEAD") {
		var code = string_input + '.head()\n';
	}
	else if(loadInput=="VIZ_SUMMARY") {
		var code = string_input + '.describe()\n';
	}
	else if(loadInput=="VIZ_COLS") {
		var code = string_input + '.columns\n';
	}
	else if(loadInput=="VIZ_INDEX") {
		var code = string_input + '.index\n';
	}
	else if(loadInput=="VIZ_ROWCOL") {
		var code = 'print(' + string_input + '[[' + col_input + ']].loc[(' + col2_input + ')])\n';
	}
	else if(loadInput=="VIZ_SCATTER") {
		var code = 'trace = go.Scatter(\n';
		code += 'y = ' + string_input '[' + col_input + '],\n';
		code += 'x = ' + string_input '[' + col2_input + '],\n';
		code += 'mode="markers"\n';
		code += ')\n';
		code += 'data = [trace]\n';
		code += 'plotly.offline.iplot(data, filename="scatter")\n';
	}
	else
	{
		var code = 'print("Test")\n';
	}
	return [code, Blockly.Python.ORDER_ATOMIC];
};