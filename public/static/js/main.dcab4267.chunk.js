(this["webpackJsonpcreative-gallery-client"]=this["webpackJsonpcreative-gallery-client"]||[]).push([[0],{50:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(14),r=n.n(i),s=n(5),o=(n(50),n(3)),l=n(17),j=function(){return Object(l.b)()},d=l.c,b=n(29),h=n.n(b),u=n(44),m=n(18),p=n(45),O=n.n(p),x="".concat("https://creativegallery.herokuapp.com","/api"),g=function(e){throw new Error(e)},v=Object(m.b)("creativeGallery/createRequest",function(){var e=Object(u.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.request,e.prev=1,e.next=4,O.a.post("".concat(x,"/request/create"),n);case 4:e.next=9;break;case 6:return e.prev=6,e.t0=e.catch(1),e.abrupt("return",g(e.t0.response.data.errorMessage));case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}()),f=Object(m.c)({name:"creativeGallery",initialState:{menuItem:null,isDesktop:!1,isMenuVisible:!1,isOpenMenu:!1,isCloseMenu:!1,isCreatingRequest:!1,errorMessage:null},reducers:{setIsDesktop:function(e,t){e.isDesktop=t.payload},setIsMenuVisible:function(e,t){e.isMenuVisible=t.payload},setIsOpenMenu:function(e,t){e.isOpenMenu=t.payload},setIsCloseMenu:function(e,t){e.isCloseMenu=t.payload},setMenuItem:function(e,t){e.menuItem=t.payload},setIsCreatingRequest:function(e,t){e.isCreatingRequest=t.payload},setErrorMessage:function(e,t){e.errorMessage=t.payload}},extraReducers:function(e){e.addCase(v.fulfilled,(function(e){e.isCreatingRequest=!1})),e.addCase(v.rejected,(function(e){e.isCreatingRequest=!1}))}}),k=f.actions,C=k.setIsDesktop,N=k.setIsMenuVisible,L=k.setIsOpenMenu,y=k.setIsCloseMenu,w=k.setMenuItem,S=(k.setIsCreatingRequest,k.setErrorMessage),T=f.reducer,I=n(12),M=n(13),P=n(0),G=function(){return Object(P.jsxs)("div",{className:"logoSubContainer",children:[Object(P.jsx)("div",{className:"logoLetterOutlineC",children:Object(P.jsx)("div",{className:"logoLetterInlineC"})}),Object(P.jsx)("div",{className:"logoLetterOutlineG",children:Object(P.jsx)("div",{className:"logoLetterInlineG",children:Object(P.jsx)("div",{className:"logoLetterBoxG",children:Object(P.jsx)("div",{className:"logoLetterBoxG2",children:" "})})})})]})},E="https://www.dropbox.com/s/awzcnv5z45zi2qh/CV.pdf?dl=0",R=function(){var e=d((function(e){return e.creativeGallery.menuItem})),t=j();return Object(P.jsxs)("div",{className:"navigationContainer",children:[Object(P.jsxs)("ul",{className:"navigationSubContainerLeft",children:[Object(P.jsx)("li",{children:Object(P.jsx)(o.b,{to:"/about",className:"about"===e?"navigationLink navigationLinkActive":"navigationLink",onClick:function(){t(w("about"))},children:"ABOUT"})}),Object(P.jsx)("li",{children:Object(P.jsx)(o.b,{to:"/projects",className:"projects"===e?"navigationLink navigationLinkActive":"navigationLink",onClick:function(){t(w("projects"))},children:"PROJECTS"})}),Object(P.jsx)("li",{children:Object(P.jsx)(o.b,{to:"/techstack",className:"techStack"===e?"navigationLink navigationLinkActive":"navigationLink",onClick:function(){t(w("techStack"))},children:"TECHSTACK"})})]}),Object(P.jsxs)("ul",{className:"navigationSubContainerRight",children:[Object(P.jsx)("li",{children:Object(P.jsx)(o.b,{to:{pathname:E},target:"_blank",rel:"noreferrer noopener",className:"navigationLink",children:"RESUME"})}),Object(P.jsx)("li",{children:Object(P.jsx)(o.b,{to:"/contact",className:"contact"===e?"navigationLink navigationLinkActive":"navigationLink",onClick:function(){t(w("contact"))},children:"CONTACT"})})]})]})},B=function(){var e=d((function(e){return e.creativeGallery.isDesktop})),t=d((function(e){return e.creativeGallery.isMenuVisible})),n=j();Object(c.useEffect)((function(){var e=function(){var e=function(){window.innerWidth>1024?n(C(!0)):n(C(!1))};return e(),window.addEventListener("resize",e),e}();return function(){window.removeEventListener("resize",e)}}),[]);return Object(P.jsx)("div",{children:Object(P.jsx)("nav",{children:Object(P.jsxs)("div",{className:"navbarContainer navbarBorder",children:[Object(P.jsx)("div",{className:"logoContainer",children:Object(P.jsx)(o.b,{to:"/",className:"textstylePlain colorWhite",onClick:function(){n(w("home"))},children:Object(P.jsx)(G,{})})}),e&&Object(P.jsx)(R,{}),Object(P.jsx)("div",{hidden:!(!e&&!t),children:Object(P.jsx)(I.a,{icon:M.a,onClick:function(){n(N(!0)),n(L(!0)),setTimeout((function(){n(L(!1))}),1e3)}})})]})})})},D=function(){var e=d((function(e){return e.creativeGallery.isDesktop})),t=d((function(e){return e.creativeGallery.isMenuVisible})),n=d((function(e){return e.creativeGallery.isOpenMenu})),c=d((function(e){return e.creativeGallery.isCloseMenu})),a=j(),i=function(){a(y(!0)),setTimeout((function(){a(y(!1)),a(N(!1))}),300)};return Object(P.jsxs)("div",{hidden:!(!e&&t),className:n?"menu fadeMenuIn":c?"menu fadeMenuOut":"menu",children:[Object(P.jsx)("div",{className:"menuCloseContainer",children:Object(P.jsx)(I.a,{icon:M.e,className:"menuClose colorWhite",onClick:i})}),Object(P.jsx)("div",{className:"menuContainer",children:Object(P.jsx)("div",{className:"menuSubContainer",children:Object(P.jsxs)("ul",{children:[Object(P.jsx)("li",{children:Object(P.jsx)(o.b,{to:"/about",className:n?"menuLink colorOrange menuLinkFadeInSpeed1":c?"menuLink colorOrange menuLinkFadeOutSpeed1":"menuLink colorOrange",onClick:i,children:"ABOUT"})}),Object(P.jsx)("li",{children:Object(P.jsx)(o.b,{to:"/projects",className:n?"menuLink colorOrange menuLinkFadeInSpeed2":c?"menuLink colorOrange menuLinkFadeOutSpeed2":"menuLink colorOrange",onClick:i,children:"PROJECTS"})}),Object(P.jsx)("li",{children:Object(P.jsx)(o.b,{to:"/techstack",className:n?"menuLink colorOrange menuLinkFadeInSpeed3":c?"menuLink colorOrange menuLinkFadeOutSpeed3":"menuLink colorOrange",onClick:i,children:"TECHSTACK"})}),Object(P.jsx)("li",{children:Object(P.jsx)(o.b,{to:{pathname:E},target:"_blank",rel:"noreferrer noopener",className:n?"menuLink colorOrange menuLinkFadeInSpeed4":c?"menuLink colorOrange menuLinkFadeOutSpeed4":"menuLink colorOrange",onClick:i,children:"RESUME"})}),Object(P.jsx)("li",{children:Object(P.jsx)(o.b,{to:"/contact",className:n?"menuLink colorOrange menuLinkFadeInSpeed5":c?"menuLink colorOrange menuLinkFadeOutSpeed5":"menuLink colorOrange",onClick:i,children:"CONTACT"})})]})})})]})},H=function(){return Object(P.jsx)("div",{children:Object(P.jsx)("footer",{children:Object(P.jsxs)("div",{className:"footerContainer",children:[Object(P.jsx)("span",{className:"copyrightText",children:" \xa9 2021 Christian Gerbig "}),Object(P.jsxs)("ul",{className:"footerSubContainer",children:[Object(P.jsx)("li",{children:Object(P.jsx)(o.b,{to:{pathname:"https://www.linkedin.com/in/christian-gerbig/"},target:"_blank",rel:"noreferrer noopener",className:"footerLink",children:Object(P.jsx)("i",{className:"fab fa-linkedin colorWhite"})})}),Object(P.jsx)("li",{children:Object(P.jsx)(o.b,{to:{pathname:"https://github.com/christiangerbig/"},target:"_blank",rel:"noreferrer noopener",className:"footerLink",children:Object(P.jsx)("i",{className:"fab fa-github textColorWhite"})})})]})]})})})},F=n(11),A=function(){return Object(P.jsx)("div",{className:"homeLogoContainer blurrIn",children:Object(P.jsxs)("div",{className:"homeLogoSubContainer",children:[Object(P.jsx)("div",{className:"homeLogoLetterOutlineC",children:Object(P.jsx)("div",{className:"homeLogoLetterInlineC"})}),Object(P.jsx)("div",{className:"homeLogoLetterOutlineG",children:Object(P.jsx)("div",{className:"homeLogoLetterInlineG",children:Object(P.jsx)("div",{className:"homeLogoLetterBoxG",children:Object(P.jsx)("div",{className:"homeLogoLetterBoxG2"})})})})]})})},q=function(e){var t=e.text,n=e.borderColor;return Object(P.jsxs)("div",{className:"green"===n?"headerText greenBorder":"orange"===n?"headerText orangeBorder":"violet"===n?"headerText violetBorder":"blue"===n?"headerText blueBorder":"headerText",children:[Object(P.jsxs)("h1",{className:"textFat",children:[" ",t[0]," "]}),Object(P.jsxs)("h2",{className:"textBig",children:[" ",t[1]," "]})]})},V=function(){return Object(c.useEffect)((function(){F.animateScroll.scrollToTop()}),[]),Object(P.jsxs)("div",{className:"homePageContainer",children:[Object(P.jsx)(A,{}),Object(P.jsx)(q,{text:["Hi, I'm Christian","A passionate Web Developer"],borderColor:""})]})},W=function(){var e=j();return Object(c.useEffect)((function(){F.animateScroll.scrollToTop()}),[]),Object(P.jsxs)("div",{className:"aboutPageContainer",children:[Object(P.jsx)("header",{className:"headline",children:Object(P.jsx)(q,{text:["There is only one way","Straight forward"],borderColor:"green"})}),Object(P.jsxs)("div",{className:"textContainer",children:[Object(P.jsx)("div",{className:"textColumContainer",children:Object(P.jsxs)("article",{children:[Object(P.jsx)("header",{children:Object(P.jsx)("h3",{children:" Hi, "})}),Object(P.jsx)("p",{children:"I'm Christian Gerbig. I'm a Web Developer focused on Frontend and Backend technologies. My homebase is Hamburg in Germany."}),Object(P.jsxs)("p",{children:["I believe in the",Object(P.jsxs)("span",{className:"colorOrange",children:[" ","positive power of communication"," "]}),"with a trust in",Object(P.jsx)("span",{className:"colorOrange",children:" cooperative team working "}),"making an asset from sharing different points of views."]}),Object(P.jsxs)("p",{children:["I like to use every aspect of new technology available to reach the goals and love to code",Object(P.jsx)("span",{className:"colorOrange",children:" optimized solutions "})," suiting individual requirements with respect to time, budget and target."]}),Object(P.jsx)("p",{children:'My motto: "Learning things, improving (them) and reach the goals".'})]})}),Object(P.jsx)("div",{className:"textColumContainer",children:Object(P.jsxs)("article",{children:[Object(P.jsx)("header",{children:Object(P.jsx)("h3",{children:" How it began "})}),Object(P.jsxs)("p",{children:["I started to learn the fundamentals of",Object(P.jsx)("span",{className:"colorOrange",children:" Web Development "})," by myself and in the Full Stack Web Development Bootcamp at Ironhack."]}),Object(P.jsxs)("p",{children:["Meanwhile I improved my skills to write",Object(P.jsx)("span",{className:"colorOrange",children:" Clean Code "})," and learned in several Udemy courses to apply the",Object(P.jsx)("span",{className:"colorOrange",children:" Redux Toolkit "})," and",Object(P.jsx)("span",{className:"colorOrange",children:" TypeScript "})," together with",Object(P.jsx)("span",{className:"colorOrange",children:" React "})," in my projects."," "]}),Object(P.jsx)("p",{children:"I would like to become part of a team where I can apply, develop and share my skills."}),Object(P.jsx)("p",{children:Object(P.jsx)("span",{className:"aboutContactLink",onClick:function(){return e(w("contact"))},children:Object(P.jsx)(o.b,{to:{pathname:"/contact"},children:" Let's get in touch. "})})})]})})]})]})},_=[{projectName:"JUNGLE SWAP",projectPicturePath:n.p+"static/media/jungle-swap.04645ba1.png",projectVideoPath:"https://bliskcloudstorage.blob.core.windows.net/videos/2c9bdc9d-6b6f-4823-844c-2a2cd5c36a86/15-May-2021-13-45-637566759460450173.mp4",projectDescription:"<p> Share your plant offshoots and make money or swap them for another plant. Shop and give a plant a new home. </p>",deployedPath:"https://jungleswap.herokuapp.com/",gitHubClientPath:"https://github.com/christiangerbig/jungle-swap-client",gitHubServerPath:"https://github.com/christiangerbig/jungle-swap-server"},{projectName:"TRACKERTOOLS",projectPicturePath:n.p+"static/media/trackertools.cdf33462.png",projectVideoPath:"https://bliskcloudstorage.blob.core.windows.net/videos/2c9bdc9d-6b6f-4823-844c-2a2cd5c36a86/15-May-2021-13-35-637566753722531829.mp4",projectDescription:"<p> Four powerful tools to make working with the music editor Protracker and its modules more comfortable. </p>",deployedPath:"https://trackertools.herokuapp.com/",gitHubClientPath:"https://github.com/christiangerbig/Trackertools",gitHubServerPath:""},{projectName:"LETTER SHOOTER",projectPicturePath:n.p+"static/media/letter-shooter.a0667b69.png",projectVideoPath:"https://bliskcloudstorage.blob.core.windows.net/videos/2c9bdc9d-6b6f-4823-844c-2a2cd5c36a86/15-May-2021-14-10-637566774755686276.mp4",projectDescription:"<p> A coordination and strategy game with the goal to hit the missing letters with precise shots. </p>",deployedPath:"https://christiangerbig.github.io/letter-shooter/",gitHubClientPath:"https://github.com/christiangerbig/letter-shooter",gitHubServerPath:""}],U=function(e){var t=e.projectItem,n=Object(c.useRef)(null),a=t.projectName,i=t.projectPicturePath,r=t.projectVideoPath,s=t.projectDescription,l=t.deployedPath,j=t.gitHubClientPath,d=t.gitHubServerPath;return Object(c.useEffect)((function(){!function(e){n.current.innerHTML=e}(s)}),[]),Object(P.jsxs)("div",{className:"projectDetailsContainer",children:[Object(P.jsx)("video",{width:"320",height:"200",muted:!0,controls:!0,poster:i,src:r}),Object(P.jsx)("div",{className:"projectDescription",children:Object(P.jsxs)("article",{children:[Object(P.jsx)("header",{children:Object(P.jsxs)("h2",{children:[" ",a," "]})}),Object(P.jsx)("div",{ref:n,className:"descriptionContainer"})]})}),Object(P.jsxs)("div",{className:"projectLinksContainer",children:[Object(P.jsx)("div",{children:Object(P.jsx)(o.b,{to:{pathname:l},target:"_blank",className:"projectTryItLink",children:"TRY IT"})}),Object(P.jsx)("div",{children:Object(P.jsx)(o.b,{to:{pathname:j},target:"_blank",className:"projectGitHubLink",children:"GIT HUB"})}),Object(P.jsx)("div",{hidden:!d,children:Object(P.jsx)(o.b,{to:{pathname:d},target:"_blank",className:"projectGitHubLink",children:"GIT HUB 2"})})]})]})},J=function(){return Object(c.useEffect)((function(){F.animateScroll.scrollToTop()}),[]),Object(P.jsxs)("div",{className:"projectsPageContainer",children:[Object(P.jsx)("header",{className:"headline",children:Object(P.jsx)(q,{text:["My Web Developer projects","I was working on"],borderColor:"orange"})}),Object(P.jsx)("div",{className:"projectsContainer",children:_.map((function(e,t){return Object(P.jsx)(U,{projectItem:e},t)}))})]})},z=n.p+"static/media/React-Logo.ae626225.svg",K=n.p+"static/media/Redux-Logo.a9567540.svg",Y=n.p+"static/media/JavaScript(ES6)-Logo.a309520a.svg",Q=n.p+"static/media/TypeScript-Logo.17d5e87e.svg",X=n.p+"static/media/Sass-Logo.8351205a.svg",Z=n.p+"static/media/Cloudinary-Logo.df0c0e93.svg",$=n.p+"static/media/Bootstrap-Logo.527d0fc0.svg",ee=n.p+"static/media/NPM-Logo.5620a716.svg",te=n.p+"static/media/MongoDB-Logo.153b7b44.svg",ne=n.p+"static/media/NodeJS-Logo.5a3a9ca2.svg",ce=n.p+"static/media/GitHub-Logo.11619ac0.svg",ae=n.p+"static/media/Visual-Studio-Code-Logo.f57bbf46.svg",ie=function(){var e=[z,K,ne,Y,Q,X,$,te,Z,ee,ce,ae];return Object(c.useEffect)((function(){F.animateScroll.scrollToTop()}),[]),Object(P.jsxs)("div",{className:"techStackPageContainer",children:[Object(P.jsx)("header",{className:"headline",children:Object(P.jsx)(q,{text:["The tech stack","I use in my projects"],borderColor:"violet"})}),Object(P.jsx)("div",{className:"techStackLogosContainer",children:e.map((function(e,t){return Object(P.jsx)("img",{src:e,alt:"firm logo"},t)}))})]})},re=function(){var e=d((function(e){return e.creativeGallery.isCreatingRequest})),t=d((function(e){return e.creativeGallery.errorMessage})),n=j(),a=Object(s.f)();Object(c.useEffect)((function(){n(S(null)),F.animateScroll.scrollToTop()}),[]);var i=function(e){e.preventDefault();var t=e.target,c=t.email,i=t.subject,r=t.message,s={email:c.value,subject:i.value,message:r.value};n(v({request:s})).unwrap().then((function(){n(w("home")),a.push("/")})).catch((function(e){n(S(e.message))}))};return Object(P.jsxs)("div",{className:"contactPageContainer",children:[Object(P.jsx)("header",{className:"headline",children:Object(P.jsx)(q,{text:["Don't hesitate","to contact me"],borderColor:"blue"})}),Object(P.jsxs)("div",{className:"contactContainer",children:[Object(P.jsx)("h1",{children:" Christian Gerbig "}),Object(P.jsx)("h2",{children:" Web Developer "}),Object(P.jsxs)("div",{className:"contactWaysContainer",children:[Object(P.jsxs)("div",{className:"contactEmailContainer",children:[Object(P.jsxs)("h3",{children:[Object(P.jsx)(I.a,{icon:M.b})," e-mail"]}),Object(P.jsx)("span",{className:"contactLink",children:Object(P.jsx)(o.b,{to:{pathname:"mailto:chr_gerbig@web.de"},target:"_blank",children:Object(P.jsx)("h4",{children:" chr_gerbig(at)web.de "})})})]}),Object(P.jsxs)("div",{className:"contactPhoneContainer",children:[Object(P.jsxs)("h3",{children:[Object(P.jsx)(I.a,{icon:M.c})," phone"]}),Object(P.jsx)("span",{className:"contactLink",children:Object(P.jsx)(o.b,{to:{pathname:"tel:+4915154824288"},target:"_blank",children:Object(P.jsx)("h4",{children:" +49\xa0151\xa0548\xa0242\xa088 "})})})]})]}),Object(P.jsx)("div",{children:Object(P.jsxs)("h3",{children:[Object(P.jsx)(I.a,{icon:M.d})," or write me"]})}),Object(P.jsxs)("p",{hidden:!t,className:"errorOutput warningColor",children:[" ",t," "]}),Object(P.jsxs)("form",{onSubmit:function(e){i(e)},children:[Object(P.jsx)("input",{type:"email",name:"email",placeholder:"email",className:"formInput"}),Object(P.jsx)("input",{type:"text",name:"subject",placeholder:"subject",className:"formInput"}),Object(P.jsx)("textarea",{name:"message",placeholder:"message",cols:35,rows:7,className:"formTextarea"}),Object(P.jsx)("input",{type:"submit",value:"SUBMIT",disabled:!!e,formNoValidate:!0,className:"formSubmit"})]})]})]})},se=function(){return Object(P.jsxs)("div",{className:"notFoundPageContainer logoImage",children:[Object(P.jsx)("header",{className:"headline",children:Object(P.jsx)(q,{text:["Error 404","Page not found"],borderColor:"orange"})}),Object(P.jsx)("div",{className:"notFoundGetBackContainer",children:Object(P.jsx)(o.b,{to:"/",className:"notFoundGetBackLink textEnlighted",children:"GET BACK"})})]})},oe=Object(s.g)((function(){return Object(P.jsxs)("div",{children:[Object(P.jsx)(B,{}),Object(P.jsx)(D,{}),Object(P.jsxs)(s.c,{children:[Object(P.jsx)(s.a,{exact:!0,path:"/",children:Object(P.jsx)(V,{})}),Object(P.jsx)(s.a,{path:"/about",children:Object(P.jsx)(W,{})}),Object(P.jsx)(s.a,{path:"/projects",children:Object(P.jsx)(J,{})}),Object(P.jsx)(s.a,{path:"/techstack",children:Object(P.jsx)(ie,{})}),Object(P.jsx)(s.a,{path:"/contact",children:Object(P.jsx)(re,{})}),Object(P.jsx)(s.a,{component:se})]}),Object(P.jsx)(H,{})]})})),le=Object(m.a)({reducer:{creativeGallery:T}});n(83);r.a.render(Object(P.jsx)(a.a.StrictMode,{children:Object(P.jsx)(l.a,{store:le,children:Object(P.jsx)(o.a,{children:Object(P.jsx)(oe,{})})})}),document.querySelector("#root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.dcab4267.chunk.js.map