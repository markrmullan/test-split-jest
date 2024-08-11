test('sleep for 328 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 328));
});