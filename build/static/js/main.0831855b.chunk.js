(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{13:function(t,e,a){},14:function(t,e,a){},15:function(t,e,a){},17:function(t,e,a){"use strict";a.r(e);var n=a(2),u=a(8),l=a.n(u),r=(a(13),a(14),a(3)),s=a(4),c=a(1),o=a(6),b=a(5),i=(a(15),a(0)),h=function(t){Object(o.a)(a,t);var e=Object(b.a)(a);function a(t){var n;return Object(r.a)(this,a),(n=e.call(this,t)).state={result:"0",number:"0",operator:""},n.handleNumberInput=n.handleNumberInput.bind(Object(c.a)(n)),n.handleOperatorInput=n.handleOperatorInput.bind(Object(c.a)(n)),n.handleEqualInput=n.handleEqualInput.bind(Object(c.a)(n)),n.handleCommaInput=n.handleCommaInput.bind(Object(c.a)(n)),n.handleNegateInput=n.handleNegateInput.bind(Object(c.a)(n)),n.handleClearInput=n.handleClearInput.bind(Object(c.a)(n)),n}return Object(s.a)(a,[{key:"handleClearInput",value:function(){this.setState({result:"0",number:"0",operator:""})}},{key:"handleNumberInput",value:function(t){t.preventDefault();var e=t.target.innerHTML;console.log(e),this.setState((function(t){return{number:"0"===t.number&&"0"===e?"0":t.number%1===0&&"0"!==e?Number(t.number+e):t.number+e,result:t.operator?t.result:"0"}}))}},{key:"handleOperatorInput",value:function(t){var e=t.target.innerHTML;this.setState((function(t){return{operator:e,result:t.number?t.number:t.result,number:"-"===e&&"0"===t.number?"-":""}}))}},{key:"handleEqualInput",value:function(){var t=0;switch(this.state.operator){case"+":t=Number(this.state.result)+Number(this.state.number);break;case"-":t=this.state.result-this.state.number;break;case"*":t=this.state.result*this.state.number;break;case"/":t=this.state.result/this.state.number;break;default:t=this.state.number?this.state.number:this.state.result}this.setState({number:"",operator:"",result:Number(t)})}},{key:"handleCommaInput",value:function(){this.state.number&&this.setState({number:this.state.number.toString().includes(".")?this.state.number:this.state.number+"."})}},{key:"handleNegateInput",value:function(){!this.state.number&&this.state.result?this.setState({result:-this.state.result}):this.setState({number:-this.state.number})}},{key:"render",value:function(){var t=this.state,e=t.number,a=t.result,n=t.operator;return Object(i.jsxs)("div",{className:"calculator",children:[Object(i.jsx)(m,{output:e||a+n}),Object(i.jsxs)("div",{className:"calculator-buttons",children:[Object(i.jsx)(p,{value:"C",className:"calculator-clear-button",onClick:this.handleClearInput}),Object(i.jsx)(p,{value:"+-",className:"calculator-operation-button",onClick:this.handleNegateInput}),Object(i.jsx)(p,{value:"%",className:"calculator-operation-button",onClick:"",disabled:"true"}),Object(i.jsx)(p,{value:"/",className:"calculator-operation-button",onClick:this.handleOperatorInput}),Object(i.jsx)(p,{value:"7",className:"calculator-number-button",onClick:this.handleNumberInput}),Object(i.jsx)(p,{value:"8",className:"calculator-number-button",onClick:this.handleNumberInput}),Object(i.jsx)(p,{value:"9",className:"calculator-number-button",onClick:this.handleNumberInput}),Object(i.jsx)(p,{value:"*",className:"calculator-operation-button",onClick:this.handleOperatorInput}),Object(i.jsx)(p,{value:"4",className:"calculator-number-button",onClick:this.handleNumberInput}),Object(i.jsx)(p,{value:"5",className:"calculator-number-button",onClick:this.handleNumberInput}),Object(i.jsx)(p,{value:"6",className:"calculator-number-button",onClick:this.handleNumberInput}),Object(i.jsx)(p,{value:"-",className:"calculator-operation-button",onClick:this.handleOperatorInput}),Object(i.jsx)(p,{value:"1",className:"calculator-number-button",onClick:this.handleNumberInput}),Object(i.jsx)(p,{value:"2",className:"calculator-number-button",onClick:this.handleNumberInput}),Object(i.jsx)(p,{value:"3",className:"calculator-number-button",onClick:this.handleNumberInput}),Object(i.jsx)(p,{value:"+",className:"calculator-operation-button",onClick:this.handleOperatorInput}),Object(i.jsx)(p,{value:"0",className:"calculator-number-button",onClick:this.handleNumberInput}),Object(i.jsx)(p,{value:".",className:"calculator-number-button",onClick:this.handleCommaInput}),Object(i.jsx)(p,{value:"=",className:"calculator-equal-button span-two",onClick:this.handleEqualInput})]})]})}}]),a}(n.Component),m=function(t){Object(o.a)(a,t);var e=Object(b.a)(a);function a(){return Object(r.a)(this,a),e.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var t=this.props.output;return Object(i.jsx)("div",{className:"calculator-display",children:t})}}]),a}(n.Component),p=function(t){Object(o.a)(a,t);var e=Object(b.a)(a);function a(){return Object(r.a)(this,a),e.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var t=this.props,e=t.value,a=t.onClick,n=t.className,u=t.disabled;return Object(i.jsx)("button",{value:e,className:"calculator-button "+n,onClick:a,disabled:u,children:e})}}]),a}(n.Component),j=h;var d=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(j,{})})};l.a.render(Object(i.jsx)(d,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.0831855b.chunk.js.map