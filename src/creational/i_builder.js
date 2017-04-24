//==============================================================
// i_builder.js
// 'IBuilder' interface class
// Design Pattern:      Builder
// Related participant: 'Product' (see 'IProduct' in i_product.js)
// Purpose:             Separate the construction of a complex object from its
//                      representing so that the same construction process can 
//                      create different representations.
// Related class:       'Product' (see IProduct in i_product.js)
// Pattern Subgroup:    Creational
// Reference:           http://www.mcdonaldland.info/files/designpatterns/designpatternscard.pdf
// Project:             'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI      = require('mixin-interface/src/mixin_interface.js').MxI;
const IProduct = require('./i_product.js').IProduct;

//==================== 'IBuilder' interface class ====================
class IBuilder extends MxI.$Interface(MxI.$IBaseInterface) {
  // ---- 'getProduct()' service ----
  // FALLBACK IMPLEMENTATION
  // Returns an object which implements 'IProduct'
  getProduct() {
    MxI.$raiseNotImplementedError(IBuilder, this);
  } // IBuilder.getProduct()
  
  // ---- 'buildPart()' service ----
  // FALLBACK IMPLEMENTATION
  // part_id: a key (e.g. a String, Integer, Uuid or Enumeration)
  buildPart(part_id, ...args) {
    MxI.$raiseNotImplementedError(IBuilder, this);
  } // IBuilder.buildPart()
} // 'IBuilder' interface class
MxI.$setAsInterface(IBuilder).$asChildOf(MxI.$IBaseInterface);
exports.IBuilder = IBuilder;