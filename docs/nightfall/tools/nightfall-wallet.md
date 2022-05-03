# Intro
The Polygon Nightfall wallet 
## Generating a Web Component
*We decided to use a web component standard because this way would be better to do the integration between: Polygon Wallet, developed in Vue.js, and Polygon Nightfall Wallet, developed in React.js.*

**How we are doing this?**

Instead of create a JSX element and put it within a html root div. We're creating a class and extending a HTMLElement interface that allow us to create a Web Component.

You can learn more about this standard here: *https://developer.mozilla.org/en-US/docs/Web/Web_Components*

## Integration with Polygon Wallet
![image](https://user-images.githubusercontent.com/73957838/164309540-f6067154-2013-424a-ba86-f025cf1f1cdd.png)



## 1. User amount
![](https://i.imgur.com/hxEMlQv.png)
- **Where does this value comes?**
    - This comes from the sum of each token in tokenList. The sum of each token balance comes from getWalletBalance.
- **In which file is the code responsible for this functionality?**
    - `/Wallet/` contains the database call that calculates the balance of each token.
    - `/Assets/` contains the code that adds up all the token balance.
- **When should we calculate this?**
    - I see two options:
        - (Current) We can calculate in useEffect in the assets component or;
        - We can calculate it every time that changes using the context api.

## 2. Receive and send buttons
![](https://i.imgur.com/UDQeUsa.png)
- **What the browser need to show when user click on receive?**
    - A modal that shows the user's compressed pkd and a QR representation.
- **What the browser need to show when user click on send?**
    - The send modal.
- **There are some difference between this button and the send button in the assets?**
    - ...
- **In which file is the code responsible for this functionality?**
    - TBD

## 3. Balances on Nightfall
![](https://i.imgur.com/ehpK1Pz.png)
- **Where does this values comes?**
    - The `getWalletBalance()` as part of rendering this page.
- **In which file is the code responsible for this functionality?**
    - `/Wallet/` does the calculation, rendered by `/TokenItem/`
- **How and where will change each balance?**
    - The balance will change the local indexedDB is updated.   
    - Currently we are needing to refresh the page to update the values. We should to figure out how to do it. 

## 4. Deposit
![](https://i.imgur.com/nk8FvqL.png)
- **What the browser need to show when user click on deposit?**
    - Goes to bridge page with deposit option choosed in the togle button.
    ![](https://i.imgur.com/aDQSqaz.png)

- **What is the complete flow for deposit?**
    - Image from https://whimsical.com/polygonwalletflow-Em1JwN4CBQ8DXoTPeGSqJ:
    ![](https://i.imgur.com/gWNOn93.png)
    - ***We need to create the two first modals***

- **In which file is the code responsible for this functionality?**
    - Write here...
- **How will we pass the token choosed like a parameter for the bridge component?**
    - Write here...

## 5. Withdraw
![](https://i.imgur.com/HK7t8rN.png)
- **What the browser need to show when user click on withdraw?**
    - Write here...
- **What is the complete flow for withdraw?**
    - Write here...
- **In which file is the code responsible for this functionality?**
    - Write here...
- **How will we pass the token choosed like a parameter for the bridge component?**
    - Write here...

## 6. Send
![](https://i.imgur.com/17RI9YJ.png)
- **What the browser need to show when user click on send?**
    - The send modal (this already exists but needs a visual update)
    - The send modal will receive the name of the token choosed and might filter. This way we can get the address of the token.
- State
    - We should to storage the address using useState in the send component. ***(This component will be created)***
- **What is the complete flow for send?**
![](https://i.imgur.com/Fa0palL.png)
- **In which file is the code responsible for this functionality?**
    - `/components/TokenItem`

## 7. Bridge component
- **Which are the states necessary in the Bridge component?**
    - **Context api**: `zkpKeys` & `shieldContractAddress`
    - **tokenAddress**: Should get it from the dropdown (see Bridge Page tokens modal).
    - **tokenBalance**: Should be loaded using `getWalletBalance()`;

## 8. Bridge Page tokens modal
![](https://i.imgur.com/ojFkKBL.png)

![](https://i.imgur.com/Ev3hGvV.png)
*Image taken from the Polygon Wallet website*

- **Where does nigthfall list of token comes?**
    - A JSON file, we will use a hard-coded one for now, but in the future we will make a request to a polygon url for this info.
- **In which file is the code responsible for this functionality?**
    - TBD

## 9. Brige token balance
![](https://i.imgur.com/gYd4Ds9.png)

- **Where does the token balance comes? We need to show this.**
    - The balance comes from `getWalletBalance()`

## 10. Bridge Max Button
![](https://i.imgur.com/i26GUFJ.png)

- **Leave for now.**

## 11. Transactions Page
![](https://i.imgur.com/RCsHy8u.jpg)
1. **Click on Transaction Row**
    - Show "Information Modal" about transaction.
    - What informations will be necessary in this modal???
2. **Transaction value**
    - Based on current exchange rate.
3. **Etherscan arrow**
    - Need an icon, redirects to L1 transaction on Etherscan (if available) 
4. **Transaction Row for Withdraw**
    - Needs an "Instant Withdrawal" + "Finalise Withdrawal" button. Example below.
![](https://i.imgur.com/FPa0XiH.png)
5. **Value Of Transfer Transaction**
    - Needs to come from the COMMITMENTS_COLLECTION
6. **Timing of Transaction**
    - Decide whether to update this time when the transaction is actually confirmed on L1 or when the transaction is made on L2.
7. **Transaction Filter Tab**
    - Split tabs by transaction type

