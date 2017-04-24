//==============================================================
// i_strategy.js
// 'IStrategy' interface class
// Design Pattern:    Strategy ('Strategy' participant)
// Other participant: 'Context' (see IStrategyContext in i_strategy_context.js)
// Purpose:           Define a family of algorithms, encapsulate each one, 
//                    and make them interchangeable. Lets the algorithm vary
//                    independently from clients that use it.
// Pattern Subgroup:  Behavioral
// Reference:         https://www.tutorialspoint.com/design_pattern/strategy_pattern.htm
// Project:           'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI       = require('mixin-interface/src/mixin_interface.js').MxI;
const IDelegate = require('./i_delegate.js').IDelegate;

//==================== 'IStrategy' interface class ====================
class IStrategy extends MxI.$Interface(IDelegate) {
  // ---- 'apply()' service ----  
  // Constraint: MANDATORY IMPLEMENTATION
  //             This service MUST be overridden by the implementation class
  // Note:       Inherited from 'IDelegate'
} // 'IStrategy' interface class
MxI.$setAsInterface(IStrategy).$asChildOf(IDelegate);
exports.IStrategy = IStrategy;