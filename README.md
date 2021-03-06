# design-patterns-core-api

Implementation of the 23 original ("Gang Of Four") [_Design Patterns_](https://en.wikipedia.org/wiki/Software_design_pattern) as Interface classes (by means of [mixin-interface-api](https://www.npmjs.com/package/mixin-interface-api)).

>ATM this framework provides 20 out of the 23 'Original Patterns' described by the _Gang of Four_ in their 1995's book (_Elements of Reusable Object-Oriented Software_). There are further design patterns described later (e.g. _Patterns of Enterprise Architecture Application_ written by Martin Fowler).

>Your feedback (via GitHub) is welcome especially to report bugs or design issues, request for features or enhancements and contribute to the 'religious' aspects of this project, like which patterns are in fact _Antipatterns_ or if it depends on the context (e.g. _Singleton_, _Service Locator_...).

### Note about Design Issues
* **Craft a proposal for each pattern:** there are many references about _Design Patterns_. My proposals should be not be taken as reference but more as an ongoing work (for which your feedback is welcome). Thus I advise you to study by yourself the references (I have gathered some of them in the _References_ paragraph) to check it they fits your learning curve and your own design issues.
* **Resolve name conflicts across patterns:** in the references, it happens that participant names (and operation names as well) are shared across patterns. In my proposals, I resolved these name conflicts either by mining in the references or by adding parent interface classes (e.g. _IElement_, _IAction, _ICoreComponent_...).

## Release 0.1.33 changelog
* Impact of _Log feature_ refactoring (please find reference documentation [here](https://www.npmjs.com/package/mixin-interface-api)): 
  * Implementation of _Log feature_ redesigned and moved from `mixin-interface` to `mixin-interface-api`.
  * New Log API is `MxI.$Log.write()` (previously `MxI.$System.log()`) and `MxI.$Log.addSink()` (to set the target of _trace requests_).
  * Thus this package now directly depends from `mixin-interface-api` (and no more from `mixin-interface`).

## Release 0.1.20 changelog
* Design Issue: 'IProduct' interface is a misfit 
* Fix: Delete 'IProduct' move its 'getAttribute()' method in 'IElement' then update 'IProduct' dependents so that they depend on 'IElement' instead 

### Roadmap
* UML class diagrams and implementation sample for each pattern

### Preliminary notes
>**Naming convention:** for any given interface class, its name is written with _PascalCase_ convention (e.g. `IAbstractFactory`) and its source code uses _snake_case_ convention (e.g. `i_abstract_factory.js`)

>**Why `...args` ?** Thanks to the _rest parameter_ feature of javascript es6 (`...args`), most interface services accept optional and variable number of arguments.

>**What is the purpose of `xxx_id` arguments ?** This is a design choice motivated by 2 design intents. The first is when the service call is  propagated (e.g. 'request_id' argument is propagated by _Adapter_ when `IAdapter.request()` calls `IAdaptee.specificRequest()`). The second is to avoid _counterproductive class proliferation_ by using `xxx_id` argument as a way to make the call more specific (e.g. 'request_id' argument when calling `IHandler.handleRequest()` within the _Chain Of Responsability_ pattern)



## Creational patterns

### Abstract Factory
Interface classes: [_IAbstractFactory_](https://github.com/Echopraxium/design-patterns-core-api/blob/master/src/creational/i_abstract_factory.js), [_IElement_](https://github.com/Echopraxium/design-patterns-core-api/blob/master/src/creational/i_element.js).  
Detailed description: [Enginyeria del Software I - Curs 2006-2007 - Abstract Factory](http://ima.udg.edu/~sellares/EINF-ES1/AbstractFactoryToni.pdf).  
![Abstract Factory UML model](img/AbstractFactory.png "Abstract Factory UML model")  

### Factory Method
Interface classes: [_I_Creator_](https://github.com/Echopraxium/design-patterns-core-api/blob/master/src/creational/i_creator.js), [_IElement_](https://github.com/Echopraxium/design-patterns-core-api/blob/master/src/creational/i_element.js).  
Detailed description: [Enginyeria del Software I - Curs 2006-2007 - Factory Method](http://ima.udg.edu/~sellares/EINF-ES1/FactoryToni.pdf).  

### Builder
Interface classes: [_IBuilder_](https://github.com/Echopraxium/design-patterns-core-api/blob/master/src/creational/i_builder.js), [_IElement_](https://github.com/Echopraxium/design-patterns-core-api/blob/master/src/creational/i_element.js).  
Detailed description: [BlackWasp - Builder design pattern](http://www.blackwasp.co.uk/Builder.aspx).       

### Singleton
Interface classes: [_MxI.$ISingleton_](https://github.com/Echopraxium/mixin-interface-api/blob/master/README.md#singleton-feature).  
Detailed description: [Enginyeria del Software I - Curs 2006-2007 - Singleton](http://ima.udg.edu/~sellares/EINF-ES1/SingletonToni.pdf).  



## Behavioral patterns

### Observer
Interface classes: [_IObserver_](https://github.com/Echopraxium/design-patterns-core-api/blob/master/src/behavioral/i_observer.js) and [_IObservable_](https://github.com/Echopraxium/design-patterns-core-api/blob/master/src/behavioral/i_observable.js).  
Detailed description: [Enginyeria del Software I - Curs 2006-2007 - Observer](http://ima.udg.edu/~sellares/EINF-ES1/ObserverToni.pdf).  
![Observer UML model](img/Observer.png "Observer UML model")  

### Iterator
Interface classes: [_IIterator_](https://github.com/Echopraxium/design-patterns-core-api/blob/master/src/behavioral/i_iterator.js), [_ICollection_](https://github.com/Echopraxium/design-patterns-core-api/blob/master/src/behavioral/i_collection.js).  
Detailed description: [Tutorials Point - Design Patterns: Iterator pattern](https://www.tutorialspoint.com/design_pattern/iterator_pattern.htm).    

### State
Interface classes: [_IState_](https://github.com/Echopraxium/design-patterns-core-api/blob/master/src/behavioral/i_state.js), [_IStateContext_](https://github.com/Echopraxium/design-patterns-core-api/blob/master/src/behavioral/i_state_context.js).  
Detailed description: [Enginyeria del Software I - Curs 2006-2007 - State](http://ima.udg.edu/~sellares/EINF-ES1/StateToni.pdf).  

### Chain of Responsability
Interface classes: [_IHandler_](https://github.com/Echopraxium/design-patterns-core-api/blob/master/src/behavioral/i_handler.js), [_IRequest_](https://github.com/Echopraxium/design-patterns-core-api/blob/master/src/behavioral/i_request.js).  
Detailed description: [OOODesign - Chain of Responsability](http://www.oodesign.com/chain-of-responsibility-pattern.html).  

### Visitor
Interface classes: [_IVisitor_](https://github.com/Echopraxium/design-patterns-core-api/blob/master/src/behavioral/i_visitor.js), [_IElement_](https://github.com/Echopraxium/design-patterns-core-api/blob/master/src/creational/i_element.js).  
Detailed description: [Tutorials Point - Design Patterns: Visitor pattern](https://www.tutorialspoint.com/design_pattern/visitor_pattern.htm).  

### Memento
Interface classes: [_IMemento_](https://github.com/Echopraxium/design-patterns-core-api/blob/master/src/behavioral/i_memento.js), [_IOriginator_](https://github.com/Echopraxium/design-patterns-core-api/blob/master/src/behavioral/i_originator.js), [_ICareTaker_](https://github.com/Echopraxium/design-patterns-core-api/blob/master/src/behavioral/i_care_taker.js).  
Detailed description: [Tutorials Point - Design Patterns: Memento pattern](https://www.tutorialspoint.com/design_pattern/memento_pattern.htm).   

### Strategy
Interface classes: [_IStrategy_](https://github.com/Echopraxium/design-patterns-core-api/blob/master/src/behavioral/i_strategy.js), [_IStrategyContext_](https://github.com/Echopraxium/design-patterns-core-api/blob/master/src/behavioral/i_strategy_context.js).  
Detailed description: [Tutorials Point - Design Patterns: Strategy pattern](https://www.tutorialspoint.com/design_pattern/strategy_pattern.htm).

### Command
Interface classes: [_ICommand_](https://github.com/Echopraxium/design-patterns-core-api/blob/master/src/behavioral/i_command.js), [_IInvoker_](https://github.com/Echopraxium/design-patterns-core-api/blob/master/src/behavioral/i_invoker.js), [_IReceiver_](https://github.com/Echopraxium/design-patterns-core-api/blob/master/src/behavioral/i_receiver.js).  
Detailed description: [Enginyeria del Software I - Curs 2006-2007 - Command](http://ima.udg.edu/~sellares/EINF-ES1/CommandToni.pdf).    

### Template Method
Interface classes: [_ITemplateMethod_](https://github.com/Echopraxium/design-patterns-core-api/blob/master/src/behavioral/i_template_method.js).  
Detailed description: [Enginyeria del Software I - Curs 2006-2007 - Template Method](http://ima.udg.edu/~sellares/EINF-ES1/TemplateMethodToni.pdf).    

### Mediator
Interface classes: [_IMediator_](https://github.com/Echopraxium/mixin-interface-api/blob/master/src/behavioral/i_mediator.js), [_IColleague_](https://github.com/Echopraxium/mixin-interface-api/blob/master/src/behavioral/i_colleague.js), [_IRequest_](https://github.com/Echopraxium/mixin-interface-api/blob/master/src/behavioral/i_request.js).  
Detailed description: [Enginyeria del Software I - Curs 2006-2007 - Mediator](http://ima.udg.edu/~sellares/EINF-ES1/MediatorToni.pdf).    

## Structural patterns

### Bridge
Interface classes: [_IImplementor_](https://github.com/Echopraxium/design-patterns-core-api/blob/master/src/structural/i_implementor.js).  
Refer to [Enginyeria del Software I - Curs 2006-2007 - Bridge](http://ima.udg.edu/~sellares/EINF-ES1/BridgeToni.pdf).  

### Adapter
Interface classes: [_IAdapter_](https://github.com/Echopraxium/design-patterns-core-api/blob/master/src/structural/i_adapter.js), [_IAdaptee_](https://github.com/Echopraxium/design-patterns-core-api/blob/master/src/structural/i_adaptee.js).  
Detailed description: [Enginyeria del Software I - Curs 2006-2007 - Adapter](http://ima.udg.edu/~sellares/EINF-ES1/AdapterToni.pdf).      

### Facade
Interface classes: [_IFacade_](https://github.com/Echopraxium/design-patterns-core-api/blob/master/src/structural/i_facade.js).  
Detailed description: [Tutorials Point - Design Patterns: Memento pattern](https://www.tutorialspoint.com/design_pattern/facade_pattern.htm).     

### Decorator
Interface classes: [_IDecorator_](https://github.com/Echopraxium/design-patterns-core-api/blob/master/src/structural/i_decorator.js), [_ICoreComponent_](https://github.com/Echopraxium/design-patterns-core-api/blob/master/src/structural/i_core_component.js).  
Detailed description: [Enginyeria del Software I - Curs 2006-2007 - Decorator](http://ima.udg.edu/~sellares/EINF-ES1/DecoratorToni.pdf).   

### Composite
Interface classes: [_IComponent_](https://github.com/Echopraxium/design-patterns-core-api/blob/master/src/structural/i_component.js), [_IComposite_](https://github.com/Echopraxium/design-patterns-core-api/blob/master/src/structural/i_decorator.js), [_ILeaf_](https://github.com/Echopraxium/design-patterns-core-api/blob/master/src/structural/i_leaf.js).  
Detailed description: [Enginyeria del Software I - Curs 2006-2007 - Composite](http://ima.udg.edu/~sellares/EINF-ES1/CompositeToni.pdf). 

### Proxy
Interface classes: [_ISubject_](https://github.com/Echopraxium/design-patterns-core-api/blob/master/src/structural/i_subject.js), [_IProxy_](https://github.com/Echopraxium/design-patterns-core-api/blob/master/src/structural/i_proxy.js).  
Detailed description: [Enginyeria del Software I - Curs 2006-2007 - Proxy](http://ima.udg.edu/~sellares/EINF-ES1/ProxyToni.pdf).   


## Developer's Guide

### How to implement a Design Pattern
A given _Design Pattern_ is composed of one or more _participants_, this is very much like _Role(s)_ in a play. Within `design-patterns-api` project, each participant is implemented as an _interface classs_. Thus, in order to _implement a Design Pattern_ you must implement the _interface class(es)_. Please refer to [How to code an Implementation class](https://github.com/Echopraxium/mixin-interface-api/blob/master/README.md#how-to-code-an-implementation-class) in the documentation of `mixin-interface-api` package.



## How to run the Unit Test
#### Step 1: Install Prerequisite Tools
Install [_NodeJS_](https://nodejs.org/en/) and [_Git_](https://git-scm.com/)

#### Step 2: Clone the 'design-patterns-core-api' repository locally
Open a command shell then enter the following commands:
```
git clone git://github.com/Echopraxium/design-patterns-core-api
cd design-patterns-core-api
npm update
```

#### Step 3: Run the Unit Test
Now enter the following command:
```
node test.js
```

You should get this kind of output (please find [here](https://github.com/Echopraxium/design-patterns-core-api/blob/master/log.txt) the full output):
```
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
...
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