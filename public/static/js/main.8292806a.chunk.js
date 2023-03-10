(this["webpackJsonpcreative-gallery-client"]=this["webpackJsonpcreative-gallery-client"]||[]).push([[0],{104:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(20),i=a.n(n),r=a(4),l=a(22),o=a(23),d=a(39),j=a.n(d),u=a(55),b=a(56),h=a.n(b),m="".concat("https://creativegallery.herokuapp.com","/api"),x=function(e){throw new Error(e)},p=Object(o.b)("creativeGallery/createRequest",function(){var e=Object(u.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.post("".concat(m,"/request/create"),t);case 3:e.next=9;break;case 5:return e.prev=5,e.t0=e.catch(0),a=e.t0.response.data.errorMessage,e.abrupt("return",x(a));case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}()),g=Object(o.c)({name:"creativeGallery",initialState:{menuItem:null,isLargeDevice:!1,isMenuVisible:!1,isOpenMenu:!1,isCloseMenu:!1,isCreatingRequest:!1,errorMessage:null},reducers:{setIsLargeDevice:function(e,t){var a=t.payload;e.isLargeDevice=a},setIsMenuVisible:function(e,t){var a=t.payload;e.isMenuVisible=a},setIsOpenMenu:function(e,t){var a=t.payload;e.isOpenMenu=a},setIsCloseMenu:function(e,t){var a=t.payload;e.isCloseMenu=a},setNavItem:function(e,t){var a=t.payload;e.menuItem=a},setIsCreatingRequest:function(e,t){var a=t.payload;e.isCreatingRequest=a},setErrorMessage:function(e,t){var a=t.payload;e.errorMessage=a}},extraReducers:function(e){e.addCase(p.fulfilled,(function(e){e.isCreatingRequest=!1})),e.addCase(p.rejected,(function(e){e.isCreatingRequest=!1}))}}),O=function(e){return e.creativeGallery.menuItem},v=function(e){return e.creativeGallery.isLargeDevice},f=function(e){return e.creativeGallery.isMenuVisible},_=function(e){return e.creativeGallery.isOpenMenu},N=function(e){return e.creativeGallery.isCloseMenu},k=function(e){return e.creativeGallery.isCreatingRequest},y=function(e){return e.creativeGallery.errorMessage},C=g.actions,w=C.setIsLargeDevice,S=C.setIsMenuVisible,M=C.setIsOpenMenu,L=C.setIsCloseMenu,q=C.setNavItem,R=(C.setIsCreatingRequest,C.setErrorMessage),P=O,T=v,E=f,D=_,F=N,I=k,H=y,V=g.reducer,G=Object(o.a)({reducer:{creativeGallery:V}}),z=a(5),J=function(){return Object(l.b)()},B=l.c,A=a(31),W=a(0),Y=function(){return Object(W.jsxs)("div",{className:"nav-bar-logo",children:[Object(W.jsx)("div",{className:"nav-bar-logo__letter-c-outline",children:Object(W.jsx)("div",{className:"nav-bar-logo__letter-c-inline"})}),Object(W.jsx)("div",{className:"nav-bar-logo__letter-g-outline",children:Object(W.jsx)("div",{className:"nav-bar-logo__letter-g-inline",children:Object(W.jsx)("div",{className:"nav-bar-logo__letter-g-box",children:Object(W.jsx)("div",{className:"nav-bar-logo__letter-g-box2"})})})})]})},K=a(107),Q="https://www.dropbox.com/s/x3m4bop3tn2pxjm/CV-Gerbig.pdf?dl=0",U=function(e){var t=e.path,a=e.styleClass,c=e.text,s=e.faClass,n=e.closeMenuHandler;return Object(W.jsx)(W.Fragment,{children:Object(W.jsx)(r.b,{to:{pathname:t},target:"_blank",rel:"noreferrer noopener",className:a,onClick:n,children:function(e,t){return e?Object(W.jsx)("span",{children:e}):t?Object(W.jsx)("i",{className:"fab ".concat(t)}):null}(c,s)})})},X=function(e){var t=e.styleClass,a=e.closeMenuHandler,c=Object(K.a)(),s=c.t,n=c.i18n;return Object(W.jsx)("div",{children:Object(W.jsxs)("select",{className:t,"data-cy":"select-language",onChange:function(e){var t=e.target.value;n.changeLanguage(t),"undefined"!==typeof a&&a()},children:[Object(W.jsx)("option",{value:"",children:s("select.language.placeholder")}),Object(W.jsx)("option",{value:"de",children:s("select.language.german")}),Object(W.jsx)("option",{value:"en",className:"navigation-list__select-language__option",children:s("select.language.english")})]})})},Z=function(){var e=B(P),t=J(),a=Object(K.a)().t,c=function(t){return t===e?"navigation-list__link navigation-list__link--active":"navigation-list__link"};return Object(W.jsxs)("div",{className:"nav-desktop-items",children:[Object(W.jsxs)("ul",{className:"navigation-list navigation-list--no-style",children:[Object(W.jsx)("li",{children:Object(W.jsx)(r.b,{to:"/about",className:c("about"),"data-cy":"nav-bar-about-link",onClick:function(){t(q("about"))},children:a("link.about")})}),Object(W.jsx)("li",{children:Object(W.jsx)(r.b,{to:"/projects",className:c("projects"),"data-cy":"nav-bar-projects-link",onClick:function(){t(q("projects"))},children:a("link.projects")})}),Object(W.jsx)("li",{children:Object(W.jsx)(r.b,{to:"/techstack",className:c("techStack"),"data-cy":"nav-bar-techstack-link",onClick:function(){t(q("techStack"))},children:a("link.techStack")})})]}),Object(W.jsxs)("ul",{className:"navigation-list navigation-list--no-style",children:[Object(W.jsx)("li",{children:Object(W.jsx)(U,{path:Q,styleClass:"navigation-list__link",text:a("link.resume")})}),Object(W.jsx)("li",{children:Object(W.jsx)(r.b,{to:"/contact",className:c("contact"),"data-cy":"nav-bar-contact-link",onClick:function(){t(q("contact"))},children:a("link.contact")})}),Object(W.jsx)("li",{children:Object(W.jsx)(X,{styleClass:"navigation-list__select-language"})})]})]})},$=a(16),ee=a(17),te=function(){var e=J();return Object(W.jsx)(W.Fragment,{children:Object(W.jsx)("button",{type:"button",className:"nav-toggler","data-cy":"toggler",onClick:function(){e(S(!0)),e(M(!0)),setTimeout((function(){e(M(!1))}),1e3)},children:Object(W.jsx)($.a,{icon:ee.a})})})},ae=function(e){return e.isLargeDevice?Object(W.jsx)(Z,{}):Object(W.jsx)(te,{})},ce=function(){var e=B(T),t=J();return t(w(function(e){var t=Object(c.useState)(!1),a=Object(A.a)(t,2),s=a[0],n=a[1];return Object(c.useEffect)((function(){var t=function(){window.innerWidth>=e?n(!0):n(!1)};return window.addEventListener("resize",t),t(),function(){window.removeEventListener("resize",t)}}),[]),s}(992))),Object(W.jsx)("nav",{className:"nav-bar",children:Object(W.jsxs)("div",{className:"nav-bar__items",children:[Object(W.jsx)(r.b,{to:"/",onClick:function(){t(q("home"))},children:Object(W.jsx)(Y,{})}),Object(W.jsx)(ae,{isLargeDevice:e})]})})},se=function(){var e=B(T),t=B(E),a=B(D),s=B(F),n=J(),i=Object(K.a)().t,l=function(){n(L(!0)),setTimeout((function(){n(L(!1)),n(S(!1))}),300)},o=Object(c.useMemo)((function(){return a?"nav-menu nav-menu--fade-in":s?"nav-menu nav-menu--fade-out":"nav-menu"}),[a,s]),d=function(e,t){return a?"nav-menu-list__item__link ".concat(e):s?"nav-menu-list__item__link ".concat(t):"nav-menu-list__item__link"};return e||!t?null:Object(W.jsx)(W.Fragment,{children:Object(W.jsxs)("div",{className:o,children:[Object(W.jsx)("div",{className:"close-button-container",children:Object(W.jsx)("button",{type:"button",className:"close-button-container__button",onClick:l,children:Object(W.jsx)($.a,{icon:ee.e})})}),Object(W.jsxs)("ul",{className:"nav-menu-list nav-menu-list--no-style",children:[Object(W.jsx)("li",{className:"nav-menu-list__item",children:Object(W.jsx)(r.b,{to:"/about",className:d("nav-menu-list__item--fade-in-speed1","nav-menu-list__item--fade-out-speed1"),"data-cy":"nav-menu-about-link",onClick:l,children:i("link.about")})}),Object(W.jsx)("li",{className:"nav-menu-list__item",children:Object(W.jsx)(r.b,{to:"/projects",className:d("nav-menu-list__item--fade-in-speed2","nav-menu-list__item--fade-out-speed2"),"data-cy":"nav-menu-projects-link",onClick:l,children:i("link.projects")})}),Object(W.jsx)("li",{className:"nav-menu-list__item",children:Object(W.jsx)(r.b,{to:"/techstack",className:d("nav-menu-list__item--fade-in-speed3","nav-menu-list__item--fade-out-speed3"),"data-cy":"nav-menu-techstack-link",onClick:l,children:i("link.techStack")})}),Object(W.jsx)("li",{className:"nav-menu-list__item",children:Object(W.jsx)(U,{path:Q,styleClass:d("nav-menu-list__item--fade-in-speed4","nav-menu-list__item--fade-out-speed4"),text:i("link.resume"),closeMenuHandler:l})}),Object(W.jsx)("li",{className:"nav-menu-list__item",children:Object(W.jsx)(r.b,{to:"/contact",className:d("nav-menu-list__item--fade-in-speed5","nav-menu-list__item--fade-out-speed5"),"data-cy":"nav-menu-contact-link",onClick:l,children:i("link.contact")})}),Object(W.jsx)("li",{className:"nav-menu-list__item",children:Object(W.jsx)(X,{styleClass:"nav-menu-list__item__select-language ".concat(d("nav-menu-list__item--fade-in-speed6","nav-menu-list__item--fade-out-speed6")),closeMenuHandler:l})})]})]})})},ne=function(){var e=Object(K.a)().t,t=(new Date).getFullYear();return Object(W.jsxs)("footer",{className:"footer",children:[Object(W.jsxs)("span",{className:"footer__copyright-text",children:[" ",e("texts.footer.copyright")," ",t," ",e("texts.footer.appAuthor")]}),Object(W.jsxs)("ul",{className:"navigation-list navigation-list--no-style",children:[Object(W.jsx)("li",{children:Object(W.jsx)(U,{path:"https://www.linkedin.com/in/christian-gerbig/",styleClass:"footer__link",faClass:"fa-linkedin"})}),Object(W.jsx)("li",{children:Object(W.jsx)(U,{path:"https://github.com/christiangerbig/",styleClass:"footer__link",faClass:"fa-github"})})]})]})},ie=a(15),re=function(){return Object(W.jsx)("div",{className:"home-logo--blur-in",children:Object(W.jsxs)("div",{className:"home-logo",children:[Object(W.jsx)("div",{className:"home-logo__letter-c-outline",children:Object(W.jsx)("div",{className:"home-logo__letter-c-inline"})}),Object(W.jsx)("div",{className:"home-logo__letter-g-outline",children:Object(W.jsx)("div",{className:"home-logo__letter-g-inline",children:Object(W.jsx)("div",{className:"home-logo__letter-g-box",children:Object(W.jsx)("div",{className:"home-logo__letter-g-box2"})})})})]})})},le=function(e){var t=e.headlines,a=t.headline,c=t.subheadline,s=e.borderColorName;return Object(W.jsxs)("div",{className:function(e){switch(e){case"green":return"header-text header-text--left-border-green";case"orange":return"header-text header-text--left-border-orange";case"violet":return"header-text header-text--left-border-violet";case"blue":return"header-text header-text--left-border-blue";default:return"header-text"}}(s),children:[Object(W.jsxs)("h1",{className:"header-text__headline header-text--fontsize-large",children:[" ",a," "]}),Object(W.jsxs)("h2",{className:"header-text__subheadline header-text--fontsize-small",children:[" ",c," "]})]})},oe=function(){var e=Object(K.a)().t,t=ie.animateScroll.scrollToTop;return Object(c.useEffect)((function(){t()}),[]),Object(W.jsxs)("div",{className:"home","data-cy":"home-page",children:[Object(W.jsx)(re,{}),Object(W.jsx)("header",{className:"header",children:Object(W.jsx)(le,{headlines:{headline:e("texts.home.welcome.headline"),subheadline:e("texts.home.welcome.subheadline")},borderColorName:""})})]})},de=function(){var e=J(),t=Object(K.a)().t,a=ie.animateScroll.scrollToTop;return Object(c.useEffect)((function(){a()}),[]),Object(W.jsxs)("div",{className:"about","data-cy":"about-page",children:[Object(W.jsx)("header",{className:"header",children:Object(W.jsx)(le,{headlines:{headline:t("texts.about.headline"),subheadline:t("texts.about.subheadline")},borderColorName:"green"})}),Object(W.jsxs)("div",{className:"about__text",children:[Object(W.jsx)("div",{className:"about__text__text-colum",children:Object(W.jsxs)("article",{children:[Object(W.jsx)("header",{children:Object(W.jsx)("h3",{children:t("texts.about.personalDetails.headline")})}),Object(W.jsx)("p",{children:t("texts.about.personalDetails.paragraph1")}),Object(W.jsx)("p",{children:t("texts.about.personalDetails.paragraph2")}),Object(W.jsx)("p",{children:t("texts.about.personalDetails.paragraph3")}),Object(W.jsx)("p",{children:t("texts.about.personalDetails.paragraph4")})]})}),Object(W.jsx)("div",{className:"about__text__text-colum",children:Object(W.jsxs)("article",{children:[Object(W.jsx)("header",{children:Object(W.jsx)("h3",{children:t("texts.about.experience.headline")})}),Object(W.jsx)("p",{children:t("texts.about.experience.paragraph1")}),Object(W.jsx)("p",{children:t("texts.about.experience.paragraph2")}),Object(W.jsx)("p",{children:t("texts.about.experience.paragraph3")}),Object(W.jsx)("p",{children:t("texts.about.experience.paragraph4")}),Object(W.jsx)("p",{children:Object(W.jsx)("span",{onClick:function(){e(q("contact"))},children:Object(W.jsx)(r.b,{to:{pathname:"/contact"},className:"about__contact-link","data-cy":"alt-contact-link",children:t("texts.about.experience.contact")})})})]})})]})]})},je=a.p+"static/media/jungle-swap.04645ba1.png",ue=a.p+"static/media/trackertools.cdf33462.png",be=a.p+"static/media/letter-shooter.a0667b69.png",he=function(e){var t=e.projectItem,a=t.projectName,c=t.projectPicturePath,s=t.projectVideoPath,n=t.projectDescription,i=t.deployedPath,r=t.gitHubClientPath,l=t.gitHubServerPath,o=Object(K.a)().t;return Object(W.jsxs)("div",{className:"project-details",children:[Object(W.jsx)("video",{width:"320",height:"170",muted:!0,controls:!0,poster:c,src:s}),Object(W.jsx)("div",{className:"project-details__description",children:Object(W.jsxs)("article",{children:[Object(W.jsx)("header",{children:Object(W.jsx)("h2",{className:"project-details__description__project-name",children:a})}),Object(W.jsx)("p",{className:"project-details__description__paragraph",children:n})]})}),Object(W.jsxs)("div",{className:"project-links",children:[Object(W.jsx)("div",{children:Object(W.jsx)(U,{path:i,styleClass:"project-links__try-it-link",text:o("link.startApp")})}),Object(W.jsx)("div",{children:Object(W.jsx)(U,{path:r,styleClass:"project-links__github-link",text:o("link.gitHubClient")})}),l&&Object(W.jsx)("div",{children:Object(W.jsx)(U,{path:l,styleClass:"project-links__github-link",text:o("link.gitHubServer")})})]})]})},me=function(){var e=Object(K.a)().t,t=function(){var e=Object(K.a)().t;return[{projectName:e("texts.projects.jungleSwap.name"),projectPicturePath:je,projectVideoPath:"https://bliskcloudstorage.blob.core.windows.net/videos/2c9bdc9d-6b6f-4823-844c-2a2cd5c36a86/15-May-2021-13-45-637566759460450173.mp4",projectDescription:e("texts.projects.jungleSwap.description"),deployedPath:"https://jungleswap.herokuapp.com/",gitHubClientPath:"https://github.com/christiangerbig/jungle-swap-client",gitHubServerPath:"https://github.com/christiangerbig/jungle-swap-server"},{projectName:e("texts.projects.trackerTools.name"),projectPicturePath:ue,projectVideoPath:"https://bliskcloudstorage.blob.core.windows.net/videos/2c9bdc9d-6b6f-4823-844c-2a2cd5c36a86/15-May-2021-13-35-637566753722531829.mp4",projectDescription:e("texts.projects.trackerTools.description"),deployedPath:"https://trackertools.herokuapp.com/",gitHubClientPath:"https://github.com/christiangerbig/Trackertools",gitHubServerPath:""},{projectName:e("texts.projects.letterShooter.name"),projectPicturePath:be,projectVideoPath:"https://bliskcloudstorage.blob.core.windows.net/videos/2c9bdc9d-6b6f-4823-844c-2a2cd5c36a86/15-May-2021-14-10-637566774755686276.mp4",projectDescription:e("texts.projects.letterShooter.description"),deployedPath:"https://christiangerbig.github.io/letter-shooter/",gitHubClientPath:"https://github.com/christiangerbig/letter-shooter",gitHubServerPath:""}]}(),a=ie.animateScroll.scrollToTop;return Object(c.useEffect)((function(){a()}),[]),Object(W.jsxs)("div",{className:"projects","data-cy":"projects-page",children:[Object(W.jsx)("header",{className:"header",children:Object(W.jsx)(le,{headlines:{headline:e("texts.projects.headline"),subheadline:e("texts.projects.subheadline")},borderColorName:"orange"})}),Object(W.jsx)("div",{className:"projects__collection",children:t.map((function(e,t){return Object(W.jsx)(he,{projectItem:e},"".concat(e.projectName).concat(t.toString()))}))})]})},xe=a.p+"static/media/Bootstrap-Logo.527d0fc0.svg",pe=a.p+"static/media/Bulma-Logo.ecefb4da.svg",ge=a.p+"static/media/Cloudinary-Logo.df0c0e93.svg",Oe=a.p+"static/media/Cypress-Logo.071c7e70.svg",ve=a.p+"static/media/GitHub-Logo.11619ac0.svg",fe=a.p+"static/media/GitLab-Logo.83df9efb.svg",_e=a.p+"static/media/JavaScript(ES6)-Logo.a309520a.svg",Ne=a.p+"static/media/MongoDB-Logo.153b7b44.svg",ke=a.p+"static/media/NodeJS-Logo.5a3a9ca2.svg",ye=a.p+"static/media/NextJS-Logo.7ab4af8b.svg",Ce=a.p+"static/media/NPM-Logo.5620a716.svg",we=a.p+"static/media/React-Logo.ae626225.svg",Se=a.p+"static/media/Redux-Logo.a9567540.svg",Me=a.p+"static/media/Sass-Logo.8351205a.svg",Le=a.p+"static/media/Tailwind-css-Logo.50fbcf51.svg",qe=a.p+"static/media/TypeScript-Logo.17d5e87e.svg",Re=a.p+"static/media/Visual-Studio-Code-Logo.f57bbf46.svg",Pe=a.p+"static/media/Vue.js-Logo.4921ee76.svg",Te=a.p+"static/media/Webstorm-Logo.6cac5400.svg",Ee=[we,Se,Pe,ke,ye,_e,qe,Oe,Me,Le,xe,pe,Ne,ge,Ce,a.p+"static/media/Yarn-Logo.20176999.svg",ve,fe,Re,Te],De=function(){var e=Object(K.a)().t,t=ie.animateScroll.scrollToTop;return Object(c.useEffect)((function(){t()}),[]),Object(W.jsxs)("div",{className:"tech-stack","data-cy":"tech-stack-page",children:[Object(W.jsx)("header",{className:"header",children:Object(W.jsx)(le,{headlines:{headline:e("texts.techStack.headline"),subheadline:e("texts.techStack.subheadline")},borderColorName:"violet"})}),Object(W.jsx)("div",{className:"tech-stack__logo-collection",children:Ee.map((function(e,t){return Object(W.jsx)("div",{className:"tech-stack-logo",children:Object(W.jsx)("img",{src:e,loading:"lazy",alt:"firm logo",className:"tech-stack-logo__image"})},"".concat(e).concat(t.toString()))}))})]})},Fe=function(e){var t=e.message,a=e.outputFunction;return t&&t.includes("Form")?Object(W.jsx)("div",{className:"error-message",children:Object(W.jsx)("span",{className:"error-message--color-red","data-cy":"error-text",children:a(t)})}):null},Ie=function(e){var t=e.path,a=e.styleClass,c=e.text;return Object(W.jsx)(W.Fragment,{children:Object(W.jsx)("span",{className:a,children:Object(W.jsx)(r.b,{to:{pathname:t},target:"_blank",className:"contact-link",children:Object(W.jsx)("h4",{children:c})})})})},He=function(e){var t=e.isCreatingRequest,a=e.handleSubmitRequest,s=Object(K.a)().t,n=Object(c.useMemo)((function(){return!!t}),[t]);return Object(W.jsx)(W.Fragment,{children:Object(W.jsxs)("form",{className:"contact-form",onSubmit:function(e){a(e)},children:[Object(W.jsx)("input",{type:"email",name:"email",placeholder:s("texts.contact.createRequest.form.inputEmail"),className:"contact-form__input","data-cy":"form-input-email"}),Object(W.jsx)("input",{type:"text",name:"subject",placeholder:s("texts.contact.createRequest.form.inputSubject"),className:"contact-form__input","data-cy":"form-input-subject"}),Object(W.jsx)("textarea",{name:"message",placeholder:s("texts.contact.createRequest.form.inputMessage"),cols:35,rows:7,className:"contact-form__text-area","data-cy":"form-input-message"}),Object(W.jsx)("button",{type:"submit",disabled:n,formNoValidate:!0,className:"contact-form__button","data-cy":"form-submit-request",children:s("button.submit")})]})})},Ve=function(){var e=B(I),t=B(H),a=J(),s=Object(z.f)().push,n=Object(K.a)().t,i=function(){var e=J();return{createRequest:function(t,a){e(p(t)).unwrap().then((function(){a()})).catch((function(t){e(R(t.message))}))}}}().createRequest,r=ie.animateScroll.scrollToTop;Object(c.useEffect)((function(){a(R(null)),r()}),[]);return Object(W.jsxs)("div",{className:"contact","data-cy":"contact-page",children:[Object(W.jsx)("header",{className:"header",children:Object(W.jsx)(le,{headlines:{headline:n("texts.contact.headline"),subheadline:n("texts.contact.subheadline")},borderColorName:"blue"})}),Object(W.jsxs)("div",{className:"contact__details",children:[Object(W.jsx)("h1",{className:"contact__details__name",children:n("texts.contact.name")}),Object(W.jsx)("h2",{className:"contact__details__jobname",children:n("texts.contact.jobname")}),Object(W.jsxs)("div",{className:"contact__ways",children:[Object(W.jsxs)("div",{children:[Object(W.jsxs)("h3",{className:"contact__ways__email-headline",children:[Object(W.jsx)($.a,{icon:ee.b})," ",n("texts.contact.email")]}),Object(W.jsx)(Ie,{path:"mailto:chr_gerbig@web.de",styleClass:"contact-link",text:n("texts.contact.emailAddress")})]}),Object(W.jsxs)("div",{children:[Object(W.jsxs)("h3",{className:"contact__ways__phone-headline",children:[Object(W.jsx)($.a,{icon:ee.c})," ",n("texts.contact.phone")]}),Object(W.jsx)(Ie,{path:"tel:+4915154824288",styleClass:"contact-link",text:n("texts.contact.phoneNumber")})]}),Object(W.jsxs)("div",{children:[Object(W.jsxs)("h3",{className:"contact__ways__form-headline",children:[Object(W.jsx)($.a,{icon:ee.d})," ",n("texts.contact.submit")]}),Object(W.jsx)(Fe,{message:t,outputFunction:function(e){switch(e){case"Form: Email missing":return n("errorTexts.createRequest.form.emailMissing");case"Form: Subject missing":return n("errorTexts.createRequest.form.subjectMissing");case"Form: Message missing":return n("errorTexts.createRequest.form.messageMissing");case"Form: Email format invalid":return n("errorTexts.createRequest.form.emailFormatInvalid");default:return n("errorTexts.general")}}}),Object(W.jsx)(He,{isCreatingRequest:e,handleSubmitRequest:function(e){var t=e.target,c=t.email,n=t.subject,r=t.message,l={email:c.value,subject:n.value,message:r.value};e.preventDefault(),i(l,(function(){a(q("home")),s("/")}))}})]})]})]})]})},Ge=function(){var e=Object(K.a)().t;return Object(W.jsxs)("div",{className:"page-not-found",children:[Object(W.jsx)("header",{className:"header",children:Object(W.jsx)(le,{headlines:{headline:e("texts.pageNotFound.headline"),subheadline:e("texts.pageNotFound.subheadline")},borderColorName:"orange"})}),Object(W.jsx)("div",{className:"page-not-found__get-back-container",children:Object(W.jsx)(r.b,{to:"/",className:"page-not-found__get-back-container__link",children:e("link.getBack")})})]})},ze=function(e){var t=e.headline,a=e.text,s=e.isClose,n=Object(c.useRef)(null),i=J(),r=Object(K.a)().t,l=function(){i(R(null))};return Object(W.jsx)("div",{ref:n,className:"modal-body modal-body--fade-in",onClick:function(e){var t=e.target;n.current===t&&s&&l()},children:Object(W.jsxs)("div",{className:"modal-body__box",children:[Object(W.jsx)("h1",{children:t}),Object(W.jsx)("h2",{children:a}),s&&Object(W.jsx)("button",{className:"modal-body__box__button",onClick:l,children:r("button.proceed")})]})})},Je=function(e){var t=e.message,a=Object(K.a)().t;return!t||t.includes("Form")?null:Object(W.jsx)("div",{children:Object(W.jsx)(ze,{headline:a("texts.errorModal.headline"),text:function(e){switch(e){case"Create request failed":return a("errorTexts.createRequest.createRequestFailed");default:return a("errorTexts.general")}}(t),isClose:!0})})},Be=function(e){var t=e.isOnline,a=Object(K.a)().t;return t?null:Object(W.jsx)("div",{children:Object(W.jsx)(ze,{headline:a("texts.offlineModal.headline"),text:a("errorTexts.offline"),isClose:!1})})},Ae=function(){var e=B(H),t=function(){var e=Object(c.useState)(!0),t=Object(A.a)(e,2),a=t[0],s=t[1];return Object(c.useEffect)((function(){var e=function(){s(!1)},t=function(){s(!0)};return window.addEventListener("offline",e),window.addEventListener("online",t),function(){window.removeEventListener("offline",e),window.removeEventListener("online",t)}}),[]),a}();return t?Object(W.jsx)(Je,{message:e}):Object(W.jsx)(Be,{isOnline:t})},We=(a(104),Object(z.g)((function(){return Object(W.jsxs)("div",{children:[Object(W.jsx)(ce,{}),Object(W.jsx)(se,{}),Object(W.jsxs)(z.c,{children:[Object(W.jsx)(z.a,{exact:!0,path:"/",children:Object(W.jsx)(oe,{})}),Object(W.jsx)(z.a,{path:"/about",children:Object(W.jsx)(de,{})}),Object(W.jsx)(z.a,{path:"/projects",children:Object(W.jsx)(me,{})}),Object(W.jsx)(z.a,{path:"/techstack",children:Object(W.jsx)(De,{})}),Object(W.jsx)(z.a,{path:"/contact",children:Object(W.jsx)(Ve,{})}),Object(W.jsx)(z.a,{component:Ge})]}),Object(W.jsx)(Ae,{}),Object(W.jsx)(ne,{})]})}))),Ye=(a(105),a(42)),Ke=a(25),Qe=a(60),Ue=a(62);Ye.a.use(Qe.a).use(Ue.a).use(Ke.e).init({fallbackLng:"en",ns:["translation"],defaultNS:"translation",backend:{loadPath:"/locales/{{lng}}/{{ns}}.json"},debug:!1,interpolation:{escapeValue:!1}});Ye.a;i.a.render(Object(W.jsx)(s.a.StrictMode,{children:Object(W.jsx)(l.a,{store:G,children:Object(W.jsx)(r.a,{children:Object(W.jsx)(c.Suspense,{fallback:"loading",children:Object(W.jsx)(We,{})})})})}),document.querySelector("#root"))}},[[106,1,2]]]);
//# sourceMappingURL=main.8292806a.chunk.js.map