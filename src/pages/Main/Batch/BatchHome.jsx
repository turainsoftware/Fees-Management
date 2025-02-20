import React, { useEffect, useState } from "react";
import { data } from "jquery";
import { useAuth } from "../../../contexts/AuthContext";
import { BatchCard, BatchDetails, SecondaryNavbar } from "../../../components";
import { BatchCardShimmer } from "../../../Shimmers";
import { batchService } from "../../../services/BatchService";

const BatchHome = () => {
  const { authToken } = useAuth();

  //State Values
  const [batches, setBatches] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchBatchData = async () => {
    setIsLoading(true);
    try {
      const data = await batchService.allSpecificBatchDetails({ authToken: authToken });
      const sortedData = data.sort((a, b) => {
        return a.startTime.localeCompare(b.startTime);
      });
      setBatches(sortedData);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBatchData();
  }, []);

  return (
    <main className="wrapper home-wrapper">
      <SecondaryNavbar
        title={"Batch List"}
        isCreateBtnActive={true}
        createBtnPath={"create-batch"}
        crateBtnText={"Create Batch"}
      />
      
      {/* {isLoading ? <ItemListShimmer /> : <ItemList data={batches} />} */}

      <div className="d-flex mt-3 flex-column align-items-center min-vh-100">
        <div className="container pb-100">
          <div className="row">
            {isLoading
              ? [1, 2, 3, 4, 5, 6].map((item, index) => (
                  <div
                    key={index}
                    className="col-12 col-md-6 col-lg-4 d-flex justify-content-center g-4"
                  >
                    <BatchCardShimmer />
                  </div>
                ))
              : batches.map((data, index) => (
                  <div
                    key={index}
                    className="col-12 col-md-6 col-lg-4 d-flex justify-content-center"
                  >
                    <BatchCard data={data} />
                  </div>
                ))}
          </div>
        </div>
      </div>

    </main>
  );
};

export default BatchHome;
