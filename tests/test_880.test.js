test('sleep for 244 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 244));
});