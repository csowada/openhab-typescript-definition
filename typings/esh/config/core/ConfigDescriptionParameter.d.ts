interface ConfigDescriptionParameter {
	getContext(  ):string;
	getDefault(  ):string;
	getDescription(  ):string;
	getFilterCriteria(  ):any[];//java.util.List<any /*org.eclipse.smarthome.config.core.FilterCriteria*/>;
	getGroupName(  ):string;
	getLabel(  ):string;
	getLimitToOptions(  ):boolean;
	getMaximum(  ):any /*java.math.BigDecimal*/;
	getMinimum(  ):any /*java.math.BigDecimal*/;
	getMultipleLimit(  ):number|null;
	getName(  ):string;
	getOptions(  ):any[];//java.util.List<any /*org.eclipse.smarthome.config.core.ParameterOption*/>;
	getPattern(  ):string;
	getStepSize(  ):any /*java.math.BigDecimal*/;
	getType(  ):any /*org.eclipse.smarthome.config.core.ConfigDescriptionParameter$Type*/;
	getUnit(  ):string;
	getUnitLabel(  ):string;
	isAdvanced(  ):boolean;
	isMultiple(  ):boolean|null;
	isReadOnly(  ):boolean|null;
	isRequired(  ):boolean;
	isVerifyable(  ):boolean|null;
}