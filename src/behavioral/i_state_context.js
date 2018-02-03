//==============================================================
// i_state_context.js
// 'IStateContext' interface class
// Design Pattern:    State ('Context' participant)
// Other participant: 'State' (see 'IState' in i_state.js)
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
const MxI    = require('mixin-interface-api/src/mixin_interface_api.js').MxI;
const IState = require('./i_state.js').IState;

//==================== 'IStateContext' interface class ====================
class IStateContext extends MxI.$Interface(MxI.$IBaseInterface) {
  // ---- 'request()' service ----
  // FALLBACK IMPLEMENTATION
  request(...args) {
    MxI.$raiseNotImplementedError(IStateContext, this);
  } // IStateContext.request()
  
  // ---- 'setState()' service ----
  // FALLBACK IMPLEMENTATION
  // arg_state: an object which implements 'IState'
  setState(arg_state) {
    MxI.$raiseNotImplementedError(IStateContext, this);
  } // IStateContext.setState()
  
  // ---- 'getState()' service ----
  // FALLBACK IMPLEMENTATION
  // returns an object which implements 'IState'
  getState() {
    MxI.$raiseNotImplementedError(IStateContext, this);
  } // IStateContext.getState()
} // 'IStateContext' interface class
MxI.$setAsInterface(IStateContext).$asChildOf(MxI.$IBaseInterface);
exports.IStateContext = IStateContext;