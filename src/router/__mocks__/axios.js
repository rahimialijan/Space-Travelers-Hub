export default {
  get: jest.fn().mockResolvedValue({
    data: {
      rockets: [
        { id: 1, name: 'Rocket 1' },
        { id: 2, name: 'Rocket 2' },
      ],
    },
  }),
};
