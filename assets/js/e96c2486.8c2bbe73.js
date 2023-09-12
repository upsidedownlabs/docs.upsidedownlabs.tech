"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1420],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=i,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||r;return n?o.createElement(m,a(a({ref:t},c),{},{components:n})):o.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<r;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},22267:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=n(87462),i=(n(67294),n(3905));const r={sidebar_position:2},a="EEG Experiments",l={unversionedId:"Experiments/EEG Experiments/EEGExperiments",id:"Experiments/EEG Experiments/EEGExperiments",title:"EEG Experiments",description:"In this project we will be recording brainwaves or EEG from prefrontal cortex part of the brain using Arduino Uno and BioAmp EXG Pill.",source:"@site/docs/Experiments/EEG Experiments/EEGExperiments.md",sourceDirName:"Experiments/EEG Experiments",slug:"/Experiments/EEG Experiments/EEGExperiments",permalink:"/docs/next/Experiments/EEG Experiments/EEGExperiments",draft:!1,editUrl:"https://github.com/upsidedownlabs/upsidedownlabs.github.io/docs/Experiments/EEG Experiments/EEGExperiments.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"ECG Experiments",permalink:"/docs/next/Experiments/ECG Experiments/ECGExperiments"},next:{title:"Recording and Visualizing Muscle Signals (EMG) Using Muscle BioAmp Patchy (wearable Muscle Sensor)",permalink:"/docs/next/Experiments/EMG Experiments/EMGExperiment1/"}},s={},p=[{value:"What is Electroencephalography (EEG)?",id:"what-is-electroencephalography-eeg",level:2},{value:"About BioAmp EXG Pill:",id:"about-bioamp-exg-pill",level:2},{value:"HARDWARE",id:"hardware",level:2},{value:"SOFTWARE",id:"software",level:2},{value:"Step 1: Assembly",id:"step-1-assembly",level:2},{value:"Step 2: Skin Preparation",id:"step-2-skin-preparation",level:2},{value:"About Nuprep Gel:",id:"about-nuprep-gel",level:3},{value:"Step 3: Connecting Electrode Cable",id:"step-3-connecting-electrode-cable",level:2},{value:"Step 4: Electrode Placements",id:"step-4-electrode-placements",level:2},{value:"What is International 10-20 system for recording EEG?",id:"what-is-international-10-20-system-for-recording-eeg",level:3},{value:"Options to measure EEG",id:"options-to-measure-eeg",level:3},{value:"Option 1 - Measuring EEG using Gel electrodes:",id:"option-1---measuring-eeg-using-gel-electrodes",level:3},{value:"Option 2 - Measuring EMG using Muscle BioAmp Band, a dry electrode based EMG band and gel electrode:",id:"option-2---measuring-emg-using-muscle-bioamp-band-a-dry-electrode-based-emg-band-and-gel-electrode",level:3},{value:"Step 5: Connections",id:"step-5-connections",level:2},{value:"Step 6: Download Arduino IDE",id:"step-6-download-arduino-ide",level:2},{value:"Step 7: Download Spike Recorder",id:"step-7-download-spike-recorder",level:2},{value:"Step 8: Configurations on Spike Recorder",id:"step-8-configurations-on-spike-recorder",level:2},{value:"Step 9: Visualizing EEG",id:"step-9-visualizing-eeg",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"eeg-experiments"},"EEG Experiments"),(0,i.kt)("h1",{id:"recording-eeg-from-pre-frontal-cortex-of-brain-using-bioamp-exg-pill"},"Recording EEG From Pre Frontal Cortex of Brain Using BioAmp EXG Pill"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(14982).Z,width:"3637",height:"1825"})),(0,i.kt)("p",null,"In this project we will be recording brainwaves or EEG from prefrontal cortex part of the brain using Arduino Uno and BioAmp EXG Pill."),(0,i.kt)("h2",{id:"what-is-electroencephalography-eeg"},"What is Electroencephalography (EEG)?"),(0,i.kt)("p",null,"An electroencephalogram (EEG) is a test used to evaluate the electrical activity in your brain. It can help detect potential problems with brain cell communication."),(0,i.kt)("h2",{id:"about-bioamp-exg-pill"},"About BioAmp EXG Pill:"),(0,i.kt)("p",null,"BioAmp EXG Pill is one of a kind pill-size chip that can record publication-grade biopotential signals from your body be it from the heart (ECG), brain (EEG), eyes (EOG), and muscles (EMG)."),(0,i.kt)("p",null,"The entire BioAmp series of sensors from Upside Down Labs is designed in a way to teach you the basics of the instrumentation amplifier, active bandpass filtering, soldering, programming, neuroscience, HCI, and BCI just to name a few concepts."),(0,i.kt)("h1",{id:"supplies"},"Supplies"),(0,i.kt)("h2",{id:"hardware"},"HARDWARE"),(0,i.kt)("p",null,"1 x BioAmp EXG Pill (with JST PH 2.0 connector and a header pin)"),(0,i.kt)("p",null,"1 x BioAmp Cable"),(0,i.kt)("p",null,"3 x Gel Electrodes"),(0,i.kt)("p",null,"3 x Jumper Cables"),(0,i.kt)("p",null,"1 x Arduino Uno / Maker Uno with USB Cable (You can also use any other microcontroller board with an ADC)"),(0,i.kt)("p",null,"1 x Nuprep Skin Preparation Gel"),(0,i.kt)("p",null,"1 x Wet wipe"),(0,i.kt)("p",null,"1 x Brain BioAmp Band (optional)"),(0,i.kt)("p",null,"1 x Electrode Gel (only if using Brain BioAmp Band)"),(0,i.kt)("h2",{id:"software"},"SOFTWARE"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Arduino IDE"),(0,i.kt)("li",{parentName:"ol"},"Backyard Brains' Spike Recorder")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note"),": You can either get DIY Neuroscience Kit Basic or BioAmp EXG Pill Packs by clicking the links below:"),(0,i.kt)("p",null,"DIY Neuroscience Kit Basic (",(0,i.kt)("a",{parentName:"p",href:"https://store.upsidedownlabs.tech/product/diy-neuroscience-kit-basic/"},"Upside Down Labs Store")," |\n",(0,i.kt)("a",{parentName:"p",href:"https://www.tindie.com/products/upsidedownlabs/diy-neuroscience-kit-basic/"},"Tindie Store")," | ",(0,i.kt)("a",{parentName:"p",href:"https://www.amazon.in/dp/B0CBMTHLDJ?ref_=cm_sw_r_cp_ud_dp_E2A1CNJXN6ACZ4THA5ZQ"},"Amazon Store"),")"),(0,i.kt)("p",null,"BioAmp EXG Pill Pack (",(0,i.kt)("a",{parentName:"p",href:"https://store.upsidedownlabs.tech/product/bioamp-exg-pill/"},"Upside Down Labs Store")," | ",(0,i.kt)("a",{parentName:"p",href:"https://www.tindie.com/products/upsidedownlabs/diy-neuroscience-kit-basic/"},"Tindie Store")," )"),(0,i.kt)("p",null,"BioAmp EXG Pill - EXG Explorer Pack (",(0,i.kt)("a",{parentName:"p",href:"https://store.upsidedownlabs.tech/product/bioamp-exg-pill/"},"Upside Down Labs Store")," |\n",(0,i.kt)("a",{parentName:"p",href:"https://www.tindie.com/products/upsidedownlabs/diy-neuroscience-kit-basic/"},"Tindie Store")," | ",(0,i.kt)("a",{parentName:"p",href:"https://www.amazon.in/dp/B0B29CCPQB?ref_=cm_sw_r_cp_ud_dp_4D6ZTBD5RRASS5QM6HK1"},"Amazon Store"),")"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Disclaimer:")," DIY Neuroscience Kit Basic includes everything you need for this project but BioAmp EXG Pill Packs does not include all the supplies and you will have to order them seperately from our stores."),(0,i.kt)("h2",{id:"step-1-assembly"},"Step 1: Assembly"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(84465).Z,width:"1920",height:"1080"})),(0,i.kt)("p",null,"The BioAmp EXG Pill comes presoldered with DIY Neuroscience Kit Basic but in case you are getting BioAmp EXG Pill seperately then you will have to assemble it for this project by soldering the header pins and JST PH 2.0 connector as shown in the diagram."),(0,i.kt)("h2",{id:"step-2-skin-preparation"},"Step 2: Skin Preparation"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"dodge gif",src:n(10460).Z,width:"1152",height:"648"})),(0,i.kt)("p",null,"Apply Nuprep Skin Preparation Gel on the skin surface where electrodes would be placed to remove dead skin cells and clean the skin from dirt. After rubbing the skin surface thoroughly, clean it with a wet wipe."),(0,i.kt)("h3",{id:"about-nuprep-gel"},"About Nuprep Gel:"),(0,i.kt)("p",null,"Nuprep skin preparation gel is a mildly abrasive, highly conductive gel that should be applied before placing the electrodes on the skin to improve measurements. When applied gently, it strips away the top layer of skin and moistens the underlying skin layer which reduces the skin impedance with minimal skin irritation and discomfort."),(0,i.kt)("h2",{id:"step-3-connecting-electrode-cable"},"Step 3: Connecting Electrode Cable"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"dodge gif",src:n(82629).Z,width:"1152",height:"648"})),(0,i.kt)("p",null,"Connect the BioAmp Cable to BioAmp EXG Pill. We have different variants of the BioAmp Cable so don't go with the color coding and focus on the REF, IN+ and IN- written on the BioAmp EXG Pill."),(0,i.kt)("h2",{id:"step-4-electrode-placements"},"Step 4: Electrode Placements"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"dodge gif",src:n(45015).Z,width:"1152",height:"648"}),"\n",(0,i.kt)("img",{alt:"dodge gif",src:n(7106).Z,width:"1152",height:"648"})),(0,i.kt)("p",null,"Let's understand the electrode placements before moving forward in this project. For recording EEG from prefrontal cortex part of brain, you have to place the electrodes on your forehead, specifically on Fp1 and Fp2 refer International 10-20 system for recording EEG "),(0,i.kt)("h3",{id:"what-is-international-10-20-system-for-recording-eeg"},"What is International 10-20 system for recording EEG?"),(0,i.kt)("p",null,"It is an internationally recognized method to describe and apply the location of electrodes in the context of an EEG exam or voluntary lab research. This method was developed to maintain standardized testing methods ensuring that a subject's study outcomes (clinical or research) could be compiled, reproduced, and effectively analyzed and compared using the scientific method."),(0,i.kt)("h3",{id:"options-to-measure-eeg"},"Options to measure EEG"),(0,i.kt)("p",null,"So now we have 2 options to measure the EEG signals, either using the gel electrodes or using dry electrode based EEG band. You can try both of them one by one."),(0,i.kt)("h3",{id:"option-1---measuring-eeg-using-gel-electrodes"},"Option 1 - Measuring EEG using Gel electrodes:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Connect the BioAmp Cable to gel electrodes,"),(0,i.kt)("li",{parentName:"ol"},"Peel the plastic backing from electrodes"),(0,i.kt)("li",{parentName:"ol"},"Place the IN+ and IN- cables on the forehead & REF (reference) at the bony part, on the back side of your earlobe as shown in the video above.")),(0,i.kt)("h3",{id:"option-2---measuring-emg-using-muscle-bioamp-band-a-dry-electrode-based-emg-band-and-gel-electrode"},"Option 2 - Measuring EMG using Muscle BioAmp Band, a dry electrode based EMG band and gel electrode:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Connect the BioAmp Cable to Brain BioAmp Band in a way such that IN+ and IN- are placed on the forehead."),(0,i.kt)("li",{parentName:"ol"},"In this case, the REF (reference) should be connected using gel electrode. So connect the reference of BioAmp Cable to the gel electrode, peel the plastic backing and place it at the bony part, on the back side of your earlobe."),(0,i.kt)("li",{parentName:"ol"},"Now put a small drop of electrode gel on the dry electrodes (IN+ and IN-) between the skin and metallic part of BioAmp Cable to get the best results.")),(0,i.kt)("h2",{id:"step-5-connections"},"Step 5: Connections"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(61892).Z,width:"1024",height:"576"})),(0,i.kt)("p",null,"Connect BioAmp EXG Pill to Arduino Uno using the jumper cables as directed below:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"VCC to 5V"),(0,i.kt)("li",{parentName:"ol"},"GND to GND"),(0,i.kt)("li",{parentName:"ol"},"OUT to A0")),(0,i.kt)("h2",{id:"step-6-download-arduino-ide"},"Step 6: Download Arduino IDE"),(0,i.kt)("p",null,"Download the Arduino IDE from the link given below:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.arduino.cc/en/software"},"Ardiuno IDE")),(0,i.kt)("p",null,"(We have used Arduino IDE version 1.8.19 for this project)"),(0,i.kt)("p",null,"After downloading, connect the Arduino Uno to your laptop using the USB Cable (Type A to Type B)"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note"),": Make sure your laptop is not connected to a charger and sit 5m away from any AC appliances for best signal acquisition."),(0,i.kt)("h2",{id:"step-7-download-spike-recorder"},"Step 7: Download Spike Recorder"),(0,i.kt)("p",null,"Download Backyard Brains' Spike Recorder according to the operating system you are using (Windows, OSX, Linux) from the link given below:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://backyardbrains.com/products/spikerecorder"},"https://backyardbrains.com/products/spikerecorder")),(0,i.kt)("p",null,"After installing the software, just copy paste the Spike Recorder Arduino Code by clicking the link below in Arduino IDE, save the file and flash it on the Arduino Uno."),(0,i.kt)("p",null,"Spike Recorder Arduino Code: ",(0,i.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/BackyardBrains/SpikerShield/master/Muscle/Arduino%20Code/SpikeRecorder/SpikeRecorderSpikerShield_V1_1.ino"},"https://raw.githubusercontent.com/BackyardBrains/SpikerShield/master/Muscle/Arduino%20Code/SpikeRecorder/SpikeRecorderSpikerShield_V1_1.ino")),(0,i.kt)("p",null,"Now start the Spike Recorder."),(0,i.kt)("h2",{id:"step-8-configurations-on-spike-recorder"},"Step 8: Configurations on Spike Recorder"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(49159).Z,width:"1920",height:"1080"})),(0,i.kt)("p",null,"When the Spike Recorder starts, it will start recording from your microphone. To change that, go to the settings by clicking the first icon on the top left corner of the screen, select the COM port of your Arduino Uno and click on connect."),(0,i.kt)("p",null,"Also mute the speakers and apply the 50Hz notch filter by clicking on the checkbox as shown in the screenshot above."),(0,i.kt)("p",null,"You should set the low band pass filter to 1Hz and high bandpass filter to 40Hz as we are only recording the EEG singnals which range between these frequencies."),(0,i.kt)("p",null,"Now everything is configured and connected. So close the settings window and start recording EEG signals."),(0,i.kt)("h2",{id:"step-9-visualizing-eeg"},"Step 9: Visualizing EEG"),(0,i.kt)("iframe",{width:"100%",height:"444",src:"https://www.youtube.com/embed/QzZh243-Ac8?feature=oembed&autoplay=0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,i.kt)("p",null,"The signals that you can see on the screen right now are originating from prefrontal cortex part of your brain and propagating through all the layers to the surface of your skin."),(0,i.kt)("p",null,"To record these EEG signals, you have placed the electrodes on the forehead, then BioAmp EXG Pill is amplifying those signals so that we can detect it and finally sending it to the ADC (Analog to Digital Convertor) of your Arduino Uno. Ultimately the signals are being visualized in Spike Recorder software."),(0,i.kt)("p",null,"We hope everything is clear now and you understand how the signals are propagating from your brain to the screen of the laptop."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"}," Features of Spike Recorder that you can explore:")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Increase or decrease the scale of the Y axis by clicking on the + and - icons respecitively that is present on the left side of the graph."),(0,i.kt)("li",{parentName:"ol"},"Increase or decrease the X axis timescale by sliding up and down on the scroll wheel of the mouse."),(0,i.kt)("li",{parentName:"ol"},"Visualize the FFT graph by clicking on the FFT icon on top left size of the screen."),(0,i.kt)("li",{parentName:"ol"},"Record the data in .wav format by clicking the record icon on the top right corner. You can convert this data in any other format according to your project requirements."),(0,i.kt)("li",{parentName:"ol"},"Listen to the signals by clicking the volume icon on the top right corner. No don't smile right now, that's how your brain sounds like :P\nIt was a very basic project, but now we think you are all set to explore on your own and make amazing BCI projects. Let us know your feedback in the comments and feel free to ask any questions.")),(0,i.kt)("p",null,"You can also mail us at ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@upsidedownlabs.tech"},"support@upsidedownlabs.tech")," for any kind of support while you are making this project."))}u.isMDXComponent=!0},10460:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Skin_Prep2-f4487abe9092ef8283c9d233041ec065.gif"},82629:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/eeggif1-c3bb88585bf28390953331b327d89a82.gif"},45015:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/eeggif2-f4d681029cc7aa1c60c9626b698f9be0.gif"},7106:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/eeggif3-6ac2fe6bc1ecb5bf78e1b065b916e5a8.gif"},14982:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/eegimg1-99c76a9500dc08dd78f1a4f409cd6225.png"},84465:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/eegimg2-455608d34bd57aecb79e4eb8918a849c.jpg"},61892:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/eegimg3-cb7dbe6284ad865f5b1d73ced8fca3db.webp"},49159:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/eegimg4-e3d82289bd37d7da21b6a0df827e2e3e.jpg"}}]);