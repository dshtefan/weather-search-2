(this["webpackJsonpweather-forecast-react-app"]=this["webpackJsonpweather-forecast-react-app"]||[]).push([[0],Array(24).concat([function(e,t,n){e.exports=n.p+"static/media/delete.f8c70af5.svg"},function(e,t,n){e.exports=n.p+"static/media/update.5befe2b8.svg"},function(e,t,n){e.exports=n.p+"static/media/err.7917b4f1.svg"},function(e,t,n){e.exports=n.p+"static/media/01.ec5ebc73.svg"},function(e,t,n){e.exports=n.p+"static/media/02.fa87dd3f.svg"},function(e,t,n){e.exports=n.p+"static/media/03.fa87dd3f.svg"},function(e,t,n){e.exports=n.p+"static/media/04.1ae2e67e.svg"},function(e,t,n){e.exports=n.p+"static/media/09.13f4dc7d.svg"},function(e,t,n){e.exports=n.p+"static/media/10.95294982.svg"},function(e,t,n){e.exports=n.p+"static/media/11.9553928b.svg"},function(e,t,n){e.exports=n.p+"static/media/13.1a903534.svg"},function(e,t,n){e.exports=n.p+"static/media/50.bd76feac.svg"},function(e,t,n){e.exports=n(72)},,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"cityRequest",(function(){return _})),n.d(r,"cityLoaded",(function(){return C})),n.d(r,"locError",(function(){return T})),n.d(r,"locLoaded",(function(){return N})),n.d(r,"locRequested",(function(){return h})),n.d(r,"cityDelete",(function(){return g})),n.d(r,"updateLoadingStatus",(function(){return b})),n.d(r,"cityByCoordsLoaded",(function(){return j})),n.d(r,"cityError",(function(){return S})),n.d(r,"addCityToQueue",(function(){return P})),n.d(r,"deleteCityFromQueue",(function(){return D})),n.d(r,"addErrorMessage",(function(){return A})),n.d(r,"clearErrorMessage",(function(){return R}));var a=n(0),c=n.n(a),i=n(7),o=n.n(i),u=n(1),s=n(6),l=function(e,t){navigator.geolocation.getCurrentPosition(e,t)},f=function(){var e=JSON.parse(localStorage.getItem("state"));return null===e?null:{citiesQueue:e.cities.map((function(e){return e.city}))}},m=function(e){var t=e.cities.map((function(e){return{city:e.city}}));localStorage.setItem("state",JSON.stringify({cities:t}))},d=function(e){var t=e.name,n=e.main,r=n.temp,a=n.humidity,c=n.pressure,i=e.weather[0],o=i.main,u=i.icon,s=e.wind.speed,l=e.coord;return{city:t,temp:r=(r-273.15).toFixed(0),icon:u=u.substr(0,2),main:o,pressure:c,humidity:a,wind:s,lon:l.lon,lat:l.lat}},E=n(13),p=n.n(E),y="https://api.openweathermap.org/data/2.5/weather?",O=function(e,t,n){return p.a.get(y,{params:{appid:n,lat:e,lon:t}})},v=function(e,t){return p.a.get(y,{params:{q:e,appid:t}})},b=function(e){return{type:"UPDATE_LOADING_STATUS",loading:e}},g=function(e){return{type:"DELETE_CITY",index:e}},_=function(){return{type:"FETCH_CITY_REQUEST"}},C=function(e){return{type:"FETCH_CITY_SUCCESS",city:e}},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{type:"FETCH_CITY_ERROR",city:e}},h=function(){return{type:"FETCH_GEOLOCATION_REQUEST",isGeoPosAvailable:null}},N=function(){return{type:"FETCH_GEOLOCATION_SUCCESS",isGeoPosAvailable:!0}},T=function(){return{type:"FETCH_GEOLOCATION_FAILURE",isGeoPosAvailable:!1}},j=function(e){return{type:"FETCH_CITY_BY_COORDS_SUCCESS",city:e}},P=function(e){return{type:"ADD_CITY_TO_QUEUE",city:e}},D=function(){return{type:"DELETE_CITY_FROM_QUEUE"}},A=function(e){return{type:"ADD_ERROR_MESSAGE",message:e}},R=function(){return{type:"CLEAR_ERROR_MESSAGE"}},w=(n(63),n(64),function(e){var t=e.city;return e.loading?c.a.createElement(k,null):t.error?c.a.createElement("div",null,t.error):c.a.createElement("div",{className:"current-city"},c.a.createElement("div",{className:"current-city__name"},c.a.createElement("div",{className:"current-city__city-name"},t.city),c.a.createElement("div",{className:"current-city__weather"},t.main)),c.a.createElement("div",{className:"current-city__temp"},c.a.createElement("div",{className:"current-city__weather-icon"},c.a.createElement(se,{iconNumber:t.icon})),c.a.createElement("div",{className:"current-city__temperature"},t.temp,"\xb0")),c.a.createElement("div",{className:"current-city__info"},c.a.createElement(B,t)))}),I=(n(65),function(e){var t=e.cities;return c.a.createElement("div",{className:"city-list"},t.map((function(e,t){return c.a.createElement(de,{city:e,key:t,i:t})})))}),L=(n(66),n(24)),U=n.n(L),F=function(e){var t=e.city,n=e.loading,r=e.deleteCity;return c.a.createElement("div",{className:"item"},n?c.a.createElement(k,null):c.a.createElement("div",{className:"item-content"},c.a.createElement("div",{className:"item-header"},c.a.createElement("div",{className:"item-header-city"},t.city),c.a.createElement("img",{className:"del-icon",src:U.a,alt:"",onClick:r})),c.a.createElement("div",{className:"item-body"},c.a.createElement("div",{className:"item-body-left"},c.a.createElement("div",{className:"item-temperature"},t.temp,"\xb0"),c.a.createElement(se,{iconNumber:t.icon})),c.a.createElement(B,t))))},G=(n(67),n(25)),Q=n.n(G),x=n(26),M=n.n(x),Y=function(e){var t=e.locRequested,n=e.errorMessage;return c.a.createElement("div",{className:"icon-bar"},c.a.createElement("div",{className:"icons"},c.a.createElement("img",{className:"navIcon",src:Q.a,alt:"",onClick:function(){return t()}}),n?c.a.createElement("img",{className:"errIcon",src:M.a,alt:""}):null,n?c.a.createElement("div",{className:"error-text"},n):null))},H=(n(68),function(e){var t=e.handleChange,n=e.inputValue,r=e.clickButton;return c.a.createElement("div",{className:"search"},c.a.createElement("form",{className:"input-form"},c.a.createElement("input",{className:"input-field",onChange:t,value:n}),c.a.createElement("button",{className:"search-button",onClick:r},"Search")))}),k=(n(69),function(){return c.a.createElement("div",{className:"lds-css ng-scope"},c.a.createElement("div",{className:"lds-eclipse"},c.a.createElement("div",null)))}),B=(n(70),function(e){var t=e.pressure,n=e.wind,r=e.humidity,a=e.lat,i=e.lon;return c.a.createElement("div",{className:"info-block"},c.a.createElement("div",{className:"item-info"},"Pressure: ",t," hPA"),c.a.createElement("div",{className:"item-info"},"Wind: ",n," m/s"),c.a.createElement("div",{className:"item-info"},"Humidity: ",r,"%"),c.a.createElement("div",{className:"item-info"},"Coord: [",a,", ",i,"]"))}),J=n(27),q=n.n(J),K=n(28),V=n.n(K),W=n(29),z=n.n(W),X=n(30),Z=n.n(X),$=n(31),ee=n.n($),te=n(32),ne=n.n(te),re=n(33),ae=n.n(re),ce=n(34),ie=n.n(ce),oe=n(35),ue=n.n(oe),se=function(e){var t=function(e){return c.a.createElement("img",{src:e,alt:""})};switch(e.iconNumber){case"01":return t(q.a);case"02":return t(V.a);case"03":return t(z.a);case"04":return t(Z.a);case"09":return t(ee.a);case"10":return t(ne.a);case"11":return t(ae.a);case"13":return t(ie.a);case"50":return t(ue.a);default:return null}},le=Object(u.b)((function(e){var t=e.loading;return{city:e.cityByCoords,loading:t}}))(w),fe=Object(u.b)((function(e){return{cities:e.cities}}))(I),me=n(9),de=Object(u.b)(null,{cityDelete:g})((function(e){var t=e.city,n=e.i,r=e.cityDelete,i=Object(a.useState)(!0),o=Object(me.a)(i,2),u=o[0],s=o[1];return Object(a.useEffect)((function(){t&&"{}"!==JSON.stringify(t)?s(!1):s(!0)}),[t]),c.a.createElement(F,{city:t,loading:u,deleteCity:function(){return r(n)}})})),Ee=Object(u.b)((function(e){return{errorMessage:e.errorMessage}}),{locRequested:h})(Y),pe=Object(u.b)(null,{addCityToQueue:P})((function(e){var t=e.addCityToQueue,n=Object(a.useState)(""),r=Object(me.a)(n,2),i=r[0],o=r[1];return c.a.createElement(H,{inputValue:i,handleChange:function(e){return o(e.target.value)},clickButton:function(e){e.preventDefault(),o(""),""!==i&&t(i)}})})),ye=function(){return c.a.createElement("div",{className:"page"},c.a.createElement(pe,null),c.a.createElement(Ee,null),c.a.createElement(fe,null),c.a.createElement(le,null))};function Oe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var ve=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Oe(n,!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Oe(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},r),be=Object(u.b)((function(e){return{state:e}}),ve)((function(e){var t=e.deleteCityFromQueue,n=e.addErrorMessage,r=e.clearErrorMessage,i=e.cityError,o=e.cityLoaded,u=e.cityRequest,s=e.locLoaded,f=e.locError,E=e.cityByCoordsLoaded,p=e.updateLoadingStatus,y=e.state,b=y.apiKey,g=y.cityDefault,_=y.isGeoPosAvailable,C=y.cityByCoords,S=y.citiesQueue,h=v,N=O,T=d,j=l,P=m,D=function(e){var t=e.coords.latitude,n=e.coords.longitude;s(),N(t,n,b).then((function(e){E(T(e.data))})).catch((function(e){E({error:e.message})}))},A=function(){f(),h(g,b).then((function(e){E(T(e.data))})).catch((function(e){E({error:e.message})}))};return Object(a.useEffect)((function(){S.length>0&&(u(),h(S[0],b).then((function(e){o(T(e.data)),r()})).catch((function(e){i(),n(e.message)})),t())})),Object(a.useEffect)((function(){null===_&&j(D,A)})),Object(a.useEffect)((function(){C&&"{}"!==JSON.stringify(C)&&p(!1)}),[C,p]),Object(a.useEffect)((function(){P(y)})),c.a.createElement(ye,null)})),ge=n(8),_e=n(5),Ce={apiKey:"9c2f796d45e91e5c01a2ae26f1613625",citiesQueue:[],cities:[],loading:!0,isGeoPosAvailable:null,cityDefault:"Moscow",cityByCoords:{},errorMessage:null};function Se(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var he=f(),Ne=he?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Se(n,!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Se(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},Ce,{},he):Ce;function Te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function je(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Te(n,!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Te(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_CITY_TO_QUEUE":var n=Object(_e.a)(e.citiesQueue);return n.push(t.city),je({},e,{citiesQueue:n});case"DELETE_CITY_FROM_QUEUE":var r=Object(_e.a)(e.citiesQueue);return r.shift(),je({},e,{citiesQueue:r});case"UPDATE_LOADING_STATUS":return je({},e,{loading:t.loading});case"DELETE_CITY":var a=Object(_e.a)(e.cities);return a.splice(t.index,1),je({},e,{cities:a,inputField:null});case"FETCH_CITY_REQUEST":var c=Object(_e.a)(e.cities);return c.push({}),je({},e,{cities:c});case"FETCH_CITY_ERROR":var i=Object(_e.a)(e.cities),o=i.filter((function(e){return JSON.stringify(e)!==JSON.stringify({})})).length;return i.splice(o,1),je({},e,{cities:i});case"FETCH_CITY_SUCCESS":var u=Object(_e.a)(e.cities),s=u.filter((function(e){return JSON.stringify(e)!==JSON.stringify({})})).length;return u[s]=t.city,je({},e,{cities:u});case"FETCH_GEOLOCATION_REQUEST":return je({},e,{isGeoPosAvailable:t.isGeoPosAvailable,loading:!0});case"FETCH_GEOLOCATION_SUCCESS":case"FETCH_GEOLOCATION_FAILURE":return je({},e,{isGeoPosAvailable:t.isGeoPosAvailable});case"FETCH_CITY_BY_COORDS_SUCCESS":return je({},e,{cityByCoords:t.city});case"ADD_ERROR_MESSAGE":return je({},e,{errorMessage:t.message});case"CLEAR_ERROR_MESSAGE":return je({},e,{errorMessage:null});default:return e}},De=Object(ge.b)(Pe);n(71);o.a.render(c.a.createElement(u.a,{store:De},c.a.createElement(be,null)),document.getElementById("root"))}]),[[36,1,2]]]);
//# sourceMappingURL=main.7587ecec.chunk.js.map