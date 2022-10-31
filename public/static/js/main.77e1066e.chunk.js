(this["webpackJsonpcreative-gallery-client"]=this["webpackJsonpcreative-gallery-client"]||[]).push([[0],{101:function(e,t,c){},102:function(e,t,c){},103:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(18),i=c.n(s),r=c(5),o=c(4),l=c(20),j=function(){return Object(l.b)()},d=l.c,u=c(29),b=c(37),h=c.n(b),m=c(53),x=c(21),p=c(54),O=c.n(p),g="".concat("https://creativegallery.herokuapp.com","/api"),f=function(e){throw new Error(e)},v=Object(x.b)("creativeGallery/createRequest",function(){var e=Object(m.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.post("".concat(g,"/request/create"),t);case 3:e.next=8;break;case 5:return e.prev=5,e.t0=e.catch(0),e.abrupt("return",f(e.t0.response.data.errorMessage));case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}()),k=Object(x.c)({name:"creativeGallery",initialState:{menuItem:null,isDesktop:!1,isMenuVisible:!1,isOpenMenu:!1,isCloseMenu:!1,isCreatingRequest:!1,errorMessage:null},reducers:{setIsDesktop:function(e,t){var c=t.payload;e.isDesktop=c},setIsMenuVisible:function(e,t){var c=t.payload;e.isMenuVisible=c},setIsOpenMenu:function(e,t){var c=t.payload;e.isOpenMenu=c},setIsCloseMenu:function(e,t){var c=t.payload;e.isCloseMenu=c},setNavItem:function(e,t){var c=t.payload;e.menuItem=c},setIsCreatingRequest:function(e,t){var c=t.payload;e.isCreatingRequest=c},setErrorMessage:function(e,t){var c=t.payload;e.errorMessage=c}},extraReducers:function(e){e.addCase(v.fulfilled,(function(e){e.isCreatingRequest=!1})),e.addCase(v.rejected,(function(e){e.isCreatingRequest=!1}))}}),N=function(e){return e.creativeGallery.menuItem},C=function(e){return e.creativeGallery.isDesktop},y=function(e){return e.creativeGallery.isMenuVisible},w=function(e){return e.creativeGallery.isOpenMenu},S=function(e){return e.creativeGallery.isCloseMenu},M=function(e){return e.creativeGallery.isCreatingRequest},R=function(e){return e.creativeGallery.errorMessage},L=k.actions,P=L.setIsDesktop,q=L.setIsMenuVisible,T=L.setIsOpenMenu,E=L.setIsCloseMenu,D=L.setNavItem,F=(L.setIsCreatingRequest,L.setErrorMessage),I=N,G=C,H=y,V=w,z=S,A=M,J=R,B=k.reducer,_=c(0),W=function(){return Object(_.jsxs)("div",{className:"logo-subcontainer",children:[Object(_.jsx)("div",{className:"logo-letter-c-outline",children:Object(_.jsx)("div",{className:"logo-letter-c-inline"})}),Object(_.jsx)("div",{className:"logo-letter-g-outline",children:Object(_.jsx)("div",{className:"logo-letter-g-inline",children:Object(_.jsx)("div",{className:"logo-letter-g-box",children:Object(_.jsx)("div",{className:"logo-letter-g-box2"})})})})]})},Y=c(104),K="https://www.dropbox.com/s/x3m4bop3tn2pxjm/CV-Gerbig.pdf?dl=0",U=function(e){var t=e.path,c=e.styleClass,a=e.text,n=e.faClass,s=e.onClickHandler;return Object(_.jsx)(_.Fragment,{children:Object(_.jsx)(o.b,{to:{pathname:t},target:"_blank",rel:"noreferrer noopener",className:c,onClick:s,children:function(e,t){return e||(t?Object(_.jsx)("i",{className:"fab ".concat(t," is-white")}):"")}(a,n)})})},Q=function(){var e=d(I),t=j(),c=Object(Y.a)().t,a=function(t){return t===e?"navigation-link is-navigation-link-active":"navigation-link"};return Object(_.jsxs)("div",{className:"navigation-container",children:[Object(_.jsxs)("ul",{className:"navigation-subcontainer-left navigation-list",children:[Object(_.jsx)("li",{children:Object(_.jsx)(o.b,{to:"/about",className:a("about"),onClick:function(){t(D("about"))},children:c("link.about")})}),Object(_.jsx)("li",{children:Object(_.jsx)(o.b,{to:"/projects",className:a("projects"),onClick:function(){t(D("projects"))},children:c("link.projects")})}),Object(_.jsx)("li",{children:Object(_.jsx)(o.b,{to:"/techstack",className:a("techStack"),onClick:function(){t(D("techStack"))},children:c("link.techStack")})})]}),Object(_.jsxs)("ul",{className:"navigation-subcontainer-right navigation-list",children:[Object(_.jsx)("li",{children:Object(_.jsx)(U,{path:K,styleClass:"navigation-link",text:c("link.resume")})}),Object(_.jsx)("li",{children:Object(_.jsx)(o.b,{to:"/contact",className:a("contact"),onClick:function(){t(D("contact"))},children:c("link.contact")})})]})]})},X=c(14),Z=c(15),$=function(){var e=j();return Object(_.jsx)("div",{children:Object(_.jsx)(X.a,{icon:Z.a,"data-cy":"toggler",onClick:function(){e(q(!0)),e(T(!0)),setTimeout((function(){e(T(!1))}),1e3)}})})},ee=function(e){return e.isDesktop?Object(_.jsx)(Q,{}):Object(_.jsx)($,{})},te=function(){var e=d(G),t=j();return t(P(function(){var e=Object(a.useState)(!0),t=Object(u.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){var e=function(){window.innerWidth>1024?n(!0):n(!1)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),c}())),Object(_.jsx)("div",{children:Object(_.jsx)("nav",{children:Object(_.jsxs)("div",{className:"navbar-container navbar-border",children:[Object(_.jsx)("div",{className:"logo-container",children:Object(_.jsx)(o.b,{to:"/",className:"is-text-style-plain is-white",onClick:function(){t(D("home"))},children:Object(_.jsx)(W,{})})}),Object(_.jsx)(ee,{isDesktop:e})]})})})},ce=function(){var e=d(G),t=d(H),c=d(V),a=d(z),n=j(),s=Object(Y.a)().t,i=function(){n(E(!0)),setTimeout((function(){n(E(!1)),n(q(!1))}),300)},r=function(e,t){return c?"menu-link is-warning ".concat(e):a?"menu-link is-warning ".concat(t):"menu-link is-warning"};return Object(_.jsx)(_.Fragment,{children:!e&&t&&Object(_.jsxs)("div",{className:c?"menu fade-menu-in":a?"menu fade-menu-out":"menu",children:[Object(_.jsx)("div",{className:"close-menu-container",children:Object(_.jsx)(X.a,{icon:Z.e,className:"close-menu is-white",onClick:i})}),Object(_.jsx)("div",{className:"menu-container",children:Object(_.jsx)("div",{className:"menu-subcontainer",children:Object(_.jsxs)("ul",{className:"navigation-list",children:[Object(_.jsx)("li",{children:Object(_.jsx)(o.b,{to:"/about",className:r("menu-link-fade-in-speed1","menu-link-fade-out-speed1"),"data-cy":"menu-about-link",onClick:i,children:s("link.about")})}),Object(_.jsx)("li",{children:Object(_.jsx)(o.b,{to:"/projects",className:r("menu-link-fade-in-speed2","menu-link-fade-out-speed2"),"data-cy":"menu-projects-link",onClick:i,children:s("link.projects")})}),Object(_.jsx)("li",{children:Object(_.jsx)(o.b,{to:"/techstack",className:r("menu-link-fade-in-speed3","menu-link-fade-out-speed3"),"data-cy":"menu-tech-stack-link",onClick:i,children:s("link.techStack")})}),Object(_.jsx)("li",{children:Object(_.jsx)(U,{path:K,styleClass:r("menu-link-fade-in-speed4","menu-link-fade-out-speed4"),text:s("link.resume"),"data-cy":"menu-resume-link",onClickHandler:i})}),Object(_.jsx)("li",{children:Object(_.jsx)(o.b,{to:"/contact",className:r("menu-link-fade-in-speed5","menu-link-fade-out-speed5"),"data-cy":"menu-contact-link",onClick:i,children:s("link.contact")})})]})})})]})})},ae=function(){var e=Object(Y.a)().t,t=(new Date).getFullYear();return Object(_.jsx)("div",{children:Object(_.jsx)("footer",{children:Object(_.jsxs)("div",{className:"footer-container",children:[Object(_.jsxs)("span",{className:"copyright-text",children:[" ",e("texts.footer.copyright")," ",t," ",e("texts.footer.appAuthor")," "]}),Object(_.jsxs)("ul",{className:"footer-subcontainer navigation-list",children:[Object(_.jsx)("li",{children:Object(_.jsx)(U,{path:"https://www.linkedin.com/in/christian-gerbig/",styleClass:"footer-link",faClass:"fa-linkedin"})}),Object(_.jsx)("li",{children:Object(_.jsx)(U,{path:"https://github.com/christiangerbig/",styleClass:"footer-link",faClass:"fa-github"})})]})]})})})},ne=c(13),se=function(){return Object(_.jsx)("div",{className:"blur-in",children:Object(_.jsxs)("div",{className:"home-logo-subcontainer",children:[Object(_.jsx)("div",{className:"home-logo-letter-c-outline",children:Object(_.jsx)("div",{className:"home-logo-letter-c-inline"})}),Object(_.jsx)("div",{className:"home-logo-letter-g-outline",children:Object(_.jsx)("div",{className:"home-logo-letter-g-inline",children:Object(_.jsx)("div",{className:"home-logo-letter-g-box",children:Object(_.jsx)("div",{className:"home-logo-letter-g-box2"})})})})]})})},ie=function(e){var t=e.headlines,c=t.headline,a=t.subheadline,n=e.borderColorName;return Object(_.jsxs)("div",{className:function(e){switch(e){case"green":return"header-text is-border-green";case"orange":return"header-text is-border-orange";case"violet":return"header-text is-border-violet";case"blue":return"header-text is-border-blue";default:return"header-text"}}(n),children:[Object(_.jsxs)("h1",{className:"is-text-large-size",children:[" ",c," "]}),Object(_.jsxs)("h2",{className:"is-text-small-size",children:[" ",a," "]})]})},re=function(){var e=Object(Y.a)().t,t=ne.animateScroll.scrollToTop;return Object(a.useEffect)((function(){t()}),[]),Object(_.jsxs)("div",{className:"home-page-container",children:[Object(_.jsx)(se,{}),Object(_.jsx)(ie,{headlines:{headline:e("texts.home.welcome.headline"),subheadline:e("texts.home.welcome.subheadline")},borderColorName:""})]})},oe=function(){var e=j(),t=Object(Y.a)().t,c=ne.animateScroll.scrollToTop;return Object(a.useEffect)((function(){c()}),[]),Object(_.jsxs)("div",{className:"about-page-container","data-cy":"about-page",children:[Object(_.jsx)("header",{className:"headline",children:Object(_.jsx)(ie,{headlines:{headline:t("texts.about.headline"),subheadline:t("texts.about.subheadline")},borderColorName:"green"})}),Object(_.jsxs)("div",{className:"about-text-container",children:[Object(_.jsx)("div",{className:"about-text-colum-container",children:Object(_.jsxs)("article",{children:[Object(_.jsx)("header",{children:Object(_.jsx)("h3",{children:t("texts.about.personalDetails.headline")})}),Object(_.jsx)("p",{children:t("texts.about.personalDetails.paragraph1")}),Object(_.jsx)("p",{children:t("texts.about.personalDetails.paragraph2")}),Object(_.jsx)("p",{children:t("texts.about.personalDetails.paragraph3")}),Object(_.jsx)("p",{children:t("texts.about.personalDetails.paragraph4")})]})}),Object(_.jsx)("div",{className:"about-text-colum-container",children:Object(_.jsxs)("article",{children:[Object(_.jsx)("header",{children:Object(_.jsx)("h3",{children:t("texts.about.experience.headline")})}),Object(_.jsx)("p",{children:t("texts.about.experience.paragraph1")}),Object(_.jsx)("p",{children:t("texts.about.experience.paragraph2")}),Object(_.jsx)("p",{children:t("texts.about.experience.paragraph3")}),Object(_.jsx)("p",{children:t("texts.about.experience.paragraph4")}),Object(_.jsx)("p",{children:Object(_.jsx)("span",{className:"about-contact-link",onClick:function(){e(D("contact"))},children:Object(_.jsx)(o.b,{to:{pathname:"/contact"},children:t("texts.about.experience.contact")})})})]})})]})]})},le=[{projectName:"JUNGLE SWAP",projectPicturePath:c.p+"static/media/jungle-swap.04645ba1.png",projectVideoPath:"https://bliskcloudstorage.blob.core.windows.net/videos/2c9bdc9d-6b6f-4823-844c-2a2cd5c36a86/15-May-2021-13-45-637566759460450173.mp4",projectDescription:"Share your plant offshoots and make money or swap them for another plant. Shop and give a plant a new home.",deployedPath:"https://jungleswap.herokuapp.com/",gitHubClientPath:"https://github.com/christiangerbig/jungle-swap-client",gitHubServerPath:"https://github.com/christiangerbig/jungle-swap-server"},{projectName:"TRACKERTOOLS",projectPicturePath:c.p+"static/media/trackertools.cdf33462.png",projectVideoPath:"https://bliskcloudstorage.blob.core.windows.net/videos/2c9bdc9d-6b6f-4823-844c-2a2cd5c36a86/15-May-2021-13-35-637566753722531829.mp4",projectDescription:"Four powerful tools to make working with the music editor Protracker and its modules more comfortable.",deployedPath:"https://trackertools.herokuapp.com/",gitHubClientPath:"https://github.com/christiangerbig/Trackertools",gitHubServerPath:""},{projectName:"LETTER SHOOTER",projectPicturePath:c.p+"static/media/letter-shooter.a0667b69.png",projectVideoPath:"https://bliskcloudstorage.blob.core.windows.net/videos/2c9bdc9d-6b6f-4823-844c-2a2cd5c36a86/15-May-2021-14-10-637566774755686276.mp4",projectDescription:"A coordination and strategy game with the goal to hit the missing letters with precise shots.",deployedPath:"https://christiangerbig.github.io/letter-shooter/",gitHubClientPath:"https://github.com/christiangerbig/letter-shooter",gitHubServerPath:""}],je=function(e){var t=e.projectItem,c=t.projectName,a=t.projectPicturePath,n=t.projectVideoPath,s=t.projectDescription,i=t.deployedPath,r=t.gitHubClientPath,o=t.gitHubServerPath,l=Object(Y.a)().t;return Object(_.jsxs)("div",{className:"project-details-container",children:[Object(_.jsx)("video",{width:"320",height:"200",muted:!0,controls:!0,poster:a,src:n}),Object(_.jsx)("div",{className:"project-description",children:Object(_.jsxs)("article",{children:[Object(_.jsx)("header",{children:Object(_.jsx)("h2",{children:c})}),Object(_.jsx)("div",{className:"project-description-container",children:Object(_.jsx)("p",{children:s})})]})}),Object(_.jsxs)("div",{className:"project-links-container",children:[Object(_.jsx)("div",{children:Object(_.jsx)(U,{path:i,styleClass:"project-try-it-link",text:l("link.startApp")})}),Object(_.jsx)("div",{children:Object(_.jsx)(U,{path:r,styleClass:"project-github-link",text:l("link.gitHubClient")})}),o&&Object(_.jsx)("div",{children:Object(_.jsx)(U,{path:o,styleClass:"project-github-link",text:l("link.gitHubServer")})})]})]})},de=function(){var e=Object(Y.a)().t,t=ne.animateScroll.scrollToTop;return Object(a.useEffect)((function(){t()}),[]),Object(_.jsxs)("div",{className:"projects-page-container","data-cy":"projects-page",children:[Object(_.jsx)("header",{className:"headline",children:Object(_.jsx)(ie,{headlines:{headline:e("texts.projects.headline"),subheadline:e("texts.projects.subheadline")},borderColorName:"orange"})}),Object(_.jsx)("div",{className:"projects-container",children:le.map((function(e,t){return Object(_.jsx)(je,{projectItem:e},"".concat(e.projectName).concat(t.toString()))}))})]})},ue=c.p+"static/media/Bootstrap-Logo.527d0fc0.svg",be=c.p+"static/media/Bulma-Logo.ecefb4da.svg",he=c.p+"static/media/Cloudinary-Logo.df0c0e93.svg",me=c.p+"static/media/Cypress-Logo.071c7e70.svg",xe=c.p+"static/media/GitHub-Logo.11619ac0.svg",pe=c.p+"static/media/GitLab-Logo.83df9efb.svg",Oe=c.p+"static/media/JavaScript(ES6)-Logo.a309520a.svg",ge=c.p+"static/media/MongoDB-Logo.153b7b44.svg",fe=c.p+"static/media/NodeJS-Logo.5a3a9ca2.svg",ve=c.p+"static/media/NPM-Logo.5620a716.svg",ke=c.p+"static/media/React-Logo.ae626225.svg",Ne=c.p+"static/media/Redux-Logo.a9567540.svg",Ce=c.p+"static/media/Sass-Logo.8351205a.svg",ye=c.p+"static/media/TypeScript-Logo.17d5e87e.svg",we=c.p+"static/media/Visual-Studio-Code-Logo.f57bbf46.svg",Se=c.p+"static/media/Vue.js-Logo.4921ee76.svg",Me=c.p+"static/media/Webstorm-Logo.6cac5400.svg",Re=[ke,Ne,Se,fe,Oe,ye,Ce,me,ue,be,ge,he,ve,c.p+"static/media/Yarn-Logo.20176999.svg",xe,pe,we,Me],Le=function(){var e=Object(Y.a)().t,t=ne.animateScroll.scrollToTop;return Object(a.useEffect)((function(){t()}),[]),Object(_.jsxs)("div",{className:"tech-stack-page-container","data-cy":"tech-stack-page",children:[Object(_.jsx)("header",{className:"headline",children:Object(_.jsx)(ie,{headlines:{headline:e("texts.techStack.headline"),subheadline:e("texts.techStack.subheadline")},borderColorName:"violet"})}),Object(_.jsx)("div",{className:"tech-stack-logos-container",children:Re.map((function(e,t){return Object(_.jsx)("div",{className:"tech-stack-logo",children:Object(_.jsx)("img",{src:e,loading:"lazy",alt:"firm logo"},"".concat(e).concat(t.toString()))})}))})]})},Pe=function(e){var t=e.message,c=e.outputFunction;return t&&t.includes("Form")?Object(_.jsx)(_.Fragment,{children:Object(_.jsx)("span",{className:"error-output is-danger",children:c(t)})}):null},qe=function(e){var t=e.path,c=e.styleClass,a=e.text;return Object(_.jsx)(_.Fragment,{children:Object(_.jsx)("span",{className:c,children:Object(_.jsx)(o.b,{to:{pathname:t},target:"_blank",children:Object(_.jsx)("h4",{children:a})})})})},Te=function(e){var t=e.isCreatingRequest,c=e.handleSubmitRequest,a=Object(Y.a)().t;return Object(_.jsx)(_.Fragment,{children:Object(_.jsxs)("form",{onSubmit:function(e){c(e)},children:[Object(_.jsx)("input",{type:"email",name:a("texts.contact.createRequest.form.inputEmail"),placeholder:"email",className:"form-input"}),Object(_.jsx)("input",{type:"text",name:a("texts.contact.createRequest.form.inputSubject"),placeholder:"subject",className:"form-input"}),Object(_.jsx)("textarea",{name:"message",placeholder:a("texts.contact.createRequest.form.inputMessage"),cols:35,rows:7,className:"form-textarea"}),Object(_.jsx)("button",{type:"submit",disabled:!!t,formNoValidate:!0,className:"form-submit",children:a("button.submit")})]})})},Ee=function(){var e=d(A),t=d(J),c=j(),n=Object(r.f)().push,s=function(){var e=j();return{createRequest:function(t,c){e(v(t)).unwrap().then((function(){c()})).catch((function(t){e(F(t.message))}))}}}().createRequest,i=Object(Y.a)().t,o=ne.animateScroll.scrollToTop;Object(a.useEffect)((function(){c(F(null)),o()}),[]);return Object(_.jsxs)("div",{className:"contact-page-container","data-cy":"contact-page",children:[Object(_.jsx)("header",{className:"headline",children:Object(_.jsx)(ie,{headlines:{headline:i("texts.contact.headline"),subheadline:i("texts.contact.subheadline")},borderColorName:"blue"})}),Object(_.jsxs)("div",{className:"contact-container",children:[Object(_.jsx)("h1",{children:i("texts.contact.name")}),Object(_.jsx)("h2",{children:i("texts.contact.jobname")}),Object(_.jsxs)("div",{className:"contact-ways-container",children:[Object(_.jsxs)("div",{className:"contact-email-container",children:[Object(_.jsxs)("h3",{children:[Object(_.jsx)(X.a,{icon:Z.b})," ",i("texts.contact.email")]}),Object(_.jsx)(qe,{path:"mailto:chr_gerbig@web.de",styleClass:"contact-link",text:"chr_gerbig(at)web.de"})]}),Object(_.jsxs)("div",{className:"contact-phone-container",children:[Object(_.jsxs)("h3",{children:[Object(_.jsx)(X.a,{icon:Z.c})," ",i("texts.contact.phone")]}),Object(_.jsx)(qe,{path:"tel:+4915154824288",styleClass:"contact-link",text:"+49\xa0151\xa0548\xa0242\xa088"})]})]}),Object(_.jsx)("div",{children:Object(_.jsxs)("h3",{children:[Object(_.jsx)(X.a,{icon:Z.d})," ",i("texts.contact.submit")]})}),Object(_.jsx)(Pe,{message:t,outputFunction:function(e){switch(e){case"Form: Email missing":return i("errorTexts.createRequest.form.emailMissing");case"Form: Subject missing":return i("errorTexts.createRequest.form.subjectMissing");case"Form: Message missing":return i("errorTexts.createRequest.form.messageMissing");case"Form: Email format invalid":return i("errorTexts.createRequest.form.emailFormatInvalid");default:return i("errorTexts.general")}}}),Object(_.jsx)(Te,{isCreatingRequest:e,handleSubmitRequest:function(e){var t=e.target,a=t.email,i=t.subject,r=t.message,o={email:a.value,subject:i.value,message:r.value};e.preventDefault(),s(o,(function(){c(D("home")),n("/")}))}})]})]})},De=function(){var e=Object(Y.a)().t;return Object(_.jsxs)("div",{className:"page-not-found-container",children:[Object(_.jsx)("header",{className:"headline",children:Object(_.jsx)(ie,{headlines:{headline:e("texts.pageNotFound.headline"),subheadline:e("texts.pageNotFound.subheadline")},borderColorName:"orange"})}),Object(_.jsx)("div",{className:"page-not-found-get-back-container",children:Object(_.jsx)(o.b,{to:"/",className:"page-not-found-get-back-link",children:e("link.getBack")})})]})},Fe=function(e){var t=e.headline,c=e.text,n=e.isClose,s=Object(a.useRef)(null),i=j(),r=Object(Y.a)().t,o=function(){i(F(null))};return Object(_.jsx)("div",{ref:s,className:"error-modal fade-error-modal-in",onClick:function(e){n&&function(e){var t=e.target;s.current===t&&o()}(e)},children:Object(_.jsxs)("div",{className:"error-modal-box",children:[Object(_.jsx)("h1",{children:t}),Object(_.jsx)("h2",{children:c}),n&&Object(_.jsx)("button",{className:"error-modal-button mt-4 mb-3",onClick:o,children:r("button.proceed")})]})})},Ie=function(e){var t=e.message,c=Object(Y.a)().t;return!t||t.includes("Form")?null:Object(_.jsx)("div",{children:Object(_.jsx)(Fe,{headline:c("errorModal.headline"),text:function(e){switch(e){case"Create request failed":return c("errorTexts.createRequest.createRequestFailed");default:return c("errors.general")}}(t),isClose:!0})})},Ge=function(e){var t=e.isOnline,c=Object(Y.a)().t;return t?null:Object(_.jsx)("div",{children:Object(_.jsx)(Fe,{headline:c("texts.offlineModal.headline"),text:c("errorTexts.offline"),isClose:!1})})},He=function(){var e=d(J),t=function(){var e=Object(a.useState)(!0),t=Object(u.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){var e=function(){n(!1)},t=function(){n(!0)};return window.addEventListener("offline",e),window.addEventListener("online",t),function(){window.removeEventListener("offline",e),window.removeEventListener("online",t)}}),[]),c}();return t?Object(_.jsx)(Ie,{message:e}):Object(_.jsx)(Ge,{isOnline:t})},Ve=(c(101),Object(r.g)((function(){return Object(_.jsxs)("div",{children:[Object(_.jsx)(te,{}),Object(_.jsx)(ce,{}),Object(_.jsxs)(r.c,{children:[Object(_.jsx)(r.a,{exact:!0,path:"/",children:Object(_.jsx)(re,{})}),Object(_.jsx)(r.a,{path:"/about",children:Object(_.jsx)(oe,{})}),Object(_.jsx)(r.a,{path:"/projects",children:Object(_.jsx)(de,{})}),Object(_.jsx)(r.a,{path:"/techstack",children:Object(_.jsx)(Le,{})}),Object(_.jsx)(r.a,{path:"/contact",children:Object(_.jsx)(Ee,{})}),Object(_.jsx)(r.a,{component:De})]}),Object(_.jsx)(He,{}),Object(_.jsx)(ae,{})]})}))),ze=Object(x.a)({reducer:{creativeGallery:B}}),Ae=(c(102),c(40)),Je=c(23),Be=c(58);Ae.a.use(Be.a).use(Je.e).init({lng:"en",fallbackLng:"en",ns:["translation"],defaultNS:"translation",backend:{loadPath:"/locales/{{lng}}/{{ns}}.json"},debug:!1,interpolation:{escapeValue:!1}});Ae.a;i.a.render(Object(_.jsx)(n.a.StrictMode,{children:Object(_.jsx)(l.a,{store:ze,children:Object(_.jsx)(o.a,{children:Object(_.jsx)(a.Suspense,{fallback:"loading",children:Object(_.jsx)(Ve,{})})})})}),document.querySelector("#root"))}},[[103,1,2]]]);
//# sourceMappingURL=main.77e1066e.chunk.js.map