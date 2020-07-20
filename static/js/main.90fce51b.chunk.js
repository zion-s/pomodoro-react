(this["webpackJsonppomodoro-react"]=this["webpackJsonppomodoro-react"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),s=a(2),r=a.n(s),o=(a(12),a(3)),c=a(4),m=a(6),l=a(5),d=(a(13),a(14),a(15),function(e){var t=e.increaseTime,a=e.decreaseTime,i=e.increaseBreakTime,s=e.decreaseBreakTime;return n.a.createElement("div",{id:"duration"},n.a.createElement("h4",{id:"session-label"},e.sessionLabel),n.a.createElement("div",{className:"row"}," ",n.a.createElement("div",{className:"col d-none d-md-block"}),n.a.createElement("div",{className:"col"},n.a.createElement("button",{type:"button",className:"btn btn-outline-secondary plus_minus",id:"session-increment",onClick:t},"+")),n.a.createElement("div",{className:"col"},n.a.createElement("h3",{id:"session-length"},e.sessionLength," ",e.calculateTime)),n.a.createElement("div",{className:"col"},n.a.createElement("button",{type:"button",className:"btn btn-outline-secondary plus_minus",id:"session-decrement",onClick:a},"-")),n.a.createElement("div",{className:"col d-none d-md-block"}))," ",n.a.createElement("h4",{id:"break-label"},e.breakLabel),n.a.createElement("div",{className:"row"}," ",n.a.createElement("div",{className:"col d-none d-md-block"}),n.a.createElement("div",{className:"col"},n.a.createElement("button",{type:"button",className:"btn btn-outline-secondary plus_minus",id:"break-increment",onClick:i},"+")),n.a.createElement("div",{className:"col"},n.a.createElement("h3",{id:"break-length"},e.breakLength," ",e.calculateTime)),n.a.createElement("div",{className:"col"},n.a.createElement("button",{type:"button",className:"btn btn-outline-secondary plus_minus",id:"break-decrement",onClick:s},"-")),n.a.createElement("div",{className:"col d-none d-md-block"}))," ")}),u=(a(16),function(e){return n.a.createElement("div",{id:"timer",className:"row"},n.a.createElement("div",{className:"col buttons-column"},n.a.createElement("button",{id:"start_stop",onClick:e.handleStart,className:"btn btn-secondary"},"Start"),n.a.createElement("button",{onClick:e.pauseBtn,className:"btn btn-secondary"},e.condition),n.a.createElement("button",{id:"reset",onClick:e.handleReset,className:"btn btn-secondary"},"Reset")))}),b=function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(e){var i;return Object(o.a)(this,a),(i=t.call(this,e)).stopTimer=function(e){clearInterval(e),e=null},i.handleStart=function(){i.pomodoroStarted||(i.timer=setInterval((function(){i.setState({time:i.state.time-1})}),1e3),i.pomodoroStarted=!i.pomodoroStarted),i.time||(i.time=i.state.time,i.breakTime=i.state.breakTime)},i.handlePause=function(){i.pomodoroStarted&&(i.isPaused=!0,i.setState(i.state),i.breakStarted||i.stopTimer(i.timer),i.breakStarted&&i.stopTimer(i.breakTimer))},i.handleResume=function(){i.pomodoroStarted&&(i.setState(i.state),i.isPaused=!1,i.breakStarted||(i.timer=setInterval((function(){i.setState({time:i.state.time-1})}),1e3)),i.breakStarted&&(i.breakTimer=setInterval((function(){i.setState({breakTime:i.state.breakTime-1})}),1e3)))},i.handleReset=function(){i.setState({time:1500,breakTime:300}),i.stopTimer(i.timer),i.pomodoroStarted=!1,i.stopTimer(i.breakTimer),i.breakStarted=!1,i.isPaused=!1},i.calculateTime=function(e){return"".concat(Math.floor(e/60)," : ").concat(e%60>9?""+e%60:"0"+e%60)},i.increaseTime=function(){i.pomodoroStarted||3600===i.state.time||i.setState({time:i.state.time+60}),console.log("increase session time")},i.increaseBreakTime=function(){i.pomodoroStarted||1800===i.breakTime||(i.breakTime=i.breakTime+60,i.setState({breakTime:i.state.breakTime+60})),console.log("increase break time")},i.decreaseTime=function(){i.state.time>60&&!i.pomodoroStarted&&i.setState({time:i.state.time-60}),console.log("decrease session time")},i.decreaseBreakTime=function(){i.breakTime>60&&(i.breakTime=i.breakTime-60),i.state.breakTime>60&&!i.pomodoroStarted&&i.setState({breakTime:i.state.breakTime-60}),console.log("decrease break time")},i.state={time:1500,breakTime:300},i.breakTime=300,i.pomodoroStarted=!1,i.breakStarted=!1,i.isPaused=!1,i.audio=new Audio("https://dl.dropbox.com/s/nacdk0xey4io5d8/wink-sound-effect.mp3"),i}return Object(c.a)(a,[{key:"componentDidUpdate",value:function(){this.state.time<1&&(this.audio.play(),this.stopTimer(this.timer),this.setState({time:this.time}),this.breakStarted||(this.startBreak(),this.breakStarted=!0)),this.state.breakTime<1&&(this.audio.play(),this.stopTimer(this.breakTimer),this.setState({breakTime:this.breakTime}),this.pomodoroStarted=!1,this.breakStarted=!1,this.handleStart())}},{key:"startBreak",value:function(){var e=this;this.breakTimer=setInterval((function(){e.setState({breakTime:e.state.breakTime-1})}),1e3)}},{key:"render",value:function(){return n.a.createElement("div",{className:"App container text-center"},n.a.createElement("h1",null,"Pomodoro Clock"),n.a.createElement(d,{sessionLabel:"Session Length",increaseTime:this.increaseTime,decreaseTime:this.decreaseTime,sessionLength:this.breakStarted?this.calculateTime(this.state.breakTime):this.calculateTime(this.state.time),breakLabel:"Break Length",increaseBreakTime:this.increaseBreakTime,decreaseBreakTime:this.decreaseBreakTime,breakLength:this.breakStarted?this.calculateTime(this.state.time):this.calculateTime(this.state.breakTime)}),n.a.createElement(u,{handleStart:this.handleStart,pauseBtn:this.isPaused?this.handleResume:this.handlePause,condition:this.isPaused?"Resume":"Pause",handleReset:this.handleReset}))}}]),a}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.90fce51b.chunk.js.map