/**
 * This class provides common functionality for creating {@link ModuleType} instances. Each {@link ModuleType} instance
 * defines the meta-information needed for creation of a {@link Module} instance which is a building block for a
 * {@link Rule}. The meta-information describes the {@link Configuration} of a {@link Module} providing list with
 * {@link ConfigDescriptionParameter}s, {@link Input}s and {@link Output}s of a {@link Module}. Each {@link ModuleType}
 * instance owns an unique id which is used as reference in the {@link Module}s, to find their meta-information.
 * <p>
 * Whether the {@link ModuleType}s can be used by anyone, depends from their {@link Visibility} value, but they can be
 * modified only by their creator.
 *
 * @author Yordan Mihaylov - Initial Contribution
 * @author Ana Dimova - Initial Contribution
 *
 */
declare abstract class ModuleType implements Identifiable<string> {

	// constructors missing

	getConfigurationDescriptions(): ConfigDescriptionParameter[];

	getDescription(): string;

	getLabel(): string;

	getTags(): string[];

	getUID(): string;

	getVisibility(  ): Visibility;
}