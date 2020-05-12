(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,a,t){e.exports=t.p+"static/media/profile.c8f88ebd.jpg"},17:function(e,a,t){e.exports=t(28)},22:function(e,a,t){},28:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(15),s=t.n(i),l=(t(22),t(2)),o=t(3),c=t(5),m=t(4),d=t(6),u=t(16),h=t.n(u),p=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(c.a)(this,Object(m.a)(a).call(this,e))).sidebarData=e.sidebarData,t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top",id:"sideNav"},r.a.createElement("a",{className:"navbar-brand js-scroll-trigger",href:"#page-top"},r.a.createElement("span",{className:"d-block d-lg-none"},this.sidebarData.firstName," ",this.sidebarData.lastName),r.a.createElement("span",{className:"d-none d-lg-block"},r.a.createElement("img",{className:"img-fluid img-profile rounded mx-auto mb-2",src:h.a,alt:""}))),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#about"},"About")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#experience"},"Experience")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#education"},"Education")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#project"},"Projects")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#skills"},"Skills")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#interests"},"Interests")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#awards"},"Awards")))))}}]),a}(n.Component),g=t(8),b=t(12),f=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(c.a)(this,Object(m.a)(a).call(this,e))).landingData=e.landingData,t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"about"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h1",{className:"mb-0"},this.landingData.firstName,r.a.createElement("span",{className:"text-primary"},this.landingData.lastName)),r.a.createElement("div",{className:"subheading mb-5"},this.landingData.phoneNumber," \xb7",r.a.createElement("a",{href:"mailto:name@email.com"},this.landingData.email)),r.a.createElement("p",{className:"lead mb-5"},this.landingData.bio),r.a.createElement("div",{className:"social-icons"},r.a.createElement("a",{href:this.landingData.linkedin},r.a.createElement(g.a,{icon:b.b})),r.a.createElement("a",{href:this.landingData.github},r.a.createElement(g.a,{icon:b.a})))))}}]),a}(n.Component),v=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(c.a)(this,Object(m.a)(a).call(this,e))).experience=e.experience,t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex justify-content-center",id:"experience"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Experience"),this.experience.map(function(e,a){return r.a.createElement("div",{key:a,className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},r.a.createElement("div",{className:"resume-content"},r.a.createElement("h3",{className:"mb-0"},e.position),r.a.createElement("div",{className:"subheading mb-3"},e.organization),r.a.createElement("p",null,e.aboutWork)),r.a.createElement("div",{className:"resume-date text-md-right"},r.a.createElement("span",{className:"text-primary"},e.fromDate," - ",e.toDate)))})))}}]),a}(n.Component),E=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(c.a)(this,Object(m.a)(a).call(this,e))).education=e.education,t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"education"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Education"),this.education.map(function(e,a){return r.a.createElement("div",{key:a,className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},r.a.createElement("div",{className:"resume-content"},r.a.createElement("h3",{className:"mb-0"},e.university),r.a.createElement("div",{className:"subheading mb-3"},e.degree),r.a.createElement("p",null,e.gpa)),r.a.createElement("div",{className:"resume-date text-md-right"},r.a.createElement("span",{className:"text-primary"},e.fromDate," - ",e.toDate)))})))}}]),a}(n.Component),N=t(10),y=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(c.a)(this,Object(m.a)(a).call(this,e))).skills=e.skills,t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"skills"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Skills"),r.a.createElement("div",{className:"subheading mb-3"},"Programming Languages & Tools"),r.a.createElement("div",{className:"row"},this.skills.map(function(e,a){return r.a.createElement("div",{key:a,className:"col-6"},r.a.createElement("p",{className:"list-item"},r.a.createElement(g.a,{icon:N.b,color:"green"}),r.a.createElement("span",{className:"ml-3"},e.name)))}))))}}]),a}(n.Component),w=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(c.a)(this,Object(m.a)(a).call(this,e))).project=e.project,t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex justify-content-center",id:"project"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"My Projects"),this.project.map(function(e,a){return r.a.createElement("div",{key:a,className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},r.a.createElement("div",{className:"resume-content"},r.a.createElement("h3",{className:"mb-0"},e.name),r.a.createElement("div",{className:"subheading mb-3"},e.organization),r.a.createElement("p",null,e.aboutWork)),r.a.createElement("div",{className:"resume-date text-md-right"},r.a.createElement("span",{className:"text-primary"},e.fromDate," - ",e.toDate)))})))}}]),a}(n.Component),j=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(c.a)(this,Object(m.a)(a).call(this,e))).interests=e.interests,t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"interests"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Interests"),r.a.createElement("p",null,this.interests.paragraphOne),r.a.createElement("p",{className:"mb-0"},this.interests.paragraphTwo)))}}]),a}(n.Component),k=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(c.a)(this,Object(m.a)(a).call(this,e))).awards=e.awards,t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"awards"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Awards & Certifications"),r.a.createElement("ul",{className:"fa-ul mb-0"},this.awards.map(function(e,a){return r.a.createElement("li",{key:a},r.a.createElement(g.a,{icon:N.a,color:"#ffc107"}),r.a.createElement("span",{className:"ml-2"}," ",e.awardDetail," "))}))))}}]),a}(n.Component),D=t(7),O=t(13),S=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(c.a)(this,Object(m.a)(a).call(this,e))).state={landingData:D.landing,experience:D.experience,education:D.education,skills:D.skills,project:D.project,interests:D.interests,awards:D.awards},O.a.initialize("UA-158818625-1"),O.a.pageview(window.location.pathname),t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,{sidebarData:this.state.landingData}),r.a.createElement("div",{className:"container-fluid p-0"},r.a.createElement(f,{landingData:this.state.landingData}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(v,{experience:this.state.experience}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(E,{education:this.state.education}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(y,{skills:this.state.skills}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(w,{project:this.state.project}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(j,{interests:this.state.interests}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(k,{awards:this.state.awards})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e){e.exports={landing:{firstName:"Gazal",lastName:"Jain",phoneNumber:"+91-9340435946",bio:"CSE Undergraduate from IIIT Naya Raipur currently in 7th Semester skilled in Data Science and Web Development and have a good knowledge of python programming and Beginner level knowledge in C and Java, also familiar with React library, HTML,CSS and Javascript and other tools and technologies related to Data science like Keras, Pandas, Numpy, Scikit-Learn.",email:"gazaljain7523@gmail.com",linkedin:"https://www.linkedin.com/in/gazal-jain-4366a9153/",github:"https://github.com/gazal2708"},experience:[{position:"Incoming UI developer Intern",organization:"NASDAQ",aboutWork:"The Work related to Java, JS, HTML, CSS, React and Angular JS",fromDate:"June 2020",toDate:"July 2020"},{position:"Research Paper Author",organization:"ICDSE Conference 2019",aboutWork:"A smart fruit warehouse system designed for providing global access and monitoring control to users and to preserve the fruit stored for the desired number of days as per the user by automatically adjusting the parameters such as temperature humidity and light as per the requirement of that fruit.My work was to establish a connection which can send live data feed of sensors to the Thingspeak Cloud and to analyse the data afterwards.",fromDate:"February 2019",toDate:"April 2019"},{position:"Research Intern",organization:"Robita Lab,IIIT Allahabad",aboutWork:"ML model trained on the COCO dataset and using the architecture of ResNet 101 to detect objects in photos or in real-time videos and which also does masking of the detected objects along with the labeling.",fromDate:"May 2019",toDate:"July 2019"}],education:[{university:"Dr.SPM International Institute of Information Technology,Naya Raipur",degree:"Bachelor of Technology",gpa:"9.19",fromDate:"2017",toDate:"Present"},{university:"Delhi Public School ,Risali, Bhilai",degree:"AISSCE",gpa:"93.40%",fromDate:"2015",toDate:"2017"},{university:"B.S.P. Senior Secondary School, Sector-10",degree:"AISSE",gpa:"93%",fromDate:"2013",toDate:"2015"}],skills:[{name:"HTML5"},{name:"CSS3"},{name:"Javascript"},{name:"React"},{name:"Python"},{name:"Keras"},{name:"Deep Learning"},{name:"Machine Learning"},{name:"Selenium"},{name:"C(beginner)"},{name:"Java(Beginner)"},{name:"MS Word"},{name:"MS Powerpoint"},{name:"MS Excel"}],project:[{name:"A CNN based approach to an integrated audio-video query answering system.",organization:"IIIT Naya Raipur, Guided By: Dr.Venkanna U.",aboutWork:"Developed a app with database of text files in which user query is inputted along with the text document and the DL model embedded in the app produces one sentence answer as output.The 1d-CNN approach is used to reduce both training and testing time.Currently working on to improve the accuracy of the model and extracting answers for queries on videos",fromDate:"May 2019",toDate:"Present"},{name:"Early Warning System on the prediction of ADR(Adverse drug Reaction)",organization:"Genpact's Dare in Reality Challenge 2020",aboutWork:"We developed a self-learning, early warning system for adverse drug reaction (ADR) and won prize money worth INR 3 lakhs.The web application can be used by healthcare professionals all over the world to get information regarding the probability of ADR associated with the drugs they would prescribe their patients.",fromDate:"October 2019",toDate:"February 2020"},{name:"Smart Fruit Warehouse and Control System Using IoT",organization:"IIIT Naya Raipur, Guided By: Dr.Venkanna U.",aboutWork:"A smart fruit warehouse system designed for providing global access and monitoring control to users and to preserve the fruit stored for the desired number of days as per the user by automatically adjusting the parameters such as temperature humidity and light as per the requirement of that fruit.My work was to establish a connection which can send live data feed of sensors to the Thingspeak Cloud and to analyse the data afterwards.",fromDate:"February 2019",toDate:"April 2019"},{name:"Developing an Imbalanced Classification Model to Detect Oil Spills",organization:"Self-Project",aboutWork:"Prediction of whether there is an oil spill or not using an unbalanced oil spill dataset. Comparing and using various machine learning models and mechanisms like G-mean on the Unbalanced dataset to get good accuracy score on unbalanced dataset.",fromDate:"March 2020",toDate:""},{name:"Live Trending Stocks Data Scraping.",organization:"Self-Project",aboutWork:"Scraping of live stocks data from https://www.investing.com/equities/trending-stocks using python, selenium, lxml,pandas,beautiful soup.Live data scraped from dynamic and multiple tables as well as bar graphs.",fromDate:"December 2019",toDate:""}],interests:{paragraphOne:"Apart from working on Web dev tools and Data Science projects , I like reading blogs, articles, watching sci-fi,fantasy,mythological and thriller movies and television shows",paragraphTwo:"I also like practicing on my singing skills in my leisure time and I do have won third prize once in this field in the Intercollege Singing competition.Apart from singing , I love danciing and I do take take part in the events where I am able to show these skills of mine."},awards:[{awardDetail:"Secured 1st Position in Genpact's 'Dare In Reality' Challenge 2020 among 1600+ teams."},{awardDetail:"Secured 3rd position in Inter college singing competition held in Technovate 2018 at IIIT Naya Raipur."},{awardDetail:"Recipient of Chief Minister Scholarship,full tuition fees waived o\ufb00 for three years."},{awardDetail:"Recipient of PM scholarship of Rs.11000/year for 4 years from SAIL(Steel authority of India Limited)."}]}}},[[17,1,2]]]);
//# sourceMappingURL=main.0b8e4adb.chunk.js.map