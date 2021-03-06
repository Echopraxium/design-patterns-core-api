//==============================================================
// i_adaptee.js
// 'IAdaptee' interface class
// Design Pattern:    Adapter ('Adaptee' participant)
// Other participant: 'Adapter' (see 'IAdapter' in i_adapter.js)
// Purpose:           Convert the interface of a class into another interface clients expect. 
//                    Lets classes work together that couldn't otherwise because of incompatible
//                    interfaces.
// Pattern Subgroup:  Structural
// Reference:         http://ima.udg.edu/~sellares/EINF-ES1/AdapterToni.pdf
// Project:           'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI = require('mixin-interface-api/src/mixin_interface_api.js').MxI;

//==================== 'IAdaptee' interface class ====================
class IAdaptee extends MxI.$Interface(MxI.$IBaseInterface) {
  // ---- 'specificRequest()' service ----  
  // FALLBACK IMPLEMENTATION
  // request_id: a key (e.g. a String, Integer, Uuid or Enumeration)
  specificRequest(request_id, ...args) {
    MxI.$raiseNotImplementedError(IAdaptee, this);
  } // IAdaptee.specificRequest()
} // 'IAdaptee' interface class
MxI.$setAsInterface(IAdaptee).$asChildOf(MxI.$IBaseInterface);
exports.IAdaptee = IAdaptee;