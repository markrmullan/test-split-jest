test('sleep for 979 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 979));
});