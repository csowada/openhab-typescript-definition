declare const State: State;
declare const Command: State;
declare const DateTime: any;                //org.joda.time.DateTime (if Jodatime is available)
declare const LocalTime: any;               //org.joda.time.LocalTime (if Jodatime is available)
declare const StringUtils: any;             //org.apache.commons.lang.StringUtils
declare const URLEncoder: any;              //java.net.URLEncoder
declare const FileUtils: any;               //org.apache.commons.io.FileUtils
declare const FilenameUtils: any;           //org.apache.commons.io.FilenameUtils
declare const File: java.io.File;           //java.io.File

declare const ON: OnOffType;
declare const OFF: OnOffType;
declare const DECREASE: IncreaseDecreaseType;             // IncreaseDecreaseType enum item
declare const INCREASE: IncreaseDecreaseType;             // IncreaseDecreaseType enum item
declare const CLOSED: OpenClosedType;                // OpenClosedType enum item
declare const OPEN: OpenClosedType;                  // OpenClosedType enum item
declare const MOVE: StopMoveType;                 // StopMoveType enum item
declare const STOP: StopMoveType;                 // StopMoveType enum item
declare const DOWN: UpDownType;                  // UpDownType enum item
declare const UP: UpDownType;                    // UpDownType enum item
declare const NULL: UnDefType;                  // UnDefType enum item
declare const UNDEF: UnDefType;                 // UnDefType enum item
declare const REWIND: RewindFastforwardType;                // RewindFastforwardType enum item
declare const FASTFORWARD: RewindFastforwardType;           // RewindFastforwardType enum item
declare const NEXT: NextPreviousType;                  // NextPreviousType enum item
declare const PREVIOUS: NextPreviousType;              // NextPreviousType enum item
declare const PLAY: PlayPauseType;                  // PlayPauseType enum item
declare const PAUSE: PlayPauseType;                 // PlayPauseType enum item

// declare const DecimalType: DecimalType;
declare const QuantityType: XType;          // org.eclipse.smarthome.core.library.types.QuantityType
// declare const HSBType: XType;               // org.eclipse.smarthome.core.library.types.HSBType
// declare const PercentType: XType;           // org.eclipse.smarthome.core.library.types.PercentType
// declare const PointType: XType;             // org.eclipse.smarthome.core.library.types.PointType
// declare const StringType: XType;            // org.eclipse.smarthome.core.library.types.StringType
// declare const StringListType: XType;        // org.eclipse.smarthome.core.library.types.StringListType
// declare const RawType: XType;               // org.eclipse.smarthome.core.library.types.RawType

declare const SIUnits: XType;               // org.eclipse.smarthome.core.library.unit.SIUnits
declare const ImperialUnits: XType;         // org.eclipse.smarthome.core.library.unit.ImperialUnits
declare const MetricPrefix: XType;          // org.eclipse.smarthome.core.library.unit.MetricPrefix
declare const SmartHomeUnits: XType;        // org.eclipse.smarthome.core.library.unit.SmartHomeUnits

declare const items: any;                   // ItemRegistryDelegate implements Map<String, State>
declare const itemRegistry: ItemRegistry;
declare const ir: ItemRegistry;
declare const things: any;              // ThingRegistry;
declare const events: SimpleBusEvent;

declare const rules: any;               //RuleRegistry;
declare const scriptExtension: ScriptExtensionProvider;
declare const se: ScriptExtensionProvider;