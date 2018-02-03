//==============================================================
// i_builder.js
// 'IBuilder' interface class
// Design Pattern:      Builder
// Related participant: 'Element' (see 'IElement' in i_element.js)
// Purpose:             Separate the construction of a complex object from its
//                      representing so that the same construction process can 
//                      create different representations.
// Related class:       'Element' (see IElement in i_element.js)
// Pattern Subgroup:    Creational
// Reference:           http://www.mcdonaldland.info/files/designpatterns/designpatternscard.pdf
// Project:             'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI      = require('mixin-interface-api/src/mixin_interface_api.js').MxI;
const IElement = require('../i_element.js').IElement;

//==================== 'IBuilder' interface class ====================
class IBuilder extends MxI.$Interface(MxI.$IBaseInterface) {
  // ---- 'getElement()' service ----
  // FALLBACK IMPLEMENTATION
  // Returns an object which implements 'IElement'
  getElement() {
    MxI.$raiseNotImplementedError(IBuilder, this);
  } // IBuilder.getElement()
  
  // ---- 'buildPart()' service ----
  // FALLBACK IMPLEMENTATION
  // part_id: a key (e.g. a String, Integer, Uuid or Enumeration)
  buildPart(part_id, ...args) {
    MxI.$raiseNotImplementedError(IBuilder, this);
  } // IBuilder.buildPart()
} // 'IBuilder' interface class
MxI.$setAsInterface(IBuilder).$asChildOf(MxI.$IBaseInterface);
exports.IBuilder = IBuilder;