//==============================================================
// i_composite.js
// 'IComposite' interface class
// Design Pattern:    Composite ('Component' participant)
// Other participant: 'Component' (see 'IComponent' in i_component.js)
//                    'Leaf'      (see 'ILeaf' in i_leaf.js)
// Purpose:           allows you to compose objects into tree structures 
//                    to represent whole-part hierarchies. Composite lets 
//                    clients treat individual objects and composition 
//                    of objects uniformly
// Pattern Subgroup:  Structural
// Reference:         http://ima.udg.edu/~sellares/EINF-ES1/CompositeToni.pdf
// Project:           'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI        = require('mixin-interface/src/mixin_interface.js').MxI;
const IComponent = require('./i_component.js').IComponent;

//==================== 'IComposite' interface class ====================
class IComposite extends MxI.$Interface(IComponent) {
  // ---- 'getId()' service ----  
  // Constraint: OPTIONAL IMPLEMENTATION
  //             This service MAY be overridden by the implementation class
  // Note:       Inherited from 'IElement' (via IElement/IAction/ICoreComponent/IComponent)
  
  // ---- 'execute()' service ----  
  // Constraint: MANDATORY IMPLEMENTATION
  //             This service MUST be overridden by the implementation class
  // Note:       Inherited from 'IAction' (via IAction/ICoreComponent/IComponent)
  
  // ---- 'addChild()' service ----  
  // Constraint: MANDATORY IMPLEMENTATION
  //             This service MUST be overridden by the implementation class
  // Note:       Inherited from 'IComponent'
  
  // ---- 'removeChild()' service ----  
  // Constraint: MANDATORY IMPLEMENTATION
  //             This service MUST be overridden by the implementation class
  // Note:       Inherited from 'IComponent'
  
  // ---- 'removeChildById()' service ----  
  // Constraint: MANDATORY IMPLEMENTATION
  //             This service MUST be overridden by the implementation class
  // Note:       Inherited from 'IComponent'
  
  // ---- 'getChild()' service ----  
  // Constraint: MANDATORY IMPLEMENTATION
  //             This service MUST be overridden by the implementation class
  // Note:       Inherited from 'IComponent'
} // 'IComposite' interface class
MxI.$setAsInterface(IComposite).$asChildOf(IComponent);
exports.IComposite = IComposite;