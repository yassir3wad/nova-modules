Nova.booting((Vue, router, store) => {
    router.addRoutes([
        {
            name: 'modules',
            path: '/modules',
            component: require('./components/Tool'),
            props: {resourceName: 'modules'}
        },
    ])
})
