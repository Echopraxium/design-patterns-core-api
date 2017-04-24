//==============================================================
// i_abstract_factory.js
// 'IAbstractFactory' interface class
// Design Pattern:      Abstract Factory
// Related participant: 'Product' (see 'IProduct' in i_product.js)
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
const IElement = require('./i_element.js').IElement;
const IProduct = require('./i_product.js').IProduct;

//==================== 'IAbstractFactory' interface class ====================
class IAbstractFactory extends MxI.$Interface(IElement) {
  // ---- 'getId()' service ----  
  // Constraint: OPTIONAL IMPLEMENTATION
  //             This service MAY be overridden by the implementation class
  // Note:       Inherited from 'IElement'
  
  // ---- 'createProduct()' service ----
  // FALLBACK IMPLEMENTATION
  // product_id: a key (e.g. a String, Integer, Uuid or Enumeration)
  // returns an object which implements 'IProduct'
  createProduct(product_id, ...args) {
    MxI.$raiseNotImplementedError(IAbstractFactory, this);
  } // IAbstractFactory.create()
} // 'IAbstractFactory' interface class
MxI.$setAsInterface(IAbstractFactory).$asChildOf(IElement);
exports.IAbstractFactory = IAbstractFactory;