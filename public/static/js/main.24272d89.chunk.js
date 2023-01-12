(this["webpackJsonpcreative-gallery-client"]=this["webpackJsonpcreative-gallery-client"]||[]).push([[0],{104:function(e,t,c){},105:function(e,t,c){},106:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(20),i=c.n(n),r=c(5),o=c(4),l=c(22),j=function(){return Object(l.b)()},d=l.c,u=c(38),b=c.n(u),h=c(54),m=c(23),x=c(55),p=c.n(x),g="".concat("https://creativegallery.herokuapp.com","/api"),O=function(e){throw new Error(e)},f=Object(m.b)("creativeGallery/createRequest",function(){var e=Object(h.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.post("".concat(g,"/request/create"),t);case 3:e.next=8;break;case 5:return e.prev=5,e.t0=e.catch(0),e.abrupt("return",O(e.t0.response.data.errorMessage));case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}()),v=Object(m.c)({name:"creativeGallery",initialState:{menuItem:null,isDesktop:!1,isMenuVisible:!1,isOpenMenu:!1,isCloseMenu:!1,isCreatingRequest:!1,errorMessage:null},reducers:{setIsDesktop:function(e,t){var c=t.payload;e.isDesktop=c},setIsMenuVisible:function(e,t){var c=t.payload;e.isMenuVisible=c},setIsOpenMenu:function(e,t){var c=t.payload;e.isOpenMenu=c},setIsCloseMenu:function(e,t){var c=t.payload;e.isCloseMenu=c},setNavItem:function(e,t){var c=t.payload;e.menuItem=c},setIsCreatingRequest:function(e,t){var c=t.payload;e.isCreatingRequest=c},setErrorMessage:function(e,t){var c=t.payload;e.errorMessage=c}},extraReducers:function(e){e.addCase(f.fulfilled,(function(e){e.isCreatingRequest=!1})),e.addCase(f.rejected,(function(e){e.isCreatingRequest=!1}))}}),N=function(e){return e.creativeGallery.menuItem},k=function(e){return e.creativeGallery.isDesktop},y=function(e){return e.creativeGallery.isMenuVisible},C=function(e){return e.creativeGallery.isOpenMenu},w=function(e){return e.creativeGallery.isCloseMenu},S=function(e){return e.creativeGallery.isCreatingRequest},M=function(e){return e.creativeGallery.errorMessage},L=v.actions,q=L.setIsDesktop,R=L.setIsMenuVisible,P=L.setIsOpenMenu,T=L.setIsCloseMenu,E=L.setNavItem,D=(L.setIsCreatingRequest,L.setErrorMessage),F=N,I=k,H=y,V=C,G=w,z=S,J=M,B=v.reducer,A=c(0),_=function(){return Object(A.jsxs)("div",{className:"logo-subcontainer",children:[Object(A.jsx)("div",{className:"logo-letter-c-outline",children:Object(A.jsx)("div",{className:"logo-letter-c-inline"})}),Object(A.jsx)("div",{className:"logo-letter-g-outline",children:Object(A.jsx)("div",{className:"logo-letter-g-inline",children:Object(A.jsx)("div",{className:"logo-letter-g-box",children:Object(A.jsx)("div",{className:"logo-letter-g-box2"})})})})]})},W=c(107),Y="https://www.dropbox.com/s/x3m4bop3tn2pxjm/CV-Gerbig.pdf?dl=0",K=function(e){var t=e.path,c=e.styleClass,a=e.text,s=e.faClass,n=e.closeMenuHandler;return Object(A.jsx)(A.Fragment,{children:Object(A.jsx)(o.b,{to:{pathname:t},target:"_blank",rel:"noreferrer noopener",className:c,onClick:n,children:function(e,t){return e?Object(A.jsx)("span",{children:e}):t?Object(A.jsx)("i",{className:"fab ".concat(t," is-white")}):null}(a,s)})})},Q=function(e){var t=e.styleClass,c=e.closeMenuHandler,a=Object(W.a)(),s=a.t,n=a.i18n;return Object(A.jsx)("div",{children:Object(A.jsxs)("select",{className:t,"data-cy":"select-language",onChange:function(e){var t=e.target.value;n.changeLanguage(t),"undefined"!==typeof c&&c()},children:[Object(A.jsx)("option",{disabled:!0,selected:!0,value:"",children:s("select.language.placeholder")}),Object(A.jsx)("option",{value:"de",children:s("select.language.german")}),Object(A.jsx)("option",{value:"en",children:s("select.language.english")})]})})},U=function(){var e=d(F),t=j(),c=Object(W.a)().t,a=function(t){return t===e?"navigation-link is-navigation-link-active":"navigation-link"};return Object(A.jsxs)("div",{className:"navigation-container",children:[Object(A.jsxs)("ul",{className:"navigation-subcontainer-left navigation-list",children:[Object(A.jsx)("li",{children:Object(A.jsx)(o.b,{to:"/about",className:a("about"),"data-cy":"about-link",onClick:function(){t(E("about"))},children:c("link.about")})}),Object(A.jsx)("li",{children:Object(A.jsx)(o.b,{to:"/projects",className:a("projects"),"data-cy":"projects-link",onClick:function(){t(E("projects"))},children:c("link.projects")})}),Object(A.jsx)("li",{children:Object(A.jsx)(o.b,{to:"/techstack",className:a("techStack"),"data-cy":"techstack-link",onClick:function(){t(E("techStack"))},children:c("link.techStack")})})]}),Object(A.jsxs)("ul",{className:"navigation-subcontainer-right navigation-list",children:[Object(A.jsx)("li",{children:Object(A.jsx)(K,{path:Y,styleClass:"navigation-link",text:c("link.resume")})}),Object(A.jsx)("li",{children:Object(A.jsx)(o.b,{to:"/contact",className:a("contact"),"data-cy":"contact-link",onClick:function(){t(E("contact"))},children:c("link.contact")})}),Object(A.jsx)("li",{children:Object(A.jsx)(Q,{styleClass:"select-language"})})]})]})},X=c(16),Z=c(17),$=function(){var e=j();return Object(A.jsx)("div",{children:Object(A.jsx)(X.a,{icon:Z.a,"data-cy":"toggler",onClick:function(){e(R(!0)),e(P(!0)),setTimeout((function(){e(P(!1))}),1e3)}})})},ee=function(e){return e.isDesktop?Object(A.jsx)(U,{}):Object(A.jsx)($,{})},te=function(){var e=d(I),t=j();return Object(a.useEffect)((function(){var e=function(){window.innerWidth>1024?t(q(!0)):t(q(!1))};return window.addEventListener("resize",e),e(),function(){window.removeEventListener("resize",e)}}),[]),Object(A.jsx)("div",{children:Object(A.jsx)("nav",{children:Object(A.jsxs)("div",{className:"navbar-container navbar-border",children:[Object(A.jsx)("div",{className:"logo-container",children:Object(A.jsx)(o.b,{to:"/",className:"is-text-style-plain is-white",onClick:function(){t(E("home"))},children:Object(A.jsx)(_,{})})}),Object(A.jsx)(ee,{isDesktop:e})]})})})},ce=function(){var e=d(I),t=d(H),c=d(V),a=d(G),s=j(),n=Object(W.a)().t,i=function(){s(T(!0)),setTimeout((function(){s(T(!1)),s(R(!1))}),300)},r=function(e,t){return c?"menu-item is-warning ".concat(e):a?"menu-item is-warning ".concat(t):"menu-item is-warning"};return e||!t?null:Object(A.jsx)(A.Fragment,{children:Object(A.jsxs)("div",{className:c?"menu fade-menu-in":a?"menu fade-menu-out":"menu",children:[Object(A.jsx)("div",{className:"close-menu-container",children:Object(A.jsx)(X.a,{icon:Z.e,className:"close-menu is-white",onClick:i})}),Object(A.jsx)("div",{className:"menu-container",children:Object(A.jsx)("div",{className:"menu-subcontainer",children:Object(A.jsxs)("ul",{className:"navigation-list",children:[Object(A.jsx)("li",{children:Object(A.jsx)(o.b,{to:"/about",className:r("menu-item-fade-in-speed1","menu-item-fade-out-speed1"),"data-cy":"menu-about-link",onClick:i,children:n("link.about")})}),Object(A.jsx)("li",{children:Object(A.jsx)(o.b,{to:"/projects",className:r("menu-item-fade-in-speed2","menu-item-fade-out-speed2"),"data-cy":"menu-projects-link",onClick:i,children:n("link.projects")})}),Object(A.jsx)("li",{children:Object(A.jsx)(o.b,{to:"/techstack",className:r("menu-item-fade-in-speed3","menu-item-fade-out-speed3"),"data-cy":"menu-techstack-link",onClick:i,children:n("link.techStack")})}),Object(A.jsx)("li",{children:Object(A.jsx)(K,{path:Y,styleClass:r("menu-item-fade-in-speed4","menu-item-fade-out-speed4"),text:n("link.resume"),closeMenuHandler:i})}),Object(A.jsx)("li",{children:Object(A.jsx)(o.b,{to:"/contact",className:r("menu-item-fade-in-speed5","menu-item-fade-out-speed5"),"data-cy":"menu-contact-link",onClick:i,children:n("link.contact")})}),Object(A.jsx)("li",{children:Object(A.jsx)(Q,{styleClass:"".concat(r("menu-item-fade-in-speed6","menu-item-fade-out-speed6")," menu-select-language"),closeMenuHandler:i})})]})})})]})})},ae=function(){var e=Object(W.a)().t,t=(new Date).getFullYear();return Object(A.jsx)("div",{children:Object(A.jsx)("footer",{children:Object(A.jsxs)("div",{className:"footer-container",children:[Object(A.jsxs)("span",{className:"copyright-text",children:[" ",e("texts.footer.copyright")," ",t," ",e("texts.footer.appAuthor")," "]}),Object(A.jsxs)("ul",{className:"footer-subcontainer navigation-list",children:[Object(A.jsx)("li",{children:Object(A.jsx)(K,{path:"https://www.linkedin.com/in/christian-gerbig/",styleClass:"footer-link",faClass:"fa-linkedin"})}),Object(A.jsx)("li",{children:Object(A.jsx)(K,{path:"https://github.com/christiangerbig/",styleClass:"footer-link",faClass:"fa-github"})})]})]})})})},se=c(15),ne=function(){return Object(A.jsx)("div",{className:"blur-in",children:Object(A.jsxs)("div",{className:"home-logo-subcontainer",children:[Object(A.jsx)("div",{className:"home-logo-letter-c-outline",children:Object(A.jsx)("div",{className:"home-logo-letter-c-inline"})}),Object(A.jsx)("div",{className:"home-logo-letter-g-outline",children:Object(A.jsx)("div",{className:"home-logo-letter-g-inline",children:Object(A.jsx)("div",{className:"home-logo-letter-g-box",children:Object(A.jsx)("div",{className:"home-logo-letter-g-box2"})})})})]})})},ie=function(e){var t=e.headlines,c=t.headline,a=t.subheadline,s=e.borderColorName;return Object(A.jsxs)("div",{className:function(e){switch(e){case"green":return"header-text is-border-green";case"orange":return"header-text is-border-orange";case"violet":return"header-text is-border-violet";case"blue":return"header-text is-border-blue";default:return"header-text"}}(s),children:[Object(A.jsxs)("h1",{className:"is-text-large-size",children:[" ",c," "]}),Object(A.jsxs)("h2",{className:"is-text-small-size",children:[" ",a," "]})]})},re=function(){var e=Object(W.a)().t,t=se.animateScroll.scrollToTop;return Object(a.useEffect)((function(){t()}),[]),Object(A.jsxs)("div",{className:"home-page-container","data-cy":"home-page",children:[Object(A.jsx)(ne,{}),Object(A.jsx)(ie,{headlines:{headline:e("texts.home.welcome.headline"),subheadline:e("texts.home.welcome.subheadline")},borderColorName:""})]})},oe=function(){var e=j(),t=Object(W.a)().t,c=se.animateScroll.scrollToTop;return Object(a.useEffect)((function(){c()}),[]),Object(A.jsxs)("div",{className:"about-page-container","data-cy":"about-page",children:[Object(A.jsx)("header",{className:"headline",children:Object(A.jsx)(ie,{headlines:{headline:t("texts.about.headline"),subheadline:t("texts.about.subheadline")},borderColorName:"green"})}),Object(A.jsxs)("div",{className:"about-text-container",children:[Object(A.jsx)("div",{className:"about-text-colum-container",children:Object(A.jsxs)("article",{children:[Object(A.jsx)("header",{children:Object(A.jsx)("h3",{children:t("texts.about.personalDetails.headline")})}),Object(A.jsx)("p",{children:t("texts.about.personalDetails.paragraph1")}),Object(A.jsx)("p",{children:t("texts.about.personalDetails.paragraph2")}),Object(A.jsx)("p",{children:t("texts.about.personalDetails.paragraph3")}),Object(A.jsx)("p",{children:t("texts.about.personalDetails.paragraph4")})]})}),Object(A.jsx)("div",{className:"about-text-colum-container",children:Object(A.jsxs)("article",{children:[Object(A.jsx)("header",{children:Object(A.jsx)("h3",{children:t("texts.about.experience.headline")})}),Object(A.jsx)("p",{children:t("texts.about.experience.paragraph1")}),Object(A.jsx)("p",{children:t("texts.about.experience.paragraph2")}),Object(A.jsx)("p",{children:t("texts.about.experience.paragraph3")}),Object(A.jsx)("p",{children:t("texts.about.experience.paragraph4")}),Object(A.jsx)("p",{children:Object(A.jsx)("span",{className:"about-contact-link",onClick:function(){e(E("contact"))},children:Object(A.jsx)(o.b,{to:{pathname:"/contact"},"data-cy":"alt-contact-link",children:t("texts.about.experience.contact")})})})]})})]})]})},le=[{projectName:"texts.projects.jungleSwap.name",projectPicturePath:c.p+"static/media/jungle-swap.04645ba1.png",projectVideoPath:"https://bliskcloudstorage.blob.core.windows.net/videos/2c9bdc9d-6b6f-4823-844c-2a2cd5c36a86/15-May-2021-13-45-637566759460450173.mp4",projectDescription:"texts.projects.jungleSwap.description",deployedPath:"https://jungleswap.herokuapp.com/",gitHubClientPath:"https://github.com/christiangerbig/jungle-swap-client",gitHubServerPath:"https://github.com/christiangerbig/jungle-swap-server"},{projectName:"texts.projects.trackerTools.name",projectPicturePath:c.p+"static/media/trackertools.cdf33462.png",projectVideoPath:"https://bliskcloudstorage.blob.core.windows.net/videos/2c9bdc9d-6b6f-4823-844c-2a2cd5c36a86/15-May-2021-13-35-637566753722531829.mp4",projectDescription:"texts.projects.trackerTools.description",deployedPath:"https://trackertools.herokuapp.com/",gitHubClientPath:"https://github.com/christiangerbig/Trackertools",gitHubServerPath:""},{projectName:"texts.projects.letterShooter.name",projectPicturePath:c.p+"static/media/letter-shooter.a0667b69.png",projectVideoPath:"https://bliskcloudstorage.blob.core.windows.net/videos/2c9bdc9d-6b6f-4823-844c-2a2cd5c36a86/15-May-2021-14-10-637566774755686276.mp4",projectDescription:"texts.projects.letterShooter.description",deployedPath:"https://christiangerbig.github.io/letter-shooter/",gitHubClientPath:"https://github.com/christiangerbig/letter-shooter",gitHubServerPath:""}],je=function(e){var t=e.projectItem,c=t.projectName,a=t.projectPicturePath,s=t.projectVideoPath,n=t.projectDescription,i=t.deployedPath,r=t.gitHubClientPath,o=t.gitHubServerPath,l=Object(W.a)().t;return Object(A.jsxs)("div",{className:"project-details-container",children:[Object(A.jsx)("video",{width:"320",height:"170",muted:!0,controls:!0,poster:a,src:s}),Object(A.jsx)("div",{className:"project-description",children:Object(A.jsxs)("article",{children:[Object(A.jsx)("header",{children:Object(A.jsx)("h2",{children:l(c)})}),Object(A.jsx)("div",{className:"project-description-container",children:Object(A.jsx)("p",{children:l(n)})})]})}),Object(A.jsxs)("div",{className:"project-links-container",children:[Object(A.jsx)("div",{children:Object(A.jsx)(K,{path:i,styleClass:"project-try-it-link",text:l("link.startApp")})}),Object(A.jsx)("div",{children:Object(A.jsx)(K,{path:r,styleClass:"project-github-link",text:l("link.gitHubClient")})}),o&&Object(A.jsx)("div",{children:Object(A.jsx)(K,{path:o,styleClass:"project-github-link",text:l("link.gitHubServer")})})]})]})},de=function(){var e=Object(W.a)().t,t=se.animateScroll.scrollToTop;return Object(a.useEffect)((function(){t()}),[]),Object(A.jsxs)("div",{className:"projects-page-container","data-cy":"projects-page",children:[Object(A.jsx)("header",{className:"headline",children:Object(A.jsx)(ie,{headlines:{headline:e("texts.projects.headline"),subheadline:e("texts.projects.subheadline")},borderColorName:"orange"})}),Object(A.jsx)("div",{className:"projects-container",children:le.map((function(e,t){return Object(A.jsx)(je,{projectItem:e},"".concat(e.projectName).concat(t.toString()))}))})]})},ue=c.p+"static/media/Bootstrap-Logo.527d0fc0.svg",be=c.p+"static/media/Bulma-Logo.ecefb4da.svg",he=c.p+"static/media/Cloudinary-Logo.df0c0e93.svg",me=c.p+"static/media/Cypress-Logo.071c7e70.svg",xe=c.p+"static/media/GitHub-Logo.11619ac0.svg",pe=c.p+"static/media/GitLab-Logo.83df9efb.svg",ge=c.p+"static/media/JavaScript(ES6)-Logo.a309520a.svg",Oe=c.p+"static/media/MongoDB-Logo.153b7b44.svg",fe=c.p+"static/media/NodeJS-Logo.5a3a9ca2.svg",ve=c.p+"static/media/NextJS-Logo.7ab4af8b.svg",Ne=c.p+"static/media/NPM-Logo.5620a716.svg",ke=c.p+"static/media/React-Logo.ae626225.svg",ye=c.p+"static/media/Redux-Logo.a9567540.svg",Ce=c.p+"static/media/Sass-Logo.8351205a.svg",we=c.p+"static/media/Tailwind-css-Logo.50fbcf51.svg",Se=c.p+"static/media/TypeScript-Logo.17d5e87e.svg",Me=c.p+"static/media/Visual-Studio-Code-Logo.f57bbf46.svg",Le=c.p+"static/media/Vue.js-Logo.4921ee76.svg",qe=c.p+"static/media/Webstorm-Logo.6cac5400.svg",Re=[ke,ye,Le,fe,ve,ge,Se,me,Ce,we,ue,be,Oe,he,Ne,c.p+"static/media/Yarn-Logo.20176999.svg",xe,pe,Me,qe],Pe=function(){var e=Object(W.a)().t,t=se.animateScroll.scrollToTop;return Object(a.useEffect)((function(){t()}),[]),Object(A.jsxs)("div",{className:"tech-stack-page-container","data-cy":"tech-stack-page",children:[Object(A.jsx)("header",{className:"headline",children:Object(A.jsx)(ie,{headlines:{headline:e("texts.techStack.headline"),subheadline:e("texts.techStack.subheadline")},borderColorName:"violet"})}),Object(A.jsx)("div",{className:"tech-stack-logos-container",children:Re.map((function(e,t){return Object(A.jsx)("div",{className:"tech-stack-logo",children:Object(A.jsx)("img",{src:e,loading:"lazy",alt:"firm logo"},"".concat(e).concat(t.toString()))})}))})]})},Te=function(e){var t=e.message,c=e.outputFunction;return t&&t.includes("Form")?Object(A.jsx)(A.Fragment,{children:Object(A.jsx)("span",{className:"error-output is-danger","data-cy":"error-message",children:c(t)})}):null},Ee=function(e){var t=e.path,c=e.styleClass,a=e.text;return Object(A.jsx)(A.Fragment,{children:Object(A.jsx)("span",{className:c,children:Object(A.jsx)(o.b,{to:{pathname:t},target:"_blank",children:Object(A.jsx)("h4",{className:"is-text-nowrap",children:a})})})})},De=function(e){var t=e.isCreatingRequest,c=e.handleSubmitRequest,a=Object(W.a)().t;return Object(A.jsx)(A.Fragment,{children:Object(A.jsxs)("form",{onSubmit:function(e){c(e)},children:[Object(A.jsx)("input",{type:"email",name:"email",placeholder:a("texts.contact.createRequest.form.inputEmail"),className:"form-input","data-cy":"form-input-email"}),Object(A.jsx)("input",{type:"text",name:"subject",placeholder:a("texts.contact.createRequest.form.inputSubject"),className:"form-input","data-cy":"form-input-subject"}),Object(A.jsx)("textarea",{name:"message",placeholder:a("texts.contact.createRequest.form.inputMessage"),cols:35,rows:7,className:"form-textarea","data-cy":"form-input-message"}),Object(A.jsx)("button",{type:"submit",disabled:!!t,formNoValidate:!0,className:"form-submit","data-cy":"form-submit-request",children:a("button.submit")})]})})},Fe=function(){var e=d(z),t=d(J),c=j(),s=Object(r.f)().push,n=function(){var e=j();return{createRequest:function(t,c){e(f(t)).unwrap().then((function(){c()})).catch((function(t){e(D(t.message))}))}}}().createRequest,i=Object(W.a)().t,o=se.animateScroll.scrollToTop;Object(a.useEffect)((function(){c(D(null)),o()}),[]);return Object(A.jsxs)("div",{className:"contact-page-container","data-cy":"contact-page",children:[Object(A.jsx)("header",{className:"headline",children:Object(A.jsx)(ie,{headlines:{headline:i("texts.contact.headline"),subheadline:i("texts.contact.subheadline")},borderColorName:"blue"})}),Object(A.jsxs)("div",{className:"contact-container",children:[Object(A.jsx)("h1",{children:i("texts.contact.name")}),Object(A.jsx)("h2",{children:i("texts.contact.jobname")}),Object(A.jsxs)("div",{className:"contact-ways-container",children:[Object(A.jsxs)("div",{className:"contact-email-container",children:[Object(A.jsxs)("h3",{children:[Object(A.jsx)(X.a,{icon:Z.b})," ",i("texts.contact.email")]}),Object(A.jsx)(Ee,{path:"mailto:chr_gerbig@web.de",styleClass:"contact-link",text:i("texts.contact.emailAddress")})]}),Object(A.jsxs)("div",{className:"contact-phone-container",children:[Object(A.jsxs)("h3",{children:[Object(A.jsx)(X.a,{icon:Z.c})," ",i("texts.contact.phone")]}),Object(A.jsx)(Ee,{path:"tel:+4915154824288",styleClass:"contact-link",text:i("texts.contact.phoneNumber")})]})]}),Object(A.jsx)("div",{children:Object(A.jsxs)("h3",{children:[Object(A.jsx)(X.a,{icon:Z.d})," ",i("texts.contact.submit")]})}),Object(A.jsx)(Te,{message:t,outputFunction:function(e){switch(e){case"Form: Email missing":return i("errorTexts.createRequest.form.emailMissing");case"Form: Subject missing":return i("errorTexts.createRequest.form.subjectMissing");case"Form: Message missing":return i("errorTexts.createRequest.form.messageMissing");case"Form: Email format invalid":return i("errorTexts.createRequest.form.emailFormatInvalid");default:return i("errorTexts.general")}}}),Object(A.jsx)(De,{isCreatingRequest:e,handleSubmitRequest:function(e){var t=e.target,a=t.email,i=t.subject,r=t.message,o={email:a.value,subject:i.value,message:r.value};e.preventDefault(),n(o,(function(){c(E("home")),s("/")}))}})]})]})},Ie=function(){var e=Object(W.a)().t;return Object(A.jsxs)("div",{className:"page-not-found-container",children:[Object(A.jsx)("header",{className:"headline",children:Object(A.jsx)(ie,{headlines:{headline:e("texts.pageNotFound.headline"),subheadline:e("texts.pageNotFound.subheadline")},borderColorName:"orange"})}),Object(A.jsx)("div",{className:"page-not-found-get-back-container",children:Object(A.jsx)(o.b,{to:"/",className:"page-not-found-get-back-link",children:e("link.getBack")})})]})},He=c(62),Ve=function(e){var t=e.headline,c=e.text,s=e.isClose,n=Object(a.useRef)(null),i=j(),r=Object(W.a)().t,o=function(){i(D(null))};return Object(A.jsx)("div",{ref:n,className:"error-modal fade-error-modal-in",onClick:function(e){var t=e.target;n.current===t&&s&&o()},children:Object(A.jsxs)("div",{className:"error-modal-box",children:[Object(A.jsx)("h1",{children:t}),Object(A.jsx)("h2",{children:c}),s&&Object(A.jsx)("button",{className:"error-modal-button mt-4 mb-3",onClick:o,children:r("button.proceed")})]})})},Ge=function(e){var t=e.message,c=Object(W.a)().t;return!t||t.includes("Form")?null:Object(A.jsx)("div",{children:Object(A.jsx)(Ve,{headline:c("errorModal.headline"),text:function(e){switch(e){case"Create request failed":return c("errorTexts.createRequest.createRequestFailed");default:return c("errors.general")}}(t),isClose:!0})})},ze=function(e){var t=e.isOnline,c=Object(W.a)().t;return t?null:Object(A.jsx)("div",{children:Object(A.jsx)(Ve,{headline:c("texts.offlineModal.headline"),text:c("errorTexts.offline"),isClose:!1})})},Je=function(){var e=d(J),t=function(){var e=Object(a.useState)(!0),t=Object(He.a)(e,2),c=t[0],s=t[1];return Object(a.useEffect)((function(){var e=function(){s(!1)},t=function(){s(!0)};return window.addEventListener("offline",e),window.addEventListener("online",t),function(){window.removeEventListener("offline",e),window.removeEventListener("online",t)}}),[]),c}();return t?Object(A.jsx)(Ge,{message:e}):Object(A.jsx)(ze,{isOnline:t})},Be=(c(104),Object(r.g)((function(){return Object(A.jsxs)("div",{children:[Object(A.jsx)(te,{}),Object(A.jsx)(ce,{}),Object(A.jsxs)(r.c,{children:[Object(A.jsx)(r.a,{exact:!0,path:"/",children:Object(A.jsx)(re,{})}),Object(A.jsx)(r.a,{path:"/about",children:Object(A.jsx)(oe,{})}),Object(A.jsx)(r.a,{path:"/projects",children:Object(A.jsx)(de,{})}),Object(A.jsx)(r.a,{path:"/techstack",children:Object(A.jsx)(Pe,{})}),Object(A.jsx)(r.a,{path:"/contact",children:Object(A.jsx)(Fe,{})}),Object(A.jsx)(r.a,{component:Ie})]}),Object(A.jsx)(Je,{}),Object(A.jsx)(ae,{})]})}))),Ae=Object(m.a)({reducer:{creativeGallery:B}}),_e=(c(105),c(41)),We=c(25),Ye=c(59),Ke=c(61);_e.a.use(Ye.a).use(Ke.a).use(We.e).init({fallbackLng:"en",ns:["translation"],defaultNS:"translation",backend:{loadPath:"/locales/{{lng}}/{{ns}}.json"},debug:!1,interpolation:{escapeValue:!1}});_e.a;i.a.render(Object(A.jsx)(s.a.StrictMode,{children:Object(A.jsx)(l.a,{store:Ae,children:Object(A.jsx)(o.a,{children:Object(A.jsx)(a.Suspense,{fallback:"loading",children:Object(A.jsx)(Be,{})})})})}),document.querySelector("#root"))}},[[106,1,2]]]);
//# sourceMappingURL=main.24272d89.chunk.js.map