(this["webpackJsonpcreative-gallery-client"]=this["webpackJsonpcreative-gallery-client"]||[]).push([[0],{62:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),i=a(16),s=a.n(i),r=a(5),o=a(19),l=function(){return Object(o.b)()},d=o.c,j=(a(62),a(4)),u=a(34),b=a.n(u),h=a(50),m=a(20),p=a(51),g=a.n(p),x="".concat("https://creativegallery.herokuapp.com","/api"),O=function(e){throw new Error(e)},f=Object(m.b)("creativeGallery/createRequest",function(){var e=Object(h.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.request,e.prev=1,e.next=4,g.a.post("".concat(x,"/request/create"),a);case 4:e.next=9;break;case 6:return e.prev=6,e.t0=e.catch(1),e.abrupt("return",O(e.t0.response.data.errorMessage));case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}()),v=Object(m.c)({name:"creativeGallery",initialState:{menuItem:null,isDesktop:!1,isMenuVisible:!1,isOpenMenu:!1,isCloseMenu:!1,isCreatingRequest:!1,errorMessage:null},reducers:{setIsDesktop:function(e,t){e.isDesktop=t.payload},setIsMenuVisible:function(e,t){e.isMenuVisible=t.payload},setIsOpenMenu:function(e,t){e.isOpenMenu=t.payload},setIsCloseMenu:function(e,t){e.isCloseMenu=t.payload},setMenuItem:function(e,t){e.menuItem=t.payload},setIsCreatingRequest:function(e,t){e.isCreatingRequest=t.payload},setErrorMessage:function(e,t){e.errorMessage=t.payload}},extraReducers:function(e){e.addCase(f.fulfilled,(function(e){e.isCreatingRequest=!1})),e.addCase(f.rejected,(function(e){e.isCreatingRequest=!1}))}}),k=v.actions,N=k.setIsDesktop,C=k.setIsMenuVisible,w=k.setIsOpenMenu,y=k.setIsCloseMenu,M=k.setMenuItem,S=(k.setIsCreatingRequest,k.setErrorMessage),T=v.reducer,P=a(14),I=a(15),E=a(0),R=function(){return Object(E.jsxs)("div",{className:"logo-subcontainer",children:[Object(E.jsx)("div",{className:"logo-letter-c-outline",children:Object(E.jsx)("div",{className:"logo-letter-c-inline"})}),Object(E.jsx)("div",{className:"logo-letter-g-outline",children:Object(E.jsx)("div",{className:"logo-letter-g-inline",children:Object(E.jsx)("div",{className:"logo-letter-g-box",children:Object(E.jsx)("div",{className:"logo-letter-g-box2"})})})})]})},q=a(99),D="https://www.dropbox.com/s/x3m4bop3tn2pxjm/CV-Gerbig.pdf?dl=0",L=function(e){var t=e.linkPath,a=e.linkClass,n=e.linkText,c=e.faClass,i=e.onClickHandler;return Object(E.jsx)(E.Fragment,{children:Object(E.jsx)(j.b,{to:{pathname:t},target:"_blank",rel:"noreferrer noopener",className:a,onClick:i,children:n||(c?Object(E.jsx)("i",{className:"fab ".concat(c," is-white")}):null)})})},G=function(){var e=d((function(e){return e.creativeGallery.menuItem})),t=l(),a=Object(q.a)().t,n=function(e,t){return e===t?"navigation-link is-navigation-link-active":"navigation-link"};return Object(E.jsxs)("div",{className:"navigation-container",children:[Object(E.jsxs)("ul",{className:"navigation-subcontainer-left navigation-list",children:[Object(E.jsx)("li",{children:Object(E.jsx)(j.b,{to:"/about",className:n(e,"about"),onClick:function(){t(M("about"))},children:a("link.about")})}),Object(E.jsx)("li",{children:Object(E.jsx)(j.b,{to:"/projects",className:n(e,"projects"),onClick:function(){t(M("projects"))},children:a("link.projects")})}),Object(E.jsx)("li",{children:Object(E.jsx)(j.b,{to:"/techstack",className:n(e,"techStack"),onClick:function(){t(M("techStack"))},children:a("link.techStack")})})]}),Object(E.jsxs)("ul",{className:"navigation-subcontainer-right navigation-list",children:[Object(E.jsx)("li",{children:Object(E.jsx)(L,{linkPath:D,linkClass:"navigation-link",linkText:a("link.resume")})}),Object(E.jsx)("li",{children:Object(E.jsx)(j.b,{to:"/contact",className:n(e,"contact"),onClick:function(){t(M("contact"))},children:a("link.contact")})})]})]})},F=function(){var e=d((function(e){return e.creativeGallery.isDesktop})),t=l();Object(n.useEffect)((function(){var e=function(e,t){t(e);var a=function(){t(e)};return e.addEventListener("resize",a),a}(window,(function(e){e.innerWidth>1024?t(N(!0)):t(N(!1))}));return function(){var t,a;t=window,a=e,t.removeEventListener("resize",a)}}),[]);return Object(E.jsx)("div",{children:Object(E.jsx)("nav",{children:Object(E.jsxs)("div",{className:"navbar-container navbar-border",children:[Object(E.jsx)("div",{className:"logo-container",children:Object(E.jsx)(j.b,{to:"/",className:"is-text-style-plain is-white",onClick:function(){t(M("home"))},children:Object(E.jsx)(R,{})})}),e?Object(E.jsx)(G,{}):Object(E.jsx)("div",{children:Object(E.jsx)(P.a,{icon:I.a,onClick:function(){t(C(!0)),t(w(!0)),setTimeout((function(){t(w(!1))}),1e3)}})})]})})})},H=function(){var e=d((function(e){return e.creativeGallery.isDesktop})),t=d((function(e){return e.creativeGallery.isMenuVisible})),a=d((function(e){return e.creativeGallery.isOpenMenu})),n=d((function(e){return e.creativeGallery.isCloseMenu})),c=l(),i=Object(q.a)().t,s=function(){c(y(!0)),setTimeout((function(){c(y(!1)),c(C(!1))}),300)},r=function(e,t,a){return e?"menu-link is-warning ".concat(t):n?"menu-link is-warning ".concat(a):"menu-link is-warning"};return Object(E.jsx)(E.Fragment,{children:!e&&t&&Object(E.jsxs)("div",{className:function(e){return e?"menu fade-menu-in":n?"menu fade-menu-out":"menu"}(a),children:[Object(E.jsx)("div",{className:"close-menu-container",children:Object(E.jsx)(P.a,{icon:I.e,className:"close-menu is-white",onClick:s})}),Object(E.jsx)("div",{className:"menu-container",children:Object(E.jsx)("div",{className:"menu-subcontainer",children:Object(E.jsxs)("ul",{className:"navigation-list",children:[Object(E.jsx)("li",{children:Object(E.jsx)(j.b,{to:"/about",className:r(a,"menu-link-fade-in-speed1","menu-link-fade-out-speed1"),onClick:s,children:i("link.about")})}),Object(E.jsx)("li",{children:Object(E.jsx)(j.b,{to:"/projects",className:r(a,"menu-link-fade-in-speed2","menu-link-fade-out-speed2"),onClick:s,children:i("link.projects")})}),Object(E.jsx)("li",{children:Object(E.jsx)(j.b,{to:"/techstack",className:r(a,"menu-link-fade-in-speed3","menu-link-fade-out-speed3"),onClick:s,children:i("link.techStack")})}),Object(E.jsx)("li",{children:Object(E.jsx)(L,{linkPath:D,linkClass:r(a,"menu-link-fade-in-speed4","menu-link-fade-out-speed4"),linkText:i("link.resume"),onClickHandler:s})}),Object(E.jsx)("li",{children:Object(E.jsx)(j.b,{to:"/contact",className:r(a,"menu-link-fade-in-speed5","menu-link-fade-out-speed5"),onClick:s,children:i("link.contact")})})]})})})]})})},V=function(){var e=Object(q.a)().t,t=(new Date).getFullYear();return Object(E.jsx)("div",{children:Object(E.jsx)("footer",{children:Object(E.jsxs)("div",{className:"footer-container",children:[Object(E.jsxs)("span",{className:"copyright-text",children:[" ",e("footer.copyright")," ",t," ",e("footer.appAuthor")," "]}),Object(E.jsxs)("ul",{className:"footer-subcontainer navigation-list",children:[Object(E.jsx)("li",{children:Object(E.jsx)(L,{linkPath:"https://www.linkedin.com/in/christian-gerbig/",linkClass:"footer-link",faClass:"fa-linkedin"})}),Object(E.jsx)("li",{children:Object(E.jsx)(L,{linkPath:"https://github.com/christiangerbig/",linkClass:"footer-link",faClass:"fa-github"})})]})]})})})},A=a(13),B=function(){return Object(E.jsx)("div",{className:"blur-in",children:Object(E.jsxs)("div",{className:"home-logo-subcontainer",children:[Object(E.jsx)("div",{className:"home-logo-letter-c-outline",children:Object(E.jsx)("div",{className:"home-logo-letter-c-inline"})}),Object(E.jsx)("div",{className:"home-logo-letter-g-outline",children:Object(E.jsx)("div",{className:"home-logo-letter-g-inline",children:Object(E.jsx)("div",{className:"home-logo-letter-g-box",children:Object(E.jsx)("div",{className:"home-logo-letter-g-box2"})})})})]})})},W=function(e){var t=e.headlines,a=e.borderColorName,n=t.headline,c=t.subheadline;return Object(E.jsxs)("div",{className:function(e){switch(e){case"green":return"header-text is-border-green";case"orange":return"header-text is-border-orange";case"violet":return"header-text is-border-violet";case"blue":return"header-text is-border-blue";default:return"header-text"}}(a),children:[Object(E.jsxs)("h1",{className:"is-text-xlarge-size",children:[" ",n," "]}),Object(E.jsxs)("h2",{className:"is-text-large-size",children:[" ",c," "]})]})},U=function(){var e=Object(q.a)().t;return Object(n.useEffect)((function(){A.animateScroll.scrollToTop()}),[]),Object(E.jsxs)("div",{className:"home-page-container",children:[Object(E.jsx)(B,{}),Object(E.jsx)(W,{headlines:{headline:e("welcome.headline"),subheadline:e("welcome.subheadline")},borderColorName:""})]})},J=function(){var e=l(),t=Object(q.a)().t;return Object(n.useEffect)((function(){A.animateScroll.scrollToTop()}),[]),Object(E.jsxs)("div",{className:"about-page-container",children:[Object(E.jsx)("header",{className:"headline",children:Object(E.jsx)(W,{headlines:{headline:t("about.headline"),subheadline:t("about.subheadline")},borderColorName:"green"})}),Object(E.jsxs)("div",{className:"about-text-container",children:[Object(E.jsx)("div",{className:"about-text-colum-container",children:Object(E.jsxs)("article",{children:[Object(E.jsx)("header",{children:Object(E.jsxs)("h3",{children:[" ",t("about.personalDetails.headline")," "]})}),Object(E.jsxs)("p",{children:[" ",t("about.personalDetails.paragraph1")," "]}),Object(E.jsxs)("p",{children:[" ",t("about.personalDetails.paragraph2")," "]}),Object(E.jsxs)("p",{children:[" ",t("about.personalDetails.paragraph3")," "]}),Object(E.jsxs)("p",{children:[" ",t("about.personalDetails.paragraph4")," "]})]})}),Object(E.jsx)("div",{className:"about-text-colum-container",children:Object(E.jsxs)("article",{children:[Object(E.jsx)("header",{children:Object(E.jsxs)("h3",{children:[" ",t("about.experience.headline")," "]})}),Object(E.jsxs)("p",{children:[" ",t("about.experience.paragraph1")," "]}),Object(E.jsxs)("p",{children:[" ",t("about.experience.paragraph2")," "]}),Object(E.jsxs)("p",{children:[" ",t("about.experience.paragraph3")," "]}),Object(E.jsxs)("p",{children:[" ",t("about.experience.paragraph4")," "]}),Object(E.jsx)("p",{children:Object(E.jsx)("span",{className:"about-contact-link",onClick:function(){return e(M("contact"))},children:Object(E.jsx)(j.b,{to:{pathname:"/contact"},children:t("about.experience.contact")})})})]})})]})]})},z=[{projectName:"JUNGLE SWAP",projectPicturePath:a.p+"static/media/jungle-swap.04645ba1.png",projectVideoPath:"https://bliskcloudstorage.blob.core.windows.net/videos/2c9bdc9d-6b6f-4823-844c-2a2cd5c36a86/15-May-2021-13-45-637566759460450173.mp4",projectDescription:"Share your plant offshoots and make money or swap them for another plant. Shop and give a plant a new home.",deployedPath:"https://jungleswap.herokuapp.com/",gitHubClientPath:"https://github.com/christiangerbig/jungle-swap-client",gitHubServerPath:"https://github.com/christiangerbig/jungle-swap-server"},{projectName:"TRACKERTOOLS",projectPicturePath:a.p+"static/media/trackertools.cdf33462.png",projectVideoPath:"https://bliskcloudstorage.blob.core.windows.net/videos/2c9bdc9d-6b6f-4823-844c-2a2cd5c36a86/15-May-2021-13-35-637566753722531829.mp4",projectDescription:"Four powerful tools to make working with the music editor Protracker and its modules more comfortable.",deployedPath:"https://trackertools.herokuapp.com/",gitHubClientPath:"https://github.com/christiangerbig/Trackertools",gitHubServerPath:""},{projectName:"LETTER SHOOTER",projectPicturePath:a.p+"static/media/letter-shooter.a0667b69.png",projectVideoPath:"https://bliskcloudstorage.blob.core.windows.net/videos/2c9bdc9d-6b6f-4823-844c-2a2cd5c36a86/15-May-2021-14-10-637566774755686276.mp4",projectDescription:"A coordination and strategy game with the goal to hit the missing letters with precise shots.",deployedPath:"https://christiangerbig.github.io/letter-shooter/",gitHubClientPath:"https://github.com/christiangerbig/letter-shooter",gitHubServerPath:""}],_=function(e){var t=e.projectItem,a=Object(q.a)().t,n=t.projectName,c=t.projectPicturePath,i=t.projectVideoPath,s=t.projectDescription,r=t.deployedPath,o=t.gitHubClientPath,l=t.gitHubServerPath;return Object(E.jsxs)("div",{className:"project-details-container",children:[Object(E.jsx)("video",{width:"320",height:"200",muted:!0,controls:!0,poster:c,src:i}),Object(E.jsx)("div",{className:"project-description",children:Object(E.jsxs)("article",{children:[Object(E.jsx)("header",{children:Object(E.jsxs)("h2",{children:[" ",n," "]})}),Object(E.jsx)("div",{className:"project-description-container",children:Object(E.jsxs)("p",{children:[" ",s," "]})})]})}),Object(E.jsxs)("div",{className:"project-links-container",children:[Object(E.jsx)("div",{children:Object(E.jsx)(L,{linkPath:r,linkClass:"project-try-it-link",linkText:a("link.startApp")})}),Object(E.jsx)("div",{children:Object(E.jsx)(L,{linkPath:o,linkClass:"project-github-link",linkText:a("link.gitHubClient")})}),l&&Object(E.jsx)("div",{children:Object(E.jsx)(L,{linkPath:l,linkClass:"project-github-link",linkText:a("link.gitHubServer")})})]})]})},K=function(){var e=Object(q.a)().t;return Object(n.useEffect)((function(){A.animateScroll.scrollToTop()}),[]),Object(E.jsxs)("div",{className:"projects-page-container",children:[Object(E.jsx)("header",{className:"headline",children:Object(E.jsx)(W,{headlines:{headline:e("projects.headline"),subheadline:e("projects.subheadline")},borderColorName:"orange"})}),Object(E.jsx)("div",{className:"projects-container",children:z.map((function(e,t){return Object(E.jsx)(_,{projectItem:e},t)}))})]})},Y=a.p+"static/media/Bootstrap-Logo.527d0fc0.svg",Q=a.p+"static/media/Bulma-Logo.ecefb4da.svg",X=a.p+"static/media/Cloudinary-Logo.df0c0e93.svg",Z=a.p+"static/media/Cypress-Logo.071c7e70.svg",$=a.p+"static/media/GitHub-Logo.11619ac0.svg",ee=a.p+"static/media/GitLab-Logo.83df9efb.svg",te=a.p+"static/media/JavaScript(ES6)-Logo.a309520a.svg",ae=a.p+"static/media/MongoDB-Logo.153b7b44.svg",ne=a.p+"static/media/NodeJS-Logo.5a3a9ca2.svg",ce=a.p+"static/media/NPM-Logo.5620a716.svg",ie=a.p+"static/media/React-Logo.ae626225.svg",se=a.p+"static/media/Redux-Logo.a9567540.svg",re=a.p+"static/media/Sass-Logo.8351205a.svg",oe=a.p+"static/media/TypeScript-Logo.17d5e87e.svg",le=a.p+"static/media/Visual-Studio-Code-Logo.f57bbf46.svg",de=a.p+"static/media/Vue.js-Logo.4921ee76.svg",je=a.p+"static/media/Webstorm-Logo.6cac5400.svg",ue=[ie,se,de,ne,te,oe,re,Z,Y,Q,ae,X,ce,a.p+"static/media/Yarn-Logo.20176999.svg",$,ee,le,je],be=function(){var e=Object(q.a)().t;return Object(n.useEffect)((function(){A.animateScroll.scrollToTop()}),[]),Object(E.jsxs)("div",{className:"tech-stack-page-container",children:[Object(E.jsx)("header",{className:"headline",children:Object(E.jsx)(W,{headlines:{headline:e("techStack.headline"),subheadline:e("techStack.subheadline")},borderColorName:"violet"})}),Object(E.jsx)("div",{className:"tech-stack-logos-container",children:ue.map((function(e,t){return Object(E.jsx)("div",{className:"tech-stack-logo",children:Object(E.jsx)("img",{src:e,alt:"firm logo"},t)})}))})]})},he=function(e){var t=e.linkPath,a=e.linkClass,n=e.linkText;return Object(E.jsx)(E.Fragment,{children:Object(E.jsx)("span",{className:a,children:Object(E.jsx)(j.b,{to:{pathname:t},target:"_blank",children:Object(E.jsxs)("h4",{children:[" ",n," "]})})})})},me=function(e){var t=e.isCreatingRequest,a=e.handleSubmitRequest,n=Object(q.a)().t;return Object(E.jsx)(E.Fragment,{children:Object(E.jsxs)("form",{onSubmit:function(e){a(e)},children:[Object(E.jsx)("input",{type:"email",name:n("contactForm.inputEmail"),placeholder:"email",className:"form-input"}),Object(E.jsx)("input",{type:"text",name:n("contactForm.inputSubject"),placeholder:"subject",className:"form-input"}),Object(E.jsx)("textarea",{name:"message",placeholder:n("contactForm.inputMessage"),cols:35,rows:7,className:"form-textarea"}),Object(E.jsx)("button",{type:"submit",disabled:!!t,formNoValidate:!0,className:"form-submit",children:n("button.submit")})]})})},pe=function(e){var t=e.printErrorMessage,a=d((function(e){return e.creativeGallery.errorMessage}));return Object(E.jsx)(E.Fragment,{children:Object(E.jsx)("span",{className:"error-output is-danger",children:t(a)})})},ge=function(){var e=d((function(e){return e.creativeGallery.isCreatingRequest})),t=d((function(e){return e.creativeGallery.errorMessage})),a=l(),c=Object(r.f)(),i=Object(q.a)().t;Object(n.useEffect)((function(){a(S(null)),A.animateScroll.scrollToTop()}),[]);return Object(E.jsxs)("div",{className:"contact-page-container",children:[Object(E.jsx)("header",{className:"headline",children:Object(E.jsx)(W,{headlines:{headline:i("contact.headline"),subheadline:i("contact.subheadline")},borderColorName:"blue"})}),Object(E.jsxs)("div",{className:"contact-container",children:[Object(E.jsxs)("h1",{children:[" ",i("contact.name")," "]}),Object(E.jsxs)("h2",{children:[" ",i("contact.jobname")," "]}),Object(E.jsxs)("div",{className:"contact-ways-container",children:[Object(E.jsxs)("div",{className:"contact-email-container",children:[Object(E.jsxs)("h3",{children:[Object(E.jsx)(P.a,{icon:I.b})," ",i("contact.email")]}),Object(E.jsx)(he,{linkPath:"mailto:chr_gerbig@web.de",linkClass:"contact-link",linkText:"chr_gerbig(at)web.de"})]}),Object(E.jsxs)("div",{className:"contact-phone-container",children:[Object(E.jsxs)("h3",{children:[Object(E.jsx)(P.a,{icon:I.c})," ",i("contact.phone")]}),Object(E.jsx)(he,{linkPath:"tel:+4915154824288",linkClass:"contact-link",linkText:"+49\xa0151\xa0548\xa0242\xa088"})]})]}),Object(E.jsx)("div",{children:Object(E.jsxs)("h3",{children:[Object(E.jsx)(P.a,{icon:I.d})," ",i("contact.submit")]})}),t&&t.includes("Form")&&Object(E.jsx)(pe,{printErrorMessage:function(e){switch(e){case"Form: Email missing":return i("errors.request.form.emailMissing");case"Form: Subject missing":return i("errors.request.form.subjectMissing");case"Form: Message missing":return i("errors.request.form.messageMissing");case"Form: Invalid email format":return i("errors.request.form.incorrectEmail");default:return i("errors.general")}}}),Object(E.jsx)(me,{isCreatingRequest:e,handleSubmitRequest:function(e){e.preventDefault();var t=e.target,n=t.email,i=t.subject,s=t.message,r={email:n.value,subject:i.value,message:s.value};a(f({request:r})).unwrap().then((function(){a(M("home")),c.push("/")})).catch((function(e){a(S(e.message))}))}})]})]})},xe=function(){var e=Object(q.a)().t;return Object(E.jsxs)("div",{className:"page-not-found-container",children:[Object(E.jsx)("header",{className:"headline",children:Object(E.jsx)(W,{headlines:{headline:e("pageNotFound.headline"),subheadline:e("pageNotFound.subheadline")},borderColorName:"orange"})}),Object(E.jsx)("div",{className:"page-not-found-get-back-container",children:Object(E.jsx)(j.b,{to:"/",className:"page-not-found-get-back-link",children:e("link.getBack")})})]})},Oe=function(e){var t=e.errorMessage,a=Object(n.useRef)(null),c=l(),i=Object(q.a)().t,s=function(){c(S(null))};return Object(E.jsx)("div",{ref:a,className:"error-modal fade-error-modal-in",onClick:function(e){!function(e){a.current===e.target&&s()}(e)},children:Object(E.jsxs)("div",{className:"error-modal-box",children:[Object(E.jsx)("h1",{children:i("errorModal.headline")}),Object(E.jsx)("h2",{children:function(e){switch(e){case"Create request failed":return i("errors.request.createRequestFailed");default:return i("errors.general")}}(t)}),Object(E.jsx)("button",{className:"error-modal-button mt-4 mb-3",onClick:function(){s()},children:i("button.proceed")})]})})},fe=Object(r.g)((function(){var e=d((function(e){return e.creativeGallery.errorMessage}));return Object(E.jsxs)("div",{children:[Object(E.jsx)(F,{}),Object(E.jsx)(H,{}),Object(E.jsxs)(r.c,{children:[Object(E.jsx)(r.a,{exact:!0,path:"/",children:Object(E.jsx)(U,{})}),Object(E.jsx)(r.a,{path:"/about",children:Object(E.jsx)(J,{})}),Object(E.jsx)(r.a,{path:"/projects",children:Object(E.jsx)(K,{})}),Object(E.jsx)(r.a,{path:"/techstack",children:Object(E.jsx)(be,{})}),Object(E.jsx)(r.a,{path:"/contact",children:Object(E.jsx)(ge,{})}),Object(E.jsx)(r.a,{component:xe})]}),Object(E.jsx)(V,{}),e&&!e.includes("Form")&&Object(E.jsx)(Oe,{errorMessage:e})]})})),ve=Object(m.a)({reducer:{creativeGallery:T}}),ke=(a(97),a(37)),Ne=a(22),Ce={translations:{link:{about:"ABOUT",projects:"PROJECTS",techStack:"TECHSTACK",resume:"RESUME",contact:"CONTACT",startApp:"TRY IT",gitHubClient:"GIT HUB",gitHubServer:"GIT HUB 2",getBack:"GET BACK"},button:{submit:"SUBMIT",proceed:"PROCEED"},errors:{request:{form:{emailMissing:"Please enter an email",subjectMissing:"Please enter a subject",messageMissing:"Please enter a message",incorrectEmail:"The email format is incorrect"},createRequestFailed:"Creating the request failed"},general:"An error occured"},welcome:{headline:"Hi, I'm Christian",subheadline:"A passionate Web Developer"},about:{headline:"There is only one way",subheadline:"Straight forward",personalDetails:{headline:"Hi,",paragraph1:"I'm Christian Gerbig. I'm a Web Developer focused on Frontend and Backend technologies. My homebase is Hamburg in Germany.",paragraph2:"I believe in the positive power of communication with a trust in cooperative team working making an asset from sharing different points of views.",paragraph3:"I like to use every aspect of new technology available to reach the goals and love to code optimized solutions suiting individual requirements with respect to time, budget and target.",paragraph4:"My motto: Learning things, improving (them) and reach the goals."},experience:{headline:"How it began",paragraph1:"I started to learn the fundamentals of Web Development by myself and as a Full Stack Web Developper at Ironhack.",paragraph2:"I improved my skills to write Clean Code and learned in several Udemy courses to apply the Redux Toolkit and TypeScript together with React in my projects.",paragraph3:"Meanwhile I dived more into agile work as a trainee developer and learned to use Vue together with Vuex and wrote end-2-end tests for Cypress.",paragraph4:"I would like to become part of a team where I can apply, develop and share my skills.",contact:"Let's get in touch."}},projects:{headline:"My Web Developer projects",subheadline:"I was working on"},techStack:{headline:"The tech stack",subheadline:"I use"},contact:{headline:"Don't hesitate",subheadline:"to contact me",name:"Christian Gerbig",jobname:"Web Developer",email:"e-mail",phone:"phone",submit:"or write me"},contactForm:{inputEmail:"email",inputSubject:"subject",inputMessage:"message"},footer:{copyright:"\xa9",appAuthor:"Christian Gerbig"},pageNotFound:{headline:"ERROR 404",subheadline:"Page not found"},errorModal:{headline:"SOMETHING WENT WRONG"}}};ke.a.use(Ne.e).init({resources:{en:Ce},fallbackLng:"en",debug:!0,ns:["translations"],defaultNS:"translations",interpolation:{escapeValue:!1}});ke.a;s.a.render(Object(E.jsx)(c.a.StrictMode,{children:Object(E.jsx)(o.a,{store:ve,children:Object(E.jsx)(j.a,{children:Object(E.jsx)(fe,{})})})}),document.querySelector("#root"))}},[[98,1,2]]]);
//# sourceMappingURL=main.13dcb5c8.chunk.js.map