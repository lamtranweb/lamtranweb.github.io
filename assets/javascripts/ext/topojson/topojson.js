!function(){function t(e,t){function i(t){var n=e.arcs[t],r=n[0],i=[0,0];return n.forEach(function(e){i[0]+=e[0],i[1]+=e[1]}),[r,i]}var n={},r={};t.forEach(function(e){var t=i(e),s=t[0],o=t[1],u,a;if(u=r[s]){delete r[u.end],u.push(e),u.end=o;if(a=n[o]){delete n[a.start];var f=a===u?u:u.concat(a);n[f.start=u.start]=r[f.end=a.end]=f}else if(a=r[o]){delete n[a.start],delete r[a.end];var f=u.concat(a.map(function(e){return~e}).reverse());n[f.start=u.start]=r[f.end=a.start]=f}else n[u.start]=r[u.end]=u}else if(u=n[o]){delete n[u.start],u.unshift(e),u.start=s;if(a=r[s]){delete r[a.end];var l=a===u?u:a.concat(u);n[l.start=a.start]=r[l.end=u.end]=l}else if(a=n[s]){delete n[a.start],delete r[a.end];var l=a.map(function(e){return~e}).reverse().concat(u);n[l.start=a.end]=r[l.end=u.end]=l}else n[u.start]=r[u.end]=u}else if(u=n[s]){delete n[u.start],u.unshift(~e),u.start=o;if(a=r[o]){delete r[a.end];var l=a===u?u:a.concat(u);n[l.start=a.start]=r[l.end=u.end]=l}else if(a=n[o]){delete n[a.start],delete r[a.end];var l=a.map(function(e){return~e}).reverse().concat(u);n[l.start=a.end]=r[l.end=u.end]=l}else n[u.start]=r[u.end]=u}else if(u=r[o]){delete r[u.end],u.push(~e),u.end=s;if(a=r[s]){delete n[a.start];var f=a===u?u:u.concat(a);n[f.start=u.start]=r[f.end=a.end]=f}else if(a=n[s]){delete n[a.start],delete r[a.end];var f=u.concat(a.map(function(e){return~e}).reverse());n[f.start=u.start]=r[f.end=a.start]=f}else n[u.start]=r[u.end]=u}else u=[e],n[u.start=s]=r[u.end=o]=u});var s=[];for(var o in r)s.push(r[o]);return s}function n(e,n,r){var i=[];if(arguments.length>1){var o=[],u;function a(e){e<0&&(e=~e),(o[e]||(o[e]=[])).push(u)}function f(e){e.forEach(a)}function l(e){e.forEach(f)}function c(e){e.type==="GeometryCollection"?e.geometries.forEach(c):e.type in h&&(u=e,h[e.type](e.arcs))}var h={LineString:f,MultiLineString:l,Polygon:l,MultiPolygon:function(e){e.forEach(l)}};c(n),o.forEach(arguments.length<3?function(e,t){i.push(t)}:function(e,t){r(e[0],e[e.length-1])&&i.push(t)})}else for(var p=0,d=e.arcs.length;p<d;++p)i.push(p);return s(e,{type:"MultiLineString",arcs:t(e,i)})}function r(e,t){return t.type==="GeometryCollection"?{type:"FeatureCollection",features:t.geometries.map(function(t){return i(e,t)})}:i(e,t)}function i(e,t){var n={type:"Feature",id:t.id,properties:t.properties||{},geometry:s(e,t)};return t.id==null&&delete n.id,n}function s(e,t){function i(e,t){t.length&&t.pop();for(var i=r[e<0?~e:e],s=0,u=i.length,a;s<u;++s)t.push(a=i[s].slice()),n(a,s);e<0&&o(t,u)}function s(e){return e=e.slice(),n(e,0),e}function u(e){var t=[];for(var n=0,r=e.length;n<r;++n)i(e[n],t);return t.length<2&&t.push(t[0].slice()),t}function a(e){var t=u(e);while(t.length<4)t.push(t[0].slice());return t}function f(e){return e.map(a)}function l(e){var t=e.type;return t==="GeometryCollection"?{type:t,geometries:e.geometries.map(l)}:t in c?{type:t,coordinates:c[t](e)}:null}var n=p(e.transform),r=e.arcs,c={Point:function(e){return s(e.coordinates)},MultiPoint:function(e){return e.coordinates.map(s)},LineString:function(e){return u(e.arcs)},MultiLineString:function(e){return e.arcs.map(u)},Polygon:function(e){return f(e.arcs)},MultiPolygon:function(e){return e.arcs.map(f)}};return l(t)}function o(e,t){var n,r=e.length,i=r-t;while(i<--r)n=e[i],e[i++]=e[r],e[r]=n}function u(e,t){var n=0,r=e.length;while(n<r){var i=n+r>>>1;e[i]<t?n=i+1:r=i}return n}function a(e){function r(e,n){e.forEach(function(e){e<0&&(e=~e);var r=t[e];r?r.push(n):t[e]=[n]})}function i(e,t){e.forEach(function(e){r(e,t)})}function s(e,t){e.type==="GeometryCollection"?e.geometries.forEach(function(e){s(e,t)}):e.type in o&&o[e.type](e.arcs,t)}var t={},n=e.map(function(){return[]}),o={LineString:r,MultiLineString:i,Polygon:i,MultiPolygon:function(e,t){e.forEach(function(e){i(e,t)})}};e.forEach(s);for(var a in t)for(var f=t[a],l=f.length,c=0;c<l;++c)for(var h=c+1;h<l;++h){var p=f[c],d=f[h],v;(v=n[p])[a=u(v,d)]!==d&&v.splice(a,0,d),(v=n[d])[a=u(v,p)]!==p&&v.splice(a,0,p)}return n}function f(e,t){function f(e){i.remove(e),e[1][2]=t(e),i.push(e)}var n=p(e.transform),r=d(e.transform),i=h(c),s=0,o;t||(t=l),e.arcs.forEach(function(e){var r=[];e.forEach(n);for(var s=1,u=e.length-1;s<u;++s)o=e.slice(s-1,s+2),o[1][2]=t(o),r.push(o),i.push(o);e[0][2]=e[u][2]=Infinity;for(var s=0,u=r.length;s<u;++s)o=r[s],o.previous=r[s-1],o.next=r[s+1]});while(o=i.pop()){var u=o.previous,a=o.next;o[1][2]<s?o[1][2]=s:s=o[1][2],u&&(u.next=a,u[2]=o[2],f(u)),a&&(a.previous=u,a[0]=o[0],f(a))}return e.arcs.forEach(function(e){e.forEach(r)}),e}function l(e){return Math.abs((e[0][0]-e[2][0])*(e[1][1]-e[0][1])-(e[0][0]-e[1][0])*(e[2][1]-e[0][1]))}function c(e,t){return e[1][2]-t[1][2]}function h(e){function r(t){var r=n[t];while(t>0){var i=(t+1>>1)-1,s=n[i];if(e(r,s)>=0)break;n[s.index=t]=s,n[r.index=t=i]=r}}function i(t){var r=n[t];for(;;){var i=t+1<<1,s=i-1,o=t,u=n[o];s<n.length&&e(n[s],u)<0&&(u=n[o=s]),i<n.length&&e(n[i],u)<0&&(u=n[o=i]);if(o===t)break;n[u.index=t]=u,n[r.index=t=o]=r}}var t={},n=[];return t.push=function(){for(var e=0,t=arguments.length;e<t;++e){var i=arguments[e];r(i.index=n.push(i)-1)}return n.length},t.pop=function(){var e=n[0],t=n.pop();return n.length&&(n[t.index=0]=t,i(0)),e},t.remove=function(t){var s=t.index,o=n.pop();return s!==n.length&&(n[o.index=s]=o,(e(o,t)<0?r:i)(s)),s},t}function p(e){if(!e)return v;var t,n,r=e.scale[0],i=e.scale[1],s=e.translate[0],o=e.translate[1];return function(e,u){u||(t=n=0),e[0]=(t+=e[0])*r+s,e[1]=(n+=e[1])*i+o}}function d(e){if(!e)return v;var t,n,r=e.scale[0],i=e.scale[1],s=e.translate[0],o=e.translate[1];return function(e,u){u||(t=n=0);var a=(e[0]-s)/r|0,f=(e[1]-o)/i|0;e[0]=a-t,e[1]=f-n,t=a,n=f}}function v(){}var e={version:"1.4.6",mesh:n,feature:r,neighbors:a,presimplify:f};typeof define=="function"&&define.amd?define(e):typeof module=="object"&&module.exports?module.exports=e:this.topojson=e}();