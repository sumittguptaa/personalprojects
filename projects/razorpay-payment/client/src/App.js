import React,{useState}from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [name,setName] = useState("")
  const [email, setEmail] = useState("")
  const [price,setPrice]= useState(0)
  const [contact, setContact] = useState(0)
  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }
    const data = {
         amount : price
    }
    const result = await axios.post("http://localhost:5000/payment/orders",data);

    if (!result) {
      alert("Server error. Are you online?");
      return;
    }

    const { amount, id: order_id, currency } = result.data;

    const options = {
      key: "rzp_test_OI5rxzLeySvb26", // Enter the Key ID generated from the Dashboard
      amount: amount.toString(),
      currency: currency,
      name: "Unknown",
      description: "Payment to myself",
      image: "",
      order_id: order_id,
      handler: async function (response) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };

        const result = await axios.post("http://localhost:5000/payment/success", data);
        console.log(result)
        document.getElementById("app").innerHTML =`<h1>Your transaction has been completed.Status:${result.data.msg}</h1>`
        
      },
      prefill: {
        name: `${name}`,
        email: `${email}`,
        contact: `${contact}`,
      },
   
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <div id="app" className="App">
      <header className="App-header">
      <input type="text" value={name} onChange={(e)=> setName(e.target.value)} placeholder="Name" />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Amount" />
        <input type="number" value={contact} onChange={(e) => setContact(e.target.value)} placeholder="Mobile No." />
        <button className="App-link" onClick={displayRazorpay}>
          Pay ₹500
        </button>
      </header>
    </div>
  );
}

export default App;