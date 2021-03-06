//==============================================================
// i_object_pool.js
// 'IObjectPool' interface class
// Status:  To Be Done
// Project: 'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI = require('mixin-interface-api/src/mixin_interface_api.js').MxI;

//==================== 'IObjectPool' interface class ====================
class IObjectPool extends MxI.$Interface(MxI.$IBaseInterface) {
  // ---- 'create()' service ----
  // FALLBACK IMPLEMENTATION
  create() {
    MxI.$raiseNotImplementedError(IObjectPool, this);
  } // IObjectPool.create()
} // 'IObjectPool' interface class
MxI.$setAsInterface(IObjectPool).$asChildOf(MxI.$IBaseInterface);
exports.IObjectPool = IObjectPool;