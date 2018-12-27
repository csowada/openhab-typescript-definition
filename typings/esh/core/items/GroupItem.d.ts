declare class GroupItem extends GenericItem {

    /**
     * Returns the direct members of this {@link GroupItem} regardless if these
     * members are {@link GroupItem}s as well.
     *
     * @return the direct members of this {@link GroupItem}
     */
    getMembers():Item[];

}