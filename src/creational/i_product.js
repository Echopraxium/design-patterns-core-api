//==============================================================
// i_product.js
// 'IProduct' interface class
// Design Patterns:     Abstract Factory ('Product' participant)
//                      Factory Method ('Product' participant)
//                      Builder ('Product' participant)
// Purpose:             Define an interface for a 'Product' object
// Other participants:  'Abstract Factory' (see IAbstractFactory in i_abstract_factory.js) 
//                      'Creator' (see ICreator in i_creator.js) in 'Factory Method' pattern
//                      'Builder' (see IBuilder in i_builder.js) in 'Builder' pattern
// Pattern Subgroup:    Creational
// Reference:           http://ima.udg.edu/~sellares/EINF-ES1/FactoryToni.pdf
// Project:             'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI      = require('mixin-interface/src/mixin_interface.js').MxI;
const IElement = require('../creational/i_element.js').IElement;

//==================== 'IProduct' interface class ====================
class IProduct extends MxI.$Interface(IElement) {
  // ---- 'getId()' service ----  
  // Constraint: OPTIONAL IMPLEMENTATION
  //             This service MAY be overridden by the implementation class
  // Note:       Inherited from 'IElement'
  
  // ---- 'getAttribute()' service ----
  // FALLBACK IMPLEMENTATION
  // attribute_id: a key (e.g. a String, Integer, Uuid or Enumeration)
  getAttribute(attribute_id) {
    MxI.$raiseNotImplementedError(IProduct, this);
  } // IProduct.getAttribute()
} // 'IProduct' interface class
MxI.$setAsInterface(IProduct).$asChildOf(IElement);
exports.IProduct = IProduct;