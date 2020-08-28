import { CommonModule } from '@angular/common';

import { UserData } from './data/users';
import { UserService } from './mock/users.service';
import { MockDataModule } from './mock/mock-data.module';
import { ModuleWithProviders, NgModule } from '@angular/core';

const DATA_SERVICES = [
    { provide: UserData, useClass: UserService }
];

export const CORE_PROVIDERS = [
    ...MockDataModule.forRoot().providers,
    ...DATA_SERVICES
];


@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
    ],
    declarations: [],
})
export class CoreModule {
    static forRoot(): ModuleWithProviders<CoreModule> {
        return {
            ngModule: CoreModule,
            providers: [
                ...CORE_PROVIDERS,
            ],
        };
    }
}