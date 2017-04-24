//==============================================================
// i_facade.js
// 'IFacade' interface class
// Design Pattern:    Facade ('Facade' participant)
// Purpose:           Provides a unified interface to a set of interfaces in a subsytem.
//                    Façade defines a higher-level interface that makes the subsystem 
//                    easier to use.
// Pattern Subgroup:  Structural
// Reference:         https://www.tutorialspoint.com/design_pattern/facade_pattern.htm
// Project:           'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI         = require('mixin-interface/src/mixin_interface.js').MxI;
const ICollection = require('../behavioral/i_collection.js').ICollection;

//==================== 'IFacade' interface class ====================
class IFacade extends MxI.$Interface(MxI.$IBaseInterface) {
  // ---- 'doAction()' service ----  
  // FALLBACK IMPLEMENTATION
  // action_id:     a key (e.g. String, Integer, Uuid or Enumeration),
  //                this allows the client to select a specific action
  doAction(action_id, ...args) {
    MxI.$raiseNotImplementedError(IFacade, this);
  } // IFacade.doAction()
  
  // ---- 'getActionIds()' service ----  
  // FALLBACK IMPLEMENTATION
  // returns an object which implements 'ICollection' 
  getActionIds() {
    MxI.$raiseNotImplementedError(IFacade, this);
  } // IFacade.getActionIds()
} // 'IFacade' interface class
MxI.$setAsInterface(IFacade).$asChildOf(MxI.$IBaseInterface);
exports.IFacade = IFacade;