(this.webpackJsonplovinlocal=this.webpackJsonplovinlocal||[]).push([[5],{327:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return w}));var o,s,a,c=n(27),l=n.n(c),r=n(43),i=n(9),d=n(3),p=n(1),u=n(25),b=n(13),g=n(4),j=n(5),h=n(30),f=n(2),m=n(319),O=j.b.CREDENTIAL.GOOGLE_MAP.API_KEY,x=function(e,t){return new Promise((function(n,o){fetch("".concat("https://maps.googleapis.com/maps/api/geocode/json","?latlng=").concat(e,",").concat(t,"&key=").concat(O),{method:"get",headers:{Accept:"application/json"}}).then((function(e){console.log(e);var t=e.status,n=e.ok;if(200!==t||!n)throw new Error("Response Error");return e.json()})).then((function(e){console.log(e);for(var t,o,s,a=e.results[0].formatted_address,c=0;c<e.results[0].address_components.length;c++)for(var l=0;l<e.results[0].address_components[c].types.length;l++)switch(e.results[0].address_components[c].types[l]){case"locality":t=e.results[0].address_components[c].long_name;break;case"administrative_area_level_1":o=e.results[0].address_components[c].long_name;break;case"country":s=e.results[0].address_components[c].long_name}console.log(t,o,s),console.log(a),n({formatted:a,city:t,state:o,country:s})})).catch((function(e){console.error(e),o(e)}))}))},v=n(0),y=j.b.CREDENTIAL.GOOGLE_MAP.API_KEY,_=j.b.AUCKLAND,L={disableDefaultUI:!0},N=g.b.div(o||(o=Object(d.a)(["\n  position: relative;\n  z-index: 9;\n\n  color: #fff;\n  text-align: center;\n"]))),A=g.b.div(s||(s=Object(d.a)(["\n  width: 100%;\n  height: 210px;\n  position: relative;\n\n"]))),k=g.b.div(a||(a=Object(d.a)(["\n  position: absolute;\n  right: 8px;\n  top: 4px;\n  & svg {\n    height: 62px;\n    fill: #fff;\n    stroke: ",";\n    stroke-width: 3;\n  }\n  & p {\n    position: absolute;\n    width: 100%;\n    left: 0;\n    top: 12px;\n    text-align: center;\n  }\n"])),j.d.color.primary.default);function w(e){var t=e.onClose,n=Object(u.f)(),o=Object(p.useContext)(h.a),s=o.model,a=o.setLocation,c=null===s||void 0===s?void 0:s.location,d=Object(m.c)({googleMapsApiKey:y,libraries:["places"]}),g=d.isLoaded,O=d.loadError,w=Object(p.useRef)(),C=Object(p.useCallback)((function(e){w.current=e}),[]),I=Object(p.useState)((null===c||void 0===c?void 0:c.position)||_),T=Object(i.a)(I,2),E=T[0],S=T[1],M=(Object(p.useCallback)((function(e){var t=e.latLng.lat(),n=e.latLng.lng();S({lat:t,lng:n})}),[]),function(){n.push({pathname:j.a.LOCATION_INPUT})}),P=function(){var e=Object(r.a)(l.a.mark((function e(n){var o,s,c,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=n.lat,s=n.lng,(c=w.current)&&(S({lat:o,lng:s}),c.panTo({lat:o,lng:s}),c.setZoom(14)),e.prev=3,e.next=6,x(o,s);case 6:r=e.sent,console.log(r),a({address:{formatted:null===r||void 0===r?void 0:r.formatted,textSecondary:[null===r||void 0===r?void 0:r.city,null===r||void 0===r?void 0:r.state,null===r||void 0===r?void 0:r.country].filter((function(e){return!!e})).join(" ")},position:{lat:o,lng:s}}),t&&t(),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(3),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)(N,{children:[Object(v.jsx)(f.c,{height:"197px"}),Object(v.jsxs)(f.fb,{children:[Object(v.jsx)(f.i,{className:"space",padding:"0 0 32px 0"}),Object(v.jsx)("p",{style:{lineHeight:"32px"},className:"ft-ps24",dangerouslySetInnerHTML:{__html:"It's Time To Share<br />your location"}}),Object(v.jsx)(f.i,{className:"space",padding:"0 0 32px 0"}),Object(v.jsx)(A,{children:O?"Map load error!":g?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(m.a,{mapContainerStyle:{width:"100%",height:"100%"},zoom:(null===c||void 0===c?void 0:c.position)?16:10,center:(null===c||void 0===c?void 0:c.position)||_,options:L,onLoad:C,children:E&&Object(v.jsx)(m.b,{position:{lat:E.lat,lng:E.lng}})}),Object(v.jsxs)(k,{children:[Object(v.jsx)(f.M,{}),Object(v.jsx)("p",{className:"ft-rb12 clr-ft-primary",dangerouslySetInnerHTML:{__html:"Show the best<br/>deals around me!"}})]})]}):"Loading map ..."}),Object(v.jsx)(f.i,{className:"space",padding:"0 0 32px 0"}),Object(v.jsx)("div",{style:{padding:"0 8px"},children:Object(v.jsx)(f.d,{size:"medium",fullWidth:!0,onClick:function(){navigator.geolocation.getCurrentPosition((function(e){return P({lat:e.coords.latitude,lng:e.coords.longitude})}),M,{enableHighAccuracy:!0})},children:"SHARE MY LOCATION NOW"})}),Object(v.jsx)("p",{style:{marginTop:"16px"},className:"ft-rr12 clr-ft-gray3-76",children:"or"}),Object(v.jsx)("p",{style:{margin:"16px 0 24px"},className:"ft-rr12 clr-ft-gray3-76",children:Object(v.jsx)(b.b,{to:j.a.LOCATION_INPUT,children:"Select address manually"})})]})]})}}}]);
//# sourceMappingURL=5.d16de4cd.chunk.js.map