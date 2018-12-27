declare interface ActiveItem extends Item {

     /**
     * Sets the label of an item
     *
     * @param label
     *            label (can be null)
     */
    setLabel(label:string):void;

    /**
     * Sets the category of the item (can be null)
     *
     * @param category
     *            category
     */
    setCategory(category:string):void;

    /**
     * Adds a tag to the item.
     *
     * @param tag
     *            a tag that is to be added to item's tags.
     */
    addTag(tag:string):void;

    /**
     * Adds tags to the item.
     *
     * @param tags
     *            tags that are to be added to item's tags.
     */
    addTags(...tags:string[]):void;

    /**
     * Adds tags to the item.
     *
     * @param tags
     *            tags that are to be added to item's tags.
     */
    addTags(tags:string[]):void;

    /**
     * Removes a tag from the item.
     *
     * @param tag
     *            a tag that is to be removed from item's tags.
     */
    removeTag(tag:string):void;

    /**
     * Clears all tags of this item.
     */
    removeAllTags():void;

    /**
     * Removes the according item from a group.
     *
     * @param groupItemName
     *            name of the group (must not be null)
     */
    removeGroupName(groupItemName:string):void;

    /**
     * Assigns the according item to a group.
     *
     * @param groupItemName
     *            name of the group (must not be null)
     */
    addGroupName(groupItemName:string):void;

    /**
     * Assigns the according item to the given groups.
     *
     * @param groupItemNames
     *            names of the groups (must not be null)
     */
    addGroupNames(...groupItemNames:string[]):void;

    /**
     * Assigns the according item to the given groups.
     *
     * @param groupItemNames
     *            names of the groups (must not be null)
     */
    addGroupNames(groupItemNames:string[]):void;
}