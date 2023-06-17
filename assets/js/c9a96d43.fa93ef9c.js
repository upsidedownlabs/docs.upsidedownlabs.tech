"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5040],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(a),g=n,h=d["".concat(l,".").concat(g)]||d[g]||m[g]||i;return a?r.createElement(h,s(s({ref:t},c),{},{components:a})):r.createElement(h,s({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:n,s[1]=o;for(var p=2;p<i;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},6015:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const i={sidebar_position:2},s="Muscle BioAmp Shield",o={unversionedId:"BioAmp-Hardware/MuscleBioAmpShield",id:"BioAmp-Hardware/MuscleBioAmpShield",title:"Muscle BioAmp Shield",description:"All-in-one Arduino Uno Shield for EMG (Electromyography).",source:"@site/docs/BioAmp-Hardware/MuscleBioAmpShield.md",sourceDirName:"BioAmp-Hardware",slug:"/BioAmp-Hardware/MuscleBioAmpShield",permalink:"/docs/BioAmp-Hardware/MuscleBioAmpShield",draft:!1,editUrl:"https://github.com/upsidedownlabs/upsidedownlabs.github.io/docs/BioAmp-Hardware/MuscleBioAmpShield.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"BioAmp EXG Pill",permalink:"/docs/BioAmp-Hardware/BioAmpEXGPill"},next:{title:"Muscle BioAmp Patchy",permalink:"/docs/BioAmp-Hardware/MuscleBioAmpPatchy"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"Features &amp; Specifications",id:"features--specifications",level:2},{value:"Hardware",id:"hardware",level:2},{value:"Assemblying he Kit",id:"assemblying-he-kit",level:2},{value:"Using the Sensor",id:"using-the-sensor",level:2},{value:"Some project ideas",id:"some-project-ideas",level:2}],c={toc:p},d="wrapper";function m(e){let{components:t,...i}=e;return(0,n.kt)(d,(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"muscle-bioamp-shield"},"Muscle BioAmp Shield"),(0,n.kt)("p",null,"All-in-one Arduino Uno Shield for EMG (Electromyography)."),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Muscle BioAmp Shield is an all-in-one Arduino Uno ElectroMyography (EMG) shield for learning neuroscience with ease. It is a DIY Electrophysiology/NeuroScience shield inspired from Back Yard Brains (BYB) Muscle Spiker shield and provides similar features like hobby servo output, user buttons, LED Bar, Audio output, and battery input. It is perfect for beginners as they can easily stack it on top of Arduino Uno to record, visualize and listen to their muscle signals to make amazing projects in the domain of Human-Computer Interface (HCI)."),(0,n.kt)("iframe",{width:"100%",height:"444",src:"https://www.youtube.com/embed/w8yw12SUe6Q",title:"Muscle BioAmp Shield v0.3 Unboxing | @Arduino Shield for EMG | Muscle Sensor | DIY Neuroscience",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,n.kt)("h2",{id:"features--specifications"},"Features & Specifications"),(0,n.kt)("p",null,"Muscle BioAmp Shield comes with various plug-and-play options so you can connect hundreds of extension boards like OLED screens, character displays, accelerometers, and servo controllers to name just a few using the STEMMA I2C interface. You also get STEMMA digital and STEMMA analog ports. On STEMMA analog port you can connect additional BioAmp EXG Pill or any other sensor with analog output. On STEMMA digital port you can connect any digital sensor or actuator of your choice."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Muscle BioAmp Shield",src:a(4497).Z,width:"1414",height:"2000"})),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"}),(0,n.kt)("th",{parentName:"tr",align:"left"}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Input Voltage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"5V")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Input Impedance"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10^11 \u03a9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Fixed Gain"),(0,n.kt)("td",{parentName:"tr",align:"left"},"x2420")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Bandpass filter"),(0,n.kt)("td",{parentName:"tr",align:"left"},"72 \u2013 720 Hz")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Compatible Hardware"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Arduino UNO")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"BioPotentials"),(0,n.kt)("td",{parentName:"tr",align:"left"},"EMG (Electromyography)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"No. of channels"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Electrodes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"3 (Positive, Negative, and Reference)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Dimensions"),(0,n.kt)("td",{parentName:"tr",align:"left"},"6.0 x 5.3 cm")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Open Source"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Hardware + Software")))),(0,n.kt)("h2",{id:"hardware"},"Hardware"),(0,n.kt)("p",null,"Images below shows a quick overview of the hardware design."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"PCB front"),(0,n.kt)("th",{parentName:"tr",align:"center"},"PCB back"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{alt:"Muscle BioAmp Shield",src:a(2860).Z,width:"2538",height:"2245"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{alt:"Muscle BioAmp Shield",src:a(8717).Z,width:"2517",height:"2227"}))))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"With wires",src:a(7370).Z,width:"6028",height:"4817"}),"\n",(0,n.kt)("img",{alt:"Dimensions",src:a(1608).Z,width:"1073",height:"501"}),"\n",(0,n.kt)("img",{alt:"Schematic",src:a(1620).Z,width:"3507",height:"2480"})),(0,n.kt)("h2",{id:"assemblying-he-kit"},"Assemblying he Kit"),(0,n.kt)("p",null,"You can get your own Muscle BioAmp Shield bag of parts from ",(0,n.kt)("a",{parentName:"p",href:"https://store.upsidedownlabs.tech/product/muscle-bioamp-shield-v0-3/"},"our store")," or ",(0,n.kt)("a",{parentName:"p",href:"https://www.tindie.com/products/upsidedownlabs/muscle-bioamp-shield-v03-arduino-shield-for-emg/"},"Tindie")," and for assembling your shield you can take a look at ",(0,n.kt)("a",{parentName:"p",href:"https://upsidedownlabs.github.io/DIY-Muscle-BioAmp-Shield/"},"this interactive BOM")," or the step by step guide below. "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Step 1 - Bare board"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Step 2 - 1M Resistors"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Step 3 - 330R Resistors"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:a(3296).Z,width:"900",height:"780"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:a(8619).Z,width:"900",height:"780"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:a(5160).Z,width:"900",height:"780"}))))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Step 4 - 10K Resistors"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Step 5 - 22K Resistors"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Step 6 - 1K Resistors"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:a(8042).Z,width:"900",height:"780"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:a(5211).Z,width:"900",height:"780"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:a(7886).Z,width:"900",height:"780"}))))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Step 7 - 220K Resistors"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Step 8 - 1nF Capacitors"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Step 9 - 100nF Capacitors"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:a(4371).Z,width:"900",height:"780"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:a(7655).Z,width:"900",height:"780"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:a(5290).Z,width:"900",height:"780"}))))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Step 10 - 100pF Capacitors"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Step 11 - Servo Header Pin"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Step 12 - Buttons"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:a(1481).Z,width:"900",height:"780"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:a(1889).Z,width:"900",height:"780"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:a(9808).Z,width:"900",height:"780"}))))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Step 13 - Optoisolator"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Step 14 - Angled JST Connectors"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Step 15 - Straight JST Connectors"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:a(652).Z,width:"900",height:"780"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:a(6768).Z,width:"900",height:"780"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:a(304).Z,width:"900",height:"780"}))))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Step 16 - IC Socket"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Step 17 - IC"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Step 18 - LEDs"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:a(7987).Z,width:"900",height:"780"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:a(3582).Z,width:"900",height:"780"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:a(7662).Z,width:"900",height:"780"}))))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Step 19 - 3.5mm Headphone Jack"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Step 20 - 2.2uF Capacitor"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Step 21 - 1uF Capacitor"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:a(340).Z,width:"900",height:"780"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:a(6864).Z,width:"900",height:"780"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:a(6869).Z,width:"900",height:"780"}))))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Step 22 - 470uF Capacitors"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Step 23 - Shield Header Pins"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Step 24 - Shield Ready"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:a(4597).Z,width:"900",height:"780"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:a(7336).Z,width:"900",height:"780"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:a(4339).Z,width:"900",height:"780"}))))),(0,n.kt)("p",null,"Still can't figure out the assembly? You can follow the video provided below to assemble your Shield."),(0,n.kt)("iframe",{width:"100%",height:"444",src:"https://www.youtube.com/embed/dcuCihh3yn4",title:"Muscle BioAmp Shield v0.3: Assembly Guide | EMG Shield for @Arduino Uno | Muscle Sensor",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,n.kt)("h2",{id:"using-the-sensor"},"Using the Sensor"),(0,n.kt)("p",null,"The possibilities are endless as you can:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Visualize the EMG signals using the 6-onboard LEDs. The more you flex, the more LEDs will glow up.\n",(0,n.kt)("img",{alt:"LED bar graph",src:a(3705).Z,width:"768",height:"432"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Directly connect the servo motor via 3-pin angled header pins and control it using muscle signals (EMG).\n",(0,n.kt)("img",{alt:"Servo motor",src:a(4976).Z,width:"768",height:"432"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Give audio/mic input signals from your mobile phone, laptop, or speakers via BioAmp AUX Cable connected to a 4-pin JST PH 2mm connector."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Listening signals",src:a(6118).Z,width:"768",height:"432"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Connect a 7V to 9V battery via snap cable.\n",(0,n.kt)("img",{alt:"9V snap",src:a(3811).Z,width:"768",height:"432"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Record the muscle signals (EMG) either using Gel Electrodes or BioAmp Bands (dry electrode based) via BioAmp Cable connected to a 3-pin JST PH 2mm connector.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Listen to your muscle signals using wired headphones/earphones connected to a 3.5mm headphone jack.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Connect hundreds of devices like OLED screens, character displays, temperature sensors, accelerometers, BioAmp Hardware, and much more using the two I2C interfaces.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Connect Arduino Uno's D6 digital I/O pins and A2 analog input pins using STEMMA digital and STEMMA analog connectors respectively.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Program the 2 user buttons according to your project requirements."))),(0,n.kt)("h2",{id:"some-project-ideas"},"Some project ideas"),(0,n.kt)("p",null,"These features make it the ultimate plug-and-play kit for students, researchers, and hobbyists alike who want to use muscle signals (EMG) to make amazing human-computer interface (HCI) projects like:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Controlling a Dino Game using your muscle signals (EMG)")),(0,n.kt)("iframe",{width:"100%",height:"444",src:"https://www.youtube.com/embed/66VOVqrFLoQ",title:"Controlling Dino Game using Muscle Signals (EMG) | Muscle BioAmp Shield v0.3 | DIY Neuroscience",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Scrolling Instagram Reels/YouTube Shorts by using your muscle signals (EMG)")),(0,n.kt)("iframe",{width:"100%",height:"444",src:"https://www.youtube.com/embed/ZzhrNyndky4",title:"Scrolling Instagram Reels or YouTube Shorts using muscle signals (EMG) | BioAmp Hardware | @Arduino",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}))}m.isMDXComponent=!0},3811:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/9V battery-0a125a82eee2db88d97d70c19ffb36a5.gif"},3296:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/01_Bare_Board-e9e8e44914188b2bdadccb79387fda9b.jpg"},8619:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/02_1M_Resistors-45da1d8481c5a1d3a59ccd360013c65b.jpg"},5160:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/03_330R_Resistors-2ea8a67a9c22133b3464e14c482a0aae.jpg"},8042:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/04_10K_Resistors-3595e7ef8f41333e796289f281b17309.jpg"},5211:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/05_22K_Resistors-0aede182eee80a66fbff058f3e54c5a9.jpg"},7886:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/06_1K_Resistors-8a8a4d3087b927031fbdccbd6cdc01f7.jpg"},4371:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/07_220K_Resistors-368671c7ec6f62df88e98b99037cc085.jpg"},7655:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/08_1nF_Capacitors-fa27452e37fb65fbc52e57704899f58b.jpg"},5290:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/09_100nF_Capacitors-325d549a987d61a98d12da5da119666f.jpg"},1481:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/10_100pF_Capacitors-80bbe935c46b78bc904492fb7b49eff3.jpg"},1889:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/11_Angled_Header_Pins-0ec84cdd2e5a2cfdf82bcd820ac3e025.jpg"},9808:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/12_5x5mm_Buttons-b1a37912cc71d30e647733f4ef8cd088.jpg"},652:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/13_OptoIsolator-c4077e224d0cb5b0040d00e1d4eb15f9.jpg"},6768:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/14_JST_PH_Angled_Connectors-b38bc288469b8d170d2ca2ce5882e5d9.jpg"},304:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/15_JST_PH_Straight_Connectors-5860b66f44183810458f35ecf68b781f.jpg"},7987:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/16_IC_Socket-bf3d93986f43d2ce6a91a5f8854e46f8.jpg"},3582:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/17_IC-c48f9d9298aaeda9246f6c9aecf2e59a.jpg"},7662:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/18_LEDs-dc84c481ed2ca32bba5a7798e5d0f2ed.jpg"},340:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/19_3.5mm_Headphone_Jack-3e0384d77932f35b87cca83d45776450.jpg"},6864:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/20_2.2uF_Capacitor-5e5780180bb893ab5c8ab1ccacfbb722.jpg"},6869:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/21_1uF_Capacitor-fabfa7138b4223de62a98848f4c6453f.jpg"},4597:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/22_470uF_Capacitor-649a90e80f31994b7e0dd59dd74c1ae8.jpg"},7336:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/23_Header_Pins-a3ba782413ec3b1990af9517f36eb0d7.jpg"},4339:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/24_Assembled-430833215eda494f0827d8471ac14d5d.jpg"},3705:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/LEDGraph-7745bf991b68ded57273e56611984cc7.gif"},8717:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Muscle-BioAmp-Shield-Back-1d6ae6f5d0c02b0c65f025b962cd1d27.png"},2860:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Muscle-BioAmp-Shield-Front-4f2aa96bac687a3dfb4528d744207d39.png"},7370:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Muscle-BioAmp-Shield-With-Wires-305842639c3e7eba195e343038212751.png"},1620:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Schematic-180460c89bfcea78dbf955e5a90245b5.png"},4976:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Servo control-a1c5791c4a3c448b19dcf8cb6d344e02.gif"},4497:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Shield v0.3 Pamphlet-ff6da385a97ce49c59095a6697f58e87.jpg"},1608:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/dimensions-3e892167e8bffbe8d09a8d9a2ce30eeb.png"},6118:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/listening muscle signals-66af3d0ca82d2f360f9700a89a5504ec.gif"}}]);