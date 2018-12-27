/**
 *
 * @author Simon Merschjohann - Initial contribution
 */
interface SimpleRuleActionHandler {
    execute(module: Action, inputs: any): any;
}