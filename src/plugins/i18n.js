export default {
    install: (app, options) => {
        app.config.globalProperties.$translate = key => {
            return key.split('.').reduce((o, i) => {
                if (o) return o[i]
            }, options)
        }
        app.provide('i18n', options);   // i18n 키로 다국어 데이터 전달
    }
}