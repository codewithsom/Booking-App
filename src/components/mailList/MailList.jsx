import "./mailList.css"

export const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save time ⌚, save money 🤑!</h1>
      <span className="mailDesc">Sign up and we'll send the best deals to you</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Please enter your E-mail here" />
        <button>Subscribe</button>
      </div>
    </div>  )
}
