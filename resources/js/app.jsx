import React from 'react'
import {hydrateRoot} from 'react-dom/client'
import {createInertiaApp } from '@inertiajs/inertia-react'
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers'

createInertiaApp({
    resolve: (name) => resolvePageComponent(`./component/${name}.jsx`,import.meta.glob('./component/**/*.jsx')),
    setup({ el, App, props }) {
        hydrateRoot(el, <App {...props} />)
    },
})