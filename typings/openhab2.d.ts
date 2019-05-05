
declare const require: any;

declare interface XType extends PrimitiveType, State, Command {

}

declare interface XXType extends PrimitiveType, Command {

}

declare class Enum extends java.lang.Object{
    // public toString(): string;
    public is(value: Enum | string): boolean;
}