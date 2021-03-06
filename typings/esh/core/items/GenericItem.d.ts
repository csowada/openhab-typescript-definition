declare abstract class GenericItem extends java.lang.Object implements Item {
        /**
     * returns the current state of the item
     *
     * @return the current state
     */
    getState():State;

    /**
     * returns the current state of the item as a specific type
     *
     * @return the current state in the requested type or
     *         null, if state cannot be provided as the requested type
     */
    // public State getStateAs(Class<? extends State> typeClass);

    /**
     * returns the name of the item
     *
     * @return the name of the item
     */
    getName():string;

    /**
     * returns the item type as defined by {@link ItemFactory}s
     *
     * @return the item type
     */
     getType():string;

    /**
     * <p>
     * This method provides a list of all data types that can be used to update the item state
     * </p>
     * <p>
     * Imagine e.g. a dimmer device: It's status could be 0%, 10%, 50%, 100%, but also OFF or ON and maybe UNDEFINED. So
     * the accepted data types would be in this case {@link PercentType}, {@link OnOffType} and {@link UnDefType}
     * </p>
     *
     * <p>
     * The order of data types denotes the order of preference. So in case a state needs to be converted
     * in order to be accepted, it will be attempted to convert it to a type from top to bottom. Therefore
     * the type with the least information loss should be on top of the list - in the example above the
     * {@link PercentType} carries more information than the {@link OnOffType}, hence it is listed first.
     * </p>
     * 
     * @return a list of data types that can be used to update the item state
     */
    // public List<Class<? extends State>> getAcceptedDataTypes();

    /**
     * <p>
     * This method provides a list of all command types that can be used for this item
     * </p>
     * <p>
     * Imagine e.g. a dimmer device: You could ask it to dim to 0%, 10%, 50%, 100%, but also to turn OFF or ON. So the
     * accepted command types would be in this case {@link PercentType}, {@link OnOffType}
     * </p>
     *
     * @return a list of all command types that can be used for this item
     */
    // public List<Class<? extends Command>> getAcceptedCommandTypes();

    /**
     * Returns a list of the names of the groups this item belongs to.
     *
     * @return list of item group names
     */
    getGroupNames():string[];

    /**
     * Returns a set of tags. If the item is not tagged, an empty set is returned.
     *
     * @return set of tags.
     */
    getTags():string[];

    /**
     * Returns the label of the item or null if no label is set.
     *
     * @return item label or null
     */
    getLabel():string;

    /**
     * Returns true if the item's tags contains the specific tag, otherwise false.
     *
     * @param tag - a tag whose presence in the item's tags is to be tested.
     * @return true if the item's tags contains the specific tag, otherwise false.
     */
    hasTag(tag:string):boolean;

    /**
     * Returns the category of the item or null if no category is set.
     *
     * @return category or null
     */
    getCategory():string;

    /**
     * Returns the state description (uses the default locale).
     *
     * @return state description (can be null)
     */
    // public StateDescription getStateDescription();

    /**
     * Returns the state description for a given locale.
     *
     * @param locale
     *            locale (can be null)
     * @return state description (can be null)
     */
    // public StateDescription getStateDescription(Locale locale);

    getUID(): string;
}