import mongoose from 'mongoose';

/* PetSchema will correspond to a collection in your MongoDB database. */
const CharacterSchema = new mongoose.Schema({
  name: {
    /* The name of this user */

    type: String,
    required: [true, 'Please provide a name for this user.'],
    maxlength: [60, 'Name cannot be more than 60 characters'],
  },
  status: {
    /* User's age, if applicable */

    type: String,
  },
});

const CharacterModel =
  mongoose.models.Character || mongoose.model('Character', CharacterSchema);
// const model = mongoose.models.CURRY || mongoose.model('CURRY', UserSchema);
export default CharacterModel;
