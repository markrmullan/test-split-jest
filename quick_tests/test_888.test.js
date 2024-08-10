test('sleep for 539 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 539));
});