function Table() {
  return (
    <section class="table">
      <div>
        <h1>Projects</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Details</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href="https://github.com/themason2011/CS189A-LogMeIn-Team-">
                  Capstone Project: CueMeIn
                </a>
              </td>
              <td>
                Partnered with LogMeIn and a nonprofit called Special Olympics
                to built a video communication platform that targets users with
                mental disabilities. Utilized React JS library ,and constructed
                the video communication system using Twilio API. Analyze
                emotional state of dominant speaker in a video call and displays
                speaker’s current emotion using IBM Watson and Microsoft Vision
                API.
              </td>
              <td>2020-2021</td>
            </tr>
            <tr>
              <td>
                <a href="https://github.com/jjimenez98/Blockchain-Communication-Model">
                  Bank Model
                </a>
              </td>
              <td>
                Build a peer-to-peer money exchange application on top of a
                private blockchain to create a trusted but fault-tolerant
                decentralized system with the Paxos decentralized protocol. Each
                node had the ability to send money transactions between each one
                another using TCP/IP protocol. Data Structures: Linked List to
                represent the blockchain and Queue to store all the transactions
                requested by the user.
              </td>
              <td>2020</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Table;
