import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  let body;
  let firstName;
  let lastName;

  uploadPhoto()
    .then((value) => {
      body = value.body;
      return createUser();
    })
    .then((value) => {
      firstName = value.firstName;
      lastName = value.lastName;
    })
    .catch(() => {
      console.log('Signup system offline');
    })
    .finally(() => {
      console.log(`${body} ${firstName} ${lastName}`);
    });
}
