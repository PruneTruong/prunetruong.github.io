(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),l=r(a("VbXa")),o=r(a("8OQS")),s=r(a("pVnL")),d=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,s.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=x([].concat(t.fluid))),t.fixed&&(t.fixed=x([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,a=e.fixed,r=m(t||a||[]);return r&&r.src},m=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},h=Object.create({}),g=function(e){var t=u(e),a=p(t);return h[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,y=v&&window.IntersectionObserver,E=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),a&&d.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function x(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function w(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var z=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},R=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)})).join("")+"<img "+d+l+o+a+r+t+n+i+s+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},O=d.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,l=e.ariaHidden,o=d.default.createElement(V,(0,s.default)({ref:t,src:a},n,{ariaHidden:l}));return r.length>1?d.default.createElement("picture",null,i(r),o):o})),V=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,l=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,p=e.ariaHidden,m=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,s.default)({"aria-hidden":p,sizes:a,srcSet:r,src:i},m,{onLoad:l,onError:c,ref:t,loading:u,draggable:f,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));V.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var j=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=v&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&y&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||v&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.placeholderRef=t.placeholderRef||d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,l.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=z(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=p(t))&&(h[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,l=e.imgStyle,o=void 0===l?{}:l,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,h=e.fluid,g=e.fixed,b=e.backgroundColor,v=e.durationFadeIn,y=e.Tag,E=e.itemProp,x=e.loading,I=e.draggable,z=!1===this.state.fadeIn||this.state.imgLoaded,j=!0===this.state.fadeIn&&!this.state.imgCached,T=(0,s.default)({opacity:z?1:0,transition:j?"opacity "+v+"ms":"none"},o),H="boolean"==typeof b?"lightgray":b,k={transitionDelay:v+"ms"},C=(0,s.default)({opacity:this.state.imgLoaded?0:1},j&&k,o,f),M={title:t,alt:this.state.isVisible?"":a,style:C,className:p,itemProp:E};if(h){var P=h,W=m(h);return d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden",maxWidth:W.maxWidth?W.maxWidth+"px":null,maxHeight:W.maxHeight?W.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(W.srcSet)},d.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/W.aspectRatio+"%"}}),H&&d.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:H,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},j&&k)}),W.base64&&d.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:W.base64,spreadProps:M,imageVariants:P,generateSources:L}),W.tracedSVG&&d.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:W.tracedSVG,spreadProps:M,imageVariants:P,generateSources:w}),this.state.isVisible&&d.default.createElement("picture",null,S(P),d.default.createElement(V,{alt:a,title:t,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:x,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,s.default)({alt:a,title:t,loading:x},W,{imageVariants:P}))}}))}if(g){var N=g,q=m(g),F=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:q.width,height:q.height},n);return"inherit"===n.display&&delete F.display,d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:F,ref:this.handleRef,key:"fixed-"+JSON.stringify(q.srcSet)},H&&d.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:H,width:q.width,opacity:this.state.imgLoaded?0:1,height:q.height},j&&k)}),q.base64&&d.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:q.base64,spreadProps:M,imageVariants:N,generateSources:L}),q.tracedSVG&&d.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:q.tracedSVG,spreadProps:M,imageVariants:N,generateSources:w}),this.state.isVisible&&d.default.createElement("picture",null,S(N),d.default.createElement(V,{alt:a,title:t,width:q.width,height:q.height,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:x,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,s.default)({alt:a,title:t,loading:x},q,{imageVariants:N}))}}))}return null},t}(d.default.Component);j.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var T=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),H=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function k(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");c.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}j.propTypes={resolutions:T,sizes:H,fixed:k(c.default.oneOfType([T,c.default.arrayOf(T)])),fluid:k(c.default.oneOfType([H,c.default.arrayOf(H)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var C=j;t.default=C},QeBL:function(e,t,a){"use strict";a.r(t),a.d(t,"IndexPage",(function(){return w}));var r=a("q1tI"),i=a.n(r),n=a("9Dj+"),l=a("H8eV"),o=a("MUpH"),s=a("Wbzz"),d=a("9eSz"),c=a.n(d),u=a("5D9J"),f=a("VdAu");function p(){var e=Object(o.a)(["\n  border-radius: 50%;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px,\n    rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;\n"]);return p=function(){return e},e}var m=Object(u.default)(c.a)(p()),h=function(){var e,t=Object(s.useStaticQuery)("2311273057"),a=t.avatar,r=t.site.siteMetadata.author;return i.a.createElement(f.b,{alignItems:"center"},i.a.createElement(f.a,{p:3,flex:"1"},i.a.createElement(f.c,{mb:3,fontSize:5},r),i.a.createElement(f.a,null,i.a.createElement(f.c,{as:"h3",fontSize:3,mb:3},"PhD student in the"," ",i.a.createElement(f.d,{href:"https://vision.ee.ethz.ch/"},"Computer Vision Lab")," @"," ",i.a.createElement(f.d,{href:"https://ethz.ch/en.html"},"ETH Zurich")),i.a.createElement(f.e,{variant:"description",fontSize:2},"From May 2020, I am a PhD student under the supervision of"," ",i.a.createElement(f.d,{href:"https://vision.ee.ethz.ch/people-details.OTAyMzM=.TGlzdC8zMjQ4LC0xOTcxNDY1MTc4.html"},"Prof. Luc Van Gool"),". Previously, I obtained a Master’s degree in Mechanical Engineering with honors at ETH Zurich. I also conducted an internship at"," ",i.a.createElement(f.d,{href:"https://www.retinai.com/"},"RetinAI")," focused on computer vision applied to medical images."))),i.a.createElement(f.a,{m:2,flex:"0 0 175px"},i.a.createElement(m,{fixed:null==a||null===(e=a.childImageSharp)||void 0===e?void 0:e.fixed,objectFit:"cover",objectPosition:"50% 50%"})))};function g(){var e=Object(o.a)(["\n  text-decoration: none;\n  color: inherit;\n  :hover {\n    color: inherit;\n  }\n"]);return g=function(){return e},e}var b=Object(u.default)(s.Link)(g()),v=function(e){var t,a,r,n,l,o=e.post;return i.a.createElement(b,{to:o.frontmatter.path},i.a.createElement(f.a,{width:250,m:2,sx:{h1:{fontSize:1},boxShadow:"2px 4px 8px 0 rgba(0,0,0,0.2);",transition:"0.2s ease-in-out",":hover":{boxShadow:"2px 4px 16px 0 rgba(0, 0, 0, 0.25)"},overflow:"hidden"}},i.a.createElement("header",null,i.a.createElement(c.a,{fixed:null===(t=o.frontmatter.preview)||void 0===t||null===(a=t.childImageSharp)||void 0===a?void 0:a.fixed}),i.a.createElement(f.c,{as:"h3",fontSize:2,my:1,px:2},o.frontmatter.title)),i.a.createElement("section",null,i.a.createElement(f.e,{as:"p",variant:"justified",fontSize:1,px:2,pb:2},(null===(r=o.frontmatter)||void 0===r?void 0:r.description)?(n=o.frontmatter.description,l=300,n.length<=l?n:n.substr(0,l-1)+"…"):o.excerpt))))},y=function(){var e=Object(s.useStaticQuery)("3567519871").allMarkdownRemark.nodes;return i.a.createElement(i.a.Fragment,null,i.a.createElement(f.c,{as:"h2"},"Research"),i.a.createElement(f.b,{ml:4,my:2,justifyContent:"space-around",flexWrap:"wrap"},Array(6).fill(e[0],0,6).map((function(e){return i.a.createElement(v,{key:e.id,post:e})}))))},E=a("2QYI");var S=function(){var e=Object(s.useStaticQuery)("2463479585").allMarkdownRemark.nodes;return i.a.createElement(i.a.Fragment,null,i.a.createElement(f.c,{as:"h2"},"News"),i.a.createElement(f.a,{ml:4,my:2,sx:Object.assign({},E.a.styles,{fontSize:1,td:{paddingLeft:"2em",p:{padding:0,margin:0}},th:{padding:0},"table td, table th":{borderBottomStyle:"none"}})},i.a.createElement("table",null,e.map((function(e){var t,a,r,n;return i.a.createElement("tr",null,i.a.createElement("th",null,(a=null===(t=e.frontmatter)||void 0===t?void 0:t.date,r=a.split("-"),n=r[0],r[1]+"/"+n),":"),i.a.createElement("td",{dangerouslySetInnerHTML:{__html:e.html}}))})))))},x=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(S,null),i.a.createElement(y,null))},w=function(){return i.a.createElement(n.a,null,i.a.createElement(l.a,{title:"Home"}),i.a.createElement(f.a,{mt:4},i.a.createElement(h,null)),i.a.createElement(x,null))};t.default=w}}]);
//# sourceMappingURL=component---src-pages-index-tsx-d8defa645879c911810c.js.map