import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>Second Flamboyant Gazelle</title>
          <meta property="og:title" content="Second Flamboyant Gazelle" />
          <link
            rel="canonical"
            href="https://second-flamboyant-gazelle-xjotvd.teleporthq.site/"
          />
          <meta
            property="og:url"
            content="https://second-flamboyant-gazelle-xjotvd.teleporthq.site/"
          />
        </Head>
        <Navigation></Navigation>
        <section id="hero" className="hero-carousel">
          <div className="hero-carousel__slides">
            <div className="hero-carousel__slide active">
              <img
                src="https://images.pexels.com/photos/15504475/pexels-photo-15504475.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                alt="Southwestern Arizona home with beautiful stucco finish"
                className="hero-carousel__image"
              />
            </div>
            <div className="hero-carousel__slide">
              <img
                src="https://images.pexels.com/photos/33301798/pexels-photo-33301798.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                alt="Mediterranean style stucco house at golden hour"
                className="hero-carousel__image"
              />
            </div>
            <div className="hero-carousel__slide">
              <img
                src="https://images.pexels.com/photos/14625165/pexels-photo-14625165.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                alt="Traditional colonial stucco facade with warm sunlight"
                className="hero-carousel__image"
              />
            </div>
            <div className="hero-carousel__slide">
              <img
                src="https://images.pexels.com/photos/21235708/pexels-photo-21235708.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                alt="Modern Arizona stucco home with desert landscaping"
                className="hero-carousel__image"
              />
            </div>
            <div className="hero-carousel__slide">
              <img
                src="https://images.pexels.com/photos/3771265/pexels-photo-3771265.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                alt="Clean white stucco texture on a Phoenix residence"
                className="hero-carousel__image"
              />
            </div>
          </div>
          <div className="hero-carousel__overlay"></div>
          <header className="hero-carousel__top-bar">
            <div className="hero-carousel__brand">
              <span className="hero-carousel__wordmark">CarloStucco</span>
            </div>
            <div className="hero-carousel__actions">
              <a href="tel:+16026281573">
                <div className="hero-carousel__phone">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"></path>
                  </svg>
                  <span>(602) 628-1573</span>
                </div>
              </a>
              <div className="hero-carousel__menu-wrapper">
                <button id="menuTrigger" className="hero-carousel__menu-btn">
                  <span>Menu</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9l6 6l6-6"></path>
                  </svg>
                </button>
                <div id="menuDropdown" className="hero-carousel__dropdown">
                  <a href="#why-us">
                    <div className="hero-carousel__dropdown-link">
                      <span>About Us</span>
                    </div>
                  </a>
                  <a href="#gallery">
                    <div className="hero-carousel__dropdown-link">
                      <span>Gallery</span>
                    </div>
                  </a>
                  <a href="#contact">
                    <div className="hero-carousel__dropdown-link">
                      <span>Contact Us</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </header>
          <div className="hero-carousel__content">
            <h1 className="hero-title">
              <span>
                {' '}
                Timeless Stucco.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                {' '}
                Built for the Arizona Sun.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </h1>
            <p className="hero-subtitle">
              Family-owned craftsmanship by Carlos — serving Phoenix and the
              Valley of the Sun.
            </p>
            <a href="#contact">
              <div className="btn btn-primary btn-lg">
                <span>Get Your Free Quote</span>
              </div>
            </a>
          </div>
          <div className="hero-carousel__indicators">
            <span className="hero-carousel__dot active"></span>
            <span className="hero-carousel__dot"></span>
            <span className="hero-carousel__dot"></span>
            <span className="hero-carousel__dot"></span>
            <span className="hero-carousel__dot"></span>
          </div>
        </section>
        <section id="why-us" className="why-us">
          <div className="why-us__container">
            <h2 className="section-title">Why Choose Us</h2>
            <div className="why-us__divider"></div>
            <p className="why-us__intro section-content">
              For over two decades, Carlos has built his reputation one home at
              a time. Every project that bears the CarloStucco name carries his
              personal attention — from the first handshake to the final
              touch-up. We don&apos;t subcontract our craft, and we don&apos;t
              cut corners. We simply do stucco the way it should be done: with
              patience, pride, and an eye for the kind of detail you can only
              see up close.
            </p>
            <div className="why-us__grid">
              <div className="why-us__card">
                <div className="why-us__icon-box">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m14.42 9.058l-5.362 5.363a1.978 1.978 0 0 1-3.275-.773L3.101 5.604a1.978 1.978 0 0 1 2.502-2.502l8.045 2.682a1.978 1.978 0 0 1 .773 3.274M10 10l6.5 6.5m2.847.075l1.08 1.079a1.96 1.96 0 0 1-2.773 2.772l-1.08-1.079a1.96 1.96 0 0 1 2.773-2.772"></path>
                  </svg>
                </div>
                <h3 className="why-us__card-title">Master Craftsmanship</h3>
                <p className="why-us__card-text">
                  With decades of hands-on experience, Carlos personally
                  oversees every job from start to finish. This isn&apos;t an
                  office operation — it&apos;s a true craftsman&apos;s trade,
                  practiced the old-fashioned way, with the kind of pride that
                  comes from signing your name to your work.
                </p>
              </div>
              <div className="why-us__card">
                <div className="why-us__icon-box">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                      <path d="m9 12l2 2l4-4"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="why-us__card-title">Premium Materials</h3>
                <p className="why-us__card-text">
                  We use only top-grade stucco products specifically chosen to
                  withstand Arizona&apos;s intense sun, dry heat, and monsoon
                  storms. The materials beneath the surface matter just as much
                  as the finish you can see — and we never compromise on either.
                </p>
              </div>
              <div className="why-us__card">
                <div className="why-us__icon-box">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                </div>
                <h3 className="why-us__card-title">
                  Beautiful, Lasting Finishes
                </h3>
                <p className="why-us__card-text">
                  From smooth Santa Fe finishes to classic Spanish lace, every
                  texture is hand-crafted to match the character of your home.
                  Our finishes are built to hold their beauty for decades — not
                  just a few seasons — and to elevate your home&apos;s curb
                  appeal from the street.
                </p>
              </div>
              <div className="why-us__card">
                <div className="why-us__icon-box">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="m11 17l2 2a1 1 0 1 0 3-3"></path>
                      <path d="m14 14l2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path>
                      <path d="m21 3l1 11h-2M3 3L2 14l6.5 6.5a1 1 0 1 0 3-3M3 4h8"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="why-us__card-title">Best Value in the Valley</h3>
                <p className="why-us__card-text">
                  Honest pricing. Clear timelines. No hidden add-ons. We believe
                  Arizona homeowners deserve the best bang for their buck — and
                  that means premium work at a fair, straightforward price. No
                  pressure, no surprises.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="gallery" className="gallery">
          <div className="gallery__container">
            <h2 className="section-title">Our Work</h2>
            <div className="why-us__divider"></div>
            <p className="gallery__subtitle">
              A selection of recent projects from across the Phoenix Valley.
            </p>
            <div id="galleryCarousel" className="gallery__carousel">
              <div className="gallery__slide active">
                <div className="gallery__card">
                  <img
                    src="https://images.pexels.com/photos/15504475/pexels-photo-15504475.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    alt="Custom Spanish Lace Finish Scottsdale"
                    className="gallery__image"
                  />
                  <div className="gallery__caption">
                    <span className="gallery__project">
                      Custom Spanish Lace Finish
                    </span>
                    <span className="gallery__location">Scottsdale, AZ</span>
                  </div>
                </div>
              </div>
              <div className="gallery__slide">
                <div className="gallery__card">
                  <img
                    src="https://images.pexels.com/photos/33301798/pexels-photo-33301798.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    alt="Full Re-Stucco Arcadia Phoenix"
                    className="gallery__image"
                  />
                  <div className="gallery__caption">
                    <span className="gallery__project">
                      Full Re-Stucco &amp; Color Refresh
                    </span>
                    <span className="gallery__location">Arcadia, Phoenix</span>
                  </div>
                </div>
              </div>
              <div className="gallery__slide">
                <div className="gallery__card">
                  <img
                    src="https://images.pexels.com/photos/14625165/pexels-photo-14625165.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    alt="Smooth Santa Fe Finish Paradise Valley"
                    className="gallery__image"
                  />
                  <div className="gallery__caption">
                    <span className="gallery__project">
                      Smooth Santa Fe Finish
                    </span>
                    <span className="gallery__location">
                      Paradise Valley, AZ
                    </span>
                  </div>
                </div>
              </div>
              <div className="gallery__slide">
                <div className="gallery__card">
                  <img
                    src="https://images.pexels.com/photos/21235708/pexels-photo-21235708.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    alt="New Construction Chandler"
                    className="gallery__image"
                  />
                  <div className="gallery__caption">
                    <span className="gallery__project">
                      New Construction Monolithic Finish
                    </span>
                    <span className="gallery__location">Chandler, AZ</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="gallery__indicators">
              <span className="gallery__dot active"></span>
              <span className="gallery__dot"></span>
              <span className="gallery__dot"></span>
              <span className="gallery__dot"></span>
            </div>
          </div>
        </section>
        <section id="contact" className="contact">
          <div className="contact__container">
            <h2 className="section-title">Contact Us Today</h2>
            <p className="contact__intro">
              Tell us a little about your project — Carlos will personally
              follow up to put together a quote tailored to your home. No
              pressure, no hassle, and no commitment. We&apos;re happy to answer
              questions, talk through options, or just give you an honest read
              on what your home might need.
            </p>
            <div className="wizard-card">
              <div className="wizard-card__progress">
                <span className="wizard-card__dot active"></span>
                <span className="wizard-card__dot"></span>
                <span className="wizard-card__dot"></span>
                <span className="wizard-card__dot"></span>
              </div>
              <div id="wizardSteps" className="wizard-card__steps">
                <div data-step="1" className="wizard-step active">
                  <span className="wizard-step__label">Step 1 of 4</span>
                  <h3 className="wizard-step__question">
                    When are you looking to get started?
                  </h3>
                  <div className="wizard-step__pills">
                    <button data-value="ASAP" className="wizard-pill">
                      ASAP
                    </button>
                    <button data-value="Within 1 month" className="wizard-pill">
                      Within 1 month
                    </button>
                    <button data-value="1-3 months" className="wizard-pill">
                      1–3 months
                    </button>
                    <button data-value="Exploring" className="wizard-pill">
                      No rush, just exploring
                    </button>
                  </div>
                  <div className="wizard-step__nav">
                    <button
                      disabled="true"
                      className="wizard-next btn btn-primary btn-lg"
                    >
                      Next
                    </button>
                  </div>
                </div>
                <div data-step="2" className="wizard-step">
                  <span className="wizard-step__label">Step 2 of 4</span>
                  <h3 className="wizard-step__question">
                    How large is your home?
                  </h3>
                  <div className="wizard-step__inputs">
                    <div className="form-group">
                      <label htmlFor="sqft">Square footage</label>
                      <input
                        type="number"
                        id="sqft"
                        placeholder="e.g. 2,400"
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="size-details">
                        Any details about the size? (optional)
                      </label>
                      <textarea
                        id="size-details"
                        rows="3"
                        className="form-input"
                      ></textarea>
                    </div>
                    <div className="form-checkbox">
                      <input type="checkbox" id="notSure" />
                      <label htmlFor="notSure">
                        Not sure — I&apos;d rather have Carlos help estimate
                      </label>
                    </div>
                  </div>
                  <div className="wizard-step__nav">
                    <button className="wizard-back btn btn-outline">
                      Back
                    </button>
                    <button
                      disabled="true"
                      className="wizard-next btn btn-primary"
                    >
                      Next
                    </button>
                  </div>
                </div>
                <div data-step="3" className="wizard-step">
                  <span className="wizard-step__label">Step 3 of 4</span>
                  <h3 className="wizard-step__question">
                    Anything else we should know?
                  </h3>
                  <p className="wizard-step__helper">
                    Completely optional — feel free to skip this step if
                    you&apos;d rather just chat in person.
                  </p>
                  <textarea
                    id="notes"
                    rows="5"
                    placeholder="Color preferences, problem areas, damage from monsoon storms..."
                    className="form-input"
                  ></textarea>
                  <div className="wizard-step__nav">
                    <button className="wizard-back btn btn-outline">
                      Back
                    </button>
                    <div className="wizard-step__nav-right">
                      <button className="wizard-skip btn btn-link">Skip</button>
                      <button className="wizard-next btn btn-primary">
                        Next
                      </button>
                    </div>
                  </div>
                </div>
                <div data-step="4" className="wizard-step">
                  <span className="wizard-step__label">Step 4 of 4</span>
                  <h3 className="wizard-step__question">
                    How can we reach you?
                  </h3>
                  <p className="wizard-step__helper">
                    We&apos;ll only use your info to follow up about your
                    project — we never share it, and we never spam.
                  </p>
                  <div className="wizard-step__inputs">
                    <div className="form-group">
                      <label htmlFor="userName">
                        <span>
                          {' '}
                          Name
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <span className="required-mark">*</span>
                      </label>
                      <input
                        type="text"
                        id="userName"
                        placeholder="Your name"
                        required="true"
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="userPhone">Phone number (optional)</label>
                      <input
                        type="tel"
                        id="userPhone"
                        placeholder="(555) 555-5555"
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="userEmail">
                        Email address (optional)
                      </label>
                      <input
                        type="email"
                        id="userEmail"
                        placeholder="you@example.com"
                        className="form-input"
                      />
                    </div>
                    <p id="validationMsg" className="form-error-msg"></p>
                  </div>
                  <div className="wizard-step__nav">
                    <button className="wizard-back btn btn-outline">
                      Back
                    </button>
                    <button
                      id="submitWizard"
                      className="btn btn-primary btn-lg"
                    >
                      Send My Request
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonials" className="testimonials">
          <div className="testimonials__container">
            <h2 className="section-title">Local Voices</h2>
            <div className="why-us__divider"></div>
            <div className="testimonials__rail">
              <div className="testimonials__card">
                <p className="testimonials__quote">
                  &quot;Carlos was on site every single day. The texture match
                  on our repair was absolutely flawless. You can&apos;t even
                  tell where the old stucco ends and the new begins.&quot;
                </p>
                <span className="testimonials__author">
                  Sarah M. — Scottsdale
                </span>
              </div>
              <div className="testimonials__card">
                <p className="testimonials__quote">
                  &quot;True craftsmanship is hard to find in Phoenix these
                  days. CarloStucco is the real deal. Fair price, beautiful
                  work, and a handshake that actually means something.&quot;
                </p>
                <span className="testimonials__author">
                  Robert T. — Arcadia
                </span>
              </div>
              <div className="testimonials__card">
                <p className="testimonials__quote">
                  &quot;We&apos;ve had three different stucco companies out over
                  the years, and nobody compares to Carlos. He treats your home
                  like it&apos;s his own. Highly recommend.&quot;
                </p>
                <span className="testimonials__author">
                  Elena G. — Paradise Valley
                </span>
              </div>
            </div>
          </div>
        </section>
        <section id="process" className="process">
          <div className="process__container">
            <h2 className="section-title">Our Process</h2>
            <div className="why-us__divider"></div>
            <div className="process__steps">
              <div className="process__step">
                <div className="process__number">
                  <span>1</span>
                </div>
                <h3 className="process__title">Personal Estimate</h3>
                <p className="process__text">
                  Carlos visits your home personally to assess the project and
                  provide a transparent, no-pressure quote tailored to your
                  specific needs.
                </p>
              </div>
              <div className="process__step">
                <div className="process__number">
                  <span>2</span>
                </div>
                <h3 className="process__title">Hands-On Craft</h3>
                <p className="process__text">
                  No subcontractors. Carlos leads the work himself, ensuring
                  every layer and texture meets his personal standards for
                  quality and durability.
                </p>
              </div>
              <div className="process__step">
                <div className="process__number">
                  <span>3</span>
                </div>
                <h3 className="process__title">Final Walkthrough</h3>
                <p className="process__text">
                  We don&apos;t leave until you&apos;re 100% satisfied. Carlos
                  walks the project with you to ensure every detail is perfect
                  before we sign off.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="cta-area" className="cta-area">
          <div className="cta-area__container">
            <div className="cta-area__content">
              <h2 className="section-title">Ready to protect your home?</h2>
              <p className="section-content">
                We proudly serve Phoenix, Scottsdale, Mesa, Chandler, Tempe,
                Glendale, Peoria, Paradise Valley, and the entire Valley of the
                Sun.
              </p>
              <a href="#contact">
                <div className="btn btn-primary btn-lg">
                  <span>Get Started with Carlos</span>
                </div>
              </a>
            </div>
          </div>
        </section>
        <dialog id="thankYouModal" className="success-modal">
          <div className="success-modal__content">
            <div className="success-modal__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h2 className="success-modal__title">
              Thank you for contacting us!
            </h2>
            <p className="success-modal__text">
              A professional will be reaching out to you shortly. In the
              meantime, feel free to explore more of our recent work — and
              thanks for considering CarloStucco for your home.
            </p>
            <button id="closeModal" className="btn btn-primary btn-lg">
              Close
            </button>
          </div>
        </dialog>
        <div className="home-container2">
          <div className="home-container3">
            <Script
              html={`<style>
        @keyframes stepFadeIn {from {opacity: 0;
transform: translateY(10px);}
to {opacity: 1;
transform: translateY(0);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="home-container4">
          <div className="home-container5">
            <Script
              html={`<script defer data-name="carlostucco-logic">
(function(){
  // Hero Carousel Logic
  const heroSlides = document.querySelectorAll(".hero-carousel__slide")
  const heroDots = document.querySelectorAll(".hero-carousel__dot")
  let currentHeroSlide = 0

  function showHeroSlide(index) {
    heroSlides.forEach((s) => s.classList.remove("active"))
    heroDots.forEach((d) => d.classList.remove("active"))
    heroSlides[index].classList.add("active")
    heroDots[index].classList.add("active")
  }

  setInterval(() => {
    currentHeroSlide = (currentHeroSlide + 1) % heroSlides.length
    showHeroSlide(currentHeroSlide)
  }, 6000)

  // Menu Dropdown Logic
  const menuTrigger = document.getElementById("menuTrigger")
  const menuDropdown = document.getElementById("menuDropdown")

  menuTrigger.addEventListener("click", (e) => {
    e.stopPropagation()
    menuDropdown.classList.toggle("active")
  })

  document.addEventListener("click", () => {
    menuDropdown.classList.remove("active")
  })

  // Gallery Carousel Logic
  const gallerySlides = document.querySelectorAll(".gallery__slide")
  const galleryDots = document.querySelectorAll(".gallery__dot")
  let currentGallerySlide = 0
  let galleryInterval

  function showGallerySlide(index) {
    gallerySlides.forEach((s) => s.classList.remove("active"))
    galleryDots.forEach((d) => d.classList.remove("active"))
    gallerySlides[index].classList.add("active")
    galleryDots[index].classList.add("active")
  }

  function startGalleryAuto() {
    galleryInterval = setInterval(() => {
      currentGallerySlide = (currentGallerySlide + 1) % gallerySlides.length
      showGallerySlide(currentGallerySlide)
    }, 6000)
  }

  startGalleryAuto()

  const galleryCarousel = document.getElementById("galleryCarousel")
  galleryCarousel.addEventListener("mouseenter", () => clearInterval(galleryInterval))
  galleryCarousel.addEventListener("mouseleave", startGalleryAuto)

  // Wizard Wizard Logic
  const wizardSteps = document.querySelectorAll(".wizard-step")
  const wizardDots = document.querySelectorAll(".wizard-card__dot")
  let currentStep = 1

  function updateWizard() {
    wizardSteps.forEach((step) => {
      step.classList.toggle("active", parseInt(step.dataset.step) === currentStep)
    })

    wizardDots.forEach((dot, idx) => {
      dot.classList.toggle("active", idx + 1 === currentStep)
      dot.classList.toggle("completed", idx + 1 < currentStep)
    })
  }

  // Step 1: Pill selection
  const pills = document.querySelectorAll(".wizard-pill")
  pills.forEach((pill) => {
    pill.addEventListener("click", () => {
      pills.forEach((p) => p.classList.remove("selected"))
      pill.classList.add("selected")
      pill.closest(".wizard-step").querySelector(".wizard-next").disabled = false
    })
  })

  // Step 2: Validation
  const sqftInput = document.getElementById("sqft")
  const notSureCheck = document.getElementById("notSure")
  const step2Next = document.querySelector('.wizard-step[data-step="2"] .wizard-next')

  function validateStep2() {
    step2Next.disabled = !(sqftInput.value || notSureCheck.checked)
  }
  sqftInput.addEventListener("input", validateStep2)
  notSureCheck.addEventListener("change", () => {
    sqftInput.disabled = notSureCheck.checked
    document.getElementById("size-details").disabled = notSureCheck.checked
    validateStep2()
  })

  // Navigation
  document.querySelectorAll(".wizard-next").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (currentStep < 4) {
        currentStep++
        updateWizard()
      }
    })
  })

  document.querySelectorAll(".wizard-back").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (currentStep > 1) {
        currentStep--
        updateWizard()
      }
    })
  })

  document.querySelectorAll(".wizard-skip").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentStep++
      updateWizard()
    })
  })

  // Final Submit
  const submitBtn = document.getElementById("submitWizard")
  const nameInput = document.getElementById("userName")
  const phoneInput = document.getElementById("userPhone")
  const emailInput = document.getElementById("userEmail")
  const validationMsg = document.getElementById("validationMsg")
  const modal = document.getElementById("thankYouModal")

  submitBtn.addEventListener("click", () => {
    const hasName = nameInput.value.trim() !== ""
    const hasContact = phoneInput.value.trim() !== "" || emailInput.value.trim() !== ""

    if (!hasName || !hasContact) {
      validationMsg.textContent = "Please share your name, and either a phone number or email, so Carlos can reach you."
      return
    }

    validationMsg.textContent = ""
    modal.showModal()
  })

  document.getElementById("closeModal").addEventListener("click", () => {
    modal.close()
    // Reset wizard
    currentStep = 1
    updateWizard()
    // Clear inputs
    document.querySelectorAll(".form-input").forEach((i) => (i.value = ""))
    pills.forEach((p) => p.classList.remove("selected"))
    document.querySelector('.wizard-step[data-step="1"] .wizard-next').disabled = true
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .home-container2 {
            display: none;
          }
          .home-container3 {
            display: contents;
          }
          .home-container4 {
            display: none;
          }
          .home-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Home
