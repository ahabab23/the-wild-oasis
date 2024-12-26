// import styled from "styled-components";
// // import { useState } from "react";

// // import CreateCabinForm from "./CreateCabinForm";
// import { formatCurrency } from "../../utils/helpers";
// import { deleteCabin } from "../../services/apiCabins";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import toast from "react-hot-toast";
// import { HiPencil, HiTrash } from "react-icons/hi2";
// import { useState } from "react";
// import CreateCabinForm from "./CreateCabinForm";
// // import { useDeleteCabin } from "./useDeleteCabin";
// // import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
// // import { useCreateCabin } from "./useCreateCabin";

// const TableRow = styled.div`
//   display: grid;
//   grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
//   column-gap: 2.4rem;
//   align-items: center;
//   padding: 1.4rem 2.4rem;

//   &:not(:last-child) {
//     border-bottom: 1px solid var(--color-grey-100);
//   }
// `;

// const Img = styled.img`
//   display: block;
//   width: 6.4rem;
//   aspect-ratio: 3 / 2;
//   object-fit: cover;
//   object-position: center;
//   transform: scale(1.5) translateX(-7px);
// `;

// const Cabin = styled.div`
//   font-size: 1.6rem;
//   font-weight: 600;
//   color: var(--color-grey-600);
//   font-family: "Sono";
// `;

// const Price = styled.div`
//   font-family: "Sono";
//   font-weight: 600;
// `;

// const Discount = styled.div`
//   font-family: "Sono";
//   font-weight: 500;
//   color: var(--color-green-700);
// `;

// function CabinRow({ cabin }) {
//   const [showForm, setShowForm] = useState(false);
//   // const { isDeleting, deleteCabin } = useDeleteCabin();
//   // const { isCreating, createCabin } = useCreateCabin();

//   const {
//     id: cabinId,
//     name,
//     maxCapacity,
//     regularPrice,
//     discount,
//     image,
//     description,
//   } = cabin;

//   // function handleDuplicate() {
//   //   createCabin({
//   //     name: `Copy of ${name}`,
//   //     maxCapacity,
//   //     regularPrice,
//   //     discount,
//   //     image,
//   //     description,
//   //   });
//   // }
//   const queryClient = useQueryClient();
//   const { isLoading: isDeleting, mutate } = useMutation({
//     mutationFn: deleteCabin,
//     onSuccess: () => {
//       toast.success("Cabin deleted successfully");
//       queryClient.invalidateQueries({ queryKey: ["cabins"] });
//     },
//     onError: (err) => toast.error(err.message),
//   });
//   return (
//     <>
//       <TableRow role="row">
//         <Img src={image} />
//         <Cabin>{name}</Cabin>
//         <div>Fits up to {maxCapacity} guests</div>
//         <Price>{formatCurrency(regularPrice)}</Price>
//         {discount ? (
//           <Discount>{formatCurrency(discount)}</Discount>
//         ) : (
//           <span>&mdash;</span>
//         )}

//         <div>
//           <button disabled={isCreating} onClick={handleDuplicate}>
//             <HiSquare2Stac />
//           </button>
//           <button onClick={() => setShowForm((show) => !show)}>
//             <HiPencil />
//           </button>
//           <button onClick={() => mutate(cabinId)} disabled={isDeleting}>
//             <HiTrash />
//           </button>
//         </div>
//       </TableRow>
//       {showForm && <CreateCabinForm cabinToEdit={cabin} />}
//     </>
//   );
// }

// export default CabinRow;
// import styled from "styled-components";
// import { useState } from "react";

// import CreateCabinForm from "./CreateCabinForm";
// import { useDeleteCabin } from "./useDeleteCabin";
// import { formatCurrency } from "../../utils/helpers";
// import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
// import { useCreateCabin } from "./useCreateCabin";

// const TableRow = styled.div`
//   display: grid;
//   grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
//   column-gap: 2.4rem;
//   align-items: center;
//   padding: 1.4rem 2.4rem;

//   &:not(:last-child) {
//     border-bottom: 1px solid var(--color-grey-100);
//   }
// `;

// const Img = styled.img`
//   display: block;
//   width: 6.4rem;
//   aspect-ratio: 3 / 2;
//   object-fit: cover;
//   object-position: center;
//   transform: scale(1.5) translateX(-7px);
// `;

// const Cabin = styled.div`
//   font-size: 1.6rem;
//   font-weight: 600;
//   color: var(--color-grey-600);
//   font-family: "Sono";
// `;

// const Price = styled.div`
//   font-family: "Sono";
//   font-weight: 600;
// `;

// const Discount = styled.div`
//   font-family: "Sono";
//   font-weight: 500;
//   color: var(--color-green-700);
// `;

// function CabinRow({ cabin }) {
//   const [showForm, setShowForm] = useState(false);
//   const { isDeleting, deleteCabin } = useDeleteCabin();
//   const { isCreating, createCabin } = useCreateCabin();

//   const {
//     id: cabinId,
//     name,
//     maxCapacity,
//     regularPrice,
//     discount,
//     image,
//     description,
//   } = cabin;

//   function handleDuplicate() {
//     createCabin({
//       name: `Copy of ${name}`,
//       maxCapacity,
//       regularPrice,
//       discount,
//       image,
//       description,
//     });
//   }

//   return (
//     <>
//       <TableRow role="row">
//         <Img src={image} />
//         <Cabin>{name}</Cabin>
//         <div>Fits up to {maxCapacity} guests</div>
//         <Price>{formatCurrency(regularPrice)}</Price>
//         {discount ? (
//           <Discount>{formatCurrency(discount)}</Discount>
//         ) : (
//           <span>&mdash;</span>
//         )}
//         <div>
//           <button disabled={isCreating} onClick={handleDuplicate}>
//             <HiSquare2Stack />
//           </button>
//           <button onClick={() => setShowForm((show) => !show)}>
//             <HiPencil />
//           </button>
//           <button onClick={() => deleteCabin(cabinId)} disabled={isDeleting}>
//             <HiTrash />
//           </button>
//         </div>
//       </TableRow>
//       {showForm && <CreateCabinForm cabinToEdit={cabin} />}
//     </>
//   );
// }

// export default CabinRow;
import styled from "styled-components";

import CreateCabinForm from "./CreateCabinForm";
import { useDeleteCabin } from "./useDeleteCabin";
import { formatCurrency } from "../../utils/helpers";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import { useCreateCabin } from "./useCreateCabin";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";

// const TableRow = styled.div`
//   display: grid;
//   grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
//   column-gap: 2.4rem;
//   align-items: center;
//   padding: 1.4rem 2.4rem;

//   &:not(:last-child) {
//     border-bottom: 1px solid var(--color-grey-100);
//   }
// `;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

function CabinRow({ cabin }) {
  const { isDeleting, deleteCabin } = useDeleteCabin();
  const { isCreating, createCabin } = useCreateCabin();

  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
    description,
  } = cabin;

  function handleDuplicate() {
    createCabin({
      name: `Copy of ${name}`,
      maxCapacity,
      regularPrice,
      discount,
      image,
      description,
    });
  }

  return (
    <Table.Row>
      <Img src={image} />
      <Cabin>{name}</Cabin>
      <div>Fits up to {maxCapacity} guests</div>
      <Price>{formatCurrency(regularPrice)}</Price>
      {discount ? (
        <Discount>{formatCurrency(discount)}</Discount>
      ) : (
        <span>&mdash;</span>
      )}
      <div>
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={cabinId} />

            <Menus.List id={cabinId}>
              <Menus.Button icon={<HiSquare2Stack />} onClick={handleDuplicate}>
                Duplicate
              </Menus.Button>

              <Modal.Open opens="edit">
                <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
              </Modal.Open>

              <Modal.Open opens="delete">
                <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
              </Modal.Open>
            </Menus.List>

            <Modal.Window name="edit">
              <CreateCabinForm cabinToEdit={cabin} />
            </Modal.Window>

            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName="cabins"
                disabled={isDeleting}
                onConfirm={() => deleteCabin(cabinId)}
              />
            </Modal.Window>
          </Menus.Menu>
        </Modal>
      </div>
    </Table.Row>
  );
}

export default CabinRow;