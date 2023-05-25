import { MdDelete } from "react-icons/md";
import { BsDownload } from "react-icons/bs";

const BricksContainer = ({ Bricks1data,deleteTransaction }) => {
  return (
    <>
      <div className="w-[100%] px-3 overflow-scroll">
        <div>
          <input
            className=" mt-4 w-[100%] py-2 rounded-md placeholder:text-black  placeholder:px-2  bg-gray-400 focus:px-3"
            type="text"
            placeholder="search your data"
          />
        </div>
        <div>
          {Bricks1data.map((items, index) => {
            const {
              title,
              purchaseAmount,
              purchaseDate,
              AdditionalInfo,
              Delivery,
              Category,
              FinalAmount,
            } = items;
            const totalAmount = FinalAmount + Number(Delivery) - Number(purchaseAmount)
            return (
              <>
                <div
                  key={index}
                  className="bg-gray-200 cursor-pointer mt-5 rounded-lg px-3 py-2 flex justify-between items-center hover:bg-gray-500 transition-all ease-in-out duration-300 hover:text-white"
                >
                  <div>
                    <div>Client : {title}</div>
                    <div>{AdditionalInfo}</div>
                  </div>
                  <div>{purchaseDate}</div>
                  <div className="flex items-center">
                    <div className="mr-5">Delivery : {Delivery}</div>
                    <div className="mr-5">Adv-Amt : {purchaseAmount}</div>
                    <div className="mr-5">{Category} No.</div>
                    <div className="mr-5">
                      Paid-Amt :{" "}
                      {Math.abs(totalAmount)}
                    </div>
                    <MdDelete onClick={() => deleteTransaction(index)} className="text-3xl cursor-pointer" />
                    <BsDownload className="text-3xl ml-3 cursor-pointer" />
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BricksContainer;
