//==============================================================
// i_template_method.js
// 'ITemplateMethod' interface class
// Design Pattern:     Template Method ('Operation' participant)
// Purpose:            Define the skeleton of an algorithm in an operation, 
//                     deferring somesteps to subclasses. Template Method 
//                     lets subclasses redefinecertain steps of an algorithm
//                     without changing the algorithm'sstructure.
// Pattern Subgroup:   Behavioral
// Reference:          http://ima.udg.edu/~sellares/EINF-ES1/TemplateMethodToni.pdf
// Project:            'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI     = require('mixin-interface/src/mixin_interface.js').MxI;
const IAction = require('./i_action.js').IAction;

//==================== 'ITemplateMethod' interface class ====================
class ITemplateMethod extends MxI.$Interface(IAction) {
  // ---- 'getId()' service ----  
  // Constraint: OPTIONAL IMPLEMENTATION
  //             This service MAY be overridden by the implementation class
  // Note:       Inherited from 'IElement' (via IElement/IAction)
  
  // ---- 'execute()' service ---- 
  // Constraint: MANDATORY IMPLEMENTATION
  //             This service MUST be overridden by the implementation class
  // Note:       Inherited from 'IAction' 
} // 'ITemplateMethod' interface class
MxI.$setAsInterface(ITemplateMethod).$asChildOf(IAction);
exports.ITemplateMethod = ITemplateMethod;