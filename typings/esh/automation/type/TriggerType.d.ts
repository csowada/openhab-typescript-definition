interface TriggerType {
	getConfigurationDescriptions():ConfigDescriptionParameter[];
	getDescription():string;
	getLabel():string;
	getOutputs():any[]; //java.util.List<any /*org.eclipse.smarthome.automation.type.Output*/>;
	getTags():string[];
	getUID():string;
	getVisibility(): Visibility;
}