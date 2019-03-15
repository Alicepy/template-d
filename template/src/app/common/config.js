/**
 * @file require config and app entry
 * @Author: zhangxuelian
 * @Date: 2017-09-13 11:14:46
 * @Last Modified by: chenpeiyu
 * @Last Modified time: 2019-03-14 17:29:19
 **/
require.config({
    baseUrl: "",
    /* urlArgs:"v=" + (new Date()).getTime(), */
    urlArgs:"v=2.0.20180703",
    paths: {
        "angular": "bower_components/lib/angular/angular",
        "angular-bindonce": "bower_components/lib/angular/bindonce",
        "angular-animate": "bower_components/lib/angular/angular-animate",
        "angular-couch-potato": "bower_components/lib/angular/angular-couch-potato",
        "angular-shiro": "bower_components/lib/angular/angular-shiro",
        "angular-ui-router": "bower_components/lib/angular/angular-ui-router/release/angular-ui-router",
        "angular-file-upload":"bower_components/lib/angular-file-upload-master/dist/angular-file-upload.min",
        "angular-table":"bower_components/lib/angular-table-master/dist/angular-table.min",
        'angular-cookies': "bower_components/lib/angular/angular-cookies.min",
        "jquery": "bower_components/lib/jquery/jquery-1.10.2.min",
        "jquery-1.8.3": "bower_components/lib/jquery/jquery-1.8.3",
        "jquery-ui": "bower_components/lib/jquery-ui/jquery-ui",
        "lodash": "bower_components/lib/lodash/dist/lodash",
        "restangular": "bower_components/lib/restangular/dist/restangular",
        "angular-ui-bootstrap-tpls": "bower_components/lib/angular-ui-bootstrap/ui-bootstrap-tpls-0.12.0",
        "angular-ui-tree": "bower_components/lib/angular-ui-tree-master/dist/angular-ui-tree-forie8",
        'artDialog': 'bower_components/lib/artDialog/js/dialog-plus-min'
    },
    shim: {
        "angular": {
            deps: ['jquery'],
            exports: "angular"
        },
        "angular-ui-router": [
            "angular"
        ],
        "angular-cookies":[
            "angular"
        ],
        "angular-ui-bootstrap-tpls": [
            "angular"
        ],
        "angular-couch-potato": [
            "angular"
        ],
        "restangular": [
            "angular",
            "lodash"
        ],
        "jquery-ui": [
            "jquery"
        ],
        "artDialog":["jquery"]
    },
    packages:[{
		name : 'app',
		location : 'app'
	},{
		name : 'common',
		location : 'bower_components/common'
	},{
		name : 'services',
		location : 'bower_components/common/services'
	},{
		name : 'filters',
		location : 'bower_components/common/gx-filters'
	},{
		name : 'directives',
		location : 'bower_components/common/directives'
	},{
        name : 'lib',
        location : 'bower_components/lib'
    }]
});

//indexOf for IE8
if (!Array.prototype.indexOf)
{
    Array.prototype.indexOf = function(elt /*, from*/)
    {
    var len = this.length >>> 0;
    var from = Number(arguments[1]) || 0;
    from = (from < 0) ? Math.ceil(from) : Math.floor(from);
    if (from < 0)
        from += len;
    for (; from < len; from++){
        if (from in this && this[from] === elt)
        return from;
    }
    return -1;
    };
}
//indexOf for IE8
if(!Array.prototype.lastIndexOf){
    Array.prototype.lastIndexOf=function(item){
        var len = this.length;
        for(var i = len; i >= 0; i--){
            if(this[i] === item){
                return len-i;
            }
        }
        return -1;
    }
}
