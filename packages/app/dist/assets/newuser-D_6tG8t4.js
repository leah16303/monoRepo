import{i as u,x as p,b as f,a as l,r as d,n as c,d as b,c as v}from"./reset.css-BUlA0fGw.js";var D=Object.defineProperty,i=(h,s,t,o)=>{for(var r=void 0,a=h.length-1,m;a>=0;a--)(m=h[a])&&(r=m(s,t,r)||r);return r&&D(s,t,r),r};const n=class n extends u{constructor(){super(...arguments),this.formData={},this.redirect="/"}get canSubmit(){return!!(this.api&&this.formData.username&&this.formData.password&&this.formData.confirmPassword&&this.formData.password===this.formData.confirmPassword)}render(){return p`
      <form
        @change=${s=>this.handleChange(s)}
        @submit=${s=>this.handleSubmit(s)}
      >
        <slot></slot>
        <slot name="button">
          <button ?disabled=${!this.canSubmit} type="submit">
            Sign Up
          </button>
        </slot>
        <p class="error">${this.error}</p>
      </form>
    `}handleChange(s){const t=s.target,o=t==null?void 0:t.name,r=t==null?void 0:t.value,a=this.formData;switch(o){case"username":this.formData={...a,username:r};break;case"password":this.formData={...a,password:r};break;case"confirmPassword":this.formData={...a,confirmPassword:r};break}}handleSubmit(s){s.preventDefault(),this.canSubmit&&fetch(this.api||"",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:this.formData.username,password:this.formData.password})}).then(t=>{if(t.status!==201)throw new Error("Signup failed");return t.json()}).then(t=>{const{token:o}=t,r=new CustomEvent("auth:message",{bubbles:!0,composed:!0,detail:["auth/signup",{token:o,redirect:this.redirect}]});this.dispatchEvent(r)}).catch(t=>{this.error=t.toString()})}};n.styles=[f.styles,l`
      .error:not(:empty) {
        color: var(--color-error);
        border: 1px solid var(--color-error);
        padding: var(--size-spacing-medium);
      }
    `];let e=n;i([d()],e.prototype,"formData");i([c()],e.prototype,"api");i([c()],e.prototype,"redirect");i([d()],e.prototype,"error");b({"mu-auth":v.Provider,"signup-form":e});
