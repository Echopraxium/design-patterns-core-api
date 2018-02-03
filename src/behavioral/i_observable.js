//==============================================================
// i_observable.js
// 'IObservable' interface class
// Design Pattern:    Observer ('Observable' participant)
// Other participant: 'Observer' (see 'IObserver' in i_observer.js)
// Purpose:           The Observer Pattern defines a one-to-many dependency
//                    between objects so that when one object changes state, 
//                    all of its dependents are notified and updated automatically.
// Pattern Subgroup:  Behavioral
// Reference:         http://ima.udg.edu/~sellares/EINF-ES1/ObserverToni.pdf
// Project:           'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI       = require('mixin-interface-api/src/mixin_interface_api.js').MxI;
const IElement  = require('../i_element.js').IElement;
const IObserver = require('./i_observer.js').IObserver;

//==================== 'IObservable' interface class ====================
class IObservable extends MxI.$Interface(IElement) {
  // ---- 'getId()' service ----  
  // Constraint: OPTIONAL IMPLEMENTATION
  //             This service MAY be overridden by the implementation class
  // Note:       Inherited from 'IElement'
  
  // ---- 'attach()' service ----
  // FALLBACK IMPLEMENTATION
  // state_ids: array of keys (e.g. a String, Integer, Uuid or Enumeration).
  //            Thus the Observable only notifies the observers which
  //            have 'subscribed' to a given subset of the state
  //            changes which may occur in the Observable. 
  attach(arg_observer, state_ids) {
    MxI.$raiseNotImplementedError(IObservable, this);
  } // IObservable.attach()
  
  // ---- 'detach()' service ----
  // FALLBACK IMPLEMENTATION
  // arg_observer: an object which implements 'IObserver'
  detach(arg_observer) {
    MxI.$raiseNotImplementedError(IObservable, this);
  } // IObservable.detach()
  
  // ---- 'notify()' service ----
  // FALLBACK IMPLEMENTATION
  notify(...args) {
    MxI.$raiseNotImplementedError(IObservable, this);
  } // IObservable.notify()
} // 'IObservable' interface class
MxI.$setAsInterface(IObservable).$asChildOf(IElement);
exports.IObservable = IObservable;