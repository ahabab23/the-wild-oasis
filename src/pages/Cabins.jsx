// import Heading from "../ui/Heading";
// import Row from "../ui/Row";

// import CabinTable from "../features/cabins/CabinTable";
// import CreateCabinForm from "../features/cabins/CreateCabinForm";
// import Button from "../ui/Button";
// import { useState } from "react";

// function Cabins() {
//   const [showForm, setShowForm] = useState(false);
//   return (
//     <>
//       <Row type="horizontal">
//         <Heading as="h1">All cabins</Heading>
//         <p>TEST</p>
//       </Row>
//       <Row>
//         <CabinTable />
//         <Button onClick={() => setShowForm((show) => !show)}>
//           Add new cabin
//         </Button>
//         {showForm && <CreateCabinForm />}
//       </Row>
//     </>
//   );
// }

// export default Cabins;
import CabinTable from "../features/cabins/CabinTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import AddCabin from "../features/cabins/AddCabin";
import CabinTableOperations from "../features/cabins/CabinTableOperations";

function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperations />
      </Row>

      <Row>
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  );
}

export default Cabins;
