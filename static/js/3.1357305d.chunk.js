(this["webpackJsonpreact-1"]=this["webpackJsonpreact-1"]||[]).push([[3],{299:function(t,e,s){t.exports={descriptionBlock:"ProfileInfo_descriptionBlock__211ka",mainPhoto:"ProfileInfo_mainPhoto__2c17G",contact:"ProfileInfo_contact__2EkaA"}},300:function(t,e,s){t.exports={postsBlock:"MyPosts_postsBlock__oblJU",posts:"MyPosts_posts__1sTkR"}},301:function(t,e,s){t.exports={item:"Post_item__2qeqO",itemLike:"Post_itemLike__3s3Et"}},303:function(t,e,s){"use strict";s.r(e);var o=s(3),i=s(36),c=s(37),n=s(39),r=s(38),a=s(0),u=s.n(a),l=s(19),j=s(8),d=s.n(j),b=s(14),p=s(97),f=s(299),h=s.n(f),O=s(40),m=s(118),x=s(1),v=function(t){var e=Object(a.useState)(!1),s=Object(p.a)(e,2),o=s[0],i=s[1],c=Object(a.useState)(t.status),n=Object(p.a)(c,2),r=n[0],u=n[1];Object(a.useEffect)((function(){u(t.status)}),[t.status]);return Object(x.jsxs)("div",{children:[!o&&Object(x.jsx)("div",{children:Object(x.jsx)("span",{onDoubleClick:function(){i(!0)},children:"Status: "+t.status||!1})}),o&&Object(x.jsx)("div",{children:Object(x.jsx)("input",{onBlur:function(){i(!1),t.updateStatus(r)},onChange:function(t){u(t.currentTarget.value)},value:r,autoFocus:!0})})]})},k=s(25),P=s(129),g=s(48),S=s.n(g),y=Object(P.a)({form:"edit-profile"})((function(t){var e=t.handleSubmit,s=t.profile,o=t.error;return Object(x.jsxs)("form",{onSubmit:e,children:[Object(x.jsx)("div",{children:Object(x.jsx)("button",{onClick:function(){},children:"Save"})}),Object(x.jsx)("div",{children:o&&Object(x.jsx)("div",{className:S.a.formSummaryError,children:o})}),Object(x.jsxs)("div",{children:["Full name: ",Object(k.c)("fullName",k.a,[],"Full name")]}),Object(x.jsxs)("div",{children:["Looking for a job:",Object(k.c)("lookingForAJob",k.a,[],"",{type:"checkbox"})]}),Object(x.jsxs)("div",{children:["My professional skills:",Object(k.c)("lookingForAJobDescription",k.b,[],"My professional skills")]}),Object(x.jsxs)("div",{children:["About me:",Object(k.c)("aboutMe",k.b,[],"About me")]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("b",{children:"Contacts:"}),Object.keys(s.contacts).map((function(t){return Object(x.jsxs)("div",{className:h.a.contact,children:[t,": ",Object(k.c)("contacts."+t,k.a,[],t)]},t)}))]})]})})),_=function(t){var e=t.profile,s=t.isOwner,o=t.goToEditMode;return Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{children:s&&Object(x.jsx)("button",{onClick:o,children:"Edit info"})}),Object(x.jsxs)("div",{children:["Full name: ",e.fullName]}),Object(x.jsxs)("div",{children:["Looking for a gob: ",e.lookingForAJob?"yes":"no"]}),e.lookingForAJob&&Object(x.jsxs)("div",{children:["My professional skills: ",e.lookingForAJobDescription]}),Object(x.jsxs)("div",{children:["About me: ",e.aboutMe]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("b",{children:"Contacts:"}),Object.keys(e.contacts).map((function(t){return Object(x.jsx)(w,{contactTitle:t,contactValue:e.contacts[t]},t)}))]})]})},w=function(t){var e=t.contactTitle,s=t.contactValue;return Object(x.jsxs)("div",{className:h.a.contact,children:[Object(x.jsx)("b",{children:e}),": ",s]})},A=function(t){var e=t.profile,s=t.isOwner,o=t.status,i=t.updateStatus,c=t.savePhoto,n=t.saveProfile,r=Object(a.useState)(!1),u=Object(p.a)(r,2),l=u[0],j=u[1];if(!e)return Object(x.jsx)(O.a,{});var f=function(){var t=Object(b.a)(d.a.mark((function t(e){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n(e).then((function(){j(!1)}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(x.jsx)("div",{children:Object(x.jsxs)("div",{className:h.a.descriptionBlock,children:[Object(x.jsx)("img",{className:h.a.mainPhoto,src:e.photos.large||m.a,alt:""}),s?Object(x.jsx)("input",{type:"file",onChange:function(t){t.target.files.length&&c(t.target.files[0])}}):null,Object(x.jsx)("div",{children:Object(x.jsx)(v,{status:o,updateStatus:i})}),l?Object(x.jsx)(y,{initialValues:e,profile:e,onSubmit:f}):Object(x.jsx)(_,{profile:e,isOwner:s,goToEditMode:function(){return j(!0)}})]})})},N=s(96),C=s(300),M=s.n(C),F=s(301),I=s.n(F),T=function(t){return Object(x.jsxs)("div",{className:I.a.item,children:[Object(x.jsx)("img",{src:"https://vectorified.com/images/mystery-person-icon-34.jpg",alt:""}),t.message,Object(x.jsxs)("div",{className:I.a.itemLike,children:["Likes ",t.likesCount]})]})},E=s(91),J=s(68),B=Object(J.a)(10),L=Object(P.a)({form:"ProfileAddNewPostForm"})((function(t){return Object(x.jsx)("div",{children:Object(x.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(x.jsx)("div",{children:Object(x.jsx)(E.a,{component:k.b,name:"newPostText",placeholder:"Enter your post text",validate:[J.b,B]})}),Object(x.jsx)("div",{children:Object(x.jsx)("button",{children:"Send"})})]})})})),U=u.a.memo((function(t){var e=t.posts.map((function(t){return Object(x.jsx)(T,{id:t.id,message:t.message,likesCount:t.likesCount},t.id)}));return Object(x.jsxs)("div",{className:M.a.postsBlock,children:[Object(x.jsx)("h3",{children:"My posts"}),Object(x.jsx)(L,{onSubmit:function(e){t.addPost(e.newPostText)}}),Object(x.jsx)("div",{className:M.a.posts,children:e})]})})),D=Object(l.b)((function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}}),(function(t){return{addPost:function(e){t(Object(N.a)(e))}}}))(U),V=function(t){return Object(x.jsxs)("div",{children:[Object(x.jsx)(A,{profile:t.profile,isOwner:t.isOwner,savePhoto:t.savePhoto,saveProfile:t.saveProfile,status:t.status,updateStatus:t.updateStatus}),Object(x.jsx)(D,{})]})},q=s(11),z=s(10),G=function(t){Object(n.a)(s,t);var e=Object(r.a)(s);function s(){return Object(i.a)(this,s),e.apply(this,arguments)}return Object(c.a)(s,[{key:"refreshProfile",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(t,e,s){this.props.match.params.userId!==t.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(x.jsx)("div",{children:Object(x.jsx)(V,Object(o.a)(Object(o.a)({},this.props),{},{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))})}}]),s}(u.a.Component);e.default=Object(z.d)(Object(l.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUserProfile:N.d,getStatus:N.c,updateStatus:N.g,savePhoto:N.e,saveProfile:N.f}),q.f)(G)}}]);
//# sourceMappingURL=3.1357305d.chunk.js.map