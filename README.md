# Codefundoo-19

# BlockChain E-Vote

## This project aims to increase the trust that people can feel in EVMs

### This will be done in two ways

- Making it easier to verify that the votes were not tampered with.
- Making it easier to verify that the counting is genuine.

## There will be two separate data channels

- One will be a standard relational database of all valid voters, for fast querying.
- The other will be the the blockchain of all the cast votes, for immutability and verifiablity.

## The following steps will be taken to make this work

- The voters' crypto wallets will be linked to their voter ID by the EC.
- The voters will make a per-election secret key pass, which will be separate from the wallet key.
- When the voter goes to the EVM, the machine will first verify that they are a real voter.
- Next, their voter ID will be encrypted by the election key and will be used to verify that they haven't already voted.
- If everything goes smoothly, the voter will cast their vote and a new block will be made.
- This block will have the serial number of the EVM, the encrypted voter ID and the vote.
- Before adding to the blockchain, the voter will be asked to confirm that they voted.
- The voter can verify that their vote went to the correct party in the blockchain.
- Voters can verify that their vote is casted to the right party and is not being tampered with, anytime after voting using their secret key pass.
- Anyone can count the votes in the blockchain to make sure the counting is genuine.
- Counting will be done simultaneously to save time and power.

## The steps that the voters will need to take

- They must register for a crypto wallet.
- They must register their wallet with their voter ID.
- They must take the necessary steps to keep their keys separate and secret.

## The steps that the EC will need to take

- They must make sure that only the voter's wallet is linked to their ID.
- They must make sure that the people know not to use their wallet keys as election keys, in case of a breach.

-----------------------------------------------------------------------------------------------------------------------------------

- Basic Structure of My Block-chain solution:

my solution would contain a web interface for people to register by either creating their own node or using a pre-existing node. The nodes will be of two types 

1. Admin nodes maintained by Election Commission to administer the events of voting using the block-chain and distribute vote tokens.
2. User nodes maintained by users to register and get vote tokens and use them to cast their vote.

On the same web portal the user can spend its vote token once the voting begins to vote for suitable canditate and get other useful voting stats.

- Working of the System:

Each user node has computing power of its own computer /mobile device which can be used to commit a transaction.
Transaction by a user can be of two types
1. Registering of a voter.
2. Spending vote token.

Registering a voter requires voter to enter its aadhar number which can be verified either by fingerprint or OTP on the registered mobile number. After this the voter will enter its secret which would then be hashed with user details to give each voter a unique id which can be assumed to be a voter ID. Now this acts like a trapdoor function where user’s secret and aadhar info can be used to get the voter ID but not vice-versa. 
A user node can have multiple vote tokens for different registration. So a person without a compute power can register using any nearby trusted user node.

After registration a user will be allotted a vote token. This vote would contain the unique ID generated for the user, its own Unique ID, Date of Creation, Party Voted, Constituency of User.

Casting vote transaction requires that your unique ID generated from aadhar and secret should have been already registered. Thus a user can vote by spending his/her vote token using my web portal.

The admin node will take care of putting special transactions which would be used as temporal checkpoints for 
1. Adding new Mining nodes
2. Start/End of voter’s registration
3. Start/End of the voting.
 
My web server would be running various functions to count total registered users, number of votes to each constituency party wise and other important details and would be triggered by each new block of vote tokens mined and updating the web portal with the information.

Re-registering for voting needs to be done for every voting season. Admin Node will insert a new checkpoint before which all the registered participants become invalid. This is a way to prevent *Zombie voters*( voters who have died or would not vote) in my voting list.

- Features that the system provides:
1. Easy Registration of voters with proper verification.
2. Voters can cast their vote from any Location using web (REST) interface.
3. Votes stats in real time.
4. Removal of Zombie voters through re-registration.
5. Block-chain implicit capability to avoid any manipulation.