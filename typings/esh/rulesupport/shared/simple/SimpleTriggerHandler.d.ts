/**
 *
 * @author Simon Merschjohann - Initial contribution
 */
interface SimpleTriggerHandler extends java.lang.IObject {
    init(module: Trigger): void;

    setRuleEngineCallback( module: Trigger,  ruleCallback: SimpleTriggerHandlerCallback): void;
}