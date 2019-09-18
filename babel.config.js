module.exports = {
    presets: [
        '@vue/app'
    ],
    plugins: [
        // 载入vant
        ['import', {
            libraryName: 'vant',
            libraryDirectory: 'es',
            style: true
        }, 'vant']
    ]
}
