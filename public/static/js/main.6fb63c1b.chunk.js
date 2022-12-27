(this["webpackJsonpcreative-gallery-client"]=this["webpackJsonpcreative-gallery-client"]||[]).push([[0],{104:function(e,t,c){},105:function(e,t,c){},106:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(20),i=c.n(s),r=c(5),o=c(4),l=c(107),j=c(22),d=function(){return Object(j.b)()},u=j.c,b=c(38),h=c.n(b),m=c(54),x=c(23),p=c(55),g=c.n(p),O="".concat("https://creativegallery.herokuapp.com","/api"),f=function(e){throw new Error(e)},v=Object(x.b)("creativeGallery/createRequest",function(){var e=Object(m.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.post("".concat(O,"/request/create"),t);case 3:e.next=8;break;case 5:return e.prev=5,e.t0=e.catch(0),e.abrupt("return",f(e.t0.response.data.errorMessage));case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}()),N=Object(x.c)({name:"creativeGallery",initialState:{menuItem:null,isDesktop:!1,isMenuVisible:!1,isOpenMenu:!1,isCloseMenu:!1,isCreatingRequest:!1,errorMessage:null},reducers:{setIsDesktop:function(e,t){var c=t.payload;e.isDesktop=c},setIsMenuVisible:function(e,t){var c=t.payload;e.isMenuVisible=c},setIsOpenMenu:function(e,t){var c=t.payload;e.isOpenMenu=c},setIsCloseMenu:function(e,t){var c=t.payload;e.isCloseMenu=c},setNavItem:function(e,t){var c=t.payload;e.menuItem=c},setIsCreatingRequest:function(e,t){var c=t.payload;e.isCreatingRequest=c},setErrorMessage:function(e,t){var c=t.payload;e.errorMessage=c}},extraReducers:function(e){e.addCase(v.fulfilled,(function(e){e.isCreatingRequest=!1})),e.addCase(v.rejected,(function(e){e.isCreatingRequest=!1}))}}),k=function(e){return e.creativeGallery.menuItem},C=function(e){return e.creativeGallery.isDesktop},y=function(e){return e.creativeGallery.isMenuVisible},w=function(e){return e.creativeGallery.isOpenMenu},S=function(e){return e.creativeGallery.isCloseMenu},M=function(e){return e.creativeGallery.isCreatingRequest},L=function(e){return e.creativeGallery.errorMessage},R=N.actions,q=R.setIsDesktop,P=R.setIsMenuVisible,T=R.setIsOpenMenu,E=R.setIsCloseMenu,D=R.setNavItem,F=(R.setIsCreatingRequest,R.setErrorMessage),I=k,H=C,V=y,G=w,z=S,B=M,J=L,A=N.reducer,_=c(0),W=function(){return Object(_.jsxs)("div",{className:"logo-subcontainer",children:[Object(_.jsx)("div",{className:"logo-letter-c-outline",children:Object(_.jsx)("div",{className:"logo-letter-c-inline"})}),Object(_.jsx)("div",{className:"logo-letter-g-outline",children:Object(_.jsx)("div",{className:"logo-letter-g-inline",children:Object(_.jsx)("div",{className:"logo-letter-g-box",children:Object(_.jsx)("div",{className:"logo-letter-g-box2"})})})})]})},Y="https://www.dropbox.com/s/x3m4bop3tn2pxjm/CV-Gerbig.pdf?dl=0",K=function(e){var t=e.path,c=e.styleClass,a=e.text,n=e.faClass,s=e.closeMenuHandler;return Object(_.jsx)(_.Fragment,{children:Object(_.jsx)(o.b,{to:{pathname:t},target:"_blank",rel:"noreferrer noopener",className:c,onClick:s,children:function(e,t){return e||(t?Object(_.jsx)("i",{className:"fab ".concat(t," is-white")}):"")}(a,n)})})},Q=function(e){var t=e.styleClass,c=e.closeMenuHandler,a=Object(l.a)(),n=a.t,s=a.i18n;return Object(_.jsx)("div",{children:Object(_.jsxs)("select",{className:t,"data-cy":"menu-select-language",onChange:function(e){!function(e){var t=e.target.value;s.changeLanguage(t),"undefined"!==typeof c&&c()}(e)},children:[Object(_.jsx)("option",{value:"",children:n("select.language.placeholder")}),Object(_.jsx)("option",{value:"de",children:n("select.language.german")}),Object(_.jsx)("option",{value:"en",children:n("select.language.english")})]})})},U=function(){var e=u(I),t=d(),c=Object(l.a)().t,a=function(t){return t===e?"navigation-link is-navigation-link-active":"navigation-link"};return Object(_.jsxs)("div",{className:"navigation-container",children:[Object(_.jsxs)("ul",{className:"navigation-subcontainer-left navigation-list",children:[Object(_.jsx)("li",{children:Object(_.jsx)(o.b,{to:"/about",className:a("about"),onClick:function(){t(D("about"))},children:c("link.about")})}),Object(_.jsx)("li",{children:Object(_.jsx)(o.b,{to:"/projects",className:a("projects"),onClick:function(){t(D("projects"))},children:c("link.projects")})}),Object(_.jsx)("li",{children:Object(_.jsx)(o.b,{to:"/techstack",className:a("techStack"),onClick:function(){t(D("techStack"))},children:c("link.techStack")})})]}),Object(_.jsxs)("ul",{className:"navigation-subcontainer-right navigation-list",children:[Object(_.jsx)("li",{children:Object(_.jsx)(K,{path:Y,styleClass:"navigation-link",text:c("link.resume")})}),Object(_.jsx)("li",{children:Object(_.jsx)(o.b,{to:"/contact",className:a("contact"),onClick:function(){t(D("contact"))},children:c("link.contact")})}),Object(_.jsx)("li",{children:Object(_.jsx)(Q,{styleClass:"select-language"})})]})]})},X=c(16),Z=c(17),$=function(){var e=d();return Object(_.jsx)("div",{children:Object(_.jsx)(X.a,{icon:Z.a,"data-cy":"toggler",onClick:function(){e(P(!0)),e(T(!0)),setTimeout((function(){e(T(!1))}),1e3)}})})},ee=function(e){return e.isDesktop?Object(_.jsx)(U,{}):Object(_.jsx)($,{})},te=function(){var e=u(H),t=d(),c=Object(l.a)().i18n;return Object(a.useEffect)((function(){var e=function(){window.innerWidth>1024?t(q(!0)):t(q(!1))};window.addEventListener("resize",e),e();var a=c.resolvedLanguage;return c.changeLanguage(a),function(){window.removeEventListener("resize",e)}}),[]),Object(_.jsx)("div",{children:Object(_.jsx)("nav",{children:Object(_.jsxs)("div",{className:"navbar-container navbar-border",children:[Object(_.jsx)("div",{className:"logo-container",children:Object(_.jsx)(o.b,{to:"/",className:"is-text-style-plain is-white",onClick:function(){t(D("home"))},children:Object(_.jsx)(W,{})})}),Object(_.jsx)(ee,{isDesktop:e})]})})})},ce=function(){var e=u(H),t=u(V),c=u(G),a=u(z),n=d(),s=Object(l.a)().t,i=function(){n(E(!0)),setTimeout((function(){n(E(!1)),n(P(!1))}),300)},r=function(e,t){return c?"menu-item is-warning ".concat(e):a?"menu-item is-warning ".concat(t):"menu-item is-warning"};return e||!t?null:Object(_.jsx)(_.Fragment,{children:Object(_.jsxs)("div",{className:c?"menu fade-menu-in":a?"menu fade-menu-out":"menu",children:[Object(_.jsx)("div",{className:"close-menu-container",children:Object(_.jsx)(X.a,{icon:Z.e,className:"close-menu is-white",onClick:i})}),Object(_.jsx)("div",{className:"menu-container",children:Object(_.jsx)("div",{className:"menu-subcontainer",children:Object(_.jsxs)("ul",{className:"navigation-list",children:[Object(_.jsx)("li",{children:Object(_.jsx)(o.b,{to:"/about",className:r("menu-item-fade-in-speed1","menu-item-fade-out-speed1"),"data-cy":"menu-about-link",onClick:i,children:s("link.about")})}),Object(_.jsx)("li",{children:Object(_.jsx)(o.b,{to:"/projects",className:r("menu-item-fade-in-speed2","menu-item-fade-out-speed2"),"data-cy":"menu-projects-link",onClick:i,children:s("link.projects")})}),Object(_.jsx)("li",{children:Object(_.jsx)(o.b,{to:"/techstack",className:r("menu-item-fade-in-speed3","menu-item-fade-out-speed3"),"data-cy":"menu-techstack-link",onClick:i,children:s("link.techStack")})}),Object(_.jsx)("li",{"data-cy":"menu-resume-link",children:Object(_.jsx)(K,{path:Y,styleClass:r("menu-item-fade-in-speed4","menu-item-fade-out-speed4"),text:s("link.resume"),closeMenuHandler:i})}),Object(_.jsx)("li",{children:Object(_.jsx)(o.b,{to:"/contact",className:r("menu-item-fade-in-speed5","menu-item-fade-out-speed5"),"data-cy":"menu-contact-link",onClick:i,children:s("link.contact")})}),Object(_.jsx)("li",{children:Object(_.jsx)(Q,{styleClass:"".concat(r("menu-item-fade-in-speed6","menu-item-fade-out-speed6")," menu-select-language"),closeMenuHandler:i})})]})})})]})})},ae=function(){var e=Object(l.a)().t,t=(new Date).getFullYear();return Object(_.jsx)("div",{children:Object(_.jsx)("footer",{children:Object(_.jsxs)("div",{className:"footer-container",children:[Object(_.jsxs)("span",{className:"copyright-text",children:[" ",e("texts.footer.copyright")," ",t," ",e("texts.footer.appAuthor")," "]}),Object(_.jsxs)("ul",{className:"footer-subcontainer navigation-list",children:[Object(_.jsx)("li",{children:Object(_.jsx)(K,{path:"https://www.linkedin.com/in/christian-gerbig/",styleClass:"footer-link",faClass:"fa-linkedin"})}),Object(_.jsx)("li",{children:Object(_.jsx)(K,{path:"https://github.com/christiangerbig/",styleClass:"footer-link",faClass:"fa-github"})})]})]})})})},ne=c(15),se=function(){return Object(_.jsx)("div",{className:"blur-in",children:Object(_.jsxs)("div",{className:"home-logo-subcontainer",children:[Object(_.jsx)("div",{className:"home-logo-letter-c-outline",children:Object(_.jsx)("div",{className:"home-logo-letter-c-inline"})}),Object(_.jsx)("div",{className:"home-logo-letter-g-outline",children:Object(_.jsx)("div",{className:"home-logo-letter-g-inline",children:Object(_.jsx)("div",{className:"home-logo-letter-g-box",children:Object(_.jsx)("div",{className:"home-logo-letter-g-box2"})})})})]})})},ie=function(e){var t=e.headlines,c=t.headline,a=t.subheadline,n=e.borderColorName;return Object(_.jsxs)("div",{className:function(e){switch(e){case"green":return"header-text is-border-green";case"orange":return"header-text is-border-orange";case"violet":return"header-text is-border-violet";case"blue":return"header-text is-border-blue";default:return"header-text"}}(n),children:[Object(_.jsxs)("h1",{className:"is-text-large-size",children:[" ",c," "]}),Object(_.jsxs)("h2",{className:"is-text-small-size",children:[" ",a," "]})]})},re=function(){var e=Object(l.a)().t,t=ne.animateScroll.scrollToTop;return Object(a.useEffect)((function(){t()}),[]),Object(_.jsxs)("div",{className:"home-page-container",children:[Object(_.jsx)(se,{}),Object(_.jsx)(ie,{headlines:{headline:e("texts.home.welcome.headline"),subheadline:e("texts.home.welcome.subheadline")},borderColorName:""})]})},oe=function(){var e=d(),t=Object(l.a)().t,c=ne.animateScroll.scrollToTop;return Object(a.useEffect)((function(){c()}),[]),Object(_.jsxs)("div",{className:"about-page-container","data-cy":"about-page",children:[Object(_.jsx)("header",{className:"headline",children:Object(_.jsx)(ie,{headlines:{headline:t("texts.about.headline"),subheadline:t("texts.about.subheadline")},borderColorName:"green"})}),Object(_.jsxs)("div",{className:"about-text-container",children:[Object(_.jsx)("div",{className:"about-text-colum-container",children:Object(_.jsxs)("article",{children:[Object(_.jsx)("header",{children:Object(_.jsx)("h3",{children:t("texts.about.personalDetails.headline")})}),Object(_.jsx)("p",{children:t("texts.about.personalDetails.paragraph1")}),Object(_.jsx)("p",{children:t("texts.about.personalDetails.paragraph2")}),Object(_.jsx)("p",{children:t("texts.about.personalDetails.paragraph3")}),Object(_.jsx)("p",{children:t("texts.about.personalDetails.paragraph4")})]})}),Object(_.jsx)("div",{className:"about-text-colum-container",children:Object(_.jsxs)("article",{children:[Object(_.jsx)("header",{children:Object(_.jsx)("h3",{children:t("texts.about.experience.headline")})}),Object(_.jsx)("p",{children:t("texts.about.experience.paragraph1")}),Object(_.jsx)("p",{children:t("texts.about.experience.paragraph2")}),Object(_.jsx)("p",{children:t("texts.about.experience.paragraph3")}),Object(_.jsx)("p",{children:t("texts.about.experience.paragraph4")}),Object(_.jsx)("p",{children:Object(_.jsx)("span",{className:"about-contact-link",onClick:function(){e(D("contact"))},children:Object(_.jsx)(o.b,{to:{pathname:"/contact"},children:t("texts.about.experience.contact")})})})]})})]})]})},le=[{projectName:"texts.projects.jungleSwap.name",projectPicturePath:c.p+"static/media/jungle-swap.04645ba1.png",projectVideoPath:"https://bliskcloudstorage.blob.core.windows.net/videos/2c9bdc9d-6b6f-4823-844c-2a2cd5c36a86/15-May-2021-13-45-637566759460450173.mp4",projectDescription:"texts.projects.jungleSwap.description",deployedPath:"https://jungleswap.herokuapp.com/",gitHubClientPath:"https://github.com/christiangerbig/jungle-swap-client",gitHubServerPath:"https://github.com/christiangerbig/jungle-swap-server"},{projectName:"texts.projects.trackerTools.name",projectPicturePath:c.p+"static/media/trackertools.cdf33462.png",projectVideoPath:"https://bliskcloudstorage.blob.core.windows.net/videos/2c9bdc9d-6b6f-4823-844c-2a2cd5c36a86/15-May-2021-13-35-637566753722531829.mp4",projectDescription:"texts.projects.trackerTools.description",deployedPath:"https://trackertools.herokuapp.com/",gitHubClientPath:"https://github.com/christiangerbig/Trackertools",gitHubServerPath:""},{projectName:"texts.projects.letterShooter.name",projectPicturePath:c.p+"static/media/letter-shooter.a0667b69.png",projectVideoPath:"https://bliskcloudstorage.blob.core.windows.net/videos/2c9bdc9d-6b6f-4823-844c-2a2cd5c36a86/15-May-2021-14-10-637566774755686276.mp4",projectDescription:"texts.projects.letterShooter.description",deployedPath:"https://christiangerbig.github.io/letter-shooter/",gitHubClientPath:"https://github.com/christiangerbig/letter-shooter",gitHubServerPath:""}],je=function(e){var t=e.projectItem,c=t.projectName,a=t.projectPicturePath,n=t.projectVideoPath,s=t.projectDescription,i=t.deployedPath,r=t.gitHubClientPath,o=t.gitHubServerPath,j=Object(l.a)().t;return Object(_.jsxs)("div",{className:"project-details-container",children:[Object(_.jsx)("video",{width:"320",height:"170",muted:!0,controls:!0,poster:a,src:n}),Object(_.jsx)("div",{className:"project-description",children:Object(_.jsxs)("article",{children:[Object(_.jsx)("header",{children:Object(_.jsx)("h2",{children:j(c)})}),Object(_.jsx)("div",{className:"project-description-container",children:Object(_.jsx)("p",{children:j(s)})})]})}),Object(_.jsxs)("div",{className:"project-links-container",children:[Object(_.jsx)("div",{children:Object(_.jsx)(K,{path:i,styleClass:"project-try-it-link",text:j("link.startApp")})}),Object(_.jsx)("div",{children:Object(_.jsx)(K,{path:r,styleClass:"project-github-link",text:j("link.gitHubClient")})}),o&&Object(_.jsx)("div",{children:Object(_.jsx)(K,{path:o,styleClass:"project-github-link",text:j("link.gitHubServer")})})]})]})},de=function(){var e=Object(l.a)().t,t=ne.animateScroll.scrollToTop;return Object(a.useEffect)((function(){t()}),[]),Object(_.jsxs)("div",{className:"projects-page-container","data-cy":"projects-page",children:[Object(_.jsx)("header",{className:"headline",children:Object(_.jsx)(ie,{headlines:{headline:e("texts.projects.headline"),subheadline:e("texts.projects.subheadline")},borderColorName:"orange"})}),Object(_.jsx)("div",{className:"projects-container",children:le.map((function(e,t){return Object(_.jsx)(je,{projectItem:e},"".concat(e.projectName).concat(t.toString()))}))})]})},ue=c.p+"static/media/Bootstrap-Logo.527d0fc0.svg",be=c.p+"static/media/Bulma-Logo.ecefb4da.svg",he=c.p+"static/media/Cloudinary-Logo.df0c0e93.svg",me=c.p+"static/media/Cypress-Logo.071c7e70.svg",xe=c.p+"static/media/GitHub-Logo.11619ac0.svg",pe=c.p+"static/media/GitLab-Logo.83df9efb.svg",ge=c.p+"static/media/JavaScript(ES6)-Logo.a309520a.svg",Oe=c.p+"static/media/MongoDB-Logo.153b7b44.svg",fe=c.p+"static/media/NodeJS-Logo.5a3a9ca2.svg",ve=c.p+"static/media/NPM-Logo.5620a716.svg",Ne=c.p+"static/media/React-Logo.ae626225.svg",ke=c.p+"static/media/Redux-Logo.a9567540.svg",Ce=c.p+"static/media/Sass-Logo.8351205a.svg",ye=c.p+"static/media/TypeScript-Logo.17d5e87e.svg",we=c.p+"static/media/Visual-Studio-Code-Logo.f57bbf46.svg",Se=c.p+"static/media/Vue.js-Logo.4921ee76.svg",Me=c.p+"static/media/Webstorm-Logo.6cac5400.svg",Le=[Ne,ke,Se,fe,ge,ye,Ce,me,ue,be,Oe,he,ve,c.p+"static/media/Yarn-Logo.20176999.svg",xe,pe,we,Me],Re=function(){var e=Object(l.a)().t,t=ne.animateScroll.scrollToTop;return Object(a.useEffect)((function(){t()}),[]),Object(_.jsxs)("div",{className:"tech-stack-page-container","data-cy":"tech-stack-page",children:[Object(_.jsx)("header",{className:"headline",children:Object(_.jsx)(ie,{headlines:{headline:e("texts.techStack.headline"),subheadline:e("texts.techStack.subheadline")},borderColorName:"violet"})}),Object(_.jsx)("div",{className:"tech-stack-logos-container",children:Le.map((function(e,t){return Object(_.jsx)("div",{className:"tech-stack-logo",children:Object(_.jsx)("img",{src:e,loading:"lazy",alt:"firm logo"},"".concat(e).concat(t.toString()))})}))})]})},qe=function(e){var t=e.message,c=e.outputFunction;return t&&t.includes("Form")?Object(_.jsx)(_.Fragment,{children:Object(_.jsx)("span",{className:"error-output is-danger",children:c(t)})}):null},Pe=function(e){var t=e.path,c=e.styleClass,a=e.text;return Object(_.jsx)(_.Fragment,{children:Object(_.jsx)("span",{className:c,children:Object(_.jsx)(o.b,{to:{pathname:t},target:"_blank",children:Object(_.jsx)("h4",{className:"is-text-nowrap",children:a})})})})},Te=function(e){var t=e.isCreatingRequest,c=e.handleSubmitRequest,a=Object(l.a)().t;return Object(_.jsx)(_.Fragment,{children:Object(_.jsxs)("form",{onSubmit:function(e){c(e)},children:[Object(_.jsx)("input",{type:"email",name:"email",placeholder:a("texts.contact.createRequest.form.inputEmail"),className:"form-input"}),Object(_.jsx)("input",{type:"text",name:"subject",placeholder:a("texts.contact.createRequest.form.inputSubject"),className:"form-input"}),Object(_.jsx)("textarea",{name:"message",placeholder:a("texts.contact.createRequest.form.inputMessage"),cols:35,rows:7,className:"form-textarea"}),Object(_.jsx)("button",{type:"submit",disabled:!!t,formNoValidate:!0,className:"form-submit",children:a("button.submit")})]})})},Ee=function(){var e=u(B),t=u(J),c=d(),n=Object(r.f)().push,s=function(){var e=d();return{createRequest:function(t,c){e(v(t)).unwrap().then((function(){c()})).catch((function(t){e(F(t.message))}))}}}().createRequest,i=Object(l.a)().t,o=ne.animateScroll.scrollToTop;Object(a.useEffect)((function(){c(F(null)),o()}),[]);return Object(_.jsxs)("div",{className:"contact-page-container","data-cy":"contact-page",children:[Object(_.jsx)("header",{className:"headline",children:Object(_.jsx)(ie,{headlines:{headline:i("texts.contact.headline"),subheadline:i("texts.contact.subheadline")},borderColorName:"blue"})}),Object(_.jsxs)("div",{className:"contact-container",children:[Object(_.jsx)("h1",{children:i("texts.contact.name")}),Object(_.jsx)("h2",{children:i("texts.contact.jobname")}),Object(_.jsxs)("div",{className:"contact-ways-container",children:[Object(_.jsxs)("div",{className:"contact-email-container",children:[Object(_.jsxs)("h3",{children:[Object(_.jsx)(X.a,{icon:Z.b})," ",i("texts.contact.email")]}),Object(_.jsx)(Pe,{path:"mailto:chr_gerbig@web.de",styleClass:"contact-link",text:i("texts.contact.emailAddress")})]}),Object(_.jsxs)("div",{className:"contact-phone-container",children:[Object(_.jsxs)("h3",{children:[Object(_.jsx)(X.a,{icon:Z.c})," ",i("texts.contact.phone")]}),Object(_.jsx)(Pe,{path:"tel:+4915154824288",styleClass:"contact-link",text:i("texts.contact.phoneNumber")})]})]}),Object(_.jsx)("div",{children:Object(_.jsxs)("h3",{children:[Object(_.jsx)(X.a,{icon:Z.d})," ",i("texts.contact.submit")]})}),Object(_.jsx)(qe,{message:t,outputFunction:function(e){switch(e){case"Form: Email missing":return i("errorTexts.createRequest.form.emailMissing");case"Form: Subject missing":return i("errorTexts.createRequest.form.subjectMissing");case"Form: Message missing":return i("errorTexts.createRequest.form.messageMissing");case"Form: Email format invalid":return i("errorTexts.createRequest.form.emailFormatInvalid");default:return i("errorTexts.general")}}}),Object(_.jsx)(Te,{isCreatingRequest:e,handleSubmitRequest:function(e){var t=e.target,a=t.email,i=t.subject,r=t.message,o={email:a.value,subject:i.value,message:r.value};e.preventDefault(),s(o,(function(){c(D("home")),n("/")}))}})]})]})},De=function(){var e=Object(l.a)().t;return Object(_.jsxs)("div",{className:"page-not-found-container",children:[Object(_.jsx)("header",{className:"headline",children:Object(_.jsx)(ie,{headlines:{headline:e("texts.pageNotFound.headline"),subheadline:e("texts.pageNotFound.subheadline")},borderColorName:"orange"})}),Object(_.jsx)("div",{className:"page-not-found-get-back-container",children:Object(_.jsx)(o.b,{to:"/",className:"page-not-found-get-back-link",children:e("link.getBack")})})]})},Fe=c(62),Ie=function(e){var t=e.headline,c=e.text,n=e.isClose,s=Object(a.useRef)(null),i=d(),r=Object(l.a)().t,o=function(){i(F(null))};return Object(_.jsx)("div",{ref:s,className:"error-modal fade-error-modal-in",onClick:function(e){n&&function(e){var t=e.target;s.current===t&&o()}(e)},children:Object(_.jsxs)("div",{className:"error-modal-box",children:[Object(_.jsx)("h1",{children:t}),Object(_.jsx)("h2",{children:c}),n&&Object(_.jsx)("button",{className:"error-modal-button mt-4 mb-3",onClick:o,children:r("button.proceed")})]})})},He=function(e){var t=e.message,c=Object(l.a)().t;return!t||t.includes("Form")?null:Object(_.jsx)("div",{children:Object(_.jsx)(Ie,{headline:c("errorModal.headline"),text:function(e){switch(e){case"Create request failed":return c("errorTexts.createRequest.createRequestFailed");default:return c("errors.general")}}(t),isClose:!0})})},Ve=function(e){var t=e.isOnline,c=Object(l.a)().t;return t?null:Object(_.jsx)("div",{children:Object(_.jsx)(Ie,{headline:c("texts.offlineModal.headline"),text:c("errorTexts.offline"),isClose:!1})})},Ge=function(){var e=u(J),t=function(){var e=Object(a.useState)(!0),t=Object(Fe.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){var e=function(){n(!1)},t=function(){n(!0)};return window.addEventListener("offline",e),window.addEventListener("online",t),function(){window.removeEventListener("offline",e),window.removeEventListener("online",t)}}),[]),c}();return t?Object(_.jsx)(He,{message:e}):Object(_.jsx)(Ve,{isOnline:t})},ze=(c(104),Object(r.g)((function(){return Object(_.jsxs)("div",{children:[Object(_.jsx)(te,{}),Object(_.jsx)(ce,{}),Object(_.jsxs)(r.c,{children:[Object(_.jsx)(r.a,{exact:!0,path:"/",children:Object(_.jsx)(re,{})}),Object(_.jsx)(r.a,{path:"/about",children:Object(_.jsx)(oe,{})}),Object(_.jsx)(r.a,{path:"/projects",children:Object(_.jsx)(de,{})}),Object(_.jsx)(r.a,{path:"/techstack",children:Object(_.jsx)(Re,{})}),Object(_.jsx)(r.a,{path:"/contact",children:Object(_.jsx)(Ee,{})}),Object(_.jsx)(r.a,{component:De})]}),Object(_.jsx)(Ge,{}),Object(_.jsx)(ae,{})]})}))),Be=Object(x.a)({reducer:{creativeGallery:A}}),Je=(c(105),c(41)),Ae=c(25),_e=c(59),We=c(61);Je.a.use(_e.a).use(We.a).use(Ae.e).init({fallbackLng:"en",ns:["translation"],defaultNS:"translation",backend:{loadPath:"/locales/{{lng}}/{{ns}}.json"},debug:!1,interpolation:{escapeValue:!1}});Je.a;i.a.render(Object(_.jsx)(n.a.StrictMode,{children:Object(_.jsx)(j.a,{store:Be,children:Object(_.jsx)(o.a,{children:Object(_.jsx)(a.Suspense,{fallback:"loading",children:Object(_.jsx)(ze,{})})})})}),document.querySelector("#root"))}},[[106,1,2]]]);
//# sourceMappingURL=main.6fb63c1b.chunk.js.map