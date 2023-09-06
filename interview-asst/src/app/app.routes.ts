import { Component } from '@angular/core';
import { Route } from '@angular/router';
import { FileConverterComponent } from './file-converter/file-converter.component';

export const appRoutes: Route[] = [
    {
        path: 'file-converter',
        component: FileConverterComponent
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'file-converter'
    }
];
