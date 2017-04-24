//==============================================================
// i_proxy.js
// 'IProxy' interface class
// Design Patterns:     Proxy ('Proxy' participant)
// Purpose:             Provides a surrogate or placeholder for another 
//                      object to control access to it
// Other participants:  'Subject' (see ISubject in i_subject.js) 
// Pattern Subgroup:    Structural
// Reference:           http://ima.udg.edu/~sellares/EINF-ES1/ProxyToni.pdf
// Project:             'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI      = require('mixin-interface/src/mixin_interface.js').MxI;
const ISubject = require('./i_subject.js').ISubject;

//==================== 'IProxy' interface class ====================
class IProxy extends MxI.$Interface(ISubject) {
  // ---- 'getId()' service ----  
  // Constraint: OPTIONAL IMPLEMENTATION
  //             This service MAY be overridden by the implementation class
  // Note:       Inherited from 'ISubject' (via IElement/ISubject)
  
  // ---- 'request()' service ----  
  // Constraint: MANDATORY IMPLEMENTATION
  //             This service MUST be overridden by the implementation class
  // Note:       Inherited from 'ISubject'
} // 'IProxy' interface class
MxI.$setAsInterface(IProxy).$asChildOf(ISubject);
exports.IProxy = IProxy;