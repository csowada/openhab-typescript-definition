/**
 *
 * @author Simon Merschjohann - Initial contribution
 */
interface SimpleTriggerHandler {
    init(module: Trigger): void;

    setRuleEngineCallback( module: Trigger,  ruleCallback: SimpleTriggerHandlerCallback): void;
}