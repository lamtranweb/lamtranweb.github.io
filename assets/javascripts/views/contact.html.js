define(["require","exports","module","common/Utils","views/Base","template!templates/mypartials/contact"],function(e,t,n){"use strict";var r=e("common/Utils"),i=e("views/Base"),s=e("template!templates/mypartials/contact"),o=n.config().id,u=function(){i.call(this,o,s)};return r.inherit(u,i,{wireEvents:function(e){this._hijackLinks(e)}}),new u});