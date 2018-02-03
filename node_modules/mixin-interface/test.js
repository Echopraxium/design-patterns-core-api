//==============================================================
// test.js
// Purpose: Unit Test for 'mixin-interface'
// Project: 'mixin-interface' npm package
//          https://www.npmjs.com/package/mixin-interface
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI               = require('./src/mixin_interface.js').MxI;
const Log               = MxI.$Log;
const ILifeForm         = require('mixin-interface-api/src/test_classes/i_life_form.js').ILifeForm;
const IAnimal           = require('mixin-interface-api/src/test_classes/i_animal.js').IAnimal;
const IMammal           = require('mixin-interface-api/src/test_classes/i_mammal.js').IMammal;
const IFish             = require('./src/test_classes/i_fish.js').IFish;
const IBird             = require('./src/test_classes/i_bird.js').IBird;
const Animal            = require('mixin-interface-api/src/test_classes/animal.js').Animal;
const Cat               = require('mixin-interface-api/src/test_classes/cat.js').Cat;
const FlyingFish        = require('./src/test_classes/flying_fish.js').FlyingFish;
const StarPrefixLogger  = require('./src/test_classes/star_prefix_logger.js').StarPrefixLogger;
const ArrowPrefixLogger = require('./src/test_classes/arrow_prefix_logger.js').ArrowPrefixLogger;

//==================== start of test.js ====================
const SEPARATOR = "----------------------------------";
var   unit_test_step = 0;

MxI.$Log.addSink(new MxI.$ConsoleLogSink());
MxI.$Log.addSink(new MxI.$FileLogSink('./log.txt'));

Log.banner("Unit Test for 'mixin-interface' package");


unit_test_step++;
var an_animal_0 = new Animal();
MxI.$Log.write(unit_test_step + ".Instance of 'Animal' created: " + an_animal_0.name);
MxI.$Log.write("'%s' is a 'Animal' ?           " + MxI.$isInstanceOf(Animal,      an_animal_0), an_animal_0.name);
MxI.$Log.write("'%s' is a 'IAnimal' ?          " + MxI.$isInstanceOf(IAnimal,     an_animal_0), an_animal_0.name);
an_animal_0.run();
an_animal_0.live();

//--------------------------------------------------------------------------
MxI.$Log.write(SEPARATOR);
unit_test_step++;
var a_cat = new Cat();
MxI.$Log.write(unit_test_step + ". Instance of 'Cat' created: " + a_cat.name);
MxI.$Log.write("'%s' is a 'Animal' ?      " + MxI.$isInstanceOf(Animal,      a_cat), a_cat);
MxI.$Log.write("'%s' is a 'Cat' ?         " + MxI.$isInstanceOf(Cat,         a_cat), a_cat);
MxI.$Log.write("'%s' is a 'IAnimal' ?     " + MxI.$isInstanceOf(IAnimal,     a_cat), a_cat);
MxI.$Log.write("'%s' is a 'IMammal' ?     " + MxI.$isInstanceOf(IMammal,     a_cat), a_cat);
a_cat.run();
a_cat.suckle();
a_cat.live();

//--------------------------------------------------------------------------
MxI.$Log.write(SEPARATOR);
unit_test_step++;
MxI.$Log.write(unit_test_step + ". Check if a type is an Interface class or an Implementation class");
MxI.$Log.write("'IBird'               is an interface ?         " + MxI.$isInterface(IBird));
MxI.$Log.write("'IFish'               is an interface ?         " + MxI.$isInterface(IFish));

//--------------------------------------------------------------------------
MxI.$Log.write(SEPARATOR);
unit_test_step++;
MxI.$Log.write(unit_test_step + ". Check if an Implementation class implements a given Interface");
MxI.$Log.write("'FlyingFish'          implements 'IBird' ?      " + MxI.$implements(FlyingFish, IBird));
MxI.$Log.write("'FlyingFish'          implements 'IFish' ?      " + MxI.$implements(FlyingFish, IFish));

//--------------------------------------------------------------------------
MxI.$Log.write(SEPARATOR);
unit_test_step++;
MxI.$Log.write(unit_test_step + ". get Superclass of a type");
MxI.$Log.write("Superclass of 'ILifeForm' is:\t\t\t" + MxI.$getSuperclass(ILifeForm).name);
MxI.$Log.write("Superclass of 'Animal' is:\t\t\t" + MxI.$getSuperclass(Animal).name);
MxI.$Log.write("Superclass of 'IAnimal' is:\t\t\t" + MxI.$getSuperclass(IAnimal).name);
MxI.$Log.write("Superclass of 'Cat' is:\t\t\t\t" + MxI.$getSuperclass(Cat).name);

//--------------------------------------------------------------------------
MxI.$Log.write(SEPARATOR);
unit_test_step++;
var a_cat = new Cat();
MxI.$Log.write(unit_test_step + ". Instance of 'Cat' created: " + a_cat.name);
MxI.$Log.write("'%s' is a 'ILifeForm' ?\t\t\t" + MxI.$isInstanceOf(ILifeForm,   a_cat), a_cat.name);
MxI.$Log.write("'%s' is a 'IAnimal' ?\t\t\t"   + MxI.$isInstanceOf(IAnimal,     a_cat), a_cat.name);
MxI.$Log.write("'%s' is a 'IMammal' ?\t\t\t"   + MxI.$isInstanceOf(IMammal,     a_cat), a_cat.name);
a_cat.run();
a_cat.suckle();
a_cat.live();

//--------------------------------------------------------------------------
MxI.$Log.write(SEPARATOR);
unit_test_step++;
var a_flying_fish = new FlyingFish();
MxI.$Log.write(unit_test_step + ". Instance of 'FlyingFish' created: " + a_flying_fish.name);
MxI.$Log.write("'%s' is a 'Animal' ?\t\t\t" + MxI.$isInstanceOf(Animal,      a_flying_fish), a_flying_fish.name);
MxI.$Log.write("'%s' is a 'FlyingFish' ?\t\t" + MxI.$isInstanceOf(FlyingFish,  a_flying_fish), a_flying_fish.name);
MxI.$Log.write("'%s' is a 'IAnimal' ?\t\t" + MxI.$isInstanceOf(IAnimal,     a_flying_fish), a_flying_fish.name);
MxI.$Log.write("'%s' is a 'IBird' ?\t\t\t" + MxI.$isInstanceOf(IBird,       a_flying_fish), a_flying_fish.name);
MxI.$Log.write("'%s' is a 'IFish' ?\t\t\t" + MxI.$isInstanceOf(IFish,       a_flying_fish), a_flying_fish.name);
a_flying_fish.fly();
a_flying_fish.swim();
a_flying_fish.run();
a_flying_fish.live();

//--------------------------------------------------------------------------
MxI.$Log.write(SEPARATOR);
unit_test_step++;
MxI.$Log.write(unit_test_step + ". Check generated names for instances");

var another_cat = new Cat();
MxI.$Log.write("Another instance of 'Cat' created:              '%s'", another_cat);

var another_animal = new Animal();
MxI.$Log.write("Another instance of 'Animal' created:           '%s'", another_animal.name);

//--------------------------------------------------------------------------
MxI.$Log.write(SEPARATOR);
unit_test_step++;
MxI.$Log.write(unit_test_step + ". Change Logger");

//MxI.$System.setLogger(StarPrefixLogger.getSingleton());
MxI.$Log.write("Logger changed to 'StarPrefixLogger'");

//MxI.$System.setLogger(ArrowPrefixLogger.getSingleton());
MxI.$Log.write("Logger changed to 'ArrowPrefixLogger'");

//MxI.$System.resetLogger();

//--------------------------------------------------------------------------
MxI.$Log.write(SEPARATOR);
unit_test_step++;
MxI.$Log.write(unit_test_step + ". 'Null Object' feature, check if input value is '%s' or 'undefined'", MxI.$Null);
MxI.$Log.write("MxI.$isNull(%s):                         %s", undefined, MxI.$isNull(undefined));
MxI.$Log.write("MxI.$isNull(%s):                          %s", MxI.$Null, MxI.$isNull(MxI.$Null));

//--------------------------------------------------------------------------
MxI.$Log.write(SEPARATOR);
unit_test_step++;
MxI.$Log.write(unit_test_step + ". Singleton feature");
MxI.$Log.write("isSingleton(%s):                          %s", MxI.$Null, MxI.$isSingleton(MxI.$Null));
MxI.$Log.write("'%s' is a 'MxI.$ISingleton' ?             " + MxI.$isInstanceOf(MxI.$ISingleton, MxI.$Null), MxI.$Null);


MxI.$Log.banner("End of Unit Test", true);
