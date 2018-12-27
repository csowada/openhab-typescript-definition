/**
 * The ItemRegistry is the central place, where items are kept in memory and their state
 * is permanently tracked. So any code that requires the current state of items should use
 * this service (instead of trying to keep their own local copy of the items).
 *
 * Items are registered by {@link ItemProvider}s, which can provision them from any source
 * they like and also dynamically remove or add items.
 *
 * @author Kai Kreuzer - Initial contribution and API
 *
 */
interface ItemRegistry {

    /**
     * This method retrieves a single item from the registry.
     *
     * @param name the item name
     * @return the uniquely identified item
     * @throws ItemNotFoundException if no item matches the input
     */
    getItem(name: string) : Item;

    /**
     * This method retrieves a single item from the registry.
     * Search patterns and shortened versions are supported, if they uniquely identify an item
     *
     * @param name the item name, a part of the item name or a search pattern
     * @return the uniquely identified item
     * @throws ItemNotFoundException if no item matches the input
     * @throws ItemNotUniqueException if multiply items match the input
     */
    getItemByPattern(name: string): Item;

    /**
     * This method retrieves all items that are currently available in the registry
     *
     * @return a collection of all available items
     */
    getItems():Item[];

    /**
     * This method retrieves all items with the given type
     *
     * @param type
     *            - item type as defined by {@link ItemFactory}s
     * @return a collection of all items of the given type
     */
    getItemsOfType(type:string) : Item[];

    /**
     * This method retrieves all items that match a given search pattern
     *
     * @return a collection of all items matching the search pattern
     */
    getItems(pattern:string):Item[];

    /**
     * Returns list of items which contains all of the given tags.
     *
     * @param tags
     *            - array of tags to be present on the returned items.
     * @return list of items which contains all of the given tags.
     */
    getItemsByTag(...tags:string[]):Item[];

    /**
     * Returns list of items with a certain type containing all of the given tags.
     *
     * @param type
     *            - item type as defined by {@link ItemFactory}s
     * @param tags
     *            - array of tags to be present on the returned items.
     * @return list of items which contains all of the given tags.
     */
    getItemsByTagAndType(type:string, ...tags:string[]):Item[];

    /**
     * Returns list of items which contains all of the given tags.
     *
     * @param typeFilter
     *            - subclass of {@link GenericItem} to filter the resulting list
     *            for.
     * @param tags
     *            - array of tags to be present on the returned items.
     * @return list of items which contains all of the given tags, which is
     *         filtered by the given type filter.
     */
    getItemsByTag(typeFilter:any, ...tags:string[]):Item[];

    /**
     * @see ManagedItemProvider#remove(String, boolean)
     */
    remove(itemName:string, recursive:boolean):Item;
}