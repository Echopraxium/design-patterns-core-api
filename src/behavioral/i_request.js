//==============================================================
// i_request.js
// 'IRequest' interface class
// Design Pattern:    Chain Of Responsability ('Request' participant)
// Other participant: 'Handler' (see 'IHandler' in i_handler.js)
// Purpose:           Avoid coupling the sender of a request to its receiver by 
//                    giving more than one object a chance to handle the request. 
//                    Chain the receiving objects and pass the request along the 
//                    chain until an object handles it.
// Pattern Subgroup:  Behavioral
// Reference:         http://www.oodesign.com/chain-of-responsibility-pattern.html
// Project:           'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI      = require('mixin-interface-api/src/mixin_interface_api.js').MxI;
const IElement = require('../i_element.js').IElement;

//==================== 'IRequest' interface class ====================
class IRequest extends MxI.$Interface(IElement) {
  // ---- 'getId()' service ----  
  // Constraint: OPTIONAL IMPLEMENTATION
  //             This service MAY be overridden by the implementation class
  // Note:       Inherited from 'IElement'
  
  // ---- 'getValue()' service ----
  // FALLBACK IMPLEMENTATION
  getValue(...args) {
    MxI.$raiseNotImplementedError(IRequest, this);
  } // IRequest.getValue()
  
  // ---- 'getDescription()' service ----
  // FALLBACK IMPLEMENTATION
  getDescription(...args) {
    MxI.$raiseNotImplementedError(IRequest, this);
  } // IRequest.getDescription()
} // 'IRequest' interface class
MxI.$setAsInterface(IRequest).$asChildOf(IElement);
exports.IRequest = IRequest;