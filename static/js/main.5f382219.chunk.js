(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,function(e,t,a){e.exports={stats:"Statistics_stats__1-S_3",stats_item:"Statistics_stats_item__2L_Po"}},function(e,t,a){e.exports={feedback:"FeedbackOptions_feedback__3-Ri4",feedback_item:"FeedbackOptions_feedback_item__1IGn4",feedback_btn:"FeedbackOptions_feedback_btn__1CVuN"}},,,,,function(e,t,a){e.exports={header:"Section_header__1evO1"}},,,function(e,t,a){e.exports=a(17)},,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),o=a.n(r),s=a(5),l=a(6),i=a(9),u=a(8),d=a(7),m=a.n(d),b=function(e){var t=e.title,a=e.children;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{className:m.a.header},t),a)};b.defaultProps={children:null};var f=b,k=a(1),_=a.n(k),g=function(e){var t=e.good,a=e.neutral,n=e.bad,r=e.total,o=e.positivePercentage;return c.a.createElement("ul",{className:_.a.stats},c.a.createElement("li",{className:_.a.stats_item},"Good: ",t," "),c.a.createElement("li",{className:_.a.stats_item},"Neutral: ",a),c.a.createElement("li",{className:_.a.stats_item},"Bad: ",n),c.a.createElement("li",{className:_.a.stats_item},"Total: ",r),c.a.createElement("li",{className:_.a.stats_item},"Positive feedback: ",o,"%"))},p=a(2),v=a.n(p),h=function(e){var t=e.options,a=e.onLeaveFeedback;return c.a.createElement("ul",{className:v.a.feedback},t.map((function(e){return c.a.createElement("li",{className:v.a.feedback_item,key:e},c.a.createElement("button",{className:v.a.feedback_btn,onClick:a,type:"button"},e))})))},E=function(e){var t=e.message;return c.a.createElement("p",null,t)};E.defaultProps={message:""};var N=E,F=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.feedbackCounter=function(t){"Good"===t.target.textContent?e.setState((function(e){return{good:e.good+1}})):"Neutral"===t.target.textContent?e.setState((function(e){return{neutral:e.neutral+1}})):"Bad"===t.target.textContent&&e.setState((function(e){return{bad:e.bad+1}}))},e.countTotalFeedback=function(){return e.state.good+e.state.neutral+e.state.bad},e.countPositiveFeedbackPercentage=function(){return e.state.good/e.countTotalFeedback()*100},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,n=e.bad;return c.a.createElement(c.a.Fragment,null,c.a.createElement(f,{title:"Please leave feedback"},c.a.createElement(h,{options:["Good","Neutral","Bad"],onLeaveFeedback:this.feedbackCounter})),c.a.createElement(f,{title:"Statistics"},this.countTotalFeedback()>0?c.a.createElement(g,{good:t,neutral:a,bad:n,total:this.countTotalFeedback(),positivePercentage:this.countTotalFeedback()>0?Math.round(this.countPositiveFeedbackPercentage()):0}):c.a.createElement(N,{message:"No feedback given"})))}}]),a}(n.Component);a(15),a(16);o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(F,null)),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.5f382219.chunk.js.map