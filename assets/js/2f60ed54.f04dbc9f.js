"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7304],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>h});var n=i(67294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var a=n.createContext({}),p=function(e){var t=n.useContext(a),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},c=function(e){var t=p(e.components);return n.createElement(a.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,r=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(i),m=o,h=d["".concat(a,".").concat(m)]||d[m]||u[m]||r;return i?n.createElement(h,s(s({ref:t},c),{},{components:i})):n.createElement(h,s({ref:t},c))}));function h(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=i.length,s=new Array(r);s[0]=m;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[d]="string"==typeof e?e:o,s[1]=l;for(var p=2;p<r;p++)s[p]=i[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},15905:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=i(87462),o=(i(67294),i(3905));const r={sidebar_position:3},s="Drowsiness Detector by Detecting EOG Signals Using BioAmp EXG Pill",l={unversionedId:"Experiments/EOG Experiments/Drowsiness Detector by Detecting EOG Signals Using BioAmp EXG Pill/Drowsiness Detector by Detecting EOG Signals Using BioAmp EXG Pill",id:"Experiments/EOG Experiments/Drowsiness Detector by Detecting EOG Signals Using BioAmp EXG Pill/Drowsiness Detector by Detecting EOG Signals Using BioAmp EXG Pill",title:"Drowsiness Detector by Detecting EOG Signals Using BioAmp EXG Pill",description:"In this project we will be recording electrical impulses of eyes (EOG) to make a drowsiness detector using Maker Uno and BioAmp EXG Pill.",source:"@site/docs/Experiments/EOG Experiments/Drowsiness Detector by Detecting EOG Signals Using BioAmp EXG Pill/Drowsiness Detector by Detecting EOG Signals Using BioAmp EXG Pill.md",sourceDirName:"Experiments/EOG Experiments/Drowsiness Detector by Detecting EOG Signals Using BioAmp EXG Pill",slug:"/Experiments/EOG Experiments/Drowsiness Detector by Detecting EOG Signals Using BioAmp EXG Pill/",permalink:"/docs/next/Experiments/EOG Experiments/Drowsiness Detector by Detecting EOG Signals Using BioAmp EXG Pill/",draft:!1,editUrl:"https://github.com/upsidedownlabs/upsidedownlabs.github.io/docs/Experiments/EOG Experiments/Drowsiness Detector by Detecting EOG Signals Using BioAmp EXG Pill/Drowsiness Detector by Detecting EOG Signals Using BioAmp EXG Pill.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Eye Blink Detection by Recording EOG Using BioAmp EXG Pill",permalink:"/docs/next/Experiments/EOG Experiments/BioAmp EXG Pill_Eye Blink Detection/"},next:{title:"Tutorial - Basics",permalink:"/docs/next/category/tutorial---basics"}},a={},p=[{value:"What is Electrooculography (EOG)?",id:"what-is-electrooculography-eog",level:2},{value:"About BioAmp EXG Pill:",id:"about-bioamp-exg-pill",level:3},{value:"Supplies",id:"supplies",level:2},{value:"HARDWARE:",id:"hardware",level:3},{value:"SOFTWARE:",id:"software",level:3},{value:"Step 1: Assembly",id:"step-1-assembly",level:2},{value:"Step 2: Skin Preparation",id:"step-2-skin-preparation",level:2},{value:"About Nuprep Gel:",id:"about-nuprep-gel",level:3},{value:"Step 3: Connecting Electrode Cable",id:"step-3-connecting-electrode-cable",level:2},{value:"Step 4: Electrode Placements",id:"step-4-electrode-placements",level:2},{value:"Step 5: Connections",id:"step-5-connections",level:2},{value:"Step 6: Download Arduino IDE",id:"step-6-download-arduino-ide",level:2},{value:"Step 7: Coding Time!",id:"step-7-coding-time",level:2},{value:"Step 8: Its Ready",id:"step-8-its-ready",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"drowsiness-detector-by-detecting-eog-signals-using-bioamp-exg-pill"},"Drowsiness Detector by Detecting EOG Signals Using BioAmp EXG Pill"),(0,o.kt)("p",null,(0,o.kt)("img",{src:i(35583).Z,width:"1280",height:"720"}),"\n",(0,o.kt)("img",{src:i(83943).Z,width:"1920",height:"1080"})),(0,o.kt)("p",null,"In this project we will be recording electrical impulses of eyes (EOG) to make a drowsiness detector using Maker Uno and BioAmp EXG Pill."),(0,o.kt)("h2",{id:"what-is-electrooculography-eog"},"What is Electrooculography (EOG)?"),(0,o.kt)("p",null,"Electrooculography (EOG) is a technique for measuring the corneo-retinal standing potential that exists between the front and the back of the human eye.The resulting signal is called the electrooculogram."),(0,o.kt)("h3",{id:"about-bioamp-exg-pill"},"About BioAmp EXG Pill:"),(0,o.kt)("p",null,"BioAmp EXG Pill is one of a kind pill-size chip that can record publication-grade biopotential signals from your body be it from the heart (ECG), brain (EEG), eyes (EOG), and muscles (EMG)."),(0,o.kt)("p",null,"The entire BioAmp series of sensors from Upside Down Labs is designed in a way to teach you the basics of the instrumentation amplifier, active bandpass filtering, soldering, programming, neuroscience, HCI, and BCI just to name a few concepts."),(0,o.kt)("h2",{id:"supplies"},"Supplies"),(0,o.kt)("h3",{id:"hardware"},"HARDWARE:"),(0,o.kt)("p",null,"1 x BioAmp EXG Pill (with JST PH 2.0 connector and a header pin)"),(0,o.kt)("p",null,"1 x BioAmp Cable"),(0,o.kt)("p",null,"3 x Gel Electrodes"),(0,o.kt)("p",null,"3 x Jumper Cables"),(0,o.kt)("p",null,"1 x Maker Uno with USB Cable (You can also use any other microcontroller board with an ADC)"),(0,o.kt)("p",null,"1 x Nuprep Skin Preparation Gel"),(0,o.kt)("p",null,"1 x Wet wipe"),(0,o.kt)("h3",{id:"software"},"SOFTWARE:"),(0,o.kt)("p",null,"Arduino IDE"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," You can either get DIY Neuroscience Kit Basic or BioAmp EXG Pill Packs by clicking the links below:"),(0,o.kt)("p",null,"DIY Neuroscience Kit Basic (",(0,o.kt)("a",{parentName:"p",href:"https://store.upsidedownlabs.tech/product/diy-neuroscience-kit-basic/"},"Upside Down Labs Store"),"  | ",(0,o.kt)("a",{parentName:"p",href:"https://www.tindie.com/products/upsidedownlabs/diy-neuroscience-kit-basic/"},"Tindie Store")," | ",(0,o.kt)("a",{parentName:"p",href:"https://www.amazon.in/dp/B0CBMTHLDJ?ref_=cm_sw_r_cp_ud_dp_E2A1CNJXN6ACZ4THA5ZQ"},"Amazon India"),")"),(0,o.kt)("p",null,"BioAmp EXG Pill Pack (",(0,o.kt)("a",{parentName:"p",href:"https://store.upsidedownlabs.tech/product/bioamp-exg-pill/"},"Upside Down Labs Store"),"  | ",(0,o.kt)("a",{parentName:"p",href:"https://www.tindie.com/products/upsidedownlabs/bioamp-exg-pill-sensor-for-ecg-emg-eog-or-eeg/"},"Tindie Store"),")"),(0,o.kt)("p",null,"BioAmp EXG Pill - EXG Explorer Pack (",(0,o.kt)("a",{parentName:"p",href:"https://store.upsidedownlabs.tech/product/bioamp-exg-pill/"},"Upside Down Labs Store"),"  | ",(0,o.kt)("a",{parentName:"p",href:"https://www.tindie.com/products/upsidedownlabs/bioamp-exg-pill-x2-sensor-for-ecg-emg-eog-eeg/"},"Tindie Store")," | ",(0,o.kt)("a",{parentName:"p",href:"https://www.amazon.in/dp/B0B29CCPQB?ref_=cm_sw_r_cp_ud_dp_4D6ZTBD5RRASS5QM6HK1&th=1"},"Amazon India"),")"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Disclaimer:")," DIY Neuroscience Kit Basic includes everything you need for this project but BioAmp EXG Pill Packs does not include all the supplies and you will have to order them seperately from our stores."),(0,o.kt)("h2",{id:"step-1-assembly"},"Step 1: Assembly"),(0,o.kt)("p",null,(0,o.kt)("img",{src:i(12981).Z,width:"1920",height:"1080"})),(0,o.kt)("p",null,"The BioAmp EXG Pill comes presoldered with DIY Neuroscience Kit Basic but in case you are getting BioAmp EXG Pill seperately then you will have to assemble it for this project by soldering the header pins and JST PH 2.0 connector as shown in the diagram."),(0,o.kt)("h2",{id:"step-2-skin-preparation"},"Step 2: Skin Preparation"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"dodge gif",src:i(94123).Z,width:"768",height:"432"})),(0,o.kt)("p",null,"Apply Nuprep Skin Preparation Gel on the skin surface where electrodes would be placed to remove dead skin cells and clean the skin from dirt. After rubbing the skin surface thoroughly, clean it with a wet wipe."),(0,o.kt)("h3",{id:"about-nuprep-gel"},"About Nuprep Gel:"),(0,o.kt)("p",null,"Nuprep skin preparation gel is a mildly abrasive, highly conductive gel that should be applied before placing the electrodes on the skin to improve measurements. When applied gently, it strips away the top layer of skin and moistens the underlying skin layer which reduces the skin impedance with minimal skin irritation and discomfort."),(0,o.kt)("h2",{id:"step-3-connecting-electrode-cable"},"Step 3: Connecting Electrode Cable"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"dodge gif",src:i(79111).Z,width:"768",height:"432"})),(0,o.kt)("p",null,"Connect the BioAmp Cable to BioAmp EXG Pill as shown in the connection diagram. We have different variants of the BioAmp Cable so don't go with the color coding and focus on the REF, IN+ and IN- written on the BioAmp EXG Pill."),(0,o.kt)("h2",{id:"step-4-electrode-placements"},"Step 4: Electrode Placements"),(0,o.kt)("p",null,(0,o.kt)("img",{src:i(58606).Z,width:"1920",height:"1080"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Connect the BioAmp Cable to gel electrodes,"),(0,o.kt)("li",{parentName:"ol"},"Peel the plastic backing from electrodes"),(0,o.kt)("li",{parentName:"ol"},"Place the IN+ and IN- cables on the forehead & REF (reference) at the bony part, on the back side of your earlobe as shown above.")),(0,o.kt)("h2",{id:"step-5-connections"},"Step 5: Connections"),(0,o.kt)("p",null,(0,o.kt)("img",{src:i(31137).Z,width:"1920",height:"1080"})),(0,o.kt)("p",null,"Connect BioAmp EXG Pill to Maker Uno using the jumper cables as directed below:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"VCC to 5V"),(0,o.kt)("li",{parentName:"ul"},"GND to GND"),(0,o.kt)("li",{parentName:"ul"},"OUT to A0")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," BE VERY CAREFUL and follow the above diagram while making the connections between your BioAmp EXG Pill & Maker Uno, especially the GND and VCC else it may damage the sensor."),(0,o.kt)("p",null,"We specifically chose Maker Uno for this experinment as it is Arduino compatible board but has onboard LEDs and a buzzer."),(0,o.kt)("p",null,"You can also use Arduino Uno or any other development board with an ADC but in that case the buzzer and LED should be seperately connected to the board."),(0,o.kt)("h2",{id:"step-6-download-arduino-ide"},"Step 6: Download Arduino IDE"),(0,o.kt)("p",null,"Download the Arduino IDE from the link given below:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.arduino.cc/en/software"},"https://www.arduino.cc/en/software")),(0,o.kt)("p",null,"(We have used Arduino IDE version 1.8.19 for this project)"),(0,o.kt)("p",null,"After downloading, connect the Maker Uno to your laptop using the USB Cable"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," Make sure your laptop is not connected to a charger and sit 5m away from any AC appliances for best signal acquisition."),(0,o.kt)("h2",{id:"step-7-coding-time"},"Step 7: Coding Time!"),(0,o.kt)("p",null,"Copy paste the Arduino Sketch given below in Arduino IDE.     "),(0,o.kt)("p",null,"Drowsiness Detection: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/upsidedownlabs/Eye-BioAmp-Arduino-Firmware/blob/main/3_DrowsinessDetection/3_DrowsinessDetection.ino"},"https://github.com/upsidedownlabs/Eye-BioAmp-Arduino-Firmware/blob/main/3_DrowsinessDetection/3_DrowsinessDetection.ino")),(0,o.kt)("h2",{id:"step-8-its-ready"},"Step 8: Its Ready"),(0,o.kt)("iframe",{width:"100%",height:"444",src:"https://www.youtube.com/embed/h4F41mp4mWk?feature=oembed&autoplay=0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,o.kt)("p",null,"The threshold for time interval between the 2 eye blinks is set to be 6000ms or 6 sec which means that whenever someone feels drowsy and doesn't blink for 6 sec, then the buzzer will beep and LEDs will glow to wake up the person."),(0,o.kt)("p",null,"You can change this threshold according to your requirements or preferences."),(0,o.kt)("p",null,"Your drowsiness detector is now ready!!"),(0,o.kt)("p",null,"Let us know your feedback in the comments and feel free to ask any questions."),(0,o.kt)("p",null,"You can also mail us at ",(0,o.kt)("a",{parentName:"p",href:"mailto:support@upsidedownlabs.tech"},"support@upsidedownlabs.tech")," for any kind of support while you are making this project."))}u.isMDXComponent=!0},12981:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Assembly-f327d906751232e9cb07ecfa7a773993.jpg"},79111:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Connecting Electrode Cable-d79f3b2fc5071c89187b77177d54b847.gif"},31137:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Connections with Maker Uno-338f82f2d079845995535477de607bde.jpg"},58606:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Electrode Placements-e622681b45c8626346e03c9f927fb557.jpg"},94123:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Skin Preparation-41d0adc3b736bc2d122993b98d6e9fbd.gif"},35583:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Thumbnail1-a6a9a5abee314cc7c332375f2f3659ac.jpg"},83943:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Thumbnail2-4654ca99a5ddc6651cfedd9d039d2fee.jpg"}}]);