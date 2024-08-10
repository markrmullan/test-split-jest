test('sleep for 589 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 589));
});