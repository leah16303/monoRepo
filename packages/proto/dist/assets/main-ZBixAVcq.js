import{i as n,a as l,x as c,n as m,d as p}from"./property-CAEm6_Ia.js";const x=n`
    * {
    margin: 0;
    box-sizing: border-box;
  }
  img {
    max-width: 100%;
  }
  ul,
  menu {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
  }
`,g={styles:x};var h=Object.defineProperty,f=(s,t,a,u)=>{for(var r=void 0,e=s.length-1,d;e>=0;e--)(d=s[e])&&(r=d(t,a,r)||r);return r&&h(t,a,r),r};const o=class o extends l{render(){return c`
      <section class="card">
        <h2>${this.category}</h2>
        <div class="links">
          <slot name="link-1"></slot>
          <slot name="link-2"></slot>
        </div>
      </section>
    `}};o.styles=[g.styles,n`
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
    `];let i=o;f([m({type:String})],i.prototype,"category");p({"health-planner-card":i});
