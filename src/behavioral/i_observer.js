//==============================================================
// i_observer.js
// 'IObserver' interface class
// Design Pattern:    Observer ('Observer' participant)
// Other participant: 'Observable' (see 'IObservable' in i_observable.js)
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
const MxI      = require('mixin-interface/src/mixin_interface.js').MxI;
const IElement = require('../creational/i_element.js').IElement;

//==================== 'IObserver' interface class ====================
class IObserver extends MxI.$Interface(IElement) {
  // ---- 'getId()' service ----  
  // Constraint: OPTIONAL IMPLEMENTATION
  //             This service MAY be overridden by the implementation class
  // Note:       Inherited from 'IElement'
  
  // ---- 'notify()' service ----
  // FALLBACK IMPLEMENTATION
  notify(...args) {
    MxI.$raiseNotImplementedError(IObserver, this);
  } // IObserver.notify()
} // 'IObserver' interface class
MxI.$setAsInterface(IObserver).$asChildOf(IElement);
exports.IObserver = IObserver;