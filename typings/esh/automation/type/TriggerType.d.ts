/**
 * This class provides common functionality for creating {@link Trigger} instances by supplying their meta-information.
 * Each {@link TriggerType} is uniquely identifiable in scope of the {@link ModuleTypeRegistry} and defines
 * {@link ConfigDescriptionParameter}s that are meta-information for configuration of the future {@link Trigger}
 * instances and meta-information for {@link Output}s used from these {@link Trigger} instances.
 *
 * @author Yordan Mihaylov - Initial Contribution
 */
declare class TriggerType extends ModuleType {

	// constructors missing

    /**
     * Gets the meta-information descriptions of {@link Output}s defined by this type.<br>
     *
     * @return a {@link List} of {@link Output} definitions.
     */
    public getOutputs(): Output[];
}