import{a as h,n,i as p,x as l,d as b}from"./property-Cal0TkJn.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const u=t=>(e,o)=>{o!==void 0?o.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};var f=Object.defineProperty,x=Object.getOwnPropertyDescriptor,c=(t,e,o,s)=>{for(var r=s>1?void 0:s?x(e,o):e,i=t.length-1,d;i>=0;i--)(d=t[i])&&(r=(s?d(e,o,r):d(r))||r);return s&&r&&f(e,o,r),r};let a=class extends p{constructor(){super(...arguments),this.entries=[]}connectedCallback(){super.connectedCallback(),this.src&&this.hydrate(this.src)}hydrate(t){fetch(t).then(e=>{if(!e.ok)throw new Error("Failed to fetch");return e.json()}).then(e=>{e&&(this.entries=e,console.log("Loaded entries:",this.entries))}).catch(e=>{console.error("Error loading JSON data:",e)})}render(){return l`
      <div class="main-content">
        <table class="exercise-table">
          <thead>
            <tr>
              <th>Day</th>
              <th>Exercise</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            ${this.entries.map(t=>l`
                <tr>
                  <td>${t.day}</td>
                  <td>${t.activity}</td>
                  <td>${t.duration}</td>
                </tr>
              `)}
          </tbody>
        </table>
      </div>
    `}};a.styles=h`
    :host {
      display: block;
      padding: var(--size-spacing-large);
    }

    .main-content {
      display: grid;
      place-items: center;
    }

    .exercise-table {
      width: 100%;
      max-width: 800px;
      border-collapse: collapse;
      background-color: white;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    }

    .exercise-table th,
    .exercise-table td {
      padding: 1rem;
      text-align: left;
      border: 1px solid #ddd;
    }

    .exercise-table th {
      background-color: var(--color-background-header);
      color: var(--color-text-heading);
      font-weight: var(--font-display-bold);
    }

    .exercise-table td {
      background-color: var(--color-table);
    }
  `;c([n({type:Array})],a.prototype,"entries",2);c([n()],a.prototype,"src",2);a=c([u("workout-schedule")],a);b({"workout-schedule":a});
