declare class TriggerBuilder extends ModuleBuilder<TriggerBuilder, Trigger> {

    public static create(): TriggerBuilder

    public build(): Trigger

    public withConfiguration<B>( arg0:Configuration ):TriggerBuilder;
    
    public withDescription<B>( arg0:string ):TriggerBuilder;
    
    public withId<B>( arg0:string ):TriggerBuilder;
    
    public withLabel<B>( arg0:string ):TriggerBuilder;
    
    public withTypeUID<B>( arg0:string ):TriggerBuilder;
}