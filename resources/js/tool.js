Nova.booting((Vue, router, store) => {
    router.addRoutes([
        {
            name: 'nova-modules',
            path: '/nova-modules',
            component: require('./components/Tool'),
            props: {resourceName: 'modules'}
        },
    ])
})
