import dbConnect from '../../../lib/dbConnect';
import Character from '../../../models/Character';

// req = request
// res = response
export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  if (method === 'GET') {
    try {
      const characters = await Character.find(
        {}
      ); /* find all the data in our database */
      res.status(200).json({ success: true, data: characters });
    } catch (error) {
      res.status(400).json({ success: false });
    }
    return;
  }

  if (method === 'POST') {
    try {
      const character = await Character.create(
        req.body
      ); /* create a new model in the database */
      res.status(201).json({ success: true, data: character });
    } catch (error) {
      res.status(400).json({ success: false });
    }
    return;
  }

  res.status(403).json({ mesage: 'Method is not available' });

  //   switch (method) {
  //     case 'GET':
  //       break;
  //     case 'POST':
  //       break;
  //     default:
  //       res.status(403).json({ mesage: 'Method is not available' });
  //       break;
  //   }
}
