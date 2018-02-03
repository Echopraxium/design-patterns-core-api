//==============================================================
// i_strategy_context.js
// 'IStrategyContext' interface class
// Design Patterns:   Strategy ('Context' participant)    
// Other participant: 'Strategy' (see 'IStrategy' in i_strategy.js)           
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
const MxI = require('mixin-interface-api/src/mixin_interface_api.js').MxI;

//==================== 'IStrategyContext' interface class ====================
class IStrategyContext extends MxI.$Interface(MxI.$IBaseInterface) {
  // ---- 'applyStrategy()' service ----
  // FALLBACK IMPLEMENTATION
  applyStrategy(...args) {
    MxI.$raiseNotImplementedError(IStrategyContext, this);
  } // IStrategy.applyStrategy()
} // 'IStrategyContext' interface class
MxI.$setAsInterface(IStrategyContext).$asChildOf(MxI.$IBaseInterface);
exports.IStrategyContext = IStrategyContext;