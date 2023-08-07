"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8042],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var i=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=n(e,["components","mdxType","originalType","parentName"]),d=c(a),h=r,g=d["".concat(s,".").concat(h)]||d[h]||m[h]||o;return a?i.createElement(g,l(l({ref:t},p),{},{components:a})):i.createElement(g,l({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=h;var n={};for(var s in t)hasOwnProperty.call(t,s)&&(n[s]=t[s]);n.originalType=e,n[d]="string"==typeof e?e:r,l[1]=n;for(var c=2;c<o;c++)l[c]=a[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}h.displayName="MDXCreateElement"},4165:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>n,toc:()=>c});var i=a(7462),r=(a(7294),a(3905));const o={sidebar_position:1},l="BioAmp EXG Pill",n={unversionedId:"BioAmp-Hardware/BioAmpEXGPill",id:"BioAmp-Hardware/BioAmpEXGPill",title:"BioAmp EXG Pill",description:"Professional-grade analog front-end amplification for ECG, EMG, EOG, and EEG biosensing on one tiny board",source:"@site/docs/BioAmp-Hardware/BioAmpEXGPill.md",sourceDirName:"BioAmp-Hardware",slug:"/BioAmp-Hardware/BioAmpEXGPill",permalink:"/docs/BioAmp-Hardware/BioAmpEXGPill",draft:!1,editUrl:"https://github.com/upsidedownlabs/upsidedownlabs.github.io/docs/BioAmp-Hardware/BioAmpEXGPill.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"BioAmp Hardware",permalink:"/docs/category/bioamp-hardware"},next:{title:"DIY Muscle BioAmp Shield",permalink:"/docs/BioAmp-Hardware/DIYMuscleBioAmpShield"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"Features &amp; Specifications",id:"features--specifications",level:2},{value:"Board layout",id:"board-layout",level:2},{value:"ElectroMyoGraphy (EMG)",id:"electromyography-emg",level:2},{value:"ElectroCardioGraphy (ECG)",id:"electrocardiography-ecg",level:2},{value:"Electrooculography (EOG)",id:"electrooculography-eog",level:2},{value:"Electroencephalography (EEG)",id:"electroencephalography-eeg",level:2},{value:"Glimpses of previous versions",id:"glimpses-of-previous-versions",level:2},{value:"Real-world Applications",id:"real-world-applications",level:2}],p={toc:c},d="wrapper";function m(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,i.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"bioamp-exg-pill"},"BioAmp EXG Pill"),(0,r.kt)("p",null,"Professional-grade analog front-end amplification for ECG, EMG, EOG, and EEG biosensing on one tiny board"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"BioAmp EXG Pill is a small, powerful analog-front-end (AFE) biopotential signal-acquisition board that can be paired with any microcontroller unit (MCU) or single-board computer (SBC) with an analog-to-digital converter (ADC) such as Arduino UNO & Nano, Espressif ESP32, Adafruit QtPy, STM32 Blue Pill, BeagleBone Black, and Raspberry Pi Pico, to name just a few. It also works with any dedicated ADC, like the Texas Instruments ADS1115 and ADS131M0x, among others."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"BioAmp EXG Pill",src:a(8693).Z,width:"1920",height:"1080"})),(0,r.kt)("p",null,"BioAmp EXG Pill is capable of recording publication-quality biopotential signals like ECG, EMG, EOG, and EEG, without the inclusion of any dedicated hardware or software filters. Its small size allows easy integration into mobile and space-constrained projects, and its powerful noise rejection makes it usable even when the device is close to the AC mains supply. Any 1.5 mm diameter wire can be used as a strain-relieving electrode cable, making it very cost-effective in comparison to the other available."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"BioAmp EXG Pill",src:a(4926).Z,width:"1920",height:"1080"}),"\n",(0,r.kt)("img",{alt:"BioAmp EXG Pill",src:a(5605).Z,width:"1920",height:"1080"})),(0,r.kt)("h2",{id:"features--specifications"},"Features & Specifications"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Features & Specifications"),(0,r.kt)("th",{parentName:"tr",align:"left"}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Minimum Input Voltage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"4.5-40 V")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Input Impedance"),(0,r.kt)("td",{parentName:"tr",align:"left"},"10^12 \u03a9")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Compatible Hardware"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Any development board with an ADC (Arduino UNO & Nano, Espressif ESP32, Adafruit QtPy, STM32 Blue Pill, BeagleBone Black, Raspberry Pi Pico, to name just a few)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"BioPotentials"),(0,r.kt)("td",{parentName:"tr",align:"left"},"EMG, ECG, EOG, EEG (configurable band-pass)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"No. of channels"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Electrodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2 or 3 (configurable)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Dimensions"),(0,r.kt)("td",{parentName:"tr",align:"left"},"25.4 x 10 mm")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Designed for use with carrier board"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Open Source"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Hardware + Software")))),(0,r.kt)("h2",{id:"board-layout"},"Board layout"),(0,r.kt)("p",null,"Images below shows a quick overview of the BioAmp EXG Pill hardware design."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PCB Front"),(0,r.kt)("th",{parentName:"tr",align:"center"},"PCB Back"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("img",{alt:"BioAMp EXG Pill",src:a(3430).Z,width:"4000",height:"1575"})),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("img",{alt:"BioAMp EXG Pill",src:a(3671).Z,width:"4000",height:"1575"}))))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"BioAmp EXG Pill",src:a(3927).Z,width:"1920",height:"1080"}),"\n",(0,r.kt)("img",{alt:"BioAmp EXG Pill",src:a(8179).Z,width:"1920",height:"1080"})),(0,r.kt)("h2",{id:"electromyography-emg"},"ElectroMyoGraphy (EMG)"),(0,r.kt)("p",null,"Electromyography (EMG) is a technique for evaluating and recording the electrical activity produced by skeletal muscles. EMG is also used as a diagnostic procedure to assess the health of muscles and the nerve cells that control them (motor neurons). EMG results can reveal nerve dysfunction, muscle dysfunction, or problems with nerve-to-muscle signal transmission. The images below show an EMG wave recorded with BioAmp EXG Pill and the electrode placement for the recorded EMG respectively.\n",(0,r.kt)("img",{alt:"BioAmp EXG Pill",src:a(8700).Z,width:"1366",height:"550"}),"\n",(0,r.kt)("img",{alt:"BioAmp EXG Pill",src:a(7241).Z,width:"1920",height:"1080"})),(0,r.kt)("h2",{id:"electrocardiography-ecg"},"ElectroCardioGraphy (ECG)"),(0,r.kt)("p",null,"Electrocardiography (ECG) is the process of producing an electrocardiogram (ECG or EKG). It is a graph of voltage versus time of the electrical activity of the heart using electrodes placed on the skin. These electrodes detect the small electrical changes that are a consequence of cardiac muscle depolarization followed by repolarization during each cardiac cycle (heartbeat). The images below show electrode placement for lead 1 ECG recording, an ECG wave recorded with BioAmp EXG Pill and electrode placement for hand ECG/EKG recording respectively.\n",(0,r.kt)("img",{alt:"BioAmp EXG Pill",src:a(1086).Z,width:"1920",height:"1080"}),"\n",(0,r.kt)("img",{alt:"BioAmp EXG Pill",src:a(6501).Z,width:"1600",height:"694"}),"\n",(0,r.kt)("img",{alt:"BioAmp EXG Pill",src:a(1852).Z,width:"1920",height:"1080"})),(0,r.kt)("h2",{id:"electrooculography-eog"},"Electrooculography (EOG)"),(0,r.kt)("p",null,"Electrooculography (EOG) is a technique for measuring the corneo-retinal standing potential that exists between the front and the back of the human eye. The resulting signal is called EOG. Common electrode placement for vertical & horizontal EOG recording is shown in the image below.\n",(0,r.kt)("img",{alt:"BioAmp EXG Pill",src:a(8541).Z,width:"1600",height:"900"})),(0,r.kt)("p",null,'To measure eye movement, pairs of electrodes are typically placed either above and below the eye or to the left and right of the eye. If the eye moves from the center position toward one of the two electrodes, this electrode "sees" the positive side of the retina, and the opposite electrode "sees" the negative side of the retina. Consequently, a potential difference occurs between the electrodes. Assuming the resting potential is constant, the recorded potential is a measure of the eye\u2019s position. The images below show electrode placement for vertical EOG recording, an EOG signal recorded with BioAmp EXG Pill and electrode placement for vertical EOG respectively.\n',(0,r.kt)("img",{alt:"BioAmp EXG Pill",src:a(9093).Z,width:"1920",height:"1080"}),"\n",(0,r.kt)("img",{alt:"BioAmp EXG Pill",src:a(7416).Z,width:"1598",height:"527"}),"\n",(0,r.kt)("img",{alt:"BioAmp EXG Pill",src:a(3574).Z,width:"1920",height:"1080"})),(0,r.kt)("h2",{id:"electroencephalography-eeg"},"Electroencephalography (EEG)"),(0,r.kt)("p",null,"Electroencephalography (EEG) is an electrophysiological monitoring method to record electrical activity on the scalp. During the procedure, electrodes consisting of small metal discs with thin wires are pasted onto your scalp. The electrodes detect tiny electrical charges that result from the activity of your brain cells which are then amplified to appear on the computer screen. It is typically non-invasive, with the electrodes placed along the scalp. The images below show an EEG wave recorded with BioAmp EXG Pill and the electrode placement for the frontal cortex EEG recording respectively.\n",(0,r.kt)("img",{alt:"BioAmp EXG Pill",src:a(458).Z,width:"1600",height:"699"}),"\n",(0,r.kt)("img",{alt:"BioAmp EXG Pill",src:a(8078).Z,width:"1920",height:"1080"})),(0,r.kt)("h2",{id:"glimpses-of-previous-versions"},"Glimpses of previous versions"),(0,r.kt)("p",null,"The BioAmp EXG Pill can be used in a variety of ways, the YouTube video below shows a potential way of using v0.7 of BioAmp EXG Pill."),(0,r.kt)("iframe",{width:"100%",height:"444",src:"https://www.youtube.com/embed/-G3z9fvQnuw",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,r.kt)("p",null,"A lot has improved in terms of interference rejection and flexibility from v0.7 to v1.0 of the BioAmp EXG Pill. The YouTube video below shows the ECG, EMG, EOG, and EEG recording using v1.0b of device."),(0,r.kt)("iframe",{width:"100%",height:"444",src:"https://www.youtube.com/embed/z9-B9bHWuhg",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,r.kt)("h2",{id:"real-world-applications"},"Real-world Applications"),(0,r.kt)("p",null,"BioAmp EXG Pill is perfect for researchers, makers, and hobbyists looking for novel ways to sample biopotential data. It can be used for a wide variety of interesting biosensing projects, including:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"AI-assisted detection of congestive heart failure using CNN (ECG)"),(0,r.kt)("li",{parentName:"ul"},"Heart-rate variability calculation to detect heart ailments (ECG)"),(0,r.kt)("li",{parentName:"ul"},"Prosthetic arm (servo) control (EMG)"),(0,r.kt)("li",{parentName:"ul"},"Controlling a 3DOF robotic arm (EMG)"),(0,r.kt)("li",{parentName:"ul"},"Quantitative analysis of physical therapy for palsy (EMG)"),(0,r.kt)("li",{parentName:"ul"},"Real-time game controllers (EOG)"),(0,r.kt)("li",{parentName:"ul"},"Blink detection (EOG)"),(0,r.kt)("li",{parentName:"ul"},"Capturing photos with a blink of an eye (EOG)"),(0,r.kt)("li",{parentName:"ul"},"Controlling LEDs via brain waves (EEG)"),(0,r.kt)("li",{parentName:"ul"},"Patient monitoring\nand many more examples.")))}m.isMDXComponent=!0},8179:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/Back_Specifications-178846353b8a8651ee55b1e7b5857217.jpg"},4926:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/Basic-Circuit-3c557c14e703b44478416b4cf2de0fde.jpg"},8693:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/BioAmp_EXG_Pill-30c8452dde40eabb5ff4962b59ffdf7e.jpg"},1086:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/ECG-271d69a4e6385679e740c5df5610dc3b.jpg"},8078:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/EEG-7d3d0b900f9b4d049b65f94f1f8b38d4.jpg"},1852:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/EKG-9e75708af5c69465f18464d81cdaee88.jpg"},7241:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/EMG-8836017c790e8a9bd58c55ffb1b18696.jpg"},8700:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/EMGEnvelop-a01d3e7532496b847616b18c7998197d.jpg"},9093:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/EOG-Horizontal-c96c462f446e62d456d1ab0067e5ee2d.jpg"},3574:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/EOG-Vertical-9aad604e73ec578b4f0c79129a9e4bad.jpg"},5605:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/EXG_Recording-587360e7357d78a16f279325330eea66.jpg"},3927:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/Front_Specifications-ff99bd7457799bd7cc464ef5ccee72bc.jpg"},3671:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/PCB_Back-f354b2fc81a10d0fcd5205f1ea7119e4.png"},3430:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/PCB_Front-a77e35f0088a5ad5a3f64278fe073287.png"},6501:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/bioamp-Exg-Pill-ECG-0a043a7019c4dbe583be3b24579eeb70.jpg"},458:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/bioamp-exg-pill-eeg-0f2e6e7fdf8b745ea003c7d667ac9931.jpg"},8541:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/bioamp-exg-pill-eog-electrode-placement-0768789c586ec2ae4f639365903d10d2.jpg"},7416:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/bioamp-exg-pill-eog-d10da240ce994bae59a9a60013b182d9.jpg"}}]);