import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BricksContainer from "./component/BricksContainer";
import Header from "./component/Header";
import Home from "./component/Home";
import Transaction from "./component/Transaction";

const App = () => {
  const [clietName, setClientName] = useState("");
  const [advanceAmount, setadvanceAmount] = useState();
  const [date, setDate] = useState();
  const [extraInfo, setExtraInfo] = useState("");
  const [Deliverycharges, setDeliverycharges] = useState();
  const [TotalAmount, setTotalAmount] = useState();
  const [bricksNumber, setBricksNumber] = useState();

  // bricks data
  const [Bricks1data, setBricks1Data] = useState([]);

  const addingTransation = () => {
    let calcAmount = Number(eval(TotalAmount));
    if (bricksNumber == 1) {
      setBricks1Data([
        ...Bricks1data,
        {
          title: clietName,
          purchaseAmount: advanceAmount,
          purchaseDate: date,
          AdditionalInfo: extraInfo,
          Delivery: Deliverycharges,
          FinalAmount: calcAmount,
          Category: bricksNumber,
        },
      ]);
      alert("Transaction successfull Added ");
      setClientName("");
      setadvanceAmount("");
      setDate("");
      setExtraInfo("");
      setDeliverycharges("");
      setTotalAmount("");
      setBricksNumber("");
    } else if (bricksNumber == 2) {
      setBricks1Data([
        ...Bricks1data,
        {
          title: clietName,
          purchaseAmount: advanceAmount,
          purchaseDate: date,
          AdditionalInfo: extraInfo,
          Delivery: Deliverycharges,
          FinalAmount: calcAmount,
          Category: bricksNumber,
        },
      ]);
      alert("Transaction successfull Added ");
      setClientName("");
      setadvanceAmount("");
      setDate("");
      setExtraInfo("");
      setDeliverycharges("");
      setTotalAmount("");
      setBricksNumber("");
    } else if (bricksNumber == 3) {
      setBricks1Data([
        ...Bricks1data,
        {
          title: clietName,
          purchaseAmount: advanceAmount,
          purchaseDate: date,
          AdditionalInfo: extraInfo,
          Delivery: Deliverycharges,
          FinalAmount: calcAmount,
          Category: bricksNumber,
        },
      ]);
      alert("Transaction successfull Added ");
      setClientName("");
      setadvanceAmount("");
      setDate("");
      setExtraInfo("");
      setDeliverycharges("");
      setTotalAmount("");
      setBricksNumber("");
    } else if (bricksNumber == 4) {
      setBricks1Data([
        ...Bricks1data,
        {
          title: clietName,
          purchaseAmount: advanceAmount,
          purchaseDate: date,
          AdditionalInfo: extraInfo,
          Delivery: Deliverycharges,
          FinalAmount: calcAmount,
          Category: bricksNumber,
        },
      ]);
      alert("Transaction successfull Added ");
      setClientName("");
      setadvanceAmount("");
      setDate("");
      setExtraInfo("");
      setDeliverycharges("");
      setTotalAmount("");
      setBricksNumber("");
    } else if (bricksNumber == 5) {
      setBricks1Data([
        ...Bricks1data,
        {
          title: clietName,
          purchaseAmount: advanceAmount,
          purchaseDate: date,
          AdditionalInfo: extraInfo,
          Delivery: Deliverycharges,
          FinalAmount: calcAmount,
          Category: bricksNumber,
        },
      ]);
      alert("Transaction successfull Added ");
      setClientName("");
      setadvanceAmount("");
      setDate("");
      setExtraInfo("");
      setDeliverycharges("");
      setTotalAmount("");
      setBricksNumber("");
    }
  };

  const deleteTransaction  = (index) => {
    const filterArr = Bricks1data.filter((val, i) => {
      return i !== index;
    })
    setBricks1Data(filterArr);
  }

  return (
    <>
      <div className="flex h-[90vh] bg-white w-[70rem]">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/transaction"
              element={
                <Transaction
                  clietName={clietName}
                  setClientName={setClientName}
                  advanceAmount={advanceAmount}
                  setadvanceAmount={setadvanceAmount}
                  date={date}
                  setDate={setDate}
                  extraInfo={extraInfo}
                  setExtraInfo={setExtraInfo}
                  Deliverycharges={Deliverycharges}
                  setDeliverycharges={setDeliverycharges}
                  TotalAmount={TotalAmount}
                  setTotalAmount={setTotalAmount}
                  bricksNumber={bricksNumber}
                  setBricksNumber={setBricksNumber}
                  addingTransation={addingTransation}
                />
              }
            />
            <Route
              path="/brickData"
              element={<BricksContainer Bricks1data={Bricks1data} deleteTransaction={deleteTransaction} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
