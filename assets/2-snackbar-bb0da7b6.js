import{i as o}from"./vendor-77e16229.js";const m=document.querySelector(".form");m.addEventListener("submit",n);function n(t){t.preventDefault();const s=t.currentTarget.elements.delay.value,r=t.currentTarget.elements.state.value;let i;i=new Promise((e,l)=>{setTimeout(()=>{r==="fulfilled"?e(s):r==="rejected"&&l(s)},s)}),i.then(e=>{o.success({title:"Success",message:`✅ Fulfilled promise in ${e}ms`,position:"topRight"})}).catch(e=>{o.error({title:"Error",message:`❌ Rejected promise in ${e}ms`,position:"topRight"})}),t.currentTarget.reset()}
//# sourceMappingURL=2-snackbar-bb0da7b6.js.map