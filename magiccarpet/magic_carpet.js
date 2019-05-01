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
	  this.appendDummyInput("LOAD_STRING2")	  
	  .appendField("Time Series Data:")
      .appendField(new Blockly.FieldDropdown([["Y","TIMESERIES_YES"], ["N","TIMESERIES_NO"]]), "TIMESERIES");
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
	  .appendField("Security Identifier:");
	  this.appendValueInput("LOAD_STRING2")
	  .setCheck(null)
	  .appendField("Metric(s):");	  
	  this.appendValueInput("LOAD_STRING3")
	  .setCheck(null)
	  .appendField("Price:");	  	  
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
	[["Filter","TRANSFORM_FILTER"], ["New Column","TRANSFORM_NEWCOL"], ["Rename Column","TRANSFORM_RENAME"],["Dates","TRANSFORM_DATES"],["Update Column","TRANSFORM_UPDATE"],["Concatenate","TRANSFORM_CONCAT"],["Index","TRANSFORM_INDEX"]]; 
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
	else if (loadInput=="TRANSFORM_CONCAT") {
      this.removeInput('LOAD_STRING');
	  this.removeInput('LOAD_COL');
	  this.removeInput('LOAD_CONDITION');
	  this.appendValueInput("LOAD_STRING")
	  .setCheck(null)
	  .appendField("Dataframe 1:");      
	  this.appendValueInput("LOAD_COL")
	  .setCheck(null)
	  .appendField("Dataframe 2:");      	  
    }
    else if (loadInput=="TRANSFORM_INDEX") {
      this.removeInput('LOAD_STRING');
	  this.removeInput('LOAD_COL');
	  this.removeInput('LOAD_CONDITION');
	  this.appendValueInput("LOAD_STRING")
	  .setCheck(null)
	  .appendField("Using Data:");      
	  this.appendValueInput("LOAD_COL")
	  .setCheck(null)
	  .appendField("Column:");      
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
	[["Sum","AGGREGATE_SUM"], ["Average","AGGREGATE_AVG"], ["Weighted Average","AGGREGATE_WTDAVG"],["Merge","AGGREGATE_MERGE"],["Min","AGGREGATE_MIN"],["Max","AGGREGATE_MAX"]]; 
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
	else if (loadInput=="AGGREGATE_MIN" || loadInput=="AGGREGATE_MAX") {
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
	}
	else {      
		this.removeInput('LOAD_STRING');
		this.removeInput('LOAD_COL');
		this.removeInput('LOAD_CONDITION');
		this.removeInput('LOAD_CONDITION2');
	}
  }
};

Blockly.Blocks['fit_variable'] = {
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

Blockly.Blocks['fit_newvariable'] = {
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

Blockly.Blocks['fit_main'] = {
  init: function() {
	this.appendDummyInput()
		.appendField(new Blockly.FieldDropdown([["Regression","FIT_REGRESSION"], ["Random Forest","FIT_FOREST"]]), "FIT_TYPE");
	this.appendDummyInput()
	  .appendField("Return")
      .appendField(new Blockly.FieldDropdown([["All Output","RETURN_ALL"], ["Coefficient(s)","RETURN_COEF"], ["R2","RETURN_R2"], ["Plot","RETURN_PLOT"]]), "RETURN_TYPE");
	this.appendValueInput("LOAD_STRING")
	  .setCheck(null)
	  .appendField("Using Data:");
	/*this.appendValueInput("LOAD_RATIO")
	  .setCheck(null)
	  .appendField("Training Using Ratio:");*/
	this.appendDummyInput()
	  .appendField("");
	this.appendValueInput("LOAD_DEPVAR")
	  .setCheck(null)
	  .appendField("Dependent Variable:");      
	this.appendDummyInput()
	  .setAlign(Blockly.ALIGN_CENTRE)
	  .appendField("On");
	this.appendValueInput("LOAD_INDEPVAR")
	  .setCheck(null)
	  .appendField("Independent Variable(s):");    
	this.setInputsInline(false);
    this.setColour('#fcd015');
    this.setTooltip('');
    this.setHelpUrl('');
	this.setMutator(new Blockly.Mutator(['fit_newvariable']));
	this.variableCount_ = 0;
	this.setPreviousStatement(true, null);	
  },
  
    mutationToDom: function() {
    if (!this.variableCount_) {
      return null;
    }
    var container = document.createElement('mutation');
    if (this.variableCount_) {
      container.setAttribute('vars', this.variableCount_);
    }
    return container;
  },
  
   domToMutation: function(xmlElement) {
    this.variableCount_ = parseInt(xmlElement.getAttribute('vars'), 10) || 0;
    this.updateShape_();
  },
  
    decompose: function(workspace) {
    var containerBlock = workspace.newBlock('fit_variable');
    containerBlock.initSvg();
    var connection = containerBlock.nextConnection;
    for (var i = 1; i <= this.variableCount_; i++) {
      var elseifBlock = workspace.newBlock('fit_newvariable');
      elseifBlock.initSvg();
      connection.connect(elseifBlock.previousConnection);
      connection = elseifBlock.nextConnection;
    }
    return containerBlock;
  },
  
   compose: function(containerBlock) {
    var clauseBlock = containerBlock.nextConnection.targetBlock();
    // Count number of inputs.
    this.variableCount_ = 0;
    var valueConnections = [null];
    var statementConnections = [null];
    
    while (clauseBlock) {
      switch (clauseBlock.type) {
        case 'fit_newvariable':
          this.variableCount_++;
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
    for (var i = 1; i <= this.variableCount_; i++) {
      Blockly.Mutator.reconnect(valueConnections[i], this, 'VAR' + i);
    }
    
  },
  
  saveConnections: function(containerBlock) {
    var clauseBlock = containerBlock.nextConnection.targetBlock();
    var i = 1;
    while (clauseBlock) {
      switch (clauseBlock.type) {
        case 'fit_newvariable':
          var inputIf = this.getInput('VAR' + i);
          clauseBlock.valueConnection_ =
              inputIf && inputIf.connection.targetConnection;
          clauseBlock.statementConnection_ =
              inputDo && inputDo.connection.targetConnection;
          i++;
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
    var i = 1;
    while (this.getInput('VAR' + i)) {
      this.removeInput('VAR' + i);
      i++;
    }
    // Rebuild block.
    for (var i = 1; i <= this.variableCount_; i++) {
      this.appendValueInput('VAR' + i);
    }
  }
};


Blockly.Python['load_main'] = function(block) {
  var string_input = Blockly.Python.valueToCode(block, 'LOAD_STRING', Blockly.Python.ORDER_ATOMIC);
  var string2_input = Blockly.Python.valueToCode(block, 'LOAD_STRING2', Blockly.Python.ORDER_ATOMIC);
  var string3_input = Blockly.Python.valueToCode(block, 'LOAD_STRING3', Blockly.Python.ORDER_ATOMIC);
  var string4_input = block.getFieldValue('STRING4_DATE'); //String4 is reserved for dates
  var string5_input = Blockly.Python.valueToCode(block, 'LOAD_STRING5', Blockly.Python.ORDER_ATOMIC);
  var string6_input = Blockly.Python.valueToCode(block, 'LOAD_STRING6', Blockly.Python.ORDER_ATOMIC);
  var string7_input = Blockly.Python.valueToCode(block, 'LOAD_STRING7', Blockly.Python.ORDER_ATOMIC);
  
  var loadInput = this.getFieldValue('PROPERTY'); 
  var timeseries_input = this.getFieldValue('TIMESERIES');
       
  // TODO: Assemble into code variable.
  if (loadInput=="FROM_FILE") {	
	string_input = string_input.replace(/["]/g,""); //Remove double quotes from string. This is an abnormal use case where a string needs to be passed in without quotes, due to the "file:///" syntax required.
	if (timeseries_input=="TIMESERIES_NO") {
	var code = 'pd.read_csv("file:///' + string_input + '")\n';	
	}
	else {
	var code = 'pd.read_csv("file:///' + string_input + '", index_col=0, parse_dates=True, infer_datetime_format=True)\n';	
	}
  }
  else if (loadInput=="FROM_GP") {	
	var code = 'ATP.get_data("aladdin.gp", url="' + string_input + '?")\n';
  }
  else if (loadInput=="FROM_ANSER") {
	var code = 'ATP.get_data("aladdin.anser", **{"pricer": {"asset_id": ' + string_input + ', "Price": ' + string3_input + '}, "metrics": [' + string2_input + ']})\n';	
  }
  else if (loadInput=="FROM_PRT") {
	string4_input = "'" + string4_input + "'";
	var code = 'ATP.get_data("aladdin.riskfactors", **{"port":' + string_input + ', "rpt": ' + string2_input + ', "rpt_format": ' + string3_input + ', "date": ' + string4_input + ', "days": ' + string5_input + ', "schema": ' + string6_input + ', "rpt_data_col_name_key": ' + string7_input + '})\n';	
  }
  else {
	var code = 'print("Test")\n';	
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
		code += 'y = ' + string_input + '[' + col_input + '],\n';
		code += 'x = ' + string_input + '[' + col2_input + '],\n';
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

Blockly.Python['transform_main'] = function(block) {
	var string_input = Blockly.Python.valueToCode(block, 'LOAD_STRING', Blockly.Python.ORDER_ATOMIC);
	var col_input = Blockly.Python.valueToCode(block, 'LOAD_COL', Blockly.Python.ORDER_ATOMIC);
	var condition_input = Blockly.Python.valueToCode(block, 'LOAD_CONDITION', Blockly.Python.ORDER_ATOMIC);	
	
	var loadInput = this.getFieldValue('PROPERTY'); 
		
	if(loadInput=="TRANSFORM_CONCAT") {
		//Assume concatenation by index. Can be enhanced to take in a column name if required
		var code = 'pd.merge(' + string_input + ',' + col_input + ', how="inner", left_on=None, right_on=None, left_index=True, right_index=True, sort=True, suffixes=("_x", "_y"), copy=True, indicator=False)\n';
	}
	else if(loadInput=="TRANSFORM_INDEX") {
		var code = string_input + '.set_index(' + col_input + ')\n';
	}
	else
	{
		var code = 'print("Test")\n';
	}
	return [code, Blockly.Python.ORDER_ATOMIC];
};


Blockly.Python['fit_main'] = function(block) {
	var loadInput = this.getFieldValue('FIT_TYPE');
	var returnType = this.getFieldValue('RETURN_TYPE');
	var string_input = Blockly.Python.valueToCode(block, 'LOAD_STRING', Blockly.Python.ORDER_ATOMIC);
	var dep_input = Blockly.Python.valueToCode(block, 'LOAD_DEPVAR', Blockly.Python.ORDER_ATOMIC);
	var ratio_input = Blockly.Python.valueToCode(block, 'LOAD_RATIO', Blockly.Python.ORDER_ATOMIC);	
	var indep_input = Blockly.Python.valueToCode(block, 'LOAD_INDEPVAR', Blockly.Python.ORDER_ATOMIC);
	
	if(loadInput=="FIT_REGRESSION"){
		var code = 'mld = MLData()\n';
		code += 'mlm = MLModel()\n';
		code += 'mld.data=' + string_input + '\n';		
		code += 'features = [' + indep_input + ']\n';
		code += 'mld.create_dummy_data(features)\n';
		code += 'X_train, y_train, X_test, y_test = mlm.split_random(mld.dummies, mld.data[' + dep_input + '],train_ratio=1)\n';
		code += 'mlm.define_regressor(reg_name="ols")\n';
		code += 'mlm.fit_model(X_train, y_train, indep_cols=features)\n';
		code += '\n';
		if(returnType=="RETURN_COEF") {
			code += 'print(' + dep_input + ', mlm.model.coef_)\n';		
		}
		else if(returnType=="RETURN_R2") {
			code += 'pred_train = mlm.predict(X_train)\n';
			code += 'scores = mlm.eval_model(y_train, pred_train, metric="r2")\n';
			code += 'print(' + dep_input + ', scores.round(4))\n';
		}
		else if(returnType=="RETURN_PLOT") {
			code += 'pred_train = mlm.predict(X_train)\n';
			code += 'predictions = pd.concat([pred_train, y_train, mld.data.ix[y_train.index, mlm.indep_cols]], axis=1)\n';
			code += 'trace1=go.Scatter(\n';
			code += 'y=predictions["Predicted " + ' + dep_input + '],\n';
			code += 'x=predictions[' + indep_input + '],\n';
			code += 'mode="markers",\n';
			code += 'marker = dict(color="rgba(255, 0, 0, .8)")\n';
			code += ')\n';
			code += 'trace2=go.Scatter(\n';
			code += 'y=predictions[' + dep_input + '],\n';
			code += 'x=predictions[' + indep_input + '],\n';
			code += 'mode="markers",\n';
			code += 'marker = dict(color="rgba(0, 0, 0, .8)")\n';
			code += ')\n';
			code += 'data=[trace1,trace2]\n';
			code += 'plotly.offline.iplot(data, filename="styled-scatter")\n';
		}
		else {
			code += 'print("Test")\n';
		}
	}
	else if (loadInput=="FIT_FOREST"){
		var code = 'mld = MLData()\n';
		code += 'mlm = MLModel()\n';
		code += 'mld.data=' + string_input + '\n';
		code += 'features = ["' + indep_input + '"]\n';
		code += 'mld.create_dummy_data(features)\n';
		code += 'X_train, y_train, X_test, y_test = mlm.split_random(mld.dummies, mld.data["' + dep_input + '"],train_ratio=' + ratio_input + ' )\n';
		code += 'mlm.define_regressor(reg_name="rf")\n';
		code += 'mlm.fit_model(X_train, y_train, indep_cols=features)\n';
		code += '\n';
		code += 'print("R-Squared On Training Set")\n';
		code += 'pred_train = mlm.predict(X_train)\n';
		code += 'scores = mlm.eval_model(y_train, pred_train, metric="r2")\n';
		code += 'print(scores.round(4))\n';
		code += 'print("R-Squared On Testing Set")\n';
		code += 'pred_test = mlm.predict(X_test)\n';
		code += 'scores = mlm.eval_model(y_test, pred_test, metric="r2")\n';
		code += 'print(scores.round(4))\n';
		code += 'print("Model Estimated")\n';
		code += 'fi = mlm.check_feature_importance(group=True).round(4)\n';
		code += 'print(fi)\n';
		code += '#This section for chart\n';
		code += 'predictions = pd.concat([pred_test, y_test, mld.data.ix[y_test.index, mlm.indep_cols]], axis=1)\n';
		code += 'trace1=go.Scatter(\n';
		code += 'y=predictions["Predicted ' + dep_input + '"],\n';
		code += 'x=predictions["' + indep_input + '"],\n';
		code += 'mode="markers",\n';
		code += 'marker = dict(color="rgba(255, 0, 0, .8)")\n';
		code += ')\n';
		code += 'trace2=go.Scatter(\n';
		code += 'y=predictions["' + dep_input + '"],\n';
		code += 'x=predictions["' + indep_input + '"],\n';
		code += 'mode="markers",\n';
		code += 'marker = dict(color="rgba(0, 0, 0, .8)")\n';
		code += ')\n';
		code += 'data=[trace1,trace2]\n';
		code += 'plotly.offline.iplot(data, filename="styled-scatter")\n';
	}
	else {
		var code = 'print("Test")\n';
	}
	
	return code; //Return plain text for use in Logic blocks
};
