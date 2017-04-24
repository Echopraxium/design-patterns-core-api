//==============================================================
// i_core_component.js
// 'ICoreComponent' base interface class
// Purpose:           Base interface class of 'IComponent' and 'IDecorator'
// Project:           'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI     = require('mixin-interface/src/mixin_interface.js').MxI;
const IAction = require('../behavioral/i_action.js').IAction;

//==================== 'ICoreComponent' interface class ====================
class ICoreComponent extends MxI.$Interface(IAction) {
  // ---- 'getId()' service ----  
  // Constraint: OPTIONAL IMPLEMENTATION
  //             This service MAY be overridden by the implementation class
  // Note:       Inherited from 'IElement' (via IElement/IAction)
  
  // ---- 'execute()' service ----  
  // Constraint: MANDATORY IMPLEMENTATION
  //             This service MUST be overridden by the implementation class
  // Note:       Inherited from 'IAction'
} // 'ICoreComponent' interface class
MxI.$setAsInterface(ICoreComponent).$asChildOf(IAction);
exports.ICoreComponent = ICoreComponent;