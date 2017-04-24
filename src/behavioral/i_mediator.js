//==============================================================
// i_mediator.js
// 'IMediator' interface class
// Design Pattern:    Mediator ('Mediator' participant)
// Other participant: 'Colleague' (see 'IColleague' in i_colleague.js)
//                    'Request'   (see 'IRequest' in i_request.js)
// Purpose:           Define an object that encapsulates how a set of
//                    objects interact. Promotes loose coupling by
//                    keeping objects from referring to each other
//                    explicitly and it lets you vary their 
//                    interactions independently.
// Pattern Subgroup:  Behavioral
// Reference:         http://ima.udg.edu/~sellares/EINF-ES1/MediatorToni.pdf
// Project:           'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI          = require('mixin-interface/src/mixin_interface.js').MxI;
const ICoreHandler = require('./i_core_handler.js').ICoreHandler;

//==================== 'IHandler' interface class ====================
class IMediator extends MxI.$Interface(ICoreHandler) {
  // ---- 'getId()' service ----  
  // Constraint: OPTIONAL IMPLEMENTATION
  //             This service MAY be overridden by the implementation class
  // Note:       Inherited from 'IElement' (via IElement/ICoreHandler)
  
  // ---- 'handleRequest()' service ----  
  // Constraint: MANDATORY IMPLEMENTATION
  //             This service MUST be overridden by the implementation class
  // Note:       Inherited from 'ICoreHandler' 
} // 'IMediator' interface class
MxI.$setAsInterface(IMediator).$asChildOf(ICoreHandler);
exports.IMediator = IMediator;