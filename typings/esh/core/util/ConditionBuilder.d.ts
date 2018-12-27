declare class ConditionBuilder extends ModuleBuilder<ConditionBuilder, Condition> {

    public static create(): ConditionBuilder

    public static create(condition: Condition): ConditionBuilder

    public withInputs(inputs: {[index: string]:string}): ConditionBuilder //Map<String, String> inputs

    public build(): Condition



	withConfiguration<B>( arg0:Configuration ):B;
	withDescription<B>( arg0:string ):B;
	withId<B>( arg0:string ):B;
	withLabel<B>( arg0:string ):B;
	withTypeUID<B>( arg0:string ):B;

}