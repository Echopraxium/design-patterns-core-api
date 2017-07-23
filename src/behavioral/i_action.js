//==============================================================
// i_action.js
// 'IAction' base interface class
// Purpose:           Base interface class of 'ICoreComponent', 'IDecorator',
//                    'ICommand', 'IInvoker' and 'ITemplateMethod'.
//                    This interface delegates the 'execute()' service to its 
//                    subclasses depending on their role (participant within 
//                    its Design Pattern)
//                    e.g. within 'Decorator' pattern, 'IDecorator' subclass has
//                         the 'Decorator' role, 'execute()' service has the semantic
//                         of a 'decorating behavior'.
// Pattern Subgroup:  Behavioral
// Project:           'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI      = require('mixin-interface/src/mixin_interface.js').MxI;
const IElement = require('../i_element.js').IElement;

//==================== 'IAction' interface class ====================
class IAction extends MxI.$Interface(IElement) {
  // ---- 'getId()' service ----  
  // Constraint: OPTIONAL IMPLEMENTATION
  //             This service MAY be overridden by the implementation class
  // Note:       Inherited from 'IElement'
  
  // ---- 'execute()' service ----
  // FALLBACK IMPLEMENTATION
  execute(...args) {
    MxI.$raiseNotImplementedError(IAction, this);
  } // IAction.execute()
} // 'IAction' interface class
MxI.$setAsInterface(IAction).$asChildOf(IElement);
exports.IAction = IAction;