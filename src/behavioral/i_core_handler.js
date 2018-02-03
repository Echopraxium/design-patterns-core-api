//==============================================================
// i_core_handler.js
// 'ICoreHandler' base interface class
// Purpose:           Base interface class for 'IHandler' and 'IMediator'
//                    This interface delegates the 'handleRequest()' service to its 
//                    subclasses depending on their role (participant within 
//                    its Design Pattern)
//                    e.g. within 'Mediator' pattern, 'IMediator' subclass has the
//                         'Mediator' role, thus the 'handleRequest()' service has  
//                         the semantic of a 'being a mediator for Colleague objects'
// Pattern Subgroup:  Behavioral
// Project:           'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI      = require('mixin-interface-api/src/mixin_interface_api.js').MxI;
const IElement = require('../i_element.js').IElement;
const IRequest = require('./i_request.js').IRequest;

//==================== 'ICoreHandler' interface class ====================
class ICoreHandler extends MxI.$Interface(IElement) {
  // ---- 'getId()' service ----  
  // Constraint: OPTIONAL IMPLEMENTATION
  //             This service MAY be overridden by the implementation class
  // Note:       Inherited from 'IElement'
  
  // ---- 'handleRequest()' service ----
  // FALLBACK IMPLEMENTATION
  // arg_request: an object which implements 'IRequest'
  handleRequest(arg_request, ...args) {
    MxI.$raiseNotImplementedError(ICoreHandler, this);
  } // ICoreHandler.handleRequest()
} // 'ICoreHandler' interface class
MxI.$setAsInterface(ICoreHandler).$asChildOf(IElement);
exports.ICoreHandler = ICoreHandler;