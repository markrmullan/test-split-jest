test('sleep for 554 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 554));
});