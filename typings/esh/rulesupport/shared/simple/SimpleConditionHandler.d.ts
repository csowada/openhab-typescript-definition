/**
 *
 * @author Simon Merschjohann - Initial contribution
 */
declare abstract class SimpleConditionHandler implements ScriptedHandler {
    public init( condition: Condition): void;

    public abstract isSatisfied(condition: Condition, inputs: {[index: string]: any}): boolean
}