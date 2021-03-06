//==============================================================
// i_prototype.js
// 'IPrototype' interface class
// Status:  To Be Done
// Project: 'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI = require('mixin-interface-api/src/mixin_interface_api.js').MxI;

//==================== 'IPrototype' interface class ====================
class IPrototype extends MxI.$Interface(MxI.$IBaseInterface) {
  // ---- 'create()' service ----  
  // FALLBACK IMPLEMENTATION
  create() {
    MxI.$raiseNotImplementedError(IPrototype, this);
  } // IPrototype.create()
} // 'IPrototype' interface class
MxI.$setAsInterface(IPrototype).$asChildOf(MxI.$IBaseInterface);
exports.IPrototype = IPrototype;