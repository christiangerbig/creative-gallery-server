(this["webpackJsonpcreative-gallery-client"]=this["webpackJsonpcreative-gallery-client"]||[]).push([[0],{50:function(e,t,c){},83:function(e,t,c){},84:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),i=c(15),s=c.n(i),r=c(5),o=(c(50),c(3)),l=c(6),j=c(29),b=c.n(j),d=c(44),h=c(18),u=c(45),m=c.n(u),O="".concat("https://creativegallery.herokuapp.com","/api"),x=Object(h.b)("creativeGallery/createRequest",function(){var e=Object(d.a)(b.a.mark((function e(t,c){var n,a,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.request,a=t.history,i=c.dispatch,e.prev=2,e.next=5,m.a.post("".concat(O,"/request"),n);case 5:a.push("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),i(L(e.t0.response.data.errorMessage));case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t,c){return e.apply(this,arguments)}}()),p=Object(h.c)({name:"creativeGallery",initialState:{menuNumber:null,isDesktop:!1,isMenuVisible:!1,isMenuQuit:!1,error:null},reducers:{setMenuNumber:function(e,t){e.menuNumber=t.payload},setIsDesktop:function(e,t){e.isDesktop=t.payload},setIsMenuVisible:function(e,t){e.isMenuVisible=t.payload},setIsMenuQuit:function(e,t){e.isMenuQuit=t.payload},setError:function(e,t){e.error=t.payload}}}),g=p.actions,v=g.setMenuNumber,f=g.setIsDesktop,N=g.setIsMenuVisible,k=g.setIsMenuQuit,L=g.setError,C=p.reducer,y=c(13),w=c(14),S=c(0),T=function(){var e=Object(l.c)((function(e){return e.creativeGallery.menuNumber})),t=Object(l.c)((function(e){return e.creativeGallery.isDesktop})),c=Object(l.c)((function(e){return e.creativeGallery.isMenuVisible})),a=Object(l.b)();Object(n.useEffect)((function(){var e=function(){window.innerWidth>1024?a(f(!0)):a(f(!1))};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]);return Object(S.jsx)("div",{children:Object(S.jsx)("nav",{children:Object(S.jsxs)("div",{className:"navbarContainer navbarBorder",children:[Object(S.jsx)("div",{className:"logoContainer",children:Object(S.jsx)(o.b,{className:"textstylePlain colorWhite",to:"/",onClick:function(){return a(v(0))},children:Object(S.jsxs)("div",{className:"logoSubContainer",children:[Object(S.jsx)("div",{className:"logoLetterOutlineC",children:Object(S.jsx)("div",{className:"logoLetterInlineC"})}),Object(S.jsx)("div",{className:"logoLetterOutlineG",children:Object(S.jsx)("div",{className:"logoLetterInlineG",children:Object(S.jsx)("div",{className:"logoLetterBoxG",children:Object(S.jsx)("div",{className:"logoLetterBoxG2",children:" "})})})})]})})}),t&&Object(S.jsxs)("div",{className:"navigationContainer",children:[Object(S.jsxs)("ul",{className:"navigationSubContainerLeft",children:[Object(S.jsx)("li",{children:Object(S.jsx)(o.b,{to:"/about",className:1===e?"navigationLink navigationLinkActive":"navigationLink",onClick:function(){return a(v(1))},children:"ABOUT"})}),Object(S.jsx)("li",{children:Object(S.jsx)(o.b,{to:"/projects",className:2===e?"navigationLink navigationLinkActive":"navigationLink",onClick:function(){return a(v(2))},children:"PROJECTS"})}),Object(S.jsx)("li",{children:Object(S.jsx)(o.b,{to:"/techstack",className:3===e?"navigationLink navigationLinkActive":"navigationLink",onClick:function(){return a(v(3))},children:"TECHSTACK"})})]}),Object(S.jsxs)("ul",{className:"navigationSubContainerRight",children:[Object(S.jsx)("li",{children:Object(S.jsx)(o.b,{to:{pathname:"https://www.dropbox.com/s/bslt9tm2yc10700/CV%20%285%29.pdf?dl=0"},target:"_blank",rel:"noreferrer noopener",className:"navigationLink",children:"RESUME"})}),Object(S.jsx)("li",{children:Object(S.jsx)(o.b,{to:"/contact",className:4===e?"navigationLink navigationLinkActive":"navigationLink",onClick:function(){return a(v(4))},children:"CONTACT"})})]})]}),!t&&!c&&Object(S.jsx)("div",{children:Object(S.jsx)(y.a,{icon:w.a,onClick:function(){a(N(!0)),a(k(!1))}})})]})})})},I=function(){var e=Object(l.c)((function(e){return e.creativeGallery.isDesktop})),t=Object(l.c)((function(e){return e.creativeGallery.isMenuVisible})),c=Object(l.c)((function(e){return e.creativeGallery.isMenuQuit})),n=Object(l.b)(),a=function(){n(k(!0)),setTimeout((function(){n(N(!1))}),300)};return Object(S.jsx)("div",{children:!e&&t&&Object(S.jsxs)("div",{className:c?"menu fadeMenuOut":"menu fadeMenuIn",children:[Object(S.jsx)("div",{className:"menuCloseContainer",children:Object(S.jsx)(y.a,{icon:w.e,className:"menuClose colorWhite",onClick:a})}),Object(S.jsx)("div",{className:"menuContainer",children:Object(S.jsx)("div",{className:"menuSubContainer",children:Object(S.jsxs)("ul",{children:[Object(S.jsx)("li",{children:Object(S.jsx)(o.b,{to:"/about",className:c?"menuLink colorOrange menuLinkFadeOutSpeed1":"menuLink colorOrange menuLinkFadeInSpeed1",onClick:a,children:"ABOUT"})}),Object(S.jsx)("li",{children:Object(S.jsx)(o.b,{to:"/projects",className:c?"menuLink colorOrange menuLinkFadeOutSpeed2":"menuLink colorOrange menuLinkFadeInSpeed2",onClick:a,children:"PROJECTS"})}),Object(S.jsx)("li",{children:Object(S.jsx)(o.b,{to:"/techstack",className:c?"menuLink colorOrange menuLinkFadeOutSpeed3":"menuLink colorOrange menuLinkFadeInSpeed3",onClick:a,children:"TECHSTACK"})}),Object(S.jsx)("li",{children:Object(S.jsx)(o.b,{to:{pathname:"https://www.dropbox.com/s/bslt9tm2yc10700/CV%20%285%29.pdf?dl=0"},target:"_blank",rel:"noreferrer noopener",className:c?"menuLink colorOrange menuLinkFadeOutSpeed4":"menuLink colorOrange menuLinkFadeInSpeed4",onClick:a,children:"RESUME"})}),Object(S.jsx)("li",{children:Object(S.jsx)(o.b,{to:"/contact",className:c?"menuLink colorOrange menuLinkFadeOutSpeed5":"menuLink colorOrange menuLinkFadeInSpeed5",onClick:a,children:"CONTACT"})})]})})})]})})},P=function(){return Object(S.jsx)("div",{children:Object(S.jsx)("footer",{children:Object(S.jsxs)("div",{className:"footerContainer",children:[Object(S.jsx)("span",{className:"copyrightText",children:" \xa9 2021 Christian Gerbig "}),Object(S.jsxs)("ul",{className:"footerSubContainer",children:[Object(S.jsx)("li",{children:Object(S.jsx)(o.b,{to:{pathname:"https://www.linkedin.com/in/christian-gerbig/"},target:"_blank",rel:"noreferrer noopener",className:"footerLink",children:Object(S.jsx)("i",{className:"fab fa-linkedin colorWhite"})})}),Object(S.jsx)("li",{children:Object(S.jsx)(o.b,{to:{pathname:"https://github.com/christiangerbig/"},target:"_blank",rel:"noreferrer noopener",className:"footerLink",children:Object(S.jsx)("i",{className:"fab fa-github textColorWhite"})})})]})]})})})},G=c(12),M=function(){return Object(n.useEffect)((function(){return G.animateScroll.scrollToTop()}),[]),Object(S.jsxs)("div",{className:"homePageContainer",children:[Object(S.jsx)("div",{className:"homeLogoContainer blurrIn",children:Object(S.jsxs)("div",{className:"homeLogoSubContainer",children:[Object(S.jsx)("div",{className:"homeLogoLetterOutlineC",children:Object(S.jsx)("div",{className:"homeLogoLetterInlineC"})}),Object(S.jsx)("div",{className:"homeLogoLetterOutlineG",children:Object(S.jsx)("div",{className:"homeLogoLetterInlineG",children:Object(S.jsx)("div",{className:"homeLogoLetterBoxG",children:Object(S.jsx)("div",{className:"homeLogoLetterBoxG2",children:" "})})})})]})}),Object(S.jsxs)("div",{className:"homeIntroText",children:[Object(S.jsx)("h1",{className:"textFat",children:" Hi, I'm Christian "}),Object(S.jsx)("h2",{className:"textBig",children:" A passionate Web Developer "})]})]})},E=function(){var e=Object(l.b)();return Object(n.useEffect)((function(){return G.animateScroll.scrollToTop()}),[]),Object(S.jsxs)("div",{className:"aboutPageContainer",children:[Object(S.jsx)("header",{children:Object(S.jsxs)("div",{className:"headerText greenBorder",children:[Object(S.jsx)("h1",{className:"textFat",children:" There is only one way "}),Object(S.jsx)("h2",{className:"textBig",children:" Straight forward "})]})}),Object(S.jsxs)("div",{className:"textContainer",children:[Object(S.jsxs)("div",{className:"textColumContainer",children:[Object(S.jsx)("h3",{children:" Hi,"}),Object(S.jsxs)("p",{children:["I'm Christian Gerbig. I'm a Web Developer focused on Frontend and Backend technologies. My homebase is Hamburg in Germany. ",Object(S.jsx)("br",{})," ",Object(S.jsx)("br",{})," I believe in the ",Object(S.jsx)("span",{className:"colorOrange",children:" positive power of communication "})," with a trust in ",Object(S.jsx)("span",{className:"colorOrange",children:" cooperative team working "})," making an asset from sharing different points of views. ",Object(S.jsx)("br",{})," ",Object(S.jsx)("br",{}),"  I like to use every aspect of new technology available to reach the goals and love to code ",Object(S.jsx)("span",{className:"colorOrange",children:" optimized solutions "})," suiting individual requirements with respect to time, budget and target.",Object(S.jsx)("br",{})," ",Object(S.jsx)("br",{}),' My motto: "Learning things, improving (them) and reach the goals".']})]}),Object(S.jsxs)("div",{className:"textColumContainer",children:[Object(S.jsx)("h3",{children:" How it began "}),Object(S.jsxs)("p",{children:["I started to learn the fundamentals of ",Object(S.jsx)("span",{className:"colorOrange",children:" Web Development "})," by myself and in the Full Stack Web Development Bootcamp at Ironhack. ",Object(S.jsx)("br",{})," ",Object(S.jsx)("br",{})," Meanwhile I improved my skills to write ",Object(S.jsx)("span",{className:"colorOrange",children:" Clean Code "})," and learned in several Udemy courses to apply the ",Object(S.jsx)("span",{className:"colorOrange",children:" Redux Toolkit "})," and ",Object(S.jsx)("span",{className:"colorOrange",children:" TypeScript "})," together with ",Object(S.jsx)("span",{className:"colorOrange",children:" React "})," in my projects. ",Object(S.jsx)("br",{})," ",Object(S.jsx)("br",{})," I would like to become part of a team where I can apply, develop and share my skills. ",Object(S.jsx)("br",{})," ",Object(S.jsx)("br",{}),Object(S.jsx)("span",{className:"aboutContactLink",onClick:function(){return e(v(4))},children:Object(S.jsx)(o.b,{to:{pathname:"/contact"},children:" Let's get in touch. "})})]})]})]})]})},B=function(e){var t=e.projectItem,c=t.projectName,a=t.projectPicturePath,i=t.projectVideoPath,s=t.projectDescription,r=t.deployedPath,l=t.gitHubClientPath,j=t.gitHubServerPath,b=Object(n.useRef)([]);return Object(n.useEffect)((function(){b.current[0].innerHTML=s}),[]),Object(S.jsx)("div",{children:Object(S.jsxs)("div",{className:"projectDetailsContainer",children:[Object(S.jsx)("div",{className:"projectVideoContainer",children:Object(S.jsx)("video",{width:"360",height:"200",muted:!0,controls:!0,poster:a,src:i})}),Object(S.jsxs)("div",{className:"projectDescription",children:[Object(S.jsxs)("h2",{children:[" ",c," "]}),Object(S.jsx)("p",{ref:function(e){return b.current[0]=e},children:" "})]}),Object(S.jsxs)("div",{className:"projectLinksContainer",children:[Object(S.jsx)("div",{children:Object(S.jsx)(o.b,{to:{pathname:r},target:"_blank",className:"projectTryItLink",children:"TRY IT"})}),Object(S.jsx)("div",{children:Object(S.jsx)(o.b,{to:{pathname:l},target:"_blank",className:"projectGitHubLink",children:"GIT HUB"})}),j&&Object(S.jsx)("div",{children:Object(S.jsx)(o.b,{to:{pathname:j},target:"_blank",className:"projectGitHubLink",children:"GIT HUB 2"})})]})]})})},F=c.p+"static/media/jungle-swap.04645ba1.png",D=c.p+"static/media/trackertools.cdf33462.png",H=c.p+"static/media/letter-shooter.a0667b69.png",R=function(){var e=[{projectName:"JUNGLE SWAP",projectPicturePath:F,projectVideoPath:"https://bliskcloudstorage.blob.core.windows.net/videos/2c9bdc9d-6b6f-4823-844c-2a2cd5c36a86/15-May-2021-13-45-637566759460450173.mp4",projectDescription:" Share your plant offshoots and make money or swap them for another plant. Shop and give a plant a new home. <br /> <br /> <br />",deployedPath:"https://jungleswap.herokuapp.com/",gitHubClientPath:"https://github.com/christiangerbig/jungle-swap-client",gitHubServerPath:"https://github.com/christiangerbig/jungle-swap-server"},{projectName:"TRACKERTOOLS",projectPicturePath:D,projectVideoPath:"https://bliskcloudstorage.blob.core.windows.net/videos/2c9bdc9d-6b6f-4823-844c-2a2cd5c36a86/15-May-2021-13-35-637566753722531829.mp4",projectDescription:"Four powerful tools to make working with the music editor Protracker and its modules more comfortable. <br /> <br /> <br />",deployedPath:"https://trackertools.herokuapp.com/",gitHubClientPath:"https://github.com/christiangerbig/Trackertools",gitHubServerPath:""},{projectName:"LETTER SHOOTER",projectPicturePath:H,projectVideoPath:"https://bliskcloudstorage.blob.core.windows.net/videos/2c9bdc9d-6b6f-4823-844c-2a2cd5c36a86/15-May-2021-14-10-637566774755686276.mp4",projectDescription:" A coordination and strategy game with the goal to hit the missing letters with precise shots. <br /> <br /> <br />",deployedPath:"https://christiangerbig.github.io/letter-shooter/",gitHubClientPath:"https://github.com/christiangerbig/letter-shooter",gitHubServerPath:""}];return Object(n.useEffect)((function(){return G.animateScroll.scrollToTop()}),[]),Object(S.jsxs)("div",{className:"projectsPageContainer",children:[Object(S.jsx)("header",{children:Object(S.jsxs)("div",{className:"headerText orangeBorder",children:[Object(S.jsx)("h1",{className:"textFat",children:" My Web Developer projects "}),Object(S.jsx)("h2",{className:"textBig",children:" I was working on "})]})}),Object(S.jsx)("div",{className:"projectsContainer",children:e.map((function(e,t){return Object(S.jsx)(B,{projectItem:e},t)}))})]})},A=c.p+"static/media/React-Logo.ae626225.svg",V=c.p+"static/media/Redux-Logo.a9567540.svg",W=c.p+"static/media/JavaScript(ES6)-Logo.a309520a.svg",_=c.p+"static/media/TypeScript-Logo.17d5e87e.svg",U=c.p+"static/media/Sass-Logo.8351205a.svg",J=c.p+"static/media/Cloudinary-Logo.df0c0e93.svg",q=c.p+"static/media/Bootstrap-Logo.527d0fc0.svg",Q=c.p+"static/media/NPM-Logo.5620a716.svg",K=c.p+"static/media/MongoDB-Logo.153b7b44.svg",z=c.p+"static/media/NodeJS-Logo.5a3a9ca2.svg",Y=c.p+"static/media/GitHub-Logo.11619ac0.svg",X=c.p+"static/media/Visual-Studio-Code-Logo.f57bbf46.svg",Z=function(){var e=[A,V,z,W,_,U,q,K,J,Q,Y,X];return Object(n.useEffect)((function(){return G.animateScroll.scrollToTop()}),[]),Object(S.jsxs)("div",{className:"techStackPageContainer",children:[Object(S.jsx)("header",{children:Object(S.jsxs)("div",{className:"headerText violetBorder",children:[Object(S.jsx)("h1",{className:"textFat",children:" The tech stack "}),Object(S.jsx)("h2",{className:"textBig",children:" I use in my projects "})]})}),Object(S.jsx)("div",{className:"techStackLogosContainer",children:e.map((function(e){return Object(S.jsx)("img",{src:e,alt:"firm logo"})}))})]})},$=function(){var e=Object(l.c)((function(e){return e.creativeGallery.error})),t=Object(l.b)(),c=Object(r.f)();Object(n.useEffect)((function(){t(L(null)),G.animateScroll.scrollToTop()}),[]);return Object(S.jsxs)("div",{className:"contactPageContainer",children:[Object(S.jsx)("header",{children:Object(S.jsxs)("div",{className:"headerText blueBorder",children:[Object(S.jsx)("h1",{className:"textFat",children:" Don't hesitate "}),Object(S.jsx)("h2",{className:"textBig",children:" to contact me "})]})}),Object(S.jsxs)("div",{className:"contactContainer",children:[Object(S.jsx)("h1",{children:" Christian Gerbig "}),Object(S.jsx)("h2",{children:" Web Developer "}),Object(S.jsxs)("div",{className:"contactWaysContainer",children:[Object(S.jsxs)("div",{className:"contactEmailContainer",children:[Object(S.jsxs)("h3",{children:[Object(S.jsx)(y.a,{icon:w.b})," e-mail"]}),Object(S.jsx)("span",{className:"contactLink",children:Object(S.jsx)(o.b,{to:{pathname:"mailto:chr_gerbig@web.de"},target:"_blank",children:Object(S.jsx)("h4",{children:" chr_gerbig(at)web.de "})})})]}),Object(S.jsxs)("div",{className:"contactPhoneContainer",children:[Object(S.jsxs)("h3",{children:[Object(S.jsx)(y.a,{icon:w.c})," phone"]}),Object(S.jsx)("span",{className:"contactLink",children:Object(S.jsx)(o.b,{to:{pathname:"tel:+4915154824288"},target:"_blank",children:Object(S.jsx)("h4",{children:" +49\xa0151\xa0548\xa0242\xa088 "})})})]})]}),Object(S.jsx)("div",{children:Object(S.jsxs)("h3",{children:[Object(S.jsx)(y.a,{icon:w.d})," or write me"]})}),e&&Object(S.jsxs)("p",{className:"errorOutput warningColor",children:[" ",e," "]}),Object(S.jsxs)("form",{onSubmit:function(e){return function(e,c){e.preventDefault();var n=e.target,a=n.email,i=n.subject,s=n.message,r={email:a.value,subject:i.value,message:s.value};t(x({request:r,history:c}))}(e,c)},children:[Object(S.jsx)("input",{type:"email",name:"email",placeholder:"email",className:"formInput"}),Object(S.jsx)("input",{type:"text",name:"subject",placeholder:"subject",className:"formInput"}),Object(S.jsx)("textarea",{name:"message",cols:35,rows:7,placeholder:"message",className:"formTextarea"}),Object(S.jsx)("input",{type:"submit",value:"SUBMIT",className:"formSubmit",formNoValidate:!0})]})]})]})},ee=function(){return Object(S.jsxs)("div",{className:"notFoundPageContainer logoImage",children:[Object(S.jsx)("header",{children:Object(S.jsxs)("div",{className:"headerText orangeBorder",children:[Object(S.jsx)("h1",{className:"textFat",children:" Error 404 "}),Object(S.jsx)("h2",{className:"textBig",children:" Page not found "})]})}),Object(S.jsx)("div",{className:"notFoundGetBackContainer",children:Object(S.jsx)(o.b,{to:"/",className:"notFoundGetBackLink textEnlighted",children:"GET BACK"})})]})},te=Object(r.g)((function(){return Object(S.jsxs)("div",{children:[Object(S.jsx)(T,{}),Object(S.jsx)(I,{}),Object(S.jsxs)(r.c,{children:[Object(S.jsx)(r.a,{exact:!0,path:"/",children:Object(S.jsx)(M,{})}),Object(S.jsx)(r.a,{path:"/about",children:Object(S.jsx)(E,{})}),Object(S.jsx)(r.a,{path:"/projects",children:Object(S.jsx)(R,{})}),Object(S.jsx)(r.a,{path:"/techstack",children:Object(S.jsx)(Z,{})}),Object(S.jsx)(r.a,{path:"/contact",children:Object(S.jsx)($,{})}),Object(S.jsx)(r.a,{component:ee})]}),Object(S.jsx)(P,{})]})})),ce=Object(h.a)({reducer:{creativeGallery:C}});c(83);s.a.render(Object(S.jsx)(a.a.StrictMode,{children:Object(S.jsx)(l.a,{store:ce,children:Object(S.jsx)(o.a,{children:Object(S.jsx)(te,{})})})}),document.querySelector("#root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.e4ae2b61.chunk.js.map