System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var View;
    return {
        setters: [],
        execute: function () {
            View = class View {
                constructor(selector, escapar = false) {
                    this._elemento = $(selector);
                    this._escapar = escapar;
                }
                update(modal) {
                    let template = this.template(modal);
                    if (this._escapar)
                        template = template.replace(/<script>[\s\S]*?<\/script>/, '');
                    this._elemento.html(template);
                }
            };
            exports_1("View", View);
        }
    };
});
