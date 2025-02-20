import React from "react";
import { SecondaryNavbar } from "../../components";

const HelpSupportPage = () => {
  // Dummy Data for FAQs
  const faqData = [
    {
      question: "How do I create an account?",
      answer:
        "To create an account, click on the 'Sign Up' button on the homepage and follow the instructions.",
    },
    {
      question: "How do I reset my password?",
      answer:
        "You can reset your password by clicking on the 'Forgot Password' link on the login page.",
    },
    {
      question: "How do I contact support?",
      answer:
        "You can contact support via email at support@teachersfees.com or by phone at +1-555-123-4567.",
    },
  ];

  // Dummy Data for Tutorials
  const tutorialData = [
    {
      title: "Getting Started Guide",
      description: "A quick guide to help you get started with our platform.",
    },
    {
      title: "Managing Teacher Fees",
      description: "Learn how to effectively manage teacher fees.",
    },
    {
      title: "Troubleshooting Common Issues",
      description: "Solutions to common problems you might encounter.",
    },
  ];

  return (
    <main className="wrapper home-wrapper">
      <SecondaryNavbar title={"Help & Support"} />
      <div className="min-h-screen mt-3 pb-100 bg-light">
        {/* Hero Section */}
        <header
          className="bg-primary text-white py-6"
          style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}
        >
          <div className="container text-center">
            <h1 className="display-4 fw-bold mb-3">Help Center</h1>
            <p className="lead">
              We're here to help you manage teacher fees efficiently
            </p>
          </div>
        </header>

        <main className="container mt-n5">
          {/* Quick Contact Cards */}
          <div className="row g-4 mb-5">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-lg hover-shadow transition">
                <div className="card-body text-center p-4">
                  <i className="fas fa-envelope fa-3x text-primary mb-3"></i>
                  <h3 className="h5 card-title mb-2">Email Support</h3>
                  <p className="card-text text-muted mb-0">
                    support@turaingrp.com
                  </p>
                  <a
                    href="mailto:support@turaingrp.com"
                    className="btn btn-link text-primary text-decoration-none mt-2"
                  >
                    Write to Us <i className="fas fa-arrow-right ms-1"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-lg hover-shadow transition">
                <div className="card-body text-center p-4">
                  <i className="fas fa-phone fa-3x text-primary mb-3"></i>
                  <h3 className="h5 card-title mb-2">Phone Support</h3>
                  <p className="card-text text-muted mb-0">+91 9230996919</p>
                  <p className="card-text text-muted mb-0">+91 6290384889</p>
                  <p className="card-text text-muted mb-0">+91 6290384889</p>
                  <p className="text-muted small mt-2">
                    Mon-Sat, 10AM - 8PM EST
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-lg hover-shadow transition">
                <div className="card-body text-center p-4">
                  <i className="fas fa-map-marker-alt fa-3x text-primary mb-3"></i>
                  <h3 className="h5 card-title mb-2">Office Address</h3>
                  <p className="card-text text-muted mb-0">
                    6/12 Poddarnagar, Kolkata-700068,
                    <br />
                    Kolkata, WB, India.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Knowledge Base Sections */}
          <div className="row g-5">
            <div className="col-lg-8">
              {/* FAQ Section */}
              <section className="mb-5">
                <h2 className="h3 mb-4 text-primary d-flex align-items-center">
                  <i className="fas fa-question-circle me-3"></i>Frequently
                  Asked Questions
                </h2>
                <div className="accordion" id="faqAccordion">
                  {faqData.map((item, index) => (
                    <div className="accordion-item" key={index}>
                      <h3 className="accordion-header">
                        <button
                          className="accordion-button d-flex justify-content-between align-items-center"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse${index}`}
                          aria-expanded="false"
                          aria-controls={`collapse${index}`}
                        >
                          {item.question}
                          <i className="fas fa-chevron-down ms-2 small"></i>
                        </button>
                      </h3>
                      <div
                        id={`collapse${index}`}
                        className="accordion-collapse collapse"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body">{item.answer}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Contact Form */}
              <section className="mb-5">
                <div className="card border-0 shadow">
                  <div className="card-body p-4">
                    <h2 className="h3 mb-4 text-primary d-flex align-items-center">
                      <i className="fas fa-paper-plane me-3"></i>Send us a
                      Message
                    </h2>
                    <form>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <label htmlFor="name" className="form-label">
                            Full Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="John Doe"
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="email" className="form-label">
                            Email Address
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="john@example.com"
                          />
                        </div>
                        <div className="col-12">
                          <label htmlFor="message" className="form-label">
                            Message
                          </label>
                          <textarea
                            className="form-control"
                            id="message"
                            rows="4"
                            placeholder="Example: I need help with..."
                          ></textarea>
                        </div>
                        <div className="col-12">
                          <button
                            type="submit"
                            className="btn btn-primary px-4 py-2"
                          >
                            Send Message{" "}
                            <i className="fas fa-paper-plane ms-2"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </section>
            </div>

            {/* Tutorials Sidebar */}
            <div className="col-lg-4">
              <div className="sticky-top" style={{ top: "1rem" }}>
                <section className="mb-5">
                  <h2 className="h3 mb-4 text-primary d-flex align-items-center">
                    <i className="fas fa-graduation-cap me-3"></i>Guides &
                    Tutorials
                  </h2>
                  <div className="list-group">
                    {tutorialData.map((tutorial, index) => (
                      <a
                        key={index}
                        href="#"
                        className="list-group-item list-group-item-action border-0 shadow-sm mb-2"
                      >
                        <div className="d-flex align-items-center">
                          <i className="fas fa-file-alt text-primary me-3"></i>
                          <div>
                            <h5 className="mb-1">{tutorial.title}</h5>
                            <p className="small text-muted mb-0">
                              {tutorial.description}
                            </p>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </section>

                {/* Documentation Quick Links */}
                <section className="mb-5">
                  <h2 className="h3 mb-4 text-primary d-flex align-items-center">
                    <i className="fas fa-book me-3"></i>Documentation
                  </h2>
                  <div className="row g-2">
                    <div className="col-6">
                      <a
                        href="#"
                        className="card h-100 text-decoration-none border-0 shadow-sm"
                      >
                        <div className="card-body text-center p-3">
                          <i className="fas fa-file-pdf fa-2x text-danger mb-2"></i>
                          <h6 className="mb-0">User Manual</h6>
                        </div>
                      </a>
                    </div>
                    <div className="col-6">
                      <a
                        href="#"
                        className="card h-100 text-decoration-none border-0 shadow-sm"
                      >
                        <div className="card-body text-center p-3">
                          <i className="fas fa-video fa-2x text-primary mb-2"></i>
                          <h6 className="mb-0">Video Guides</h6>
                        </div>
                      </a>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </main>
  );
};

export default HelpSupportPage;
