//======================================================================
// cat.js
// Purpose: 'Cat' implementation class, implements 'IMammal' interface
// Project: 'mixin-interface-api' npm package
//======================================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI     = require('../mixin_interface_api.js').MxI;
const Animal  = require('./animal.js').Animal;
const IMammal = require('./i_mammal.js').IMammal;

//==================== 'Cat' implementation class ====================
class Cat extends MxI.$Implementation(Animal).$with(IMammal) {
  constructor() {
    super();
  } // 'Cat' constructor

  suckle() {
    MxI.$Log.write("--> Cat.suckle: '%s'", this);
  } // IMammal.suckle()

  __run() {
    MxI.$Log.write("--> Cat.run: '%s'", this);
  } // IAnimal.run()

  __live() {
    MxI.$Log.write("--> Cat.live: '%s'", this);
  } // ILifeForm.live()
} // 'Cat' class
MxI.$setClass(Cat).$asImplementationOf(IMammal);
exports.Cat = Cat;
