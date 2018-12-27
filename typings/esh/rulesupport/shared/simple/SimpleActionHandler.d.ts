/**
 *
 * @author Simon Merschjohann - Initial contribution
 */
declare abstract class SimpleActionHandler implements ScriptedHandler {

    public init( module: Action): void;

    public abstract execute( module: Action, inputs: {[index: string]: any}): any;
}