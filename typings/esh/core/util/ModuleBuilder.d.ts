declare abstract class ModuleBuilder<B extends ModuleBuilder<B, T>, T extends Module> {
    
    public withDescription(description: string):B
    public withId(id: string):B
    public withLabel(label: string): B
    public withTypeUID(typeUID: string): B
    public withConfiguration(configuration: Configuration):B

    public abstract build(): T;

    public static createAction(): ActionBuilder;

    public static  createAction(action: Action): ActionBuilder;

    public static createCondition(): ConditionBuilder;

    public static createCondition(condition: Condition): ConditionBuilder;

    public static  createTrigger(): TriggerBuilder;

    public static createTrigger(trigger: Trigger): TriggerBuilder
}