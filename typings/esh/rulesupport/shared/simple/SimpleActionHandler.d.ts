/**
 *
 * @author Simon Merschjohann - Initial contribution
 */
declare abstract class SimpleActionHandler implements ScriptedHandler {

    public getClass(): java.lang.Class;

    public hashCode(): number;

    public toString(): string;

    public equals(obj: any): boolean;

    public init( module: Action): void;

    public abstract execute( module: Action, inputs: {[index: string]: any}): any;
}