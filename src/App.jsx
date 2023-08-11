import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className='container'>
      <header>
        <h1 className='basedprice'>Simple, traffic-based pricing</h1>
        <h6 className='trialtext'>
          Sign-up for our 30-day trial. No credit card required
        </h6>
      </header>
      <main>
        <div className='card'>
          <section className='pageview'>
            <span className='kpageview'>100K PAGEVIEWS</span>
            <span>
              <span className='price'> $16.00</span>{" "}
              <span className='month'>/ month</span>
            </span>
          </section>
          <section className='range'>
            <input type='range' id='vol' name='vol' min='0' max='12' />
          </section>
          <section className='bling'>
            <span className="billing">Monthly Billing</span>
            <div class='checkbox-wrapper-7'>
              <input class='tgl tgl-ios' id='cb2-7' type='checkbox' />
              <label class='tgl-btn' for='cb2-7' />
            </div>
            <p className="billing">Yearly Billing</p>
            <div className="discount">25% discount</div>
          </section>
          <section className="footer">
              <p>✔ Unlimited websites</p>
              <p>✔ 100% data ownership</p>
              <p>✔ Email reports</p>
              <button className="trial">Start my trial</button>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
