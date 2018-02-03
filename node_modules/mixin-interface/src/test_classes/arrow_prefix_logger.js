//==============================================================
// arrow_prefix_logger.js
// Purpose: '$ArrowPrefixLogger' implementation class
//          implements 'MxI.$ILogSink' interface
// Project: 'mixin-interface' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI = require('../mixin_interface.js').MxI;

//============ 'ArrowPrefixLogger' implementation class ============
class ArrowPrefixLogger extends MxI.$Implementation(MxI.$ConsoleLogSink).$with(MxI.$ILogSink) {
  constructor(...args) {
	  super();
      this._$prefix = "-> ";
  } // 'ArrowPrefixLogger' constructor
} // 'ArrowPrefixLogger' class
MxI.$setClass(ArrowPrefixLogger).$asImplementationOf(MxI.$ILogSink);
exports.ArrowPrefixLogger = ArrowPrefixLogger;