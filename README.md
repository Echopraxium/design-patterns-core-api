# design-patterns-core-api

Implementation of the original ("Gang Of Four") [_Design Patterns_](https://en.wikipedia.org/wiki/Software_design_pattern) as Interface classes (by means of [mixin-interface](https://www.npmjs.com/package/mixin-interface)).

>Your feedback (via github) is welcome especially to report bugs or design issues, request for features or enhancements and contribute to the 'religious' aspects of this project, like which patterns are in fact _Antipatterns_ or if it depends on the context (e.g. _Singleton_, _Service Locator_...).

ATM this framework provides 20 out of the 23 'Original Patterns' described by the _Gang of Four_ in their 1995's book (_Elements of Reusable Object-Oriented Software_). There are further design patterns described later (e.g. _Patterns of Enterprise Architecture Application_ wrtiien by Martin Fowler)

>There are many online documents about _Design Patterns_. An important part of this project was to mine them and propose for each pattern the 'least worst' design (from my perspective). My proposals should just be considered as an ongoing work (for which your feedback is welcome) and certainly not a reference. Thus I advise you to check and evaluate by yourself these  documents (I have gathered them in _References_ paragraph) to check it they fits your learning curve and design issues.

## Changelog for Release 0.0.2
* Package extraction: original ("Gang of Four") patterns extracted from [design-patterns-api](https://www.npmjs.com/package/design-patterns-api) in order to leave room for further patterns (e.g. _Multiton_, _Service Location_, _Intercepting Filter_...)
* New pattern released: _Proxy_
* Design Issue: name 'Subject' for a participant is used both in 'Observer' and Proxy' pattern
* Design Fix: rename 'Subject' to 'Observable' thus releasing 'Subject' for 'Proxy' pattern. 'ISubject' also becomes superclass of 'IAdapter'
* Minor documentation fix: (link to documentation link in 'Singleton' pattern)

## Roadmap
* UML class diagrams and implementation sample for each pattern

>Naming convention: for any given interface class, its name is written with _PascalCase_ convention (e.g. `IAbstractFactory`) and its source code uses _snake_case_ convention (e.g. `i_abstract_factory.js`)

>Why `...args` ? Thanks to the _rest parameter_ feature of javascript es6 (`...args`), most interface services accept optional and variable number of arguments.

>What is the purpose of `xxx_id` arguments ? This is a design choice motivated by 2 design intents. The first is when the service call is  propagated (e.g. 'request_id' argument is propagated by _Adapter_ when `IAdapter.request()` calls `IAdaptee.specificRequest()`). The second is to avoid _counterproductive class proliferation_ by using `xxx_id` argument as a way to make the call more specific (e.g. 'request_id' argument when calling `IHandler.handleRequest()` within the _Chain Of Responsability_ pattern)


[comment]: <> -------------------- Creational patterns --------------------

# Creational patterns

### Abstract Factory
[_IAbstractFactory_](https://github.com/Echopraxium/design-patterns-api/blob/master/src/creational/i_abstract_factory.js), [_IProduct_](https://github.com/Echopraxium/design-patterns-api/blob/master/src/creational/i_product.js). Refer to [Enginyeria del Software I -
Curs 2006-2007 - Abstract Factory](http://ima.udg.edu/~sellares/EINF-ES1/AbstractFactoryToni.pdf) for a detailed description.  

### Factory Method
[_I_Creator_](https://github.com/Echopraxium/design-patterns-api/blob/master/src/creational/i_creator.js), [IProduct](https://github.com/Echopraxium/design-patterns-api/blob/master/src/creational/i_product.js). Refer to [Enginyeria del Software I -
Curs 2006-2007 - Factory Method](http://ima.udg.edu/~sellares/EINF-ES1/FactoryToni.pdf) for a detailed description.  

### Builder
[_IBuilder_](https://github.com/Echopraxium/design-patterns-api/blob/master/src/creational/i_builder.js), [_IProduct_](https://github.com/Echopraxium/design-patterns-api/blob/master/src/creational/i_product.js). Refer to [BlackWasp - Builder design pattern](http://www.blackwasp.co.uk/Builder.aspx) for a detailed description.       

### Singleton
[_MxI.$ISingleton_](https://github.com/Echopraxium/mixin-interface-api/blob/master/README.md#singleton-feature). refer to [Enginyeria del Software I -
Curs 2006-2007 - Singleton](http://ima.udg.edu/~sellares/EINF-ES1/SingletonToni.pdf) for a detailed description.  


[comment]: <> -------------------- Behavioral patterns --------------------

# Behavioral patterns

### Observer
[_IObserver_](https://github.com/Echopraxium/design-patterns-api/blob/master/src/behavioral/i_observer.js) and [_IObservable_](https://github.com/Echopraxium/design-patterns-api/blob/master/src/behavioral/i_observable.js). Refer to [Enginyeria del Software I -
Curs 2006-2007 - Observer](http://ima.udg.edu/~sellares/EINF-ES1/ObserverToni.pdf) for a detailed description.    

### Iterator
[_IIterator_](https://github.com/Echopraxium/design-patterns-api/blob/master/src/behavioral/i_iterator.js), [_ICollection_](https://github.com/Echopraxium/design-patterns-api/blob/master/src/behavioral/i_collection.js). Refer to [Tutorials Point - Design Patterns: Iterator pattern](https://www.tutorialspoint.com/design_pattern/iterator_pattern.htm) for a detailed description.    

### State
[_IState_](https://github.com/Echopraxium/design-patterns-api/blob/master/src/behavioral/i_state.js), [_IStateContext_](https://github.com/Echopraxium/design-patterns-api/blob/master/src/behavioral/i_state_context.js). Refer to [Enginyeria del Software I -
Curs 2006-2007 - State](http://ima.udg.edu/~sellares/EINF-ES1/StateToni.pdf) for a detailed description.  

### Chain of Responsability
[_IHandler_](https://github.com/Echopraxium/design-patterns-api/blob/master/src/behavioral/i_handler.js), [_IRequest_](https://github.com/Echopraxium/design-patterns-api/blob/master/src/behavioral/i_request.js). Refer to [OOODesign - Chain of Responsability](http://www.oodesign.com/chain-of-responsibility-pattern.html) for a detailed description.  

### Visitor
[_IVisitor_](https://github.com/Echopraxium/design-patterns-api/blob/master/src/behavioral/i_visitor.js), [_IElement_](https://github.com/Echopraxium/design-patterns-api/blob/master/src/behavioral/i_element.js). Refer to [Tutorials Point - Design Patterns: Visitor pattern](https://www.tutorialspoint.com/design_pattern/visitor_pattern.htm) for a detailed description.  

### Memento
[_IMemento_](https://github.com/Echopraxium/design-patterns-api/blob/master/src/behavioral/i_memento.js), [_IOriginator_](https://github.com/Echopraxium/design-patterns-api/blob/master/src/behavioral/i_originator.js), [_ICareTaker_](https://github.com/Echopraxium/design-patterns-api/blob/master/src/behavioral/i_care_taker.js). Refer to [Tutorials Point - Design Patterns: Memento pattern](https://www.tutorialspoint.com/design_pattern/memento_pattern.htm) for a detailed description.   

### Strategy
[_IStrategy_](https://github.com/Echopraxium/design-patterns-api/blob/master/src/behavioral/i_strategy.js), [_IStrategyContext_](https://github.com/Echopraxium/design-patterns-api/blob/master/src/behavioral/i_strategy_context.js). Refer to [Tutorials Point - Design Patterns: Strategy pattern](https://www.tutorialspoint.com/design_pattern/strategy_pattern.htm) for a detailed description.

### Command
[_ICommand_](https://github.com/Echopraxium/design-patterns-api/blob/master/src/behavioral/i_command.js), [_IInvoker_](https://github.com/Echopraxium/design-patterns-api/blob/master/src/behavioral/i_invoker.js), [_IReceiver_](https://github.com/Echopraxium/design-patterns-api/blob/master/src/behavioral/i_receiver.js). Refer to [Enginyeria del Software I -
Curs 2006-2007 - Command](http://ima.udg.edu/~sellares/EINF-ES1/CommandToni.pdf) for a detailed description.    

### Template Method
[_ITemplateMethod_](https://github.com/Echopraxium/design-patterns-api/blob/master/src/behavioral/i_template_method.js). Refer to [Enginyeria del Software I -
Curs 2006-2007 - Template Method](http://ima.udg.edu/~sellares/EINF-ES1/TemplateMethodToni.pdf) for a detailed description.    

### Mediator
[_IMediator_](https://github.com/Echopraxium/mixin-interface-api/blob/master/src/behavioral/i_mediator.js), [_IColleague_](https://github.com/Echopraxium/mixin-interface-api/blob/master/src/behavioral/i_colleague.js), [_IRequest_](https://github.com/Echopraxium/mixin-interface-api/blob/master/src/behavioral/i_request.js). Refer to [Enginyeria del Software I -
Curs 2006-2007 - Mediator](http://ima.udg.edu/~sellares/EINF-ES1/MediatorToni.pdf) for a detailed description.    


[comment]: <> -------------------- Structural patterns --------------------

# Structural patterns

### Bridge
[_IImplementor_](https://github.com/Echopraxium/design-patterns-api/blob/master/src/structural/i_implementor.js). Refer to [Enginyeria del Software I -
Curs 2006-2007 - Bridge](http://ima.udg.edu/~sellares/EINF-ES1/BridgeToni.pdf) for a detailed description.  

### Adapter
[_IAdapter_](https://github.com/Echopraxium/design-patterns-api/blob/master/src/structural/i_adapter.js), [_IAdaptee_](https://github.com/Echopraxium/design-patterns-api/blob/master/src/structural/i_adaptee.js). Refer to [Enginyeria del Software I -
Curs 2006-2007 - Adapter](http://ima.udg.edu/~sellares/EINF-ES1/AdapterToni.pdf) for a detailed description.      

### Facade
[_IFacade_](https://github.com/Echopraxium/design-patterns-api/blob/master/src/structural/i_facade.js). Refer to [Tutorials Point - Design Patterns: Memento pattern](https://www.tutorialspoint.com/design_pattern/facade_pattern.htm) for a detailed description.     

### Decorator
[_IDecorator_](https://github.com/Echopraxium/design-patterns-api/blob/master/src/structural/i_decorator.js), [_ICoreComponent_](https://github.com/Echopraxium/design-patterns-api/blob/master/src/structural/i_core_component.js). Refer to [Enginyeria del Software I -
Curs 2006-2007 - Decorator](http://ima.udg.edu/~sellares/EINF-ES1/DecoratorToni.pdf) for a detailed description.   

### Composite
[_IComponent_](https://github.com/Echopraxium/design-patterns-api/blob/master/src/structural/i_component.js), [_IComposite_](https://github.com/Echopraxium/design-patterns-api/blob/master/src/structural/i_decorator.js), [_ILeaf_](https://github.com/Echopraxium/design-patterns-api/blob/master/src/structural/i_leaf.js), Refer to [Enginyeria del Software I -
Curs 2006-2007 - Composite](http://ima.udg.edu/~sellares/EINF-ES1/CompositeToni.pdf) for a detailed description. 

### Proxy (new)
[_ISubject_](https://github.com/Echopraxium/design-patterns-api/blob/master/src/structural/i_subject.js), [_IProxy_](https://github.com/Echopraxium/design-patterns-api/blob/master/src/structural/i_proxy.js), Refer to [Enginyeria del Software I -
Curs 2006-2007 - Proxy](http://ima.udg.edu/~sellares/EINF-ES1/ProxyToni.pdf) for a detailed description.   

{::nomarkdown}
<!-- > -------------------- Developer's Guide -------------------- ->
{:/}
# Developer's Guide

## How to implement a Design Pattern
A given _Design Pattern_ is composed of one or more _participants_, this is very much like _Role(s)_ in a play. Within `design-patterns-api` project, each participant is implemented as an _interface classs_. Thus, in order to _implement a Design Pattern_ you must implement the _interface class(es)_. Please refer to [How to code an Implementation class](https://github.com/Echopraxium/mixin-interface-api/blob/master/README.md#how-to-code-an-implementation-class) in the documentation of `mixin-interface-api` package.


#### Installation and Usage:
```bash
npm install design-patterns-core-api -S
```

## How to run the Unit Test
#### Step 1: Install Prerequisite Tools
Install [_NodeJS_](https://nodejs.org/en/) and [_Git_](https://git-scm.com/)

#### Step 2: Clone the 'design-patterns-core-api' repository locally
Open a command shell then enter the following commands:
```bash
git clone git://github.com/Echopraxium/design-patterns-core-api
cd design-patterns-core-api
npm update
```

#### Step 3: Run the Unit Test
Now enter the following command:
```bash
node test.js
```

You should get the following output:
```bash
============================================================
===== Unit Test for 'design-patterns-core-api' package =====
============================================================
1. Creational Patterns
----------
1.1. Factory Method
----------
1.2. Builder
----------
1.1. Singleton
----------------------------------------
2. Behavioral Patterns
----------
2.1. Observer
----------
2.2. Iterator
----------
2.3. State
----------
2.4. Chain Of Responsability
----------
2.5. Visitor
----------
2.6. Memento
----------
2.7. Strategy
----------
2.8. Command
----------
2.9. Mediator
----------
2.10. Template Method
----------------------------------------
3. Structural Patterns
----------
3.1. Bridge
----------
3.2. Adapter
----------
3.3. Facade
----------
3.4. Decorator
----------
3.5. Composite
----------
3.6. Proxy
===================== End of Unit Test =====================
```

## References
* _Software Design Pattern_ (Wikipedia)    
  https://en.wikipedia.org/wiki/Software_design_pattern
* Design Patterns and Anti-Patterns, Love and Hate  
  http://www.yegor256.com/2016/02/03/design-patterns-and-anti-patterns.html
* _Behavioral Pattern_    
  https://en.wikipedia.org/wiki/Behavioral_pattern
* _Design Patterns in Java Tutorial_  
  https://www.tutorialspoint.com/design_pattern/
* _SourceMaking / Design Patterns_    
  https://sourcemaking.com/design_patterns
* _Enginyeria del Software I - Curs 2006-2007_    
  http://ima.udg.edu/~sellares/EINF-ES1/
* _OODesign (Object Oriented Design)_   
  http://www.oodesign.com/
* _MacDonald Land / Design Patterns Quick Reference_   
  http://www.mcdonaldland.info/files/designpatterns/designpatternscard.pdf
* _Wikipedia / Software design pattern_    
  https://en.wikipedia.org/wiki/Software_design_pattern
* _Design Patterns_  
  O. Boissier, G. Picard SMA/G2I/ENS Mines Saint-Etienne
  http://www.emse.fr/~picard/cours/2A/DesignPatterns.pdf
* _Elements of Reusable Object-Oriented Software_ (1995)  
  Gamma, Erich; Helm, Richard; Johnson, Ralph; Vlissides, John