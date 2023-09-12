"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5478],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(t),u=i,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return t?r.createElement(f,a(a({ref:n},c),{},{components:t})):r.createElement(f,a({ref:n},c))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=u;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[d]="string"==typeof e?e:i,a[1]=p;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},98866:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=t(87462),i=(t(67294),t(3905));const o={},a=void 0,p={unversionedId:"BioAmp-Software/Brain-BioAmp-Arduino-Firmware/FixedSampling/FixedSampling",id:"BioAmp-Software/Brain-BioAmp-Arduino-Firmware/FixedSampling/FixedSampling",title:"FixedSampling",description:"Fixed Sampling - BioAmp EXG Pill",source:"@site/docs/BioAmp-Software/Brain-BioAmp-Arduino-Firmware/1_FixedSampling/1_FixedSampling.md",sourceDirName:"BioAmp-Software/Brain-BioAmp-Arduino-Firmware/1_FixedSampling",slug:"/BioAmp-Software/Brain-BioAmp-Arduino-Firmware/FixedSampling/",permalink:"/docs/next/BioAmp-Software/Brain-BioAmp-Arduino-Firmware/FixedSampling/",draft:!1,editUrl:"https://github.com/upsidedownlabs/upsidedownlabs.github.io/docs/BioAmp-Software/Brain-BioAmp-Arduino-Firmware/1_FixedSampling/1_FixedSampling.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"intro",permalink:"/docs/next/BioAmp-Software/intro"},next:{title:"EEGFilter",permalink:"/docs/next/BioAmp-Software/Brain-BioAmp-Arduino-Firmware/EEGFilter/"}},l={},s=[],c={toc:s},d="wrapper";function m(e){let{components:n,...t}=e;return(0,i.kt)(d,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Fixed Sampling - BioAmp EXG Pill\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/upsidedownlabs/BioAmp-EXG-Pill"},"https://github.com/upsidedownlabs/BioAmp-EXG-Pill")),(0,i.kt)("p",null,"Upside Down Labs invests time and resources providing this open source code,\nplease support Upside Down Labs and open-source hardware by purchasing\nproducts from Upside Down Labs!"),(0,i.kt)("p",null,"Copyright (c) 2021 Upside Down Labs - ",(0,i.kt)("a",{parentName:"p",href:"mailto:contact@upsidedownlabs.tech"},"contact@upsidedownlabs.tech")),(0,i.kt)("p",null,'Permission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the "Software"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:'),(0,i.kt)("p",null,"The above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software."),(0,i.kt)("p",null,'THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\nSOFTWARE.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"#define SAMPLE_RATE 125\n#define BAUD_RATE 115200\n#define INPUT_PIN A0\n\n\nvoid setup() {\n    // Serial connection begin\n    Serial.begin(BAUD_RATE);\n}\n\nvoid loop() {\n    // Calculate elapsed time\n    static unsigned long past = 0;\n    unsigned long present = micros();\n    unsigned long interval = present - past;\n    past = present;\n\n    // Run timer\n    static long timer = 0;\n    timer -= interval;\n\n    // Sample\n    if(timer < 0){\n        timer += 1000000 / SAMPLE_RATE;\n        int sensor_value = analogRead(INPUT_PIN);\n        Serial.println(sensor_value);\n    }\n}\n\n")))}m.isMDXComponent=!0}}]);