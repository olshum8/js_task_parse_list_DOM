var a,r=document.querySelector("ul");function t(a){return parseInt(a.replace(/[^0-9.-]+/g,""))}(a=Array.from(r.children)).sort(function(a,r){return t(r.dataset.salary)-t(a.dataset.salary)}),a.forEach(function(a){return r.appendChild(a)}),Array.from(r.children).map(function(a){return{name:a.textContent,position:a.dataset.position,salary:t(a.dataset.salary),age:Number(a.dataset.age)}});
//# sourceMappingURL=index.51627e0c.js.map