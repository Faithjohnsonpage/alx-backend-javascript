import readDatabase from '../utils.js';

class StudentsController {
  static async getAllStudents(req, res) {
    const databaseFile = process.argv[2]; // file is passed as CLI arg

    try {
      const students = await readDatabase(databaseFile);

      const sortedFields = Object.keys(students).sort((a, b) =>
        a.toLowerCase().localeCompare(b.toLowerCase())
      );

      const lines = ['This is the list of our students'];
      for (const field of sortedFields) {
        const list = students[field];
        lines.push(
          `Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`
        );
      }

      res.status(200).send(lines.join('\n'));
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const databaseFile = process.argv[2];
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      return response.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const students = await readDatabase(databaseFile);
      const names = students[major] || [];
      return response.status(200).send(`List: ${names.join(', ')}`);
    } catch (err) {
      return response.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
