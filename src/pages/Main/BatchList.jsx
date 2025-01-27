import React, { useEffect, useState } from "react";
import SecondaryNavbar from "../../components/Navbar/SecondaryNavbar";
import { ItemList } from "../../components";
import { useAuth } from "../../contexts/AuthContext";
import { batchService } from "../../services/BatchService";
import ItemListShimmer from "../../Shimmers/ItemListShimmer";

const BatchList = () => {
  const { authToken } = useAuth();

  //State Values
  const [batches, setBatches] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchBatchData = async () => {
    setIsLoading(true);
    try {
      const data = await batchService.getAllBatches({ authToken: authToken });
      setBatches(data);
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
        createBtnPath={"/create-batch"}
        crateBtnText={"Create Batch"}
      />
      {isLoading ? <ItemListShimmer /> : <ItemList data={batches} />}
    </main>
  );
};

export default BatchList;
