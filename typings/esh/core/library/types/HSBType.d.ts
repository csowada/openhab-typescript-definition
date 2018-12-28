declare class HSBType extends PercentType implements ComplexType, State, Command {
    /**
     * Returns all constituents with their names as a sorted map
     *
     * @return all constituents with their names
     */
    getConstituents(): {[index: string]: PrimitiveType};
}