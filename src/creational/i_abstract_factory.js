//==============================================================
// i_abstract_factory.js
// 'IAbstractFactory' interface class
// Design Pattern:      Abstract Factory
// Related participant: 'Element' (see 'IElement' in i_element.js)
// Purpose:             The Abstract Factory Pattern provides an interface for creating
//                      families of related or dependent objects without specifying 
//                      their concrete classes.
// Pattern Subgroup:    Creational
// Status:              Ready
// Reference:           http://ima.udg.edu/~sellares/EINF-ES1/AbstractFactoryToni.pdf
//                      http://www.mcdonaldland.info/files/designpatterns/designpatternscard.pdf
// Project:             'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI      = require('mixin-interface/src/mixin_interface.js').MxI;
const IElement = require('../i_element.js').IElement;

//==================== 'IAbstractFactory' interface class ====================
class IAbstractFactory extends MxI.$Interface(IElement) {
  // ---- 'getId()' service ----  
  // Constraint: OPTIONAL IMPLEMENTATION
  //             This service MAY be overridden by the implementation class
  // Note:       Inherited from 'IElement'
  
  // ---- 'createElement()' service ----
  // FALLBACK IMPLEMENTATION
  // element_id: a key (e.g. a String, Integer, Uuid or Enumeration)
  // returns an object which implements 'IElement'
  createElement(element_id, ...args) {
    MxI.$raiseNotImplementedError(IAbstractFactory, this);
  } // IAbstractFactory.createElement()
} // 'IAbstractFactory' interface class
MxI.$setAsInterface(IAbstractFactory).$asChildOf(IElement);
exports.IAbstractFactory = IAbstractFactory;