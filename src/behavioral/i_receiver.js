//==============================================================
// i_receiver.js
// 'IReceiver' interface class
// Design Pattern:     'Command' ('Receiver' participant) 
// Other participants: 'Command' (see 'ICommand' in i_command.js)
//                     'Invoker' (see 'IInvoker' in i_invoker.js)
// Purpose:            The Command Pattern encapsulates a request as an object, 
//                     thereby letting you parameterize other objects with different
//                     requests, queue or log requests, and support undoable operations
// Pattern Subgroup:   Behavioral
// Reference:          http://ima.udg.edu/~sellares/EINF-ES1/CommandToni.pdf
// Project:            'design-patterns-api' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI       = require('mixin-interface/src/mixin_interface.js').MxI;
const IDelegate = require('./i_delegate.js').IDelegate;
const ICommand  = require('./i_command.js').ICommand;

//==================== 'IReceiver' interface class ====================
class IReceiver extends MxI.$Interface(IDelegate) {
  // ---- 'apply()' service ----  
  // Constraint: MANDATORY IMPLEMENTATION
  //             This service MUST be overridden by the implementation class
  // Note:       Inherited from 'IDelegate'
  
  // ---- 'setCommand()' service ----  
  // FALLBACK IMPLEMENTATION
  // arg_cmd: an object which implements 'ICommand'
  setCommand(arg_cmd, ...args) {
    MxI.$raiseNotImplementedError(IReceiver, this);
  } // IReceiver.setCommand()
} // 'IReceiver' interface class
MxI.$setAsInterface(IReceiver).$asChildOf(IDelegate);
exports.IReceiver = IReceiver;