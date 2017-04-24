//==============================================================
// i_colleague.js
// 'IColleague' interface class
// Design Pattern:    Mediator ('Colleague' participant)
// Other participant: 'Mediator' (see 'IMediator' in i_mediator.js)
//                    'Request'  (see 'IRequest' in i_request.js)
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
const MxI      = require('mixin-interface/src/mixin_interface.js').MxI;
const IElement = require('../creational/i_element.js').IElement;

//==================== 'IColleague' interface class ====================
class IColleague extends MxI.$Interface(IElement) {
  // ---- 'getId()' service ----  
  // Constraint: OPTIONAL IMPLEMENTATION
  //             This service MAY be overridden by the implementation class
  // Note:       Inherited from 'IElement' 
  
  // ---- 'getMediator()' service ----  
  // FALLBACK IMPLEMENTATION
  // returns an object which implements 'IMediator'
  getMediator() {
    MxI.$raiseNotImplementedError(IColleague, this);
  } // IColleague.getMediator()

  // ---- 'setMediator()' service ----  
  // FALLBACK IMPLEMENTATION
  // arg_mediator: an object which implements 'IMediator'
  setMediator(arg_mediator) {
    MxI.$raiseNotImplementedError(IColleague, this);
  } // IColleague.setMediator()
} // 'IMediator' interface class
MxI.$setAsInterface(IColleague).$asChildOf(IElement);
exports.IColleague = IColleague;