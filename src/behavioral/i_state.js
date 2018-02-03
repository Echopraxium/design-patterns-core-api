//==============================================================
// i_state.js
// 'IState' interface class
// Design Pattern:    State ('State' participant)
// Other participant: 'Context' (see 'IStateContext' in i_state_context.js)
// Purpose:           The State Pattern allows an object to alter its 
//                    behavior when its internal state changes.
//                    The object will appear to change its class.
// Pattern Subgroup:  Behavioral
// Reference:         http://ima.udg.edu/~sellares/EINF-ES1/StateToni.pdf
// Project:           'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI      = require('mixin-interface-api/src/mixin_interface_api.js').MxI;
const IElement = require('../i_element.js').IElement;

//==================== 'IState' interface class ====================
class IState extends MxI.$Interface(IElement) {
  // ---- 'getId()' service ----  
  // Constraint: OPTIONAL IMPLEMENTATION
  //             This service MAY be overridden by the implementation class
  // Note:       Inherited from 'IElement'
  
  // ---- 'doAction()' service ----
  // FALLBACK IMPLEMENTATION
  // action_id:   a key (e.g. a String, Integer, Uuid or Enumeration)
  // arg_context: an object which implements 'IStateContext'
  doAction(action_id, arg_context, ...args) {
    MxI.$raiseNotImplementedError(IState, this);
  } // IState.doAction()
} // 'IState' interface class
MxI.$setAsInterface(IState).$asChildOf(IElement);
exports.IState = IState;