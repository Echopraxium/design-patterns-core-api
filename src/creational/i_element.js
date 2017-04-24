//==============================================================
// i_element.js
// 'IElement' base interface class
// Purpose:           Base interface class for 'IProduct', 'IRequest', 
//                    'IAction', 'IAbstractFactory', IObservable'...
//                    This interface delegates the 'getId()' service to its 
//                    subclasses depending on their role (participant within 
//                    its Design Pattern)
//                    e.g. within 'Mediator' pattern, 'IRequest' subclass has
//                         the 'Request' role, thus the 'getId()' service has 
//                         the semantic of a 'decorating behavior'
// Project:           'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI = require('mixin-interface/src/mixin_interface.js').MxI;

//==================== 'IElement' interface class ====================
class IElement extends MxI.$Interface(MxI.$IBaseInterface) {
  // ---- 'getId()' service ----
  // FALLBACK IMPLEMENTATION
  // The semantic is that it should return the object's id
  // (e.g. a String, Integer, Uuid, Enumeration...)
  //
  // Note 1: in this specific case the 'Fallback implementation'
  //         doesn't raise an error but instead return the 
  //         'Default Null Object' ('MxI.$Null')
  //
  // Note 2: This breaks the interface axiom ("an interface class is a 
  //         pure abstract class") but on the other hand an interface is 
  //         mostly a 'contract' by which the implementation class commits
  //         to provide the services defined by the interface. Thus by 
  //         providing a fallback implementation which returns 'MxI.$Null',
  //         this allows implementation classes of its child interfaces 
  //         (e.g. 'IComponent') to be relieved from the constraint to 
  //         implement 'getId()'
  getId() {
    return MxI.$Null;
  } // IElement.getId()
} // 'IElement' interface class
MxI.$setAsInterface(IElement).$asChildOf(MxI.$IBaseInterface);
exports.IElement = IElement;