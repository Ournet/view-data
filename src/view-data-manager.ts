import { ViewData, InitViewData } from "./view-data";

export type ViewDataManagerOptions = {
    initViewData: InitViewData
}

export class ViewDataManager {
    constructor(private options: ViewDataManagerOptions) { }

    getViewData<T extends ViewData>(req: any, res: any): T {
        if (!res.locales.viewData) {
            res.locales.viewData = this.options.initViewData<T>(req, res);
        }
        return res.locals.viewData as T;
    }
}
