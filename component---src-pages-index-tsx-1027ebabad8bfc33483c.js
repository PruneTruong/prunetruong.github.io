(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var n,i=r(a("PJYZ")),o=r(a("VbXa")),l=r(a("8OQS")),s=r(a("pVnL")),d=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,s.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,a=e.fixed,r=h(t||a||[]);return r&&r.src},h=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},m=Object.create({}),g=function(e){var t=u(e),a=p(t);return m[a]||!1},v="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,y=b&&window.IntersectionObserver,E=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),a&&d.default.createElement("source",{media:n,srcSet:a,sizes:i}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function x(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function z(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function O(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var I=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},L=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?O(e,!0):"")+O(e)})).join("")+"<img "+d+o+l+a+r+t+i+n+s+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},j=d.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,n=e.generateSources,i=e.spreadProps,o=e.ariaHidden,l=d.default.createElement(R,(0,s.default)({ref:t,src:a},i,{ariaHidden:o}));return r.length>1?d.default.createElement("picture",null,n(r),l):l})),R=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,o=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,p=e.ariaHidden,h=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,s.default)({"aria-hidden":p,sizes:a,srcSet:r,src:n},h,{onLoad:o,onError:c,ref:t,loading:u,draggable:f,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));R.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var V=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!v&&y&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||b&&(v||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.placeholderRef=t.placeholderRef||d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=I(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=p(t))&&(m[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,o=e.imgStyle,l=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,m=e.fluid,g=e.fixed,v=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,E=e.itemProp,w=e.loading,O=e.draggable,I=!1===this.state.fadeIn||this.state.imgLoaded,V=!0===this.state.fadeIn&&!this.state.imgCached,k=(0,s.default)({opacity:I?1:0,transition:V?"opacity "+b+"ms":"none"},l),H="boolean"==typeof v?"lightgray":v,M={transitionDelay:b+"ms"},T=(0,s.default)({opacity:this.state.imgLoaded?0:1},V&&M,l,f),C={title:t,alt:this.state.isVisible?"":a,style:T,className:p,itemProp:E};if(m){var P=m,q=h(m);return d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden",maxWidth:q.maxWidth?q.maxWidth+"px":null,maxHeight:q.maxHeight?q.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(q.srcSet)},d.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/q.aspectRatio+"%"}}),H&&d.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:H,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},V&&M)}),q.base64&&d.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:q.base64,spreadProps:C,imageVariants:P,generateSources:z}),q.tracedSVG&&d.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:q.tracedSVG,spreadProps:C,imageVariants:P,generateSources:x}),this.state.isVisible&&d.default.createElement("picture",null,S(P),d.default.createElement(R,{alt:a,title:t,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:w,draggable:O})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,s.default)({alt:a,title:t,loading:w},q,{imageVariants:P}))}}))}if(g){var N=g,W=h(g),F=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:W.width,height:W.height},i);return"inherit"===i.display&&delete F.display,d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:F,ref:this.handleRef,key:"fixed-"+JSON.stringify(W.srcSet)},H&&d.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:H,width:W.width,opacity:this.state.imgLoaded?0:1,height:W.height},V&&M)}),W.base64&&d.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:W.base64,spreadProps:C,imageVariants:N,generateSources:z}),W.tracedSVG&&d.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:W.tracedSVG,spreadProps:C,imageVariants:N,generateSources:x}),this.state.isVisible&&d.default.createElement("picture",null,S(N),d.default.createElement(R,{alt:a,title:t,width:W.width,height:W.height,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:w,draggable:O})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,s.default)({alt:a,title:t,loading:w},W,{imageVariants:N}))}}))}return null},t}(d.default.Component);V.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var k=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),H=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function M(e){return function(t,a,r){var n;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");c.default.checkPropTypes(((n={})[a]=e,n),t,"prop",r)}}V.propTypes={resolutions:k,sizes:H,fixed:M(c.default.oneOfType([k,c.default.arrayOf(k)])),fluid:M(c.default.oneOfType([H,c.default.arrayOf(H)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var T=V;t.default=T},HJ1l:function(e,t,a){"use strict";var r=a("2A+t"),n=a("q1tI"),i=a.n(n);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var l=Object(n.forwardRef)((function(e,t){var a=e.color,r=void 0===a?"currentColor":a,n=e.size,l=void 0===n?24:n,s=e.title,d=void 0===s?"YouTube":s,c=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["color","size","title"]);return i.a.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",width:l,height:l,fill:r,viewBox:"0 0 24 24",ref:t},c),i.a.createElement("title",null,d),i.a.createElement("path",{d:"M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"}))}));function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var d=Object(n.forwardRef)((function(e,t){var a=e.color,r=void 0===a?"currentColor":a,n=e.size,o=void 0===n?24:n,l=e.title,d=void 0===l?"arXiv":l,c=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["color","size","title"]);return i.a.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg",width:o,height:o,fill:r,viewBox:"0 0 24 24",ref:t},c),i.a.createElement("title",null,d),i.a.createElement("path",{d:"M20.7 15.404l-1.894-4.967h1.411l1.39 3.582 1.379-3.582h.96l-1.92 4.967zM16.298 9.6V8.48h1.34V9.6zm0 5.808v-4.971h1.34v4.967zm-6.965-.003l2.146-3.3L9.43 8.707h1.627l1.364 2.254L13.9 8.707h1.12l-2.046 3.156 2.126 3.537h-1.622l-1.45-2.4-1.557 2.4H9.333zm-3.346 0v-4.968h1.338v.937c.344-.7.875-1.051 1.585-1.051a1.401 1.401 0 01.248.026v1.194a1.6 1.6 0 00-.53-.102c-.537 0-.968.267-1.303.8v3.164zm-3.028-.536q-.664.65-1.437.65a1.473 1.473 0 01-1.06-.398 1.376 1.376 0 01-.406-1.03 1.45 1.45 0 01.659-1.271q.657-.447 1.884-.448h.355v-.453q0-.772-.88-.772a3.305 3.305 0 00-1.587.443v-.922a5.016 5.016 0 011.808-.345q1.953 0 1.951 1.55v2.206c0 .39.123.58.376.58a.8.8 0 00.174-.02l.032.751a2.745 2.745 0 01-.751.13c-.552 0-.902-.216-1.06-.65h-.054zm0-.72v-1.01h-.32c-.866 0-1.297.274-1.297.815a.64.64 0 00.64.648c.329.004.647-.15.977-.453z"}))})),c=a("0fE6"),u=a("2QYI").a.colors.secondary,f={youtube:function(e){return Object(r.c)(l,{size:e,color:u})},arxiv:function(e){return Object(r.c)(d,{size:e,color:u})},github:function(e){return Object(r.c)(c.a,{size:e,color:u})}};t.a=function(e){var t=e.className,a=void 0===t?"":t,n=e.links,i=e.size,o=void 0===i?24:i;return Object(r.c)("div",{className:a},n.map((function(e){var t=e.type,a=e.link;return Object(r.c)("a",{href:a,key:t},f[t](o)||t)})))}},QeBL:function(e,t,a){"use strict";a.r(t),a.d(t,"IndexPage",(function(){return I}));var r=a("q1tI"),n=a.n(r),i=a("9Dj+"),o=a("H8eV"),l=a("MUpH"),s=a("Wbzz"),d=a("9eSz"),c=a.n(d),u=a("5D9J"),f=a("VdAu");function p(){var e=Object(l.a)(["\n  border-radius: 50%;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px,\n    rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;\n"]);return p=function(){return e},e}var h=Object(u.default)(c.a)(p()),m=function(){var e,t=Object(s.useStaticQuery)("2358800676"),a=t.avatar,r=t.site.siteMetadata.author;return n.a.createElement(f.b,{alignItems:"center"},n.a.createElement(f.a,{p:3,flex:"1"},n.a.createElement(f.c,{mb:3,fontSize:5},r),n.a.createElement(f.a,null,n.a.createElement(f.c,{as:"h3",fontSize:3,mb:3},"PhD student in the"," ",n.a.createElement(f.d,{href:"https://vision.ee.ethz.ch/"},"Computer Vision Lab")," @"," ",n.a.createElement(f.d,{href:"https://ethz.ch/en.html"},"ETH Zurich")),n.a.createElement(f.e,{variant:"description",fontSize:2},"From May 2020, I am a PhD student under the supervision of"," ",n.a.createElement(f.d,{href:"https://vision.ee.ethz.ch/people-details.OTAyMzM=.TGlzdC8zMjQ4LC0xOTcxNDY1MTc4.html"},"Prof. Luc Van Gool"),". Previously, I obtained a Master’s degree in Mechanical Engineering with honors at ETH Zurich. I also conducted an internship at"," ",n.a.createElement(f.d,{href:"https://www.retinai.com/"},"RetinAI")," focused on computer vision applied to medical images."))),n.a.createElement(f.a,{m:2,flex:"0 0 250px"},n.a.createElement(h,{fixed:null==a||null===(e=a.childImageSharp)||void 0===e?void 0:e.fixed,objectFit:"cover",objectPosition:"50% 50%"})))};var g=a("HJ1l");function v(){var e=Object(l.a)(["\n  display: flex;\n  justify-content: space-around;\n  a > svg {\n    transition: 0.3s ease-in-out;\n  }\n  a:hover > svg {\n    fill: ",";\n  }\n"]);return v=function(){return e},e}function b(){var e=Object(l.a)(["\n  text-decoration: none;\n  color: inherit;\n  :hover {\n    color: inherit;\n  }\n"]);return b=function(){return e},e}var y=Object(u.default)(s.Link)(b()),E=Object(u.default)(g.a)(v(),(function(e){return e.theme.colors.primary})),S=function(e){var t,a,r,i,o,l,s=e.post;return n.a.createElement(y,{to:s.frontmatter.path},n.a.createElement(f.a,{width:350,m:2,sx:{h1:{fontSize:1},boxShadow:"2px 4px 8px 0 rgba(0,0,0,0.2);",transition:"0.2s ease-in-out",":hover":{boxShadow:"2px 4px 16px 0 rgba(0, 0, 0, 0.25)"},overflow:"hidden"}},n.a.createElement("header",null,n.a.createElement(c.a,{fixed:null===(t=s.frontmatter.preview)||void 0===t||null===(a=t.childImageSharp)||void 0===a?void 0:a.fixed}),n.a.createElement(f.c,{as:"h3",fontSize:2,my:1,px:2},s.frontmatter.title)),n.a.createElement("section",null,n.a.createElement(f.e,{as:"p",variant:"justified",fontSize:1,px:2,pb:2},(null===(i=s.frontmatter)||void 0===i?void 0:i.description)?(o=s.frontmatter.description,l=300,o.length<=l?o:o.substr(0,l-1)+"…"):s.excerpt),(null===(r=s.frontmatter)||void 0===r?void 0:r.links)&&n.a.createElement(E,{links:s.frontmatter.links}))))},w=function(){var e=Object(s.useStaticQuery)("4045240550").allMarkdownRemark.nodes;return n.a.createElement(n.a.Fragment,null,n.a.createElement(f.c,{as:"h2"},"Research"),n.a.createElement(f.b,{ml:4,my:2,justifyContent:"space-around",flexWrap:"wrap"},e.map((function(e){return n.a.createElement(S,{key:e.id,post:e})}))))},x=a("2QYI");var z=function(){var e=Object(s.useStaticQuery)("2463479585").allMarkdownRemark.nodes;return n.a.createElement(n.a.Fragment,null,n.a.createElement(f.c,{as:"h2"},"News"),n.a.createElement(f.a,{ml:4,my:2,sx:Object.assign({},x.a.styles,{fontSize:1,table:{"td, th":{borderBottomStyle:"none",verticalAlign:"top"},td:{p:{padding:0,margin:0,ml:4,fontSize:1}},th:{padding:0}}})},n.a.createElement("table",null,e.map((function(e){var t,a,r,i;return n.a.createElement("tr",null,n.a.createElement("th",null,(a=null===(t=e.frontmatter)||void 0===t?void 0:t.date,r=a.split("-"),i=r[0],r[1]+"/"+i),":"),n.a.createElement("td",{dangerouslySetInnerHTML:{__html:e.html}}))})))))},O=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(z,null),n.a.createElement(w,null))},I=function(){return n.a.createElement(i.a,null,n.a.createElement(o.a,{title:"Home"}),n.a.createElement(f.a,{mt:4},n.a.createElement(m,null)),n.a.createElement(O,null))};t.default=I}}]);
//# sourceMappingURL=component---src-pages-index-tsx-1027ebabad8bfc33483c.js.map