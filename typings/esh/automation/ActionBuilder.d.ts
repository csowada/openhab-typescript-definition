declare class ActionBuilder extends ModuleBuilder<ActionBuilder, Action> {

    public static create(): ActionBuilder

    public static create(action: Action): ActionBuilder

    public withInputs(inputs: {[index: string]:string}): ActionBuilder //Map<String, String> inputs

    public build(): Action

}