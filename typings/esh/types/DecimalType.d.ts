/**
 * The decimal type uses a BigDecimal internally and thus can be used for
 * integers, longs and floating point numbers alike.
 *
 * @author Kai Kreuzer - Initial contribution and API
 *
 */
declare class DecimalType extends Number implements PrimitiveType, State, Command, Comparable<DecimalType> {

    constructor();

    // public DecimalType(BigDecimal value) {
    //     this.value = value;
    // }

    // public DecimalType(long value) {
    //     this.value = BigDecimal.valueOf(value);
    // }

    // public DecimalType(double value) {
    //     this.value = BigDecimal.valueOf(value);
    // }

    // public DecimalType(String value) {
    //     this.value = new BigDecimal(value);
    // }

    // @Override
    // public String toString() {
    //     return toFullString();
    // }

    toFullString():string

    // public static DecimalType valueOf(String value) {
    //     return new DecimalType(value);
    // }

    format(pattern:string):string;

    toBigDecimal():number;  //

    compareTo(o:DecimalType): number;

    // @Override
    // public double doubleValue() {
    //     return value.doubleValue();
    // }

    // @Override
    // public float floatValue() {
    //     return value.floatValue();
    // }

    // @Override
    // public int intValue() {
    //     return value.intValue();
    // }

    // @Override
    // public long longValue() {
    //     return value.longValue();
    // }

    as(target:State):State
}