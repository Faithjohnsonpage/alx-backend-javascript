import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  let body;
  let firstName;
  let lastName;

  Promise.all([uploadPhoto(), createUser()])
    .then(([photoResult, userResult]) => {
      body = photoResult.body;
      firstName = userResult.firstName;
      lastName = userResult.lastName;

      console.log(`${body} ${firstName} ${lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
