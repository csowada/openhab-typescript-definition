interface AutomationManager extends java.lang.IObject {

    removeModuleType(UID:string):void;

    removeHandler(typeUID:string):void;

    removePrivateHandler(privId:string):void;

    removeAll():void;

    addRule(element:Rule):Rule;

    addConditionType(condititonType:ConditionType):void;

    addConditionHandler(uid:string, conditionHandler:ScriptedHandler):void;

    addPrivateConditionHandler(conditionHandler:SimpleConditionHandler):string;

    addActionType(actionType:ActionType):void;

    addActionHandler(uid:string, actionHandler:ScriptedHandler):void;

    addPrivateActionHandler(actionHandler:SimpleActionHandler):string;

    addTriggerType(triggerType:TriggerType):void;

    addTriggerHandler(uid:string, triggerHandler:ScriptedHandler):void;

    addPrivateTriggerHandler(triggerHandler:SimpleTriggerHandler):string;
}