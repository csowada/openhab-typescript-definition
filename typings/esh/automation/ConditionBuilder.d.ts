declare class ConditionBuilder extends ModuleBuilder<ConditionBuilder, Condition> {

    public static create(): ConditionBuilder

    public static create(condition: Condition): ConditionBuilder

    public withInputs(inputs: {[index: string]:string}): ConditionBuilder //Map<String, String> inputs

    public build(): Condition

}