test('sleep for 605 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 605));
});