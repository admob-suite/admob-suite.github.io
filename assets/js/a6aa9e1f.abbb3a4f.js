(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[3089],{8455:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return g}});var r=t(3289),n=t(427),l=t(2920),i=t(1322),s=t(8861),m=t(3091);var c=function(e){var a=e.metadata,t=a.previousPage,n=a.nextPage;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,m.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},r.createElement("div",{className:"pagination-nav__item"},t&&r.createElement(s.Z,{className:"pagination-nav__link",to:t},r.createElement("div",{className:"pagination-nav__label"},"\xab"," ",r.createElement(m.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),r.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&r.createElement(s.Z,{className:"pagination-nav__link",to:n},r.createElement("div",{className:"pagination-nav__label"},r.createElement(m.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))},o=t(201),d=t(6559);var g=function(e){var a=e.metadata,t=e.items,s=e.sidebar,m=(0,n.default)().siteConfig.title,g=a.blogDescription,u=a.blogTitle,p="/"===a.permalink?m:u;return r.createElement(l.Z,{title:p,description:g,wrapperClassName:d.kM.wrapper.blogPages,pageClassName:d.kM.page.blogListPage,searchMetadatas:{tag:"blog_posts_list"}},r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--3"},r.createElement(o.Z,{sidebar:s})),r.createElement("main",{className:"col col--7"},t.map((function(e){var a=e.content;return r.createElement(i.Z,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:a.metadata.truncated},r.createElement(a,null))})),r.createElement(c,{metadata:a})))))}},1322:function(e,a,t){"use strict";t.d(a,{Z:function(){return u}});var r=t(3289),n=t(2238),l=t(1080),i=t(3091),s=t(8861),m=t(1128),c=t(6248),o="blogPostTitle_1Zk6",d="blogPostDate_3Rqx",g=t(6559);var u=function(e){var a,t,u=(a=(0,g.c2)().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),p=e.children,v=e.frontMatter,E=e.metadata,b=e.truncated,h=e.isBlogPostPage,_=void 0!==h&&h,N=E.date,f=E.formattedDate,k=E.permalink,Z=E.tags,w=E.readingTime,T=v.author,L=v.title,M=v.image,I=v.keywords,P=v.author_url||v.authorURL,x=v.author_title||v.authorTitle,y=v.author_image_url||v.authorImageURL;return r.createElement(r.Fragment,null,r.createElement(c.Z,{keywords:I,image:M}),r.createElement("article",{className:_?void 0:"margin-bottom--xl"},(t=_?"h1":"h2",r.createElement("header",null,r.createElement(t,{className:(0,n.Z)("margin-bottom--sm",o)},_?L:r.createElement(s.Z,{to:k},L)),r.createElement("div",{className:"margin-vert--md"},r.createElement("time",{dateTime:N,className:d},f,w&&r.createElement(r.Fragment,null," \xb7 ",u(w)))),r.createElement("div",{className:"avatar margin-vert--md"},y&&r.createElement(s.Z,{className:"avatar__photo-link avatar__photo",href:P},r.createElement("img",{src:y,alt:T})),r.createElement("div",{className:"avatar__intro"},T&&r.createElement(r.Fragment,null,r.createElement("h4",{className:"avatar__name"},r.createElement(s.Z,{href:P},T)),r.createElement("small",{className:"avatar__subtitle"},x)))))),r.createElement("div",{className:"markdown"},r.createElement(l.Zo,{components:m.Z},p)),(Z.length>0||b)&&r.createElement("footer",{className:"row margin-vert--lg"},Z.length>0&&r.createElement("div",{className:"col"},r.createElement("strong",null,r.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),Z.map((function(e){var a=e.label,t=e.permalink;return r.createElement(s.Z,{key:t,className:"margin-horiz--sm",to:t},a)}))),b&&r.createElement("div",{className:"col text--right"},r.createElement(s.Z,{to:E.permalink,"aria-label":"Read more about "+L},r.createElement("strong",null,r.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},201:function(e,a,t){"use strict";t.d(a,{Z:function(){return g}});var r=t(3289),n=t(2238),l=t(8861),i="sidebar_3NOO",s="sidebarItemTitle_bKb6",m="sidebarItemList_1qKy",c="sidebarItem_37Wu",o="sidebarItemLink_r_Bp",d="sidebarItemLinkActive_2Kr8";function g(e){var a=e.sidebar;return 0===a.items.length?null:r.createElement("div",{className:(0,n.Z)(i,"thin-scrollbar")},r.createElement("h3",{className:s},a.title),r.createElement("ul",{className:m},a.items.map((function(e){return r.createElement("li",{key:e.permalink,className:c},r.createElement(l.Z,{isNavLink:!0,to:e.permalink,className:o,activeClassName:d},e.title))}))))}},5003:function(e,a,t){"use strict";var r=t(993),n=t(2547),l=t(3289),i=function(){var e=(0,r.TH)();return e.pathname.endsWith("/")?l.createElement(r.l_,{to:e.pathname.slice(0,-1)}):null};a.Z=function(e){return l.createElement(l.Fragment,null,l.createElement(i,null),l.createElement(n.Z,e))}}}]);