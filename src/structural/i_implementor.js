//==============================================================
// i_implementor.js
// 'IImplementor' interface class
// Design Pattern:    Bridge ('Implementor' participant)
// Purpose:           Decouple an abstraction from its implementation so that 
//                    the two can vary independently.
// Pattern Subgroup:  Structural
// Reference:         http://www.mcdonaldland.info/files/designpatterns/designpatternscard.pdf
// Project:           'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI       = require('mixin-interface-api/src/mixin_interface_api.js').MxI;
const IDelegate = require('../behavioral/i_delegate.js').IDelegate;

//==================== 'IImplementor' interface class ====================
class IImplementor extends MxI.$Interface(IDelegate) {
  // ---- 'apply()' service ----  
  // Constraint: MANDATORY IMPLEMENTATION
  //             This service MUST be overridden by the implementation class
  // Note:       Inherited from 'IDelegate'
} // 'IImplementor' class
MxI.$setAsInterface(IImplementor).$asChildOf(IDelegate);
exports.IImplementor = IImplementor;