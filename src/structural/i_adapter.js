//==============================================================
// i_adapter.js
// 'IAdapter' interface class
// Design Pattern:    Adapter ('Adapter' participant)
// Other participant: 'Adaptee' (see 'IAdaptee' in i_adaptee.js)
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
const MxI      = require('mixin-interface-api/src/mixin_interface_api.js').MxI;
const ISubject = require('./i_subject.js').ISubject;

//==================== 'IAdapter' interface class ====================
class IAdapter extends MxI.$Interface(ISubject) {
  // ---- 'getId()' service ----  
  // Constraint: OPTIONAL IMPLEMENTATION
  //             This service MAY be overridden by the implementation class
  // Note:       Inherited from 'IElement' (via IElement/ISubject)
  
  // ---- 'request()' service ----  
  // Constraint: MANDATORY IMPLEMENTATION
  //             This service MUST be overridden by the implementation class
  // Note:       Inherited from 'ISubject'
} // 'IAdapter' interface class
MxI.$setAsInterface(IAdapter).$asChildOf(ISubject);
exports.IAdapter = IAdapter;