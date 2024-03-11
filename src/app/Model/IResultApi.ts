export interface IResultApi<T> {
    data: T;
    message: string;
    status: number;
    success: boolean;
}
