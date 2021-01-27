/* eslint-disable import/prefer-default-export */
import express from 'express';
import StudentModel from '../models/studentModel.js';

const routes = express();

routes.post('/', async (request, response) => {
  try {
    const student = new StudentModel(request.body);

    await student.save();

    response.send(student);
  } catch (error) {
    response.status(500).send(error);
  }
});

routes.get('/', async (request, response) => {
  try {
    const student = await StudentModel.find({});

    response.send(student);
  } catch (error) {
    response.status(500).send(error);
  }
});

routes.patch('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const student = await StudentModel.findByIdAndUpdate(
      { _id: id },
      request.body,
      {
        new: true,
      },
    );

    response.send(student);
  } catch (error) {
    response.status(500).send(error);
  }
});

routes.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const student = await StudentModel.findByIdAndDelete({ _id: id });

    if (!student) {
      response.status(404).send('Documento não encontrado na coleção');
    } else {
      response.status(200).send();
    }
  } catch (error) {
    response.status(500).send(error);
  }
});

export { routes as studentRouter };
