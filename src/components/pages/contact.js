import React from 'react';
import anime from 'animejs';
import '../styles/pages/contact.scss'

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      status: '',
    };
  };

  // Handles user input on Contact Form
  handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset()
        this.setState({ status: "SUCCESS"});
      }
      else {
        this.setState({ status: "ERROR"});
      }
    };
    const tl = anime.timeline(),
      submitBtn = document.querySelector('.submit-btn'),
      submitText = document.querySelector('.submit-text'),
      check = `<i class="fa fa-check"></i>`,
      error = `<i class="fa fa-times"></i>`;

    xhr.send(data);

    //Animate submit button to updated submission status
    tl.add({
      targets: submitText,
      opacity: [1, 0],
      duration: 300,
      delay: 1000,
    })
    .add({
      targets: submitBtn,
      width: '40px',
      begin: () => {this.state.status === "SUCCESS" ? submitText.innerHTML = check : submitText.innerHTML = error}
    })
    .add({
      targets: submitText,
      opacity: [0, 1],
      duration: 1000
    }, '-=600')
  }
  
  render() {
    return (
      <section id="contact" className="anchor">
        <header className="contact-header">
          <h2>What's Next?</h2>
          <p>My inbox is always open to new adventures. All questions, greetings, and stand-up jokes are welcome.</p>
        </header>
        <div className="contact-info">
          <h3>Contact Information</h3>
          <ul>
            <li>(631) 624-3503</li>
            <li>samanthaealy66@gmail.com</li>
          </ul>
        </div>
        <div className="social-media">
          <ul className="social-links">
            <li><a href="https://codepen.io/samanthaealy" target="_blank" rel="noreferrer"><i className="fa fa-codepen"></i></a></li>
            <li><a href="https://www.linkedin.com/in/samanthaealy/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a></li>
            <li><a href="https://github.com/samanthaealy" target="_blank" rel="noreferrer"><i className="fa fa-github"></i></a></li>
          </ul>
        </div>
        <form className="contact-form" onSubmit={this.handleSubmit} action="https://formspree.io/f/xbjpkdgp" method="POST">
          <div className="form-group">
            <input required type="text" className="form-control" name="name"></input>
            <label htmlFor="name">Name</label>
          </div>
          <div className="form-group">
            <input required type="email" className="form-control" aria-describedby="emailHelp" name="email"></input>
            <label htmlFor="email">Email Address</label>
          </div>
          <div className="form-group">
            <textarea required className="form-control" name="message"></textarea>
            <label htmlFor="message">Message</label>
          </div>
          <button className="submit-btn">
            <div className="submit-text">Submit</div>
          </button>
        </form>
      </section>
    );
  }
}

export default Contact;
