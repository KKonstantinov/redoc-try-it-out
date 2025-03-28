export declare abstract class Config<T> {
    protected readonly options: T;
    constructor(options: T);
    protected get cdnUrl(): string;
}
