test('sleep for 278 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 278));
});