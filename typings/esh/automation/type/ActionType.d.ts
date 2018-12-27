interface ActionType extends ModuleType {
    equals( arg0:any /*java.lang.Object*/ ):boolean;
	getConfigurationDescriptions(  ):ConfigDescriptionParameter[];
	getDescription(  ):string;
	getInputs(  ):java.util.List<any /*org.eclipse.smarthome.automation.type.Input*/>;
	getLabel(  ):string;
	getOutputs(  ):java.util.List<any /*org.eclipse.smarthome.automation.type.Output*/>;
	getTags(  ):java.util.Set<string>;
	getUID(  ):string;
	getVisibility(  ):org.eclipse.smarthome.automation.Visibility;
	toString(  ):string;
}