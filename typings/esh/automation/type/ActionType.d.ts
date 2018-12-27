/**
 * This class provides common functionality for creating {@link Action} instances by supplying their meta-information.
 * Each {@link ActionType} is uniquely identifiable in scope of the {@link ModuleTypeRegistry} and defines
 * {@link ConfigDescriptionParameter}s that are meta-information for configuration of the future {@link Action}
 * instances and meta-information for {@link Input}s and {@link Output}s used from these {@link Action} instances.
 *
 * @author Yordan Mihaylov - Initial Contribution
 * @author Ana Dimova - Initial Contribution
 * @author Vasil Ilchev - Initial Contribution
 */
declare class ActionType extends ModuleType {

	constructor(UID: string, configDescriptions: ConfigDescriptionParameter[], inputs: Input[]);
	constructor(UID: string, configDescriptions: ConfigDescriptionParameter[], inputs: Input[], outputs: Output[]);
	constructor(UID: string, configDescriptions: ConfigDescriptionParameter[], label: string, description: string, tags: string[], visibility: Visibility, inputs: Input[], outputs: Output[]);

	/**
     * Gets the meta-information descriptions of {@link Input}s defined by this type.
     *
     * @return a {@link List} with {@link Input} definitions.
     */
	getInputs(  ): Input[];

	/**
     * Gets the meta-information descriptions of {@link Output}s defined by this type.
     *
     * @return a {@link List} with {@link Output} definitions.
     */
	getOutputs(  ): Output[];
}