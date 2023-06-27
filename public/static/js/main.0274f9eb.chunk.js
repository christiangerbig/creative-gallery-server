(this["webpackJsonpcreative-gallery-client"]=this["webpackJsonpcreative-gallery-client"]||[]).push([[0],{109:function(e,t,a){},110:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(21),i=a.n(s),r=a(4),l=a(23),o=a(24),d=a(40),u=a.n(d),j=a(58),b=a(59),m=a.n(b),h="".concat("https://creativegallery.herokuapp.com","/api"),x=function(e){throw new Error(e)},p=Object(o.b)("creativeGallery/createRequest",function(){var e=Object(j.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.post("".concat(h,"/request/create"),t);case 3:e.next=9;break;case 5:return e.prev=5,e.t0=e.catch(0),a=e.t0.response.data.errorMessage,e.abrupt("return",x(a));case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}()),_=Object(o.c)({name:"creativeGallery",initialState:{menuItem:null,isMenuVisible:!1,isOpenMenu:!1,isCloseMenu:!1,isCreatingRequest:!1,errorMessage:null},reducers:{setIsMenuVisible:function(e,t){var a=t.payload;e.isMenuVisible=a},setIsOpenMenu:function(e,t){var a=t.payload;e.isOpenMenu=a},setIsCloseMenu:function(e,t){var a=t.payload;e.isCloseMenu=a},setNavItem:function(e,t){var a=t.payload;e.menuItem=a},setIsCreatingRequest:function(e,t){var a=t.payload;e.isCreatingRequest=a},setErrorMessage:function(e,t){var a=t.payload;e.errorMessage=a}},extraReducers:function(e){e.addCase(p.fulfilled,(function(e){e.isCreatingRequest=!1})),e.addCase(p.rejected,(function(e){e.isCreatingRequest=!1}))}}),g=function(e){return e.creativeGallery.menuItem},O=function(e){return e.creativeGallery.isMenuVisible},v=function(e){return e.creativeGallery.isOpenMenu},f=function(e){return e.creativeGallery.isCloseMenu},N=function(e){return e.creativeGallery.isCreatingRequest},k=function(e){return e.creativeGallery.errorMessage},y=_.actions,C=y.setIsMenuVisible,w=y.setIsOpenMenu,M=y.setIsCloseMenu,S=y.setNavItem,L=(y.setIsCreatingRequest,y.setErrorMessage),q=g,R=O,P=v,T=f,E=N,I=k,F=_.reducer,H=Object(o.a)({reducer:{creativeGallery:F}}),V=a(5),D=function(){return Object(l.b)()},G=l.c,B=a(0),J=function(){return Object(B.jsxs)("div",{className:"nav-bar-logo",children:[Object(B.jsx)("div",{className:"nav-bar-logo__letter-c-outline",children:Object(B.jsx)("div",{className:"nav-bar-logo__letter-c-inline"})}),Object(B.jsx)("div",{className:"nav-bar-logo__letter-g-outline",children:Object(B.jsx)("div",{className:"nav-bar-logo__letter-g-inline",children:Object(B.jsx)("div",{className:"nav-bar-logo__letter-g-box",children:Object(B.jsx)("div",{className:"nav-bar-logo__letter-g-box2"})})})})]})},z=a(111),A="https://www.dropbox.com/s/7k6g4m07gpeel5v/CV%20%286%29.pdf?dl=0",Y=function(e){var t=e.path,a=e.styleClass,c=e.text,n=e.faClass,s=e.closeMenuHandler;return Object(B.jsx)(B.Fragment,{children:Object(B.jsx)(r.b,{to:{pathname:t},target:"_blank",rel:"noreferrer noopener",className:a,onClick:s,children:function(e,t){return e?Object(B.jsx)("span",{children:e}):t?Object(B.jsx)("i",{className:"fab ".concat(t)}):null}(c,n)})})},K=function(e){var t=e.styleClass,a=e.closeMenuHandler,c=Object(z.a)(),n=c.t,s=c.i18n;return Object(B.jsx)("div",{children:Object(B.jsxs)("select",{className:t,"data-cy":"select-language",onChange:function(e){var t=e.target.value;s.changeLanguage(t),"undefined"!==typeof a&&a()},children:[Object(B.jsx)("option",{value:"",children:n("select.language.placeholder")}),Object(B.jsx)("option",{value:"de",children:n("select.language.german")}),Object(B.jsx)("option",{value:"en",className:"navigation-list__select-language__option",children:n("select.language.english")})]})})},W=function(){var e=G(q),t=D(),a=Object(z.a)().t,c=function(t){return t===e?"nav-desktop-items__nav-list__nav-link nav-desktop-items__nav-list__nav-link--active":"nav-desktop-items__nav-list__nav-link"};return Object(B.jsxs)("div",{className:"nav-desktop-items",children:[Object(B.jsxs)("ul",{className:"nav-desktop-items__nav-list",children:[Object(B.jsx)("li",{children:Object(B.jsx)(r.b,{to:"/about",className:c("about"),"data-cy":"nav-bar-about-link",onClick:function(){t(S("about"))},children:a("link.about")})}),Object(B.jsx)("li",{children:Object(B.jsx)(r.b,{to:"/projects",className:c("projects"),"data-cy":"nav-bar-projects-link",onClick:function(){t(S("projects"))},children:a("link.projects")})}),Object(B.jsx)("li",{children:Object(B.jsx)(r.b,{to:"/techstack",className:c("techStack"),"data-cy":"nav-bar-techstack-link",onClick:function(){t(S("techStack"))},children:a("link.techStack")})})]}),Object(B.jsxs)("ul",{className:"nav-desktop-items__nav-list",children:[Object(B.jsx)("li",{children:Object(B.jsx)(Y,{path:A,styleClass:"nav-desktop-items__nav-list__nav-link",text:a("link.resume")})}),Object(B.jsx)("li",{children:Object(B.jsx)(r.b,{to:"/contact",className:c("contact"),"data-cy":"nav-bar-contact-link",onClick:function(){t(S("contact"))},children:a("link.contact")})}),Object(B.jsx)("li",{children:Object(B.jsx)(K,{styleClass:"nav-desktop-items__nav-list__select-language"})})]})]})},Q=a(17),U=a(18),X=function(){var e=G(R),t=D();return e?null:Object(B.jsx)(B.Fragment,{children:Object(B.jsx)("button",{type:"button",className:"nav-toggler","data-cy":"toggler",onClick:function(){t(C(!0)),t(w(!0)),setTimeout((function(){t(w(!1))}),1e3)},children:Object(B.jsx)(Q.a,{icon:U.a})})})},Z=function(){var e=D();return Object(B.jsx)("nav",{className:"nav-bar",children:Object(B.jsxs)("div",{className:"nav-bar__nav-items",children:[Object(B.jsx)(r.b,{to:"/",onClick:function(){e(S("home"))},children:Object(B.jsx)(J,{})}),Object(B.jsx)(W,{}),Object(B.jsx)(X,{})]})})},$=function(){var e=G(R),t=G(P),a=G(T),n=D(),s=Object(z.a)().t,i=function(){n(M(!0)),setTimeout((function(){n(M(!1)),n(C(!1))}),300)},l=Object(c.useMemo)((function(){return t?"nav-menu--fade-in":a?"nav-menu--fade-out":""}),[t,a]),o=function(e,c){return t?"".concat(e):a?"".concat(c):""};return e?Object(B.jsxs)("div",{className:"nav-menu ".concat(l),children:[Object(B.jsx)("div",{className:"nav-menu__close",children:Object(B.jsx)("button",{type:"button",className:"nav-menu__close__button",onClick:i,children:Object(B.jsx)(Q.a,{icon:U.e})})}),Object(B.jsxs)("ul",{className:"nav-menu__menu-list",children:[Object(B.jsx)("li",{className:"nav-menu__menu-list__menu-item ".concat(o("nav-menu__menu-list__menu-item--fade-in-speed1","nav-menu__menu-list__menu-item--fade-out-speed1")),children:Object(B.jsx)(r.b,{to:"/about",className:"nav-menu__menu-list__menu-link","data-cy":"nav-menu-about-link",onClick:i,children:s("link.about")})}),Object(B.jsx)("li",{className:"nav-menu__menu-list__menu-item ".concat(o("nav-menu__menu-list__menu-item--fade-in-speed2","nav-menu__menu-list__menu-item--fade-out-speed2")),children:Object(B.jsx)(r.b,{to:"/projects",className:"nav-menu__menu-list__menu-link","data-cy":"nav-menu-projects-link",onClick:i,children:s("link.projects")})}),Object(B.jsx)("li",{className:"nav-menu__menu-list__menu-item ".concat(o("nav-menu__menu-list__menu-item--fade-in-speed3","nav-menu__menu-list__menu-item--fade-out-speed3")),children:Object(B.jsx)(r.b,{to:"/techstack",className:"nav-menu__menu-list__menu-link","data-cy":"nav-menu-techstack-link",onClick:i,children:s("link.techStack")})}),Object(B.jsx)("li",{className:"nav-menu__menu-list__menu-item ".concat(o("nav-menu__menu-list__menu-item--fade-in-speed4","nav-menu__menu-list__menu-item--fade-out-speed4")),children:Object(B.jsx)(Y,{path:A,styleClass:"nav-menu__menu-list__menu-link",text:s("link.resume"),closeMenuHandler:i})}),Object(B.jsx)("li",{className:"nav-menu__menu-list__menu-item ".concat(o("nav-menu__menu-list__menu-item--fade-in-speed5","nav-menu__menu-list__menu-item--fade-out-speed5")),children:Object(B.jsx)(r.b,{to:"/contact",className:"nav-menu__menu-list__menu-link","data-cy":"nav-menu-contact-link",onClick:i,children:s("link.contact")})}),Object(B.jsx)("li",{className:"nav-menu__menu-list__menu-item ".concat(o("nav-menu__menu-list__menu-item--fade-in-speed6","nav-menu__menu-list__menu-item--fade-out-speed6")),children:Object(B.jsx)(K,{styleClass:"nav-menu__menu-list__menu-link nav-menu__menu-list__select-language",closeMenuHandler:i})})]})]}):null},ee=function(){var e=Object(z.a)().t,t=(new Date).getFullYear();return Object(B.jsxs)("footer",{className:"footer",children:[Object(B.jsxs)("span",{className:"footer__copyright-text",children:[" ",e("texts.footer.copyright")," ",t," ",e("texts.footer.appAuthor")]}),Object(B.jsxs)("ul",{className:"footer__navigation-list",children:[Object(B.jsx)("li",{children:Object(B.jsx)(Y,{path:"https://www.linkedin.com/in/christian-gerbig/",styleClass:"footer__navigation-link",faClass:"fa-linkedin"})}),Object(B.jsx)("li",{children:Object(B.jsx)(Y,{path:"https://github.com/christiangerbig/",styleClass:"footer__navigation-link",faClass:"fa-github"})})]})]})},te=a(16),ae=function(){return Object(B.jsxs)("div",{className:"home-logo home-logo--blur-in",children:[Object(B.jsx)("div",{className:"home-logo__letter-c-outline",children:Object(B.jsx)("div",{className:"home-logo__letter-c-inline"})}),Object(B.jsx)("div",{className:"home-logo__letter-g-outline",children:Object(B.jsx)("div",{className:"home-logo__letter-g-inline",children:Object(B.jsx)("div",{className:"home-logo__letter-g-box",children:Object(B.jsx)("div",{className:"home-logo__letter-g-box2"})})})})]})},ce=function(e){var t=e.headlines,a=t.headline,c=t.subheadline,n=e.borderColorName;return Object(B.jsxs)("div",{className:function(e){switch(e){case"green":return"header-text header-text__left-border header-text__left-border--green";case"orange":return"header-text header-text__left-border header-text__left-border--orange";case"violet":return"header-text header-text__left-border header-text__left-border--violet";case"blue":return"header-text header-text__left-border header-text__left-border--blue";default:return"header-text"}}(n),children:[Object(B.jsxs)("h1",{className:"header-text__headline header-text__font-size--large",children:[" ",a," "]}),Object(B.jsxs)("h2",{className:"header-text__subheadline header-text__font-size--small",children:[" ",c," "]})]})},ne=function(){var e=Object(z.a)().t,t=te.animateScroll.scrollToTop;return Object(c.useEffect)((function(){t()}),[]),Object(B.jsxs)("div",{className:"home","data-cy":"home-page",children:[Object(B.jsx)(ae,{}),Object(B.jsx)("header",{className:"header",children:Object(B.jsx)(ce,{headlines:{headline:e("texts.home.welcome.headline"),subheadline:e("texts.home.welcome.subheadline")},borderColorName:""})})]})},se=function(){var e=D(),t=Object(z.a)().t,a=te.animateScroll.scrollToTop;return Object(c.useEffect)((function(){a()}),[]),Object(B.jsxs)("div",{className:"about","data-cy":"about-page",children:[Object(B.jsx)("header",{className:"header",children:Object(B.jsx)(ce,{headlines:{headline:t("texts.about.headline"),subheadline:t("texts.about.subheadline")},borderColorName:"green"})}),Object(B.jsxs)("div",{className:"about__text",children:[Object(B.jsx)("div",{className:"about__text__text-colum",children:Object(B.jsxs)("article",{children:[Object(B.jsx)("header",{children:Object(B.jsx)("h3",{children:t("texts.about.personalDetails.headline")})}),Object(B.jsx)("p",{children:t("texts.about.personalDetails.paragraph1")}),Object(B.jsx)("p",{children:t("texts.about.personalDetails.paragraph2")}),Object(B.jsx)("p",{children:t("texts.about.personalDetails.paragraph3")}),Object(B.jsx)("p",{children:t("texts.about.personalDetails.paragraph4")})]})}),Object(B.jsx)("div",{className:"about__text__text-colum",children:Object(B.jsxs)("article",{children:[Object(B.jsx)("header",{children:Object(B.jsx)("h3",{children:t("texts.about.experience.headline")})}),Object(B.jsx)("p",{children:t("texts.about.experience.paragraph1")}),Object(B.jsx)("p",{children:t("texts.about.experience.paragraph2")}),Object(B.jsx)("p",{children:t("texts.about.experience.paragraph3")}),Object(B.jsx)("p",{children:t("texts.about.experience.paragraph4")}),Object(B.jsx)("p",{children:Object(B.jsx)("span",{onClick:function(){e(S("contact"))},children:Object(B.jsx)(r.b,{to:{pathname:"/contact"},className:"about__contact-link","data-cy":"alt-contact-link",children:t("texts.about.experience.contact")})})})]})})]})]})},ie=a.p+"static/media/jungle-swap.04645ba1.png",re=a.p+"static/media/trackertools.cdf33462.png",le=a.p+"static/media/letter-shooter.a0667b69.png",oe=function(e){var t=e.projectItem,a=t.projectName,c=t.projectPicturePath,n=t.projectVideoPath,s=t.projectDescription,i=t.deployedPath,r=t.gitHubClientPath,l=t.gitHubServerPath,o=Object(z.a)().t;return Object(B.jsxs)("div",{className:"project-details",children:[Object(B.jsx)("video",{width:"320",height:"170",muted:!0,controls:!0,poster:c,src:n}),Object(B.jsx)("div",{className:"project-details__description",children:Object(B.jsxs)("article",{children:[Object(B.jsx)("header",{children:Object(B.jsx)("h2",{className:"project-details__description__project-name",children:a})}),Object(B.jsx)("p",{className:"project-details__description__paragraph",children:s})]})}),Object(B.jsxs)("div",{className:"project-links",children:[Object(B.jsx)("div",{children:Object(B.jsx)(Y,{path:i,styleClass:"project-links__try-it-link",text:o("link.startApp")})}),Object(B.jsx)("div",{children:Object(B.jsx)(Y,{path:r,styleClass:"project-links__github-link",text:o("link.gitHubClient")})}),l&&Object(B.jsx)("div",{children:Object(B.jsx)(Y,{path:l,styleClass:"project-links__github-link",text:o("link.gitHubServer")})})]})]})},de=function(){var e=Object(z.a)().t,t=function(){var e=Object(z.a)().t;return[{projectName:e("texts.projects.jungleSwap.name"),projectPicturePath:ie,projectVideoPath:"https://bliskcloudstorage.blob.core.windows.net/videos/2c9bdc9d-6b6f-4823-844c-2a2cd5c36a86/15-May-2021-13-45-637566759460450173.mp4",projectDescription:e("texts.projects.jungleSwap.description"),deployedPath:"https://jungleswap.herokuapp.com/",gitHubClientPath:"https://github.com/christiangerbig/jungle-swap-client",gitHubServerPath:"https://github.com/christiangerbig/jungle-swap-server"},{projectName:e("texts.projects.trackerTools.name"),projectPicturePath:re,projectVideoPath:"https://bliskcloudstorage.blob.core.windows.net/videos/2c9bdc9d-6b6f-4823-844c-2a2cd5c36a86/15-May-2021-13-35-637566753722531829.mp4",projectDescription:e("texts.projects.trackerTools.description"),deployedPath:"https://trackertools.herokuapp.com/",gitHubClientPath:"https://github.com/christiangerbig/Trackertools",gitHubServerPath:""},{projectName:e("texts.projects.letterShooter.name"),projectPicturePath:le,projectVideoPath:"https://bliskcloudstorage.blob.core.windows.net/videos/2c9bdc9d-6b6f-4823-844c-2a2cd5c36a86/15-May-2021-14-10-637566774755686276.mp4",projectDescription:e("texts.projects.letterShooter.description"),deployedPath:"https://christiangerbig.github.io/letter-shooter/",gitHubClientPath:"https://github.com/christiangerbig/letter-shooter",gitHubServerPath:""}]}(),a=te.animateScroll.scrollToTop;return Object(c.useEffect)((function(){a()}),[]),Object(B.jsxs)("div",{className:"projects","data-cy":"projects-page",children:[Object(B.jsx)("header",{className:"header",children:Object(B.jsx)(ce,{headlines:{headline:e("texts.projects.headline"),subheadline:e("texts.projects.subheadline")},borderColorName:"orange"})}),Object(B.jsx)("div",{className:"projects__collection",children:t.map((function(e,t){return Object(B.jsx)(oe,{projectItem:e},"".concat(e.projectName).concat(t.toString()))}))})]})},ue=a.p+"static/media/Bootstrap-Logo.527d0fc0.svg",je=a.p+"static/media/Bulma-Logo.ecefb4da.svg",be=a.p+"static/media/Cloudinary-Logo.df0c0e93.svg",me=a.p+"static/media/Cypress-Logo.071c7e70.svg",he=a.p+"static/media/GitHub-Logo.11619ac0.svg",xe=a.p+"static/media/GitLab-Logo.83df9efb.svg",pe=a.p+"static/media/JavaScript(ES6)-Logo.a309520a.svg",_e=a.p+"static/media/MongoDB-Logo.153b7b44.svg",ge=a.p+"static/media/NodeJS-Logo.5a3a9ca2.svg",Oe=a.p+"static/media/NextJS-Logo.7ab4af8b.svg",ve=a.p+"static/media/NPM-Logo.5620a716.svg",fe=a.p+"static/media/React-Logo.ae626225.svg",Ne=a.p+"static/media/Redux-Logo.a9567540.svg",ke=a.p+"static/media/Sass-Logo.8351205a.svg",ye=a.p+"static/media/Tailwind-css-Logo.50fbcf51.svg",Ce=a.p+"static/media/TypeScript-Logo.17d5e87e.svg",we=a.p+"static/media/Visual-Studio-Code-Logo.f57bbf46.svg",Me=a.p+"static/media/Vue.js-Logo.4921ee76.svg",Se=a.p+"static/media/Webstorm-Logo.6cac5400.svg",Le=a.p+"static/media/Yarn-Logo.20176999.svg",qe=a.p+"static/media/GitKraken-Logo.f76e4685.svg",Re=a.p+"static/media/Bitbucket-Logo.68827fd5.svg",Pe=[fe,Ne,Me,ge,Oe,pe,Ce,me,ke,ye,a.p+"static/media/Mantine-Logo.e43c032a.svg",ue,je,_e,be,ve,Le,he,xe,Re,qe,we,Se],Te=function(){var e=Object(z.a)().t,t=te.animateScroll.scrollToTop;return Object(c.useEffect)((function(){t()}),[]),Object(B.jsxs)("div",{className:"tech-stack","data-cy":"tech-stack-page",children:[Object(B.jsx)("header",{className:"header",children:Object(B.jsx)(ce,{headlines:{headline:e("texts.techStack.headline"),subheadline:e("texts.techStack.subheadline")},borderColorName:"violet"})}),Object(B.jsx)("div",{className:"tech-stack__logo-collection",children:Pe.map((function(e,t){return Object(B.jsx)("div",{className:"tech-stack__logo",children:Object(B.jsx)("img",{src:e,loading:"lazy",alt:"firm logo",className:"tech-stack__logo__image"})},"".concat(e).concat(t.toString()))}))})]})},Ee=function(e){var t=e.message,a=e.output;return t&&t.includes("Form")?Object(B.jsx)("div",{className:"error-message error-message--color-red",children:Object(B.jsx)("span",{"data-cy":"error-text",children:a(t)})}):null},Ie=function(e){var t=e.path,a=e.styleClass,c=e.text;return Object(B.jsx)(B.Fragment,{children:Object(B.jsx)("span",{className:a,children:Object(B.jsx)(r.b,{to:{pathname:t},target:"_blank",className:"contact-link",children:Object(B.jsx)("h4",{children:c})})})})},Fe=function(e){var t=e.isCreatingRequest,a=e.handleSubmitRequest,n=Object(z.a)().t,s=Object(c.useMemo)((function(){return!!t}),[t]);return Object(B.jsx)(B.Fragment,{children:Object(B.jsxs)("form",{className:"contact-form",onSubmit:function(e){a(e)},children:[Object(B.jsx)("input",{type:"email",name:"email",placeholder:n("texts.contact.createRequest.form.inputEmail"),className:"contact-form__input","data-cy":"form-input-email"}),Object(B.jsx)("input",{type:"text",name:"subject",placeholder:n("texts.contact.createRequest.form.inputSubject"),className:"contact-form__input","data-cy":"form-input-subject"}),Object(B.jsx)("textarea",{name:"message",placeholder:n("texts.contact.createRequest.form.inputMessage"),cols:35,rows:7,className:"contact-form__text-area","data-cy":"form-input-message"}),Object(B.jsx)("button",{type:"submit",disabled:s,formNoValidate:!0,className:"contact-form__button","data-cy":"form-submit-request",children:n("button.submit")})]})})},He=function(){var e=G(E),t=G(I),a=D(),n=Object(V.f)().push,s=Object(z.a)().t,i=function(){var e=D();return{createRequest:function(t,a){e(p(t)).unwrap().then((function(){a()})).catch((function(t){e(L(t.message))}))}}}().createRequest,r=te.animateScroll.scrollToTop;Object(c.useEffect)((function(){a(L(null)),r()}),[]);return Object(B.jsxs)("div",{className:"contact","data-cy":"contact-page",children:[Object(B.jsx)("header",{className:"header",children:Object(B.jsx)(ce,{headlines:{headline:s("texts.contact.headline"),subheadline:s("texts.contact.subheadline")},borderColorName:"blue"})}),Object(B.jsxs)("div",{className:"contact__details",children:[Object(B.jsx)("h1",{className:"contact__details__name",children:s("texts.contact.name")}),Object(B.jsx)("h2",{className:"contact__details__jobname",children:s("texts.contact.jobname")}),Object(B.jsxs)("div",{className:"contact__ways",children:[Object(B.jsxs)("div",{children:[Object(B.jsxs)("h3",{className:"contact__ways__email-headline",children:[Object(B.jsx)(Q.a,{icon:U.b})," ",s("texts.contact.email")]}),Object(B.jsx)(Ie,{path:"mailto:chr_gerbig@web.de",styleClass:"contact-link",text:s("texts.contact.emailAddress")})]}),Object(B.jsxs)("div",{children:[Object(B.jsxs)("h3",{className:"contact__ways__phone-headline",children:[Object(B.jsx)(Q.a,{icon:U.c})," ",s("texts.contact.phone")]}),Object(B.jsx)(Ie,{path:"tel:+4915154824288",styleClass:"contact-link",text:s("texts.contact.phoneNumber")})]}),Object(B.jsxs)("div",{children:[Object(B.jsxs)("h3",{className:"contact__ways__form-headline",children:[Object(B.jsx)(Q.a,{icon:U.d})," ",s("texts.contact.submit")]}),Object(B.jsx)(Ee,{message:t,output:function(e){switch(e){case"Form: Email missing":return s("errorTexts.createRequest.form.emailMissing");case"Form: Subject missing":return s("errorTexts.createRequest.form.subjectMissing");case"Form: Message missing":return s("errorTexts.createRequest.form.messageMissing");case"Form: Email format invalid":return s("errorTexts.createRequest.form.emailFormatInvalid");default:return s("errorTexts.general")}}}),Object(B.jsx)(Fe,{isCreatingRequest:e,handleSubmitRequest:function(e){var t=e.target,c=t.email,s=t.subject,r=t.message,l={email:c.value,subject:s.value,message:r.value};e.preventDefault(),i(l,(function(){a(S("home")),n("/")}))}})]})]})]})]})},Ve=function(){var e=Object(z.a)().t;return Object(B.jsxs)("div",{className:"not-found",children:[Object(B.jsx)("header",{className:"header",children:Object(B.jsx)(ce,{headlines:{headline:e("texts.pageNotFound.headline"),subheadline:e("texts.pageNotFound.subheadline")},borderColorName:"orange"})}),Object(B.jsx)("div",{className:"not-found__get-back",children:Object(B.jsx)(r.b,{to:"/",className:"not-found__get-back__link",children:e("link.getBack")})})]})},De=a(66),Ge=function(e){var t=e.headline,a=e.text,n=e.isClose,s=Object(c.useRef)(null),i=D(),r=Object(z.a)().t,l=function(){i(L(null))};return Object(B.jsx)("div",{ref:s,className:"modal-body modal-body--fade-in",onClick:function(e){var t=e.target;s.current===t&&n&&l()},children:Object(B.jsxs)("div",{className:"modal-body__box",children:[Object(B.jsx)("h1",{children:t}),Object(B.jsx)("h2",{children:a}),n&&Object(B.jsx)("button",{className:"modal-body__box__button",onClick:l,children:r("button.proceed")})]})})},Be=function(e){var t=e.message,a=Object(z.a)().t;return!t||t.includes("Form")?null:Object(B.jsx)("div",{children:Object(B.jsx)(Ge,{headline:a("texts.errorModal.headline"),text:function(e){switch(e){case"Create request failed":return a("errorTexts.createRequest.createRequestFailed");default:return a("errorTexts.general")}}(t),isClose:!0})})},Je=function(e){var t=e.isOnline,a=Object(z.a)().t;return t?null:Object(B.jsx)("div",{children:Object(B.jsx)(Ge,{headline:a("texts.offlineModal.headline"),text:a("errorTexts.offline"),isClose:!1})})},ze=function(){var e=G(I),t=function(){var e=Object(c.useState)(!0),t=Object(De.a)(e,2),a=t[0],n=t[1];return Object(c.useEffect)((function(){var e=function(){n(!1)},t=function(){n(!0)};return window.addEventListener("offline",e),window.addEventListener("online",t),function(){window.removeEventListener("offline",e),window.removeEventListener("online",t)}}),[]),a}();return t?Object(B.jsx)(Be,{message:e}):Object(B.jsx)(Je,{isOnline:t})},Ae=Object(V.g)((function(){return Object(B.jsxs)("div",{children:[Object(B.jsx)(Z,{}),Object(B.jsx)($,{}),Object(B.jsxs)(V.c,{children:[Object(B.jsx)(V.a,{exact:!0,path:"/",children:Object(B.jsx)(ne,{})}),Object(B.jsx)(V.a,{path:"/about",children:Object(B.jsx)(se,{})}),Object(B.jsx)(V.a,{path:"/projects",children:Object(B.jsx)(de,{})}),Object(B.jsx)(V.a,{path:"/techstack",children:Object(B.jsx)(Te,{})}),Object(B.jsx)(V.a,{path:"/contact",children:Object(B.jsx)(He,{})}),Object(B.jsx)(V.a,{component:Ve})]}),Object(B.jsx)(ze,{}),Object(B.jsx)(ee,{})]})})),Ye=(a(109),a(43)),Ke=a(26),We=a(63),Qe=a(65);Ye.a.use(We.a).use(Qe.a).use(Ke.e).init({fallbackLng:"en",ns:["translation"],defaultNS:"translation",backend:{loadPath:"/locales/{{lng}}/{{ns}}.json"},debug:!1,interpolation:{escapeValue:!1}});Ye.a;i.a.render(Object(B.jsx)(n.a.StrictMode,{children:Object(B.jsx)(l.a,{store:H,children:Object(B.jsx)(r.a,{children:Object(B.jsx)(c.Suspense,{fallback:"loading",children:Object(B.jsx)(Ae,{})})})})}),document.querySelector("#root"))}},[[110,1,2]]]);
//# sourceMappingURL=main.0274f9eb.chunk.js.map