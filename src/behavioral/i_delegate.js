//==============================================================
// i_delegate.js
// 'IDelegate' base interface class
// Purpose:           Base interface class for 'IImplementor', 'IStrategy' and
//                    'IReceiver'
//                    This interface delegates the 'apply()' service to its 
//                    subclasses depending on their role (participant within 
//                    its Design Pattern)
//                    e.g. within 'Strategy' pattern, 'IStrategy' subclass has
//                         the 'Strategy' role, 'apply()' service has the semantic
//                         of 'ask the delegate to apply its strategy'.
// Pattern Subgroup:  Behavioral
// Project:           'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI = require('mixin-interface-api/src/mixin_interface_api.js').MxI;

//==================== 'IDelegate' interface class ====================
class IDelegate extends MxI.$Interface(MxI.$IBaseInterface) {
  // ---- 'apply()' service ----
  // FALLBACK IMPLEMENTATION
  apply(...args) {
    MxI.$raiseNotImplementedError(IDelegate, this);
  } // IDelegate.apply()
} // 'IDelegate' interface class
MxI.$setAsInterface(IDelegate).$asChildOf(MxI.$IBaseInterface);
exports.IDelegate = IDelegate;