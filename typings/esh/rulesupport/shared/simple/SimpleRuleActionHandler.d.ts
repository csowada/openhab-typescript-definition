/**
 *
 * @author Simon Merschjohann - Initial contribution
 */
interface SimpleRuleActionHandler extends java.lang.IObject {
    execute(module: Action, inputs: any): any;
}