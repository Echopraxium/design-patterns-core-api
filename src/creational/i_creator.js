//==============================================================
// i_creator.js
// 'ICreator' interface class
// Design Pattern:      Factory Method ('Creator' participant)
// Related participant: 'Element' (see 'IElement' in i_element.js)
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
const IElement = require('../i_element.js').IElement;

//==================== 'ICreator' interface class ====================
class ICreator extends MxI.$Interface(MxI.$IBaseInterface) {
  // ---- 'getFactoryElement()' service ----
  // FALLBACK IMPLEMENTATION
  // returns an object which implements 'IElement'
  getFactoryElement() {
    MxI.$raiseNotImplementedError(ICreator, this);
  } // ICreator.getFactoryElement()
} // 'ICreator' interface class
MxI.$setAsInterface(ICreator).$asChildOf(MxI.$IBaseInterface);
exports.ICreator = ICreator;