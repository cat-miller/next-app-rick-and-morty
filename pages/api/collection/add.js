import dbConnect from '../../../lib/dbConnect';
import CharacterModel from '../../../models/Character';

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === 'POST') {
    try {
      const newItem = await CharacterModel.create(req.body);
      /* create a new model in the database */
      res.status(201).json({ success: true, data: newItem });
    } catch (error) {
      res.status(400).json({ success: false });
    }
    return;
  }
  res.status(403).json({ message: 'Error: request method not allowed.' });
}
