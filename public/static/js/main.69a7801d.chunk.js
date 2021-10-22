(this["webpackJsonpcreative-gallery-client"]=this["webpackJsonpcreative-gallery-client"]||[]).push([[0],{50:function(e,t,c){},83:function(e,t,c){},84:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),i=c(14),s=c.n(i),r=c(5),o=(c(50),c(3)),l=c(17),j=function(){return Object(l.b)()},d=l.c,b=c(29),h=c.n(b),u=c(44),m=c(18),O=c(45),p=c.n(O),x="".concat("https://creativegallery.herokuapp.com","/api"),g=Object(m.b)("creativeGallery/createRequest",function(){var e=Object(u.a)(h.a.mark((function e(t,c){var n,a,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.request,a=t.history,i=c.dispatch,e.prev=2,e.next=5,p.a.post("".concat(x,"/request"),n);case 5:a.push("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),i(y(e.t0.response.data.errorMessage));case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t,c){return e.apply(this,arguments)}}()),v=Object(m.c)({name:"creativeGallery",initialState:{menuNumber:null,isDesktop:!1,isMenuVisible:!1,isMenuQuit:!1,error:null},reducers:{setMenuNumber:function(e,t){e.menuNumber=t.payload},setIsDesktop:function(e,t){e.isDesktop=t.payload},setIsMenuVisible:function(e,t){e.isMenuVisible=t.payload},setIsMenuQuit:function(e,t){e.isMenuQuit=t.payload},setError:function(e,t){e.error=t.payload}}}),f=v.actions,N=f.setMenuNumber,k=f.setIsDesktop,L=f.setIsMenuVisible,C=f.setIsMenuQuit,y=f.setError,w=v.reducer,S=c(12),T=c(13),I=c(0),P=function(){var e=d((function(e){return e.creativeGallery.menuNumber})),t=d((function(e){return e.creativeGallery.isDesktop})),c=d((function(e){return e.creativeGallery.isMenuVisible})),a=j();Object(n.useEffect)((function(){var e=function(){window.innerWidth>1024?a(k(!0)):a(k(!1))};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]);return Object(I.jsx)("div",{children:Object(I.jsx)("nav",{children:Object(I.jsxs)("div",{className:"navbarContainer navbarBorder",children:[Object(I.jsx)("div",{className:"logoContainer",children:Object(I.jsx)(o.b,{className:"textstylePlain colorWhite",to:"/",onClick:function(){a(N(0))},children:Object(I.jsxs)("div",{className:"logoSubContainer",children:[Object(I.jsx)("div",{className:"logoLetterOutlineC",children:Object(I.jsx)("div",{className:"logoLetterInlineC"})}),Object(I.jsx)("div",{className:"logoLetterOutlineG",children:Object(I.jsx)("div",{className:"logoLetterInlineG",children:Object(I.jsx)("div",{className:"logoLetterBoxG",children:Object(I.jsx)("div",{className:"logoLetterBoxG2",children:" "})})})})]})})}),t&&Object(I.jsxs)("div",{className:"navigationContainer",children:[Object(I.jsxs)("ul",{className:"navigationSubContainerLeft",children:[Object(I.jsx)("li",{children:Object(I.jsx)(o.b,{to:"/about",className:1===e?"navigationLink navigationLinkActive":"navigationLink",onClick:function(){a(N(1))},children:"ABOUT"})}),Object(I.jsx)("li",{children:Object(I.jsx)(o.b,{to:"/projects",className:2===e?"navigationLink navigationLinkActive":"navigationLink",onClick:function(){a(N(2))},children:"PROJECTS"})}),Object(I.jsx)("li",{children:Object(I.jsx)(o.b,{to:"/techstack",className:3===e?"navigationLink navigationLinkActive":"navigationLink",onClick:function(){a(N(3))},children:"TECHSTACK"})})]}),Object(I.jsxs)("ul",{className:"navigationSubContainerRight",children:[Object(I.jsx)("li",{children:Object(I.jsx)(o.b,{to:{pathname:"https://www.dropbox.com/s/0l5uqiak72pepcq/CV%20%285%29.pdf?dl=0"},target:"_blank",rel:"noreferrer noopener",className:"navigationLink",children:"RESUME"})}),Object(I.jsx)("li",{children:Object(I.jsx)(o.b,{to:"/contact",className:4===e?"navigationLink navigationLinkActive":"navigationLink",onClick:function(){a(N(4))},children:"CONTACT"})})]})]}),!t&&!c&&Object(I.jsx)("div",{children:Object(I.jsx)(S.a,{icon:T.a,onClick:function(){a(L(!0)),a(C(!1))}})})]})})})},G=function(){var e=d((function(e){return e.creativeGallery.isDesktop})),t=d((function(e){return e.creativeGallery.isMenuVisible})),c=d((function(e){return e.creativeGallery.isMenuQuit})),n=j(),a=function(){n(C(!0)),setTimeout((function(){n(L(!1))}),300)};return Object(I.jsx)("div",{children:!e&&t&&Object(I.jsxs)("div",{className:c?"menu fadeMenuOut":"menu fadeMenuIn",children:[Object(I.jsx)("div",{className:"menuCloseContainer",children:Object(I.jsx)(S.a,{icon:T.e,className:"menuClose colorWhite",onClick:a})}),Object(I.jsx)("div",{className:"menuContainer",children:Object(I.jsx)("div",{className:"menuSubContainer",children:Object(I.jsxs)("ul",{children:[Object(I.jsx)("li",{children:Object(I.jsx)(o.b,{to:"/about",className:c?"menuLink colorOrange menuLinkFadeOutSpeed1":"menuLink colorOrange menuLinkFadeInSpeed1",onClick:a,children:"ABOUT"})}),Object(I.jsx)("li",{children:Object(I.jsx)(o.b,{to:"/projects",className:c?"menuLink colorOrange menuLinkFadeOutSpeed2":"menuLink colorOrange menuLinkFadeInSpeed2",onClick:a,children:"PROJECTS"})}),Object(I.jsx)("li",{children:Object(I.jsx)(o.b,{to:"/techstack",className:c?"menuLink colorOrange menuLinkFadeOutSpeed3":"menuLink colorOrange menuLinkFadeInSpeed3",onClick:a,children:"TECHSTACK"})}),Object(I.jsx)("li",{children:Object(I.jsx)(o.b,{to:{pathname:"https://www.dropbox.com/s/0l5uqiak72pepcq/CV%20%285%29.pdf?dl=0"},target:"_blank",rel:"noreferrer noopener",className:c?"menuLink colorOrange menuLinkFadeOutSpeed4":"menuLink colorOrange menuLinkFadeInSpeed4",onClick:a,children:"RESUME"})}),Object(I.jsx)("li",{children:Object(I.jsx)(o.b,{to:"/contact",className:c?"menuLink colorOrange menuLinkFadeOutSpeed5":"menuLink colorOrange menuLinkFadeInSpeed5",onClick:a,children:"CONTACT"})})]})})})]})})},M=function(){return Object(I.jsx)("div",{children:Object(I.jsx)("footer",{children:Object(I.jsxs)("div",{className:"footerContainer",children:[Object(I.jsx)("span",{className:"copyrightText",children:" \xa9 2021 Christian Gerbig "}),Object(I.jsxs)("ul",{className:"footerSubContainer",children:[Object(I.jsx)("li",{children:Object(I.jsx)(o.b,{to:{pathname:"https://www.linkedin.com/in/christian-gerbig/"},target:"_blank",rel:"noreferrer noopener",className:"footerLink",children:Object(I.jsx)("i",{className:"fab fa-linkedin colorWhite"})})}),Object(I.jsx)("li",{children:Object(I.jsx)(o.b,{to:{pathname:"https://github.com/christiangerbig/"},target:"_blank",rel:"noreferrer noopener",className:"footerLink",children:Object(I.jsx)("i",{className:"fab fa-github textColorWhite"})})})]})]})})})},E=c(11),B=function(){return Object(n.useEffect)((function(){E.animateScroll.scrollToTop()}),[]),Object(I.jsxs)("div",{className:"homePageContainer",children:[Object(I.jsx)("div",{className:"homeLogoContainer blurrIn",children:Object(I.jsxs)("div",{className:"homeLogoSubContainer",children:[Object(I.jsx)("div",{className:"homeLogoLetterOutlineC",children:Object(I.jsx)("div",{className:"homeLogoLetterInlineC"})}),Object(I.jsx)("div",{className:"homeLogoLetterOutlineG",children:Object(I.jsx)("div",{className:"homeLogoLetterInlineG",children:Object(I.jsx)("div",{className:"homeLogoLetterBoxG",children:Object(I.jsx)("div",{className:"homeLogoLetterBoxG2",children:" "})})})})]})}),Object(I.jsxs)("div",{className:"homeIntroText",children:[Object(I.jsx)("h1",{className:"textFat",children:" Hi, I'm Christian "}),Object(I.jsx)("h2",{className:"textBig",children:" A passionate Web Developer "})]})]})},F=function(){var e=j();return Object(n.useEffect)((function(){E.animateScroll.scrollToTop()}),[]),Object(I.jsxs)("div",{className:"aboutPageContainer",children:[Object(I.jsx)("header",{children:Object(I.jsxs)("div",{className:"headerText greenBorder",children:[Object(I.jsx)("h1",{className:"textFat",children:" There is only one way "}),Object(I.jsx)("h2",{className:"textBig",children:" Straight forward "})]})}),Object(I.jsxs)("div",{className:"textContainer",children:[Object(I.jsxs)("div",{className:"textColumContainer",children:[Object(I.jsx)("h3",{children:" Hi,"}),Object(I.jsxs)("p",{children:["I'm Christian Gerbig. I'm a Web Developer focused on Frontend and Backend technologies. My homebase is Hamburg in Germany. ",Object(I.jsx)("br",{}),Object(I.jsx)("br",{})," I believe in the",Object(I.jsx)("span",{className:"colorOrange",children:"positive power of communication"}),"with a trust in",Object(I.jsx)("span",{className:"colorOrange",children:" cooperative team working "}),"making an asset from sharing different points of views. ",Object(I.jsx)("br",{}),Object(I.jsx)("br",{})," I like to use every aspect of new technology available to reach the goals and love to code",Object(I.jsx)("span",{className:"colorOrange",children:" optimized solutions "})," suiting individual requirements with respect to time, budget and target.",Object(I.jsx)("br",{})," ",Object(I.jsx)("br",{}),' My motto: "Learning things, improving (them) and reach the goals".']})]}),Object(I.jsxs)("div",{className:"textColumContainer",children:[Object(I.jsx)("h3",{children:" How it began "}),Object(I.jsxs)("p",{children:["I started to learn the fundamentals of",Object(I.jsx)("span",{className:"colorOrange",children:" Web Development "})," by myself and in the Full Stack Web Development Bootcamp at Ironhack. ",Object(I.jsx)("br",{}),Object(I.jsx)("br",{})," Meanwhile I improved my skills to write",Object(I.jsx)("span",{className:"colorOrange",children:" Clean Code "})," and learned in several Udemy courses to apply the",Object(I.jsx)("span",{className:"colorOrange",children:" Redux Toolkit "})," and",Object(I.jsx)("span",{className:"colorOrange",children:" TypeScript "})," together with",Object(I.jsx)("span",{className:"colorOrange",children:" React "})," in my projects. ",Object(I.jsx)("br",{}),Object(I.jsx)("br",{})," I would like to become part of a team where I can apply, develop and share my skills. ",Object(I.jsx)("br",{})," ",Object(I.jsx)("br",{}),Object(I.jsx)("span",{className:"aboutContactLink",onClick:function(){return e(N(4))},children:Object(I.jsx)(o.b,{to:{pathname:"/contact"},children:" Let's get in touch. "})})]})]})]})]})},D=function(e){var t=e.projectItem,c=t.projectName,a=t.projectPicturePath,i=t.projectVideoPath,s=t.projectDescription,r=t.deployedPath,l=t.gitHubClientPath,j=t.gitHubServerPath,d=Object(n.useRef)([]);return Object(n.useEffect)((function(){d.current[0].innerHTML=s}),[]),Object(I.jsxs)("div",{className:"projectDetailsContainer",children:[Object(I.jsx)("video",{width:"320",height:"200",muted:!0,controls:!0,poster:a,src:i}),Object(I.jsxs)("div",{className:"projectDescription",children:[Object(I.jsxs)("h2",{children:[" ",c," "]}),Object(I.jsx)("p",{ref:function(e){d.current[0]=e}})]}),Object(I.jsxs)("div",{className:"projectLinksContainer",children:[Object(I.jsx)("div",{children:Object(I.jsx)(o.b,{to:{pathname:r},target:"_blank",className:"projectTryItLink",children:"TRY IT"})}),Object(I.jsx)("div",{children:Object(I.jsx)(o.b,{to:{pathname:l},target:"_blank",className:"projectGitHubLink",children:"GIT HUB"})}),j&&Object(I.jsx)("div",{children:Object(I.jsx)(o.b,{to:{pathname:j},target:"_blank",className:"projectGitHubLink",children:"GIT HUB 2"})})]})]})},H=c.p+"static/media/jungle-swap.04645ba1.png",R=c.p+"static/media/trackertools.cdf33462.png",A=c.p+"static/media/letter-shooter.a0667b69.png",V=function(){var e=[{projectName:"JUNGLE SWAP",projectPicturePath:H,projectVideoPath:"https://bliskcloudstorage.blob.core.windows.net/videos/2c9bdc9d-6b6f-4823-844c-2a2cd5c36a86/15-May-2021-13-45-637566759460450173.mp4",projectDescription:" Share your plant offshoots and make money or swap them for another plant. Shop and give a plant a new home. <br /> <br /> <br />",deployedPath:"https://jungleswap.herokuapp.com/",gitHubClientPath:"https://github.com/christiangerbig/jungle-swap-client",gitHubServerPath:"https://github.com/christiangerbig/jungle-swap-server"},{projectName:"TRACKERTOOLS",projectPicturePath:R,projectVideoPath:"https://bliskcloudstorage.blob.core.windows.net/videos/2c9bdc9d-6b6f-4823-844c-2a2cd5c36a86/15-May-2021-13-35-637566753722531829.mp4",projectDescription:"Four powerful tools to make working with the music editor Protracker and its modules more comfortable. <br /> <br /> <br />",deployedPath:"https://trackertools.herokuapp.com/",gitHubClientPath:"https://github.com/christiangerbig/Trackertools",gitHubServerPath:""},{projectName:"LETTER SHOOTER",projectPicturePath:A,projectVideoPath:"https://bliskcloudstorage.blob.core.windows.net/videos/2c9bdc9d-6b6f-4823-844c-2a2cd5c36a86/15-May-2021-14-10-637566774755686276.mp4",projectDescription:" A coordination and strategy game with the goal to hit the missing letters with precise shots. <br /> <br /> <br />",deployedPath:"https://christiangerbig.github.io/letter-shooter/",gitHubClientPath:"https://github.com/christiangerbig/letter-shooter",gitHubServerPath:""}];return Object(n.useEffect)((function(){E.animateScroll.scrollToTop()}),[]),Object(I.jsxs)("div",{className:"projectsPageContainer",children:[Object(I.jsx)("header",{children:Object(I.jsxs)("div",{className:"headerText orangeBorder",children:[Object(I.jsx)("h1",{className:"textFat",children:" My Web Developer projects "}),Object(I.jsx)("h2",{className:"textBig",children:" I was working on "})]})}),Object(I.jsx)("div",{className:"projectsContainer",children:e.map((function(e,t){return Object(I.jsx)(D,{projectItem:e},t)}))})]})},W=c.p+"static/media/React-Logo.ae626225.svg",_=c.p+"static/media/Redux-Logo.a9567540.svg",q=c.p+"static/media/JavaScript(ES6)-Logo.a309520a.svg",U=c.p+"static/media/TypeScript-Logo.17d5e87e.svg",J=c.p+"static/media/Sass-Logo.8351205a.svg",Q=c.p+"static/media/Cloudinary-Logo.df0c0e93.svg",K=c.p+"static/media/Bootstrap-Logo.527d0fc0.svg",z=c.p+"static/media/NPM-Logo.5620a716.svg",Y=c.p+"static/media/MongoDB-Logo.153b7b44.svg",X=c.p+"static/media/NodeJS-Logo.5a3a9ca2.svg",Z=c.p+"static/media/GitHub-Logo.11619ac0.svg",$=c.p+"static/media/Visual-Studio-Code-Logo.f57bbf46.svg",ee=function(){var e=[W,_,X,q,U,J,K,Y,Q,z,Z,$];return Object(n.useEffect)((function(){E.animateScroll.scrollToTop()}),[]),Object(I.jsxs)("div",{className:"techStackPageContainer",children:[Object(I.jsx)("header",{children:Object(I.jsxs)("div",{className:"headerText violetBorder",children:[Object(I.jsx)("h1",{className:"textFat",children:" The tech stack "}),Object(I.jsx)("h2",{className:"textBig",children:" I use in my projects "})]})}),Object(I.jsx)("div",{className:"techStackLogosContainer",children:e.map((function(e,t){return Object(I.jsx)("img",{src:e,alt:"firm logo"},t)}))})]})},te=function(){var e=d((function(e){return e.creativeGallery.error})),t=j(),c=Object(r.f)();Object(n.useEffect)((function(){t(y(null)),E.animateScroll.scrollToTop()}),[]);return Object(I.jsxs)("div",{className:"contactPageContainer",children:[Object(I.jsx)("header",{children:Object(I.jsxs)("div",{className:"headerText blueBorder",children:[Object(I.jsx)("h1",{className:"textFat",children:" Don't hesitate "}),Object(I.jsx)("h2",{className:"textBig",children:" to contact me "})]})}),Object(I.jsxs)("div",{className:"contactContainer",children:[Object(I.jsx)("h1",{children:" Christian Gerbig "}),Object(I.jsx)("h2",{children:" Web Developer "}),Object(I.jsxs)("div",{className:"contactWaysContainer",children:[Object(I.jsxs)("div",{className:"contactEmailContainer",children:[Object(I.jsxs)("h3",{children:[Object(I.jsx)(S.a,{icon:T.b})," e-mail"]}),Object(I.jsx)("span",{className:"contactLink",children:Object(I.jsx)(o.b,{to:{pathname:"mailto:chr_gerbig@web.de"},target:"_blank",children:Object(I.jsx)("h4",{children:" chr_gerbig(at)web.de "})})})]}),Object(I.jsxs)("div",{className:"contactPhoneContainer",children:[Object(I.jsxs)("h3",{children:[Object(I.jsx)(S.a,{icon:T.c})," phone"]}),Object(I.jsx)("span",{className:"contactLink",children:Object(I.jsx)(o.b,{to:{pathname:"tel:+4915154824288"},target:"_blank",children:Object(I.jsx)("h4",{children:" +49\xa0151\xa0548\xa0242\xa088 "})})})]})]}),Object(I.jsx)("div",{children:Object(I.jsxs)("h3",{children:[Object(I.jsx)(S.a,{icon:T.d})," or write me"]})}),e&&Object(I.jsxs)("p",{className:"errorOutput warningColor",children:[" ",e," "]}),Object(I.jsxs)("form",{onSubmit:function(e){!function(e,c){e.preventDefault();var n=e.target,a=n.email,i=n.subject,s=n.message,r={email:a.value,subject:i.value,message:s.value};t(g({request:r,history:c}))}(e,c)},children:[Object(I.jsx)("input",{type:"email",name:"email",placeholder:"email",className:"formInput"}),Object(I.jsx)("input",{type:"text",name:"subject",placeholder:"subject",className:"formInput"}),Object(I.jsx)("textarea",{name:"message",cols:35,rows:7,placeholder:"message",className:"formTextarea"}),Object(I.jsx)("input",{type:"submit",value:"SUBMIT",className:"formSubmit",formNoValidate:!0})]})]})]})},ce=function(){return Object(I.jsxs)("div",{className:"notFoundPageContainer logoImage",children:[Object(I.jsx)("header",{children:Object(I.jsxs)("div",{className:"headerText orangeBorder",children:[Object(I.jsx)("h1",{className:"textFat",children:" Error 404 "}),Object(I.jsx)("h2",{className:"textBig",children:" Page not found "})]})}),Object(I.jsx)("div",{className:"notFoundGetBackContainer",children:Object(I.jsx)(o.b,{to:"/",className:"notFoundGetBackLink textEnlighted",children:"GET BACK"})})]})},ne=Object(r.g)((function(){return Object(I.jsxs)("div",{children:[Object(I.jsx)(P,{}),Object(I.jsx)(G,{}),Object(I.jsxs)(r.c,{children:[Object(I.jsx)(r.a,{exact:!0,path:"/",children:Object(I.jsx)(B,{})}),Object(I.jsx)(r.a,{path:"/about",children:Object(I.jsx)(F,{})}),Object(I.jsx)(r.a,{path:"/projects",children:Object(I.jsx)(V,{})}),Object(I.jsx)(r.a,{path:"/techstack",children:Object(I.jsx)(ee,{})}),Object(I.jsx)(r.a,{path:"/contact",children:Object(I.jsx)(te,{})}),Object(I.jsx)(r.a,{component:ce})]}),Object(I.jsx)(M,{})]})})),ae=Object(m.a)({reducer:{creativeGallery:w}});c(83);s.a.render(Object(I.jsx)(a.a.StrictMode,{children:Object(I.jsx)(l.a,{store:ae,children:Object(I.jsx)(o.a,{children:Object(I.jsx)(ne,{})})})}),document.querySelector("#root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.69a7801d.chunk.js.map