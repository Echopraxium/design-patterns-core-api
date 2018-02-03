//==============================================================
// flying_fish.js
// Purpose: 'FlyingFish' implementation class which implements 4 interfaces:
//          - 'IBird' (child of 'IAnimal')
//          - 'IFish' (child of 'IAnimal')
//          as well as  (via its parent class 'Animal'):
//          - 'ILifeForm'
//          - 'IAnimal' (child of 'ILifeForm')
// Project: 'mixin-interface' npm package
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI             = require('../mixin_interface.js').MxI;
const Animal          = require('mixin-interface-api/src/test_classes/animal.js').Animal;
const IAnimal         = require('mixin-interface-api/src/test_classes/i_animal.js').IAnimal;
const IBird           = require('./i_bird.js').IBird;
const IFish           = require('./i_fish.js').IFish;

//==================== 'FlyingFish' implementation class ====================
class FlyingFish extends MxI.$Implementation(Animal).$with(IBird, IFish) {
  constructor() {
    super();
  } // 'FlyingFish' constructor

  fly() {
    MxI.$Log.write("--> FlyingFish.fly: '%s'", this);
  } // IBird.fly()

  swim() {
    MxI.$Log.write("--> FlyingFish.swim '%s'", this);
  } // IFish.swim()

  __run() {
    MxI.$Log.write("--> FlyingFish.run '%s'", this);
  } // IAnimal.run()

  __live() {
    MxI.$Log.write("--> FlyingFish.live '%s'", this);
  } // ILifeForm.live()
} // 'FlyingFish' class
MxI.$setClass(FlyingFish).$asImplementationOf(IBird, IFish);
exports.FlyingFish = FlyingFish;
