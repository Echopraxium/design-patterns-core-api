//==============================================================
// i_subject.js
// 'ISubject' interface class
// Design Patterns:     Proxy ('Element' participant)
// Purpose:             Provides a surrogate or placeholder for another 
//                      object to control access to it
// Other participants:  'Proxy' (see IProxy in i_proxy.js) 
// Pattern Subgroup:    Structural
// Reference:           http://ima.udg.edu/~sellares/EINF-ES1/ProxyToni.pdf
// Project:             'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI      = require('mixin-interface-api/src/mixin_interface_api.js').MxI;
const IElement = require('../i_element.js').IElement;

//==================== 'ISubject' interface class ====================
class ISubject extends MxI.$Interface(IElement) {
  // ---- 'getId()' service ----  
  // Constraint: OPTIONAL IMPLEMENTATION
  //             This service MAY be overridden by the implementation class
  // Note:       Inherited from 'IElement'
  
  // ---- 'request()' service ----  
  // FALLBACK IMPLEMENTATION
  // request_id: a key (e.g. a String, Integer, Uuid or Enumeration)
  request(request_id, ...args) {
    MxI.$raiseNotImplementedError(ISubject, this);
  } // ISubject.request()
} // 'ISubject' interface class
MxI.$setAsInterface(ISubject).$asChildOf(IElement);
exports.ISubject = ISubject;