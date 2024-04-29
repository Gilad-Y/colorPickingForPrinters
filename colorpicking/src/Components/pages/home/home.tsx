import { useEffect, useState } from "react";
import "./home.css";
import store from "../../../redux/store";
import { loadFilament } from "../../../redux/filamentsReducer";
import MainModal from "../../mainModal/mainModal";

function Home(): JSX.Element {
  const [noFilamentsModal, setFilamentModal] = useState<boolean>(false);
  useEffect(() => {
    const filaments = localStorage.getItem("filaments");
    if (filaments) {
      store.dispatch(loadFilament(JSON.parse(filaments)));
    } else {
      toggleFilamentModal();
    }
  }, []);
  const toggleFilamentModal = () => {
    setFilamentModal(!noFilamentsModal);
  };
  return (
    <div className="home">
      <MainModal
        open={noFilamentsModal}
        onClose={toggleFilamentModal}
        type={"noFilaments"}
      />
    </div>
  );
}

export default Home;
