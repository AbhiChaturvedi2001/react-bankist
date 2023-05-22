import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

const Transaction = ({
  clietName,
  setClientName,
  setadvanceAmount,
  advanceAmount,
  date,
  setDate,
  extraInfo,
  setExtraInfo,
  Deliverycharges,
  setDeliverycharges,
  TotalAmount,
  setTotalAmount,
  bricksNumber,
  setBricksNumber,
  addingTransation,
}) => {
  const BricksNumber = [
    {
      value: "1",
      label: "Brick-1",
    },
    {
      value: "2",
      label: "Brick-2",
    },
    {
      value: "3",
      label: "Brick-3",
    },
    {
      value: "4",
      label: "Brick-4",
    },
    {
      value: "5",
      label: "Brick-5",
    },
  ];

  return (
    <>
      <form action="" className="overflow-scroll w-[100%]">
        <div className="px-3 py-3">
          <h1 className="font-bold text-xl uppercase tracking-widest">
            Adding Transaction
          </h1>
          <div className=" mt-4">
            <TextField
              className="w-[100%]"
              id="outlined-basic"
              label="Customer Name"
              variant="outlined"
              required
              value={clietName}
              onChange={(e) => setClientName(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <TextField
              required
              className="w-[100%]"
              type="number"
              id="outlined-basic"
              label="Advanced Amount"
              variant="outlined"
              value={advanceAmount}
              onChange={(e) => setadvanceAmount(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <TextField
              required
              className="w-[100%]"
              type="date"
              id="outlined-basic"
              variant="outlined"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <TextField
              required
              className="block w-[100%]"
              id="outlined-basic"
              label="Extra-Info"
              variant="outlined"
              value={extraInfo}
              onChange={(e) => setExtraInfo(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <TextField
              required
              className="block w-[100%]"
              type="number"
              id="outlined-basic"
              label="Delivery charges"
              variant="outlined"
              value={Deliverycharges}
              onChange={(e) => setDeliverycharges(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <TextField
              required
              className="block w-[100%]"
              id="outlined-basic"
              label="Total Amount"
              variant="outlined"
              value={TotalAmount}
              onChange={(e) => setTotalAmount(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <TextField
              value={bricksNumber}
              onChange={(e) => setBricksNumber(e.target.value)}
              className="w-[100%]"
              id="outlined-select-currency"
              select
              label="Bricks"
              defaultValue="Brick-1"
              helperText="select kro kis number ki ite hai"
            >
              {BricksNumber.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div className="mt-3">
            <Button onClick={addingTransation} variant="contained">
              Add Transaction
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Transaction;
