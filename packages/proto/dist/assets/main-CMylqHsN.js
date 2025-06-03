import{i as l,x as c,a as m,n as p,d as n,b as h}from"./property-Cal0TkJn.js";import{r as u}from"./reset.css-BQIC0rjc.js";var v=Object.defineProperty,x=(o,t,s,f)=>{for(var r=void 0,e=o.length-1,d;e>=0;e--)(d=o[e])&&(r=d(t,s,r)||r);return r&&v(t,s,r),r};const a=class a extends l{render(){return c`
      <section class="card">
        <h2>${this.category}</h2>
        <div class="links">
          <slot name="link-1"></slot>
          <slot name="link-2"></slot>
        </div>
      </section>
    `}};a.styles=[u.styles,m`
      :host {
        display: contents;
      }

      .card {
        grid-column: span 4;
        background-color: var(--color-card);
        padding: 2.2rem;
        border-radius: 17px;
        box-shadow: 0 2px 6px var(--dark-red);
        color: var(--color-card-text);
      }

      .card h2 {
        margin-bottom: 0.85rem;
      }

      .links {
        display: flex;
        flex-direction: column;
      }

      svg.icon {
        width: 2em;
        height: 2em;
        fill: currentColor;
        vertical-align: middle;
        font-size: 1.5rem;
      }

      @media (max-width: 900px) {
        .card {
          grid-column: span 4;
        }
      }

      @media (max-width: 600px) {
        .card {
          grid-column: span 4;
        }
      }
    `];let i=a;x([p({type:String})],i.prototype,"category");n({"mu-auth":h.Provider});HeaderElement.initializeOnce();n({"health-planner-card":i});
