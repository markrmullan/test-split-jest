test('sleep for 118 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 118));
});