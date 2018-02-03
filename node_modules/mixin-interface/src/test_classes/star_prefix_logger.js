//==============================================================
// star_prefix_logger.js
// Purpose: '$StarPrefixLogger' implementation class
//          implements 'MxI.$ILogSink' interface
// Project: 'mixin-interface' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI = require('../mixin_interface.js').MxI;

//============ 'StarPrefixLogger' implementation class ============
class StarPrefixLogger extends MxI.$Implementation(MxI.$ConsoleLogSink).$with(MxI.$ILogSink) {
  constructor(...args) {
	  super();
      this._$prefix = "* ";
  } // 'StarPrefixLogger' constructor
} // 'StarPrefixLogger' class
MxI.$setClass(StarPrefixLogger).$asImplementationOf(MxI.$ILogSink);
exports.StarPrefixLogger = StarPrefixLogger;