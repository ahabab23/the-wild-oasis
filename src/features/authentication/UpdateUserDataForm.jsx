// // // import { useUser } from 'features/authentication/useUser';
// // // import { useState } from 'react';
// // // import Button from 'ui/Button';
// // // import FileInput from 'ui/FileInput';
// // // import Form from 'ui/Form';
// // // import FormRow from 'ui/FormRow';
// // // import Input from 'ui/Input';
// // // import { useUpdateUser } from './useUpdateUser';

// // // function UpdateUserDataForm() {
// // //   // We don't need the loading state
// // //   const {
// // //     user: {
// // //       email,
// // //       user_metadata: { fullName: currentFullName },
// // //     },
// // //   } = useUser();

// // //   const [fullName, setFullName] = useState(currentFullName);
// // //   const [avatar, setAvatar] = useState(null);

// // //   const { mutate: updateUser, isLoading: isUpdating } = useUpdateUser();

// // //   function handleSubmit(e) {
// // //     e.preventDefault();
// // //     if (!fullName) return;

// // //     updateUser(
// // //       { fullName, avatar },
// // //       {
// // //         onSuccess: () => {
// // //           setAvatar(null);
// // //           // Resetting form using .reset() that's available on all HTML form elements, otherwise the old filename will stay displayed in the UI
// // //           e.target.reset();
// // //         },
// // //       }
// // //     );
// // //   }

// // //   function handleCancel(e) {
// // //     // We don't even need preventDefault because this button was designed to reset the form (remember, it has the HTML attribute 'reset')
// // //     setFullName(currentFullName);
// // //     setAvatar(null);
// // //   }

// // //   return (
// // //     <Form onSubmit={handleSubmit}>
// // //       <FormRow label='Email address'>
// // //         <Input value={email} disabled />
// // //       </FormRow>
// // //       <FormRow label='Full name'>
// // //         <Input
// // //           type='text'
// // //           value={fullName}
// // //           onChange={(e) => setFullName(e.target.value)}
// // //           disabled={isUpdating}
// // //           id='fullName'
// // //         />
// // //       </FormRow>
// // //       <FormRow label='Avatar image'>
// // //         <FileInput
// // //           disabled={isUpdating}
// // //           id='avatar'
// // //           accept='image/*'
// // //           onChange={(e) => setAvatar(e.target.files[0])}
// // //           // We should also validate that it's actually an image, but never mind
// // //         />
// // //       </FormRow>
// // //       <FormRow>
// // //         <Button onClick={handleCancel} type='reset' variation='secondary'>
// // //           Cancel
// // //         </Button>
// // //         <Button disabled={isUpdating}>Update account</Button>
// // //       </FormRow>
// // //     </Form>
// // //   );
// // // }

// // // export default UpdateUserDataForm;
// // import { useState } from "react";

// // import Button from "../../ui/Button";
// // import FileInput from "../../ui/FileInput";
// // import Form from "../../ui/Form";
// // import FormRow from "../../ui/FormRow";
// // import Input from "../../ui/Input";

// // import { useUser } from "./useUser";
// // import { useUpdateUser } from "./useUpdateUser";

// // function UpdateUserDataForm() {
// //   // We don't need the loading state, and can immediately use the user data, because we know that it has already been loaded at this point
// //   const {
// //     user: {
// //       email,
// //       user_metadata: { fullName: currentFullName },
// //     },
// //   } = useUser();

// //   const { updateUser, isUpdating } = useUpdateUser();

// //   const [fullName, setFullName] = useState(currentFullName);
// //   const [avatar, setAvatar] = useState(null);

// //   function handleSubmit(e) {
// //     e.preventDefault();
// //     if (!fullName) return;
// //     updateUser(
// //       { fullName, avatar },
// //       {
// //         onSuccess: () => {
// //           setAvatar(null);
// //           e.target.reset();
// //         },
// //       }
// //     );
// //   }

// //   function handleCancel() {
// //     setFullName(currentFullName);
// //     setAvatar(null);
// //   }

// //   return (
// //     <Form onSubmit={handleSubmit}>
// //       <FormRow label="Email address">
// //         <Input value={email} disabled />
// //       </FormRow>

// //       <FormRow label="Full name">
// //         <Input
// //           type="text"
// //           value={fullName}
// //           onChange={(e) => setFullName(e.target.value)}
// //           id="fullName"
// //           disabled={isUpdating}
// //         />
// //       </FormRow>

// //       <FormRow label="Avatar image">
// //         <FileInput
// //           id="avatar"
// //           accept="image/*"
// //           onChange={(e) => setAvatar(e.target.files[0])}
// //           disabled={isUpdating}
// //         />
// //       </FormRow>

// //       <FormRow>
// //         <Button
// //           type="reset"
// //           variation="secondary"
// //           disabled={isUpdating}
// //           onClick={handleCancel}
// //         >
// //           Cancel
// //         </Button>
// //         <Button disabled={isUpdating}>Update account</Button>
// //       </FormRow>
// //     </Form>
// //   );
// // }

// // export default UpdateUserDataForm;
// import { useForm } from "react-hook-form";
// import Button from "../../ui/Button";
// import Form from "../../ui/Form";
// import FormRow from "../../ui/FormRow";
// import Input from "../../ui/Input";

// import { useUpdateUser } from "./useUpdateUser";

// function UpdatePasswordForm() {
//   const { register, handleSubmit, formState, getValues, reset } = useForm();
//   const { errors } = formState;

//   const { updateUser, isUpdating } = useUpdateUser();

//   function onSubmit({ password }) {
//     updateUser({ password }, { onSuccess: reset });
//   }

//   return (
//     <Form onSubmit={handleSubmit(onSubmit)}>
//       <FormRow
//         label="New password (min 8 chars)"
//         error={errors?.password?.message}
//       >
//         <Input
//           type="password"
//           id="password"
//           autoComplete="current-password"
//           disabled={isUpdating}
//           {...register("password", {
//             required: "This field is required",
//             minLength: {
//               value: 8,
//               message: "Password needs a minimum of 8 characters",
//             },
//           })}
//         />
//       </FormRow>

//       <FormRow
//         label="Confirm password"
//         error={errors?.passwordConfirm?.message}
//       >
//         <Input
//           type="password"
//           autoComplete="new-password"
//           id="passwordConfirm"
//           disabled={isUpdating}
//           {...register("passwordConfirm", {
//             required: "This field is required",
//             validate: (value) =>
//               getValues().password === value || "Passwords need to match",
//           })}
//         />
//       </FormRow>
//       <FormRow>
//         <Button onClick={reset} type="reset" variation="secondary">
//           Cancel
//         </Button>
//         <Button disabled={isUpdating}>Update password</Button>
//       </FormRow>
//     </Form>
//   );
// }

// export default UpdatePasswordForm;
import { useState } from "react";

import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

import { useUser } from "./useUser";
import { useUpdateUser } from "./useUpdateUser";

function UpdateUserDataForm() {
  // We don't need the loading state, and can immediately use the user data, because we know that it has already been loaded at this point
  const {
    user: {
      email,
      user_metadata: { fullName: currentFullName },
    },
  } = useUser();

  const { updateUser, isUpdating } = useUpdateUser();

  const [fullName, setFullName] = useState(currentFullName);
  const [avatar, setAvatar] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (!fullName) return;
    updateUser(
      { fullName, avatar },
      {
        onSuccess: () => {
          setAvatar(null);
          e.target.reset();
        },
      }
    );
  }

  function handleCancel() {
    setFullName(currentFullName);
    setAvatar(null);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="Email address">
        <Input value={email} disabled />
      </FormRow>

      <FormRow label="Full name">
        <Input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          id="fullName"
          disabled={isUpdating}
        />
      </FormRow>

      <FormRow label="Avatar image">
        <FileInput
          id="avatar"
          accept="image/*"
          onChange={(e) => setAvatar(e.target.files[0])}
          disabled={isUpdating}
        />
      </FormRow>

      <FormRow>
        <Button
          type="reset"
          variation="secondary"
          disabled={isUpdating}
          onClick={handleCancel}
        >
          Cancel
        </Button>
        <Button disabled={isUpdating}>Update account</Button>
      </FormRow>
    </Form>
  );
}

export default UpdateUserDataForm;
