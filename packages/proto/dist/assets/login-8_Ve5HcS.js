import{n as h,i as d,x as p,a as l,d as f,b}from"./property-Cal0TkJn.js";import{r as v}from"./reset.css-BQIC0rjc.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function m(o){return h({...o,state:!0,attribute:!1})}var g=Object.defineProperty,n=(o,r,t,i)=>{for(var e=void 0,a=o.length-1,c;a>=0;a--)(c=o[a])&&(e=c(r,t,e)||e);return e&&g(r,t,e),e};const u=class u extends d{constructor(){super(...arguments),this.formData={},this.redirect="/"}get canSubmit(){return!!(this.api&&this.formData.username&&this.formData.password)}render(){return p`
      <form
        @change=${r=>this.handleChange(r)}
        @submit=${r=>this.handleSubmit(r)}
      >
        <slot></slot>
        <slot name="button">
          <button
            ?disabled=${!this.canSubmit}
            type="submit">
            Login
          </button>
        </slot>
        <p class="error">${this.error}</p>
      </form>
    `}handleChange(r){const t=r.target,i=t==null?void 0:t.name,e=t==null?void 0:t.value,a=this.formData;switch(i){case"username":this.formData={...a,username:e};break;case"password":this.formData={...a,password:e};break}}handleSubmit(r){r.preventDefault(),this.canSubmit&&fetch((this==null?void 0:this.api)||"",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.formData)}).then(t=>{if(t.status!==200)throw"Login failed";return t.json()}).then(t=>{const{token:i}=t,e=new CustomEvent("auth:message",{bubbles:!0,composed:!0,detail:["auth/signin",{token:i,redirect:this.redirect}]});console.log("dispatching message",e),this.dispatchEvent(e)}).catch(t=>{console.log(t),this.error=t.toString()})}};u.styles=[v.styles,l`
      .error:not(:empty) {
        color: var(--color-error);
        border: 1px solid var(--color-error);
        padding: var(--size-spacing-medium);
      }
  `];let s=u;n([m()],s.prototype,"formData");n([h()],s.prototype,"api");n([h()],s.prototype,"redirect");n([m()],s.prototype,"error");f({"mu-auth":b.Provider,"login-form":s});
