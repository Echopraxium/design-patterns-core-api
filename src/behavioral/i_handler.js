//==============================================================
// i_handler.js
// 'IHandler' interface class
// Design Pattern:    Chain Of Responsability ('Handler' participant)
// Other participant: 'Request' (see 'IRequest' in i_request.js)
// Purpose:           Avoid coupling the sender of a request to its receiver by 
//                    giving more than one object a chance to handle the request. 
//                    Chain the receiving objects and pass the request along the 
//                    chain until an object handles it
// Pattern Subgroup:  Behavioral
// Reference:         http://www.oodesign.com/chain-of-responsibility-pattern.html
// Project:           'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI          = require('mixin-interface/src/mixin_interface.js').MxI;
const ICoreHandler = require('./i_core_handler.js').ICoreHandler;

//==================== 'IHandler' interface class ====================
class IHandler extends MxI.$Interface(ICoreHandler) {
  // ---- 'getId()' service ----  
  // Constraint: OPTIONAL IMPLEMENTATION
  //             This service MAY be overridden by the implementation class
  // Note:       Inherited from 'IElement' (via IElement/ICoreHandler)
  
  // ---- 'handleRequest()' service ----  
  // Constraint: MANDATORY IMPLEMENTATION
  //             This service MUST be overridden by the implementation class
  // Note:       Inherited from 'ICoreHandler'
  
  // ---- 'setSuccessor()' service ----  
  // FALLBACK IMPLEMENTATION
  // arg_handler: an object which implements 'IHandler'
  setSuccessor(arg_handler) {
    MxI.$raiseNotImplementedError(IHandler, this);
  } // IHandler.setSuccessor()
} // 'IHandler' interface class
MxI.$setAsInterface(IHandler).$asChildOf(ICoreHandler);
exports.IHandler = IHandler;