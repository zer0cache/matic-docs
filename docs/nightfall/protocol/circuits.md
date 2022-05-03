# Circuits
Circuits are used to define the rules a transaction must follow to be considered correct. There are broadly four types of circuits, one for each type of transaction:

- [Deposit](#deposit)
- [Single Transfer](#single-transfer)
- [Double Transfer](#double-transfer)
- [Withdraw](#withdraw)

Every transaction includes a ZK Proof following the constraints specified in these circuits. Users construct this proof using a Wallet,
or through a Client server.
A proof is generated only if all the following cases are true:

- New commitment is valid
- Old commitment is valid and owned by the sender
- Nullifier is valid
- Merkle Tree path/root is valid
- Ciphertext containing commitment is valid

# Deposit
Deposits convert publicly visible ERC tokens into a token commitment that holds the same value or token id as that of the original token,
and the Nightfall public key of the intended commitment owner. A commitment is a cryptographic primitive that binds the value held within
while also hiding it. Confidentiality of value and recipient is attained in this manner.

A Deposit ZK Proof proves that the prover has created a valid commitment $Z_A$ with a public key $pk_A$. As public inputs it contains
 the commitment $Z_A$,
the value/tokenId ɑ and the ERC token Address @.
As secret inputs it contains the public key $pk_A$ and  salt σ such that $Z_A$ == H(@ | ɑ | $pk_A$ | σ)

Leaked information of a deposit transaction include the address that minted the new commitment and the address and value of the ERC token being used.

# Transfer
Transfer enables the transfer of a token commitment between two parties by nullifying the previous commitment and creating a new one.  Currently, two types of transfers are possible:

## Single Transfer
Allows the transfer of a single commitment between two parties for the exact value of an existing commitment.
Commitments are discrete units that hold some token value. They can’t be aggregated together and presented as a total balance.
When doing a Single Transfer from address A to address B of a given token, address A must own a previous commitment for the same value and token. 

## Double Transfer
Allows combining two existing commitments to transfer a new commitment of value between 0 and the sum of the input commitments. 
If there is some unspent amount, a new commitment will be created with the excess amount and owned by the owner of the input commitments.
The original input commitments are nullified.

In either case, the information leaked will be that an Ethereum address has nullified one (Single Transfer) or two (Double Transfers) commitments
amongst the commitment pool owned by the transmitter, and that one (Single Transfer) or two (Double Transfers) new commitments have been created.
Information on the new owner, which commitments were spent or the amount transferred remains private.

A Transfer ZK Proof proves that the prover has nullified an old commitment which existed in the Merkle Tree, created a new commitment 
and encrypted its information for the recipient. As public inputs it uses the new commitment $Z_B$, the ERC token Address @,
the Merkle Tree root MTR, the new nullifier ν and a ciphertext with the commitment information.
As private data it uses the sender secret key $nsk_A$, recipient public key $pk_B$, value/id of token ɑ, salt $\sigma_B$, old commitment $Z_A$,
path of commitment in Merkle Tree and plaintext such that:

- $Z_B$ == H(@ | ɑ | $pk_B$  | $\sigma_B$)
- $Z_A$ == H(@ | ɑ | H($nsk_A$) | $\sigma_A$ )
- ν == H($nsk_A$ | $Z_A$)
- MTR == pathCalculation( $Z_A$ | MT Path)
- Ciphertext == encrypt(plaintext, $pk_B$), where plaintext includes @, ɑ and $\sigma_A$.


# Withdraw
Withdraw is the operation of nullifying existing Nightfall commitments and converting them into publicly visible ERC tokens with the same value 
and token Id as the burnt commitment.  Withdraw is the opposite operation to Deposit. Withdrawals require a `COOLING OFF` period of one week to finalize.

A Withdraw ZK Proof proves that the prover has nullified the old commitment which existed in the MerkleTree.  As public data the prover uses 
value/token id `ɑ`, ERC token address `@`, Merkle Tree root `MTR` and nullifier `ν`.
As private inputs, prover uses sender secret key `$nsk_A$`, salt `σ`, old commitment `$Z_A$` and Merkle Tree path such that:

- $Z_A$ = H(@ | ɑ | H(nskA) | σ )
- ν = H($nsk_A$ | $Z_A$)
- MTR = pathCalculation( $Z_A$ | MT Path)

Information leaked during a withdrawal includes the address of the address that withdrew the commitment and the value/token Id and address of
the token withdrawn.

# Current Transaction Limitations
In the first version of Polygon Nightfall, there exist some limitations, including:
- Withdraw value must exactly match the amount in one of the commitments owned
- If a commitment of a given amount is not found, then a Double Transfer is made.  Double Transfers can only combine two existing commitments. If the amount to transfer exceeds any combination of two existing commitments, the transfer will not be carried out.


