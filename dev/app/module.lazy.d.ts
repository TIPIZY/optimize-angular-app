import { PreloadingStrategy, Route } from '@angular/router';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';
export declare class PreloadSelectedModules implements PreloadingStrategy {
    preloadedModules: string[];
    preload(route: Route, load: Function): Observable<any>;
}
export declare class AppLazyModule {
}