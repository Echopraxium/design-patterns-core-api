//==============================================================
// i_iterator.js
// 'IIterator' interface class
// Design Pattern:    Iterator ('Iterator' participant)
// Other participant: 'Collection' (see 'ICollection' in i_collection.js)
// Pattern Subgroup:  Behavioral
// Reference:         https://www.tutorialspoint.com/design_pattern/iterator_pattern.htm
// Project:           'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI      = require('mixin-interface/src/mixin_interface.js').MxI;
const IElement = require('../creational/i_element.js').IElement;

//==================== 'IIterator' interface class ====================
class IIterator extends MxI.$Interface(MxI.$IBaseInterface) {
  // ---- 'first()' service ----  
  // FALLBACK IMPLEMENTATION
  // returns the first Collection's item (the item must implement 'IElement')
  first() {
    MxI.$raiseNotImplementedError(IIterator, this);
  } // IIterator.first()
  
  // ---- 'next()' service ----  
  // FALLBACK IMPLEMENTATION
  // returns 'next element in Collection'
  // returns the next Collection's item (the item must implement 'IElement')
  next() {
    MxI.$raiseNotImplementedError(IIterator, this);
  } // IIterator.next()
  
  // ---- 'hasNext()' service ----  
  // FALLBACK IMPLEMENTATION
  // returns boolean
  hasNext() {
    MxI.$raiseNotImplementedError(IIterator, this);
  } // IIterator.hasNext()
} // 'IIterator' interface class
MxI.$setAsInterface(IIterator).$asChildOf(MxI.$IBaseInterface);
exports.IIterator = IIterator;