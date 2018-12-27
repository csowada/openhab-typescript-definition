// open
declare var ActionHandlerFactory: any;
declare var ConditionHandlerFactory: any;
declare var Action: any;
declare var ModuleType: any;
declare var ActionType: any;
declare var ConfigDescriptionParameter: any;
declare var TriggerHandlerFactory: any;
declare var TriggerType: any;
// declare var Condition: any;

// hack
// declare class events extends BusEvent { }
declare var events: SimpleBusEvent;

declare var ruleRegistry: any;
declare var rules: any;
declare var things: any;


// dummies
declare var Visibility: any;
declare var ConfigDescriptionParameter: any;
declare var require: any;
// declare type Map = {};
// finish
// ******************************************


// SERVICES
declare var itemRegistry: ItemRegistry;
declare var ir: ItemRegistry;
declare var scriptExtension: ScriptExtensionProvider;
declare var se: ScriptExtensionProvider;
declare var scriptExtension: ScriptExtensionProvider;
declare var automationManager: AutomationManager;


// CLASSES & INTERFACES
// declare var SimpleRule: SimpleRule;
// declare var Command: Command;
// declare var State: State;

declare interface XType extends PrimitiveType, State, Command {

}

declare interface XXType extends PrimitiveType, Command {

}

// TYPES ,should be sepeerate d.ts files
declare var OnOffType: XType;
declare var ON: XType;
declare var OFF: XType;
declare var IncreaseDecreaseType: XXType;
declare var DECREASE: XXType;
declare var INCREASE: XXType;
declare var OpenClosedType: XType;
declare var CLOSED: XType;
declare var OPEN: XType;
declare var StopMoveType: XXType;
declare var MOVE: XXType;
declare var STOP: XXType;
declare var UpDownType: XType;
declare var DOWN: XType;
declare var UP: XType;

// declare var DateTimeType: XType;
//declare var DecimalType: XType;
declare var HSBType: XType;
declare var PercentType: XType;
declare var PointType: XType;
declare var StringType: XType;