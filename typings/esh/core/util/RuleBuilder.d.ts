declare class RuleBuilder {

    public static create(ruleId: string): RuleBuilder

    public static create( r:Rule):RuleBuilder

    public static  create( template: /*RuleTemplate*/ any, uid: string, name: string, configuration: Configuration, visibility: Visibility):RuleBuilder

    public withName(name: string): RuleBuilder

    public withDescription(description: string): RuleBuilder

    public withTemplateUID(uid: string): RuleBuilder

    public withVisibility(visibility: Visibility): RuleBuilder

    public withTriggers(...triggers:Trigger[]): RuleBuilder

    public withTriggers(triggers: Trigger[]): RuleBuilder

    public withConditions(...conditions: Condition[]): RuleBuilder

    public withConditions(conditions:Condition[]): RuleBuilder

    public withActions(...actions:Action[]): RuleBuilder

    public withActions(actions:Action[]): RuleBuilder

    public withTags(...tags:string[]): RuleBuilder

    public withTags(tags: string[]): RuleBuilder

    public withConfiguration(ruleConfiguration: Configuration): RuleBuilder

    public withConfigurationDescriptions(configDescs: ConfigDescriptionParameter[]): RuleBuilder

    public build(): Rule

}