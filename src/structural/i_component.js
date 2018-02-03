//==============================================================
// i_component.js
// 'IComponent' interface class
// Design Pattern:    Composite ('Component' participant)
// Other participant: 'Composite' (see IComposite in i_composite.js)
//                    'Leaf' (see ILeaf in i_leaf.js)
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
const MxI            = require('mixin-interface-api/src/mixin_interface_api.js').MxI;
const ICoreComponent = require('./i_core_component.js').ICoreComponent;

//==================== 'IComponent' interface class ====================
class IComponent extends MxI.$Interface(ICoreComponent) {
  // ---- 'getId()' service ----  
  // Constraint: OPTIONAL IMPLEMENTATION
  //             This service MAY be overridden by the implementation class
  // Note:       Inherited from 'IElement' (via IElement/IAction/ICoreComponent)
  
  // ---- 'execute()' service ----  
  // Constraint: MANDATORY IMPLEMENTATION
  //             This service MUST be overridden by the implementation class
  // Note:       Inherited from 'ICoreComponent' (via IAction/ICoreComponent)

  // ---- 'addChild()' service ----  
  // FALLBACK IMPLEMENTATION
  // arg_child: an object which implements 'IComponent'
  // Advice: return a 'child_id' (e.g. String, Integer, Uuid or Enumeration)
  addChild(arg_child) {
    MxI.$raiseNotImplementedError(IComponent, this);
  } // IComponent.addChild()
  
  // ---- 'removeChild()' service ----  
  // FALLBACK IMPLEMENTATION
  // arg_child: an object which implements 'IComponent'
  removeChild(arg_child) {
    MxI.$raiseNotImplementedError(IComponent, this);
  } // IComponent.removeChild()
  
  // ---- 'removeChildById()' service ----  
  // FALLBACK IMPLEMENTATION
  // child_id: a key (e.g. String, Integer, Uuid or Enumeration)
  removeChildById(child_id) {
    MxI.$raiseNotImplementedError(IComponent, this);
  } // IComponent.removeChild()
  
  // ---- 'getChild()' service ----
  // child_id: a key (e.g. String, Integer, Uuid or Enumeration)
  // returns an object which implements 'IComponent'
  getChild(child_id) {
    MxI.$raiseNotImplementedError(IComponent, this);
  } // IComponent.getChild()
} // 'IComponent' interface class
MxI.$setAsInterface(IComponent).$asChildOf(ICoreComponent);
exports.IComponent = IComponent;