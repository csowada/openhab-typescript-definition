declare abstract class AbstractEvent extends java.lang.Object implements Event {
    
    getType(): string  

    getTopic(): string

    getPayload(): string

    getSource(): string
}