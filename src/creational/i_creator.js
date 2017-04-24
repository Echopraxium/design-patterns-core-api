//==============================================================
// i_creator.js
// 'ICreator' interface class
// Design Pattern:      Factory Method ('Creator' participant)
// Related participant: 'Product' (see 'IProduct' in i_product.js)
// Purpose:             Define an interface for creating an object, but let subclasses decide 
//                      which class to instantiate. Lets a class defer instantiation to subclasses.
// Pattern Subgroup:    Creational
// Reference:           http://ima.udg.edu/~sellares/EINF-ES1/FactoryToni.pdf
// Project:             'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI      = require('mixin-interface/src/mixin_interface.js').MxI;
const IProduct = require('./i_product.js').IProduct;

//==================== 'ICreator' interface class ====================
class ICreator extends MxI.$Interface(MxI.$IBaseInterface) {
  // ---- 'getFactoryProduct()' service ----
  // FALLBACK IMPLEMENTATION
  // returns an object which implements 'IProduct'
  getFactoryProduct() {
    MxI.$raiseNotImplementedError(ICreator, this);
  } // ICreator.getFactoryProduct()
} // 'ICreator' interface class
MxI.$setAsInterface(ICreator).$asChildOf(MxI.$IBaseInterface);
exports.ICreator = ICreator;