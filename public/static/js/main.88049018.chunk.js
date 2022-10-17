(this["webpackJsonpcreative-gallery-client"]=this["webpackJsonpcreative-gallery-client"]||[]).push([[0],{97:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(16),i=a.n(s),r=a(5),o=a(4),l=a(19),d=function(){return Object(l.b)()},u=l.c,j=a(34),b=a.n(j),h=a(50),m=a(20),p=a(51),x=a.n(p),g="".concat("https://creativegallery.herokuapp.com","/api"),O=function(e){throw new Error(e)},f=Object(m.b)("creativeGallery/createRequest",function(){var e=Object(h.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.post("".concat(g,"/request/create"),t);case 3:e.next=8;break;case 5:return e.prev=5,e.t0=e.catch(0),e.abrupt("return",O(e.t0.response.data.errorMessage));case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}()),v=Object(m.c)({name:"creativeGallery",initialState:{menuItem:null,isDesktop:!1,isMenuVisible:!1,isOpenMenu:!1,isCloseMenu:!1,isCreatingRequest:!1,errorMessage:null},reducers:{setIsDesktop:function(e,t){e.isDesktop=t.payload},setIsMenuVisible:function(e,t){e.isMenuVisible=t.payload},setIsOpenMenu:function(e,t){e.isOpenMenu=t.payload},setIsCloseMenu:function(e,t){e.isCloseMenu=t.payload},setNavItem:function(e,t){e.menuItem=t.payload},setIsCreatingRequest:function(e,t){e.isCreatingRequest=t.payload},setErrorMessage:function(e,t){e.errorMessage=t.payload}},extraReducers:function(e){e.addCase(f.fulfilled,(function(e){e.isCreatingRequest=!1})),e.addCase(f.rejected,(function(e){e.isCreatingRequest=!1}))}}),k=v.actions,N=k.setIsDesktop,y=k.setIsMenuVisible,C=k.setIsOpenMenu,w=k.setIsCloseMenu,S=k.setNavItem,M=(k.setIsCreatingRequest,k.setErrorMessage),T=v.reducer,R=a(0),I=function(){return Object(R.jsxs)("div",{className:"logo-subcontainer",children:[Object(R.jsx)("div",{className:"logo-letter-c-outline",children:Object(R.jsx)("div",{className:"logo-letter-c-inline"})}),Object(R.jsx)("div",{className:"logo-letter-g-outline",children:Object(R.jsx)("div",{className:"logo-letter-g-inline",children:Object(R.jsx)("div",{className:"logo-letter-g-box",children:Object(R.jsx)("div",{className:"logo-letter-g-box2"})})})})]})},E=a(100),P="https://www.dropbox.com/s/x3m4bop3tn2pxjm/CV-Gerbig.pdf?dl=0",q=function(e){var t=e.path,a=e.styleClass,n=e.text,c=e.faClass,s=e.onClickHandler;return Object(R.jsx)(R.Fragment,{children:Object(R.jsx)(o.b,{to:{pathname:t},target:"_blank",rel:"noreferrer noopener",className:a,onClick:s,children:function(e,t){return e||(t?Object(R.jsx)("i",{className:"fab ".concat(t," is-white")}):"")}(n,c)})})},L=function(){var e=u((function(e){return e.creativeGallery.menuItem})),t=d(),a=Object(E.a)().t,n=function(t){return t===e?"navigation-link is-navigation-link-active":"navigation-link"};return Object(R.jsxs)("div",{className:"navigation-container",children:[Object(R.jsxs)("ul",{className:"navigation-subcontainer-left navigation-list",children:[Object(R.jsx)("li",{children:Object(R.jsx)(o.b,{to:"/about",className:n("about"),onClick:function(){t(S("about"))},children:a("link.about")})}),Object(R.jsx)("li",{children:Object(R.jsx)(o.b,{to:"/projects",className:n("projects"),onClick:function(){t(S("projects"))},children:a("link.projects")})}),Object(R.jsx)("li",{children:Object(R.jsx)(o.b,{to:"/techstack",className:n("techStack"),onClick:function(){t(S("techStack"))},children:a("link.techStack")})})]}),Object(R.jsxs)("ul",{className:"navigation-subcontainer-right navigation-list",children:[Object(R.jsx)("li",{children:Object(R.jsx)(q,{path:P,styleClass:"navigation-link",text:a("link.resume")})}),Object(R.jsx)("li",{children:Object(R.jsx)(o.b,{to:"/contact",className:n("contact"),onClick:function(){t(S("contact"))},children:a("link.contact")})})]})]})},D=a(14),G=a(15),F=function(){var e=d();return Object(R.jsx)("div",{children:Object(R.jsx)(D.a,{icon:G.a,"data-cy":"toggler",onClick:function(){e(y(!0)),e(C(!0)),setTimeout((function(){e(C(!1))}),1e3)}})})},H=function(e){return e.isDesktop?Object(R.jsx)(L,{}):Object(R.jsx)(F,{})},V=function(){var e=u((function(e){return e.creativeGallery.isDesktop})),t=d();return Object(n.useEffect)((function(){var e=function(e,t){t(e);var a=function(){t(e)};return e.addEventListener("resize",a),a}(window,(function(e){e.innerWidth>1024?t(N(!0)):t(N(!1))}));return function(){var t,a;t=window,a=e,t.removeEventListener("resize",a)}}),[]),Object(R.jsx)("div",{children:Object(R.jsx)("nav",{children:Object(R.jsxs)("div",{className:"navbar-container navbar-border",children:[Object(R.jsx)("div",{className:"logo-container",children:Object(R.jsx)(o.b,{to:"/",className:"is-text-style-plain is-white",onClick:function(){t(S("home"))},children:Object(R.jsx)(I,{})})}),Object(R.jsx)(H,{isDesktop:e})]})})})},A=function(){var e=u((function(e){return e.creativeGallery.isDesktop})),t=u((function(e){return e.creativeGallery.isMenuVisible})),a=u((function(e){return e.creativeGallery.isOpenMenu})),n=u((function(e){return e.creativeGallery.isCloseMenu})),c=d(),s=Object(E.a)().t,i=function(){c(w(!0)),setTimeout((function(){c(w(!1)),c(y(!1))}),300)},r=function(e,t){return a?"menu-link is-warning ".concat(e):n?"menu-link is-warning ".concat(t):"menu-link is-warning"};return Object(R.jsx)(R.Fragment,{children:!e&&t&&Object(R.jsxs)("div",{className:a?"menu fade-menu-in":n?"menu fade-menu-out":"menu",children:[Object(R.jsx)("div",{className:"close-menu-container",children:Object(R.jsx)(D.a,{icon:G.e,className:"close-menu is-white",onClick:i})}),Object(R.jsx)("div",{className:"menu-container",children:Object(R.jsx)("div",{className:"menu-subcontainer",children:Object(R.jsxs)("ul",{className:"navigation-list",children:[Object(R.jsx)("li",{children:Object(R.jsx)(o.b,{to:"/about",className:r("menu-link-fade-in-speed1","menu-link-fade-out-speed1"),"data-cy":"menu-about-link",onClick:i,children:s("link.about")})}),Object(R.jsx)("li",{children:Object(R.jsx)(o.b,{to:"/projects",className:r("menu-link-fade-in-speed2","menu-link-fade-out-speed2"),"data-cy":"menu-projects-link",onClick:i,children:s("link.projects")})}),Object(R.jsx)("li",{children:Object(R.jsx)(o.b,{to:"/techstack",className:r("menu-link-fade-in-speed3","menu-link-fade-out-speed3"),"data-cy":"menu-tech-stack-link",onClick:i,children:s("link.techStack")})}),Object(R.jsx)("li",{children:Object(R.jsx)(q,{path:P,styleClass:r("menu-link-fade-in-speed4","menu-link-fade-out-speed4"),text:s("link.resume"),"data-cy":"menu-resume-link",onClickHandler:i})}),Object(R.jsx)("li",{children:Object(R.jsx)(o.b,{to:"/contact",className:r("menu-link-fade-in-speed5","menu-link-fade-out-speed5"),"data-cy":"menu-contact-link",onClick:i,children:s("link.contact")})})]})})})]})})},B=function(){var e=Object(E.a)().t,t=(new Date).getFullYear();return Object(R.jsx)("div",{children:Object(R.jsx)("footer",{children:Object(R.jsxs)("div",{className:"footer-container",children:[Object(R.jsxs)("span",{className:"copyright-text",children:[" ",e("texts.footer.copyright")," ",t," ",e("texts.footer.appAuthor")," "]}),Object(R.jsxs)("ul",{className:"footer-subcontainer navigation-list",children:[Object(R.jsx)("li",{children:Object(R.jsx)(q,{path:"https://www.linkedin.com/in/christian-gerbig/",styleClass:"footer-link",faClass:"fa-linkedin"})}),Object(R.jsx)("li",{children:Object(R.jsx)(q,{path:"https://github.com/christiangerbig/",styleClass:"footer-link",faClass:"fa-github"})})]})]})})})},W=a(13),U=function(){return Object(R.jsx)("div",{className:"blur-in",children:Object(R.jsxs)("div",{className:"home-logo-subcontainer",children:[Object(R.jsx)("div",{className:"home-logo-letter-c-outline",children:Object(R.jsx)("div",{className:"home-logo-letter-c-inline"})}),Object(R.jsx)("div",{className:"home-logo-letter-g-outline",children:Object(R.jsx)("div",{className:"home-logo-letter-g-inline",children:Object(R.jsx)("div",{className:"home-logo-letter-g-box",children:Object(R.jsx)("div",{className:"home-logo-letter-g-box2"})})})})]})})},z=function(e){var t=e.headlines,a=e.borderColorName,n=t.headline,c=t.subheadline;return Object(R.jsxs)("div",{className:function(e){switch(e){case"green":return"header-text is-border-green";case"orange":return"header-text is-border-orange";case"violet":return"header-text is-border-violet";case"blue":return"header-text is-border-blue";default:return"header-text"}}(a),children:[Object(R.jsxs)("h1",{className:"is-text-large-size",children:[" ",n," "]}),Object(R.jsxs)("h2",{className:"is-text-small-size",children:[" ",c," "]})]})},J=function(){var e=Object(E.a)().t,t=W.animateScroll.scrollToTop;return Object(n.useEffect)((function(){t()}),[]),Object(R.jsxs)("div",{className:"home-page-container",children:[Object(R.jsx)(U,{}),Object(R.jsx)(z,{headlines:{headline:e("texts.home.welcome.headline"),subheadline:e("texts.home.welcome.subheadline")},borderColorName:""})]})},_=function(){var e=d(),t=Object(E.a)().t,a=W.animateScroll.scrollToTop;return Object(n.useEffect)((function(){a()}),[]),Object(R.jsxs)("div",{className:"about-page-container","data-cy":"about-page",children:[Object(R.jsx)("header",{className:"headline",children:Object(R.jsx)(z,{headlines:{headline:t("texts.about.headline"),subheadline:t("texts.about.subheadline")},borderColorName:"green"})}),Object(R.jsxs)("div",{className:"about-text-container",children:[Object(R.jsx)("div",{className:"about-text-colum-container",children:Object(R.jsxs)("article",{children:[Object(R.jsx)("header",{children:Object(R.jsx)("h3",{children:t("texts.about.personalDetails.headline")})}),Object(R.jsx)("p",{children:t("texts.about.personalDetails.paragraph1")}),Object(R.jsx)("p",{children:t("texts.about.personalDetails.paragraph2")}),Object(R.jsx)("p",{children:t("texts.about.personalDetails.paragraph3")}),Object(R.jsx)("p",{children:t("texts.about.personalDetails.paragraph4")})]})}),Object(R.jsx)("div",{className:"about-text-colum-container",children:Object(R.jsxs)("article",{children:[Object(R.jsx)("header",{children:Object(R.jsx)("h3",{children:t("texts.about.experience.headline")})}),Object(R.jsx)("p",{children:t("texts.about.experience.paragraph1")}),Object(R.jsx)("p",{children:t("texts.about.experience.paragraph2")}),Object(R.jsx)("p",{children:t("texts.about.experience.paragraph3")}),Object(R.jsx)("p",{children:t("texts.about.experience.paragraph4")}),Object(R.jsx)("p",{children:Object(R.jsx)("span",{className:"about-contact-link",onClick:function(){e(S("contact"))},children:Object(R.jsx)(o.b,{to:{pathname:"/contact"},children:t("texts.about.experience.contact")})})})]})})]})]})},K=[{projectName:"JUNGLE SWAP",projectPicturePath:a.p+"static/media/jungle-swap.04645ba1.png",projectVideoPath:"https://bliskcloudstorage.blob.core.windows.net/videos/2c9bdc9d-6b6f-4823-844c-2a2cd5c36a86/15-May-2021-13-45-637566759460450173.mp4",projectDescription:"Share your plant offshoots and make money or swap them for another plant. Shop and give a plant a new home.",deployedPath:"https://jungleswap.herokuapp.com/",gitHubClientPath:"https://github.com/christiangerbig/jungle-swap-client",gitHubServerPath:"https://github.com/christiangerbig/jungle-swap-server"},{projectName:"TRACKERTOOLS",projectPicturePath:a.p+"static/media/trackertools.cdf33462.png",projectVideoPath:"https://bliskcloudstorage.blob.core.windows.net/videos/2c9bdc9d-6b6f-4823-844c-2a2cd5c36a86/15-May-2021-13-35-637566753722531829.mp4",projectDescription:"Four powerful tools to make working with the music editor Protracker and its modules more comfortable.",deployedPath:"https://trackertools.herokuapp.com/",gitHubClientPath:"https://github.com/christiangerbig/Trackertools",gitHubServerPath:""},{projectName:"LETTER SHOOTER",projectPicturePath:a.p+"static/media/letter-shooter.a0667b69.png",projectVideoPath:"https://bliskcloudstorage.blob.core.windows.net/videos/2c9bdc9d-6b6f-4823-844c-2a2cd5c36a86/15-May-2021-14-10-637566774755686276.mp4",projectDescription:"A coordination and strategy game with the goal to hit the missing letters with precise shots.",deployedPath:"https://christiangerbig.github.io/letter-shooter/",gitHubClientPath:"https://github.com/christiangerbig/letter-shooter",gitHubServerPath:""}],Y=function(e){var t=e.projectItem,a=Object(E.a)().t,n=t.projectName,c=t.projectPicturePath,s=t.projectVideoPath,i=t.projectDescription,r=t.deployedPath,o=t.gitHubClientPath,l=t.gitHubServerPath;return Object(R.jsxs)("div",{className:"project-details-container",children:[Object(R.jsx)("video",{width:"320",height:"200",muted:!0,controls:!0,poster:c,src:s}),Object(R.jsx)("div",{className:"project-description",children:Object(R.jsxs)("article",{children:[Object(R.jsx)("header",{children:Object(R.jsx)("h2",{children:n})}),Object(R.jsx)("div",{className:"project-description-container",children:Object(R.jsx)("p",{children:i})})]})}),Object(R.jsxs)("div",{className:"project-links-container",children:[Object(R.jsx)("div",{children:Object(R.jsx)(q,{path:r,styleClass:"project-try-it-link",text:a("link.startApp")})}),Object(R.jsx)("div",{children:Object(R.jsx)(q,{path:o,styleClass:"project-github-link",text:a("link.gitHubClient")})}),l&&Object(R.jsx)("div",{children:Object(R.jsx)(q,{path:l,styleClass:"project-github-link",text:a("link.gitHubServer")})})]})]})},Q=function(){var e=Object(E.a)().t,t=W.animateScroll.scrollToTop;return Object(n.useEffect)((function(){t()}),[]),Object(R.jsxs)("div",{className:"projects-page-container","data-cy":"projects-page",children:[Object(R.jsx)("header",{className:"headline",children:Object(R.jsx)(z,{headlines:{headline:e("texts.projects.headline"),subheadline:e("texts.projects.subheadline")},borderColorName:"orange"})}),Object(R.jsx)("div",{className:"projects-container",children:K.map((function(e,t){return Object(R.jsx)(Y,{projectItem:e},"".concat(e.projectName).concat(t.toString()))}))})]})},X=a.p+"static/media/Bootstrap-Logo.527d0fc0.svg",Z=a.p+"static/media/Bulma-Logo.ecefb4da.svg",$=a.p+"static/media/Cloudinary-Logo.df0c0e93.svg",ee=a.p+"static/media/Cypress-Logo.071c7e70.svg",te=a.p+"static/media/GitHub-Logo.11619ac0.svg",ae=a.p+"static/media/GitLab-Logo.83df9efb.svg",ne=a.p+"static/media/JavaScript(ES6)-Logo.a309520a.svg",ce=a.p+"static/media/MongoDB-Logo.153b7b44.svg",se=a.p+"static/media/NodeJS-Logo.5a3a9ca2.svg",ie=a.p+"static/media/NPM-Logo.5620a716.svg",re=a.p+"static/media/React-Logo.ae626225.svg",oe=a.p+"static/media/Redux-Logo.a9567540.svg",le=a.p+"static/media/Sass-Logo.8351205a.svg",de=a.p+"static/media/TypeScript-Logo.17d5e87e.svg",ue=a.p+"static/media/Visual-Studio-Code-Logo.f57bbf46.svg",je=a.p+"static/media/Vue.js-Logo.4921ee76.svg",be=a.p+"static/media/Webstorm-Logo.6cac5400.svg",he=[re,oe,je,se,ne,de,le,ee,X,Z,ce,$,ie,a.p+"static/media/Yarn-Logo.20176999.svg",te,ae,ue,be],me=function(){var e=Object(E.a)().t,t=W.animateScroll.scrollToTop;return Object(n.useEffect)((function(){t()}),[]),Object(R.jsxs)("div",{className:"tech-stack-page-container","data-cy":"tech-stack-page",children:[Object(R.jsx)("header",{className:"headline",children:Object(R.jsx)(z,{headlines:{headline:e("texts.techStack.headline"),subheadline:e("texts.techStack.subheadline")},borderColorName:"violet"})}),Object(R.jsx)("div",{className:"tech-stack-logos-container",children:he.map((function(e,t){return Object(R.jsx)("div",{className:"tech-stack-logo",children:Object(R.jsx)("img",{src:e,loading:"lazy",alt:"firm logo"},"".concat(e).concat(t.toString()))})}))})]})},pe=function(e){var t=e.message,a=e.outputFunction;return t&&t.includes("Form")?Object(R.jsx)(R.Fragment,{children:Object(R.jsx)("span",{className:"error-output is-danger",children:a(t)})}):null},xe=function(e){var t=e.path,a=e.styleClass,n=e.text;return Object(R.jsx)(R.Fragment,{children:Object(R.jsx)("span",{className:a,children:Object(R.jsx)(o.b,{to:{pathname:t},target:"_blank",children:Object(R.jsx)("h4",{children:n})})})})},ge=function(e){var t=e.isCreatingRequest,a=e.handleSubmitRequest,n=Object(E.a)().t;return Object(R.jsx)(R.Fragment,{children:Object(R.jsxs)("form",{onSubmit:function(e){a(e)},children:[Object(R.jsx)("input",{type:"email",name:n("texts.contact.createRequest.form.inputEmail"),placeholder:"email",className:"form-input"}),Object(R.jsx)("input",{type:"text",name:n("texts.contact.createRequest.form.inputSubject"),placeholder:"subject",className:"form-input"}),Object(R.jsx)("textarea",{name:"message",placeholder:n("texts.contact.createRequest.form.inputMessage"),cols:35,rows:7,className:"form-textarea"}),Object(R.jsx)("button",{type:"submit",disabled:!!t,formNoValidate:!0,className:"form-submit",children:n("button.submit")})]})})},Oe=function(){var e=u((function(e){return e.creativeGallery.isCreatingRequest})),t=u((function(e){return e.creativeGallery.errorMessage})),a=d(),c=Object(r.f)().push,s=function(){var e=d();return{createRequest:function(t,a){e(f(t)).unwrap().then((function(){a()})).catch((function(t){e(M(t.message))}))}}}().createRequest,i=Object(E.a)().t,o=W.animateScroll.scrollToTop;Object(n.useEffect)((function(){a(M(null)),o()}),[]);return Object(R.jsxs)("div",{className:"contact-page-container","data-cy":"contact-page",children:[Object(R.jsx)("header",{className:"headline",children:Object(R.jsx)(z,{headlines:{headline:i("texts.contact.headline"),subheadline:i("texts.contact.subheadline")},borderColorName:"blue"})}),Object(R.jsxs)("div",{className:"contact-container",children:[Object(R.jsx)("h1",{children:i("texts.contact.name")}),Object(R.jsx)("h2",{children:i("texts.contact.jobname")}),Object(R.jsxs)("div",{className:"contact-ways-container",children:[Object(R.jsxs)("div",{className:"contact-email-container",children:[Object(R.jsxs)("h3",{children:[Object(R.jsx)(D.a,{icon:G.b})," ",i("texts.contact.email")]}),Object(R.jsx)(xe,{path:"mailto:chr_gerbig@web.de",styleClass:"contact-link",text:"chr_gerbig(at)web.de"})]}),Object(R.jsxs)("div",{className:"contact-phone-container",children:[Object(R.jsxs)("h3",{children:[Object(R.jsx)(D.a,{icon:G.c})," ",i("texts.contact.phone")]}),Object(R.jsx)(xe,{path:"tel:+4915154824288",styleClass:"contact-link",text:"+49\xa0151\xa0548\xa0242\xa088"})]})]}),Object(R.jsx)("div",{children:Object(R.jsxs)("h3",{children:[Object(R.jsx)(D.a,{icon:G.d})," ",i("texts.contact.submit")]})}),Object(R.jsx)(pe,{message:t,outputFunction:function(e){switch(e){case"Form: Email missing":return i("errorTexts.createRequest.form.emailMissing");case"Form: Subject missing":return i("errorTexts.createRequest.form.subjectMissing");case"Form: Message missing":return i("errorTexts.createRequest.form.messageMissing");case"Form: Email format invalid":return i("errorTexts.createRequest.form.emailFormatInvalid");default:return i("errorTexts.general")}}}),Object(R.jsx)(ge,{isCreatingRequest:e,handleSubmitRequest:function(e){var t=e.target,n=t.email,i=t.subject,r=t.message,o={email:n.value,subject:i.value,message:r.value};e.preventDefault(),s(o,(function(){a(S("home")),c("/")}))}})]})]})},fe=function(){var e=Object(E.a)().t;return Object(R.jsxs)("div",{className:"page-not-found-container",children:[Object(R.jsx)("header",{className:"headline",children:Object(R.jsx)(z,{headlines:{headline:e("texts.pageNotFound.headline"),subheadline:e("texts.pageNotFound.subheadline")},borderColorName:"orange"})}),Object(R.jsx)("div",{className:"page-not-found-get-back-container",children:Object(R.jsx)(o.b,{to:"/",className:"page-not-found-get-back-link",children:e("link.getBack")})})]})},ve=a(55),ke=function(e){var t=e.headline,a=e.text,c=e.isClose,s=Object(n.useRef)(null),i=d(),r=Object(E.a)().t,o=function(){i(M(null))};return Object(R.jsx)("div",{ref:s,className:"error-modal fade-error-modal-in",onClick:function(e){c&&function(e){s.current===e.target&&o()}(e)},children:Object(R.jsxs)("div",{className:"error-modal-box",children:[Object(R.jsx)("h1",{children:t}),Object(R.jsx)("h2",{children:a}),c&&Object(R.jsx)("button",{className:"error-modal-button mt-4 mb-3",onClick:o,children:r("button.proceed")})]})})},Ne=function(e){var t=e.message,a=Object(E.a)().t;return!t||t.includes("Form")?null:Object(R.jsx)("div",{children:Object(R.jsx)(ke,{headline:a("errorModal.headline"),text:function(e){switch(e){case"Create request failed":return a("errorTexts.createRequest.createRequestFailed");default:return a("errors.general")}}(t),isClose:!0})})},ye=function(e){var t=e.isOnline,a=Object(E.a)().t;return t?null:Object(R.jsx)("div",{children:Object(R.jsx)(ke,{headline:a("texts.offlineModal.headline"),text:a("errorTexts.offline"),isClose:!1})})},Ce=function(){var e=u((function(e){return e.creativeGallery.errorMessage})),t=function(){var e=Object(n.useState)(!0),t=Object(ve.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){var e=function(){c(!1)},t=function(){c(!0)};return window.addEventListener("offline",e),window.addEventListener("online",t),function(){window.removeEventListener("offline",e),window.removeEventListener("online",t)}}),[]),a}();return t?Object(R.jsx)(Ne,{message:e}):Object(R.jsx)(ye,{isOnline:t})},we=(a(97),Object(r.g)((function(){return Object(R.jsxs)("div",{children:[Object(R.jsx)(V,{}),Object(R.jsx)(A,{}),Object(R.jsxs)(r.c,{children:[Object(R.jsx)(r.a,{exact:!0,path:"/",children:Object(R.jsx)(J,{})}),Object(R.jsx)(r.a,{path:"/about",children:Object(R.jsx)(_,{})}),Object(R.jsx)(r.a,{path:"/projects",children:Object(R.jsx)(Q,{})}),Object(R.jsx)(r.a,{path:"/techstack",children:Object(R.jsx)(me,{})}),Object(R.jsx)(r.a,{path:"/contact",children:Object(R.jsx)(Oe,{})}),Object(R.jsx)(r.a,{component:fe})]}),Object(R.jsx)(Ce,{}),Object(R.jsx)(B,{})]})}))),Se=Object(m.a)({reducer:{creativeGallery:T}}),Me=(a(98),a(37)),Te=a(22),Re={translations:{link:{about:"ABOUT",projects:"PROJECTS",techStack:"TECHSTACK",resume:"RESUME",contact:"CONTACT",startApp:"TRY IT",gitHubClient:"GIT HUB",gitHubServer:"GIT HUB 2",getBack:"GET BACK"},button:{submit:"SUBMIT",proceed:"PROCEED"},texts:{home:{welcome:{headline:"Hi, I'm Christian",subheadline:"A passionate Web Developer"}},about:{headline:"There is only one way",subheadline:"Straight forward",personalDetails:{headline:"Hi,",paragraph1:"I'm Christian Gerbig. I'm a Web Developer focused on Frontend and Backend technologies. My homebase is Hamburg in Germany.",paragraph2:"I believe in the positive power of communication with a trust in cooperative team working making an asset from sharing different points of views.",paragraph3:"I like to use every aspect of new technology available to reach the goals and love to code optimized solutions suiting individual requirements with respect to time, budget and target.",paragraph4:"My motto: Learning things, improving (them) and reach the goals."},experience:{headline:"How it began",paragraph1:"I started to learn the fundamentals of Web Development by myself and as a Full Stack Web Developper at Ironhack.",paragraph2:"I improved my skills to write Clean Code and learned in several Udemy courses to apply the Redux Toolkit and TypeScript together with React in my projects.",paragraph3:"Meanwhile I dived more into agile work as a trainee developer and learned to use Vue together with Vuex and wrote end-2-end tests for Cypress.",paragraph4:"I would like to become part of a team where I can apply, develop and share my skills.",contact:"Let's get in touch."}},projects:{headline:"My Web Developer projects",subheadline:"I was working on"},techStack:{headline:"The tech stack",subheadline:"I use"},contact:{headline:"Don't hesitate",subheadline:"to contact me",name:"Christian Gerbig",jobname:"Web Developer",email:"e-mail",phone:"phone",submit:"or write me",createRequest:{form:{inputEmail:"email",inputSubject:"subject",inputMessage:"message"}}},pageNotFound:{headline:"ERROR 404",subheadline:"Page not found"},footer:{copyright:"\xa9",appAuthor:"Christian Gerbig"},errorModal:{headline:"SOMETHING WENT WRONG"},offlineModal:{headline:"CAUTION"}},errorTexts:{createRequest:{form:{emailMissing:"Please enter an email",subjectMissing:"Please enter a subject",messageMissing:"Please enter a message",emailFormatInvalid:"The email format is invalid"},createRequestFailed:"Creating the request failed"},offline:"No internet connection",general:"An error occured"}}};Me.a.use(Te.e).init({resources:{en:Re},fallbackLng:"en",debug:!1,ns:["translations"],defaultNS:"translations",interpolation:{escapeValue:!1}});Me.a;i.a.render(Object(R.jsx)(c.a.StrictMode,{children:Object(R.jsx)(l.a,{store:Se,children:Object(R.jsx)(o.a,{children:Object(R.jsx)(we,{})})})}),document.querySelector("#root"))}},[[99,1,2]]]);
//# sourceMappingURL=main.88049018.chunk.js.map