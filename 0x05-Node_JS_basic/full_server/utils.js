import { promises as fs } from 'fs';

async function readDatabase(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const students = {};
    const lines = data.split('\n').slice(1); // skip header

    for (const line of lines) {
      if (line.trim()) {
        const fields = line.split(',');
        const firstName = fields[0].trim();
        const field = fields[3];

        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstName);
      }
    }

    return students;
  } catch (error) {
    throw new error('Cannot load database');
  }
}

export default readDatabase;
