(()=>{"use strict";const e=async function(e){try{const t=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${e}&units=metric&appid=55bccb0c2eef9d76642c37d4edd0bc00`,{mode:"cors"});if(!t.ok)throw new Error(`City: ${e} not found!`);return function(e){const{name:t,sys:{country:n},main:{temp:c,temp_min:a,temp_max:o},weather:{0:{main:i,description:d,icon:r}}}=e;return{name:t,country:n,temperature:c,tempMin:a,tempMax:o,description:i,detailedDescription:d,weatherIcon:r}}(await t.json())}catch(e){return alert(e),null}},t=(document.getElementById("city-search-btn"),document.getElementById("city"),{createDisplayContainer:function(){const e=document.getElementById("city-weather-display");e.textContent="";const t=document.createElement("div");t.classList.add("display-container"),e.appendChild(t)},displayDetails:function(e){const t=document.querySelector(".display-container"),n=document.createElement("h1");n.style.fontWeight="bolder",n.textContent=`${e.name}, ${e.country}`;const c=document.createElement("h1");c.textContent=Math.round(`${e.temperature}`)+"°C";const a=document.createElement("img");a.src=`http://openweathermap.org/img/wn/${e.weatherIcon}.png`;const o=document.createElement("h2");o.textContent=`${e.description}`;const i=document.createElement("h3");i.textContent=`(${e.detailedDescription})`;const d=document.createElement("h5");d.textContent="Min: "+Math.round(`${e.tempMin}`)+"°C";const r=document.createElement("h5");r.textContent="Max: "+Math.round(`${e.tempMax}`)+"°C",t.appendChild(n),t.appendChild(c),t.appendChild(a),t.appendChild(o),t.appendChild(i),t.appendChild(d),t.appendChild(r)}}),n=document.getElementById("city-search-btn"),c=document.getElementById("city");c.addEventListener("keyup",(function(e){"Enter"===e.key&&(e.preventDefault(),document.getElementById("city-search-btn").click())})),n.addEventListener("click",(async()=>{const n=await e(c.value);t.createDisplayContainer(),t.displayDetails(n)}))})();