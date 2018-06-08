

export interface QueryApi<T extends ViewDataData=ViewDataData> {
    execute(): Promise<QueryApiResult<T>>
}

export type QueryApiResult<T> = {
    data: T
    error?: Error[]
}

export interface InitViewData {
    <T extends ViewData>(req: any, res: any): T
}

export interface ViewData<T extends ViewDataData=ViewDataData> {
    api?: QueryApi<T>
    data?: T
}

export interface ViewDataData {
    [index: string]: any
}

