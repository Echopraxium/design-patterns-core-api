//==============================================================
// i_invoker.js
// 'IInvoker' interface class
// Design Pattern:     'Command' ('Invoker' participant) 
// Other participants: 'Command'  (see 'ICommand' in i_command.js)
//                     'Receiver' (see 'IReceiver' in i_receiver.js)
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
const MxI      = require('mixin-interface/src/mixin_interface.js').MxI;
const IAction  = require('./i_action.js').IAction;
const ICommand = require('./i_command.js').ICommand;

//==================== 'IInvoker' interface class ====================
class IInvoker extends MxI.$Interface(IAction) {
  // ---- 'getId()' service ----  
  // Constraint: OPTIONAL IMPLEMENTATION
  //             This service MAY be overridden by the implementation class
  // Note:       Inherited from 'IElement' (via IElement/IAction)
  
  // ---- 'execute()' service ----  
  // Constraint: MANDATORY IMPLEMENTATION
  //             This service MUST be overridden by the implementation class
  // Note:       Inherited from 'IElement' (via IAction)
  
  // ---- 'setCommand()' service ----  
  // FALLBACK IMPLEMENTATION
  // arg_cmd: an object which implements 'ICommand'
  setCommand(arg_cmd, ...args) {
    MxI.$raiseNotImplementedError(IInvoker, this);
  } // IInvoker.setCommand()
} // 'IInvoker' interface class
MxI.$setAsInterface(IInvoker).$asChildOf(IAction);
exports.IInvoker = IInvoker;