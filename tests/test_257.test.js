test('sleep for 66 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 66));
});