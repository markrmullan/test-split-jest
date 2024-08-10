test('sleep for 646 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 646));
});