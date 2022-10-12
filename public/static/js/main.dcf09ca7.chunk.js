(this["webpackJsonpcreative-gallery-client"]=this["webpackJsonpcreative-gallery-client"]||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(16),i=a.n(s),r=a(5),o=a(19),l=function(){return Object(o.b)()},d=o.c,j=a(56),u=a(0),h=Object(n.createContext)(!0),b=function(e){var t=e.children,a=Object(n.useState)(!0),c=Object(j.a)(a,2),s=c[0],i=c[1];return Object(n.useEffect)((function(){var e=function(){i(!1)},t=function(){i(!0)};return window.addEventListener("offline",e),window.addEventListener("online",t),function(){window.removeEventListener("offline",e),window.removeEventListener("online",t)}}),[]),Object(u.jsx)(h.Provider,{value:s,children:t})},p=(a(65),a(4)),m=a(34),x=a.n(m),g=a(50),O=a(20),f=a(51),v=a.n(f),k="".concat("https://creativegallery.herokuapp.com","/api"),N=function(e){throw new Error(e)},C=Object(O.b)("creativeGallery/createRequest",function(){var e=Object(g.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.post("".concat(k,"/request/create"),t);case 3:e.next=8;break;case 5:return e.prev=5,e.t0=e.catch(0),e.abrupt("return",N(e.t0.response.data.errorMessage));case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}()),w=Object(O.c)({name:"creativeGallery",initialState:{menuItem:null,isDesktop:!1,isMenuVisible:!1,isOpenMenu:!1,isCloseMenu:!1,isCreatingRequest:!1,errorMessage:null},reducers:{setIsDesktop:function(e,t){e.isDesktop=t.payload},setIsMenuVisible:function(e,t){e.isMenuVisible=t.payload},setIsOpenMenu:function(e,t){e.isOpenMenu=t.payload},setIsCloseMenu:function(e,t){e.isCloseMenu=t.payload},setMenuItem:function(e,t){e.menuItem=t.payload},setIsCreatingRequest:function(e,t){e.isCreatingRequest=t.payload},setErrorMessage:function(e,t){e.errorMessage=t.payload}},extraReducers:function(e){e.addCase(C.fulfilled,(function(e){e.isCreatingRequest=!1})),e.addCase(C.rejected,(function(e){e.isCreatingRequest=!1}))}}),y=w.actions,M=y.setIsDesktop,T=y.setIsMenuVisible,S=y.setIsOpenMenu,R=y.setIsCloseMenu,E=y.setMenuItem,I=(y.setIsCreatingRequest,y.setErrorMessage),P=w.reducer,L=a(14),q=a(15),D=a(101),G="https://www.dropbox.com/s/x3m4bop3tn2pxjm/CV-Gerbig.pdf?dl=0",H=function(e){var t=e.path,a=e.styleClass,n=e.text,c=e.faClass,s=e.onClickHandler;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(p.b,{to:{pathname:t},target:"_blank",rel:"noreferrer noopener",className:a,onClick:s,children:function(e,t){return e||(t?Object(u.jsx)("i",{className:"fab ".concat(t," is-white")}):"")}(n,c)})})},F=function(){var e=d((function(e){return e.creativeGallery.menuItem})),t=l(),a=Object(D.a)().t,n=function(e,t){return e===t?"navigation-link is-navigation-link-active":"navigation-link"};return Object(u.jsxs)("div",{className:"navigation-container",children:[Object(u.jsxs)("ul",{className:"navigation-subcontainer-left navigation-list",children:[Object(u.jsx)("li",{children:Object(u.jsx)(p.b,{to:"/about",className:n(e,"about"),onClick:function(){t(E("about"))},children:a("link.about")})}),Object(u.jsx)("li",{children:Object(u.jsx)(p.b,{to:"/projects",className:n(e,"projects"),onClick:function(){t(E("projects"))},children:a("link.projects")})}),Object(u.jsx)("li",{children:Object(u.jsx)(p.b,{to:"/techstack",className:n(e,"techStack"),onClick:function(){t(E("techStack"))},children:a("link.techStack")})})]}),Object(u.jsxs)("ul",{className:"navigation-subcontainer-right navigation-list",children:[Object(u.jsx)("li",{children:Object(u.jsx)(H,{path:G,styleClass:"navigation-link",text:a("link.resume")})}),Object(u.jsx)("li",{children:Object(u.jsx)(p.b,{to:"/contact",className:n(e,"contact"),onClick:function(){t(E("contact"))},children:a("link.contact")})})]})]})},V=function(){return Object(u.jsxs)("div",{className:"logo-subcontainer",children:[Object(u.jsx)("div",{className:"logo-letter-c-outline",children:Object(u.jsx)("div",{className:"logo-letter-c-inline"})}),Object(u.jsx)("div",{className:"logo-letter-g-outline",children:Object(u.jsx)("div",{className:"logo-letter-g-inline",children:Object(u.jsx)("div",{className:"logo-letter-g-box",children:Object(u.jsx)("div",{className:"logo-letter-g-box2"})})})})]})},A=function(){var e=d((function(e){return e.creativeGallery.isDesktop})),t=l();Object(n.useEffect)((function(){var e=function(e,t){t(e);var a=function(){t(e)};return e.addEventListener("resize",a),a}(window,(function(e){e.innerWidth>1024?t(M(!0)):t(M(!1))}));return function(){var t,a;t=window,a=e,t.removeEventListener("resize",a)}}),[]);return Object(u.jsx)("div",{children:Object(u.jsx)("nav",{children:Object(u.jsxs)("div",{className:"navbar-container navbar-border",children:[Object(u.jsx)("div",{className:"logo-container",children:Object(u.jsx)(p.b,{to:"/",className:"is-text-style-plain is-white",onClick:function(){t(E("home"))},children:Object(u.jsx)(V,{})})}),e?Object(u.jsx)(F,{}):Object(u.jsx)("div",{children:Object(u.jsx)(L.a,{icon:q.a,onClick:function(){t(T(!0)),t(S(!0)),setTimeout((function(){t(S(!1))}),1e3)}})})]})})})},B=function(){var e=d((function(e){return e.creativeGallery.isDesktop})),t=d((function(e){return e.creativeGallery.isMenuVisible})),a=d((function(e){return e.creativeGallery.isOpenMenu})),n=d((function(e){return e.creativeGallery.isCloseMenu})),c=l(),s=Object(D.a)().t,i=function(){c(R(!0)),setTimeout((function(){c(R(!1)),c(T(!1))}),300)},r=function(e,t,a){return e?"menu-link is-warning ".concat(t):n?"menu-link is-warning ".concat(a):"menu-link is-warning"};return Object(u.jsx)(u.Fragment,{children:!e&&t&&Object(u.jsxs)("div",{className:function(e){return e?"menu fade-menu-in":n?"menu fade-menu-out":"menu"}(a),children:[Object(u.jsx)("div",{className:"close-menu-container",children:Object(u.jsx)(L.a,{icon:q.e,className:"close-menu is-white",onClick:i})}),Object(u.jsx)("div",{className:"menu-container",children:Object(u.jsx)("div",{className:"menu-subcontainer",children:Object(u.jsxs)("ul",{className:"navigation-list",children:[Object(u.jsx)("li",{children:Object(u.jsx)(p.b,{to:"/about",className:r(a,"menu-link-fade-in-speed1","menu-link-fade-out-speed1"),onClick:i,children:s("link.about")})}),Object(u.jsx)("li",{children:Object(u.jsx)(p.b,{to:"/projects",className:r(a,"menu-link-fade-in-speed2","menu-link-fade-out-speed2"),onClick:i,children:s("link.projects")})}),Object(u.jsx)("li",{children:Object(u.jsx)(p.b,{to:"/techstack",className:r(a,"menu-link-fade-in-speed3","menu-link-fade-out-speed3"),onClick:i,children:s("link.techStack")})}),Object(u.jsx)("li",{children:Object(u.jsx)(H,{path:G,styleClass:r(a,"menu-link-fade-in-speed4","menu-link-fade-out-speed4"),text:s("link.resume"),onClickHandler:i})}),Object(u.jsx)("li",{children:Object(u.jsx)(p.b,{to:"/contact",className:r(a,"menu-link-fade-in-speed5","menu-link-fade-out-speed5"),onClick:i,children:s("link.contact")})})]})})})]})})},W=function(){var e=Object(D.a)().t,t=(new Date).getFullYear();return Object(u.jsx)("div",{children:Object(u.jsx)("footer",{children:Object(u.jsxs)("div",{className:"footer-container",children:[Object(u.jsxs)("span",{className:"copyright-text",children:[" ",e("texts.footer.copyright")," ",t," ",e("texts.footer.appAuthor")," "]}),Object(u.jsxs)("ul",{className:"footer-subcontainer navigation-list",children:[Object(u.jsx)("li",{children:Object(u.jsx)(H,{path:"https://www.linkedin.com/in/christian-gerbig/",styleClass:"footer-link",faClass:"fa-linkedin"})}),Object(u.jsx)("li",{children:Object(u.jsx)(H,{path:"https://github.com/christiangerbig/",styleClass:"footer-link",faClass:"fa-github"})})]})]})})})},U=a(13),J=function(){return Object(u.jsx)("div",{className:"blur-in",children:Object(u.jsxs)("div",{className:"home-logo-subcontainer",children:[Object(u.jsx)("div",{className:"home-logo-letter-c-outline",children:Object(u.jsx)("div",{className:"home-logo-letter-c-inline"})}),Object(u.jsx)("div",{className:"home-logo-letter-g-outline",children:Object(u.jsx)("div",{className:"home-logo-letter-g-inline",children:Object(u.jsx)("div",{className:"home-logo-letter-g-box",children:Object(u.jsx)("div",{className:"home-logo-letter-g-box2"})})})})]})})},z=function(e){var t=e.headlines,a=e.borderColorName,n=t.headline,c=t.subheadline;return Object(u.jsxs)("div",{className:function(e){switch(e){case"green":return"header-text is-border-green";case"orange":return"header-text is-border-orange";case"violet":return"header-text is-border-violet";case"blue":return"header-text is-border-blue";default:return"header-text"}}(a),children:[Object(u.jsxs)("h1",{className:"is-text-large-size",children:[" ",n," "]}),Object(u.jsxs)("h2",{className:"is-text-small-size",children:[" ",c," "]})]})},_=function(){var e=Object(D.a)().t;return Object(n.useEffect)((function(){U.animateScroll.scrollToTop()}),[]),Object(u.jsxs)("div",{className:"home-page-container",children:[Object(u.jsx)(J,{}),Object(u.jsx)(z,{headlines:{headline:e("texts.home.welcome.headline"),subheadline:e("texts.home.welcome.subheadline")},borderColorName:""})]})},K=function(){var e=l(),t=Object(D.a)().t;return Object(n.useEffect)((function(){U.animateScroll.scrollToTop()}),[]),Object(u.jsxs)("div",{className:"about-page-container",children:[Object(u.jsx)("header",{className:"headline",children:Object(u.jsx)(z,{headlines:{headline:t("texts.about.headline"),subheadline:t("texts.about.subheadline")},borderColorName:"green"})}),Object(u.jsxs)("div",{className:"about-text-container",children:[Object(u.jsx)("div",{className:"about-text-colum-container",children:Object(u.jsxs)("article",{children:[Object(u.jsx)("header",{children:Object(u.jsx)("h3",{children:t("texts.about.personalDetails.headline")})}),Object(u.jsx)("p",{children:t("texts.about.personalDetails.paragraph1")}),Object(u.jsx)("p",{children:t("texts.about.personalDetails.paragraph2")}),Object(u.jsx)("p",{children:t("texts.about.personalDetails.paragraph3")}),Object(u.jsx)("p",{children:t("texts.about.personalDetails.paragraph4")})]})}),Object(u.jsx)("div",{className:"about-text-colum-container",children:Object(u.jsxs)("article",{children:[Object(u.jsx)("header",{children:Object(u.jsx)("h3",{children:t("texts.about.experience.headline")})}),Object(u.jsx)("p",{children:t("texts.about.experience.paragraph1")}),Object(u.jsx)("p",{children:t("texts.about.experience.paragraph2")}),Object(u.jsx)("p",{children:t("texts.about.experience.paragraph3")}),Object(u.jsx)("p",{children:t("texts.about.experience.paragraph4")}),Object(u.jsx)("p",{children:Object(u.jsx)("span",{className:"about-contact-link",onClick:function(){e(E("contact"))},children:Object(u.jsx)(p.b,{to:{pathname:"/contact"},children:t("texts.about.experience.contact")})})})]})})]})]})},Y=[{projectName:"JUNGLE SWAP",projectPicturePath:a.p+"static/media/jungle-swap.04645ba1.png",projectVideoPath:"https://bliskcloudstorage.blob.core.windows.net/videos/2c9bdc9d-6b6f-4823-844c-2a2cd5c36a86/15-May-2021-13-45-637566759460450173.mp4",projectDescription:"Share your plant offshoots and make money or swap them for another plant. Shop and give a plant a new home.",deployedPath:"https://jungleswap.herokuapp.com/",gitHubClientPath:"https://github.com/christiangerbig/jungle-swap-client",gitHubServerPath:"https://github.com/christiangerbig/jungle-swap-server"},{projectName:"TRACKERTOOLS",projectPicturePath:a.p+"static/media/trackertools.cdf33462.png",projectVideoPath:"https://bliskcloudstorage.blob.core.windows.net/videos/2c9bdc9d-6b6f-4823-844c-2a2cd5c36a86/15-May-2021-13-35-637566753722531829.mp4",projectDescription:"Four powerful tools to make working with the music editor Protracker and its modules more comfortable.",deployedPath:"https://trackertools.herokuapp.com/",gitHubClientPath:"https://github.com/christiangerbig/Trackertools",gitHubServerPath:""},{projectName:"LETTER SHOOTER",projectPicturePath:a.p+"static/media/letter-shooter.a0667b69.png",projectVideoPath:"https://bliskcloudstorage.blob.core.windows.net/videos/2c9bdc9d-6b6f-4823-844c-2a2cd5c36a86/15-May-2021-14-10-637566774755686276.mp4",projectDescription:"A coordination and strategy game with the goal to hit the missing letters with precise shots.",deployedPath:"https://christiangerbig.github.io/letter-shooter/",gitHubClientPath:"https://github.com/christiangerbig/letter-shooter",gitHubServerPath:""}],Q=function(e){var t=e.projectItem,a=Object(D.a)().t,n=t.projectName,c=t.projectPicturePath,s=t.projectVideoPath,i=t.projectDescription,r=t.deployedPath,o=t.gitHubClientPath,l=t.gitHubServerPath;return Object(u.jsxs)("div",{className:"project-details-container",children:[Object(u.jsx)("video",{width:"320",height:"200",muted:!0,controls:!0,poster:c,src:s}),Object(u.jsx)("div",{className:"project-description",children:Object(u.jsxs)("article",{children:[Object(u.jsx)("header",{children:Object(u.jsx)("h2",{children:n})}),Object(u.jsx)("div",{className:"project-description-container",children:Object(u.jsx)("p",{children:i})})]})}),Object(u.jsxs)("div",{className:"project-links-container",children:[Object(u.jsx)("div",{children:Object(u.jsx)(H,{path:r,styleClass:"project-try-it-link",text:a("link.startApp")})}),Object(u.jsx)("div",{children:Object(u.jsx)(H,{path:o,styleClass:"project-github-link",text:a("link.gitHubClient")})}),l&&Object(u.jsx)("div",{children:Object(u.jsx)(H,{path:l,styleClass:"project-github-link",text:a("link.gitHubServer")})})]})]})},X=function(){var e=Object(D.a)().t;return Object(n.useEffect)((function(){U.animateScroll.scrollToTop()}),[]),Object(u.jsxs)("div",{className:"projects-page-container",children:[Object(u.jsx)("header",{className:"headline",children:Object(u.jsx)(z,{headlines:{headline:e("texts.projects.headline"),subheadline:e("texts.projects.subheadline")},borderColorName:"orange"})}),Object(u.jsx)("div",{className:"projects-container",children:Y.map((function(e,t){return Object(u.jsx)(Q,{projectItem:e},"".concat(e.projectName).concat(t.toString()))}))})]})},Z=a.p+"static/media/Bootstrap-Logo.527d0fc0.svg",$=a.p+"static/media/Bulma-Logo.ecefb4da.svg",ee=a.p+"static/media/Cloudinary-Logo.df0c0e93.svg",te=a.p+"static/media/Cypress-Logo.071c7e70.svg",ae=a.p+"static/media/GitHub-Logo.11619ac0.svg",ne=a.p+"static/media/GitLab-Logo.83df9efb.svg",ce=a.p+"static/media/JavaScript(ES6)-Logo.a309520a.svg",se=a.p+"static/media/MongoDB-Logo.153b7b44.svg",ie=a.p+"static/media/NodeJS-Logo.5a3a9ca2.svg",re=a.p+"static/media/NPM-Logo.5620a716.svg",oe=a.p+"static/media/React-Logo.ae626225.svg",le=a.p+"static/media/Redux-Logo.a9567540.svg",de=a.p+"static/media/Sass-Logo.8351205a.svg",je=a.p+"static/media/TypeScript-Logo.17d5e87e.svg",ue=a.p+"static/media/Visual-Studio-Code-Logo.f57bbf46.svg",he=a.p+"static/media/Vue.js-Logo.4921ee76.svg",be=a.p+"static/media/Webstorm-Logo.6cac5400.svg",pe=[oe,le,he,ie,ce,je,de,te,Z,$,se,ee,re,a.p+"static/media/Yarn-Logo.20176999.svg",ae,ne,ue,be],me=function(){var e=Object(D.a)().t;return Object(n.useEffect)((function(){U.animateScroll.scrollToTop()}),[]),Object(u.jsxs)("div",{className:"tech-stack-page-container",children:[Object(u.jsx)("header",{className:"headline",children:Object(u.jsx)(z,{headlines:{headline:e("texts.techStack.headline"),subheadline:e("texts.techStack.subheadline")},borderColorName:"violet"})}),Object(u.jsx)("div",{className:"tech-stack-logos-container",children:pe.map((function(e,t){return Object(u.jsx)("div",{className:"tech-stack-logo",children:Object(u.jsx)("img",{src:e,alt:"firm logo"},"".concat(e).concat(t.toString()))})}))})]})},xe=a(55),ge=function e(t){var a=this;Object(xe.a)(this,e),this.dispatch=void 0,this.create=function(e,t){a.dispatch(C(e)).unwrap().then((function(){t()})).catch((function(e){a.dispatch(I(e.message))}))},this.dispatch=t},Oe=function(e){var t=e.linkPath,a=e.linkClass,n=e.linkText;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("span",{className:a,children:Object(u.jsx)(p.b,{to:{pathname:t},target:"_blank",children:Object(u.jsx)("h4",{children:n})})})})},fe=function(e){var t=e.isCreatingRequest,a=e.handleSubmitRequest,n=Object(D.a)().t;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("form",{onSubmit:function(e){a(e)},children:[Object(u.jsx)("input",{type:"email",name:n("texts.contact.createRequest.form.inputEmail"),placeholder:"email",className:"form-input"}),Object(u.jsx)("input",{type:"text",name:n("texts.contact.createRequest.form.inputSubject"),placeholder:"subject",className:"form-input"}),Object(u.jsx)("textarea",{name:"message",placeholder:n("texts.contact.createRequest.form.inputMessage"),cols:35,rows:7,className:"form-textarea"}),Object(u.jsx)("button",{type:"submit",disabled:!!t,formNoValidate:!0,className:"form-submit",children:n("button.submit")})]})})},ve=function(e){var t=e.printErrorMessage,a=d((function(e){return e.creativeGallery.errorMessage}));return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("span",{className:"error-output is-danger",children:t(a)})})},ke=function(){var e=d((function(e){return e.creativeGallery.isCreatingRequest})),t=d((function(e){return e.creativeGallery.errorMessage})),a=l(),c=Object(r.f)(),s=Object(D.a)().t;Object(n.useEffect)((function(){a(I(null)),U.animateScroll.scrollToTop()}),[]);return Object(u.jsxs)("div",{className:"contact-page-container",children:[Object(u.jsx)("header",{className:"headline",children:Object(u.jsx)(z,{headlines:{headline:s("texts.contact.headline"),subheadline:s("texts.contact.subheadline")},borderColorName:"blue"})}),Object(u.jsxs)("div",{className:"contact-container",children:[Object(u.jsx)("h1",{children:s("texts.contact.name")}),Object(u.jsx)("h2",{children:s("texts.contact.jobname")}),Object(u.jsxs)("div",{className:"contact-ways-container",children:[Object(u.jsxs)("div",{className:"contact-email-container",children:[Object(u.jsxs)("h3",{children:[Object(u.jsx)(L.a,{icon:q.b})," ",s("texts.contact.email")]}),Object(u.jsx)(Oe,{linkPath:"mailto:chr_gerbig@web.de",linkClass:"contact-link",linkText:"chr_gerbig(at)web.de"})]}),Object(u.jsxs)("div",{className:"contact-phone-container",children:[Object(u.jsxs)("h3",{children:[Object(u.jsx)(L.a,{icon:q.c})," ",s("texts.contact.phone")]}),Object(u.jsx)(Oe,{linkPath:"tel:+4915154824288",linkClass:"contact-link",linkText:"+49\xa0151\xa0548\xa0242\xa088"})]})]}),Object(u.jsx)("div",{children:Object(u.jsxs)("h3",{children:[Object(u.jsx)(L.a,{icon:q.d})," ",s("texts.contact.submit")]})}),t&&t.includes("Form")&&Object(u.jsx)(ve,{printErrorMessage:function(e){switch(e){case"Form: Email missing":return s("errorTexts.createRequest.form.emailMissing");case"Form: Subject missing":return s("errorTexts.createRequest.form.subjectMissing");case"Form: Message missing":return s("errorTexts.createRequest.form.messageMissing");case"Form: Email format invalid":return s("errorTexts.createRequest.form.emailFormatInvalid");default:return s("errorTexts.general")}}}),Object(u.jsx)(fe,{isCreatingRequest:e,handleSubmitRequest:function(e){var t=e.target,n=t.email,s=t.subject,i=t.message,r={email:n.value,subject:s.value,message:i.value};e.preventDefault(),new ge(a).create(r,(function(){a(E("home")),c.push("/")}))}})]})]})},Ne=function(){var e=Object(D.a)().t;return Object(u.jsxs)("div",{className:"page-not-found-container",children:[Object(u.jsx)("header",{className:"headline",children:Object(u.jsx)(z,{headlines:{headline:e("texts.pageNotFound.headline"),subheadline:e("texts.pageNotFound.subheadline")},borderColorName:"orange"})}),Object(u.jsx)("div",{className:"page-not-found-get-back-container",children:Object(u.jsx)(p.b,{to:"/",className:"page-not-found-get-back-link",children:e("link.getBack")})})]})},Ce=function(e){var t=e.headline,a=e.errorText,c=e.isClose,s=Object(n.useRef)(null),i=l(),r=Object(D.a)().t,o=function(){i(I(null))};return Object(u.jsx)("div",{ref:s,className:"error-modal fade-error-modal-in",onClick:function(e){c&&function(e){s.current===e.target&&o()}(e)},children:Object(u.jsxs)("div",{className:"error-modal-box",children:[Object(u.jsx)("h1",{children:t}),Object(u.jsx)("h2",{children:a}),c&&Object(u.jsx)("button",{className:"error-modal-button mt-4 mb-3",onClick:o,children:r("button.proceed")})]})})},we=function(e){var t=e.errorMessage,a=Object(D.a)().t;return Object(u.jsx)("div",{children:Object(u.jsx)(Ce,{headline:a("errorModal.headline"),errorText:function(e){switch(e){case"Create request failed":return a("errorTexts.createRequest.createRequestFailed");default:return a("errors.general")}}(t),isClose:!0})})},ye=function(){var e=Object(D.a)().t;return Object(u.jsx)("div",{children:Object(u.jsx)(Ce,{headline:e("texts.offlineModal.headline"),errorText:e("errorTexts.offline"),isClose:!1})})},Me=Object(r.g)((function(){var e=d((function(e){return e.creativeGallery.errorMessage})),t=Object(n.useContext)(h);return Object(u.jsxs)("div",{children:[Object(u.jsx)(A,{}),Object(u.jsx)(B,{}),Object(u.jsxs)(r.c,{children:[Object(u.jsx)(r.a,{exact:!0,path:"/",children:Object(u.jsx)(_,{})}),Object(u.jsx)(r.a,{path:"/about",children:Object(u.jsx)(K,{})}),Object(u.jsx)(r.a,{path:"/projects",children:Object(u.jsx)(X,{})}),Object(u.jsx)(r.a,{path:"/techstack",children:Object(u.jsx)(me,{})}),Object(u.jsx)(r.a,{path:"/contact",children:Object(u.jsx)(ke,{})}),Object(u.jsx)(r.a,{component:Ne})]}),Object(u.jsx)(W,{}),e&&!e.includes("Form")&&Object(u.jsx)(we,{errorMessage:e}),!t&&Object(u.jsx)(ye,{})]})})),Te=Object(O.a)({reducer:{creativeGallery:P}}),Se=(a(99),a(37)),Re=a(22),Ee={translations:{link:{about:"ABOUT",projects:"PROJECTS",techStack:"TECHSTACK",resume:"RESUME",contact:"CONTACT",startApp:"TRY IT",gitHubClient:"GIT HUB",gitHubServer:"GIT HUB 2",getBack:"GET BACK"},button:{submit:"SUBMIT",proceed:"PROCEED"},texts:{home:{welcome:{headline:"Hi, I'm Christian",subheadline:"A passionate Web Developer"}},about:{headline:"There is only one way",subheadline:"Straight forward",personalDetails:{headline:"Hi,",paragraph1:"I'm Christian Gerbig. I'm a Web Developer focused on Frontend and Backend technologies. My homebase is Hamburg in Germany.",paragraph2:"I believe in the positive power of communication with a trust in cooperative team working making an asset from sharing different points of views.",paragraph3:"I like to use every aspect of new technology available to reach the goals and love to code optimized solutions suiting individual requirements with respect to time, budget and target.",paragraph4:"My motto: Learning things, improving (them) and reach the goals."},experience:{headline:"How it began",paragraph1:"I started to learn the fundamentals of Web Development by myself and as a Full Stack Web Developper at Ironhack.",paragraph2:"I improved my skills to write Clean Code and learned in several Udemy courses to apply the Redux Toolkit and TypeScript together with React in my projects.",paragraph3:"Meanwhile I dived more into agile work as a trainee developer and learned to use Vue together with Vuex and wrote end-2-end tests for Cypress.",paragraph4:"I would like to become part of a team where I can apply, develop and share my skills.",contact:"Let's get in touch."}},projects:{headline:"My Web Developer projects",subheadline:"I was working on"},techStack:{headline:"The tech stack",subheadline:"I use"},contact:{headline:"Don't hesitate",subheadline:"to contact me",name:"Christian Gerbig",jobname:"Web Developer",email:"e-mail",phone:"phone",submit:"or write me",createRequest:{form:{inputEmail:"email",inputSubject:"subject",inputMessage:"message"}}},pageNotFound:{headline:"ERROR 404",subheadline:"Page not found"},footer:{copyright:"\xa9",appAuthor:"Christian Gerbig"},errorModal:{headline:"SOMETHING WENT WRONG"},offlineModal:{headline:"CAUTION"}},errorTexts:{createRequest:{form:{emailMissing:"Please enter an email",subjectMissing:"Please enter a subject",messageMissing:"Please enter a message",emailFormatInvalid:"The email format is invalid"},createRequestFailed:"Creating the request failed"},offline:"No internet connection",general:"An error occured"}}};Se.a.use(Re.e).init({resources:{en:Ee},fallbackLng:"en",debug:!1,ns:["translations"],defaultNS:"translations",interpolation:{escapeValue:!1}});Se.a;i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(o.a,{store:Te,children:Object(u.jsx)(b,{children:Object(u.jsx)(p.a,{children:Object(u.jsx)(Me,{})})})})}),document.querySelector("#root"))},65:function(e,t,a){},99:function(e,t,a){}},[[100,1,2]]]);
//# sourceMappingURL=main.dcf09ca7.chunk.js.map