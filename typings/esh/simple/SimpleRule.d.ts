declare abstract class SimpleRule extends Rule implements SimpleRuleActionHandler {
    execute(module: Action, inputs: any): any;
}