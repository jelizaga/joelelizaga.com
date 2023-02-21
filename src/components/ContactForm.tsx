import { createEffect, createSignal } from "solid-js"

export default function ContactForm(props: any) {
  const [topic, setTopic] = createSignal("Work");
  // References ////////////////////////////////////////////////////////////////
  let fullName;
  let email;
  let workFieldset;
  let message;
  // Functions /////////////////////////////////////////////////////////////////
  // `invalidInput` - Invalid input message.
  // `changeTopic` - Changes the value of `topic` depending on radio selected.
  const changeTopic = (event) => {
    setTopic(event.target.value);
  }
  // Adjust form according to `topic`:
  createEffect(() => {
    if(topic() === "Work") {
      workFieldset.style.display = "block";
    }
    if(topic() === "Other") {
      workFieldset.style.display = "none";
    }
  })
  return (
    <form
      action="https://formsubmit.co/477da5cd69bd2fbe391ec1284252862a"
      method="POST"
      classList={
        {"work-selected": topic() === "Work"}
      }
    >
      <fieldset class="visitor-fieldset">
        <label for="full-name">Full Name</label>
        <input
          type="text"
          id="full-name"
          name="full-name"
          placeholder="John Doe"
          ref={fullName}
          minlength="4"
          required
        />
        <input
          type="hidden"
          name="_subject"
          value="Contact - joelelizaga.com"
        />
        <input
          type="hidden"
          name="_autoresponse"
          value="Thanks for your message. - Joel"
        />
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="name@example.com"
          ref={email}
          required
        />
      </fieldset>
      <fieldset class="topic-fieldset">
        <legend>Topic</legend>
        <input 
          type="radio"
          id="work" 
          name="topic" 
          value="Work" 
          onClick={changeTopic}
          checked
        ></input>
        <label for="work">Work</label>
        <input 
          type="radio" 
          id="other" 
          name="topic" 
          value="Other"
          onClick={changeTopic}
        ></input>
        <label for="other">Other</label>
      </fieldset>
      <fieldset ref={workFieldset} class="work-fieldset">
        <label for="organization">Organization</label>
        <input
          type="text"
          id="organization"
          name="organization"
          placeholder="ACME, Inc."
          minlength="4"
          required
        />
        <label for="project">Project</label>
        <label class="select">
          <select id="project" name="project">
            <option>Web Development</option>
            <option>Software Development</option>
            <option>UX Design</option>
          </select>
        </label>
      </fieldset>
      <fieldset class="message-fieldset">
        <label for="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Your message here..."
          ref={message}
          minlength="80"
          maxlength="2000"
          required
        ></textarea>
      </fieldset>
      <fieldset class="button-set">
        {props.closePopup &&
          <button class="popup" onClick={props.closePopup}>
            Cancel
          </button>
        }
        <button class="primary popup" type="submit">
          <i class="fa-solid fa-paper-plane"></i> Submit
        </button>
      </fieldset>
    </form>
  )
}