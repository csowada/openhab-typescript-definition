declare class DateTimeType implements PrimitiveType, State, Command {

    static DATE_PATTERN:string
    static DATE_PATTERN_WITH_TZ:string
    static DATE_PATTERN_WITH_TZ_AND_MS:string
    static DATE_PATTERN_WITH_TZ_AND_MS_ISO:string

    constructor();
    constructor(calendar:Calendar);
    constructor(calendarValue:string);
    constructor();

    getCalendar():Calendar;

    static valueOf(value:string):DateTimeType

    format(locale:Locale, pattern:string):String

    toFullString():string

    format(pattern:string):string;

    compareTo(o:DecimalType): number;

    as(target:State):State


}