import { createUser, uploadPhoto } from './utils';

async function asyncUploadUser() {
  try {
    const [user, photo] = await Promise.all([
      createUser(),
      uploadPhoto(),
    ]);

    return { photo, user };
  } catch (err) {
    return { photo: null, user: null };
  }
}

export default asyncUploadUser;
