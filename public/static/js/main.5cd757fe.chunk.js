(this["webpackJsonpcreative-gallery-client"]=this["webpackJsonpcreative-gallery-client"]||[]).push([[0],{40:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){"use strict";c.r(t);var i=c(1),n=c.n(i),r=c(16),a=c.n(r),s=c(5),o=(c(40),c(2)),j=c(10),l=c(22),b=c.n(l),h=c(34),d=c(13),p=c(35),x=c.n(p),u="".concat("https://creativegallery.herokuapp.com","/api"),m=Object(d.b)("creativeGallery/createRequest",function(){var e=Object(h.a)(b.a.mark((function e(t,c){var i,n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.request,n=t.history,r=c.dispatch,e.prev=2,e.next=5,x.a.post("".concat(u,"/request"),i);case 5:n.push("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),r(k(e.t0.response.data.errorMessage));case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t,c){return e.apply(this,arguments)}}()),O=Object(d.c)({name:"creativeGallery",initialState:{menuNumber:null,error:null},reducers:{setMenuNumber:function(e,t){e.menuNumber=t.payload},setError:function(e,t){e.error=t.payload}}}),g=O.actions,v=g.setMenuNumber,k=g.setError,N=O.reducer,C=c.p+"static/media/tribar-sm.8dd4f7ed.png",S=c(0),f=function(){var e=Object(j.c)((function(e){return e.creativeGallery.menuNumber})),t=Object(j.b)();return Object(S.jsx)("div",{children:Object(S.jsx)("nav",{children:Object(S.jsxs)("div",{className:"navbarContainer",children:[Object(S.jsx)("div",{children:Object(S.jsx)(o.b,{to:"/",onClick:function(){return t(v(0))},children:Object(S.jsx)("img",{src:C,alt:"app logo",className:"logo"})})}),Object(S.jsx)("div",{className:"navLinkContainer",children:Object(S.jsx)(o.b,{to:"/about",className:1===e?"navLink textEnlighted":"navLink",onClick:function(){return t(v(1))},children:"About"})}),Object(S.jsx)("div",{className:"navLinkContainer",children:Object(S.jsx)(o.b,{to:"/projects",className:2===e?"navLink textEnlighted":"navLink",id:"projectsLink",onClick:function(){return t(v(2))},children:"Gallery"})}),Object(S.jsx)("div",{className:"navLinkContainer",children:Object(S.jsx)(o.b,{to:"/contact",className:3===e?"navLink textEnlighted":"navLink",onClick:function(){return t(v(3))},children:"Contact"})})]})})})},y=function(){return Object(S.jsx)("div",{children:Object(S.jsx)("footer",{children:Object(S.jsx)("div",{className:"footerContainer",children:Object(S.jsx)("div",{children:Object(S.jsx)("span",{children:" \xa9 2021 Christian Gerbig "})})})})})},P=function(){var e=Object(j.b)();return Object(S.jsxs)("div",{className:"homePageContainer logoImage",children:[Object(S.jsx)("div",{className:"pageNameContainer",children:Object(S.jsx)("h2",{children:" Intro "})}),Object(S.jsx)("div",{className:"welcomeText",children:Object(S.jsx)("h1",{children:" WELCOME "})}),Object(S.jsx)("div",{className:"toText",children:Object(S.jsx)("h4",{children:" to "})}),Object(S.jsx)("div",{className:"myText",children:Object(S.jsx)(o.b,{to:"/about",className:"homeLink",onClick:function(){return e(v(1))},children:Object(S.jsx)("h4",{children:" my "})})}),Object(S.jsx)("div",{className:"creativeText",children:Object(S.jsx)(o.b,{to:"/projects",className:"homeLink",onClick:function(){return e(v(2))},children:Object(S.jsx)("h2",{children:" creative "})})}),Object(S.jsx)("div",{className:"galleryText",children:Object(S.jsx)(o.b,{to:"/projects",className:"homeLink",onClick:function(){return e(v(2))},children:Object(S.jsx)("h2",{children:" gallery "})})})]})},w=c.p+"static/media/portrait-mono.1280cc4b.png",T=function(){var e=Object(j.b)();return Object(S.jsxs)("div",{className:"aboutPageContainer",children:[Object(S.jsx)("div",{className:"pageNameContainer",children:Object(S.jsx)("h2",{children:" About me "})}),Object(S.jsxs)("div",{className:"aboutDetailsContainer",children:[Object(S.jsxs)("div",{className:"aboutDetailsText",children:[Object(S.jsx)("h3",{children:" Hello, "}),Object(S.jsxs)("p",{children:["I'm ",Object(S.jsx)("b",{children:" Christian. "})]}),Object(S.jsxs)("p",{children:["A ",Object(S.jsx)("b",{children:" passionate and dedicated Web Developer "}),"using every aspect of the New Technology available to reach the goals. My homebase is ",Object(S.jsx)("b",{children:" Hamburg "})," in Germany."]}),Object(S.jsxs)("p",{children:["I believe in a ",Object(S.jsx)("b",{children:" positive power "})," of communication, trust in",Object(S.jsx)("b",{children:" cooperative team working "}),"making an asset from ",Object(S.jsx)("b",{children:" sharing different points of views "}),"."]}),Object(S.jsxs)("p",{children:["I love to code",Object(S.jsx)("b",{children:" optimized solutions suiting individual requirements "})," with respect to time, budget and target."]}),Object(S.jsxs)("p",{children:["My motto:",Object(S.jsx)("b",{children:' "Learning things, improving (them) and reach the goals" '}),"."]}),Object(S.jsxs)("p",{children:["My goal is to ",Object(S.jsx)("b",{children:" become part of a team "})," where I can",Object(S.jsx)("b",{children:" apply, develop and share my skills"}),"."]}),Object(S.jsxs)("p",{children:["Thank you for reading, your trust and hope",Object(S.jsx)("span",{className:"aboutContactLink",onClick:function(){return e(v(3))},children:Object(S.jsx)(o.b,{to:{pathname:"/contact"},children:" hearing from you "})}),"."]}),Object(S.jsxs)("div",{className:"aboutLinksContainer",children:[Object(S.jsx)("div",{children:Object(S.jsx)(o.b,{to:"/cv",className:"aboutCVLink",children:"CV"})}),Object(S.jsx)("div",{children:Object(S.jsx)(o.b,{to:{pathname:"https://www.linkedin.com/in/christian-gerbig/"},target:"_blank",className:"aboutLinkedInLink",children:"LinkedIn"})}),Object(S.jsx)("div",{children:Object(S.jsx)(o.b,{to:{pathname:"https://github.com/christiangerbig/"},target:"_blank",className:"aboutGitHubLink",children:"GitHub"})})]})]}),Object(S.jsx)("div",{className:"aboutPictureContainer",children:Object(S.jsx)("img",{src:w,alt:"potrait"})})]})]})},L=function(e){var t=e.projectItem,c=t.projectName,n=t.projectPicturePath,r=t.projectVideoPath,a=t.projectStack,s=t.projectDescription,j=t.deployedPath,l=t.gitHubClientPath,b=t.gitHubServerPath,h=Object(i.useRef)([]);return Object(i.useEffect)((function(){h.current[0].innerHTML=a,h.current[1].innerHTML=s}),[]),Object(S.jsxs)("div",{className:"projectDetailsContainer",children:[Object(S.jsx)("div",{children:Object(S.jsx)("video",{width:"360",height:"200",muted:!0,controls:!0,poster:n,src:r})}),Object(S.jsxs)("div",{children:[Object(S.jsxs)("h3",{children:[" ",c," "]}),Object(S.jsx)("h4",{ref:function(e){return h.current[0]=e},children:" "}),Object(S.jsx)("p",{ref:function(e){return h.current[1]=e},children:" "})]}),Object(S.jsxs)("div",{className:"projectLinksContainer",children:[Object(S.jsx)("div",{children:Object(S.jsx)(o.b,{to:{pathname:j},target:"_blank",className:"projectTryItLink",children:"Try it out"})}),Object(S.jsx)("div",{children:Object(S.jsx)(o.b,{to:{pathname:l},target:"_blank",className:"projectGitHubLink",children:"GitHub Client"})}),b&&Object(S.jsx)("div",{children:Object(S.jsx)(o.b,{to:{pathname:b},target:"_blank",className:"projectGitHubLink",children:"GitHub Server"})})]})]})},H=c.p+"static/media/jungle-swap.04645ba1.png",D=c.p+"static/media/trackertools.cdf33462.png",M=c.p+"static/media/letter-shooter.a0667b69.png",I=function(){var e=[{projectName:"JungleSwap",projectPicturePath:H,projectVideoPath:"https://bliskcloudstorage.blob.core.windows.net/videos/2c9bdc9d-6b6f-4823-844c-2a2cd5c36a86/15-May-2021-13-45-637566759460450173.mp4",projectStack:"React | JavaScript | SASS | Bootstrap <br /> NodeJs | MongoDB | Axios | Responsive",projectDescription:" Share your plant offshoots. <br /> Make money or swap them for another plant. <br /> Shop and give a plant a new home. <br /> <br />",deployedPath:"https://jungleswap.herokuapp.com/",gitHubClientPath:"https://github.com/christiangerbig/jungle-swap-client",gitHubServerPath:"https://github.com/christiangerbig/jungle-swap-server"},{projectName:"Trackertools",projectPicturePath:D,projectVideoPath:"https://bliskcloudstorage.blob.core.windows.net/videos/2c9bdc9d-6b6f-4823-844c-2a2cd5c36a86/15-May-2021-13-35-637566753722531829.mp4",projectStack:"Express | Handlebars | JavaScript | SASS <br /> Bootstrap | MongoDB | Responsive",projectDescription:"Four powerful tools to make working <br /> with the music editor Protracker and <br /> its modules more comfortable. <br /> <br />",deployedPath:"https://trackertools.herokuapp.com/",gitHubClientPath:"https://github.com/christiangerbig/Trackertools",gitHubServerPath:""},{projectName:"Letter Shooter",projectPicturePath:M,projectVideoPath:"https://bliskcloudstorage.blob.core.windows.net/videos/2c9bdc9d-6b6f-4823-844c-2a2cd5c36a86/15-May-2021-14-10-637566774755686276.mp4",projectStack:"JavaScript | HTML5 | Canvas | CSS3",projectDescription:" A coordination and strategy game <br /> with the goal to hit the missing <br /> letters with precise shots. <br /> <br /> <br />",deployedPath:"https://christiangerbig.github.io/letter-shooter/",gitHubClientPath:"https://github.com/christiangerbig/letter-shooter",gitHubServerPath:""}];return Object(S.jsxs)("div",{className:"projectsPageContainer",children:[Object(S.jsx)("div",{className:"pageNameContainer",children:Object(S.jsx)("h2",{children:" My projects "})}),Object(S.jsx)("div",{className:"projectsIntroTextContainer",children:Object(S.jsx)("h3",{className:"projectsIntroText",children:"Here below you can see some of my projects I was working recently on"})}),Object(S.jsx)("div",{className:"projectsContainer",children:e.map((function(e,t){return Object(S.jsx)(L,{projectItem:e},t)}))})]})},E=c(18),G=c(19),A=function(){var e=Object(j.c)((function(e){return e.creativeGallery.error})),t=Object(j.b)(),c=Object(s.f)();Object(i.useEffect)((function(){t(k(null))}),[]);return Object(S.jsxs)("div",{className:"contactPageContainer",children:[Object(S.jsx)("div",{className:"pageNameContainer",children:Object(S.jsx)("h2",{children:" Contact me "})}),Object(S.jsxs)("div",{className:"contactContainer",children:[Object(S.jsx)("div",{children:Object(S.jsx)("h1",{children:" Christian Gerbig "})}),Object(S.jsx)("div",{children:Object(S.jsx)("h2",{children:" Web Developer "})}),Object(S.jsxs)("div",{className:"contactWaysContainer",children:[Object(S.jsxs)("div",{className:"contactEmailContainer",children:[Object(S.jsxs)("h3",{children:[Object(S.jsx)(E.a,{icon:G.a})," e-mail"]}),Object(S.jsx)("span",{className:"contactLink",children:Object(S.jsx)(o.b,{to:{pathname:"mailto:chr_gerbig@web.de"},target:"_blank",children:Object(S.jsx)("h4",{children:" chr_gerbig web.de "})})})]}),Object(S.jsxs)("div",{className:"contactPhoneContainer",children:[Object(S.jsxs)("h3",{children:[Object(S.jsx)(E.a,{icon:G.b})," phone"]}),Object(S.jsx)("span",{className:"contactLink",children:Object(S.jsx)(o.b,{to:{pathname:"tel:+4915154824288"},target:"_blank",children:Object(S.jsx)("h4",{children:" +49 151 548 242 88 "})})})]})]}),Object(S.jsxs)("form",{onSubmit:function(e){return function(e,c){e.preventDefault();var i=e.target,n=i.email,r=i.subject,a=i.message,s={email:n.value,subject:r.value,message:a.value};t(m({request:s,history:c}))}(e,c)},children:[Object(S.jsx)("div",{children:Object(S.jsxs)("h3",{children:[Object(S.jsx)(E.a,{icon:G.c})," or write me"]})}),e&&Object(S.jsxs)("p",{className:"warningColor",children:[" ",e," "]}),Object(S.jsx)("div",{children:Object(S.jsx)("input",{type:"email",name:"email",placeholder:"email",className:"formInput"})}),Object(S.jsx)("div",{children:Object(S.jsx)("input",{type:"text",name:"subject",placeholder:"subject",className:"formInput"})}),Object(S.jsx)("div",{children:Object(S.jsx)("textarea",{name:"message",cols:35,rows:7,placeholder:"message",className:"formTextarea"})}),Object(S.jsx)("input",{type:"submit",value:"Submit",className:"formSubmit",formNoValidate:!0})]})]})]})},R=function(e){var t=e.skill;return Object(S.jsxs)("li",{children:[" ",t," "]})},J=function(e){var t=e.trainingItem,c=t.trainingTitle,i=t.trainingPeriod,n=t.trainingContent;return Object(S.jsxs)("div",{className:"cvTrainingDetailsContainer",children:[Object(S.jsxs)("h4",{children:[" ",c," "]}),Object(S.jsxs)("h6",{children:[" ",i," "]}),Object(S.jsx)("ul",{children:Object(S.jsxs)("li",{children:[" ",n," "]})})]})},_=function(e){var t=e.cvProjectItem,c=t.projectTitle,i=t.gitHubClientPathname,n=t.gitHubServerPathname,r=t.deployedPathname,a=t.projectDescription;return Object(S.jsxs)("div",{className:"cvProjectDetailContainer",children:[Object(S.jsxs)("div",{className:"cvProjectContainer",children:[Object(S.jsxs)("h4",{children:[" ",c," "]}),Object(S.jsx)("div",{children:Object(S.jsx)(o.b,{to:{pathname:i},target:"_blank",className:"cvProjectLink",children:"GitHubClient"})}),n&&Object(S.jsx)("div",{children:Object(S.jsx)(o.b,{to:{pathname:n},target:"_blank",className:"cvProjectLink",children:"GitHubServer"})}),Object(S.jsx)("div",{children:Object(S.jsx)(o.b,{to:{pathname:r},target:"_blank",className:"cvProjectLink",children:"Deployment"})})]}),Object(S.jsxs)("p",{children:[" ",a," "]})]})},B=function(){return Object(S.jsxs)("div",{className:"cvPageContainer",children:[Object(S.jsx)("div",{className:"pageNameContainer",children:Object(S.jsx)("h2",{children:" My CV "})}),Object(S.jsxs)("div",{className:"cvContainer",children:[Object(S.jsxs)("div",{className:"cvDetailsContainer",children:[Object(S.jsx)("div",{className:"cvPictureContainer",children:Object(S.jsx)("img",{src:w,alt:"potrait"})}),Object(S.jsx)("div",{children:Object(S.jsx)("h1",{children:" Christian Gerbig "})}),Object(S.jsx)("div",{children:Object(S.jsx)("h2",{children:" Frontend Developer "})}),Object(S.jsxs)("div",{children:[Object(S.jsx)("p",{children:"Javascript (ES6) | HTML5 | CSS3 | Bootstrap | React | Redux | MongoDB | NodeJS | Express | Axios"}),Object(S.jsxs)("p",{children:["Flotowstra\xdfe 21 ",Object(S.jsx)("br",{}),"22083 Hamburg ",Object(S.jsx)("br",{}),"Germany"]}),Object(S.jsxs)("p",{children:[Object(S.jsx)("span",{className:"contactLink",children:Object(S.jsx)(o.b,{to:{pathname:"tel:+4915154824288"},target:"_blank",children:"+49 151 548 242 88"})}),Object(S.jsx)("br",{}),Object(S.jsx)("span",{className:"contactLink",children:Object(S.jsx)(o.b,{to:{pathname:"mailto:chr_gerbig@web.de"},target:"_blank",children:"chr_gerbig web.de"})})]}),Object(S.jsx)("div",{children:Object(S.jsx)(o.b,{to:{pathname:"https://www.linkedin.com/in/christian-gerbig/"},target:"_blank",children:"linkedin.com/in/christian-gerbig/"})}),Object(S.jsx)("div",{children:Object(S.jsx)(o.b,{to:{pathname:"https://github.com/christiangerbig/"},target:"_blank",children:"github.com/christiangerbig"})}),Object(S.jsxs)("div",{children:[Object(S.jsx)("h3",{children:" MY GOAL "}),Object(S.jsx)("hr",{}),Object(S.jsx)("p",{children:"Learning things, improving (them) and become part of a team where I can apply, develop and share my skills."})]}),Object(S.jsxs)("div",{children:[Object(S.jsx)("h3",{children:" SKILLS "}),Object(S.jsx)("hr",{}),Object(S.jsx)("ul",{children:["JavaScript (ES6) / TypeScript","HTML5 / CSS3 / SASS","jQuery","React","Redux","MongoDB","ExpressJs","Handlebars","NodeJs","Axios","Bootstrap","Git / GitHub"].map((function(e,t){return Object(S.jsx)(R,{skill:e},t)}))})]}),Object(S.jsxs)("div",{children:[Object(S.jsx)("h3",{children:" LANGUAGES "}),Object(S.jsx)("hr",{}),Object(S.jsxs)("ul",{children:[Object(S.jsx)("li",{children:" German: native "}),Object(S.jsx)("li",{children:" English: fluent "})]})]}),Object(S.jsxs)("div",{children:[Object(S.jsx)("h3",{children:" PERSONAL ACTIVITIES "}),Object(S.jsx)("hr",{}),Object(S.jsxs)("ul",{children:[Object(S.jsx)("li",{children:" Music and composing "}),Object(S.jsx)("li",{children:" Contemporary History "}),Object(S.jsx)("li",{children:" Retro computer productions "})]})]})]})]}),Object(S.jsxs)("div",{className:"cvCareerContainer",children:[Object(S.jsxs)("div",{children:[Object(S.jsx)("h3",{children:" FURTHER TRAINING "}),Object(S.jsx)("hr",{})]}),[{trainingTitle:"Using TypeScript with React - Udemy",trainingPeriod:"08/2021 - 09/2021",trainingContent:"TypeScript | React | Redux | NextJS | GraphQL API"},{trainingTitle:"The essential React course incl. Hooks, Redux, React-Router - Udemy",trainingPeriod:"08/2021",trainingContent:"React | Hooks | Redux Toolkit | asynchronous Axios API calls"},{trainingTitle:"Full-Stack Web Developer - Ironhack boot camp",trainingPeriod:"01/2021 - 03/2021",trainingContent:"HTML5 | CSS3 | JavaScript (ES6) | React | ExpressJS | NodeJS | MongoDB | Axios"},{trainingTitle:"The complete Web Developer Masterclass - Udemy",trainingPeriod:"10/2020 - 11/2020",trainingContent:"HTML | CSS | SCSS | Javascript | jQuery | Bootstrap | PHP"},{trainingTitle:"Multimedia and visual presentations",trainingPeriod:"2015 - 2019",trainingContent:"68k assembler - realtime 3D matrix objects"}].map((function(e,t){return Object(S.jsx)(J,{trainingItem:e},t)})),Object(S.jsxs)("div",{children:[Object(S.jsx)("h3",{children:" PROJECTS "}),Object(S.jsx)("hr",{})]}),Object(S.jsx)("div",{children:[{projectTitle:"CreativeGallery",gitHubClientPathname:"https://github.com/christiangerbig/creative-gallery-client",gitHubServerPathname:"https://github.com/christiangerbig/creative-gallery-server",deployedPathname:"https://creativegallery.herokuapp.com/",projectDescription:"Single page vanilla CSS application using React | JavaScript | SASS | NodeJs | MongoDB | Axios"},{projectTitle:"JungleSwap",gitHubClientPathname:"https://github.com/christiangerbig/jungle-swap-client",gitHubServerPathname:"https://github.com/christiangerbig/jungle-swap-server",deployedPathname:"https://jungleswap.herokuapp.com/",projectDescription:"Single page application using React | JavaScript | SASS | Bootstrap | NodeJs MongoDB | Axios and APIs (Cloudinary | Stripe | Kommunicate Chatbot)"},{projectTitle:"Trackertools",gitHubClientPathname:"https://github.com/christiangerbig/Trackertools",gitHubServerPathname:"",deployedPathname:"https://trackertools.herokuapp.com/",projectDescription:"Full stack project using Express | Handlebars | JavaScript | SASS | Bootstrap | MongoDB"},{projectTitle:"LetterShooter",gitHubClientPathname:"https://github.com/christiangerbig/letter-shooter",gitHubServerPathname:"",deployedPathname:"https://christiangerbig.github.io/letter-shooter/",projectDescription:"Front-end project build with HTML5 | Canvas | JavaScript | CSS3"}].map((function(e,t){return Object(S.jsx)(_,{cvProjectItem:e},t)}))}),Object(S.jsxs)("div",{children:[Object(S.jsx)("h3",{children:" WORK EXPERIENCE "}),Object(S.jsx)("hr",{})]}),Object(S.jsxs)("div",{className:"cvWorkDetailsContainer",children:[Object(S.jsx)("h4",{children:" Accounting Clerk - Deutsche Extrakt Kaffee GmbH Hamburg "}),Object(S.jsx)("h6",{children:" 05/2019 - 10/2019 "}),Object(S.jsxs)("ul",{children:[Object(S.jsx)("li",{children:" Account assignment "}),Object(S.jsx)("li",{children:" Master data maintenance "}),Object(S.jsx)("li",{children:" Reconciliation of subledger accounts "})]})]}),Object(S.jsxs)("div",{className:"cvWorkDetailsContainer",children:[Object(S.jsx)("h4",{children:" Accounting Clerk - Fieldfisher Hamburg "}),Object(S.jsx)("h6",{children:" 02/2017 - 01/2019 "})]}),Object(S.jsxs)("div",{children:[Object(S.jsx)("h3",{children:" EDUCATION "}),Object(S.jsx)("hr",{})]}),Object(S.jsxs)("div",{className:"cvEducationDetailsContainer",children:[Object(S.jsx)("h4",{children:"Qualified Social Education Worker - Fachhochschule Darmstadt"}),Object(S.jsx)("h6",{children:" 10/1993 - 02/1999 "})]})]})]})]})},F=function(){return Object(S.jsxs)("div",{className:"notFoundPageContainer logoImage",children:[Object(S.jsx)("div",{className:"pageNameContainer",children:Object(S.jsx)("h2",{children:" Not found "})}),Object(S.jsx)("div",{className:"somethingText",children:Object(S.jsx)("h3",{children:" something "})}),Object(S.jsx)("div",{className:"wentText",children:Object(S.jsx)("h4",{children:" went "})}),Object(S.jsx)("div",{className:"wrongText",children:Object(S.jsx)("h2",{children:" wrong "})}),Object(S.jsx)("div",{className:"notFoundGetBackContainer",children:Object(S.jsx)(o.b,{to:"/",className:"notFoundGetBackLink textEnlighted",children:"Get back"})})]})},W=Object(s.g)((function(){return Object(S.jsxs)("div",{children:[Object(S.jsx)(f,{}),Object(S.jsxs)(s.c,{children:[Object(S.jsx)(s.a,{exact:!0,path:"/",children:Object(S.jsx)(P,{})}),Object(S.jsx)(s.a,{path:"/about",children:Object(S.jsx)(T,{})}),Object(S.jsx)(s.a,{path:"/projects",children:Object(S.jsx)(I,{})}),Object(S.jsx)(s.a,{path:"/contact",children:Object(S.jsx)(A,{})}),Object(S.jsx)(s.a,{path:"/cv",children:Object(S.jsx)(B,{})}),Object(S.jsx)(s.a,{component:F})]}),Object(S.jsx)(y,{})]})})),V=Object(d.a)({reducer:{creativeGallery:N}});c(66);a.a.render(Object(S.jsx)(n.a.StrictMode,{children:Object(S.jsx)(j.a,{store:V,children:Object(S.jsx)(o.a,{children:Object(S.jsx)(W,{})})})}),document.querySelector("#root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.5cd757fe.chunk.js.map