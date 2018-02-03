//==============================================================
// test.js
// Purpose: Unit Test for 'mixin-interface-api'
// Project: 'mixin-interface-api' npm package
//          https://www.npmjs.com/package/mixin-interface-api
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
const MxI       = require('./src/mixin_interface_api.js').MxI;
const ILifeForm = require('./src/test_classes/i_life_form.js').ILifeForm;
const IAnimal   = require('./src/test_classes/i_animal.js').IAnimal;
const IMammal   = require('./src/test_classes/i_mammal.js').IMammal;
const Animal    = require('./src/test_classes/animal.js').Animal;
const Cat       = require('./src/test_classes/cat.js').Cat;

//==================== start of test.js ====================
var unit_test_step = 0;

var console_log_sink = MxI.$Log.addSink(new MxI.$ConsoleLogSink());
var file_log_sink    = MxI.$Log.addSink(new MxI.$FileLogSink('./log.txt'));

MxI.$Log.banner("Unit Test for 'mixin-interface-api' package");

unit_test_step++;
var an_animal_0 = new Animal();
MxI.$Log.write(unit_test_step + ".Instance of 'Animal' created: " + an_animal_0.name);
MxI.$Log.write("'%s' is a 'MxI.$Object' ?    " + MxI.$isInstanceOf(MxI.$Object, an_animal_0), an_animal_0);
MxI.$Log.write("'%s' is a 'ILifeForm' ?      " + MxI.$isInstanceOf(ILifeForm,   an_animal_0), an_animal_0)
MxI.$Log.write("'%s' is a 'IAnimal' ?        " + MxI.$isInstanceOf(IAnimal,     an_animal_0), an_animal_0);
MxI.$Log.write("'%s' is a 'Animal' ?         " + MxI.$isInstanceOf(Animal,      an_animal_0), an_animal_0);
MxI.$Log.write("'%s' is a 'IMammal' ?        " + MxI.$isInstanceOf(IMammal,     an_animal_0), an_animal_0);
an_animal_0.live();
an_animal_0.run();

MxI.$Log.write("----------");
unit_test_step++;
var a_cat = new Cat();
MxI.$Log.write(unit_test_step + ". Instance of 'Cat' created: " + a_cat.name);
MxI.$Log.write("'%s' is a 'MxI.$Object' ? " + MxI.$isInstanceOf(MxI.$Object, a_cat), a_cat);
MxI.$Log.write("'%s' is a 'Animal' ?      " + MxI.$isInstanceOf(Animal,      a_cat), a_cat);
MxI.$Log.write("'%s' is a 'Cat' ?         " + MxI.$isInstanceOf(Cat,         a_cat), a_cat);
MxI.$Log.write("'%s' is a 'ILifeForm' ?   " + MxI.$isInstanceOf(ILifeForm,   a_cat), a_cat);
MxI.$Log.write("'%s' is a 'IAnimal' ?     " + MxI.$isInstanceOf(IAnimal,     a_cat), a_cat);
MxI.$Log.write("'%s' is a 'IMammal' ?     " + MxI.$isInstanceOf(IMammal,     a_cat), a_cat);
a_cat.live();
a_cat.run();
a_cat.suckle();

MxI.$Log.write("----------");
unit_test_step++;
MxI.$Log.write(unit_test_step + ". Check for each type if it is an Interface class or an Implementation class");
MxI.$Log.write("'MxI.$Object'        is an interface ? " + MxI.$isInterface(MxI.$Object));
MxI.$Log.write("'MxI.IBaseInterface' is an interface ? " + MxI.$isInterface(MxI.$IBaseInterface));
MxI.$Log.write("'ILifeForm'          is an interface ? " + MxI.$isInterface(ILifeForm));
MxI.$Log.write("'IAnimal'            is an interface ? " + MxI.$isInterface(IAnimal));

MxI.$Log.write("'Animal'             is an interface ? " + MxI.$isInterface(Animal));
MxI.$Log.write("'Cat'                is an interface ? " + MxI.$isInterface(Cat));
MxI.$Log.write("'IMammal'            is an interface ? " + MxI.$isInterface(IMammal));

MxI.$Log.write("----------");
unit_test_step++;
MxI.$Log.write(unit_test_step + ". Check if an Implementation class implements a given Interface");
MxI.$Log.write("'Animal'              implements 'ILifeForm' ?        " + MxI.$implements(Animal, ILifeForm));
MxI.$Log.write("'Animal'              implements 'IAnimal' ?          " + MxI.$implements(Animal, IAnimal));
MxI.$Log.write("'Animal'              implements 'IMammal' ?          " + MxI.$implements(Animal, IMammal));
MxI.$Log.write("'Cat'                 implements 'IAnimal' ?          " + MxI.$implements(Cat, IAnimal));
MxI.$Log.write("'Cat'                 implements 'IMammal' ?          " + MxI.$implements(Cat, IMammal));
MxI.$Log.write("'MxI.$NullObject'     implements 'MxI.$INullObject' ? " + MxI.$implements(MxI.$NullObject, MxI.$INullObject));
MxI.$Log.write("'MxI.$NullObject'     implements 'MxI.$ISingleton' ?  " + MxI.$implements(MxI.$NullObject, MxI.$ISingleton));

MxI.$Log.write("----------");
unit_test_step++;
MxI.$Log.write(unit_test_step + ". get Superclass of a type");
MxI.$Log.write("Superclass of 'ILifeForm' is:             " + MxI.$getSuperclass(ILifeForm).name);
MxI.$Log.write("Superclass of 'Animal' is:                " + MxI.$getSuperclass(Animal).name);
MxI.$Log.write("Superclass of 'IAnimal' is:               " + MxI.$getSuperclass(IAnimal).name);
MxI.$Log.write("Superclass of 'Cat' is:                   " + MxI.$getSuperclass(Cat).name);

MxI.$Log.write("----------");
unit_test_step++;
MxI.$Log.write(unit_test_step + ". Check generated names for instances");
var an_object = new MxI.$Object();
MxI.$Log.write("Instance of 'MxI.$Object' created:        '%s'", an_object);

var another_animal = new Animal();
MxI.$Log.write("Another instance of 'Animal' created:     '%s'", another_animal);
another_animal.live();
another_animal.run();

var another_cat = new Cat();
MxI.$Log.write("Another instance of 'Cat' created:        '%s'", another_cat);
another_cat.live();
another_cat.run();
another_cat.suckle();

MxI.$Log.write("----------");
unit_test_step++;
MxI.$Log.write(unit_test_step + ". Initialize instance");
MxI.$Log.write(another_animal.name + " isInitialized():                ", another_animal.isInitialized());
another_animal.init();
MxI.$Log.write(another_animal.name + " isInitialized():                ", another_animal.isInitialized());

MxI.$Log.write("----------");
unit_test_step++;
MxI.$Log.write(unit_test_step + ". 'Null Object' design pattern, check if an instance is '%s'",MxI.$Null);
MxI.$Log.write("MxI.$isNull(%s):                   %s", undefined, MxI.$isNull(undefined));
MxI.$Log.write("MxI.$isNull(%s):                    %s", another_animal, MxI.$isNull(another_animal));
MxI.$Log.write("MxI.$isNull(%s):                    %s", MxI.$Null, MxI.$isNull(MxI.$Null));
MxI.$Log.write("MxI.$NullObject.getSingleton():           %s", MxI.$NullObject.getSingleton());

MxI.$Log.write("----------");
unit_test_step++;
MxI.$Log.write(unit_test_step + ". Singleton");
MxI.$Log.write("isSingleton(%s):                    %s", MxI.$Null, MxI.$isSingleton(MxI.$Null));
MxI.$Log.write("'%s' is a 'MxI.$ISingleton' ?       " + MxI.$isInstanceOf(MxI.$ISingleton, MxI.$Null), MxI.$Null);

MxI.$Log.write("======== End of Unit Test ========");
