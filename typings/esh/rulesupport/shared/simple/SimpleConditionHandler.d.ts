/**
 *
 * @author Simon Merschjohann - Initial contribution
 */
declare abstract class SimpleConditionHandler implements ScriptedHandler {

    public getClass(): java.lang.Class;

    public hashCode(): number;

    public toString(): string;

    public equals(obj: any): boolean;

    public init( condition: Condition): void;

    public abstract isSatisfied(condition: Condition, inputs: {[index: string]: any}): boolean
}