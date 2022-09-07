(this["webpackJsonpcreative-gallery-client"]=this["webpackJsonpcreative-gallery-client"]||[]).push([[0],{50:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(14),i=n.n(s),r=n(5),o=(n(50),n(4)),l=n(17),j=function(){return Object(l.b)()},d=l.c,h=n(29),b=n.n(h),u=n(44),m=n(18),p=n(45),O=n.n(p),x="".concat("https://creativegallery.herokuapp.com","/api"),g=function(e){throw new Error(e)},v=Object(m.b)("creativeGallery/createRequest",function(){var e=Object(u.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.request,e.prev=1,e.next=4,O.a.post("".concat(x,"/request/create"),n);case 4:e.next=9;break;case 6:return e.prev=6,e.t0=e.catch(1),e.abrupt("return",g(e.t0.response.data.errorMessage));case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}()),f=Object(m.c)({name:"creativeGallery",initialState:{menuItem:null,isDesktop:!1,isMenuVisible:!1,isOpenMenu:!1,isCloseMenu:!1,isCreatingRequest:!1,errorMessage:null},reducers:{setIsDesktop:function(e,t){e.isDesktop=t.payload},setIsMenuVisible:function(e,t){e.isMenuVisible=t.payload},setIsOpenMenu:function(e,t){e.isOpenMenu=t.payload},setIsCloseMenu:function(e,t){e.isCloseMenu=t.payload},setMenuItem:function(e,t){e.menuItem=t.payload},setIsCreatingRequest:function(e,t){e.isCreatingRequest=t.payload},setErrorMessage:function(e,t){e.errorMessage=t.payload}},extraReducers:function(e){e.addCase(v.fulfilled,(function(e){e.isCreatingRequest=!1})),e.addCase(v.rejected,(function(e){e.isCreatingRequest=!1}))}}),C=f.actions,k=C.setIsDesktop,N=C.setIsMenuVisible,L=C.setIsOpenMenu,w=C.setIsCloseMenu,y=C.setMenuItem,T=(C.setIsCreatingRequest,C.setErrorMessage),S=f.reducer,I=n(12),P=n(13),M=n(0),G=function(){return Object(M.jsxs)("div",{className:"logoSubContainer",children:[Object(M.jsx)("div",{className:"logoLetterOutlineC",children:Object(M.jsx)("div",{className:"logoLetterInlineC"})}),Object(M.jsx)("div",{className:"logoLetterOutlineG",children:Object(M.jsx)("div",{className:"logoLetterInlineG",children:Object(M.jsx)("div",{className:"logoLetterBoxG",children:Object(M.jsx)("div",{className:"logoLetterBoxG2",children:" "})})})})]})},E="https://www.dropbox.com/s/cdhs4pqq5uwwck2/CV%20%285%29.pdf?dl=0",R=function(e){var t=e.linkPath,n=e.linkClass,c=e.linkText,a=e.faClass,s=e.onClickHandler;return Object(M.jsx)(M.Fragment,{children:Object(M.jsx)(o.b,{to:{pathname:t},target:"_blank",rel:"noreferrer noopener",className:n,onClick:s,children:c||(a?Object(M.jsx)("i",{className:"fab ".concat(a," textColorWhite")}):null)})})},H=function(){var e=d((function(e){return e.creativeGallery.menuItem})),t=j(),n=function(e,t){return e===t?"navigationLink navigationactivateLink":"navigationLink"};return Object(M.jsxs)("div",{className:"navigationContainer",children:[Object(M.jsxs)("ul",{className:"navigationSubContainerLeft",children:[Object(M.jsx)("li",{children:Object(M.jsx)(o.b,{to:"/about",className:n(e,"about"),onClick:function(){t(y("about"))},children:"ABOUT"})}),Object(M.jsx)("li",{children:Object(M.jsx)(o.b,{to:"/projects",className:n(e,"projects"),onClick:function(){t(y("projects"))},children:"PROJECTS"})}),Object(M.jsx)("li",{children:Object(M.jsx)(o.b,{to:"/techstack",className:n(e,"techStack"),onClick:function(){t(y("techStack"))},children:"TECHSTACK"})})]}),Object(M.jsxs)("ul",{className:"navigationSubContainerRight",children:[Object(M.jsx)("li",{children:Object(M.jsx)(R,{linkPath:E,linkClass:"navigationLink",linkText:"RESUME"})}),Object(M.jsx)("li",{children:Object(M.jsx)(o.b,{to:"/contact",className:n(e,"contact"),onClick:function(){t(y("contact"))},children:"CONTACT"})})]})]})},D=function(){var e=d((function(e){return e.creativeGallery.isDesktop})),t=j();Object(c.useEffect)((function(){var e=function(e,t){t(e);var n=function(){t(e)};return e.addEventListener("resize",n),n}(window,(function(e){e.innerWidth>1024?t(k(!0)):t(k(!1))}));return function(){var t,n;t=window,n=e,t.removeEventListener("resize",n)}}),[]);return Object(M.jsx)("div",{children:Object(M.jsx)("nav",{children:Object(M.jsxs)("div",{className:"navbarContainer navbarBorder",children:[Object(M.jsx)("div",{className:"logoContainer",children:Object(M.jsx)(o.b,{to:"/",className:"textstylePlain colorWhite",onClick:function(){t(y("home"))},children:Object(M.jsx)(G,{})})}),e?Object(M.jsx)(H,{}):Object(M.jsx)("div",{children:Object(M.jsx)(I.a,{icon:P.a,onClick:function(){t(N(!0)),t(L(!0)),setTimeout((function(){t(L(!1))}),1e3)}})})]})})})},B=function(){var e=d((function(e){return e.creativeGallery.isDesktop})),t=d((function(e){return e.creativeGallery.isMenuVisible})),n=d((function(e){return e.creativeGallery.isOpenMenu})),c=d((function(e){return e.creativeGallery.isCloseMenu})),a=j(),s=function(){a(w(!0)),setTimeout((function(){a(w(!1)),a(N(!1))}),300)},i=function(e,t,n){return e?"menuLink colorOrange ".concat(t):c?"menuLink colorOrange ".concat(n):"menuLink colorOrange"};return Object(M.jsx)(M.Fragment,{children:!e&&t&&Object(M.jsxs)("div",{className:function(e){return e?"menu fadeMenuIn":c?"menu fadeMenuOut":"menu"}(n),children:[Object(M.jsx)("div",{className:"menuCloseContainer",children:Object(M.jsx)(I.a,{icon:P.e,className:"menuClose colorWhite",onClick:s})}),Object(M.jsx)("div",{className:"menuContainer",children:Object(M.jsx)("div",{className:"menuSubContainer",children:Object(M.jsxs)("ul",{children:[Object(M.jsx)("li",{children:Object(M.jsx)(o.b,{to:"/about",className:i(n,"menuLinkFadeInSpeed1","menuLinkFadeOutSpeed1"),onClick:s,children:"ABOUT"})}),Object(M.jsx)("li",{children:Object(M.jsx)(o.b,{to:"/projects",className:i(n,"menuLinkFadeInSpeed2","menuLinkFadeOutSpeed2"),onClick:s,children:"PROJECTS"})}),Object(M.jsx)("li",{children:Object(M.jsx)(o.b,{to:"/techstack",className:i(n,"menuLinkFadeInSpeed3","menuLinkFadeOutSpeed3"),onClick:s,children:"TECHSTACK"})}),Object(M.jsx)("li",{children:Object(M.jsx)(R,{linkPath:E,linkClass:i(n,"menuLinkFadeInSpeed4","menuLinkFadeOutSpeed4"),linkText:"RESUME",onClickHandler:s})}),Object(M.jsx)("li",{children:Object(M.jsx)(o.b,{to:"/contact",className:i(n,"menuLinkFadeInSpeed5","menuLinkFadeOutSpeed5"),onClick:s,children:"CONTACT"})})]})})})]})})},F=function(){var e=(new Date).getFullYear();return Object(M.jsx)("div",{children:Object(M.jsx)("footer",{children:Object(M.jsxs)("div",{className:"footerContainer",children:[Object(M.jsxs)("span",{className:"copyrightText",children:[" \xa9 ",e," Christian Gerbig "]}),Object(M.jsxs)("ul",{className:"footerSubContainer",children:[Object(M.jsx)("li",{children:Object(M.jsx)(R,{linkPath:"https://www.linkedin.com/in/christian-gerbig/",linkClass:"footerLink",faClass:"fa-linkedin"})}),Object(M.jsx)("li",{children:Object(M.jsx)(R,{linkPath:"https://github.com/christiangerbig/",linkClass:"footerLink",faClass:"fa-github"})})]})]})})})},q=n(11),V=function(){return Object(M.jsx)("div",{className:"homeLogoContainer blurrIn",children:Object(M.jsxs)("div",{className:"homeLogoSubContainer",children:[Object(M.jsx)("div",{className:"homeLogoLetterOutlineC",children:Object(M.jsx)("div",{className:"homeLogoLetterInlineC"})}),Object(M.jsx)("div",{className:"homeLogoLetterOutlineG",children:Object(M.jsx)("div",{className:"homeLogoLetterInlineG",children:Object(M.jsx)("div",{className:"homeLogoLetterBoxG",children:Object(M.jsx)("div",{className:"homeLogoLetterBoxG2"})})})})]})})},W=function(e){var t=e.text,n=e.borderColorName;return Object(M.jsxs)("div",{className:function(e){switch(e){case"green":return"headerText greenBorder";case"orange":return"headerText orangeBorder";case"violet":return"headerText violetBorder";case"blue":return"headerText blueBorder";default:return"headerText"}}(n),children:[Object(M.jsxs)("h1",{className:"textFat",children:[" ",t[0]," "]}),Object(M.jsxs)("h2",{className:"textBig",children:[" ",t[1]," "]})]})},A=function(){return Object(c.useEffect)((function(){q.animateScroll.scrollToTop()}),[]),Object(M.jsxs)("div",{className:"homePageContainer",children:[Object(M.jsx)(V,{}),Object(M.jsx)(W,{text:["Hi, I'm Christian","A passionate Web Developer"],borderColorName:""})]})},U=function(){var e=j();return Object(c.useEffect)((function(){q.animateScroll.scrollToTop()}),[]),Object(M.jsxs)("div",{className:"aboutPageContainer",children:[Object(M.jsx)("header",{className:"headline",children:Object(M.jsx)(W,{text:["There is only one way","Straight forward"],borderColorName:"green"})}),Object(M.jsxs)("div",{className:"textContainer",children:[Object(M.jsx)("div",{className:"textColumContainer",children:Object(M.jsxs)("article",{children:[Object(M.jsx)("header",{children:Object(M.jsx)("h3",{children:" Hi, "})}),Object(M.jsx)("p",{children:"I'm Christian Gerbig. I'm a Web Developer focused on Frontend and Backend technologies. My homebase is Hamburg in Germany."}),Object(M.jsxs)("p",{children:["I believe in the",Object(M.jsxs)("span",{className:"colorOrange",children:[" ","positive power of communication"," "]}),"with a trust in",Object(M.jsx)("span",{className:"colorOrange",children:" cooperative team working "}),"making an asset from sharing different points of views."]}),Object(M.jsxs)("p",{children:["I like to use every aspect of new technology available to reach the goals and love to code",Object(M.jsx)("span",{className:"colorOrange",children:" optimized solutions "})," suiting individual requirements with respect to time, budget and target."]}),Object(M.jsx)("p",{children:'My motto: "Learning things, improving (them) and reach the goals".'})]})}),Object(M.jsx)("div",{className:"textColumContainer",children:Object(M.jsxs)("article",{children:[Object(M.jsx)("header",{children:Object(M.jsx)("h3",{children:" How it began "})}),Object(M.jsxs)("p",{children:["I started to learn the fundamentals of",Object(M.jsx)("span",{className:"colorOrange",children:" Web Development "})," by myself and as a Full Stack Web Developper at Ironhack."]}),Object(M.jsxs)("p",{children:["Meanwhile I improved my skills to write",Object(M.jsx)("span",{className:"colorOrange",children:" Clean Code "})," and learned in several Udemy courses to apply the",Object(M.jsx)("span",{className:"colorOrange",children:" Redux Toolkit "})," and",Object(M.jsx)("span",{className:"colorOrange",children:" TypeScript "})," together with",Object(M.jsx)("span",{className:"colorOrange",children:" React "})," in my projects."," "]}),Object(M.jsx)("p",{children:"I would like to become part of a team where I can apply, develop and share my skills."}),Object(M.jsx)("p",{children:Object(M.jsx)("span",{className:"aboutContactLink",onClick:function(){return e(y("contact"))},children:Object(M.jsx)(o.b,{to:{pathname:"/contact"},children:" Let's get in touch. "})})})]})})]})]})},J=[{projectName:"JUNGLE SWAP",projectPicturePath:n.p+"static/media/jungle-swap.04645ba1.png",projectVideoPath:"https://bliskcloudstorage.blob.core.windows.net/videos/2c9bdc9d-6b6f-4823-844c-2a2cd5c36a86/15-May-2021-13-45-637566759460450173.mp4",projectDescription:"<p> Share your plant offshoots and make money or swap them for another plant. Shop and give a plant a new home. </p>",deployedPath:"https://jungleswap.herokuapp.com/",gitHubClientPath:"https://github.com/christiangerbig/jungle-swap-client",gitHubServerPath:"https://github.com/christiangerbig/jungle-swap-server"},{projectName:"TRACKERTOOLS",projectPicturePath:n.p+"static/media/trackertools.cdf33462.png",projectVideoPath:"https://bliskcloudstorage.blob.core.windows.net/videos/2c9bdc9d-6b6f-4823-844c-2a2cd5c36a86/15-May-2021-13-35-637566753722531829.mp4",projectDescription:"<p> Four powerful tools to make working with the music editor Protracker and its modules more comfortable. </p>",deployedPath:"https://trackertools.herokuapp.com/",gitHubClientPath:"https://github.com/christiangerbig/Trackertools",gitHubServerPath:""},{projectName:"LETTER SHOOTER",projectPicturePath:n.p+"static/media/letter-shooter.a0667b69.png",projectVideoPath:"https://bliskcloudstorage.blob.core.windows.net/videos/2c9bdc9d-6b6f-4823-844c-2a2cd5c36a86/15-May-2021-14-10-637566774755686276.mp4",projectDescription:"<p> A coordination and strategy game with the goal to hit the missing letters with precise shots. </p>",deployedPath:"https://christiangerbig.github.io/letter-shooter/",gitHubClientPath:"https://github.com/christiangerbig/letter-shooter",gitHubServerPath:""}],_=function(e){var t=e.projectItem,n=Object(c.useRef)(null),a=t.projectName,s=t.projectPicturePath,i=t.projectVideoPath,r=t.projectDescription,o=t.deployedPath,l=t.gitHubClientPath,j=t.gitHubServerPath;return Object(c.useEffect)((function(){var e;e=r,n.current.innerHTML=e}),[]),Object(M.jsxs)("div",{className:"projectDetailsContainer",children:[Object(M.jsx)("video",{width:"320",height:"200",muted:!0,controls:!0,poster:s,src:i}),Object(M.jsx)("div",{className:"projectDescription",children:Object(M.jsxs)("article",{children:[Object(M.jsx)("header",{children:Object(M.jsxs)("h2",{children:[" ",a," "]})}),Object(M.jsx)("div",{ref:n,className:"descriptionContainer"})]})}),Object(M.jsxs)("div",{className:"projectLinksContainer",children:[Object(M.jsx)("div",{children:Object(M.jsx)(R,{linkPath:o,linkClass:"projectTryItLink",linkText:"TRY IT"})}),Object(M.jsx)("div",{children:Object(M.jsx)(R,{linkPath:l,linkClass:"projectGitHubLink",linkText:"GIT HUB"})}),Object(M.jsx)("div",{hidden:!j,children:Object(M.jsx)(R,{linkPath:j,linkClass:"projectGitHubLink",linkText:"GIT HUB 2"})})]})]})},K=function(){return Object(c.useEffect)((function(){q.animateScroll.scrollToTop()}),[]),Object(M.jsxs)("div",{className:"projectsPageContainer",children:[Object(M.jsx)("header",{className:"headline",children:Object(M.jsx)(W,{text:["My Web Developer projects","I was working on"],borderColorName:"orange"})}),Object(M.jsx)("div",{className:"projectsContainer",children:J.map((function(e,t){return Object(M.jsx)(_,{projectItem:e},t)}))})]})},z=n.p+"static/media/React-Logo.ae626225.svg",Y=n.p+"static/media/Redux-Logo.a9567540.svg",Q=n.p+"static/media/JavaScript(ES6)-Logo.a309520a.svg",X=n.p+"static/media/TypeScript-Logo.17d5e87e.svg",Z=n.p+"static/media/Sass-Logo.8351205a.svg",$=n.p+"static/media/Cloudinary-Logo.df0c0e93.svg",ee=n.p+"static/media/Bootstrap-Logo.527d0fc0.svg",te=n.p+"static/media/NPM-Logo.5620a716.svg",ne=n.p+"static/media/MongoDB-Logo.153b7b44.svg",ce=n.p+"static/media/NodeJS-Logo.5a3a9ca2.svg",ae=n.p+"static/media/GitHub-Logo.11619ac0.svg",se=n.p+"static/media/Visual-Studio-Code-Logo.f57bbf46.svg",ie=function(){var e=[z,Y,ce,Q,X,Z,ee,ne,$,te,ae,se];return Object(c.useEffect)((function(){q.animateScroll.scrollToTop()}),[]),Object(M.jsxs)("div",{className:"techStackPageContainer",children:[Object(M.jsx)("header",{className:"headline",children:Object(M.jsx)(W,{text:["The tech stack","I use in my projects"],borderColorName:"violet"})}),Object(M.jsx)("div",{className:"techStackLogosContainer",children:e.map((function(e,t){return Object(M.jsx)("img",{src:e,alt:"firm logo"},t)}))})]})},re=function(){var e=d((function(e){return e.creativeGallery.isCreatingRequest})),t=d((function(e){return e.creativeGallery.errorMessage})),n=j(),a=Object(r.f)();Object(c.useEffect)((function(){n(T(null)),q.animateScroll.scrollToTop()}),[]);var s=function(e){e.preventDefault();var t=e.target,c=t.email,s=t.subject,i=t.message,r={email:c.value,subject:s.value,message:i.value};n(v({request:r})).unwrap().then((function(){n(y("home")),a.push("/")})).catch((function(e){n(T(e.message))}))};return Object(M.jsxs)("div",{className:"contactPageContainer",children:[Object(M.jsx)("header",{className:"headline",children:Object(M.jsx)(W,{text:["Don't hesitate","to contact me"],borderColorName:"blue"})}),Object(M.jsxs)("div",{className:"contactContainer",children:[Object(M.jsx)("h1",{children:" Christian Gerbig "}),Object(M.jsx)("h2",{children:" Web Developer "}),Object(M.jsxs)("div",{className:"contactWaysContainer",children:[Object(M.jsxs)("div",{className:"contactEmailContainer",children:[Object(M.jsxs)("h3",{children:[Object(M.jsx)(I.a,{icon:P.b})," e-mail"]}),Object(M.jsx)("span",{className:"contactLink",children:Object(M.jsx)(o.b,{to:{pathname:"mailto:chr_gerbig@web.de"},target:"_blank",children:Object(M.jsx)("h4",{children:" chr_gerbig(at)web.de "})})})]}),Object(M.jsxs)("div",{className:"contactPhoneContainer",children:[Object(M.jsxs)("h3",{children:[Object(M.jsx)(I.a,{icon:P.c})," phone"]}),Object(M.jsx)("span",{className:"contactLink",children:Object(M.jsx)(o.b,{to:{pathname:"tel:+4915154824288"},target:"_blank",children:Object(M.jsx)("h4",{children:" +49\xa0151\xa0548\xa0242\xa088 "})})})]})]}),Object(M.jsx)("div",{children:Object(M.jsxs)("h3",{children:[Object(M.jsx)(I.a,{icon:P.d})," or write me"]})}),Object(M.jsxs)("p",{hidden:!t,className:"errorOutput warningColor",children:[" ",t," "]}),Object(M.jsxs)("form",{onSubmit:function(e){s(e)},children:[Object(M.jsx)("input",{type:"email",name:"email",placeholder:"email",className:"formInput"}),Object(M.jsx)("input",{type:"text",name:"subject",placeholder:"subject",className:"formInput"}),Object(M.jsx)("textarea",{name:"message",placeholder:"message",cols:35,rows:7,className:"formTextarea"}),Object(M.jsx)("input",{type:"submit",value:"SUBMIT",disabled:!!e,formNoValidate:!0,className:"formSubmit"})]})]})]})},oe=function(){return Object(M.jsxs)("div",{className:"notFoundPageContainer logoImage",children:[Object(M.jsx)("header",{className:"headline",children:Object(M.jsx)(W,{text:["Error 404","Page not found"],borderColorName:"orange"})}),Object(M.jsx)("div",{className:"notFoundGetBackContainer",children:Object(M.jsx)(o.b,{to:"/",className:"notFoundGetBackLink textEnlighted",children:"GET BACK"})})]})},le=Object(r.g)((function(){return Object(M.jsxs)("div",{children:[Object(M.jsx)(D,{}),Object(M.jsx)(B,{}),Object(M.jsxs)(r.c,{children:[Object(M.jsx)(r.a,{exact:!0,path:"/",children:Object(M.jsx)(A,{})}),Object(M.jsx)(r.a,{path:"/about",children:Object(M.jsx)(U,{})}),Object(M.jsx)(r.a,{path:"/projects",children:Object(M.jsx)(K,{})}),Object(M.jsx)(r.a,{path:"/techstack",children:Object(M.jsx)(ie,{})}),Object(M.jsx)(r.a,{path:"/contact",children:Object(M.jsx)(re,{})}),Object(M.jsx)(r.a,{component:oe})]}),Object(M.jsx)(F,{})]})})),je=Object(m.a)({reducer:{creativeGallery:S}});n(83);i.a.render(Object(M.jsx)(a.a.StrictMode,{children:Object(M.jsx)(l.a,{store:je,children:Object(M.jsx)(o.a,{children:Object(M.jsx)(le,{})})})}),document.querySelector("#root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.4278a771.chunk.js.map