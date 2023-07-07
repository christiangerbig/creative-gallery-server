(this["webpackJsonpcreative-gallery-client"]=this["webpackJsonpcreative-gallery-client"]||[]).push([[0],{109:function(e,t,a){},110:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(21),i=a.n(n),r=a(4),l=a(23),o=a(24),u=a(40),d=a.n(u),j=a(58),b=a(59),m=a.n(b),h="".concat("https://creativegallery.herokuapp.com","/api"),x=function(e){throw new Error(e)},p=Object(o.b)("creativeGallery/createRequest",function(){var e=Object(j.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.post("".concat(h,"/request/create"),t);case 3:e.next=9;break;case 5:return e.prev=5,e.t0=e.catch(0),a=e.t0.response.data.errorMessage,e.abrupt("return",x(a));case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}()),_=Object(o.c)({name:"creativeGallery",initialState:{menuItem:null,isMenuVisible:!1,isOpenMenu:!1,isCloseMenu:!1,isCreatingRequest:!1,errorMessage:null},reducers:{setIsMenuVisible:function(e,t){var a=t.payload;e.isMenuVisible=a},setIsOpenMenu:function(e,t){var a=t.payload;e.isOpenMenu=a},setIsCloseMenu:function(e,t){var a=t.payload;e.isCloseMenu=a},setNavItem:function(e,t){var a=t.payload;e.menuItem=a},setIsCreatingRequest:function(e,t){var a=t.payload;e.isCreatingRequest=a},setErrorMessage:function(e,t){var a=t.payload;e.errorMessage=a}},extraReducers:function(e){e.addCase(p.fulfilled,(function(e){e.isCreatingRequest=!1})),e.addCase(p.rejected,(function(e){e.isCreatingRequest=!1}))}}),g=function(e){return e.creativeGallery.menuItem},O=function(e){return e.creativeGallery.isMenuVisible},v=function(e){return e.creativeGallery.isOpenMenu},f=function(e){return e.creativeGallery.isCloseMenu},N=function(e){return e.creativeGallery.isCreatingRequest},k=function(e){return e.creativeGallery.errorMessage},y=_.actions,C=y.setIsMenuVisible,M=y.setIsOpenMenu,w=y.setIsCloseMenu,S=y.setNavItem,L=(y.setIsCreatingRequest,y.setErrorMessage),P=g,q=O,R=v,T=f,E=N,I=k,F=_.reducer,H=Object(o.a)({reducer:{creativeGallery:F}}),G=a(5),D=function(){return Object(l.b)()},V=l.c,J=a(0),B=function(){return Object(J.jsxs)("div",{className:"nav-bar-logo",children:[Object(J.jsx)("div",{className:"nav-bar-logo__letter-c-outline",children:Object(J.jsx)("div",{className:"nav-bar-logo__letter-c-inline"})}),Object(J.jsx)("div",{className:"nav-bar-logo__letter-g-outline",children:Object(J.jsx)("div",{className:"nav-bar-logo__letter-g-inline",children:Object(J.jsx)("div",{className:"nav-bar-logo__letter-g-box",children:Object(J.jsx)("div",{className:"nav-bar-logo__letter-g-box2"})})})})]})},z=a(111),A="https://www.dropbox.com/s/mxp54x73yfut1z9/CV-Gerbig.pdf?dl=0",Y=function(e){var t=e.path,a=e.styleClass,c=e.text,s=e.faClass,n=e.closeMenuHandler;return Object(J.jsx)(J.Fragment,{children:Object(J.jsx)(r.b,{to:{pathname:t},target:"_blank",rel:"noreferrer noopener",className:a,onClick:n,children:function(e,t){return e?Object(J.jsx)("span",{children:e}):t?Object(J.jsx)("i",{className:"fab ".concat(t)}):null}(c,s)})})},K=function(e){var t=e.styleClass,a=e.closeMenuHandler,c=Object(z.a)(),s=c.t,n=c.i18n;return Object(J.jsx)("div",{children:Object(J.jsxs)("select",{className:t,"data-cy":"select-language",onChange:function(e){var t=e.target.value;n.changeLanguage(t),"undefined"!==typeof a&&a()},children:[Object(J.jsx)("option",{value:"",children:s("select.language.placeholder")}),Object(J.jsx)("option",{value:"de",children:s("select.language.german")}),Object(J.jsx)("option",{value:"en",className:"navigation-list__select-language__option",children:s("select.language.english")})]})})},W=function(){var e=V(P),t=D(),a=Object(z.a)().t,c=function(t){return t===e?"nav-desktop-items__nav-list__nav-link nav-desktop-items__nav-list__nav-link--active":"nav-desktop-items__nav-list__nav-link"};return Object(J.jsxs)("div",{className:"nav-desktop-items",children:[Object(J.jsxs)("ul",{className:"nav-desktop-items__nav-list",children:[Object(J.jsx)("li",{children:Object(J.jsx)(r.b,{to:"/about",className:c("about"),"data-cy":"nav-bar-about-link",onClick:function(){t(S("about"))},children:a("link.about")})}),Object(J.jsx)("li",{children:Object(J.jsx)(r.b,{to:"/projects",className:c("projects"),"data-cy":"nav-bar-projects-link",onClick:function(){t(S("projects"))},children:a("link.projects")})}),Object(J.jsx)("li",{children:Object(J.jsx)(r.b,{to:"/techstack",className:c("techStack"),"data-cy":"nav-bar-techstack-link",onClick:function(){t(S("techStack"))},children:a("link.techStack")})})]}),Object(J.jsxs)("ul",{className:"nav-desktop-items__nav-list",children:[Object(J.jsx)("li",{children:Object(J.jsx)(Y,{path:A,styleClass:"nav-desktop-items__nav-list__nav-link",text:a("link.resume")})}),Object(J.jsx)("li",{children:Object(J.jsx)(r.b,{to:"/contact",className:c("contact"),"data-cy":"nav-bar-contact-link",onClick:function(){t(S("contact"))},children:a("link.contact")})}),Object(J.jsx)("li",{children:Object(J.jsx)(K,{styleClass:"nav-desktop-items__nav-list__select-language"})})]})]})},Q=a(17),U=a(18),X=function(){var e=V(q),t=D();return e?null:Object(J.jsx)(J.Fragment,{children:Object(J.jsx)("button",{type:"button",className:"nav-toggler","data-cy":"toggler",onClick:function(){t(C(!0)),t(M(!0)),setTimeout((function(){t(M(!1))}),1e3)},children:Object(J.jsx)(Q.a,{icon:U.a})})})},Z=function(){var e=D();return Object(J.jsx)("nav",{className:"nav-bar",children:Object(J.jsxs)("div",{className:"nav-bar__nav-items",children:[Object(J.jsx)(r.b,{to:"/",onClick:function(){e(S("home"))},children:Object(J.jsx)(B,{})}),Object(J.jsx)(W,{}),Object(J.jsx)(X,{})]})})},$=function(){var e=V(q),t=V(R),a=V(T),s=D(),n=Object(z.a)().t,i=function(){s(w(!0)),setTimeout((function(){s(w(!1)),s(C(!1))}),300)},l=Object(c.useMemo)((function(){return t?"nav-menu--fade-in":a?"nav-menu--fade-out":""}),[t,a]),o=function(e,c){return t?"".concat(e):a?"".concat(c):""};return e?Object(J.jsxs)("div",{className:"nav-menu ".concat(l),children:[Object(J.jsx)("div",{className:"nav-menu__close",children:Object(J.jsx)("button",{type:"button",className:"nav-menu__close__button",onClick:i,children:Object(J.jsx)(Q.a,{icon:U.e})})}),Object(J.jsxs)("ul",{className:"nav-menu__menu-list",children:[Object(J.jsx)("li",{className:"nav-menu__menu-list__menu-item ".concat(o("nav-menu__menu-list__menu-item--fade-in-speed1","nav-menu__menu-list__menu-item--fade-out-speed1")),children:Object(J.jsx)(r.b,{to:"/about",className:"nav-menu__menu-list__menu-link","data-cy":"nav-menu-about-link",onClick:i,children:n("link.about")})}),Object(J.jsx)("li",{className:"nav-menu__menu-list__menu-item ".concat(o("nav-menu__menu-list__menu-item--fade-in-speed2","nav-menu__menu-list__menu-item--fade-out-speed2")),children:Object(J.jsx)(r.b,{to:"/projects",className:"nav-menu__menu-list__menu-link","data-cy":"nav-menu-projects-link",onClick:i,children:n("link.projects")})}),Object(J.jsx)("li",{className:"nav-menu__menu-list__menu-item ".concat(o("nav-menu__menu-list__menu-item--fade-in-speed3","nav-menu__menu-list__menu-item--fade-out-speed3")),children:Object(J.jsx)(r.b,{to:"/techstack",className:"nav-menu__menu-list__menu-link","data-cy":"nav-menu-techstack-link",onClick:i,children:n("link.techStack")})}),Object(J.jsx)("li",{className:"nav-menu__menu-list__menu-item ".concat(o("nav-menu__menu-list__menu-item--fade-in-speed4","nav-menu__menu-list__menu-item--fade-out-speed4")),children:Object(J.jsx)(Y,{path:A,styleClass:"nav-menu__menu-list__menu-link",text:n("link.resume"),closeMenuHandler:i})}),Object(J.jsx)("li",{className:"nav-menu__menu-list__menu-item ".concat(o("nav-menu__menu-list__menu-item--fade-in-speed5","nav-menu__menu-list__menu-item--fade-out-speed5")),children:Object(J.jsx)(r.b,{to:"/contact",className:"nav-menu__menu-list__menu-link","data-cy":"nav-menu-contact-link",onClick:i,children:n("link.contact")})}),Object(J.jsx)("li",{className:"nav-menu__menu-list__menu-item ".concat(o("nav-menu__menu-list__menu-item--fade-in-speed6","nav-menu__menu-list__menu-item--fade-out-speed6")),children:Object(J.jsx)(K,{styleClass:"nav-menu__menu-list__menu-link nav-menu__menu-list__select-language",closeMenuHandler:i})})]})]}):null},ee=function(){var e=Object(z.a)().t,t=(new Date).getFullYear();return Object(J.jsxs)("footer",{className:"footer",children:[Object(J.jsxs)("span",{className:"footer__copyright-text",children:[" ",e("texts.footer.copyright")," ",t," ",e("texts.footer.appAuthor")]}),Object(J.jsxs)("ul",{className:"footer__navigation-list",children:[Object(J.jsx)("li",{children:Object(J.jsx)(Y,{path:"https://www.linkedin.com/in/christian-gerbig/",styleClass:"footer__navigation-link",faClass:"fa-linkedin"})}),Object(J.jsx)("li",{children:Object(J.jsx)(Y,{path:"https://github.com/christiangerbig/",styleClass:"footer__navigation-link",faClass:"fa-github"})})]})]})},te=a(16),ae=function(){return Object(J.jsxs)("div",{className:"home-logo home-logo--blur-in",children:[Object(J.jsx)("div",{className:"home-logo__letter-c-outline",children:Object(J.jsx)("div",{className:"home-logo__letter-c-inline"})}),Object(J.jsx)("div",{className:"home-logo__letter-g-outline",children:Object(J.jsx)("div",{className:"home-logo__letter-g-inline",children:Object(J.jsx)("div",{className:"home-logo__letter-g-box",children:Object(J.jsx)("div",{className:"home-logo__letter-g-box2"})})})})]})},ce=function(e){var t=e.headlines,a=t.headline,c=t.subheadline,s=e.borderColorName;return Object(J.jsxs)("div",{className:function(e){switch(e){case"green":return"header-text header-text__left-border header-text__left-border--green";case"orange":return"header-text header-text__left-border header-text__left-border--orange";case"violet":return"header-text header-text__left-border header-text__left-border--violet";case"blue":return"header-text header-text__left-border header-text__left-border--blue";default:return"header-text"}}(s),children:[Object(J.jsxs)("h1",{className:"header-text__headline header-text__font-size--large",children:[" ",a," "]}),Object(J.jsxs)("h2",{className:"header-text__subheadline header-text__font-size--small",children:[" ",c," "]})]})},se=function(){var e=Object(z.a)().t,t=te.animateScroll.scrollToTop;return Object(c.useEffect)((function(){t()}),[]),Object(J.jsxs)("div",{className:"home","data-cy":"home-page",children:[Object(J.jsx)(ae,{}),Object(J.jsx)("header",{className:"header",children:Object(J.jsx)(ce,{headlines:{headline:e("texts.home.welcome.headline"),subheadline:e("texts.home.welcome.subheadline")},borderColorName:""})})]})},ne=function(){var e=D(),t=Object(z.a)().t,a=te.animateScroll.scrollToTop;return Object(c.useEffect)((function(){a()}),[]),Object(J.jsxs)("div",{className:"about","data-cy":"about-page",children:[Object(J.jsx)("header",{className:"header",children:Object(J.jsx)(ce,{headlines:{headline:t("texts.about.headline"),subheadline:t("texts.about.subheadline")},borderColorName:"green"})}),Object(J.jsxs)("div",{className:"about__text",children:[Object(J.jsx)("div",{className:"about__text__text-colum",children:Object(J.jsxs)("article",{children:[Object(J.jsx)("header",{children:Object(J.jsx)("h3",{children:t("texts.about.personalDetails.headline")})}),Object(J.jsx)("p",{children:t("texts.about.personalDetails.paragraph1")}),Object(J.jsx)("p",{children:t("texts.about.personalDetails.paragraph2")}),Object(J.jsx)("p",{children:t("texts.about.personalDetails.paragraph3")}),Object(J.jsx)("p",{children:t("texts.about.personalDetails.paragraph4")})]})}),Object(J.jsx)("div",{className:"about__text__text-colum",children:Object(J.jsxs)("article",{children:[Object(J.jsx)("header",{children:Object(J.jsx)("h3",{children:t("texts.about.experience.headline")})}),Object(J.jsx)("p",{children:t("texts.about.experience.paragraph1")}),Object(J.jsx)("p",{children:t("texts.about.experience.paragraph2")}),Object(J.jsx)("p",{children:t("texts.about.experience.paragraph3")}),Object(J.jsx)("p",{children:t("texts.about.experience.paragraph4")}),Object(J.jsx)("p",{children:Object(J.jsx)("span",{onClick:function(){e(S("contact"))},children:Object(J.jsx)(r.b,{to:{pathname:"/contact"},className:"about__contact-link","data-cy":"alt-contact-link",children:t("texts.about.experience.contact")})})})]})})]})]})},ie=a.p+"static/media/PahnkeMovieNight-screenshot-desktop.7882973d.png",re=a.p+"static/media/PahnkeMovieNight-screenshot-mobile.e5ad9396.png",le=a.p+"static/media/JungleSwap-screenshot-desktop.372f510d.png",oe=a.p+"static/media/JungleSwap-screenshot-mobile.5409e5e5.png",ue=a.p+"static/media/Trackertools-screenshot-desktop.d6011207.png",de=a.p+"static/media/Trackertools-screenshot-mobile.edf8665e.png",je=function(e){var t=e.projectItem,a=t.projectName,c=t.projectPicturePath1,s=t.projectPicturePath2,n=t.projectDescription,i=t.gitHubClientPath,r=t.gitHubServerPath,l=Object(z.a)().t;return Object(J.jsxs)("div",{className:"project-details",children:[Object(J.jsxs)("div",{className:"project-details__screenshots-box",children:[Object(J.jsx)("div",{className:"project-details__screenshot-desktop",children:Object(J.jsx)("img",{src:c,alt:"",className:"project-details__screenshot-desktop__image"})}),Object(J.jsx)("div",{className:"project-details__screenshot-mobile",children:Object(J.jsx)("img",{src:s,alt:"",className:"project-details__screenshot-mobile__image"})})]}),Object(J.jsxs)("div",{className:"project-details__description",children:[Object(J.jsxs)("article",{children:[Object(J.jsx)("header",{children:Object(J.jsx)("h3",{className:"project-details__description__project-name",children:a})}),Object(J.jsx)("p",{className:"project-details__description__paragraph",children:n})]}),Object(J.jsxs)("div",{className:"project-links",children:[Object(J.jsx)("div",{children:Object(J.jsx)(Y,{path:i,styleClass:"project-links__github-link",text:"".concat(l("link.gitHub")," ").concat(r?"1":"")})}),r&&Object(J.jsx)("div",{children:Object(J.jsx)(Y,{path:r,styleClass:"project-links__github-link",text:"".concat(l("link.gitHub")," 2")})})]})]})]})},be=function(){var e=Object(z.a)().t,t=function(){var e=Object(z.a)().t;return[{projectName:e("texts.projects.pahnkeMovieNight.name"),projectPicturePath1:ie,projectPicturePath2:re,projectDescription:e("texts.projects.pahnkeMovieNight.description"),gitHubClientPath:"https://github.com/christiangerbig/pahnke-movie-night",gitHubServerPath:""},{projectName:e("texts.projects.jungleSwap.name"),projectPicturePath1:le,projectPicturePath2:oe,projectDescription:e("texts.projects.jungleSwap.description"),gitHubClientPath:"https://github.com/christiangerbig/jungle-swap-client",gitHubServerPath:"https://github.com/christiangerbig/jungle-swap-server"},{projectName:e("texts.projects.trackerTools.name"),projectPicturePath1:ue,projectPicturePath2:de,projectDescription:e("texts.projects.trackerTools.description"),gitHubClientPath:"https://github.com/christiangerbig/Trackertools",gitHubServerPath:""}]}(),a=te.animateScroll.scrollToTop;return Object(c.useEffect)((function(){a()}),[]),Object(J.jsxs)("div",{className:"projects","data-cy":"projects-page",children:[Object(J.jsx)("header",{className:"header",children:Object(J.jsx)(ce,{headlines:{headline:e("texts.projects.headline"),subheadline:e("texts.projects.subheadline")},borderColorName:"orange"})}),Object(J.jsx)("div",{className:"projects__collection",children:t.map((function(e,t){return Object(J.jsx)(je,{projectItem:e},"".concat(e.projectName).concat(t.toString()))}))})]})},me=a.p+"static/media/Bootstrap-Logo.527d0fc0.svg",he=a.p+"static/media/Bulma-Logo.ecefb4da.svg",xe=a.p+"static/media/Cloudinary-Logo.df0c0e93.svg",pe=a.p+"static/media/Cypress-Logo.071c7e70.svg",_e=a.p+"static/media/GitHub-Logo.11619ac0.svg",ge=a.p+"static/media/GitLab-Logo.83df9efb.svg",Oe=a.p+"static/media/JavaScript(ES6)-Logo.a309520a.svg",ve=a.p+"static/media/MongoDB-Logo.153b7b44.svg",fe=a.p+"static/media/NodeJS-Logo.5a3a9ca2.svg",Ne=a.p+"static/media/NextJS-Logo.7ab4af8b.svg",ke=a.p+"static/media/NPM-Logo.5620a716.svg",ye=a.p+"static/media/React-Logo.ae626225.svg",Ce=a.p+"static/media/Redux-Logo.a9567540.svg",Me=a.p+"static/media/Sass-Logo.8351205a.svg",we=a.p+"static/media/Tailwind-css-Logo.50fbcf51.svg",Se=a.p+"static/media/TypeScript-Logo.17d5e87e.svg",Le=a.p+"static/media/Visual-Studio-Code-Logo.f57bbf46.svg",Pe=a.p+"static/media/Vue.js-Logo.4921ee76.svg",qe=a.p+"static/media/Webstorm-Logo.6cac5400.svg",Re=a.p+"static/media/Yarn-Logo.20176999.svg",Te=a.p+"static/media/GitKraken-Logo.f76e4685.svg",Ee=a.p+"static/media/Bitbucket-Logo.68827fd5.svg",Ie=[ye,Ce,Pe,fe,Ne,Oe,Se,pe,Me,we,a.p+"static/media/Mantine-Logo.e43c032a.svg",me,he,ve,a.p+"static/media/Supabase-Logo.9f6561d6.svg",xe,ke,Re,_e,ge,Ee,Te,Le,qe],Fe=function(){var e=Object(z.a)().t,t=te.animateScroll.scrollToTop;return Object(c.useEffect)((function(){t()}),[]),Object(J.jsxs)("div",{className:"tech-stack","data-cy":"tech-stack-page",children:[Object(J.jsx)("header",{className:"header",children:Object(J.jsx)(ce,{headlines:{headline:e("texts.techStack.headline"),subheadline:e("texts.techStack.subheadline")},borderColorName:"violet"})}),Object(J.jsx)("div",{className:"tech-stack__logo-collection",children:Ie.map((function(e,t){return Object(J.jsx)("div",{className:"tech-stack__logo",children:Object(J.jsx)("img",{src:e,loading:"lazy",alt:"firm logo",className:"tech-stack__logo__image"})},"".concat(e).concat(t.toString()))}))})]})},He=function(e){var t=e.message,a=e.output;return t&&t.includes("Form")?Object(J.jsx)("div",{className:"error-message error-message--color-red",children:Object(J.jsx)("span",{"data-cy":"error-text",children:a(t)})}):null},Ge=function(e){var t=e.path,a=e.styleClass,c=e.text;return Object(J.jsx)(J.Fragment,{children:Object(J.jsx)("span",{className:a,children:Object(J.jsx)(r.b,{to:{pathname:t},target:"_blank",className:"contact-link",children:Object(J.jsx)("h4",{children:c})})})})},De=function(e){var t=e.isCreatingRequest,a=e.handleSubmitRequest,s=Object(z.a)().t,n=Object(c.useMemo)((function(){return!!t}),[t]);return Object(J.jsx)(J.Fragment,{children:Object(J.jsxs)("form",{className:"contact-form",onSubmit:function(e){a(e)},children:[Object(J.jsx)("input",{type:"email",name:"email",placeholder:s("texts.contact.createRequest.form.inputEmail"),className:"contact-form__input","data-cy":"form-input-email"}),Object(J.jsx)("input",{type:"text",name:"subject",placeholder:s("texts.contact.createRequest.form.inputSubject"),className:"contact-form__input","data-cy":"form-input-subject"}),Object(J.jsx)("textarea",{name:"message",placeholder:s("texts.contact.createRequest.form.inputMessage"),cols:35,rows:7,className:"contact-form__text-area","data-cy":"form-input-message"}),Object(J.jsx)("button",{type:"submit",disabled:n,formNoValidate:!0,className:"contact-form__button","data-cy":"form-submit-request",children:s("button.submit")})]})})},Ve=function(){var e=V(E),t=V(I),a=D(),s=Object(G.f)().push,n=Object(z.a)().t,i=function(){var e=D();return{createRequest:function(t,a){e(p(t)).unwrap().then((function(){a()})).catch((function(t){e(L(t.message))}))}}}().createRequest,r=te.animateScroll.scrollToTop;Object(c.useEffect)((function(){a(L(null)),r()}),[]);return Object(J.jsxs)("div",{className:"contact","data-cy":"contact-page",children:[Object(J.jsx)("header",{className:"header",children:Object(J.jsx)(ce,{headlines:{headline:n("texts.contact.headline"),subheadline:n("texts.contact.subheadline")},borderColorName:"blue"})}),Object(J.jsxs)("div",{className:"contact__details",children:[Object(J.jsx)("h1",{className:"contact__details__name",children:n("texts.contact.name")}),Object(J.jsx)("h2",{className:"contact__details__jobname",children:n("texts.contact.jobname")}),Object(J.jsxs)("div",{className:"contact__ways",children:[Object(J.jsxs)("div",{children:[Object(J.jsxs)("h3",{className:"contact__ways__email-headline",children:[Object(J.jsx)(Q.a,{icon:U.b})," ",n("texts.contact.email")]}),Object(J.jsx)(Ge,{path:"mailto:chr_gerbig@web.de",styleClass:"contact-link",text:n("texts.contact.emailAddress")})]}),Object(J.jsxs)("div",{children:[Object(J.jsxs)("h3",{className:"contact__ways__phone-headline",children:[Object(J.jsx)(Q.a,{icon:U.c})," ",n("texts.contact.phone")]}),Object(J.jsx)(Ge,{path:"tel:+4915154824288",styleClass:"contact-link",text:n("texts.contact.phoneNumber")})]}),Object(J.jsxs)("div",{children:[Object(J.jsxs)("h3",{className:"contact__ways__form-headline",children:[Object(J.jsx)(Q.a,{icon:U.d})," ",n("texts.contact.submit")]}),Object(J.jsx)(He,{message:t,output:function(e){switch(e){case"Form: Email missing":return n("errorTexts.createRequest.form.emailMissing");case"Form: Subject missing":return n("errorTexts.createRequest.form.subjectMissing");case"Form: Message missing":return n("errorTexts.createRequest.form.messageMissing");case"Form: Email format invalid":return n("errorTexts.createRequest.form.emailFormatInvalid");default:return n("errorTexts.general")}}}),Object(J.jsx)(De,{isCreatingRequest:e,handleSubmitRequest:function(e){var t=e.target,c=t.email,n=t.subject,r=t.message,l={email:c.value,subject:n.value,message:r.value};e.preventDefault(),i(l,(function(){a(S("home")),s("/")}))}})]})]})]})]})},Je=function(){var e=Object(z.a)().t;return Object(J.jsxs)("div",{className:"not-found",children:[Object(J.jsx)("header",{className:"header",children:Object(J.jsx)(ce,{headlines:{headline:e("texts.pageNotFound.headline"),subheadline:e("texts.pageNotFound.subheadline")},borderColorName:"orange"})}),Object(J.jsx)("div",{className:"not-found__get-back",children:Object(J.jsx)(r.b,{to:"/",className:"not-found__get-back__link",children:e("link.getBack")})})]})},Be=a(66),ze=function(e){var t=e.headline,a=e.text,s=e.isClose,n=Object(c.useRef)(null),i=D(),r=Object(z.a)().t,l=function(){i(L(null))};return Object(J.jsx)("div",{ref:n,className:"modal-body modal-body--fade-in",onClick:function(e){var t=e.target;n.current===t&&s&&l()},children:Object(J.jsxs)("div",{className:"modal-body__box",children:[Object(J.jsx)("h1",{children:t}),Object(J.jsx)("h2",{children:a}),s&&Object(J.jsx)("button",{className:"modal-body__box__button",onClick:l,children:r("button.proceed")})]})})},Ae=function(e){var t=e.message,a=Object(z.a)().t;return!t||t.includes("Form")?null:Object(J.jsx)("div",{children:Object(J.jsx)(ze,{headline:a("texts.errorModal.headline"),text:function(e){switch(e){case"Create request failed":return a("errorTexts.createRequest.createRequestFailed");default:return a("errorTexts.general")}}(t),isClose:!0})})},Ye=function(e){var t=e.isOnline,a=Object(z.a)().t;return t?null:Object(J.jsx)("div",{children:Object(J.jsx)(ze,{headline:a("texts.offlineModal.headline"),text:a("errorTexts.offline"),isClose:!1})})},Ke=function(){var e=V(I),t=function(){var e=Object(c.useState)(!0),t=Object(Be.a)(e,2),a=t[0],s=t[1];return Object(c.useEffect)((function(){var e=function(){s(!1)},t=function(){s(!0)};return window.addEventListener("offline",e),window.addEventListener("online",t),function(){window.removeEventListener("offline",e),window.removeEventListener("online",t)}}),[]),a}();return t?Object(J.jsx)(Ae,{message:e}):Object(J.jsx)(Ye,{isOnline:t})},We=Object(G.g)((function(){return Object(J.jsxs)("div",{children:[Object(J.jsx)(Z,{}),Object(J.jsx)($,{}),Object(J.jsxs)(G.c,{children:[Object(J.jsx)(G.a,{exact:!0,path:"/",children:Object(J.jsx)(se,{})}),Object(J.jsx)(G.a,{path:"/about",children:Object(J.jsx)(ne,{})}),Object(J.jsx)(G.a,{path:"/projects",children:Object(J.jsx)(be,{})}),Object(J.jsx)(G.a,{path:"/techstack",children:Object(J.jsx)(Fe,{})}),Object(J.jsx)(G.a,{path:"/contact",children:Object(J.jsx)(Ve,{})}),Object(J.jsx)(G.a,{component:Je})]}),Object(J.jsx)(Ke,{}),Object(J.jsx)(ee,{})]})})),Qe=(a(109),a(43)),Ue=a(26),Xe=a(63),Ze=a(65);Qe.a.use(Xe.a).use(Ze.a).use(Ue.e).init({fallbackLng:"en",ns:["translation"],defaultNS:"translation",backend:{loadPath:"/locales/{{lng}}/{{ns}}.json"},debug:!1,interpolation:{escapeValue:!1}});Qe.a;i.a.render(Object(J.jsx)(s.a.StrictMode,{children:Object(J.jsx)(l.a,{store:H,children:Object(J.jsx)(r.a,{children:Object(J.jsx)(c.Suspense,{fallback:"loading",children:Object(J.jsx)(We,{})})})})}),document.querySelector("#root"))}},[[110,1,2]]]);
//# sourceMappingURL=main.e5783618.chunk.js.map