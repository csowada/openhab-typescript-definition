/**
 * This is a marker interface for all state types.
 *
 * @author Kai Kreuzer - Initial contribution and API
 *
 */
interface State extends Type{
    
    /**
     * Convert this {@link State}'s value into another type
     *
     * @param target the desired {@link State} type
     * @return the {@link State}'s value in the given type's representation, or <code>null</code> if the conversion was
     *         not possible
     */
    as(target:State):State

}