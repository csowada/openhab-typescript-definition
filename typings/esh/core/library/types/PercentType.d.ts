/**
 * The PercentType extends the {@link DecimalType} by putting constraints for its value on top (0-100).
 *
 * @author Kai Kreuzer - Initial contribution and API
 *
 */
declare class PercentType extends DecimalType {

    public static ZERO: PercentType
    public static HUNDRED:PercentType

    public static valueOf(value: string): PercentType;

}