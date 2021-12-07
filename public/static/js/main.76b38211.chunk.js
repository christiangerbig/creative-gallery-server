(this["webpackJsonpcreative-gallery-client"]=this["webpackJsonpcreative-gallery-client"]||[]).push([[0],{50:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(14),i=n.n(s),r=n(5),o=(n(50),n(3)),l=n(17),j=function(){return Object(l.b)()},d=l.c,b=n(29),h=n.n(b),u=n(44),m=n(18),O=n(45),p=n.n(O),x="".concat("https://creativegallery.herokuapp.com","/api"),g=function(e){throw new Error(e)},v=Object(m.b)("creativeGallery/createRequest",function(){var e=Object(u.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.request,e.prev=1,e.next=4,p.a.post("".concat(x,"/request/create"),n);case 4:e.next=9;break;case 6:return e.prev=6,e.t0=e.catch(1),e.abrupt("return",g(e.t0.response.data.errorMessage));case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}()),f=Object(m.c)({name:"creativeGallery",initialState:{menuItem:null,isDesktop:!1,isMenuVisible:!1,isOpenMenu:!1,isCloseMenu:!1,isCreatingRequest:!1,errorMessage:null},reducers:{setIsDesktop:function(e,t){e.isDesktop=t.payload},setIsMenuVisible:function(e,t){e.isMenuVisible=t.payload},setIsOpenMenu:function(e,t){e.isOpenMenu=t.payload},setIsCloseMenu:function(e,t){e.isCloseMenu=t.payload},setMenuItem:function(e,t){e.menuItem=t.payload},setIsCreatingRequest:function(e,t){e.isCreatingRequest=t.payload},setErrorMessage:function(e,t){e.errorMessage=t.payload}},extraReducers:function(e){e.addCase(v.fulfilled,(function(e){e.isCreatingRequest=!1})),e.addCase(v.rejected,(function(e){e.isCreatingRequest=!1}))}}),k=f.actions,N=k.setIsDesktop,C=k.setIsMenuVisible,L=k.setIsOpenMenu,y=k.setIsCloseMenu,w=k.setMenuItem,S=(k.setIsCreatingRequest,k.setErrorMessage),T=f.reducer,I=n(12),M=n(13),P="https://www.dropbox.com/s/awzcnv5z45zi2qh/CV.pdf?dl=0",G=n(0),E=function(){return Object(G.jsxs)("div",{className:"logoSubContainer",children:[Object(G.jsx)("div",{className:"logoLetterOutlineC",children:Object(G.jsx)("div",{className:"logoLetterInlineC"})}),Object(G.jsx)("div",{className:"logoLetterOutlineG",children:Object(G.jsx)("div",{className:"logoLetterInlineG",children:Object(G.jsx)("div",{className:"logoLetterBoxG",children:Object(G.jsx)("div",{className:"logoLetterBoxG2",children:" "})})})})]})},B=function(){var e=d((function(e){return e.creativeGallery.isDesktop})),t=d((function(e){return e.creativeGallery.isMenuVisible})),n=d((function(e){return e.creativeGallery.menuItem})),a=j();Object(c.useEffect)((function(){var e=function(){var e=function(){window.innerWidth>1024?a(N(!0)):a(N(!1))};return e(),window.addEventListener("resize",e),e}();return function(){window.removeEventListener("resize",e)}}),[]);return Object(G.jsx)("div",{children:Object(G.jsx)("nav",{children:Object(G.jsxs)("div",{className:"navbarContainer navbarBorder",children:[Object(G.jsx)("div",{className:"logoContainer",children:Object(G.jsx)(o.b,{to:"/",className:"textstylePlain colorWhite",onClick:function(){a(w("home"))},children:Object(G.jsx)(E,{})})}),e&&Object(G.jsxs)("div",{className:"navigationContainer",children:[Object(G.jsxs)("ul",{className:"navigationSubContainerLeft",children:[Object(G.jsx)("li",{children:Object(G.jsx)(o.b,{to:"/about",className:"about"===n?"navigationLink navigationLinkActive":"navigationLink",onClick:function(){a(w("about"))},children:"ABOUT"})}),Object(G.jsx)("li",{children:Object(G.jsx)(o.b,{to:"/projects",className:"projects"===n?"navigationLink navigationLinkActive":"navigationLink",onClick:function(){a(w("projects"))},children:"PROJECTS"})}),Object(G.jsx)("li",{children:Object(G.jsx)(o.b,{to:"/techstack",className:"techStack"===n?"navigationLink navigationLinkActive":"navigationLink",onClick:function(){a(w("techStack"))},children:"TECHSTACK"})})]}),Object(G.jsxs)("ul",{className:"navigationSubContainerRight",children:[Object(G.jsx)("li",{children:Object(G.jsx)(o.b,{to:{pathname:P},target:"_blank",rel:"noreferrer noopener",className:"navigationLink",children:"RESUME"})}),Object(G.jsx)("li",{children:Object(G.jsx)(o.b,{to:"/contact",className:"contact"===n?"navigationLink navigationLinkActive":"navigationLink",onClick:function(){a(w("contact"))},children:"CONTACT"})})]})]}),Object(G.jsx)("div",{hidden:!(!e&&!t),children:Object(G.jsx)(I.a,{icon:M.a,onClick:function(){a(C(!0)),a(L(!0)),setTimeout((function(){a(L(!1))}),1e3)}})})]})})})},R=function(){var e=d((function(e){return e.creativeGallery.isDesktop})),t=d((function(e){return e.creativeGallery.isMenuVisible})),n=d((function(e){return e.creativeGallery.isOpenMenu})),c=d((function(e){return e.creativeGallery.isCloseMenu})),a=j(),s=function(){a(y(!0)),setTimeout((function(){a(y(!1)),a(C(!1))}),300)};return Object(G.jsxs)("div",{hidden:!(!e&&t),className:n?"menu fadeMenuIn":c?"menu fadeMenuOut":"menu",children:[Object(G.jsx)("div",{className:"menuCloseContainer",children:Object(G.jsx)(I.a,{icon:M.e,className:"menuClose colorWhite",onClick:s})}),Object(G.jsx)("div",{className:"menuContainer",children:Object(G.jsx)("div",{className:"menuSubContainer",children:Object(G.jsxs)("ul",{children:[Object(G.jsx)("li",{children:Object(G.jsx)(o.b,{to:"/about",className:n?"menuLink colorOrange menuLinkFadeInSpeed1":c?"menuLink colorOrange menuLinkFadeOutSpeed1":"menuLink colorOrange",onClick:s,children:"ABOUT"})}),Object(G.jsx)("li",{children:Object(G.jsx)(o.b,{to:"/projects",className:n?"menuLink colorOrange menuLinkFadeInSpeed2":c?"menuLink colorOrange menuLinkFadeOutSpeed2":"menuLink colorOrange",onClick:s,children:"PROJECTS"})}),Object(G.jsx)("li",{children:Object(G.jsx)(o.b,{to:"/techstack",className:n?"menuLink colorOrange menuLinkFadeInSpeed3":c?"menuLink colorOrange menuLinkFadeOutSpeed3":"menuLink colorOrange",onClick:s,children:"TECHSTACK"})}),Object(G.jsx)("li",{children:Object(G.jsx)(o.b,{to:{pathname:P},target:"_blank",rel:"noreferrer noopener",className:n?"menuLink colorOrange menuLinkFadeInSpeed4":c?"menuLink colorOrange menuLinkFadeOutSpeed4":"menuLink colorOrange",onClick:s,children:"RESUME"})}),Object(G.jsx)("li",{children:Object(G.jsx)(o.b,{to:"/contact",className:n?"menuLink colorOrange menuLinkFadeInSpeed5":c?"menuLink colorOrange menuLinkFadeOutSpeed5":"menuLink colorOrange",onClick:s,children:"CONTACT"})})]})})})]})},F=function(){return Object(G.jsx)("div",{children:Object(G.jsx)("footer",{children:Object(G.jsxs)("div",{className:"footerContainer",children:[Object(G.jsx)("span",{className:"copyrightText",children:" \xa9 2021 Christian Gerbig "}),Object(G.jsxs)("ul",{className:"footerSubContainer",children:[Object(G.jsx)("li",{children:Object(G.jsx)(o.b,{to:{pathname:"https://www.linkedin.com/in/christian-gerbig/"},target:"_blank",rel:"noreferrer noopener",className:"footerLink",children:Object(G.jsx)("i",{className:"fab fa-linkedin colorWhite"})})}),Object(G.jsx)("li",{children:Object(G.jsx)(o.b,{to:{pathname:"https://github.com/christiangerbig/"},target:"_blank",rel:"noreferrer noopener",className:"footerLink",children:Object(G.jsx)("i",{className:"fab fa-github textColorWhite"})})})]})]})})})},D=n(11),H=function(){return Object(G.jsx)("div",{className:"homeLogoContainer blurrIn",children:Object(G.jsxs)("div",{className:"homeLogoSubContainer",children:[Object(G.jsx)("div",{className:"homeLogoLetterOutlineC",children:Object(G.jsx)("div",{className:"homeLogoLetterInlineC"})}),Object(G.jsx)("div",{className:"homeLogoLetterOutlineG",children:Object(G.jsx)("div",{className:"homeLogoLetterInlineG",children:Object(G.jsx)("div",{className:"homeLogoLetterBoxG",children:Object(G.jsx)("div",{className:"homeLogoLetterBoxG2"})})})})]})})},A=function(){return Object(c.useEffect)((function(){D.animateScroll.scrollToTop()}),[]),Object(G.jsxs)("div",{className:"homePageContainer",children:[Object(G.jsx)(H,{}),Object(G.jsxs)("div",{className:"homeIntroText",children:[Object(G.jsx)("h1",{className:"textFat",children:" Hi, I'm Christian "}),Object(G.jsx)("h2",{className:"textBig",children:" A passionate Web Developer "})]})]})},q=function(){var e=j();return Object(c.useEffect)((function(){D.animateScroll.scrollToTop()}),[]),Object(G.jsxs)("div",{className:"aboutPageContainer",children:[Object(G.jsx)("header",{className:"headline",children:Object(G.jsxs)("div",{className:"headerText greenBorder",children:[Object(G.jsx)("h1",{className:"textFat",children:" There is only one way "}),Object(G.jsx)("h2",{className:"textBig",children:" Straight forward "})]})}),Object(G.jsxs)("div",{className:"textContainer",children:[Object(G.jsx)("div",{className:"textColumContainer",children:Object(G.jsxs)("article",{children:[Object(G.jsx)("header",{children:Object(G.jsx)("h3",{children:" Hi, "})}),Object(G.jsxs)("p",{children:["I'm Christian Gerbig. I'm a Web Developer focused on Frontend and Backend technologies. My homebase is Hamburg in Germany. ",Object(G.jsx)("br",{}),Object(G.jsx)("br",{})," I believe in the",Object(G.jsxs)("span",{className:"colorOrange",children:[" ","positive power of communication"," "]}),"with a trust in",Object(G.jsx)("span",{className:"colorOrange",children:" cooperative team working "}),"making an asset from sharing different points of views. ",Object(G.jsx)("br",{}),Object(G.jsx)("br",{})," I like to use every aspect of new technology available to reach the goals and love to code",Object(G.jsx)("span",{className:"colorOrange",children:" optimized solutions "})," suiting individual requirements with respect to time, budget and target.",Object(G.jsx)("br",{})," ",Object(G.jsx)("br",{}),' My motto: "Learning things, improving (them) and reach the goals".']})]})}),Object(G.jsx)("div",{className:"textColumContainer",children:Object(G.jsxs)("article",{children:[Object(G.jsx)("header",{children:Object(G.jsx)("h3",{children:" How it began "})}),Object(G.jsxs)("p",{children:["I started to learn the fundamentals of",Object(G.jsx)("span",{className:"colorOrange",children:" Web Development "})," by myself and in the Full Stack Web Development Bootcamp at Ironhack. ",Object(G.jsx)("br",{}),Object(G.jsx)("br",{})," Meanwhile I improved my skills to write",Object(G.jsx)("span",{className:"colorOrange",children:" Clean Code "})," and learned in several Udemy courses to apply the",Object(G.jsx)("span",{className:"colorOrange",children:" Redux Toolkit "})," and",Object(G.jsx)("span",{className:"colorOrange",children:" TypeScript "})," together with",Object(G.jsx)("span",{className:"colorOrange",children:" React "})," in my projects."," ",Object(G.jsx)("br",{}),Object(G.jsx)("br",{})," I would like to become part of a team where I can apply, develop and share my skills. ",Object(G.jsx)("br",{})," ",Object(G.jsx)("br",{}),Object(G.jsx)("span",{className:"aboutContactLink",onClick:function(){return e(w("contact"))},children:Object(G.jsx)(o.b,{to:{pathname:"/contact"},children:" Let's get in touch. "})})]})]})})]})]})},V=[{projectName:"JUNGLE SWAP",projectPicturePath:n.p+"static/media/jungle-swap.04645ba1.png",projectVideoPath:"https://bliskcloudstorage.blob.core.windows.net/videos/2c9bdc9d-6b6f-4823-844c-2a2cd5c36a86/15-May-2021-13-45-637566759460450173.mp4",projectDescription:" Share your plant offshoots and make money or swap them for another plant. Shop and give a plant a new home. <br /> <br /> <br />",deployedPath:"https://jungleswap.herokuapp.com/",gitHubClientPath:"https://github.com/christiangerbig/jungle-swap-client",gitHubServerPath:"https://github.com/christiangerbig/jungle-swap-server"},{projectName:"TRACKERTOOLS",projectPicturePath:n.p+"static/media/trackertools.cdf33462.png",projectVideoPath:"https://bliskcloudstorage.blob.core.windows.net/videos/2c9bdc9d-6b6f-4823-844c-2a2cd5c36a86/15-May-2021-13-35-637566753722531829.mp4",projectDescription:"Four powerful tools to make working with the music editor Protracker and its modules more comfortable. <br /> <br /> <br />",deployedPath:"https://trackertools.herokuapp.com/",gitHubClientPath:"https://github.com/christiangerbig/Trackertools",gitHubServerPath:""},{projectName:"LETTER SHOOTER",projectPicturePath:n.p+"static/media/letter-shooter.a0667b69.png",projectVideoPath:"https://bliskcloudstorage.blob.core.windows.net/videos/2c9bdc9d-6b6f-4823-844c-2a2cd5c36a86/15-May-2021-14-10-637566774755686276.mp4",projectDescription:" A coordination and strategy game with the goal to hit the missing letters with precise shots. <br /> <br /> <br />",deployedPath:"https://christiangerbig.github.io/letter-shooter/",gitHubClientPath:"https://github.com/christiangerbig/letter-shooter",gitHubServerPath:""}],W=function(e){var t=e.projectItem,n=Object(c.useRef)(null),a=t.projectName,s=t.projectPicturePath,i=t.projectVideoPath,r=t.projectDescription,l=t.deployedPath,j=t.gitHubClientPath,d=t.gitHubServerPath;return Object(c.useEffect)((function(){!function(e){n.current.innerHTML=e}(r)}),[]),Object(G.jsxs)("div",{className:"projectDetailsContainer",children:[Object(G.jsx)("video",{width:"320",height:"200",muted:!0,controls:!0,poster:s,src:i}),Object(G.jsx)("div",{className:"projectDescription",children:Object(G.jsxs)("article",{children:[Object(G.jsx)("header",{children:Object(G.jsxs)("h2",{children:[" ",a," "]})}),Object(G.jsx)("p",{ref:n})]})}),Object(G.jsxs)("div",{className:"projectLinksContainer",children:[Object(G.jsx)("div",{children:Object(G.jsx)(o.b,{to:{pathname:l},target:"_blank",className:"projectTryItLink",children:"TRY IT"})}),Object(G.jsx)("div",{children:Object(G.jsx)(o.b,{to:{pathname:j},target:"_blank",className:"projectGitHubLink",children:"GIT HUB"})}),Object(G.jsx)("div",{hidden:!d,children:Object(G.jsx)(o.b,{to:{pathname:d},target:"_blank",className:"projectGitHubLink",children:"GIT HUB 2"})})]})]})},_=function(){return Object(c.useEffect)((function(){D.animateScroll.scrollToTop()}),[]),Object(G.jsxs)("div",{className:"projectsPageContainer",children:[Object(G.jsx)("header",{className:"headline",children:Object(G.jsxs)("div",{className:"headerText orangeBorder",children:[Object(G.jsx)("h1",{className:"textFat",children:" My Web Developer projects "}),Object(G.jsx)("h2",{className:"textBig",children:" I was working on "})]})}),Object(G.jsx)("div",{className:"projectsContainer",children:V.map((function(e,t){return Object(G.jsx)(W,{projectItem:e},t)}))})]})},U=n.p+"static/media/React-Logo.ae626225.svg",J=n.p+"static/media/Redux-Logo.a9567540.svg",z=n.p+"static/media/JavaScript(ES6)-Logo.a309520a.svg",K=n.p+"static/media/TypeScript-Logo.17d5e87e.svg",Y=n.p+"static/media/Sass-Logo.8351205a.svg",Q=n.p+"static/media/Cloudinary-Logo.df0c0e93.svg",X=n.p+"static/media/Bootstrap-Logo.527d0fc0.svg",Z=n.p+"static/media/NPM-Logo.5620a716.svg",$=n.p+"static/media/MongoDB-Logo.153b7b44.svg",ee=n.p+"static/media/NodeJS-Logo.5a3a9ca2.svg",te=n.p+"static/media/GitHub-Logo.11619ac0.svg",ne=n.p+"static/media/Visual-Studio-Code-Logo.f57bbf46.svg",ce=function(){var e=[U,J,ee,z,K,Y,X,$,Q,Z,te,ne];return Object(c.useEffect)((function(){D.animateScroll.scrollToTop()}),[]),Object(G.jsxs)("div",{className:"techStackPageContainer",children:[Object(G.jsx)("header",{className:"headline",children:Object(G.jsxs)("div",{className:"headerText violetBorder",children:[Object(G.jsx)("h1",{className:"textFat",children:" The tech stack "}),Object(G.jsx)("h2",{className:"textBig",children:" I use in my projects "})]})}),Object(G.jsx)("div",{className:"techStackLogosContainer",children:e.map((function(e,t){return Object(G.jsx)("img",{src:e,alt:"firm logo"},t)}))})]})},ae=function(){var e=d((function(e){return e.creativeGallery.isCreatingRequest})),t=d((function(e){return e.creativeGallery.errorMessage})),n=j(),a=Object(r.f)();Object(c.useEffect)((function(){n(S(null)),D.animateScroll.scrollToTop()}),[]);var s=function(e){e.preventDefault();var t=e.target,c=t.email,s=t.subject,i=t.message,r={email:c.value,subject:s.value,message:i.value};n(v({request:r})).unwrap().then((function(){n(w("home")),a.push("/")})).catch((function(e){n(S(e.message))}))};return Object(G.jsxs)("div",{className:"contactPageContainer",children:[Object(G.jsx)("header",{className:"headline",children:Object(G.jsxs)("div",{className:"headerText blueBorder",children:[Object(G.jsx)("h1",{className:"textFat",children:" Don't hesitate "}),Object(G.jsx)("h2",{className:"textBig",children:" to contact me "})]})}),Object(G.jsxs)("div",{className:"contactContainer",children:[Object(G.jsx)("h1",{children:" Christian Gerbig "}),Object(G.jsx)("h2",{children:" Web Developer "}),Object(G.jsxs)("div",{className:"contactWaysContainer",children:[Object(G.jsxs)("div",{className:"contactEmailContainer",children:[Object(G.jsxs)("h3",{children:[Object(G.jsx)(I.a,{icon:M.b})," e-mail"]}),Object(G.jsx)("span",{className:"contactLink",children:Object(G.jsx)(o.b,{to:{pathname:"mailto:chr_gerbig@web.de"},target:"_blank",children:Object(G.jsx)("h4",{children:" chr_gerbig(at)web.de "})})})]}),Object(G.jsxs)("div",{className:"contactPhoneContainer",children:[Object(G.jsxs)("h3",{children:[Object(G.jsx)(I.a,{icon:M.c})," phone"]}),Object(G.jsx)("span",{className:"contactLink",children:Object(G.jsx)(o.b,{to:{pathname:"tel:+4915154824288"},target:"_blank",children:Object(G.jsx)("h4",{children:" +49\xa0151\xa0548\xa0242\xa088 "})})})]})]}),Object(G.jsx)("div",{children:Object(G.jsxs)("h3",{children:[Object(G.jsx)(I.a,{icon:M.d})," or write me"]})}),Object(G.jsxs)("p",{hidden:!t,className:"errorOutput warningColor",children:[" ",t," "]}),Object(G.jsxs)("form",{onSubmit:function(e){s(e)},children:[Object(G.jsx)("input",{type:"email",name:"email",placeholder:"email",className:"formInput"}),Object(G.jsx)("input",{type:"text",name:"subject",placeholder:"subject",className:"formInput"}),Object(G.jsx)("textarea",{name:"message",placeholder:"message",cols:35,rows:7,className:"formTextarea"}),Object(G.jsx)("input",{type:"submit",value:"SUBMIT",disabled:!!e,formNoValidate:!0,className:"formSubmit"})]})]})]})},se=function(){return Object(G.jsxs)("div",{className:"notFoundPageContainer logoImage",children:[Object(G.jsx)("header",{className:"headline",children:Object(G.jsxs)("div",{className:"headerText orangeBorder",children:[Object(G.jsx)("h1",{className:"textFat",children:" Error 404 "}),Object(G.jsx)("h2",{className:"textBig",children:" Page not found "})]})}),Object(G.jsx)("div",{className:"notFoundGetBackContainer",children:Object(G.jsx)(o.b,{to:"/",className:"notFoundGetBackLink textEnlighted",children:"GET BACK"})})]})},ie=Object(r.g)((function(){return Object(G.jsxs)("div",{children:[Object(G.jsx)(B,{}),Object(G.jsx)(R,{}),Object(G.jsxs)(r.c,{children:[Object(G.jsx)(r.a,{exact:!0,path:"/",children:Object(G.jsx)(A,{})}),Object(G.jsx)(r.a,{path:"/about",children:Object(G.jsx)(q,{})}),Object(G.jsx)(r.a,{path:"/projects",children:Object(G.jsx)(_,{})}),Object(G.jsx)(r.a,{path:"/techstack",children:Object(G.jsx)(ce,{})}),Object(G.jsx)(r.a,{path:"/contact",children:Object(G.jsx)(ae,{})}),Object(G.jsx)(r.a,{component:se})]}),Object(G.jsx)(F,{})]})})),re=Object(m.a)({reducer:{creativeGallery:T}});n(83);i.a.render(Object(G.jsx)(a.a.StrictMode,{children:Object(G.jsx)(l.a,{store:re,children:Object(G.jsx)(o.a,{children:Object(G.jsx)(ie,{})})})}),document.querySelector("#root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.76b38211.chunk.js.map