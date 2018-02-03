//==============================================================
// i_command.js
// 'ICommand' interface class
// Design Pattern:     Command ('Command' participant)
// Other participants: 'Invoker'  (see 'IInvoker' in i_invoker.js)
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
const MxI     = require('mixin-interface-api/src/mixin_interface_api.js').MxI;
const IAction = require('./i_action.js').IAction;

//==================== 'ICommand' interface class ====================
class ICommand extends MxI.$Interface(IAction) {
  // ---- 'execute()' service ----  
  // Constraint: MANDATORY IMPLEMENTATION
  //             This service MUST be overridden by the implementation class
  // Note:       Inherited from 'IAction'
  
  // ---- 'undo()' service ----  
  // FALLBACK IMPLEMENTATION
  undo(...args) {
    MxI.$raiseNotImplementedError(ICommand, this);
  } // ICommand.undo()
  
  // ---- 'redo()' service ----  
  // FALLBACK IMPLEMENTATION
  redo(...args) {
    MxI.$raiseNotImplementedError(ICommand, this);
  } // ICommand.redo()
} // 'ICommand' interface class
MxI.$setAsInterface(ICommand).$asChildOf(IAction);
exports.ICommand = ICommand;