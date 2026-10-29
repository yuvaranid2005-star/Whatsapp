import logo from './logo.svg';
import './App.css';

function App() {


  return (
    <div className="App">
      <div className="home">

        
        <div className="side">

          <div className="side-bar1">
            <i className="material-icons">message</i>
          </div>

          <div className="side-bar2">
            <i className="material-icons">phone</i>
          </div>

          <div className="side-bar3">
            <i className="material-icons">radio_button_checked</i>
          </div>

          <div className="side-bar4">
            <i className="material-icons">chat_bubble_outline</i>
          </div>

          <div className="side-bar5">
            <i className="material-icons">groups</i>
          </div>

          <div className="side-bar6">
            <i className="material-icons">auto_awesome</i>
          </div>

          <div className="side-bar7">
            <i className="material-icons">image</i>
          </div>

          <div className="side-bar8">
            <i className="material-icons">account_circle</i>
          </div>

        </div>


        <div className="chat-list">

          <div className="chat-header">

            <div className="chat-title">WhatsApp</div>

            <div className="menu">
              <i className="material-icons">more_vert</i>
            </div>

            <div className="new-chat">
              <i className="material-icons">add</i>
            </div>

          </div>


          <div className="search">

            <div className="search-inside">
              <i className="material-icons">search</i>

              <input
                type="text"
                id="searchInput"
                placeholder="Search or start a new chat"
              />
            </div>

          </div>

   
          <div className="search-up">
            <p>All</p>
            <p>Unread</p>
            <p>Favourites</p>
            <p>Groups</p>
            <i className="material-icons">add</i>
          </div>

        <p
  id="noResults"
  style={{ display: "none", textAlign: "center" }}
>
  No contacts found
</p>

          <div className="chat-top" data-chat="bca">

            <div className="chat1-img">
              <i className="material-icons">groups</i>
            </div>

            <div className="chat-content">
              <b>BCA 3B</b>
              <p>Sanjana: Ellaru mudichitu vaanga</p>
            </div>

            <div className="time">6:39 PM</div>

          </div>


          <div className="chat1" data-chat="raji">

            <div className="chat1-img">
              <i className="material-icons">person</i>
            </div>

            <div className="chat-content">
              <b>Raji</b>
              <p>mm</p>
            </div>

            <div className="time">5:28 PM</div>

          </div>

         
          <div className="chat1" data-chat="shalini">

            <div className="chat2-img">
              <img src="image/girl3.png" alt="Shalini"/>
            </div>

            <div className="chat-content">
              <b>Shalini</b>
              <p>oii</p>
            </div>

            <div className="time">4:50 PM</div>

          </div>

         
          <div className="chat1" data-chat="pavi">

            <div className="chat2-img">
              <img src="image/girl2.avif" alt="Pavi"/>
            </div>

            <div className="chat-content">
              <b>Pavi</b>
              <p>Enna</p>
            </div>

            <div className="time">4:20 PM</div>

          </div>

      
          <div className="chat1" data-chat="amma">

            <div className="chat2-img">
              <img src="image/image3.jpeg" alt="Amma"/>
            </div>

            <div className="chat-content">
              <b>Amma</b>
              <p>seri</p>
            </div>

            <div className="time">3:00 PM</div>

          </div>

         
          <div className="chat1" data-chat="keerthi">

            <div className="chat2-img">
              <img src="image/girl3.png" alt="Keerthi"/>
            </div>

            <div className="chat-content">
              <b>Keerthi</b>
              <p>bye</p>
            </div>

            <div className="time">6:50 PM</div>

          </div>

        </div>

       
        <div className="chat-area">

         
          <div className="chat-area-header">

            <div className="chat2-img" id="profileImage">
              <img src="image/image3.jpeg" alt="Amma"/>
            </div>

            <div className="profile">Amma</div>

            <div className="top-icon">

              <div className="top-icon1">
                <i className="material-icons">videocam</i>
              </div>

              <div className="top-icon2">
                <i className="material-icons">phone</i>
              </div>

              <div className="top-icon3">
                <i className="material-icons">search</i>
              </div>

              <div className="top-icon4">
                <i className="material-icons">more_vert</i>
              </div>

            </div>

          </div>

          
          <div className="conversation" data-contact="amma">

            <div className="message-received">
              <h6>Hi</h6>
              <p>10:30 AM</p>
            </div>

            <div className="message-sent">
              <h6>Hi Amma</h6>
              <p>10:31 AM</p>
            </div>

            <div className="message-received">
              <h6>Enna Pandra</h6>
              <p>10:32 AM</p>
            </div>

            <div className="message-sent">
              <h6>Summa</h6>
              <p>10:33 AM</p>
            </div>

            <div className="message-received">
              <h6>Saptiya</h6>
              <p>10:34 AM</p>
            </div>

            <div className="message-sent">
              <h6>mm</h6>
              <p>10:35 AM</p>
            </div>

            <div className="message-received">
              <h6>bye</h6>
              <p>10:36 AM</p>
            </div>

          </div>

          
          <div className="conversation" data-contact="raji" hidden>

            <div className="message-received">
              <h6>Hi</h6>
              <p>5:25 PM</p>
            </div>

            <div className="message-sent">
              <h6>Enna Raji?</h6>
              <p>5:27 PM</p>
            </div>

            <div className="message-received">
              <h6>mm</h6>
              <p>5:28 PM</p>
            </div>

          </div>

         
          <div className="conversation" data-contact="shalini" hidden>

            <div className="message-received">
              <h6>oii</h6>
              <p>4:50 PM</p>
            </div>

            <div className="message-sent">
              <h6>Sollu</h6>
              <p>4:51 PM</p>
            </div>

          </div>

        
          <div className="conversation" data-contact="pavi" hidden>

            <div className="message-received">
              <h6>Enna</h6>
              <p>4:20 PM</p>
            </div>

            <div className="message-sent">
              <h6>Onnum illa</h6>
              <p>4:21 PM</p>
            </div>

          </div>

          
          <div className="conversation" data-contact="keerthi" hidden>

            <div className="message-received">
              <h6>Hi</h6>
              <p>6:45 PM</p>
            </div>

            <div className="message-sent">
              <h6>Sollu Keerthi</h6>
              <p>6:48 PM</p>
            </div>

            <div className="message-received">
              <h6>bye</h6>
              <p>6:50 PM</p>
            </div>

          </div>

        
          <div className="conversation" data-contact="bca" hidden>

            <div className="message-received">
              <h6>Ellaru mudichitu vaanga</h6>
              <p>6:39 PM</p>
            </div>

            <div className="message-sent">
              <h6>Seri</h6>
              <p>6:40 PM</p>
            </div>

          </div>

          
          <div className="message-box">

            <div className="message-input">

              <i className="material-icons">attach_file</i>

              <i className="material-icons">sentiment_satisfied</i>

              <input
                type="text"
                id="messageInput"
                placeholder="Type a message"
              />

            </div>

            <button id="sendBtn">
              <i className="material-icons">send</i>
            </button>

            <div className="mic-icon">
              <i className="material-icons voice">mic</i>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default App;